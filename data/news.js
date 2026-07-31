/* ============================================================
   THE DAILY TOKEN — newsletter data
   Each edition is one object in EDITIONS (newest first).
   To publish a new day: add a new edition object to the TOP
   of the array. The homepage always renders EDITIONS[0].

   Every edition should include a `media` array — credible
   podcasts/videos for that day: { kind: "podcast"|"video",
   title, source, why, url }. Prefer episode/upload pages that
   always surface the latest content, or link the specific
   episode when one clearly matches the day's stories.
   ============================================================ */

const EDITIONS = [
  {
    date: "2026-07-31",
    displayDate: "Friday, July 31, 2026 · Edition #1",
    headline: "Big Tech doubles down: Meta commits $130B+ to AI while Anthropic's Opus 5 tops the charts",
    summary:
      "A blockbuster week closes out July: earnings season reveals just how much money is pouring into AI infrastructure, Anthropic's newest flagship takes the benchmark crown days after release, robots get a serious brain upgrade from DeepMind, and the EU's biggest AI transparency rules kick in within 48 hours.",
    stories: [
      {
        title: "Meta raises its 2026 AI spending floor to $130 billion",
        body: "In its Q2 earnings, Meta reported $60.8B in revenue (up 28% year-over-year) and raised its full-year capital-expenditure range to $130–145B — almost all of it aimed at AI data centers, chips, and talent. For scale: that single-year figure rivals the GDP of a mid-sized country, and it signals Meta believes the AI race is won with compute.",
        why: "Compute is the raw fuel of modern AI. When you hear 'capex' in AI news, think GPUs and data centers — the labs that can train the biggest models on the most hardware tend to set the frontier.",
        sources: [
          { label: "AI Weekly", url: "https://aiweekly.co/ai-news-today" }
        ]
      },
      {
        title: "AWS posts fastest growth in 18 quarters — powered by AI",
        body: "Amazon's cloud arm grew 37% year-over-year to $42.2B in quarterly revenue, its fastest pace in four and a half years. CEO Andy Jassy said Amazon's AI and chips businesses have each passed a $25B annualized run rate. Cloud providers are the 'picks and shovels' sellers of the AI gold rush — every startup training or serving models pays rent to AWS, Azure, or Google Cloud.",
        why: "Most AI companies don't own their hardware; they rent it from cloud providers. Cloud earnings are one of the best public signals of how fast real-world AI adoption is growing.",
        sources: [
          { label: "AI Weekly", url: "https://aiweekly.co/ai-news-today" }
        ]
      },
      {
        title: "Anthropic's Claude Opus 5 takes the #1 spot on intelligence benchmarks",
        body: "Released July 24, Claude Opus 5 immediately topped Artificial Analysis's Intelligence Index (61) and Agentic Index (55.3), priced at $5/$25 per million tokens. It's Anthropic's fourth model launch in under two months, following Mythos 5, Fable 5, and Sonnet 5 — an extraordinary release cadence that shows how compressed AI development cycles have become.",
        why: "Benchmarks like these are how the industry compares models — imperfect, but the closest thing to a scoreboard. 'Agentic' scores measure how well a model can complete multi-step tasks with tools, which is where the field is heading.",
        sources: [
          { label: "ThursdAI July releases", url: "https://thursdai.news/releases/2026-07" },
          { label: "LLM Stats", url: "https://llm-stats.com/ai-news" }
        ]
      },
      {
        title: "OpenAI's GPT-5.6 Sol and a crowded July of frontier releases",
        body: "OpenAI's GPT-5.6 Sol (July 9) leads LiveBench Mathematics (96.2) and Reasoning (91.7) and scored 93% on ARC-AGI-2, a benchmark designed to test genuine abstract reasoning. Meanwhile xAI shipped Grok 4.5 as a budget coding model at $2/$6 per million tokens, Meta released its first paid model (Muse Spark 1.1), and Alibaba's Qwen3.7 Flash landed July 27. Four labs, four flagship-class releases, one month.",
        why: "Price-per-million-tokens is the standard unit of AI economics. Watching prices fall while capability rises is the single clearest trend in the industry — what cost $60 two years ago now costs $2.",
        sources: [
          { label: "LLM Stats — updates", url: "https://llm-stats.com/llm-updates" },
          { label: "ThursdAI", url: "https://thursdai.news/releases/2026-07" }
        ]
      },
      {
        title: "Google DeepMind unveils Gemini Robotics 2 — AI steps into the physical world",
        body: "DeepMind released a three-model robotics suite: a vision-language-action model that can control full humanoid bodies, an embodied-reasoning model (ER 2) for multi-step planning and multi-robot collaboration, and an on-device variant that adapts to new robot hardware within hours. This is the 'foundation model' recipe — pretrain broadly, adapt quickly — applied to robots instead of chatbots.",
        why: "'Embodied AI' means AI that acts in the physical world. The same transformer architecture behind chatbots is now driving robot arms and humanoids — a major frontier to watch.",
        sources: [
          { label: "AI Weekly", url: "https://aiweekly.co/ai-news-today" }
        ]
      },
      {
        title: "48 hours to the EU AI Act's transparency deadline",
        body: "On August 2, Article 50 of the EU AI Act takes effect: AI systems that interact with humans must disclose they are AI, and AI-generated content must be machine-readable as such. Meanwhile the 'Great American AI Act' passed the US Senate with language that would preempt state AI laws, China's rules on companion/emotional-support AI took force July 15, and India published its first statutory AI liability framework.",
        why: "Regulation is now a core part of AI literacy. If you build or deploy AI products, 'which jurisdiction, which rules' is as important a question as 'which model.'",
        sources: [
          { label: "Lumenova — EU AI Act", url: "https://www.lumenova.ai/blog/eu-ai-act-delays-july-2026/" },
          { label: "TLT AI Brief", url: "https://www.tlt.com/insights-and-events/insight/tlts-ai-brief-july-2026" },
          { label: "Cubbbix global roundup", url: "https://cubbbix.com/blog/ai-regulation-july-2026-global-update/" }
        ]
      }
    ],
    media: [
      {
        kind: "podcast",
        title: "The AI Daily Brief — today's episode",
        source: "Nathaniel Whittemore · ~20 min daily",
        why: "The single best daily AI podcast; today's episode will cover the earnings-week capex story in depth.",
        url: "https://www.youtube.com/@AIDailyBrief/videos"
      },
      {
        kind: "podcast",
        title: "ThursdAI — this week's roundup",
        source: "Alex Volkov & guests · weekly",
        why: "Yesterday's show walks the entire July release wave — Opus 5, GPT-5.6 Sol, Qwen3.7 — model by model.",
        url: "https://thursdai.news/"
      },
      {
        kind: "video",
        title: "AI Explained — latest upload",
        source: "YouTube · benchmark-literate release analysis",
        why: "The most measured video breakdowns of frontier releases; expect a sourced read on the new benchmark claims.",
        url: "https://www.youtube.com/@aiexplained-official/videos"
      },
      {
        kind: "podcast",
        title: "Hard Fork — this week's episode",
        source: "The New York Times · weekly",
        why: "Accessible, credible discussion of the week's biggest stories — ideal if you want the news conversationally.",
        url: "https://www.nytimes.com/column/hard-fork"
      }
    ],
    term: {
      word: "Capex (capital expenditure)",
      definition: "Money a company spends on long-lived physical assets — in AI, overwhelmingly data centers and GPU clusters. AI capex numbers ($130B+ for a single company in 2026) are the clearest measure of how seriously Big Tech is betting on AI, because compute is the main ingredient for training frontier models.",
      link: "#/course/industry"
    },
    tryThis:
      "Open any AI chatbot and ask it: 'Explain what a token is, then show me how you would split the sentence \"AI is changing everything\" into tokens.' You just used the concept behind every per-token price in today's stories.",
    learnLinks: [
      { label: "New to AI? Start with AI Foundations", href: "#/course/foundations" },
      { label: "Understand the benchmark wars → How Models Work", href: "#/course/models" },
      { label: "Follow the money → The AI Industry course", href: "#/course/industry" }
    ]
  }
];
