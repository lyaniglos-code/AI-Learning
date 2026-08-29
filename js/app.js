/* ============================================================
   TokenWise — app logic (hash router + views)
   ============================================================ */

"use strict";

const $ = (sel) => document.querySelector(sel);
const app = () => $("#app");

/* ---------- persistence ---------- */
const store = {
  get(key, fallback) {
    try { const v = localStorage.getItem("np_" + key); return v ? JSON.parse(v) : fallback; }
    catch { return fallback; }
  },
  set(key, val) { localStorage.setItem("np_" + key, JSON.stringify(val)); }
};

const progress = {
  done(courseId, lessonId) { return store.get("progress", []).includes(courseId + ":" + lessonId); },
  toggle(courseId, lessonId) {
    const key = courseId + ":" + lessonId;
    let p = store.get("progress", []);
    p = p.includes(key) ? p.filter(x => x !== key) : [...p, key];
    store.set("progress", p);
  },
  courseCount(courseId) {
    return store.get("progress", []).filter(x => x.startsWith(courseId + ":")).length;
  },
  total() { return store.get("progress", []).length; }
};

const track = {
  list() { return store.get("track", []); },
  has(c, l) { return this.list().some(t => t.c === c && t.l === l); },
  toggle(c, l) {
    let t = this.list();
    t = this.has(c, l) ? t.filter(x => !(x.c === c && x.l === l)) : [...t, { c, l }];
    store.set("track", t);
  }
};

window.toggleSidebar = () => {
  document.body.classList.toggle("nosb");
  localStorage.setItem("np_sidebar", document.body.classList.contains("nosb") ? "closed" : "open");
};

function toast(msg) {
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2200);
}

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/* ---------- helpers ---------- */
const RES_ICONS = { video: "🎬", course: "🎓", paper: "📄", article: "📰", docs: "📘", tool: "🛠️", code: "💻", book: "📚", newsletter: "✉️", internal: "🧭", podcast: "🎧", channel: "📺" };

function mediaSection(media, title) {
  if (!media || !media.length) return "";
  return `
    <div class="card" style="margin-top:16px">
      <div class="eyebrow" style="color:var(--accent-2)">${title || "🎧 Watch & listen today"}</div>
      ${media.map(m => `
        <a class="resource-link" href="${m.url}" target="_blank" rel="noopener">
          <span class="r-ico">${m.kind === "video" ? "📺" : "🎧"}</span>
          <span style="flex:1">
            <span style="display:block;font-weight:600">${esc(m.title)}</span>
            <span style="display:block;font-size:0.8rem;color:var(--text-faint)">${esc(m.source)}</span>
            <span style="display:block;font-size:0.84rem;color:var(--text-dim);margin-top:2px">${esc(m.why)}</span>
          </span>
          <span class="r-type">${esc(m.kind)}</span>
        </a>`).join("")}
      <div style="font-size:0.78rem;color:var(--text-faint);margin-top:10px">More shows and channels live in the <a href="#/resources">Resources library</a>.</div>
    </div>`;
}

function resourceLinks(resources) {
  return resources.map(r => `
    <a class="resource-link" href="${r.url}" ${r.url.startsWith("#") ? "" : 'target="_blank" rel="noopener"'}>
      <span class="r-ico">${RES_ICONS[r.type] || "🔗"}</span>
      <span style="flex:1">${esc(r.title)}</span>
      <span class="r-type">${esc(r.type)}</span>
    </a>`).join("");
}

function courseById(id) { return COURSES.find(c => c.id === id); }

/* ============================================================
   VIEWS
   ============================================================ */

/* ---------- Daily Brief (home) ---------- */
function viewHome() {
  const ed = EDITIONS[0];
  const totalLessons = COURSES.reduce((n, c) => n + c.lessons.length, 0);
  const doneLessons = progress.total();

  const stories = ed.stories.map(s => `
    <div class="story">
      <h3>${esc(s.title)}</h3>
      <div class="story-body">${esc(s.body)}</div>
      <div class="why"><b>Why it matters for learners:</b> ${esc(s.why)}</div>
      <div class="src">Sources: ${s.sources.map(x => `<a href="${x.url}" target="_blank" rel="noopener">${esc(x.label)}</a>`).join(" · ")}</div>
    </div>`).join("");

  const archive = EDITIONS.slice(1, 6).map((e, i) => `
    <div class="archive-item" onclick="location.hash='#/edition/${i + 1}'">
      <span>${esc(e.headline)}</span><span>${esc(e.displayDate.split("·")[0].trim())}</span>
    </div>`).join("");

  app().innerHTML = `
    <div class="container">
      <div class="brief-hero">
        <div class="brief-date">🪙 The Daily Token — ${esc(ed.displayDate)}</div>
        <div class="brief-title">${esc(ed.headline)}</div>
        <p class="brief-summary">${esc(ed.summary)}</p>
      </div>

      <div class="stat-row">
        <div class="stat"><div class="s-num">${ed.stories.length}</div><div class="s-label">Stories today</div></div>
        <div class="stat"><div class="s-num">${doneLessons}/${totalLessons}</div><div class="s-label">Lessons completed</div></div>
        <div class="stat"><div class="s-num">${COURSES.length}</div><div class="s-label">Courses</div></div>
        <div class="stat"><div class="s-num">${DECKS.reduce((n, d) => n + d.cards.length, 0)}</div><div class="s-label">Flashcards</div></div>
      </div>

      <div class="card">
        <div class="eyebrow">Today's top stories</div>
        ${stories}
      </div>

      ${mediaSection(ed.media)}

      <div class="grid grid-2" style="margin-top:16px">
        <div class="term-box">
          <div class="eyebrow" style="color:var(--accent-2)">📖 Term of the day</div>
          <div class="term">${esc(ed.term.word)}</div>
          <p style="color:var(--text-dim);font-size:0.92rem">${esc(ed.term.definition)}</p>
          <a href="${ed.term.link}" style="font-size:0.85rem;font-weight:700">Learn more →</a>
        </div>
        <div class="card" style="margin-top:0">
          <div class="eyebrow" style="color:var(--accent-3)">⚡ Try this today</div>
          <p style="color:var(--text-dim);font-size:0.92rem">${esc(ed.tryThis)}</p>
          <hr class="sep" style="margin:14px 0">
          <div class="eyebrow">Go deeper</div>
          ${ed.learnLinks.map(l => `<div style="margin-bottom:6px"><a href="${l.href}" style="font-size:0.88rem">→ ${esc(l.label)}</a></div>`).join("")}
        </div>
      </div>

      ${EDITIONS.length > 1 ? `
      <div class="card" style="margin-top:16px">
        <div class="eyebrow">Past editions</div>${archive}
        <div style="margin-top:12px"><a href="#/archive" style="font-size:0.88rem;font-weight:700">🗓️ Browse all ${EDITIONS.length} editions →</a></div>
      </div>` : `
      <div class="card" style="margin-top:16px">
        <div class="eyebrow">About the Daily Token</div>
        <p style="color:var(--text-dim);font-size:0.9rem">A new edition is published each day, summarizing the most important AI developments with a learner's lens: every story links to its sources and to the course that explains the concepts behind it. This is Edition #1 — the <a href="#/archive">archive</a> builds from here.</p>
      </div>`}
    </div>`;
}

/* ---------- Archive: every past edition ---------- */
let archiveQuery = "";

function editionMatches(e, q) {
  if (!q) return true;
  const hay = [
    e.headline, e.summary, e.displayDate, e.date,
    e.term && e.term.word,
    ...(e.stories || []).map(s => s.title + " " + s.body + " " + s.why)
  ].filter(Boolean).join(" ").toLowerCase();
  return hay.includes(q);
}

function archiveList() {
  const q = archiveQuery.trim().toLowerCase();
  const hits = EDITIONS.map((e, i) => ({ e, i })).filter(({ e }) => editionMatches(e, q));
  if (!hits.length) {
    return `<div class="card empty-note">No editions mention “${esc(archiveQuery)}” yet.</div>`;
  }
  return hits.map(({ e, i }) => `
    <div class="card archive-card" onclick="location.hash='#/edition/${i}'">
      <div class="ac-date">${esc(e.displayDate)}</div>
      <h3>${esc(e.headline)}</h3>
      <p>${esc(e.summary)}</p>
      <div class="ac-foot">
        ${i === 0 ? '<span class="ac-latest">Latest</span>' : ""}
        <span>${e.stories.length} stories</span>
        ${e.media ? `<span>· ${e.media.length} listens</span>` : ""}
        ${e.term ? `<span>· Term: ${esc(e.term.word)}</span>` : ""}
        <span style="margin-left:auto;color:var(--accent)">Read edition →</span>
      </div>
    </div>`).join("");
}

function viewArchive() {
  const n = EDITIONS.length;
  app().innerHTML = `
    <div class="container">
      <div class="eyebrow">Archive</div>
      <h1 class="page-title">Every edition of The Daily Token</h1>
      <p class="page-desc">Each morning's brief is kept here permanently — ${n} edition${n === 1 ? "" : "s"} published so far. Search across headlines, stories, and terms of the day.</p>
      <input id="archiveSearch" class="text-input" placeholder="Search all editions — e.g. “regulation”, “Anthropic”, “agents”…"
             value="${esc(archiveQuery)}" oninput="archiveFilter(this.value)" style="margin-bottom:18px">
      <div id="archiveList">${archiveList()}</div>
    </div>`;
  if (archiveQuery) {
    const inp = $("#archiveSearch");
    if (inp) { inp.focus(); inp.setSelectionRange(inp.value.length, inp.value.length); }
  }
}

window.archiveFilter = (v) => {
  archiveQuery = v;
  const el = $("#archiveList");
  if (el) el.innerHTML = archiveList();
};

/* ---------- A single edition (permanent link) ---------- */
function viewEdition(idx) {
  const ed = EDITIONS[idx];
  if (!ed) { location.hash = "#/archive"; return; }
  const isToday = idx === 0;
  const newer = idx > 0 ? idx - 1 : null;          // lower index = more recent
  const older = idx < EDITIONS.length - 1 ? idx + 1 : null;

  const stories = ed.stories.map(s => `
    <div class="story">
      <h3>${esc(s.title)}</h3>
      <div class="story-body">${esc(s.body)}</div>
      <div class="why"><b>Why it matters:</b> ${esc(s.why)}</div>
      <div class="src">Sources: ${s.sources.map(x => `<a href="${x.url}" target="_blank" rel="noopener">${esc(x.label)}</a>`).join(" · ")}</div>
    </div>`).join("");

  app().innerHTML = `
    <div class="container">
      <a href="#/archive" style="font-size:0.85rem">← All editions</a>
      <div class="brief-hero" style="margin-top:14px">
        <div class="brief-date">🪙 The Daily Token — ${esc(ed.displayDate)}${isToday ? " · current" : ""}</div>
        <div class="brief-title">${esc(ed.headline)}</div>
        <p class="brief-summary">${esc(ed.summary)}</p>
      </div>

      <div class="card">
        <div class="eyebrow">${isToday ? "Today's top stories" : "Top stories that day"}</div>
        ${stories}
      </div>

      ${mediaSection(ed.media, isToday ? "🎧 Watch & listen today" : "🎧 That day's watch & listen")}

      <div class="grid grid-2" style="margin-top:16px">
        ${ed.term ? `
        <div class="term-box">
          <div class="eyebrow" style="color:var(--accent-2)">📖 Term of the day</div>
          <div class="term">${esc(ed.term.word)}</div>
          <p style="color:var(--text-dim);font-size:0.92rem">${esc(ed.term.definition)}</p>
          <a href="${ed.term.link}" style="font-size:0.85rem;font-weight:700">Learn more →</a>
        </div>` : ""}
        ${ed.tryThis ? `
        <div class="card" style="margin-top:0">
          <div class="eyebrow" style="color:var(--accent-3)">⚡ Try this</div>
          <p style="color:var(--text-dim);font-size:0.92rem">${esc(ed.tryThis)}</p>
          ${ed.learnLinks && ed.learnLinks.length ? `
            <hr class="sep" style="margin:14px 0">
            <div class="eyebrow">Go deeper</div>
            ${ed.learnLinks.map(l => `<div style="margin-bottom:6px"><a href="${l.href}" style="font-size:0.88rem">→ ${esc(l.label)}</a></div>`).join("")}` : ""}
        </div>` : ""}
      </div>

      <div class="lesson-nav">
        ${older !== null ? `<a class="btn ghost" href="#/edition/${older}">← Older edition</a>` : "<span></span>"}
        ${newer !== null ? `<a class="btn ghost" href="#/edition/${newer}">Newer edition →</a>` : `<a class="btn ghost" href="#/">Today's edition →</a>`}
      </div>
    </div>`;
  window.scrollTo(0, 0);
}

/* ---------- Learning paths ---------- */
function viewPaths() {
  const paths = [
    {
      name: "🌱 The Newcomer", who: "Never used AI, or only casually. Zero technical background needed.",
      steps: [
        ["Course: AI Foundations", "#/course/foundations", "What AI is, its history, and confident daily use"],
        ["Deck: AI Vocabulary Essentials", "#/flashcards/vocab", "Drill the 20 terms every article assumes"],
        ["Quiz: AI Foundations", "#/quiz/foundations", "Check yourself before moving on"],
        ["Course: Prompt Engineering", "#/course/prompting", "Get dramatically better output from any chatbot"],
        ["Habit: The Daily Token", "#/", "10 minutes a day keeps you current"]
      ]
    },
    {
      name: "🚀 The Practitioner", who: "Comfortable with chatbots; wants real understanding and professional fluency.",
      steps: [
        ["Course: How Models Actually Work", "#/course/models", "Tokens, transformers, training, and why models fail"],
        ["Course: Prompt Engineering", "#/course/prompting", "System prompts, few-shot, structured output"],
        ["Course: The AI Industry", "#/course/industry", "Decode the companies, chips, and money"],
        ["Quizzes: Models + Industry", "#/quizzes", "Prove it to yourself"],
        ["Course: Safety, Ethics & Policy", "#/course/safety", "The debates shaping AI's rules"]
      ]
    },
    {
      name: "⚙️ The Engineer", who: "Software developers ready to ship AI features and agents.",
      steps: [
        ["Course: How Models Actually Work", "#/course/models", "The mental model everything builds on"],
        ["Course: Building with AI", "#/course/engineering", "APIs, RAG, agents, evals, production"],
        ["Watch: Karpathy — build GPT from scratch", "#/resources", "The rite of passage (Resources → videos)"],
        ["Capstone: build a RAG chatbot + 20 evals", "#/course/engineering", "The project that exercises every lesson"],
        ["Deck: Companies & Industry", "#/flashcards/industry", "Sound sharp in architecture meetings"]
      ]
    }
  ];

  app().innerHTML = `
    <div class="container">
      <div class="eyebrow">Learning paths</div>
      <h1 class="page-title">Choose your route</h1>
      <p class="page-desc">Three curated routes through the material — or build your own custom track by adding any lesson to <a href="#/mytrack">My Track</a>.</p>
      ${paths.map(p => `
        <div class="card">
          <h3 style="font-size:1.2rem;margin-bottom:4px">${p.name}</h3>
          <p style="color:var(--text-dim);font-size:0.9rem;margin-bottom:18px">${p.who}</p>
          ${p.steps.map((s, i) => `
            <div class="path-step">
              <div class="path-line">
                <div class="path-dot">${i + 1}</div>
                ${i < p.steps.length - 1 ? '<div class="path-rail"></div>' : ""}
              </div>
              <div class="path-body">
                <a href="${s[1]}" style="font-weight:700">${s[0]}</a>
                <div style="color:var(--text-faint);font-size:0.84rem">${s[2]}</div>
              </div>
            </div>`).join("")}
        </div>`).join("")}
    </div>`;
}

/* ---------- Courses catalog ---------- */
function viewCourses() {
  app().innerHTML = `
    <div class="container">
      <div class="eyebrow">Courses</div>
      <h1 class="page-title">Training courses</h1>
      <p class="page-desc">Six courses spanning total beginner to production engineer. Lessons track your progress locally; add any lesson to My Track to build a custom curriculum.</p>
      <div class="grid grid-2">
        ${COURSES.map(c => {
          const done = progress.courseCount(c.id);
          const pct = Math.round(done / c.lessons.length * 100);
          return `
          <div class="course-card" onclick="location.hash='#/course/${c.id}'">
            <div style="display:flex;justify-content:space-between;align-items:flex-start">
              <span class="course-ico">${c.icon}</span>
              <span class="pill ${c.level}">${c.levelLabel}</span>
            </div>
            <h3>${esc(c.title)}</h3>
            <p>${esc(c.blurb)}</p>
            ${c.living ? `<div><span class="tag" style="color:var(--accent-3)">🔄 Living course — updated as tools change</span></div>` : ""}
            <div class="course-meta"><span>${c.lessons.length} lessons · ${c.hours}</span><span>${done}/${c.lessons.length} done</span></div>
            <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
          </div>`;
        }).join("")}
      </div>
    </div>`;
}

/* ---------- Course detail ---------- */
function viewCourse(id) {
  const c = courseById(id);
  if (!c) { location.hash = "#/courses"; return; }
  const done = progress.courseCount(c.id);
  const pct = Math.round(done / c.lessons.length * 100);
  app().innerHTML = `
    <div class="container">
      <a href="#/courses" style="font-size:0.85rem">← All courses</a>
      <div style="display:flex;align-items:center;gap:16px;margin:16px 0 6px">
        <span style="font-size:2.4rem">${c.icon}</span>
        <div>
          <h1 class="page-title" style="margin-bottom:2px">${esc(c.title)}</h1>
          <span class="pill ${c.level}">${c.levelLabel}</span>
          <span class="tag" style="margin-left:8px">${c.lessons.length} lessons · ${c.hours}</span>
          ${c.living ? `<span class="tag" style="color:var(--accent-3)">🔄 Living course — updated as tools change</span>` : ""}
        </div>
      </div>
      <p class="page-desc">${esc(c.blurb)}</p>
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:22px">
        <div class="progress-track" style="flex:1"><div class="progress-fill" style="width:${pct}%"></div></div>
        <span style="font-size:0.82rem;color:var(--text-faint)">${pct}% complete</span>
      </div>
      ${c.lessons.map((l, i) => `
        <div class="lesson-row ${progress.done(c.id, l.id) ? "done" : ""}" onclick="location.hash='#/lesson/${c.id}/${i}'">
          <div class="lesson-num">${progress.done(c.id, l.id) ? "✓" : i + 1}</div>
          <div class="lt"><b>${esc(l.title)}</b><small>${l.minutes} min read</small></div>
          <span style="color:var(--text-faint)">→</span>
        </div>`).join("")}
    </div>`;
}

/* ---------- Lesson ---------- */
function viewLesson(courseId, idx) {
  const c = courseById(courseId);
  if (!c) { location.hash = "#/courses"; return; }
  idx = parseInt(idx, 10);
  const l = c.lessons[idx];
  if (!l) { location.hash = "#/course/" + courseId; return; }
  const isDone = progress.done(c.id, l.id);
  const inTrack = track.has(c.id, l.id);

  app().innerHTML = `
    <div class="container" style="max-width:820px">
      <a href="#/course/${c.id}" style="font-size:0.85rem">← ${esc(c.title)}</a>
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin:14px 0 4px">
        <h1 class="page-title" style="margin:0">${esc(l.title)}</h1>
      </div>
      <div style="color:var(--text-faint);font-size:0.83rem;margin-bottom:18px">
        Lesson ${idx + 1} of ${c.lessons.length} · ${l.minutes} min · ${esc(c.title)}${l.updated ? ` · <span style="color:var(--accent-3)">🔄 Last updated ${esc(l.updated)}</span>` : ""}
      </div>
      <div style="display:flex;gap:10px;margin-bottom:22px;flex-wrap:wrap">
        <button class="btn small ${isDone ? "" : "ghost"}" onclick="toggleDone('${c.id}','${l.id}')">${isDone ? "✓ Completed" : "Mark complete"}</button>
        <button class="btn small ghost" onclick="toggleTrack('${c.id}','${l.id}')">${inTrack ? "★ In My Track" : "☆ Add to My Track"}</button>
      </div>

      <div class="lesson-content card">${l.content}</div>

      <div class="keypoints">
        <div class="kp-title">Key takeaways</div>
        <ul style="margin-left:20px">${l.keypoints.map(k => `<li>${esc(k)}</li>`).join("")}</ul>
      </div>

      ${l.resources && l.resources.length ? `
        <div class="eyebrow" style="margin-top:24px">Linked resources</div>
        ${resourceLinks(l.resources)}` : ""}

      <div class="lesson-nav">
        ${idx > 0 ? `<a class="btn ghost" href="#/lesson/${c.id}/${idx - 1}">← Previous</a>` : "<span></span>"}
        ${idx < c.lessons.length - 1
          ? `<a class="btn" href="#/lesson/${c.id}/${idx + 1}" onclick="progressAuto('${c.id}','${l.id}')">Complete & continue →</a>`
          : `<a class="btn grad" href="#/course/${c.id}" onclick="progressAuto('${c.id}','${l.id}')">Finish course ✓</a>`}
      </div>
    </div>`;
  window.scrollTo(0, 0);
}

window.toggleDone = (c, l) => { progress.toggle(c, l); route(); };
window.toggleTrack = (c, l) => {
  track.toggle(c, l);
  toast(track.has(c, l) ? "Added to My Track" : "Removed from My Track");
  route();
};
window.progressAuto = (c, l) => { if (!progress.done(c, l)) progress.toggle(c, l); };

/* ---------- My Track ---------- */
function viewMyTrack() {
  const items = track.list();
  app().innerHTML = `
    <div class="container">
      <div class="eyebrow">Custom curriculum</div>
      <h1 class="page-title">My Track</h1>
      <p class="page-desc">Your personal course, assembled from any lessons on the site. Browse the <a href="#/courses">courses</a> and hit "☆ Add to My Track" on lessons you want here.</p>
      ${items.length === 0
        ? `<div class="card empty-note">Nothing here yet. Open any lesson and click <b>☆ Add to My Track</b> to build your own curriculum.</div>`
        : items.map((t, n) => {
            const c = courseById(t.c);
            if (!c) return "";
            const i = c.lessons.findIndex(x => x.id === t.l);
            const l = c.lessons[i];
            if (!l) return "";
            return `
            <div class="lesson-row ${progress.done(t.c, t.l) ? "done" : ""}" onclick="location.hash='#/lesson/${t.c}/${i}'">
              <div class="lesson-num">${progress.done(t.c, t.l) ? "✓" : n + 1}</div>
              <div class="lt"><b>${esc(l.title)}</b><small>${esc(c.title)} · ${l.minutes} min</small></div>
              <button class="btn small ghost" onclick="event.stopPropagation();toggleTrack('${t.c}','${t.l}')">Remove</button>
            </div>`;
          }).join("")}
    </div>`;
}

/* ---------- Flashcards ---------- */
let flashState = null;

function viewDecks() {
  app().innerHTML = `
    <div class="container">
      <div class="eyebrow">Flashcards</div>
      <h1 class="page-title">Flashcard decks</h1>
      <p class="page-desc">Spaced-repetition-style drilling. Click a card to flip it; mark whether you knew it, and missed cards come back around.</p>
      <div class="grid grid-2">
        ${DECKS.map(d => `
          <div class="deck-card" onclick="location.hash='#/flashcards/${d.id}'">
            <div style="font-size:1.8rem;margin-bottom:8px">${d.icon}</div>
            <h3 style="margin-bottom:4px">${esc(d.title)}</h3>
            <p style="color:var(--text-dim);font-size:0.87rem;margin-bottom:10px">${esc(d.desc)}</p>
            <span class="tag">${d.cards.length} cards</span>
          </div>`).join("")}
      </div>
    </div>`;
}

function viewDeck(deckId) {
  const d = DECKS.find(x => x.id === deckId);
  if (!d) { location.hash = "#/flashcards"; return; }
  if (!flashState || flashState.deckId !== deckId) {
    flashState = {
      deckId,
      queue: d.cards.map((_, i) => i).sort(() => Math.random() - 0.5),
      missed: [],
      seen: 0,
      known: 0,
      flipped: false
    };
  }
  renderFlash(d);
}

function renderFlash(d) {
  const s = flashState;
  if (s.queue.length === 0 && s.missed.length > 0) {
    s.queue = s.missed.sort(() => Math.random() - 0.5);
    s.missed = [];
  }
  if (s.queue.length === 0) {
    app().innerHTML = `
      <div class="container" style="max-width:640px;text-align:center">
        <h1 class="page-title" style="margin-top:40px">Deck complete 🎉</h1>
        <p class="page-desc" style="margin:0 auto 20px">You got through all ${d.cards.length} cards — ${s.known} known on first pass (${Math.round(s.known / d.cards.length * 100)}%).</p>
        <div style="display:flex;gap:10px;justify-content:center">
          <button class="btn" onclick="flashRestart()">Study again</button>
          <a class="btn ghost" href="#/flashcards">All decks</a>
        </div>
      </div>`;
    return;
  }
  const card = d.cards[s.queue[0]];
  app().innerHTML = `
    <div class="container" style="max-width:680px">
      <a href="#/flashcards" style="font-size:0.85rem">← All decks</a>
      <h1 class="page-title" style="margin-top:12px">${d.icon} ${esc(d.title)}</h1>
      <div class="progress-track" style="margin-top:10px"><div class="progress-fill" style="width:${Math.round(s.seen / (s.seen + s.queue.length + s.missed.length) * 100)}%"></div></div>
      <div class="flash-stage">
        <div class="flashcard ${s.flipped ? "flipped" : ""}" onclick="flashFlip()">
          <div class="flash-face flash-front">
            <div class="f-label">Question — click to flip</div>
            <div class="f-text">${esc(card.q)}</div>
          </div>
          <div class="flash-face flash-back">
            <div class="f-label">Answer</div>
            <div class="f-text">${esc(card.a)}</div>
          </div>
        </div>
      </div>
      <div class="flash-controls">
        ${s.flipped ? `
          <button class="btn ghost" style="border-color:rgba(255,107,129,0.5);color:var(--danger)" onclick="flashAnswer(false)">✗ Didn't know</button>
          <button class="btn ghost" style="border-color:rgba(67,214,181,0.5);color:var(--accent-3)" onclick="flashAnswer(true)">✓ Knew it</button>`
        : `<button class="btn" onclick="flashFlip()">Flip card</button>`}
      </div>
      <div class="flash-count">${s.queue.length + s.missed.length} remaining${s.missed.length ? " · " + s.missed.length + " to retry" : ""}</div>
    </div>`;
}

window.flashFlip = () => { flashState.flipped = !flashState.flipped; renderFlash(DECKS.find(x => x.id === flashState.deckId)); };
window.flashAnswer = (knew) => {
  const s = flashState;
  const cur = s.queue.shift();
  s.seen++;
  if (knew) s.known++; else s.missed.push(cur);
  s.flipped = false;
  renderFlash(DECKS.find(x => x.id === s.deckId));
};
window.flashRestart = () => { const id = flashState.deckId; flashState = null; viewDeck(id); };

/* ---------- Quizzes ---------- */
let quizState = null;

function viewQuizzes() {
  const scores = store.get("quiz_scores", {});
  app().innerHTML = `
    <div class="container">
      <div class="eyebrow">Quizzes</div>
      <h1 class="page-title">Test yourself</h1>
      <p class="page-desc">Instant feedback with explanations on every question. Best scores are saved.</p>
      <div class="grid grid-2">
        ${QUIZZES.map(q => {
          const best = scores[q.id];
          return `
          <div class="deck-card" onclick="location.hash='#/quiz/${q.id}'">
            <div style="font-size:1.8rem;margin-bottom:8px">${q.icon}</div>
            <h3 style="margin-bottom:4px">${esc(q.title)}</h3>
            <p style="color:var(--text-dim);font-size:0.87rem;margin-bottom:10px">${esc(q.desc)}</p>
            <span class="tag">${q.questions.length} questions</span>
            ${best !== undefined ? `<span class="tag" style="color:var(--accent-3)">Best: ${best}/${q.questions.length}</span>` : ""}
          </div>`;
        }).join("")}
      </div>
    </div>`;
}

function viewQuiz(quizId) {
  const q = QUIZZES.find(x => x.id === quizId);
  if (!q) { location.hash = "#/quizzes"; return; }
  if (!quizState || quizState.quizId !== quizId) {
    quizState = { quizId, idx: 0, score: 0, answered: null };
  }
  renderQuiz(q);
}

function renderQuiz(q) {
  const s = quizState;
  if (s.idx >= q.questions.length) {
    const pct = Math.round(s.score / q.questions.length * 100);
    const scores = store.get("quiz_scores", {});
    if (!(q.id in scores) || s.score > scores[q.id]) { scores[q.id] = s.score; store.set("quiz_scores", scores); }
    const course = courseById(q.courseId);
    app().innerHTML = `
      <div class="container" style="max-width:560px;text-align:center">
        <h1 class="page-title" style="margin-top:36px">${pct >= 80 ? "Excellent! 🏆" : pct >= 60 ? "Solid work 👏" : "Keep going 💪"}</h1>
        <div class="score-ring" style="--pct:${pct}"><div class="score-inner">${s.score}/${q.questions.length}</div></div>
        <p class="page-desc" style="margin:0 auto 22px">${pct >= 80 ? "You've got this material down." : "Review the course and come back — the questions stay the same, your understanding won't."}</p>
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
          <button class="btn" onclick="quizRestart()">Retry quiz</button>
          ${course ? `<a class="btn ghost" href="#/course/${course.id}">Review: ${esc(course.title)}</a>` : ""}
          <a class="btn ghost" href="#/quizzes">All quizzes</a>
        </div>
      </div>`;
    return;
  }
  const question = q.questions[s.idx];
  app().innerHTML = `
    <div class="container" style="max-width:680px">
      <a href="#/quizzes" style="font-size:0.85rem">← All quizzes</a>
      <h1 class="page-title" style="margin-top:12px">${q.icon} ${esc(q.title)}</h1>
      <div style="display:flex;align-items:center;gap:12px;margin:10px 0 24px">
        <div class="progress-track" style="flex:1"><div class="progress-fill" style="width:${Math.round(s.idx / q.questions.length * 100)}%"></div></div>
        <span style="font-size:0.8rem;color:var(--text-faint)">${s.idx + 1}/${q.questions.length}</span>
      </div>
      <div class="card">
        <p style="font-weight:600;font-size:1.05rem;margin-bottom:18px">${esc(question.q)}</p>
        ${question.options.map((o, i) => {
          let cls = "";
          if (s.answered !== null) {
            if (i === question.correct) cls = "correct";
            else if (i === s.answered) cls = "wrong";
          }
          return `<button class="q-option ${cls}" ${s.answered !== null ? "disabled" : ""} onclick="quizAnswer(${i})">${String.fromCharCode(65 + i)}. ${esc(o)}</button>`;
        }).join("")}
        ${s.answered !== null ? `
          <div class="q-explain"><b>${s.answered === question.correct ? "Correct." : "Not quite."}</b> ${esc(question.explain)}</div>
          <div style="text-align:right"><button class="btn" onclick="quizNext()">${s.idx === q.questions.length - 1 ? "See results" : "Next question →"}</button></div>` : ""}
      </div>
    </div>`;
}

window.quizAnswer = (i) => {
  const q = QUIZZES.find(x => x.id === quizState.quizId);
  if (quizState.answered !== null) return;
  quizState.answered = i;
  if (i === q.questions[quizState.idx].correct) quizState.score++;
  renderQuiz(q);
};
window.quizNext = () => {
  quizState.idx++;
  quizState.answered = null;
  renderQuiz(QUIZZES.find(x => x.id === quizState.quizId));
};
window.quizRestart = () => { const id = quizState.quizId; quizState = null; viewQuiz(id); };

/* ---------- Timeline ---------- */
function viewTimeline() {
  app().innerHTML = `
    <div class="container" style="max-width:760px">
      <div class="eyebrow">History</div>
      <h1 class="page-title">The story of AI, 1943 → today</h1>
      <p class="page-desc">Eight decades from the first artificial neuron to trillion-token models — including the winters everyone forgets.
        <span style="display:block;margin-top:8px;font-size:0.8rem">
          <span class="tag">● Founding era</span><span class="tag" style="color:var(--warn)">● Symbolic era</span><span class="tag" style="color:var(--accent-2)">● Deep learning</span><span class="tag" style="color:var(--accent-3)">● LLM era</span>
        </span>
      </p>
      <div class="timeline">
        ${TIMELINE.map(t => `
          <div class="tl-item era-${t.era}">
            <div class="tl-year">${esc(t.year)}</div>
            <h4>${esc(t.title)}</h4>
            <p>${esc(t.body)}</p>
          </div>`).join("")}
      </div>
      <div class="card" style="margin-top:10px">
        <div class="eyebrow">Keep drilling</div>
        <a href="#/flashcards/history" style="font-weight:700">→ AI History flashcard deck</a>
      </div>
    </div>`;
}

/* ---------- Resources ---------- */
function viewResources() {
  app().innerHTML = `
    <div class="container">
      <div class="eyebrow">Library</div>
      <h1 class="page-title">Curated resources</h1>
      <p class="page-desc">The genuinely-worth-your-time list: videos, courses, papers, newsletters, tools, and books — each tagged by level.</p>
      ${RESOURCES.map(cat => `
        <div class="card">
          <h3 style="margin-bottom:14px">${cat.icon} ${esc(cat.category)}</h3>
          ${cat.items.map(r => `
            <a class="resource-link" href="${r.url}" target="_blank" rel="noopener">
              <span class="r-ico">${RES_ICONS[r.type] || "🔗"}</span>
              <span style="flex:1">
                <span style="display:block;font-weight:600">${esc(r.title)}</span>
                <span style="display:block;font-size:0.82rem;color:var(--text-dim)">${esc(r.desc)}</span>
              </span>
              <span class="pill ${r.level === "all" ? "all" : r.level}" style="flex-shrink:0">${r.level}</span>
            </a>`).join("")}
        </div>`).join("")}
    </div>`;
}

/* ---------- AI Tutor ---------- */
let chatHistory = [];

function viewTutor() {
  const key = store.get("api_key", "");
  app().innerHTML = `
    <div class="container" style="max-width:820px">
      <div class="eyebrow">AI Tutor</div>
      <h1 class="page-title">Ask the tutor</h1>
      <p class="page-desc">A Claude-powered tutor that knows this site's curriculum. It runs on your own Anthropic API key — your key is stored only in this browser and sent only to Anthropic, never anywhere else.</p>
      <div class="card" style="margin-bottom:14px">
        <div style="display:flex;gap:10px;align-items:center">
          <input id="apiKey" class="text-input" type="password" placeholder="sk-ant-..." value="${esc(key)}">
          <button class="btn small" onclick="saveKey()">Save key</button>
        </div>
        ${key ? "" : `
        <hr class="sep" style="margin:16px 0 10px">
        <div class="eyebrow">First time? Get a key in ~3 minutes</div>
        <div class="howto-steps">
          <div class="howto-step"><span class="hs-num">1</span><span>Go to <a href="https://console.anthropic.com" target="_blank" rel="noopener"><b>console.anthropic.com</b></a> and sign up (or log in). This is Anthropic's developer console — separate from a claude.ai account.</span></div>
          <div class="howto-step"><span class="hs-num">2</span><span>Add billing under <b>Settings → Billing</b>. The tutor is pay-as-you-go and cheap: a typical question costs well under a cent, so $5 of credit lasts a long time.</span></div>
          <div class="howto-step"><span class="hs-num">3</span><span>Open <b>Settings → API Keys</b> and click <b>Create Key</b>. Give it any name, e.g. "TokenWise tutor".</span></div>
          <div class="howto-step"><span class="hs-num">4</span><span>Copy the key — it starts with <code>sk-ant-</code> and is shown <b>only once</b>. If you lose it, just create a new one.</span></div>
          <div class="howto-step"><span class="hs-num">5</span><span>Paste it in the box above and click <b>Save key</b>. Done — start chatting below.</span></div>
        </div>
        <p style="font-size:0.8rem;color:var(--text-faint);margin-top:12px">🔒 Privacy & safety: the key lives in this browser's local storage on this device only. Don't use a key from your employer, and don't share your key with anyone. You can delete it anytime — clear the box, hit Save, or revoke the key in the console.</p>`}
      </div>
      <div class="chat-box">
        <div class="chat-scroll" id="chatScroll">
          ${chatHistory.length === 0 ? `<div class="msg sys">Ask anything — "explain attention like I'm 12", "quiz me on RAG", "what should I learn next if I know Python?"</div>` : ""}
          ${chatHistory.map(m => `<div class="msg ${m.role === "user" ? "user" : "ai"}">${esc(m.content)}</div>`).join("")}
        </div>
        <div class="chat-input-row">
          <textarea id="chatInput" placeholder="Ask the tutor..." onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();sendChat();}"></textarea>
          <button class="btn" onclick="sendChat()">Send</button>
        </div>
      </div>
    </div>`;
  const sc = $("#chatScroll"); if (sc) sc.scrollTop = sc.scrollHeight;
}

window.saveKey = () => {
  store.set("api_key", $("#apiKey").value.trim());
  toast("API key saved to this browser");
};

window.sendChat = async () => {
  const input = $("#chatInput");
  const text = input.value.trim();
  if (!text) return;
  const key = store.get("api_key", "");
  if (!key) { toast("Save your Anthropic API key first"); return; }

  chatHistory.push({ role: "user", content: text });
  input.value = "";
  viewTutor();
  const sc = $("#chatScroll");
  sc.insertAdjacentHTML("beforeend", `<div class="msg ai" id="pending">…thinking</div>`);
  sc.scrollTop = sc.scrollHeight;

  try {
    const resp = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
        "anthropic-dangerous-direct-browser-access": "true"
      },
      body: JSON.stringify({
        model: "claude-sonnet-5",
        max_tokens: 1024,
        system: "You are the friendly AI tutor on TokenWise (tokenwiseai.org), an AI-learning website with courses on: AI Foundations (beginner), How Models Work (transformers, training, RLHF), Prompt Engineering, Building with AI (APIs, RAG, agents, evals), The AI Industry, and AI Safety/Ethics/Policy — plus flashcards, quizzes, and an AI history timeline. Teach clearly and concisely with analogies. When relevant, point the learner to a specific course on the site. Keep answers under 250 words unless asked for depth.",
        messages: chatHistory.map(m => ({ role: m.role, content: m.content }))
      })
    });
    const data = await resp.json();
    if (data.error) throw new Error(data.error.message || "API error");
    chatHistory.push({ role: "assistant", content: data.content[0].text });
  } catch (e) {
    chatHistory.push({ role: "assistant", content: "⚠️ " + e.message + (location.protocol === "file:" ? " — note: if you opened this site as a local file, some browsers block API calls; serve it with a local server instead." : "") });
  }
  viewTutor();
};

/* ============================================================
   READ ALOUD (Web Speech API — built into the browser, free)
   ============================================================ */

const tts = {
  chunks: [],
  idx: 0,
  reading: false,
  paused: false,
  rate: parseFloat(localStorage.getItem("np_tts_rate") || "1"),
  pitch: parseFloat(localStorage.getItem("np_tts_pitch") || "1"),

  // drop any previously-saved Zira selection — she's the harshest legacy voice
  voiceName: (() => {
    const saved = localStorage.getItem("np_tts_voice") || "";
    return /zira/i.test(saved) ? "" : saved;
  })(),
  showPanel: false,

  // ---- ElevenLabs: optional studio-quality narration, bring-your-own-key ----
  el: {
    key: localStorage.getItem("np_el_key") || "",
    auth: localStorage.getItem("np_el_auth") || "",
    diag: "",
    voiceId: localStorage.getItem("np_el_voice") || "",
    voiceName: localStorage.getItem("np_el_name") || "",
    model: localStorage.getItem("np_el_model") || "",
    voices: [],
    loading: false,
    error: ""
  },

  useEleven() { return !!(this.el.key && this.el.voiceId); },

  supported() { return "speechSynthesis" in window; },

  // Every system voice gets a persona name — celestial and mythic, to match
  // the brand — plus a character note. Ordered best-sounding first; that order
  // also drives auto-selection.
  PERSONAS: [
    // Microsoft neural (Edge / Windows "Natural")
    { re: /\bava\b/i,                name: "Lyra",    tag: "warm, conversational" },
    { re: /\bandrew\b/i,             name: "Orion",   tag: "calm, grounded" },
    { re: /\bemma\b/i,               name: "Vesper",  tag: "bright, expressive" },
    { re: /\bbrian\b/i,              name: "Atlas",   tag: "steady, documentary" },
    { re: /\bjenny\b/i,              name: "Juno",    tag: "friendly, upbeat" },
    { re: /\baria\b/i,               name: "Nova",    tag: "crisp, newsreader" },
    { re: /\bguy\b/i,                name: "Kai",     tag: "easygoing" },
    { re: /\bsteffan\b/i,            name: "Caspian", tag: "measured" },
    { re: /\bchristopher\b/i,        name: "Cassius", tag: "deep, assured" },
    { re: /\bmichelle\b/i,           name: "Selene",  tag: "soft, unhurried" },
    { re: /\broger\b/i,              name: "Sable",   tag: "dry, low" },
    { re: /\beric\b/i,               name: "Rune",    tag: "even-toned" },
    { re: /natural|neural/i,         name: "Astra",   tag: "neural" },
    // Google (Chrome)
    { re: /google.*us english.*female/i, name: "Thalia", tag: "Google · bright" },
    { re: /google.*us english.*male/i,   name: "Lucian", tag: "Google · steady" },
    { re: /google.*(us|american) english/i, name: "Solis", tag: "Google · clear, neutral" },
    { re: /google.*uk english.*female/i, name: "Isolde", tag: "Google · British" },
    { re: /google.*uk english.*male/i,   name: "Alaric", tag: "Google · British" },
    { re: /google.*austral/i,        name: "Talia",   tag: "Google · Australian" },
    { re: /google.*indian?/i,        name: "Anara",   tag: "Google · Indian English" },
    { re: /^google/i,                name: "Halcyon", tag: "Google voice" },
    // Apple / other platform voices
    { re: /\bsamantha\b/i,           name: "Calla",   tag: "smooth" },
    { re: /\bkaren\b/i,              name: "Marlowe", tag: "Australian" },
    { re: /\bdaniel\b/i,             name: "Perseus", tag: "British" },
    { re: /\balex\b/i,               name: "Altair",  tag: "classic" },
    { re: /online/i,                 name: "Echo",    tag: "cloud voice" },
    // legacy Windows voices — usable, but noticeably synthetic
    { re: /\bmark\b/i,               name: "Draco",   tag: "legacy" },
    { re: /\bdavid\b/i,              name: "Corvin",  tag: "legacy" },
    { re: /\bhazel\b/i,              name: "Wren",    tag: "legacy" },
    { re: /\bzira\b/i,               name: "Nyx",     tag: "legacy, harsh" }
  ],

  persona(v) {
    if (!v) return { name: "Default", tag: "", tier: "standard" };
    const hit = this.PERSONAS.find(p => p.re.test(v.name));
    const neural = /natural|neural|online|google|premium|enhanced/i.test(v.name);
    const legacy = /zira|david|mark|hazel/i.test(v.name);
    return {
      name: hit ? hit.name : v.name.replace(/^(Microsoft|Google|Apple)\s+/i, "").replace(/\s*[-–(].*$/, "").trim(),
      tag: hit ? hit.tag : (neural ? "neural" : ""),
      tier: neural ? "signature" : legacy ? "legacy" : "standard"
    };
  },

  voiceScore(v) {
    const i = this.PERSONAS.findIndex(p => p.re.test(v.name));
    let rank = i === -1 ? 50 : i;
    // Zira is the harshest of the legacy set — never auto-select her.
    if (/zira/i.test(v.name)) rank += 100;
    else if (/david|mark|hazel/i.test(v.name)) rank += 40;
    return rank + (/^en-US/i.test(v.lang) ? 0 : 1); // nudge US English first
  },

  availableVoices() {
    const all = speechSynthesis.getVoices();
    // keep anything English by locale OR by name (some Google/Chrome voices
    // report unusual lang codes and were slipping through the old filter)
    const en = all.filter(v => /^en/i.test(v.lang) || /english/i.test(v.name));
    return (en.length ? en : all).sort((a, b) => this.voiceScore(a) - this.voiceScore(b) || a.name.localeCompare(b.name));
  },

  voice() {
    const list = this.availableVoices();
    if (this.voiceName) {
      const picked = list.find(v => v.name === this.voiceName);
      if (picked) return picked;
    }
    return list[0] || null;
  },

  setVoice(name) {
    this.voiceName = name;
    localStorage.setItem("np_tts_voice", name);
    if (this.reading) this.restartChunk();
    else this.preview();
    this.renderBar();
  },

  preview() {
    if (this.useEleven()) {
      const line = "Hi, I'm " + (this.el.voiceName || "your narrator") + ". This is how I'll read TokenWise to you.";
      this.fetchEleven(line)
        .then(url => { const a = new Audio(url); a.playbackRate = this.rate; a.onended = () => URL.revokeObjectURL(url); a.play(); })
        .catch(e => toast(e.message));
      return;
    }
    speechSynthesis.cancel();
    const v = this.voice();
    const u = new SpeechSynthesisUtterance(`Hi, I'm ${this.persona(v).name}. This is how I'll read TokenWise to you.`);
    if (v) u.voice = v;
    u.rate = this.rate;
    u.pitch = this.pitch;
    speechSynthesis.speak(u);
  },

  // Rewrite on-screen text into something a voice can say naturally.
  // Screens and ears want different things: "$130B" reads fine, but a voice
  // saying "dollar one hundred thirty bee" does not.
  humanize(t) {
    return t
      // emoji, arrows, and decorative glyphs — never read these aloud
      .replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2190}-\u{21FF}\u{FE0F}\u{2022}]/gu, " ")
      // separators become breaths
      .replace(/\s*[·|]\s*/g, ", ")
      .replace(/\s*[—–]\s*/g, ", ")
      .replace(/\.{3,}/g, ", ")
      // money and magnitudes
      .replace(/\$([\d.]+)\s*\/\s*\$([\d.]+)/g, "$$$1 and $$$2")   // "$5/$25" → "$5 and $25"
      // "input/output" → "input or output", but leave URLs like openai.com/news alone
      .replace(/([\w.]+)\s*\/\s*([\w.]+)/g, (m, a, b) => (a.includes(".") || b.includes(".")) ? m : a + " or " + b)
      .replace(/\$\s?([\d.]+)\s*B\b/gi, "$1 billion dollars")
      .replace(/\$\s?([\d.]+)\s*M\b/gi, "$1 million dollars")
      .replace(/\$\s?([\d.]+)\s*K\b/gi, "$1 thousand dollars")
      .replace(/\b([\d.]+)\s*B\b(?=\s|$|,|\.)/g, "$1 billion")
      .replace(/\b([\d.]+)\s*M\b(?=\s|$|,|\.)/g, "$1 million")
      .replace(/\b1M\b/g, "one million")
      // symbols
      .replace(/&/g, " and ")
      .replace(/(\d)\s*%/g, "$1 percent")
      .replace(/~\s*(\d)/g, "about $1")
      .replace(/#(\d)/g, "number $1")
      .replace(/\bvs\.?\b/gi, "versus")
      .replace(/\be\.g\.,?/gi, "for example,")
      .replace(/\bi\.e\.,?/gi, "that is,")
      .replace(/\betc\.\B/gi, "et cetera")
      // keep model names from being read as subtraction
      .replace(/([A-Za-z])-(\d)/g, "$1 $2")
      .replace(/\s{2,}/g, " ")
      .trim();
  },

  // Extract the page as structured segments so the voice can breathe
  // between sections instead of reading one endless run-on stream.
  pageSegments() {
    const clone = app().cloneNode(true);
    // strip controls and noise so the voice reads content, not buttons
    clone.querySelectorAll("button, .btn, .lesson-nav, .src, .r-type, textarea, input, .tag, .progress-track, .chat-input-row").forEach(el => el.remove());
    const sel = "h1,h2,h3,h4,p,li,blockquote,div";
    // leaf blocks only — containers with block children are skipped to avoid duplicates
    const blocks = [...clone.querySelectorAll(sel)].filter(el => !el.querySelector(sel));
    const segs = [];
    for (const el of blocks) {
      const text = this.humanize(el.innerText.replace(/\s+/g, " ").trim());
      if (!text) continue;
      const isHeading = /^H[1-4]$/.test(el.tagName) || el.classList.contains("eyebrow") || el.classList.contains("brief-title");
      // A narrator slows down for a title, then settles into pace for the body.
      // Headings also get a longer beat after them.
      segs.push({ text, pauseAfter: isHeading ? 850 : 450, rateMul: isHeading ? 0.92 : 1 });
    }
    if (!segs.length) {
      const all = this.humanize(clone.innerText.replace(/\s+/g, " ").trim());
      if (all) segs.push({ text: all, pauseAfter: 0, rateMul: 1 });
    }
    return segs;
  },

  start(text) {
    this.stop();
    const segs = text ? [{ text: this.humanize(text), pauseAfter: 0, rateMul: 1 }] : this.pageSegments();
    if (!segs.length) return;
    // split into sentence-sized chunks — long utterances stall in some browsers.
    // Each chunk carries its own pause: a small breath between sentences,
    // the segment's full pause after its last sentence.
    this.chunks = [];
    for (const s of segs) {
      const sentences = s.text.match(/[^.!?]+[.!?]+[\s"')\]]*|.+$/g) || [s.text];
      sentences.forEach((t, i) => this.chunks.push({
        text: t,
        rateMul: s.rateMul || 1,
        // longer sentences earn a slightly bigger breath after them
        pauseAfter: i === sentences.length - 1 ? s.pauseAfter : (t.length > 140 ? 260 : 160)
      }));
    }
    this.idx = 0;
    this.reading = true;
    this.paused = false;
    this.speakNext();
    this.renderBar();
  },

  saveElevenKey(v) {
    // Copy-paste often drags in quotes, spaces, or invisible characters
    // (zero-width spaces, non-breaking spaces, BOM) that silently break auth.
    const raw = v || "";
    this.el.key = raw
      .replace(/^["'\s]+|["'\s]+$/g, "")
      .replace(/[\s\u00a0\u200b-\u200f\u2028\u2029\ufeff\u0000-\u001f]/g, "");
    this.el.stripped = raw.trim().length - this.el.key.length;
    localStorage.setItem("np_el_key", this.el.key);
    this.el.voices = [];
    this.el.error = "";
    if (this.el.key) this.loadEleven();
    else { this.el.voiceId = ""; localStorage.removeItem("np_el_voice"); this.renderBar(); }
  },

  // Surface ElevenLabs' own explanation instead of a generic "rejected".
  async elError(r) {
    let detail = "";
    try {
      const b = await r.json();
      let d = (b && b.detail) || b;
      if (d && typeof d === "object") d = d.message || d.status || JSON.stringify(d);
      detail = typeof d === "string" ? d : "";
    } catch (e) { /* body may not be JSON */ }
    const tail = detail ? " — " + detail : "";
    if (r.status === 401) return "Key rejected (401)" + (tail || " — check the key is complete; ElevenLabs keys start with sk_");
    if (r.status === 403) return "Key lacks permission (403)" + (tail || " — enable Voices and Text to Speech on this key");
    if (r.status === 429) return "Quota reached (429)" + tail;
    return "ElevenLabs error " + r.status + tail;
  },

  // ElevenLabs accepts the classic xi-api-key header; some newer keys
  // authenticate as a bearer token instead, so try both before giving up.
  elHeaders(mode, json) {
    const h = mode === "bearer"
      ? { "authorization": "Bearer " + this.el.key }
      : { "xi-api-key": this.el.key };
    if (json) h["content-type"] = "application/json";
    return h;
  },

  async elGet(url) {
    const modes = this.el.auth ? [this.el.auth] : ["xi", "bearer"];
    let lastErr = null;
    for (const m of modes) {
      let r;
      try {
        r = await fetch(url, { headers: this.elHeaders(m) });
      } catch (e) {
        // Bearer auth is blocked by CORS in browsers; if an earlier attempt
        // already produced a real API error, that one is the useful message.
        if (lastErr) break;
        throw new Error("Could not reach ElevenLabs — check your connection, or an extension/firewall may be blocking the request.");
      }
      if (r.ok) {
        this.el.auth = m;
        localStorage.setItem("np_el_auth", m);
        return r.json();
      }
      lastErr = new Error(await this.elError(r));
      if (r.status !== 401) break; // only an auth failure is worth retrying differently
    }
    throw lastErr;
  },

  // Prints exactly what ElevenLabs says to each probe, so a failure is
  // diagnosable instead of mysterious.
  async elDiagnose() {
    const k = this.el.key || "";
    const lines = ["Key: " + (k ? k.length + " chars · starts \"" + k.slice(0, 3) + "\" · ends \"" + k.slice(-4) + "\"" : "(empty)")];
    if (k && !/^sk_/.test(k)) lines.push("NOTE: does not start with sk_ — this may not be an API key");
    if (this.el.stripped) lines.push("NOTE: removed " + this.el.stripped + " hidden/whitespace character(s) from the pasted key");
    this.el.diag = "Running…";
    this.renderBar();
    const probes = [
      ["/v1/user via xi-api-key", "https://api.elevenlabs.io/v1/user", "xi"],
      ["/v1/user via Bearer (browsers usually block this)", "https://api.elevenlabs.io/v1/user", "bearer"],
      ["/v1/voices via xi-api-key", "https://api.elevenlabs.io/v1/voices", "xi"]
    ];
    for (const [label, url, mode] of probes) {
      try {
        const r = await fetch(url, { headers: this.elHeaders(mode) });
        let msg = "";
        try {
          const b = await r.json();
          msg = (b && b.detail && (b.detail.message || b.detail.status)) || (b && b.message) || "";
        } catch (e) { /* body may be binary or empty */ }
        lines.push(label + " → " + r.status + (r.ok ? " OK" : (msg ? " " + msg : "")));
      } catch (e) {
        lines.push(label + " → request blocked (network, CORS, or extension)");
      }
    }
    this.el.diag = lines.join("\n");
    this.renderBar();
  },

  async loadEleven() {
    if (!this.el.key) return;
    this.el.loading = true; this.el.error = ""; this.renderBar();
    try {
      // some accounts/keys only serve the v2 listing — try v1, then fall back
      const data = await this.elGet("https://api.elevenlabs.io/v1/voices")
        .catch(e => {
          if (/\(401\)|\(403\)|reach ElevenLabs/.test(e.message)) throw e;
          return this.elGet("https://api.elevenlabs.io/v2/voices?page_size=100");
        });
      this.el.voices = (data.voices || []).map(v => ({
        id: v.voice_id,
        name: v.name || "Voice",
        desc: (v.labels && (v.labels.description || v.labels.accent)) || ""
      }));
      // ask the account which models it can use instead of hardcoding one
      try {
        const mr = await fetch("https://api.elevenlabs.io/v1/models", { headers: { "xi-api-key": this.el.key } });
        if (mr.ok) {
          const ids = (await mr.json()).map(m => m.model_id);
          const pref = ["eleven_turbo_v2_5", "eleven_flash_v2_5", "eleven_multilingual_v2"];
          this.el.model = pref.find(p => ids.indexOf(p) !== -1) || ids[0] || "";
          localStorage.setItem("np_el_model", this.el.model);
        }
      } catch (e) { /* optional - the API has a sane default model */ }
      if (!this.el.voiceId && this.el.voices.length) this.setElevenVoice(this.el.voices[0].id, false);
    } catch (e) {
      this.el.error = e.message;
      this.el.voices = [];
      // tell "wrong key" apart from "right key, missing permission"
      if (/\(401\)|\(403\)/.test(e.message)) {
        try {
          await this.elGet("https://api.elevenlabs.io/v1/user");
          this.el.error = "This key works, but it is not allowed to list voices. In ElevenLabs → API Keys, edit the key and enable Voices (read) and Text to Speech.";
        } catch (e2) {
          if (/\(401\)/.test(e2.message)) {
            this.el.error = "Key not recognised. Copy it again from ElevenLabs → Profile → API Keys — it starts with sk_ and is only shown once, so a re-copied or newly created key usually fixes this.";
          }
        }
      }
    }
    this.el.loading = false;
    this.renderBar();
  },

  setElevenVoice(id, speak) {
    const v = this.el.voices.find(x => x.id === id);
    this.el.voiceId = id;
    this.el.voiceName = v ? v.name : "";
    localStorage.setItem("np_el_voice", id);
    localStorage.setItem("np_el_name", this.el.voiceName);
    if (this.reading) this.restartChunk();
    else if (speak !== false) this.preview();
    this.renderBar();
  },

  useDeviceVoice() {
    this.el.voiceId = "";
    localStorage.removeItem("np_el_voice");
    if (this.reading) this.restartChunk();
    this.renderBar();
  },

  async fetchEleven(text) {
    const body = { text: text };
    if (this.el.model) body.model_id = this.el.model;
    const r = await fetch("https://api.elevenlabs.io/v1/text-to-speech/" + encodeURIComponent(this.el.voiceId) + "?output_format=mp3_44100_128", {
      method: "POST",
      headers: this.elHeaders(this.el.auth || "xi", true),
      body: JSON.stringify(body)
    });
    if (!r.ok) throw new Error(await this.elError(r));
    return URL.createObjectURL(await r.blob());
  },

  async speakEleven(chunk) {
    try {
      let url;
      if (this.preUrl && this.preIdx === this.idx) { url = this.preUrl; this.preUrl = null; }
      else url = await this.fetchEleven(chunk.text);
      if (!this.reading) { URL.revokeObjectURL(url); return; }
      const a = new Audio(url);
      this.audio = a;
      a.playbackRate = this.rate * (chunk.rateMul || 1);
      const done = () => { URL.revokeObjectURL(url); this.audio = null; this.advance(chunk); };
      a.onended = done;
      a.onerror = done;
      await a.play();
      // fetch the next line while this one plays so playback stays seamless
      const next = this.chunks[this.idx + 1];
      if (next) {
        this.preIdx = this.idx + 1;
        this.fetchEleven(next.text).then(u => { this.preUrl = u; }).catch(() => {});
      }
    } catch (e) {
      toast(e.message + " — switching to device voice");
      this.el.error = e.message;
      this.useDeviceVoice();
      this.speakNext();
    }
  },

  advance(chunk) {
    this.idx++;
    const pause = Math.round((chunk.pauseAfter || 0) / this.rate); // faster speech, shorter pauses
    if (pause > 0) {
      this.pauseTimer = setTimeout(() => {
        if (!this.reading) return;
        if (this.paused) { this.pendingResume = true; return; }
        this.speakNext();
      }, pause);
    } else {
      this.speakNext();
    }
  },

  speakNext() {
    if (!this.reading || this.idx >= this.chunks.length) { this.stop(); return; }
    const chunk = this.chunks[this.idx];
    if (this.useEleven()) { this.speakEleven(chunk); return; }
    const u = new SpeechSynthesisUtterance(chunk.text);
    const v = this.voice();
    if (v) u.voice = v;
    u.rate = this.rate * (chunk.rateMul || 1);
    u.pitch = this.pitch;
    const advance = () => this.advance(chunk);
    u.onend = advance;
    u.onerror = advance;
    speechSynthesis.speak(u);
  },

  toggle() {
    if (!this.reading) { this.start(); return; }
    if (this.paused) {
      this.paused = false;
      // if we paused during an inter-section gap, restart from the next chunk
      if (this.pendingResume) { this.pendingResume = false; this.speakNext(); }
      else if (this.audio) this.audio.play();
      else speechSynthesis.resume();
    } else {
      if (this.audio) this.audio.pause();
      else speechSynthesis.pause();
      this.paused = true;
    }
    this.renderBar();
  },

  stop() {
    this.reading = false;
    this.paused = false;
    this.pendingResume = false;
    this.chunks = [];
    this.idx = 0;
    clearTimeout(this.pauseTimer);
    if (this.audio) { this.audio.pause(); this.audio = null; }
    if (this.preUrl) { URL.revokeObjectURL(this.preUrl); this.preUrl = null; }
    speechSynthesis.cancel();
    this.renderBar();
  },

  restartChunk() {
    // apply a new voice setting immediately by restarting the current chunk
    if (this.reading && !this.paused) {
      const resumeAt = Math.min(this.idx, this.chunks.length - 1);
      const chunks = this.chunks;
      clearTimeout(this.pauseTimer); // avoid double-advance if mid-gap
      if (this.audio) { this.audio.pause(); this.audio = null; }
      if (this.preUrl) { URL.revokeObjectURL(this.preUrl); this.preUrl = null; }
      speechSynthesis.cancel();
      this.chunks = chunks;
      this.idx = resumeAt;
      this.speakNext();
    }
  },

  cycleRate() {
    const steps = [0.75, 1, 1.25, 1.5];
    this.rate = steps[(steps.indexOf(this.rate) + 1) % steps.length] || 1;
    localStorage.setItem("np_tts_rate", String(this.rate));
    this.restartChunk();
    this.renderBar();
  },

  cyclePitch() {
    const steps = [0.7, 0.85, 1, 1.15, 1.3];
    this.pitch = steps[(steps.indexOf(this.pitch) + 1) % steps.length] || 1;
    localStorage.setItem("np_tts_pitch", String(this.pitch));
    this.restartChunk();
    this.renderBar();
  },

  togglePanel() {
    this.showPanel = !this.showPanel;
    if (this.showPanel && this.el.key && !this.el.voices.length && !this.el.loading) this.loadEleven();
    this.renderBar();
  },

  voicePanel() {
    const list = this.availableVoices();
    if (!list.length) {
      return `<div class="tts-panel"><div class="tts-hint">Loading voices… if none appear, your browser has no speech voices installed.</div></div>`;
    }
    const current = this.voice();
    const opt = v => {
      const p = this.persona(v);
      return `<option value="${esc(v.name)}"${current && v.name === current.name ? " selected" : ""}>${esc(p.name)}${p.tag ? " — " + esc(p.tag) : ""}</option>`;
    };
    const tier = t => list.filter(v => this.persona(v).tier === t);
    const groups = [
      ["✦ Signature voices", tier("signature")],
      ["Standard voices", tier("standard")],
      ["Legacy voices", tier("legacy")]
    ].filter(([, vs]) => vs.length);
    const onlyLegacy = tier("signature").length === 0 && tier("standard").length === 0;
    return `
      <div class="tts-panel">
        <label>Narrator</label>
        <select onchange="tts.setVoice(this.value)">
          ${groups.map(([label, vs]) => `<optgroup label="${label}">${vs.map(opt).join("")}</optgroup>`).join("")}
        </select>
        <div class="tts-hint">
          Pick a narrator and you'll hear them introduce themselves. <b>Signature</b> voices are neural — the closest to an AI assistant's speaking voice.
          ${onlyLegacy ? `<br><br><b>Only legacy voices found on this device.</b> They sound synthetic no matter the settings. To get the good ones free:
            ${/edg\//i.test(navigator.userAgent) ? "" : "<br>• Open TokenWise in <b>Microsoft Edge</b> — it ships neural voices."}
            <br>• Or install them: <b>Windows Settings → Time &amp; language → Speech → Manage voices → Add voices</b>, then reload this page.` : ""}
          <br><br>Voices come from your browser, so the list changes with it: <b>Chrome</b> provides the Google voices, <b>Edge</b> the Microsoft neural ones, <b>Safari</b> Apple's.
        </div>
        ${this.elevenSection()}
      </div>`;
  },

  elevenSection() {
    const e = this.el;
    return `
      <div class="el-block">
        <label>✦ Premium narration — ElevenLabs</label>
        ${e.key ? "" : `<div class="tts-hint" style="margin:0 0 9px">Studio-quality AI voices, using your own key.
          <a href="https://elevenlabs.io/app/settings/api-keys" target="_blank" rel="noopener">Get a free key →</a></div>`}
        <div class="el-row">
          <input class="text-input" type="password" id="elKey" placeholder="Paste ElevenLabs API key" value="${esc(e.key)}">
          <button class="btn small" onclick="tts.saveElevenKey(document.getElementById('elKey').value)">${e.key ? "Update" : "Connect"}</button>
        </div>
        ${e.loading ? `<div class="el-status">Loading voices…</div>` : ""}
        ${e.error ? `<div class="el-status err">${esc(e.error)}</div>` : ""}
        ${e.voices.length ? `
          <select style="margin-top:9px" onchange="tts.setElevenVoice(this.value, true)">
            ${e.voices.map(v => `<option value="${esc(v.id)}"${v.id === e.voiceId ? " selected" : ""}>${esc(v.name)}${v.desc ? " — " + esc(v.desc) : ""}</option>`).join("")}
          </select>` : (e.key && !e.loading && !e.error ? `<div class="el-status">No voices on this account yet.</div>` : "")}
        ${this.useEleven() ? `<div class="el-status ok">✦ Narrating with <b>${esc(e.voiceName)}</b> —
          <a href="#" onclick="event.preventDefault();tts.useDeviceVoice()">use device voice instead</a></div>` : ""}
        ${(e.key || e.error) ? `<div class="tts-hint" style="margin-top:9px">Your key stays in this browser and is sent only to ElevenLabs. Audio is generated per page, so long pages use more credits.
          <br><a href="#" onclick="event.preventDefault();tts.elDiagnose()"><b>▸ Run diagnostics</b></a> — shows exactly what ElevenLabs says about your key.</div>` : ""}
        ${e.diag ? `<pre class="el-diag">${esc(e.diag)}</pre>` : ""}
      </div>`;
  },

  renderBar() {
    const bar = $("#ttsBar");
    if (!bar) return;
    if (!this.supported()) { bar.style.display = "none"; return; }
    bar.classList.toggle("reading", this.reading && !this.paused);
    bar.innerHTML = `
      ${this.showPanel ? this.voicePanel() : ""}
      ${this.reading ? `<span class="tts-label">${this.paused ? "Paused" : "Reading page…"}</span>` : ""}
      <button class="tts-rate" onclick="tts.togglePanel()" title="Choose narrator voice">🎙 ${esc(this.useEleven() ? "✦ " + (this.el.voiceName || "ElevenLabs") : this.persona(this.voice()).name)}</button>
      <button class="tts-rate" onclick="tts.cyclePitch()" title="Voice pitch (cycles low → high)">♪${this.pitch}</button>
      <button class="tts-rate" onclick="tts.cycleRate()" title="Reading speed">${this.rate}×</button>
      ${this.reading ? `<button class="tts-btn secondary" onclick="tts.stop()" title="Stop">⏹</button>` : ""}
      <button class="tts-btn play" onclick="tts.toggle()" title="${this.reading ? (this.paused ? "Resume" : "Pause") : "Read this page aloud"}">
        ${this.reading ? (this.paused ? "▶" : "⏸") : "🔊"}
      </button>`;
  }
};
window.tts = tts;

// Voices load asynchronously in most browsers — refresh the picker when they arrive.
if (tts.supported() && typeof speechSynthesis.addEventListener === "function") {
  speechSynthesis.addEventListener("voiceschanged", () => tts.renderBar());
}

/* ============================================================
   ROUTER
   ============================================================ */

const routes = [
  [/^#?\/?$/, viewHome],
  [/^#\/archive$/, viewArchive],
  [/^#\/edition\/(\d+)$/, (m) => viewEdition(parseInt(m[1], 10))],
  [/^#\/paths$/, viewPaths],
  [/^#\/courses$/, viewCourses],
  [/^#\/course\/([\w-]+)$/, (m) => viewCourse(m[1])],
  [/^#\/lesson\/([\w-]+)\/(\d+)$/, (m) => viewLesson(m[1], m[2])],
  [/^#\/mytrack$/, viewMyTrack],
  [/^#\/flashcards$/, viewDecks],
  [/^#\/flashcards\/([\w-]+)$/, (m) => viewDeck(m[1])],
  [/^#\/quizzes$/, viewQuizzes],
  [/^#\/quiz\/([\w-]+)$/, (m) => viewQuiz(m[1])],
  [/^#\/timeline$/, viewTimeline],
  [/^#\/resources$/, viewResources],
  [/^#\/tutor$/, viewTutor]
];

function route() {
  tts.showPanel = false;
  tts.stop(); // never keep reading a page the user left
  const hash = location.hash || "#/";
  for (const [re, fn] of routes) {
    const m = hash.match(re);
    if (m) { fn(m); highlightNav(hash); return; }
  }
  viewHome();
  highlightNav("#/");
}

function highlightNav(hash) {
  document.querySelectorAll(".nav-item").forEach(el => {
    const href = el.getAttribute("href");
    const section = hash.split("/")[1] || "";
    const target = (href || "").split("/")[1] || "";
    const alias = { lesson: "courses", course: "courses", quiz: "quizzes", edition: "archive", deck: "flashcards" };
    el.classList.toggle("active", target === (alias[section] !== undefined ? alias[section] : section));
  });
}

window.addEventListener("hashchange", route);
window.addEventListener("DOMContentLoaded", route);
