import { firebaseConfig } from "./firebase-config.js";

const LOCAL_KEY = "practice-tracker-solved-v1";
const FIREBASE_SDK = "https://www.gstatic.com/firebasejs/10.13.0";

const appEl = document.getElementById("app");
const syncStatusEl = document.getElementById("sync-status");
const signinBtn = document.getElementById("signin-btn");
const progressBarWrap = document.getElementById("sheet-progress");
const progressBarFill = document.getElementById("sheet-progress-fill");

let data = { sheets: [] };
let solved = loadLocalSolved();

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
  try {
    return JSON.parse(localStorage.getItem(LOCAL_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveLocalSolved() {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(solved));
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
      const remote = snap.exists() ? snap.data().solved || {} : {};
      if (!firstSnapshotHandled) {
        firstSnapshotHandled = true;
        solved = { ...remote, ...solved };
        saveLocalSolved();
        writeCloudNow();
      } else {
        solved = remote;
        saveLocalSolved();
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
    .setDoc(fsMod.doc(db, "users", user.uid), { solved, updatedAt: Date.now() })
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
  return { view: "home" };
}

function render() {
  const route = parseHash();
  if (route.view === "sheet" && findSheet(route.id)) {
    progressBarWrap.hidden = false;
    renderSheet(findSheet(route.id));
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
// opens the official resource in a new tab.
const EXTERNAL_RESOURCES = {
  dsa: [
    { title: "Blind 75", desc: "The original 75-problem list that started the whole genre.", url: "https://leetcode.com/discuss/post/460599/blind-75-leetcode-questions-by-krishnade-9xev/" },
    { title: "LeetCode Interview 150", desc: "LeetCode's own curated interview study plan.", url: "https://leetcode.com/studyplan/top-interview-150/" },
    { title: "NeetCode 150", desc: "Blind 75 plus 75 more, each with a free video solution.", url: "https://neetcode.io/practice/practice/neetcode150" },
    { title: "Sean Prashad's Patterns", desc: "LeetCode problems grouped by the underlying pattern.", url: "https://seanprashad.com/leetcode-patterns/" },
    { title: "Love Babbar 450 (via Codolio)", desc: "The well-known 450 DSA sheet, tracked on Codolio.", url: "https://codolio.com/question-tracker/sheet/love-babbar-sheet" },
    { title: "Striver's A2Z Sheet", desc: "TakeUForward's structured A-to-Z DSA course sheet.", url: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" },
  ],
  cp: [
    { title: "CP-31 Sheet", desc: "TLE Eliminators' 31 hand-picked problems per rating band, 800-1900.", url: "https://www.tle-eliminators.com/cp-sheet" },
    { title: "A2OJ Ladders", desc: "Classic rating-banded Codeforces practice ladders.", url: "https://earthshakira.github.io/a2oj-clientside/server/Ladders.html" },
    { title: "AtCoder Problems", desc: "The standard problem tracker and recommender for AtCoder.", url: "https://kenkoooo.com/atcoder/" },
  ],
};

function renderHome() {
  const categories = [
    { key: "dsa", label: "OA + Interview" },
    { key: "cp", label: "Competitive Programming" },
    { key: "system-design", label: "System Design" },
  ];

  const parts = [];
  parts.push(`
    <div class="hero">
      <h1>Your practice sheets</h1>
      <p>Click a sheet, check items off as you solve them. Progress is saved to this browser automatically, and to your account when signed in.</p>
    </div>
  `);

  for (const cat of categories) {
    const sheets = data.sheets.filter((s) => s.category === cat.key);
    if (!sheets.length) continue;
    parts.push(`<h2 class="category-heading">${escapeHtml(cat.label)}</h2>`);
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

    const extResources = EXTERNAL_RESOURCES[cat.key];
    if (extResources && extResources.length) {
      parts.push(`<h3 class="external-heading">Popular external sheets</h3>`);
      parts.push(`<div class="sheet-grid">`);
      for (const r of extResources) {
        parts.push(`
          <a class="sheet-card external-card" href="${escapeAttr(r.url)}" target="_blank" rel="noopener">
            <h3>${escapeHtml(r.title)} <span class="ext-icon">↗</span></h3>
            <p>${escapeHtml(r.desc)}</p>
          </a>
        `);
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
      <h1>${escapeHtml(sheet.title)}</h1>
      <div class="desc">${escapeHtml(sheet.description || "")}</div>
      <div class="sheet-stats">
        <span><strong id="sheet-done-count">${done}</strong> / ${total} solved</span>
        <button class="btn btn-small" id="expand-all">Expand all</button>
        <button class="btn btn-small" id="collapse-all">Collapse all</button>
        <button class="btn btn-small btn-danger" id="reset-progress">Reset this sheet</button>
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

function renderItemRow(item) {
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
  // A full-block difficulty color only appears once solved -- it's a reward/
  // signal read at a glance ("I've been clearing a lot of Hards lately"),
  // not a spoiler shown before you've attempted the problem. Items with no
  // known difficulty (non-LeetCode URLs, plain-text items) just get the
  // plain muted/strikethrough solved style instead.
  const diffClass =
    isSolved && item.difficulty
      ? { E: " diff-easy", M: " diff-medium", H: " diff-hard" }[item.difficulty] || ""
      : "";
  return `
    <div class="item-row${isSolved ? " is-solved" : ""}${diffClass}" data-item-row="${item.id}" data-search="${escapeAttr((item.text + " " + badgeText).toLowerCase())}">
      <input type="checkbox" class="item-checkbox" data-id="${item.id}" ${isSolved ? "checked" : ""} />
      ${textHtml}
      ${tagHtml}
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

const DIFF_CLASSES = ["diff-easy", "diff-medium", "diff-hard"];
const DIFF_CLASS_BY_CODE = { E: "diff-easy", M: "diff-medium", H: "diff-hard" };

function toggleItem(id) {
  if (solved[id]) delete solved[id];
  else solved[id] = true;
  saveLocalSolved();
  scheduleCloudWrite();

  const isSolvedNow = !!solved[id];
  const sheet = findSheet(currentSheetId);
  const row = document.querySelector(`[data-item-row="${id}"]`);
  if (row) {
    row.classList.toggle("is-solved", isSolvedNow);
    // The full-block difficulty color only shows once solved -- toggle it
    // live here too, otherwise it'd only appear after the next full re-render.
    row.classList.remove(...DIFF_CLASSES);
    const item = sheet && findItemById(sheet, id);
    if (isSolvedNow && item && item.difficulty && DIFF_CLASS_BY_CODE[item.difficulty]) {
      row.classList.add(DIFF_CLASS_BY_CODE[item.difficulty]);
    }
  }

  if (sheet) {
    document.getElementById("sheet-done-count").textContent = sheetStats(sheet).done;
    document.querySelectorAll(".section[data-section-total]").forEach((detailsEl, idx) => {
      const sec = sheet.sections[idx];
      if (!sec) return;
      const { total, done } = sectionStats(sec);
      const countEl = detailsEl.querySelector("[data-section-count]");
      if (countEl) countEl.textContent = `${done} / ${total}`;
    });
    updateProgressBar(sheet);
  }
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
        const isSolved = !!solved[cb.dataset.id];
        cb.checked = isSolved;
        const row = cb.closest(".item-row");
        if (row) {
          row.classList.toggle("is-solved", isSolved);
          row.classList.remove(...DIFF_CLASSES);
          const item = findItemById(sheet, cb.dataset.id);
          if (isSolved && item && item.difficulty && DIFF_CLASS_BY_CODE[item.difficulty]) {
            row.classList.add(DIFF_CLASS_BY_CODE[item.difficulty]);
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

// ---------- Boot ----------

(async function main() {
  await loadData();
  render();
  initFirebase();
})();
