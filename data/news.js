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
    date: "2026-08-03",
    displayDate: "Monday, August 3, 2026 · Edition #3",
    headline: "An unreleased OpenAI model quietly settles a 27-year-old math question as Big Tech's 2026 AI capex guidance climbs past $700 billion",
    summary:
      "OpenAI used a math blog post to tease its next flagship, 'Astra' — ten machine-checked proofs for problems that had stumped researchers for a decade or more, though critics are already cautioning against overreading it. Meanwhile earnings season made the scale of the AI bet impossible to ignore, and Washington moved a step closer to a voluntary pre-release review of frontier models.",
    stories: [
      {
        title: "OpenAI teases 'Astra' by solving ten decade-old math and CS problems",
        body: "On August 1, OpenAI published a 249-page manuscript titled 'Ten advances in mathematics and theoretical computer science,' revealing three paragraphs in that the results came from an internal, unreleased version of Astra, the company's next major model. The ten results span group theory, sphere packing, quantum complexity, and lattice cryptography — including the first explicit example of a non-sofic group, a question mathematician Mikhail Gromov left open roughly 27 years ago. Every proof was formalized in the Lean 4 proof assistant, producing machine-checkable certificates, and the entire run reportedly cost about $2,000 in compute. Fields Medalist Timothy Gowers said he would recommend one of the proofs for publication in the Annals of Mathematics without hesitation.",
        why: "This is a rare case where an AI system's output is checkable by a computer rather than just judged by a human reader — Lean verifies that each logical step follows validly. That is a genuinely different kind of evidence for AI capability than a benchmark score or a demo.",
        sources: [
          { label: "OpenAI — Ten advances in mathematics", url: "https://openai.com/index/ten-advances-in-mathematics/" },
          { label: "The Decoder", url: "https://the-decoder.com/openai-announces-its-next-major-model-astra-by-dropping-ten-previously-unsolved-math-solutions/" }
        ]
      },
      {
        title: "Why 'machine-checked' isn't the same as 'peer reviewed' — the pushback on Astra",
        body: "AI critic Gary Marcus called the Astra results 'amazing — but vastly oversold,' arguing that math and code are unusual domains: they offer clean, automatic verification and effectively unlimited synthetic training data, so success there doesn't necessarily predict reliability in messier, open-ended reasoning. He also flagged a subtlety in the method itself — Lean confirms a proof's logical steps are internally valid, but it doesn't confirm the problem was translated into Lean's formal language the way mathematicians actually intended, which still needs a human expert to check. OpenAI itself has said the release does not amount to independent peer review, and outside mathematicians have only begun verifying individual results.",
        why: "This is a useful template for reading any 'AI achieved X' headline: ask what, specifically, was verified, by whom, and whether the verification method actually covers the claim being made.",
        sources: [
          { label: "Gary Marcus — Substack", url: "https://garymarcus.substack.com/p/openais-amazing-but-vastly-oversold" },
          { label: "Bleeping Computer", url: "https://www.bleepingcomputer.com/news/artificial-intelligence/openai-teases-astra-its-next-major-ai-model-after-it-solves-10-long-standing-math-problems/" }
        ]
      },
      {
        title: "Big Tech's 2026 AI capex guidance climbs to roughly $720–745 billion",
        body: "Second-quarter earnings from the four biggest AI spenders are now in, and every one of them raised its spending outlook. Alphabet posted $119.8 billion in Q2 revenue with cloud growth of 82%, but capex hit $44.9 billion for the quarter alone and free cash flow went negative $5.9 billion, as it raised full-year capex guidance to $195–205 billion. Microsoft's fiscal Q4 capex rose 70% year-over-year to $41 billion, though it actually trimmed its full-year forecast to $175 billion from an earlier $190 billion. Meta lifted its 2026 capex floor to $130–145 billion, and Amazon now expects to spend $220 billion this year, partly due to rising memory-chip prices — pushing the four companies' combined 2026 guidance to roughly $720–745 billion, up from $695–725 billion just a quarter ago.",
        why: "Capex is the clearest public number for how much a company is actually betting on AI, as opposed to how much it talks about it. Watch free cash flow alongside capex — when it turns negative, investors start asking harder questions about when the spending is supposed to pay off.",
        sources: [
          { label: "CNBC — hyperscaler capex scrutiny", url: "https://www.cnbc.com/2026/07/28/hyperscalers-face-higher-capex-scrutiny-after-alphabet-report-panned.html" },
          { label: "24/7 Wall St. — Microsoft vs Alphabet", url: "https://247wallst.com/investing/2026/08/01/the-real-ai-cost-question-that-defines-the-next-quarter-of-alphabet-vs-microsoft/" }
        ]
      },
      {
        title: "Washington nears a 30-day pre-release review framework for frontier AI models",
        body: "Under a June 2 executive order, federal agencies had until August 1 to finalize a voluntary framework letting the U.S. government review frontier AI models for national-security and cybersecurity risks before they ship. The Commerce Department's Center for AI Standards and Innovation and the National Security Agency would get up to 30 days of early access, and would help select which other 'trusted partners' receive early access too. OpenAI, Anthropic, and Google have all submitted joint revisions and are reportedly close to a deal, while Meta and xAI have not yet signed on.",
        why: "This is a preview of how AI safety regulation is actually shaping up in the US: not a public law, but a voluntary, negotiated arrangement between a handful of labs and specific federal agencies — worth contrasting with the EU's binding, publicly enforced rules covered in earlier editions.",
        sources: [
          { label: "Crowell & Moring — client alert", url: "https://www.crowell.com/en/insights/client-alerts/executive-order-creates-voluntary-regulatory-regime-of-frontier-ai-models" },
          { label: "Tech Times", url: "https://www.techtimes.com/articles/321497/20260724/voluntary-paper-mandatory-practice-white-house-ai-review-hits-august-1-deadline.htm" }
        ]
      },
      {
        title: "xAI's Grok 4.5 lands inside GitHub Copilot's model picker",
        body: "GitHub's changelog confirmed on July 28 that Grok 4.5, xAI's reasoning and coding model, is now selectable directly inside GitHub Copilot — in VS Code, the Copilot CLI, and Copilot's cloud agents — alongside the existing Claude, GPT, and Gemini options. xAI describes Grok 4.5 as built for fast, agentic, multi-step coding work, with a context window of up to 500,000 tokens. Some Business and Enterprise customers need to manually enable it in Copilot's policy settings before it appears for their organization.",
        why: "'Copilot' is increasingly a shell around several competing models rather than a model of its own — the real skill is learning to switch models per task instead of treating a coding assistant as one fixed brain.",
        sources: [
          { label: "GitHub Changelog", url: "https://github.blog/changelog/2026-07-28-grok-4-5-is-now-available-in-github-copilot/" },
          { label: "xAI — Grok in GitHub Copilot", url: "https://x.ai/news/grok-github-copilot" }
        ]
      }
    ],
    media: [
      {
        kind: "video",
        title: "Two Minute Papers — latest upload",
        source: "Károly Zsolnai-Fehér · YouTube",
        why: "The best fit for today's Astra story — expect a clear, visual walkthrough of what these proofs mean and don't mean.",
        url: "https://www.youtube.com/@TwoMinutePapers/videos"
      },
      {
        kind: "podcast",
        title: "The AI Daily Brief — today's episode",
        source: "Nathaniel Whittemore · ~20 min daily",
        why: "Same-day analysis of the Astra reveal alongside the earnings-week capex numbers.",
        url: "https://www.youtube.com/@AIDailyBrief/videos"
      },
      {
        kind: "podcast",
        title: "ThursdAI — this week's roundup",
        source: "Alex Volkov & guests · weekly",
        why: "A weekly roundup likely to dig into Astra's actual math claims with more technical rigor than daily coverage.",
        url: "https://thursdai.news/"
      },
      {
        kind: "podcast",
        title: "Hard Fork — this week's episode",
        source: "The New York Times · weekly",
        why: "An accessible take on the Washington review framework and what 'voluntary' federal AI oversight really means in practice.",
        url: "https://www.nytimes.com/column/hard-fork"
      }
    ],
    term: {
      word: "Formal verification (and its limits)",
      definition:
        "A technique where a proof or program is checked by another program — like the Lean proof assistant — that confirms each logical step is valid, a much stronger guarantee than a human skimming the argument. Its limit: it only checks that the formal statement follows correctly from the formal assumptions, not that the formal statement was written to mean what everyone assumes it means. That is why 'machine-verified' still is not the same as 'peer reviewed.'",
      link: "#/course/models"
    },
    tryThis:
      "Read the plain-language summary of one Astra result on OpenAI's blog post (the non-sofic group example is a good start), then ask any chatbot to explain in simple terms what a 'sofic group' is and why mathematicians care whether one exists. Notice how far a good explanation gets you even without following the formal proof.",
    learnLinks: [
      { label: "How to read a model capability claim → How Models Work", href: "#/course/models" },
      { label: "Follow the capex → The AI Industry", href: "#/course/industry" },
      { label: "Voluntary vs binding AI rules → Safety, Ethics & Policy", href: "#/course/safety" }
    ]
  },
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
