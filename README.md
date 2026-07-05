# Interview Practice Tracker

A seanprashad.com/leetcode-patterns-style tracker for the `faang_*.md` practice
sheets in this repo: click a checkbox to mark an item solved, progress is
saved to your browser (and across devices if you sign in), and every linked
problem opens the free LeetCode/CSES page.

## Local preview

```
python scripts/serve.py 8000
```

Then open **http://localhost:8000**. (Use this script, not plain
`python -m http.server` — on Windows the stdlib server can silently truncate
large responses like `data.json`; `scripts/serve.py` forces HTTP/1.1 to avoid
that.)

## Adding a new sheet

1. Drop a new `faang_*.md` file in the repo root, following the existing
   convention: `#` title, `##` sections, optional `###` subsections, and
   numbered/bulleted lists or tables containing `[Problem Name](url)` links.
2. Regenerate the data file:
   ```
   python scripts/build_data.py
   ```
3. Preview locally, then commit and push — the new sheet appears on the
   landing page automatically, split into the DSA or System Design group
   based on whether `dsa` is in the filename.

If a section is pure preface/instructions (like "How To Use This") rather
than concrete practice items, add a matching phrase to `EXCLUDE_HEADINGS` in
`scripts/build_data.py` so it doesn't show up as empty checkboxes.

Item IDs are a hash of `(file, section, tag, text, url)`, so re-running the
build script after editing a sheet keeps existing checkmarks intact as long
as the surrounding heading/text doesn't change.

## Cross-device sync (optional)

Works fully with just localStorage (per-browser) out of the box. To sync
checkmarks across devices:

1. Create a free project at [console.firebase.google.com](https://console.firebase.google.com).
2. Build → Authentication → Sign-in method → enable **Google**.
3. Build → Firestore Database → Create database → production mode.
4. Project settings → General → Add app → Web app → copy the config object
   into `docs/firebase-config.js` (replacing the `YOUR_*` placeholders).
5. Firestore → Rules → paste:
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /users/{uid} {
         allow read, write: if request.auth != null && request.auth.uid == uid;
       }
     }
   }
   ```
6. Authentication → Settings → Authorized domains → add your GitHub Pages
   domain (e.g. `you.github.io`) once deployed, and `localhost` for local
   testing.

Until `firebase-config.js` has a real `apiKey`, the app runs in
localStorage-only mode — sign-in is disabled and everything else still works.

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. Repo → Settings → Pages → Source: "Deploy from a branch" → Branch: `main`,
   Folder: `/docs` → Save.
3. Your permanent public URL appears at `https://<you>.github.io/<repo>/`
   within about a minute.
