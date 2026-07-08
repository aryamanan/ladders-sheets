import { firebaseConfig } from "./firebase-config.js";

const LOCAL_KEY = "practice-tracker-solved-v1";
const STARRED_KEY = "practice-tracker-starred-v1";
const PRACTICE_LOG_KEY = "practice-tracker-practice-log-v1";
const RECAP_SKIPPED_KEY = "practice-tracker-recap-skipped-v1";
const FIREBASE_SDK = "https://www.gstatic.com/firebasejs/10.13.0";

const appEl = document.getElementById("app");
const syncStatusEl = document.getElementById("sync-status");
const signinBtn = document.getElementById("signin-btn");
const progressBarWrap = document.getElementById("sheet-progress");
const progressBarFill = document.getElementById("sheet-progress-fill");

let data = { sheets: [] };
// `solved[id]` is a timestamp (ms since epoch) once solved, not just `true`
// -- this doubles as "last solved when" without a separate data structure,
// and every existing `if (solved[id])`/`!!solved[id]` truthiness check
// still works unchanged since any positive number is truthy.
let solved = loadLocalSolved();
let starred = loadLocalStarred();
// `practiceLog[id] = { count, lastAt }` -- separate from `solved`, this
// tracks REPEAT practice on an already-solved item (spaced-repetition
// style redrilling), not the first solve. `lastAt` here supersedes
// `solved[id]`'s timestamp as "last touched" once it exists, since
// re-practicing is more recent than the original solve.
let practiceLog = loadPracticeLog();

function loadPracticeLog() {
  try {
    return JSON.parse(localStorage.getItem(PRACTICE_LOG_KEY) || "{}");
  } catch {
    return {};
  }
}

function savePracticeLog() {
  localStorage.setItem(PRACTICE_LOG_KEY, JSON.stringify(practiceLog));
}

function lastTouchedAt(id) {
  const log = practiceLog[id];
  if (log && log.lastAt) return log.lastAt;
  return typeof solved[id] === "number" ? solved[id] : null;
}

function practiceCount(id) {
  return (practiceLog[id] && practiceLog[id].count) || 0;
}

function incrementPractice(id) {
  const cur = practiceLog[id] || { count: 0 };
  practiceLog[id] = { count: cur.count + 1, lastAt: Date.now() };
  savePracticeLog();
  scheduleCloudWrite();
  // Update every visible copy of this row in place (an item can appear more
  // than once on screen, e.g. Starred view) rather than a full re-render.
  document.querySelectorAll(`[data-item-row="${id}"]`).forEach((row) => {
    const btn = row.querySelector(".practice-btn");
    if (btn) btn.textContent = `🔁 ${practiceCount(id)}`;
    const touched = row.querySelector(".last-touched");
    if (touched) touched.textContent = relativeTimeLabel(lastTouchedAt(id));
  });
}

// `recapSkipped[id] = true` permanently excludes an item from the "oldest
// solved" home-page recommender -- for a problem that's too basic to be
// worth re-drilling but is old enough to otherwise hog a slot in the list.
// Scoped only to that recommender; doesn't affect Starred/Most Practiced/
// the sheet itself.
let recapSkipped = loadRecapSkipped();

function loadRecapSkipped() {
  try {
    return JSON.parse(localStorage.getItem(RECAP_SKIPPED_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveRecapSkipped() {
  localStorage.setItem(RECAP_SKIPPED_KEY, JSON.stringify(recapSkipped));
}

function skipFromRecap(id) {
  recapSkipped[id] = true;
  saveRecapSkipped();
  scheduleCloudWrite();
  const panel = document.querySelector(".recap-panel");
  if (panel) panel.outerHTML = renderRepracticeRecommender();
}

// ---------- Linked-platform "solved elsewhere" marks ----------
// Read-only cross-reference against the user's real LeetCode account --
// deliberately never touches `solved` (that stays 100% manual, per
// explicit instruction). Cached in localStorage since it requires a
// network round trip most of the sheet-rendering code shouldn't have to
// wait on.
const PLATFORM_KEY = "practice-tracker-platform-solved-v1";
const LC_USERNAME_KEY = "practice-tracker-lc-username";
// Community-hosted proxy: leetcode.com's own GraphQL API has no public
// CORS support, so direct browser fetches to it are blocked. This is the
// standard workaround the LC community uses for exactly this reason --
// best-effort, not an official/guaranteed-uptime API. Known limitation
// (a LeetCode platform limit, not fixable client-side): its acSubmission
// endpoint only returns your ~20 most recent accepted submissions, not
// your full solve history -- there's no public LC API that exposes
// all-time solved slugs without an authenticated session.
const LC_PROXY_BASE = "https://alfa-leetcode-api.onrender.com";

function loadPlatformSolved() {
  try {
    const raw = JSON.parse(localStorage.getItem(PLATFORM_KEY) || "{}");
    return { lc: new Set(raw.lc || []) };
  } catch {
    return { lc: new Set() };
  }
}

function savePlatformSolved() {
  localStorage.setItem(PLATFORM_KEY, JSON.stringify({ lc: [...platformSolved.lc] }));
}

let platformSolved = loadPlatformSolved();

function lcSlugFromUrl(url) {
  const m = url && url.match(/^https?:\/\/leetcode\.com\/problems\/([a-z0-9\-]+)\/?/);
  return m ? m[1] : null;
}

function platformBadgeHtml(item) {
  if (!item.url) return "";
  const lcSlug = lcSlugFromUrl(item.url);
  if (lcSlug && platformSolved.lc.has(lcSlug)) {
    return `<span class="platform-badge" title="Already solved on LeetCode">LC ✓</span>`;
  }
  return "";
}

async function syncPlatformSolved() {
  const statusEl = document.getElementById("accounts-sync-status");
  const lcUsername = (document.getElementById("lc-username-input").value || "").trim();
  localStorage.setItem(LC_USERNAME_KEY, lcUsername);

  if (!lcUsername) {
    if (statusEl) statusEl.textContent = "Enter a LeetCode username first.";
    return;
  }
  if (statusEl) statusEl.textContent = "Syncing… (proxy can take ~30s to wake up if it's been idle)";

  try {
    const res = await fetch(`${LC_PROXY_BASE}/${encodeURIComponent(lcUsername)}/acSubmission?limit=2000`);
    const json = await res.json();
    const submissions = json.submission || json.acSubmission || [];
    const solved = new Set();
    for (const sub of submissions) {
      if (sub.titleSlug) solved.add(sub.titleSlug);
    }
    platformSolved.lc = solved;
    savePlatformSolved();
    if (statusEl) {
      statusEl.textContent = solved.size
        ? `Found ${solved.size} recent solved problem(s). Note: this only covers your ~20 most recent LeetCode submissions -- LeetCode's API doesn't expose full solve history publicly.`
        : "No recent submissions found -- check the username, or your LeetCode privacy settings may hide submissions.";
    }
    render(); // re-render current view so badges show up immediately
  } catch (e) {
    console.warn("LeetCode sync failed", e);
    if (statusEl) statusEl.textContent = "Failed -- proxy may be asleep/down, try again in a moment.";
  }
}

// Firebase (optional; app fully works without it via localStorage only)
let auth = null;
let db = null;
let googleProvider = null;
let fsMod = null;
let authMod = null;
let user = null;
let firstSnapshotHandled = false;
let unsubscribeSnapshot = null;
let writeTimer = null;

function loadLocalSolved() {
  let raw;
  try {
    raw = JSON.parse(localStorage.getItem(LOCAL_KEY) || "{}");
  } catch {
    return {};
  }
  return migrateLegacySolved(raw);
}

// Older saved state marked a solved item as `solved[id] = true`, before
// solving also recorded a timestamp. Those items are real, already-solved
// problems -- treat them as solved "before tracking began" (epoch 0) so
// they still count everywhere a timestamp is read (the oldest-solved
// recommender), rather than silently vanishing from it.
function migrateLegacySolved(obj) {
  let changed = false;
  for (const id in obj) {
    if (obj[id] === true) {
      obj[id] = 0;
      changed = true;
    }
  }
  if (changed) localStorage.setItem(LOCAL_KEY, JSON.stringify(obj));
  return obj;
}

function saveLocalSolved() {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(solved));
}

function loadLocalStarred() {
  try {
    return JSON.parse(localStorage.getItem(STARRED_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveLocalStarred() {
  localStorage.setItem(STARRED_KEY, JSON.stringify(starred));
}

function isPlaceholderConfig() {
  return !firebaseConfig.apiKey || firebaseConfig.apiKey.startsWith("YOUR_");
}

async function initFirebase() {
  if (isPlaceholderConfig()) {
    syncStatusEl.textContent = "Cloud sync not configured";
    signinBtn.disabled = true;
    signinBtn.title = "Add your Firebase config to docs/firebase-config.js to enable cross-device sync.";
    return;
  }
  try {
    const [appMod, aMod, fMod] = await Promise.all([
      import(`${FIREBASE_SDK}/firebase-app.js`),
      import(`${FIREBASE_SDK}/firebase-auth.js`),
      import(`${FIREBASE_SDK}/firebase-firestore.js`),
    ]);
    authMod = aMod;
    fsMod = fMod;
    const app = appMod.initializeApp(firebaseConfig);
    auth = authMod.getAuth(app);
    googleProvider = new authMod.GoogleAuthProvider();
    db = fsMod.getFirestore(app);
    authMod.onAuthStateChanged(auth, onAuthChanged);
    syncStatusEl.textContent = "Not signed in — saved to this browser only";
  } catch (e) {
    console.warn("Firebase init failed", e);
    syncStatusEl.textContent = "Cloud sync unavailable";
    signinBtn.disabled = true;
  }
}

function onAuthChanged(u) {
  user = u;
  if (unsubscribeSnapshot) {
    unsubscribeSnapshot();
    unsubscribeSnapshot = null;
  }
  firstSnapshotHandled = false;
  if (user) {
    signinBtn.textContent = "Sign out";
    syncStatusEl.textContent = `Syncing as ${user.email || user.displayName}`;
    subscribeToCloud(user.uid);
  } else {
    signinBtn.textContent = "Sign in with Google";
    syncStatusEl.textContent = "Not signed in — saved to this browser only";
  }
}

function subscribeToCloud(uid) {
  const ref = fsMod.doc(db, "users", uid);
  unsubscribeSnapshot = fsMod.onSnapshot(
    ref,
    (snap) => {
      const remoteSolved = migrateLegacySolved(snap.exists() ? snap.data().solved || {} : {});
      const remoteStarred = snap.exists() ? snap.data().starred || {} : {};
      const remotePracticeLog = snap.exists() ? snap.data().practiceLog || {} : {};
      const remoteRecapSkipped = snap.exists() ? snap.data().recapSkipped || {} : {};
      if (!firstSnapshotHandled) {
        firstSnapshotHandled = true;
        solved = { ...remoteSolved, ...solved };
        starred = { ...remoteStarred, ...starred };
        practiceLog = { ...remotePracticeLog, ...practiceLog };
        recapSkipped = { ...remoteRecapSkipped, ...recapSkipped };
        saveLocalSolved();
        saveLocalStarred();
        savePracticeLog();
        saveRecapSkipped();
        writeCloudNow();
      } else {
        solved = remoteSolved;
        starred = remoteStarred;
        practiceLog = remotePracticeLog;
        recapSkipped = remoteRecapSkipped;
        saveLocalSolved();
        saveLocalStarred();
        savePracticeLog();
        saveRecapSkipped();
      }
      refreshAllCounts();
    },
    (err) => {
      console.warn("Cloud sync error", err);
      syncStatusEl.textContent = "Sync error — using local copy";
    }
  );
}

function scheduleCloudWrite() {
  if (!user) return;
  clearTimeout(writeTimer);
  writeTimer = setTimeout(writeCloudNow, 400);
}

function writeCloudNow() {
  if (!user || !db) return;
  fsMod
    .setDoc(fsMod.doc(db, "users", user.uid), { solved, starred, practiceLog, recapSkipped, updatedAt: Date.now() })
    .catch((e) => console.warn("Cloud write failed", e));
}

signinBtn.addEventListener("click", async () => {
  if (isPlaceholderConfig() || !auth) return;
  if (user) {
    await authMod.signOut(auth);
  } else {
    try {
      await authMod.signInWithPopup(auth, googleProvider);
    } catch (e) {
      console.warn("Sign-in failed", e);
      syncStatusEl.textContent = "Sign-in failed — try again";
    }
  }
});

// ---------- Data loading ----------

async function loadData() {
  const res = await fetch("data.json", { cache: "no-store" });
  data = await res.json();
}

function findSheet(id) {
  return data.sheets.find((s) => s.id === id);
}

function sheetStats(sheet) {
  let total = 0;
  let done = 0;
  for (const sec of sheet.sections) {
    for (const g of sec.groups) {
      for (const sg of g.subgroups) {
        for (const it of sg.items) {
          total++;
          if (solved[it.id]) done++;
        }
      }
    }
  }
  return { total, done };
}

// Counts solved/total per difficulty, restricted to items that actually
// have a known difficulty (non-LeetCode items without one are excluded
// from both the numerator and denominator, not counted as "unsolved Easy").
function sheetDifficultyStats(sheet) {
  const stats = {
    E: { done: 0, total: 0 },
    M: { done: 0, total: 0 },
    H: { done: 0, total: 0 },
  };
  for (const sec of sheet.sections) {
    for (const g of sec.groups) {
      for (const sg of g.subgroups) {
        for (const it of sg.items) {
          if (!it.difficulty || !stats[it.difficulty]) continue;
          stats[it.difficulty].total++;
          if (solved[it.id]) stats[it.difficulty].done++;
        }
      }
    }
  }
  return stats;
}

// A LeetCode-style ring: the track is 100% of every difficulty-tagged item
// in the sheet, and the colored arcs show how much of that ring is solved,
// broken down by difficulty (Easy arc, then Medium, then Hard, back to
// back around the circle) -- so the total filled fraction is "solved with
// known difficulty / total with known difficulty," subdivided by color.
function renderDifficultyDonut(stats) {
  const totalAll = stats.E.total + stats.M.total + stats.H.total;
  if (totalAll === 0) return "";
  const doneAll = stats.E.done + stats.M.done + stats.H.done;
  const r = 26;
  const circumference = 2 * Math.PI * r;
  let offset = 0;
  const order = [["E", "var(--diff-easy-fg)"], ["M", "var(--diff-medium-fg)"], ["H", "var(--diff-hard-fg)"]];
  const arcs = order
    .map(([code, color]) => {
      const frac = stats[code].done / totalAll;
      const len = frac * circumference;
      const dasharray = `${len} ${circumference - len}`;
      const dashoffset = -offset;
      offset += len;
      if (len <= 0) return "";
      return `<circle class="donut-arc" cx="32" cy="32" r="${r}" stroke="${color}" stroke-dasharray="${dasharray}" stroke-dashoffset="${dashoffset}" />`;
    })
    .join("");
  const legend = order
    .map(([code, color]) => {
      const s = stats[code];
      if (!s.total) return "";
      return `<div class="donut-legend-row"><span class="donut-dot" style="background:${color}"></span>${DIFF_LABEL[code]} <strong>${s.done}</strong> / ${s.total}</div>`;
    })
    .join("");
  return `
    <div class="difficulty-donut">
      <div class="donut-ring-wrap">
        <svg viewBox="0 0 64 64" width="64" height="64">
          <circle class="donut-track" cx="32" cy="32" r="${r}" />
          ${arcs}
        </svg>
        <div class="donut-center">${doneAll}<span>/${totalAll}</span></div>
      </div>
      <div class="donut-legend">${legend}</div>
    </div>
  `;
}

function sectionStats(section) {
  let total = 0;
  let done = 0;
  for (const g of section.groups) {
    for (const sg of g.subgroups) {
      for (const it of sg.items) {
        total++;
        if (solved[it.id]) done++;
      }
    }
  }
  return { total, done };
}

// ---------- Routing ----------

function parseHash() {
  const h = location.hash.replace(/^#\/?/, "");
  if (h.startsWith("sheet/")) {
    return { view: "sheet", id: h.slice("sheet/".length) };
  }
  if (h === "starred") {
    return { view: "starred" };
  }
  if (h === "most-practiced") {
    return { view: "most-practiced" };
  }
  return { view: "home" };
}

function render() {
  const route = parseHash();
  if (route.view === "sheet" && findSheet(route.id)) {
    progressBarWrap.hidden = false;
    renderSheet(findSheet(route.id));
  } else if (route.view === "starred") {
    progressBarWrap.hidden = true;
    renderStarred();
  } else if (route.view === "most-practiced") {
    progressBarWrap.hidden = true;
    renderMostPracticed();
  } else {
    progressBarWrap.hidden = true;
    renderHome();
  }
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", render);

// ---------- Home view ----------

// Curated links to well-known external sheets -- not parsed from markdown,
// so they carry no checkable items or progress; just a bookmark card that
// opens the official resource in a new tab. `tier: "gold"/"silver"` gets a
// faded metallic treatment for the goldmine-tier resources; `links` (instead
// of a single `url`) renders a card with more than one clickable target.
const EXTERNAL_RESOURCES = {
  dsa: [
    { title: "LeetCode 75", desc: "LeetCode's official 75-problem interview study plan.", url: "https://leetcode.com/studyplan/leetcode-75/" },
    { title: "LeetCode Interview 150", desc: "LeetCode's own curated interview study plan.", url: "https://leetcode.com/studyplan/top-interview-150/" },
    { title: "NeetCode 150", desc: "Blind 75 plus 75 more, each with a free video solution.", url: "https://neetcode.io/practice/practice/neetcode150" },
    { title: "Sean Prashad's Patterns", desc: "LeetCode problems grouped by the underlying pattern.", url: "https://seanprashad.com/leetcode-patterns/", tier: "gold" },
    { title: "Love Babbar 450 (via Codolio)", desc: "The well-known 450 DSA sheet, tracked on Codolio.", url: "https://codolio.com/question-tracker/sheet/love-babbar-sheet" },
    { title: "Striver's A2Z Sheet", desc: "TakeUForward's structured A-to-Z DSA course sheet.", url: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z", tier: "silver" },
  ],
  sql: [
    { title: "practice-sql.com", desc: "Free, browser-run SQL practice problems.", url: "https://www.practice-sql.com/sql-practice" },
    { title: "StrataScratch", desc: "Real data-interview SQL (and Python) questions from actual companies.", url: "https://platform.stratascratch.com", tier: "gold" },
    { title: "DataLemur", desc: "SQL interview questions asked at FAANG and top data-eng/analytics teams.", url: "https://datalemur.com", tier: "silver" },
    { title: "SQLClimber", desc: "Structured SQL assignments building up in difficulty.", url: "https://www.sqlclimber.com/assignments/", tier: "gold" },
    { title: "InterviewQuery SQL", desc: "SQL questions specifically from data-role interview loops.", url: "https://www.interviewquery.com/questions?tags=SQL" },
    { title: "HackerRank SQL", desc: "HackerRank's own SQL practice domain.", url: "https://www.hackerrank.com/domains/sql" },
    { title: "W3Schools SQL", desc: "Reference + a huge bank of small try-it-yourself SQL exercises.", url: "https://www.w3schools.com/sql/" },
  ],
  cp: [
    { title: "YouKn0wWho's Topic List", desc: "The competitive-programming goldmine: a huge topic-wise curated problem list.", url: "https://youkn0wwho.academy/topic-list", tier: "gold" },
    { title: "CSES Problem Set", desc: "The classic compact, high-signal CP problem set.", url: "https://cses.fi/problemset/", tier: "gold" },
    { title: "CP-31 Sheet", desc: "TLE Eliminators' 31 hand-picked problems per rating band, 800-1900.", url: "https://www.tle-eliminators.com/cp-sheet", tier: "silver" },
    { title: "AtCoder Topic-Wise Sheet", desc: "AtCoder problems organized by topic (Japanese, auto-translatable).", url: "https://atcoder-tags.herokuapp.com/explain" },
    { title: "CF Tracker", desc: "A Codeforces contest/problem archive and tracker.", url: "https://cftracker.netlify.app/contests" },
    {
      title: "AtCoder Problem Archive",
      desc: "Tagged-by-topic AtCoder archive (preferred), plus the classic AtCoder Problems tracker.",
      links: [
        { label: "Tagged archive ↗", url: "https://atcoder-ai-tagged-problem.vercel.app/listm" },
        { label: "AtCoder Problems ↗", url: "https://kenkoooo.com/atcoder/" },
      ],
    },
    { title: "USACO Guide Problems", desc: "The problem index behind the USACO Guide's modules.", url: "https://usaco.guide/problems" },
    {
      title: "More Ladders",
      desc: "A rating-banded topic ladder, plus a general CP blog/problem archive.",
      links: [
        { label: "CF Ladder Pro ↗", url: "https://cf-ladder-pro.vercel.app/" },
        { label: "A Coded Daily ↗", url: "https://www.acodedaily.com/" },
      ],
    },
    { title: "Awesome Competitive Programming", desc: "A curated GitHub list of CP resources, judges, and references.", url: "https://github.com/lnishan/awesome-competitive-programming" },
  ],
};

function relativeTimeLabel(ts) {
  const days = Math.floor((Date.now() - ts) / (1000 * 60 * 60 * 24));
  if (days <= 0) return "today";
  if (days === 1) return "1 day ago";
  if (days < 30) return `${days} days ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} month${months > 1 ? "s" : ""} ago`;
  const years = Math.floor(months / 12);
  return `${years} year${years > 1 ? "s" : ""} ago`;
}

// Every solved item, flattened with its sheet/topic context and solved-at
// timestamp -- the shared source for both the "oldest solved problems" and
// "stalest topic" recommender lists below.
function allSolvedEntries() {
  const entries = [];
  for (const sheet of data.sheets) {
    for (const sec of sheet.sections) {
      for (const g of sec.groups) {
        for (const sg of g.subgroups) {
          for (const it of sg.items) {
            const ts = solved[it.id];
            if (typeof ts === "number") entries.push({ item: it, sheet, section: sec, group: g, subgroup: sg, ts });
          }
        }
      }
    }
  }
  return entries;
}

// A "repractice" nudge: the individual problems solved longest ago, plus
// the topic/sub-pattern whose solved problems have gone stalest overall --
// so you can either redo one specific old problem or go re-drill a whole
// pattern you haven't touched in a while.
// Skipped items are filtered out before sorting/slicing, not just hidden
// after -- so skipping one always pulls the next-oldest candidate up into
// the window instead of just shrinking it.
const RECAP_WINDOW_SIZE = 8;

function dayKey(ts) {
  const d = new Date(ts);
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

const HEATMAP_WEEKS = 20;
const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// A GitHub-contributions-style calendar: one cell per day for the last
// ~20 weeks, shaded by how many problems were solved that day. Counts
// every solve (`solved[id]`) plus every logged repeat-practice pass
// (`practiceLog[id].lastAt`), since both represent real study time on a
// given day, not just first-time solves.
function renderHeatmap() {
  const dayCounts = new Map();
  const bump = (ts) => {
    if (typeof ts !== "number") return;
    const key = dayKey(ts);
    dayCounts.set(key, (dayCounts.get(key) || 0) + 1);
  };
  for (const ts of Object.values(solved)) bump(ts);
  for (const log of Object.values(practiceLog)) bump(log.lastAt);
  if (dayCounts.size === 0) return "";

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  // Start on a Sunday so the grid's rows line up as Sun..Sat columns-of-weeks.
  const totalDays = HEATMAP_WEEKS * 7;
  const start = new Date(today);
  start.setDate(start.getDate() - (totalDays - 1) - today.getDay());

  const cells = [];
  const monthLabels = [];
  let lastMonth = null;
  for (let i = 0; i < totalDays + today.getDay(); i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    if (d > today) break;
    const count = dayCounts.get(dayKey(d.getTime())) || 0;
    let level = 0;
    if (count >= 6) level = 4;
    else if (count >= 4) level = 3;
    else if (count >= 2) level = 2;
    else if (count >= 1) level = 1;
    if (i % 7 === 0) {
      const month = d.getMonth();
      if (month !== lastMonth) {
        monthLabels.push(MONTH_NAMES[month]);
        lastMonth = month;
      } else {
        monthLabels.push("");
      }
    }
    cells.push(
      `<div class="heatmap-cell heatmap-level-${level}" title="${escapeAttr(d.toDateString())}: ${count} solved"></div>`
    );
  }

  const weeksHtml = [];
  for (let w = 0; w < monthLabels.length; w++) {
    const weekCells = cells.slice(w * 7, w * 7 + 7).join("");
    weeksHtml.push(`<div class="heatmap-week"><div class="heatmap-month-label">${escapeHtml(monthLabels[w])}</div>${weekCells}</div>`);
  }

  return `
    <div class="heatmap-panel">
      <h3 class="recap-col-title">Solve activity</h3>
      <div class="heatmap-grid">${weeksHtml.join("")}</div>
      <div class="heatmap-legend">
        <span>Less</span>
        <span class="heatmap-cell heatmap-level-0"></span>
        <span class="heatmap-cell heatmap-level-1"></span>
        <span class="heatmap-cell heatmap-level-2"></span>
        <span class="heatmap-cell heatmap-level-3"></span>
        <span class="heatmap-cell heatmap-level-4"></span>
        <span>More</span>
      </div>
    </div>
  `;
}

function renderRepracticeRecommender() {
  const entries = allSolvedEntries().filter((e) => !recapSkipped[e.item.id]);
  if (!entries.length) return "";

  const oldestItems = [...entries].sort((a, b) => a.ts - b.ts).slice(0, RECAP_WINDOW_SIZE);

  // Grouped by subtopic (the H3 "Topic" heading -- Graphs, DP, Greedy, etc,
  // falling back to the H2 section for sheets with no H3 level) rather than
  // by sheet, since "The Gauntlet" tells you nothing about WHAT to redrill.
  const byTopic = new Map();
  for (const e of entries) {
    const key = e.group.title || e.section?.title || e.sheet.title;
    const cur = byTopic.get(key);
    if (!cur || e.ts < cur.ts) byTopic.set(key, { ts: e.ts, sheetId: e.sheet.id, count: (cur ? cur.count : 0) + 1 });
    else cur.count++;
  }
  const oldestTopics = [...byTopic.entries()].sort((a, b) => a[1].ts - b[1].ts).slice(0, 5);

  const itemsHtml = oldestItems
    .map(({ item, sheet, group, subgroup, ts }) => {
      const origin = [sheet.title, group.title, subgroup.title].filter(Boolean).join(" › ");
      return `
        <div class="recap-row">
          ${difficultyDotHtml(item.difficulty)}
          <a class="recap-text" href="${escapeAttr(item.url || `#/sheet/${sheet.id}`)}" target="${item.url ? "_blank" : "_self"}" rel="noopener">${escapeHtml(item.text)}</a>
          <span class="recap-meta">${escapeHtml(origin)} · ${relativeTimeLabel(ts)}</span>
          <button type="button" class="recap-skip-btn" data-recap-skip-id="${item.id}" title="Too basic to bother re-drilling -- skip it in this list">Skip</button>
        </div>
      `;
    })
    .join("");

  const topicsHtml = oldestTopics
    .map(([key, v]) => `
      <a class="recap-row" href="#/sheet/${v.sheetId}">
        <span class="recap-text">${escapeHtml(key)}</span>
        <span class="recap-meta">${v.count} solved · oldest ${relativeTimeLabel(v.ts)}</span>
      </a>
    `)
    .join("");

  return `
    <div class="recap-panel">
      <h2 class="category-heading">Time to revisit</h2>
      <div class="recap-columns">
        <div class="recap-col">
          <h3 class="recap-col-title">Oldest solved problems</h3>
          <div id="recap-items-list">${itemsHtml}</div>
        </div>
        <div class="recap-col">
          <h3 class="recap-col-title">Stalest topics</h3>
          ${topicsHtml}
        </div>
      </div>
    </div>
  `;
}

function renderHome() {
  const categories = [
    { key: "dsa", label: "OA + Interview" },
    { key: "sql", label: "SQL" },
    { key: "cp", label: "Competitive Programming" },
    { key: "system-design", label: "System Design" },
    { key: "deprecated", label: "Deprecated" },
  ];

  const parts = [];
  parts.push(`
    <div class="hero">
      <h1>Your practice sheets</h1>
      <p>Click a sheet, check items off as you solve them. Progress is saved to this browser automatically, and to your account when signed in.</p>
    </div>
  `);
  parts.push(renderHeatmap());
  parts.push(renderRepracticeRecommender());

  for (const cat of categories) {
    const sheets = data.sheets.filter((s) => s.category === cat.key);
    const extResources = EXTERNAL_RESOURCES[cat.key];
    if (!sheets.length && !(extResources && extResources.length)) continue;
    parts.push(`<h2 class="category-heading">${escapeHtml(cat.label)}</h2>`);
    if (sheets.length) {
      parts.push(`<div class="sheet-grid">`);
      for (const sheet of sheets) {
        const { total, done } = sheetStats(sheet);
        const pct = total ? Math.round((done / total) * 100) : 0;
        parts.push(`
          <a class="sheet-card" href="#/sheet/${sheet.id}" data-sheet-card="${sheet.id}">
            <h3>${escapeHtml(sheet.title)}</h3>
            <p>${escapeHtml(sheet.description || "")}</p>
            <div class="card-progress-track"><div class="card-progress-fill" style="width:${pct}%"></div></div>
            <div class="card-progress-label">${done} / ${total} solved</div>
          </a>
        `);
      }
      parts.push(`</div>`);
    }

    if (extResources && extResources.length) {
      if (sheets.length) parts.push(`<h3 class="external-heading">Popular external sheets</h3>`);
      parts.push(`<div class="sheet-grid">`);
      for (const r of extResources) {
        const tierClass = r.tier ? ` tier-${r.tier}` : "";
        if (r.links) {
          const linksHtml = r.links
            .map((l) => `<a class="external-sublink" href="${escapeAttr(l.url)}" target="_blank" rel="noopener">${escapeHtml(l.label)}</a>`)
            .join("");
          parts.push(`
            <div class="sheet-card external-card${tierClass}">
              <h3>${escapeHtml(r.title)}</h3>
              <p>${escapeHtml(r.desc)}</p>
              <div class="external-sublinks">${linksHtml}</div>
            </div>
          `);
        } else {
          parts.push(`
            <a class="sheet-card external-card${tierClass}" href="${escapeAttr(r.url)}" target="_blank" rel="noopener">
              <h3>${escapeHtml(r.title)} <span class="ext-icon">↗</span></h3>
              <p>${escapeHtml(r.desc)}</p>
            </a>
          `);
        }
      }
      parts.push(`</div>`);
    }
  }

  appEl.innerHTML = parts.join("");
}

function refreshHomeCards() {
  for (const sheet of data.sheets) {
    const card = appEl.querySelector(`[data-sheet-card="${sheet.id}"]`);
    if (!card) continue;
    const { total, done } = sheetStats(sheet);
    const pct = total ? Math.round((done / total) * 100) : 0;
    card.querySelector(".card-progress-fill").style.width = pct + "%";
    card.querySelector(".card-progress-label").textContent = `${done} / ${total} solved`;
  }
}

// ---------- Starred view ----------

function collectStarredEntries() {
  const entries = [];
  for (const sheet of data.sheets) {
    for (const sec of sheet.sections) {
      for (const g of sec.groups) {
        for (const sg of g.subgroups) {
          for (const it of sg.items) {
            if (starred[it.id]) entries.push({ item: it, sheet, group: g, subgroup: sg });
          }
        }
      }
    }
  }
  return entries;
}

function renderStarred() {
  currentSheetId = null; // not a real sheet -- keeps toggleItem's per-sheet counter updates a no-op here
  hideSolved = false;
  searchQuery = "";

  const starredEntries = collectStarredEntries();

  // Grouped by originating sheet (its own collapsible section, like a real
  // sheet view) rather than one flat list -- so a starred item's home
  // context is obvious at a glance instead of relying on an inline tag.
  const bySheet = new Map();
  for (const entry of starredEntries) {
    if (!bySheet.has(entry.sheet.id)) bySheet.set(entry.sheet.id, { sheet: entry.sheet, entries: [] });
    bySheet.get(entry.sheet.id).entries.push(entry);
  }

  const sectionsHtml = starredEntries.length
    ? [...bySheet.values()]
        .map(({ sheet, entries }) => {
          const rows = entries
            .map(({ item, group, subgroup }) => {
              const origin = [group.title, subgroup.title].filter(Boolean).join(" › ");
              return renderItemRow(item, origin);
            })
            .join("");
          return `
            <details class="section" open data-section-total="${entries.length}">
              <summary>
                <span>${escapeHtml(sheet.title)}</span>
                <span class="section-count">${entries.length} starred</span>
              </summary>
              <div class="section-body">${rows}</div>
            </details>
          `;
        })
        .join("")
    : `<div class="empty-state">No starred problems yet. Click the ★ on any item to save it here.</div>`;

  appEl.innerHTML = `
    <div class="sheet-header">
      <a class="back-link" href="#/">&larr; All sheets</a>
      <h1>★ Starred Problems</h1>
      <div class="desc">Every problem you've starred, grouped by the sheet it came from.</div>
      <div class="sheet-stats">
        <span><strong>${starredEntries.length}</strong> starred</span>
      </div>
    </div>
    <div class="controls">
      <input class="search-input" id="search-input" type="search" placeholder="Filter starred items…" />
      <label class="check-label"><input type="checkbox" id="hide-solved" /> Hide solved</label>
    </div>
    <div id="sections">${sectionsHtml}</div>
  `;

  const sectionsEl = document.getElementById("sections");
  document.getElementById("search-input").addEventListener("input", (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    applyFilters();
  });
  document.getElementById("hide-solved").addEventListener("change", (e) => {
    hideSolved = e.target.checked;
    applyFilters();
  });
  sectionsEl.addEventListener("change", (e) => {
    if (e.target.matches(".item-checkbox")) toggleItem(e.target.dataset.id);
  });
  sectionsEl.addEventListener("click", (e) => {
    const starBtn = e.target.closest(".star-btn");
    if (starBtn) {
      toggleStarred(starBtn.dataset.starId);
      renderStarred(); // unstarring should drop the row out of this view immediately
      return;
    }
    const practiceBtn = e.target.closest(".practice-btn");
    if (practiceBtn) incrementPractice(practiceBtn.dataset.practiceId);
  });
}

// ---------- Most Practiced view ----------

function renderMostPracticed() {
  currentSheetId = null;
  hideSolved = false;
  searchQuery = "";

  const entries = [];
  for (const sheet of data.sheets) {
    for (const sec of sheet.sections) {
      for (const g of sec.groups) {
        for (const sg of g.subgroups) {
          for (const it of sg.items) {
            const count = practiceCount(it.id);
            if (count > 0) entries.push({ item: it, sheet, group: g, subgroup: sg, count });
          }
        }
      }
    }
  }
  entries.sort((a, b) => b.count - a.count || lastTouchedAt(b.item.id) - lastTouchedAt(a.item.id));

  const rowsHtml = entries.length
    ? entries
        .map(({ item, sheet, group, subgroup }) => {
          const origin = [sheet.title, group.title, subgroup.title].filter(Boolean).join(" › ");
          return renderItemRow(item, origin);
        })
        .join("")
    : `<div class="empty-state">No repeat practice logged yet. Once an item is solved, click its 🔁 counter to log another practice pass -- the most-repeated ones show up here, ranked.</div>`;

  appEl.innerHTML = `
    <div class="sheet-header">
      <a class="back-link" href="#/">&larr; All sheets</a>
      <h1>🔁 Most Practiced</h1>
      <div class="desc">Ranked by how many times you've logged a repeat practice pass, most-repeated first.</div>
      <div class="sheet-stats">
        <span><strong>${entries.length}</strong> problem(s) with repeat practice</span>
      </div>
    </div>
    <div class="controls">
      <input class="search-input" id="search-input" type="search" placeholder="Filter…" />
    </div>
    <div id="sections">
      <div class="section random-section">
        <div class="section-body">${rowsHtml}</div>
      </div>
    </div>
  `;

  const sectionsEl = document.getElementById("sections");
  document.getElementById("search-input").addEventListener("input", (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    applyFilters();
  });
  sectionsEl.addEventListener("change", (e) => {
    if (e.target.matches(".item-checkbox")) toggleItem(e.target.dataset.id);
  });
  sectionsEl.addEventListener("click", (e) => {
    const starBtn = e.target.closest(".star-btn");
    if (starBtn) {
      toggleStarred(starBtn.dataset.starId);
      return;
    }
    const practiceBtn = e.target.closest(".practice-btn");
    if (practiceBtn) {
      incrementPractice(practiceBtn.dataset.practiceId);
      renderMostPracticed(); // re-rank immediately since count/order just changed
    }
  });
}

// ---------- Sheet view ----------

let currentSheetId = null;
let hideSolved = false;
let searchQuery = "";

function renderSheet(sheet) {
  currentSheetId = sheet.id;
  hideSolved = false;
  searchQuery = "";

  const { total, done } = sheetStats(sheet);

  const parts = [];
  parts.push(`
    <div class="sheet-header">
      <a class="back-link" href="#/">&larr; All sheets</a>
      <div class="sheet-header-top">
        <div>
          <h1>${escapeHtml(sheet.title)}</h1>
          <div class="desc">${escapeHtml(sheet.description || "")}</div>
          <div class="sheet-stats">
            <span><strong id="sheet-done-count">${done}</strong> / ${total} solved</span>
            <button class="btn btn-small" id="expand-all">Expand all</button>
            <button class="btn btn-small" id="collapse-all">Collapse all</button>
            <button class="btn btn-small btn-danger" id="reset-progress">Reset this sheet</button>
          </div>
        </div>
        <div id="difficulty-donut-slot">${renderDifficultyDonut(sheetDifficultyStats(sheet))}</div>
      </div>
    </div>
    <div class="controls">
      <input class="search-input" id="search-input" type="search" placeholder="Filter items in this sheet…" />
      <label class="check-label"><input type="checkbox" id="hide-solved" /> Hide solved</label>
      <button class="btn btn-small" id="randomize-btn">🔀 Randomize</button>
      <button class="btn btn-small" id="grouped-view-btn" hidden>Grouped view</button>
    </div>
    <div id="sections"></div>
  `);
  appEl.innerHTML = parts.join("");

  const sectionsEl = document.getElementById("sections");
  sectionsEl.innerHTML = sheet.sections.map((sec) => renderSection(sec)).join("");

  document.getElementById("search-input").addEventListener("input", (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    applyFilters();
  });
  document.getElementById("hide-solved").addEventListener("change", (e) => {
    hideSolved = e.target.checked;
    applyFilters();
  });
  document.getElementById("randomize-btn").addEventListener("click", () => {
    renderRandomized(sheet);
  });
  document.getElementById("grouped-view-btn").addEventListener("click", () => {
    renderSheet(sheet);
  });
  document.getElementById("expand-all").addEventListener("click", () => {
    sectionsEl.querySelectorAll("details.section").forEach((d) => (d.open = true));
  });
  document.getElementById("collapse-all").addEventListener("click", () => {
    sectionsEl.querySelectorAll("details.section").forEach((d) => (d.open = false));
  });
  document.getElementById("reset-progress").addEventListener("click", () => {
    if (!confirm(`Reset all progress for "${sheet.title}"? This can't be undone.`)) return;
    for (const sec of sheet.sections) {
      for (const g of sec.groups) {
        for (const sg of g.subgroups) {
          for (const it of sg.items) delete solved[it.id];
        }
      }
    }
    saveLocalSolved();
    scheduleCloudWrite();
    renderSheet(sheet);
  });

  sectionsEl.addEventListener("change", (e) => {
    if (e.target.matches(".item-checkbox")) {
      toggleItem(e.target.dataset.id);
    }
  });
  sectionsEl.addEventListener("click", (e) => {
    const starBtn = e.target.closest(".star-btn");
    if (starBtn) {
      toggleStarred(starBtn.dataset.starId);
      return;
    }
    const practiceBtn = e.target.closest(".practice-btn");
    if (practiceBtn) incrementPractice(practiceBtn.dataset.practiceId);
  });

  updateProgressBar(sheet);
}

function shuffleInPlace(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Flattens every real, checkable item across all sections/groups/subgroups
// -- skipping "Invariant: ..." callouts, since those are facts to remember,
// not problems to randomly drill.
function flattenItems(sheet) {
  const items = [];
  for (const sec of sheet.sections) {
    for (const g of sec.groups) {
      for (const sg of g.subgroups) {
        for (const it of sg.items) {
          const isInvariant = !it.url && /^Invariant:\s*/i.test(it.text);
          if (!isInvariant) items.push(it);
        }
      }
    }
  }
  return items;
}

function renderRandomized(sheet) {
  const items = shuffleInPlace(flattenItems(sheet));
  const sectionsEl = document.getElementById("sections");
  sectionsEl.innerHTML = `
    <div class="section random-section">
      <div class="section-body">${items.map((it) => renderItemRow(it)).join("")}</div>
    </div>
  `;
  document.getElementById("randomize-btn").hidden = true;
  document.getElementById("grouped-view-btn").hidden = false;
  applyFilters();
}

function renderSection(section) {
  const { total, done } = sectionStats(section);
  const groupsHtml = section.groups.map((g) => renderGroup(g)).join("");
  return `
    <details class="section" open data-section-total="${total}">
      <summary>
        <span>${escapeHtml(section.title)}</span>
        <span class="section-count" data-section-count>${done} / ${total}</span>
      </summary>
      <div class="section-body">${groupsHtml}</div>
    </details>
  `;
}

function renderGroup(g) {
  const titleHtml = g.title
    ? `<div class="group-title"><span class="group-eyebrow">Topic</span><span class="group-name">${escapeHtml(g.title)}</span></div>`
    : "";
  const subHtml = g.subgroups.map((sg) => renderSubgroup(sg)).join("");
  return titleHtml + subHtml;
}

function renderSubgroup(sg) {
  // A named sub-pattern gets its own visible heading, distinct from the
  // (bigger, bolder) group/topic title above it -- this is what lets
  // "Fast/Slow Pointers" stand out as a title you can actually remember,
  // instead of being buried as a same-row badge on every item.
  const titleHtml = sg.title ? `<div class="subgroup-title">${escapeHtml(sg.title)}</div>` : "";
  const rows = sg.items.map((it) => renderItemRow(it)).join("");
  return `<div class="subgroup">${titleHtml}${rows}</div>`;
}

const DIFF_LABEL = { E: "Easy", M: "Medium", H: "Hard" };

function difficultyDotHtml(difficulty) {
  if (!difficulty || !DIFF_LABEL[difficulty]) return "";
  const cls = { E: "dot-easy", M: "dot-medium", H: "dot-hard" }[difficulty];
  return `<span class="diff-dot ${cls}" title="${DIFF_LABEL[difficulty]}" aria-label="${DIFF_LABEL[difficulty]}"></span>`;
}

function renderItemRow(item, originLabel) {
  // An invariant is a fact to internalize, not a task to complete -- render
  // it as a distinct callout with no checkbox, so it visually stands apart
  // from every real, solvable problem row instead of looking like one more
  // identical checkbox in a long undifferentiated list.
  const invariantMatch = !item.url && /^Invariant:\s*/i.test(item.text);
  if (invariantMatch) {
    const text = item.text.replace(/^Invariant:\s*/i, "");
    return `
      <div class="item-row invariant-row" data-search="${escapeAttr(item.text.toLowerCase())}">
        <span class="invariant-badge">Invariant</span>
        <span class="invariant-text">${escapeHtml(text)}</span>
      </div>
    `;
  }
  const isSolved = !!solved[item.id];
  const textHtml = item.url
    ? `<a class="item-text" href="${escapeAttr(item.url)}" target="_blank" rel="noopener">${escapeHtml(item.text)} <span class="ext-icon">↗</span></a>`
    : `<span class="item-text plain">${escapeHtml(item.text)}</span>`;
  // `tag` (Foundation/Boss/Round labels) and `subtag` (a cosmetic per-item
  // technique badge, e.g. "Frequency Map") are never both present on the
  // same item in practice, but show both if they ever are.
  const badgeText = [item.tag, item.subtag].filter(Boolean).join(" · ");
  const tagHtml = badgeText ? `<span class="item-tag">${escapeHtml(badgeText)}</span>` : "";
  // Only used by the Starred view, to show which sheet/topic a starred item
  // came from since it's no longer sitting inside that sheet's own section.
  const originHtml = originLabel ? `<span class="item-origin">${escapeHtml(originLabel)}</span>` : "";
  // A full-block difficulty color only appears once solved -- it's a reward/
  // signal read at a glance ("I've been clearing a lot of Hards lately"),
  // not a spoiler shown before you've attempted the problem. Items with no
  // known difficulty (non-LeetCode URLs, plain-text items) just get the
  // plain muted/strikethrough solved style instead.
  const diffClass =
    isSolved && item.difficulty
      ? { E: " diff-easy", M: " diff-medium", H: " diff-hard" }[item.difficulty] || ""
      : "";
  // A small dot before the checkbox shows difficulty up front, before you've
  // even attempted the problem -- separate from the full-block color, which
  // only appears once solved. Both read the same E/M/H code, just at
  // different moments (deciding whether to attempt vs. celebrating a Hard).
  const dotHtml = difficultyDotHtml(item.difficulty);
  const isStarred = !!starred[item.id];
  const platformHtml = platformBadgeHtml(item);
  // Last-touched label and the repeat-practice counter only make sense once
  // an item has been solved at least once -- clicking the counter logs
  // another practice pass (spaced-repetition redrilling) without touching
  // the checkbox/`solved` state itself.
  const touchedAt = isSolved ? lastTouchedAt(item.id) : null;
  const lastTouchedHtml = touchedAt
    ? `<span class="last-touched" title="Last practiced">${relativeTimeLabel(touchedAt)}</span>`
    : "";
  const practiceHtml = isSolved
    ? `<button type="button" class="practice-btn" data-practice-id="${item.id}" title="Log another practice pass">🔁 ${practiceCount(item.id)}</button>`
    : "";
  return `
    <div class="item-row${isSolved ? " is-solved" : ""}${diffClass}" data-item-row="${item.id}" data-search="${escapeAttr((item.text + " " + badgeText + " " + (originLabel || "")).toLowerCase())}">
      ${dotHtml}
      <input type="checkbox" class="item-checkbox" data-id="${item.id}" ${isSolved ? "checked" : ""} />
      ${textHtml}
      ${originHtml}
      ${platformHtml}
      ${lastTouchedHtml}
      ${practiceHtml}
      ${tagHtml}
      <button type="button" class="star-btn${isStarred ? " is-starred" : ""}" data-star-id="${item.id}" title="${isStarred ? "Unstar" : "Star for later"}" aria-label="${isStarred ? "Unstar" : "Star for later"}">★</button>
    </div>
  `;
}

function findItemById(sheet, id) {
  for (const sec of sheet.sections) {
    for (const g of sec.groups) {
      for (const sg of g.subgroups) {
        for (const it of sg.items) {
          if (it.id === id) return it;
        }
      }
    }
  }
  return null;
}

// Same lookup, but searches every sheet -- needed by views that aren't
// scoped to one sheet (Starred, Most Practiced), where `currentSheetId`
// is null so the single-sheet `findItemById` above has nothing to search.
function findItemByIdAnywhere(id) {
  for (const sheet of data.sheets) {
    const item = findItemById(sheet, id);
    if (item) return item;
  }
  return null;
}

const DIFF_CLASSES = ["diff-easy", "diff-medium", "diff-hard"];
const DIFF_CLASS_BY_CODE = { E: "diff-easy", M: "diff-medium", H: "diff-hard" };

function toggleItem(id) {
  if (solved[id]) delete solved[id];
  else solved[id] = Date.now();
  saveLocalSolved();
  scheduleCloudWrite();

  const isSolvedNow = !!solved[id];
  const sheet = findSheet(currentSheetId);
  const item = (sheet && findItemById(sheet, id)) || findItemByIdAnywhere(id);
  document.querySelectorAll(`[data-item-row="${id}"]`).forEach((row) => {
    row.classList.toggle("is-solved", isSolvedNow);
    // The full-block difficulty color only shows once solved -- toggle it
    // live here too, otherwise it'd only appear after the next full re-render.
    row.classList.remove(...DIFF_CLASSES);
    if (isSolvedNow && item && item.difficulty && DIFF_CLASS_BY_CODE[item.difficulty]) {
      row.classList.add(DIFF_CLASS_BY_CODE[item.difficulty]);
    }
    // The last-touched label and repeat-practice counter only exist once
    // solved -- inject/remove them live too, same reason as the diff class.
    const starBtn = row.querySelector(".star-btn");
    let touchedEl = row.querySelector(".last-touched");
    let practiceBtn = row.querySelector(".practice-btn");
    if (isSolvedNow) {
      const touchedAt = lastTouchedAt(id);
      if (!touchedEl && touchedAt) {
        touchedEl = document.createElement("span");
        touchedEl.className = "last-touched";
        touchedEl.title = "Last practiced";
        row.insertBefore(touchedEl, starBtn);
      }
      if (touchedEl) touchedEl.textContent = touchedAt ? relativeTimeLabel(touchedAt) : "";
      if (!practiceBtn) {
        practiceBtn = document.createElement("button");
        practiceBtn.type = "button";
        practiceBtn.className = "practice-btn";
        practiceBtn.dataset.practiceId = id;
        practiceBtn.title = "Log another practice pass";
        row.insertBefore(practiceBtn, starBtn);
      }
      practiceBtn.textContent = `🔁 ${practiceCount(id)}`;
    } else {
      if (touchedEl) touchedEl.remove();
      if (practiceBtn) practiceBtn.remove();
    }
  });

  if (sheet) {
    document.getElementById("sheet-done-count").textContent = sheetStats(sheet).done;
    document.querySelectorAll(".section[data-section-total]").forEach((detailsEl, idx) => {
      const sec = sheet.sections[idx];
      if (!sec) return;
      const { total, done } = sectionStats(sec);
      const countEl = detailsEl.querySelector("[data-section-count]");
      if (countEl) countEl.textContent = `${done} / ${total}`;
    });
    const donutSlot = document.getElementById("difficulty-donut-slot");
    if (donutSlot) donutSlot.innerHTML = renderDifficultyDonut(sheetDifficultyStats(sheet));
    updateProgressBar(sheet);
  }
}

function toggleStarred(id) {
  if (starred[id]) delete starred[id];
  else starred[id] = true;
  saveLocalStarred();
  scheduleCloudWrite();
  document.querySelectorAll(`[data-item-row="${id}"] .star-btn`).forEach((btn) => {
    btn.classList.toggle("is-starred", !!starred[id]);
  });
}

function applyFilters() {
  document.querySelectorAll(".item-row").forEach((row) => {
    const matchesSearch = !searchQuery || row.dataset.search.includes(searchQuery);
    const matchesSolved = !hideSolved || !row.classList.contains("is-solved");
    row.classList.toggle("is-hidden", !(matchesSearch && matchesSolved));
  });
}

function updateProgressBar(sheet) {
  const { total, done } = sheetStats(sheet);
  const pct = total ? Math.round((done / total) * 100) : 0;
  progressBarFill.style.width = pct + "%";
}

function refreshAllCounts() {
  const route = parseHash();
  if (route.view === "sheet") {
    const sheet = findSheet(route.id);
    if (sheet) {
      document.querySelectorAll(".item-checkbox").forEach((cb) => {
        const id = cb.dataset.id;
        const isSolved = !!solved[id];
        cb.checked = isSolved;
        const row = cb.closest(".item-row");
        if (row) {
          row.classList.toggle("is-solved", isSolved);
          row.classList.remove(...DIFF_CLASSES);
          const item = findItemById(sheet, id);
          if (isSolved && item && item.difficulty && DIFF_CLASS_BY_CODE[item.difficulty]) {
            row.classList.add(DIFF_CLASS_BY_CODE[item.difficulty]);
          }
          const starBtn = row.querySelector(".star-btn");
          let touchedEl = row.querySelector(".last-touched");
          let practiceBtn = row.querySelector(".practice-btn");
          if (isSolved) {
            const touchedAt = lastTouchedAt(id);
            if (!touchedEl && touchedAt) {
              touchedEl = document.createElement("span");
              touchedEl.className = "last-touched";
              touchedEl.title = "Last practiced";
              row.insertBefore(touchedEl, starBtn);
            }
            if (touchedEl) touchedEl.textContent = touchedAt ? relativeTimeLabel(touchedAt) : "";
            if (!practiceBtn) {
              practiceBtn = document.createElement("button");
              practiceBtn.type = "button";
              practiceBtn.className = "practice-btn";
              practiceBtn.dataset.practiceId = id;
              practiceBtn.title = "Log another practice pass";
              row.insertBefore(practiceBtn, starBtn);
            }
            practiceBtn.textContent = `🔁 ${practiceCount(id)}`;
          } else {
            if (touchedEl) touchedEl.remove();
            if (practiceBtn) practiceBtn.remove();
          }
        }
      });
      const doneEl = document.getElementById("sheet-done-count");
      if (doneEl) doneEl.textContent = sheetStats(sheet).done;
      document.querySelectorAll(".section[data-section-total]").forEach((detailsEl, idx) => {
        const sec = sheet.sections[idx];
        if (!sec) return;
        const { done, total } = sectionStats(sec);
        const countEl = detailsEl.querySelector("[data-section-count]");
        if (countEl) countEl.textContent = `${done} / ${total}`;
      });
      const donutSlot = document.getElementById("difficulty-donut-slot");
      if (donutSlot) donutSlot.innerHTML = renderDifficultyDonut(sheetDifficultyStats(sheet));
      updateProgressBar(sheet);
      applyFilters();
    }
  } else {
    refreshHomeCards();
  }
}

// ---------- Utilities ----------

function escapeHtml(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[c]));
}

function escapeAttr(s) {
  return escapeHtml(s);
}

// Attached once to the persistent #app container (unlike sheet views, whose
// #sections child element is fully recreated on every render so a fresh
// listener there never stacks) -- renderHome() runs on every home-page
// visit, so a listener added there directly would duplicate every time.
appEl.addEventListener("click", (e) => {
  const skipBtn = e.target.closest(".recap-skip-btn");
  if (skipBtn) {
    e.preventDefault();
    skipFromRecap(skipBtn.dataset.recapSkipId);
  }
});

// ---------- Accounts panel wiring ----------

const accountsBtn = document.getElementById("accounts-btn");
const accountsPanel = document.getElementById("accounts-panel");
const lcUsernameInput = document.getElementById("lc-username-input");

if (lcUsernameInput) lcUsernameInput.value = localStorage.getItem(LC_USERNAME_KEY) || "";

if (accountsBtn) {
  accountsBtn.addEventListener("click", () => {
    accountsPanel.hidden = !accountsPanel.hidden;
  });
}
const accountsSyncBtn = document.getElementById("accounts-sync-btn");
if (accountsSyncBtn) {
  accountsSyncBtn.addEventListener("click", () => {
    syncPlatformSolved();
  });
}

// ---------- Boot ----------

(async function main() {
  await loadData();
  render();
  initFirebase();
})();
