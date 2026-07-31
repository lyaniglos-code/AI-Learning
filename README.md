# 🪙 TokenWise — Learn AI, token by token

An AI learning hub that evolves with AI. Open `index.html` in any browser — no install, no build step, no server required.

## What's inside

| Section | What it does |
|---|---|
| **🪙 The Daily Token** | The homepage: a daily AI newsletter with top stories, "why it matters" learning notes, sources, a term of the day, and a hands-on "try this" |
| **🧭 Learning Paths** | Three curated routes: Newcomer (never used AI), Practitioner, Engineer |
| **🎓 Courses** | 7 courses / 33 lessons: AI Foundations, How Models Work, Prompt Engineering, Building with AI, The AI Industry, Safety & Policy, and **The AI Toolbox** — a *living course* on ChatGPT, Claude, Gemini, NotebookLM, Perplexity, and the copilots, with per-lesson "last updated" stamps |
| **🔝 Top bar** | Sidebar open/close toggle (state remembered) + brand chips for each major AI tool that jump straight to its Toolbox lesson |
| **⭐ My Track** | Build a custom curriculum — add any lesson from any course |
| **📜 AI Timeline** | Interactive history, 1943 → today |
| **🃏 Flashcards** | 5 decks / 68 cards with missed-card retry |
| **✅ Quizzes** | 6 quizzes / 45 questions with explanations; best scores saved |
| **🤖 AI Tutor** | Claude-powered chat tutor (bring your own Anthropic API key; stored only in your browser — the Tutor page has a 5-step guide to getting a key at console.anthropic.com) |
| **🔊 Read aloud** | Floating speaker button (bottom-right) reads any page out loud — pause/resume, stop, 0.75×–1.5× speed, and ♪ pitch control (0.7–1.3). Uses the browser's built-in voices; free, no API key needed |
| **📚 Resources** | Curated videos, free courses, papers, newsletters, tools, books |

Lesson progress, quiz scores, My Track, and the tutor API key all live in your browser's localStorage — nothing is sent anywhere except tutor messages (directly to Anthropic).

## Brand

**TokenWise** — models learn token by token, AI is priced token by token, and this site makes you wise about it, one daily token of knowledge at a time. The newsletter is **The Daily Token** 🪙.

Logo scheme: a coin-shaped "token" bearing a neural-node spark, filled with the brand gradient (blue `#6c8cff` → violet `#9d6cff` → teal `#43d6b5`), rimmed with a dashed inner ring (a nod to context windows). Wordmark: "Token" in white + "Wise" in the gradient. The mark lives inline in `index.html` (sidebar + favicon data-URI); the gradient is `--grad` in `css/style.css`.

## How the daily newsletter updates

All content is plain data files in `data/` — no code changes needed:

- **`data/news.js`** — add a new edition object to the **top** of the `EDITIONS` array; the homepage always shows the newest and archives the rest automatically. Every edition includes a `media` array (the "Watch & listen today" block): 3–5 credible podcasts/videos relevant to the day's stories — prefer daily shows (The AI Daily Brief), weekly roundups (ThursdAI, Hard Fork, Last Week in AI), and analysis channels (AI Explained), linking the specific episode when one matches the news or the show's latest-uploads page otherwise.
- **`data/courses.js`** — courses and lessons (HTML content, key takeaways, linked resources)
- **`data/flashcards.js`**, **`data/quizzes.js`**, **`data/timeline.js`**, **`data/resources.js`** — self-explanatory

To publish a new daily edition, ask Claude Code:

> "Research today's AI news and add a new edition to data/news.js following the existing format."

This can also be fully automated as a scheduled daily task in Claude Code.

### Keeping The AI Toolbox course current (living course)

The `tools` course in `data/courses.js` documents fast-moving products, so it must be revised when tools change, not just when news happens. The daily update should also:

1. Check whether any covered tool (ChatGPT, Claude, Gemini, NotebookLM, Perplexity, Copilot/Grok/Meta AI, coding agents) shipped meaningful changes — new models, features, pricing, renames.
2. If so, edit that lesson's content in `data/courses.js` **and bump its `updated:` stamp** (e.g. `"Aug 3, 2026"`). The stamp renders on the lesson page so learners can trust freshness.
3. Big launches belong in both places: a Daily Token story *and* a Toolbox lesson revision.
4. The top-bar tool chips in `index.html` link to Toolbox lessons by index (`#/lesson/tools/N`) — keep links in sync if lessons are reordered.

## File map

```
index.html        app shell + navigation
css/style.css     design system
js/app.js         router, views, flashcard/quiz engines, tutor
data/*.js         all content (edit these to update the site)
```
