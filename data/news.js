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
    date: "2026-08-02",
    displayDate: "Sunday, August 2, 2026 · Edition #2",
    headline: "The day AI had to introduce itself: EU transparency rules take effect, California's provenance law lands the same morning",
    summary:
      "August 2 was circled on every AI compliance calendar, and it arrived: the EU began enforcing the AI Act's transparency obligations, while California's provenance law became operative the same day. Meanwhile, security researchers published a case study of an open-source model wired into an attack agent — a reminder that the agent pattern cuts both ways.",
    stories: [
      {
        title: "EU begins enforcing AI Act transparency rules",
        body: "From today, the European Commission's AI Office and national authorities are enforcing the AI Act's transparency obligations. Systems that interact with people must disclose that they are AI, deepfakes must be labelled, and AI-generated or altered content must carry machine-readable marks so it can be detected automatically. Non-compliance can draw fines of up to 15 million euros or 3% of worldwide annual turnover. Generative systems already on the market before today get until December 2, 2026 to meet the machine-readable marking requirement, under a grace period agreed in the AI Omnibus package.",
        why: "This is the first time 'you must tell people they are talking to AI' is enforceable law across a major market. It is the clearest example yet of regulation directly shaping how AI products are built.",
        sources: [
          { label: "European Commission", url: "https://digital-strategy.ec.europa.eu/en/news/commission-starts-enforcing-ai-act-rules-and-new-transparency-requirements-2-august" },
          { label: "Sidley — compliance guide", url: "https://datamatters.sidley.com/2026/06/24/eu-ai-act-transparency-obligations-preparing-for-compliance-by-2-august-2026/" }
        ]
      },
      {
        title: "What Article 50 actually covers — the four buckets",
        body: "The obligations that kicked in today live in Article 50 of Regulation (EU) 2024/1689, and they apply to four situations: AI systems that interact directly with people, AI-generated content, emotion recognition and biometric categorisation systems, and deepfakes or AI-generated text published on matters of public interest. Notably, these duties reach beyond the Act's 'high-risk' category into ordinary limited-risk systems — an everyday chatbot is in scope. The Commission has published guidelines and a Code of Practice on transparency of AI-generated content to spell out what compliance looks like in practice.",
        why: "Knowing these four buckets tells you exactly which AI features now carry legal disclosure duties — useful whether you are building products or just want to understand the labels you will start seeing everywhere.",
        sources: [
          { label: "Article 50 explained", url: "https://artificialintelligenceact.eu/transparency-rules-article-50/" },
          { label: "EU — transparency quick facts", url: "https://digital-strategy.ec.europa.eu/en/factpages/quick-facts-transparency-rules-ai-systems" },
          { label: "EU — Code of Practice", url: "https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content" }
        ]
      },
      {
        title: "California's AI Transparency Act becomes operative on the same day",
        body: "California SB 942 took effect August 2 as well, requiring generative-AI providers with more than one million monthly California users to embed C2PA-compatible provenance data into the images, video, and audio they generate, and to offer a free public detection tool so anyone can check whether content came from their system. Two of the world's largest markets therefore began requiring content provenance on the very same morning.",
        why: "When Brussels and Sacramento converge on the same technical standard, that standard effectively becomes global — this is how C2PA provenance quietly becomes a default feature of AI tools everywhere.",
        sources: [
          { label: "AI Weekly", url: "https://aiweekly.co/ai-news-today" }
        ]
      },
      {
        title: "Researchers document an open model wired into an attack agent",
        body: "Palo Alto Networks' Unit 42 published details of an actor who connected DeepSeek to the open-source Hermes Agent framework and drove it through Telegram to enumerate targets, pull public exploits, and attack more than 460 internet-facing systems. The setup is unremarkable technically — a model, a tool loop, and a chat interface — which is precisely what makes it notable.",
        why: "This is the agent pattern from the Toolbox and engineering courses (model plus tools plus a loop) pointed at offense. It is a concrete reminder that open capability is neutral, but deployment never is.",
        sources: [
          { label: "AI Weekly", url: "https://aiweekly.co/ai-news-today" }
        ]
      },
      {
        title: "Google cancels its AI Studio mobile app despite 800,000 preorders",
        body: "Google scrapped the standalone AI Studio app it had announced for iOS and Android at I/O 2026, even though more than 800,000 people had preordered it, and is folding app-creation features into existing surfaces instead.",
        why: "Product churn at this speed is normal right now: features migrate between apps, get renamed, or vanish within a quarter. It is exactly why the Toolbox lessons on this site carry 'last updated' stamps rather than pretending to be permanent.",
        sources: [
          { label: "AI Weekly", url: "https://aiweekly.co/ai-news-today" }
        ]
      }
    ],
    media: [
      {
        kind: "podcast",
        title: "The AI Daily Brief — today's episode",
        source: "Nathaniel Whittemore · ~20 min daily",
        why: "Reliable same-day analysis; expect a clear breakdown of what AI Act enforcement means for builders and users.",
        url: "https://www.youtube.com/@AIDailyBrief/videos"
      },
      {
        kind: "podcast",
        title: "Last Week in AI — weekend roundup",
        source: "Researcher-hosted · weekly",
        why: "A calm, technically grounded recap of the week — a good antidote to compliance-deadline noise.",
        url: "https://lastweekin.ai/"
      },
      {
        kind: "video",
        title: "AI Explained — latest upload",
        source: "YouTube · sourced release and policy analysis",
        why: "Careful, benchmark-literate coverage; useful for separating what the AI Act actually requires from what commentary claims.",
        url: "https://www.youtube.com/@aiexplained-official/videos"
      },
      {
        kind: "podcast",
        title: "Hard Fork — this week's episode",
        source: "The New York Times · weekly",
        why: "The most listenable take on regulation and deepfake labelling if you want the story conversationally.",
        url: "https://www.nytimes.com/column/hard-fork"
      }
    ],
    term: {
      word: "Content provenance (C2PA)",
      definition:
        "Cryptographically signed metadata attached to a piece of media recording how it was made — which tool generated or edited it, and when. C2PA is the open standard behind it, and today's EU and California rules are what turn it from a nice idea into a legal requirement. It is the infrastructure meant to answer 'is this real?' at internet scale.",
      link: "#/course/safety"
    },
    tryThis:
      "Ask any chatbot: 'Are you an AI, and what must you disclose to me under the EU AI Act?' Then generate an image with any AI tool and look for provenance or 'content credentials' information on it. You are watching today's rules take effect in real time.",
    learnLinks: [
      { label: "Who governs AI → Safety, Ethics & Policy", href: "#/course/safety" },
      { label: "How agents work (and get misused) → The AI Toolbox", href: "#/course/tools" },
      { label: "The companies behind the compliance scramble → The AI Industry", href: "#/course/industry" }
    ]
  },
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
