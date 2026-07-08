/**
 * Personal LeetCode full-solve-history proxy, for Cloudflare Workers (free tier).
 *
 * WHY THIS EXISTS
 * ----------------
 * LeetCode's own site fetches your solved-problem list via an authenticated
 * GraphQL call (leetcode.com/graphql/) using your LEETCODE_SESSION cookie.
 * Two things make this impossible to do directly from a browser tab on any
 * other site:
 *   1. leetcode.com/graphql/ has no CORS allow-origin for third-party sites,
 *      so the browser blocks the response even if the request is sent.
 *   2. Browsers refuse to let JavaScript set an arbitrary `Cookie:` header on
 *      an outgoing fetch() -- you cannot "paste in" someone else's session
 *      cookie and attach it to a request the way curl/a server can.
 * A small server that YOU control is the only way around this: it receives
 * your session cookie as plain request data (not as a browser cookie), then
 * attaches it as a real Cookie header on its OWN server-to-server request to
 * LeetCode. That's all this file does.
 *
 * DEPLOYMENT (one-time, ~5 minutes, free)
 * -----------------------------------------
 * 1. Go to https://dash.cloudflare.com/ and sign up (free, no credit card).
 * 2. Workers & Pages -> Create -> Create Worker -> give it any name (e.g.
 *    "leetcode-proxy") -> Deploy (it'll deploy a placeholder first).
 * 3. Click "Edit code", delete everything in the editor, paste this entire
 *    file's contents in, then click "Deploy".
 * 4. Copy the worker's URL (shown at the top, looks like
 *    https://leetcode-proxy.YOUR-SUBDOMAIN.workers.dev) -- that's what goes
 *    into the "Worker URL" field in the site's Accounts panel.
 * 5. (Optional but recommended) Workers & Pages -> your worker -> Settings ->
 *    Variables -> add an environment variable ALLOWED_ORIGIN set to your
 *    site's exact URL (e.g. https://YOUR-GH-USERNAME.github.io) so the
 *    worker only ever answers requests from your own site, not anyone else
 *    who finds the URL.
 *
 * USAGE
 * -----
 * POST { sessionCookie, csrfToken } as JSON to the worker URL. Returns
 * { count, slugs: [...] } -- slugs is every problem's titleSlug where your
 * status is "ac" (accepted), across your ENTIRE solve history, not just
 * recent submissions.
 *
 * PRIVACY NOTE
 * ------------
 * Your session cookie is a bearer credential for your LeetCode account --
 * treat it like a password. This worker only relays it to leetcode.com and
 * never logs or stores it; the code is short enough to read end-to-end and
 * verify that yourself before deploying it under your own Cloudflare
 * account, which is exactly the point of self-hosting this instead of using
 * someone else's already-running proxy.
 */

const QUESTION_LIST_QUERY = `
query problemsetQuestionList($categorySlug: String, $limit: Int, $skip: Int, $filters: QuestionListFilterInput) {
  problemsetQuestionList: questionList(
    categorySlug: $categorySlug
    limit: $limit
    skip: $skip
    filters: $filters
  ) {
    total: totalNum
    questions: data {
      status
      titleSlug
    }
  }
}
`;

const PAGE_SIZE = 100;
const MAX_PAGES = 45; // stays comfortably under the free-tier subrequest cap

export default {
  async fetch(request, env) {
    const allowOrigin = env.ALLOWED_ORIGIN || "*";
    const corsHeaders = {
      "Access-Control-Allow-Origin": allowOrigin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }
    if (request.method !== "POST") {
      return new Response("POST only", { status: 405, headers: corsHeaders });
    }

    let sessionCookie, csrfToken;
    try {
      const body = await request.json();
      sessionCookie = body.sessionCookie;
      csrfToken = body.csrfToken;
    } catch {
      return new Response(JSON.stringify({ error: "Bad JSON body" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!sessionCookie) {
      return new Response(JSON.stringify({ error: "sessionCookie required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const cookieHeader = csrfToken
      ? `LEETCODE_SESSION=${sessionCookie}; csrftoken=${csrfToken}`
      : `LEETCODE_SESSION=${sessionCookie}`;

    const solvedSlugs = [];
    let skip = 0;
    let total = Infinity;

    try {
      for (let page = 0; page < MAX_PAGES && skip < total; page++) {
        const res = await fetch("https://leetcode.com/graphql/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Cookie: cookieHeader,
            ...(csrfToken ? { "x-csrftoken": csrfToken } : {}),
            Referer: "https://leetcode.com/problemset/all/",
          },
          body: JSON.stringify({
            query: QUESTION_LIST_QUERY,
            variables: { categorySlug: "", skip, limit: PAGE_SIZE, filters: {} },
          }),
        });

        if (!res.ok) {
          return new Response(
            JSON.stringify({ error: `LeetCode responded ${res.status} -- session cookie is likely expired or invalid` }),
            { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }

        const json = await res.json();
        const data = json.data && json.data.problemsetQuestionList;
        if (!data) {
          return new Response(JSON.stringify({ error: "Unexpected LeetCode response shape", raw: json }), {
            status: 502,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }

        total = data.total;
        for (const q of data.questions) {
          if (q.status === "ac") solvedSlugs.push(q.titleSlug);
        }
        skip += PAGE_SIZE;
      }
    } catch (e) {
      return new Response(JSON.stringify({ error: String(e) }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ count: solvedSlugs.length, slugs: solvedSlugs }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  },
};
