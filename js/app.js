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

  const archive = EDITIONS.slice(1).map((e, i) => `
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
      </div>` : `
      <div class="card" style="margin-top:16px">
        <div class="eyebrow">About the Daily Token</div>
        <p style="color:var(--text-dim);font-size:0.9rem">A new edition is published each day, summarizing the most important AI developments with a learner's lens: every story links to its sources and to the course that explains the concepts behind it. This is Edition #1 — the archive builds from here.</p>
      </div>`}
    </div>`;
}

/* ---------- Past edition ---------- */
function viewEdition(idx) {
  const ed = EDITIONS[idx];
  if (!ed) { location.hash = "#/"; return; }
  const stories = ed.stories.map(s => `
    <div class="story">
      <h3>${esc(s.title)}</h3>
      <div class="story-body">${esc(s.body)}</div>
      <div class="why"><b>Why it matters:</b> ${esc(s.why)}</div>
      <div class="src">Sources: ${s.sources.map(x => `<a href="${x.url}" target="_blank" rel="noopener">${esc(x.label)}</a>`).join(" · ")}</div>
    </div>`).join("");
  app().innerHTML = `
    <div class="container">
      <a href="#/" style="font-size:0.85rem">← Back to today's Signal</a>
      <div class="brief-hero" style="margin-top:14px">
        <div class="brief-date">🪙 The Daily Token — ${esc(ed.displayDate)}</div>
        <div class="brief-title">${esc(ed.headline)}</div>
        <p class="brief-summary">${esc(ed.summary)}</p>
      </div>
      <div class="card">${stories}</div>
      ${mediaSection(ed.media, "🎧 That day's watch & listen")}
    </div>`;
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

  supported() { return "speechSynthesis" in window; },

  voice() {
    const voices = speechSynthesis.getVoices();
    return voices.find(v => v.lang.startsWith("en") && /natural|neural|online/i.test(v.name))
        || voices.find(v => v.lang.startsWith("en"))
        || voices[0] || null;
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
      const text = el.innerText.replace(/\s+/g, " ").trim();
      if (!text) continue;
      const isHeading = /^H[1-4]$/.test(el.tagName) || el.classList.contains("eyebrow") || el.classList.contains("brief-title");
      // headings get a long beat after them; normal blocks a paragraph pause
      segs.push({ text, pauseAfter: isHeading ? 850 : 450 });
    }
    if (!segs.length) {
      const all = clone.innerText.replace(/\s+/g, " ").trim();
      if (all) segs.push({ text: all, pauseAfter: 0 });
    }
    return segs;
  },

  start(text) {
    this.stop();
    const segs = text ? [{ text, pauseAfter: 0 }] : this.pageSegments();
    if (!segs.length) return;
    // split into sentence-sized chunks — long utterances stall in some browsers.
    // Each chunk carries its own pause: a small breath between sentences,
    // the segment's full pause after its last sentence.
    this.chunks = [];
    for (const s of segs) {
      const sentences = s.text.match(/[^.!?]+[.!?]+[\s"')\]]*|.+$/g) || [s.text];
      sentences.forEach((t, i) => this.chunks.push({
        text: t,
        pauseAfter: i === sentences.length - 1 ? s.pauseAfter : 160
      }));
    }
    this.idx = 0;
    this.reading = true;
    this.paused = false;
    this.speakNext();
    this.renderBar();
  },

  speakNext() {
    if (!this.reading || this.idx >= this.chunks.length) { this.stop(); return; }
    const chunk = this.chunks[this.idx];
    const u = new SpeechSynthesisUtterance(chunk.text);
    const v = this.voice();
    if (v) u.voice = v;
    u.rate = this.rate;
    u.pitch = this.pitch;
    const advance = () => {
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
    };
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
      else speechSynthesis.resume();
    } else {
      speechSynthesis.pause();
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
    speechSynthesis.cancel();
    this.renderBar();
  },

  restartChunk() {
    // apply a new voice setting immediately by restarting the current chunk
    if (this.reading && !this.paused) {
      const resumeAt = Math.min(this.idx, this.chunks.length - 1);
      const chunks = this.chunks;
      clearTimeout(this.pauseTimer); // avoid double-advance if mid-gap
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

  renderBar() {
    const bar = $("#ttsBar");
    if (!bar) return;
    if (!this.supported()) { bar.style.display = "none"; return; }
    bar.classList.toggle("reading", this.reading && !this.paused);
    bar.innerHTML = `
      ${this.reading ? `<span class="tts-label">${this.paused ? "Paused" : "Reading page…"}</span>` : ""}
      <button class="tts-rate" onclick="tts.cyclePitch()" title="Voice pitch (cycles low → high)">♪${this.pitch}</button>
      <button class="tts-rate" onclick="tts.cycleRate()" title="Reading speed">${this.rate}×</button>
      ${this.reading ? `<button class="tts-btn secondary" onclick="tts.stop()" title="Stop">⏹</button>` : ""}
      <button class="tts-btn play" onclick="tts.toggle()" title="${this.reading ? (this.paused ? "Resume" : "Pause") : "Read this page aloud"}">
        ${this.reading ? (this.paused ? "▶" : "⏸") : "🔊"}
      </button>`;
  }
};
window.tts = tts;

/* ============================================================
   ROUTER
   ============================================================ */

const routes = [
  [/^#?\/?$/, viewHome],
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
    const alias = { lesson: "courses", course: "courses", quiz: "quizzes", edition: "", deck: "flashcards" };
    el.classList.toggle("active", target === (alias[section] !== undefined ? alias[section] : section));
  });
}

window.addEventListener("hashchange", route);
window.addEventListener("DOMContentLoaded", route);
