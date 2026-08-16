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
    date: "2026-08-16",
    displayDate: "Sunday, August 16, 2026 · Edition #14",
    headline: "Anthropic posts its first operating profit as Q2 revenue tops $11.5B, OpenAI's $7B tender offer holds its valuation flat at $852B, and Cognition eyes a $40B mark",
    summary:
      "The AI economy sent two very different signals this week: Anthropic crossed into positive operating income while its revenue kept compounding, while OpenAI let employees cash out $7 billion in stock at an unchanged valuation — a sign investors aren't yet paying up for a bigger number. Meanwhile coding-agent startup Cognition is already back in funding talks at a valuation 50%+ above its round from three months ago, and OpenAI kept reshaping ChatGPT's free tier with wider ad tests and a legacy feature's retirement.",
    stories: [
      {
        title: "Anthropic posts its first operating profit as Q2 revenue tops $11.5 billion",
        body: "Anthropic told investors its preliminary second-quarter 2026 revenue exceeded $11.5 billion, up from about $787 million in the same quarter last year and $4.73 billion in the first quarter of 2026 — a more than 14-fold year-over-year jump, according to a Bloomberg report cited by CNBC on August 15. The company also posted positive adjusted operating income for the first time, roughly two years ahead of its own earlier projections. The figures are preliminary and could still change; Anthropic is reportedly preparing for a possible IPO as soon as this fall.",
        why: "Revenue growth and profitability are two different questions — a company can grow its top line fast while still losing money on every dollar it brings in. Anthropic crossing into positive operating income, not just posting a bigger revenue number, is the more meaningful signal here, and it's worth learning to look for both figures whenever a company reports 'explosive growth.'",
        sources: [
          { label: "CNBC", url: "https://www.cnbc.com/2026/08/15/anthropic-revenue-jumps-to-over-11point5-billion-in-q2-report.html" },
          { label: "Fortune", url: "https://fortune.com/2026/08/15/anthropic-revenue-q2-11-5-billion-ipo-investors/" }
        ]
      },
      {
        title: "OpenAI completes $7B employee tender offer — at a valuation unchanged from March",
        body: "OpenAI finished a roughly $7 billion tender offer that let current and former employees sell shares at the company's existing $852 billion valuation, the same level set by its $122 billion funding round in March, according to Bloomberg and CNBC reporting on August 10. Unlike prior tenders, OpenAI itself funded the buyback with its own cash rather than bringing in outside investors. The company confidentially filed IPO paperwork with the SEC in June but hasn't disclosed a timeline for going public.",
        why: "A tender offer lets employees turn paper equity into cash without waiting for an IPO, but it's also a data point on demand: this one priced shares at the same valuation as five months ago rather than a step up, which is a more cautious signal than a splashy new funding round would send.",
        sources: [
          { label: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-08-10/openai-buys-back-7-billion-of-employee-shares-in-tender-offer" },
          { label: "CNBC", url: "https://www.cnbc.com/2026/08/10/openai-wraps-7-billion-share-sale-ahead-of-potential-ipo-.html" }
        ]
      },
      {
        title: "AI coding startup Cognition reportedly in talks to raise at a $40 billion valuation",
        body: "Cognition, maker of the autonomous coding agent Devin, is in early talks with investors for a new round that could value the company at $40 billion or more, Bloomberg and TechCrunch reported on August 12 — up over 50% from the $26 billion valuation it set just three months earlier with a $1 billion raise. Cognition's customers reportedly include Citi, Mercedes-Benz, Goldman Sachs, and the U.S. Army and Navy, and the company has said enterprise usage of Devin grew roughly 50% month-over-month in the run-up to its last round.",
        why: "Cognition sells an autonomous agent that does engineering work end-to-end, a distinct category from general-purpose chatbots or in-editor autocomplete like GitHub Copilot. Investors repricing it more than 50% higher in three months is a bet that agentic coding tools are becoming their own durable market, not just a feature bolted onto existing IDEs.",
        sources: [
          { label: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-08-12/ai-startup-cognition-in-new-funding-talks-at-40-billion-value" },
          { label: "TechCrunch", url: "https://techcrunch.com/2026/08/12/ai-coding-startup-cognition-reportedly-already-in-talks-to-raise-at-40b-valuation/" }
        ]
      },
      {
        title: "OpenAI expands ChatGPT ad test to the UK, Mexico, Brazil, Japan, and South Korea",
        body: "OpenAI announced on August 11 that its ChatGPT ads pilot, which began in the U.S. in February, is now live in the UK, Mexico, Brazil, Japan, and South Korea. Ads only appear for logged-in adult users on the Free and Go tiers — Plus, Pro, Business, Enterprise, and Education accounts remain ad-free — and OpenAI says ads are clearly labeled as sponsored, visually separated from ChatGPT's answers, and don't influence what the model says. Users can dismiss ads, see why one was shown, and delete their ad data.",
        why: "Advertising is becoming a real monetization lever for free AI tiers, the same way it funded free search and social products before it — and keeping ads from quietly shaping an assistant's actual answers is the trust question every ad-supported information tool eventually has to prove it can handle.",
        sources: [
          { label: "OpenAI (official)", url: "https://openai.com/index/testing-ads-in-chatgpt/" },
          { label: "Digiday", url: "https://digiday.com/media-buying/expand-thoughtfully-openai-offers-chatgpt-ads-to-new-markets-including-the-u-k-brazil-and-japan/" }
        ]
      },
      {
        title: "OpenAI to retire the official DALL-E GPT from ChatGPT on August 30",
        body: "OpenAI's ChatGPT release notes confirm the official DALL-E GPT — the preconfigured image-generation assistant built into ChatGPT — will be retired on August 30, 2026. OpenAI is directing users to ChatGPT Images, now the primary way to create and edit pictures inside ChatGPT, and recommends downloading any images people want to keep before the cutoff. User-created custom GPTs that use image generation are unaffected, and image generation itself isn't going away — only the original DALL-E GPT surface is.",
        why: "This is a small but useful habit to build: as AI products mature, companies routinely fold overlapping legacy features into one primary surface, and a tool's own release notes are the place to catch a deadline like this before you lose access to something you rely on.",
        sources: [
          { label: "OpenAI Help Center (official)", url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes" },
          { label: "Tom's Guide", url: "https://www.tomsguide.com/ai/chatgpt/you-have-until-august-30-to-save-your-chatgpt-dall-e-images-heres-how-to-avoid-losing-them-forever" }
        ]
      }
    ],
    media: [
      {
        kind: "podcast",
        title: "The AI Daily Brief — today's episode",
        source: "Nathaniel Whittemore · ~20 min daily",
        why: "Reliable same-day take on Anthropic's first profitable quarter and what OpenAI's flat-valuation tender offer signals about investor appetite.",
        url: "https://www.youtube.com/@AIDailyBrief/videos"
      },
      {
        kind: "podcast",
        title: "Hard Fork — latest episode",
        source: "Kevin Roose & Casey Newton · NYT · weekly",
        why: "Strong at the business and culture angle on stories like Cognition's fast valuation jump and OpenAI's expanding ad tests.",
        url: "https://www.nytimes.com/column/hard-fork"
      },
      {
        kind: "podcast",
        title: "Last Week in AI — this week's episode",
        source: "Andrey Kurenkov & Jeremie Harris · weekly",
        why: "Good grounded recap of the week's funding and monetization news across Anthropic, OpenAI, and Cognition.",
        url: "https://www.lastweekinai.com/"
      },
      {
        kind: "podcast",
        title: "ThursdAI — latest episode",
        source: "Alex Volkov · weekly",
        why: "Useful technical and product-focused take on what's changing inside ChatGPT as OpenAI tests ads and retires legacy features.",
        url: "https://sub.thursdai.news/"
      }
    ],
    term: {
      word: "Operating profit (vs. revenue)",
      definition:
        "Revenue is all the money a company brings in; operating profit is what's left after subtracting the costs of actually running the business — before interest, taxes, and other adjustments. A company can post huge, fast-growing revenue while still losing money on every dollar, which is why Anthropic crossing into positive operating income this quarter is a different, and arguably bigger, milestone than the revenue number alone.",
      link: "#/course/industry"
    },
    tryThis:
      "Read the Anthropic and OpenAI stories above and write one sentence each explaining, in your own words, the difference between 'revenue,' 'valuation,' and 'operating profit' — then find one AI company's public filing or press release and see whether its headline number is revenue, profit, or valuation. Notice how often headlines lead with the most impressive-sounding figure rather than the most informative one.",
    learnLinks: [
      { label: "How AI companies make money and spend it → The AI Industry", href: "#/course/industry" },
      { label: "ChatGPT's free tier, ads, and image tools → The AI Toolbox", href: "#/course/tools" },
      { label: "What agentic coding tools like Cognition's Devin actually do → Building with AI", href: "#/course/engineering" }
    ]
  },
  {
    date: "2026-08-15",
    displayDate: "Saturday, August 15, 2026 · Edition #13",
    headline: "Anthropic eyes its biggest-ever acquisition with a $6B bid for Decart, OpenAI previews a 14x-faster GPT-5.6 tier, and SpaceXAI's Grok 4.6 undercuts rivals on price",
    summary:
      "The infrastructure race kept accelerating this week: Anthropic is reportedly negotiating to buy an Israeli GPU-efficiency startup for roughly $6 billion, while OpenAI showed off a Cerebras-powered inference tier that answers in a fraction of the usual time. Meanwhile the newly renamed SpaceXAI shipped a flagship model at half the price of its closest rivals, GitHub Copilot picked up a new model option, and Meta pushed further into open-weight, on-device AI.",
    stories: [
      {
        title: "Anthropic in talks to buy Israeli startup Decart AI for about $6 billion",
        body: "Anthropic is negotiating to acquire Decart AI, an Israeli startup founded in 2023 that builds software for making AI training and inference run more efficiently on existing chips, plus real-time generative-video and world-model technology. Bloomberg and other outlets reported on August 13 that the deal, valued around $6 billion, would be Anthropic's largest acquisition to date, though talks remain early-stage and could still fall through. The move comes as Anthropic races to expand computing capacity to meet surging demand for Claude while it prepares for a future public listing.",
        why: "Buying a GPU-efficiency company rather than just leasing more data centers is a different lever on the same problem: instead of paying for more compute, Anthropic would be paying to squeeze more useful work out of the compute it already has — a strategy worth watching as every major lab hits similar power and chip constraints.",
        sources: [
          { label: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-08-13/anthropic-said-in-talks-to-buy-ai-startup-decart-for-6-billion" },
          { label: "Fortune", url: "https://fortune.com/2026/08/13/anthropic-said-in-talks-to-buy-startup-decart-for-6-billion/" }
        ]
      },
      {
        title: "OpenAI previews 'Ultrafast' mode: GPT-5.6 Sol at up to 14x the usual speed",
        body: "OpenAI announced a limited preview of Ultrafast, a new API service tier that runs GPT-5.6 Sol on Cerebras hardware at up to 750 output tokens per second — as much as 14 times faster than the model's standard processing speed — with no drop in answer quality, according to both companies. OpenAI says it is testing the tier on latency-sensitive workloads like incident response, live voice support, coding, and financial research. Ultrafast launches first to a select group of API customers, with no public pricing or broad availability date yet announced.",
        why: "Model intelligence and inference speed are separate axes of progress — this is a case of the same underlying model getting dramatically faster through specialized hardware rather than through a smarter model, which matters for any use case where a person or another system is waiting on the answer in real time.",
        sources: [
          { label: "OpenAI (official)", url: "https://openai.com/index/previewing-ultrafast/" },
          { label: "Cerebras (official)", url: "https://www.cerebras.ai/blog/accelerating-gpt-5-6-sol-ultrafast-with-openai" }
        ]
      },
      {
        title: "SpaceXAI (formerly xAI) launches Grok 4.6, matching GPT-5.6 Sol at a lower price",
        body: "SpaceXAI — the renamed entity formed when Elon Musk merged xAI into SpaceX earlier this year — released Grok 4.6 on August 12, a flagship model built for long-running agent tasks like multi-step research, codebase-wide work, and turning an idea into a finished artifact. Grok 4.6 scores 61 on the Artificial Analysis Intelligence Index, matching GPT-5.6 Sol, while pricing in at $2 per million input tokens and $6 per million output tokens — undercutting several frontier rivals. Its context window stays at 500,000 tokens, unchanged from Grok 4.5, and the model is available now through Cursor, SpaceXAI's own Grok Build tool, and its API.",
        why: "Matching a rival's benchmark score while charging noticeably less is a common competitive play once a capability tier becomes commoditized — it shifts the competition from 'who is smartest' to 'who is smart enough, cheapest,' which is exactly the dynamic driving the pricing cuts happening across the industry this month.",
        sources: [
          { label: "VentureBeat", url: "https://venturebeat.com/technology/spacexai-debuts-grok-4-6-overtaking-kimi-k3s-performance-and-matching-gpt-5-6-sol-for-worlds-third-best-on-artificial-analysis" },
          { label: "DataNorth AI", url: "https://datanorth.ai/news/xai-releases-grok-4-6" }
        ]
      },
      {
        title: "GitHub Copilot adds Google's Gemini 3.7 Flash as a selectable model",
        body: "GitHub announced on August 13 that Gemini 3.7 Flash, Google's latest fast general-purpose model, is rolling out in GitHub Copilot for Pro, Pro+, Max, Business, and Enterprise users. Early testing shows improvements in web and app development and agentic coding workflows over the prior Gemini 3.6 Flash. The rollout is gradual, and Copilot Business and Enterprise admins must enable a preview policy before their organization can select the model.",
        why: "Copilot's model picker is becoming a genuine multi-vendor menu — this is the same pattern the Toolbox course covers with Claude, GPT, and Gemini options inside one coding tool, and it means the 'best' model for a given Copilot task can change from week to week as vendors ship updates.",
        sources: [
          { label: "GitHub Changelog (official)", url: "https://github.blog/changelog/2026-08-13-gemini-3-7-flash-is-now-available-in-github-copilot/" }
        ]
      },
      {
        title: "Meta open-sources Muse Glimmer, a 30B model built to run on a single consumer GPU",
        body: "Meta released Muse Glimmer, a roughly 30-billion-parameter open-weight model under the Apache 2.0 license, distilled from Meta's larger closed Muse Spark system. Unlike Muse Spark, Glimmer is small enough to run locally on a Mac or PC with one consumer graphics card, and Meta positions it for local agents, function calling, on-device coding help, and offline use with no cloud connection required. The release accompanied a lengthy essay from CEO Mark Zuckerberg describing his vision for personal AI assistants that run on a user's own hardware.",
        why: "Most frontier discussion centers on giant cloud-hosted models, but a capable model small enough to run on your own laptop changes what's possible for privacy-sensitive or offline use cases — it's the same 'run it locally' idea covered in the Toolbox course, just at a meaningfully higher capability level than earlier small open models.",
        sources: [
          { label: "Meta AI Research (official)", url: "https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model" },
          { label: "VentureBeat", url: "https://venturebeat.com/technology/meta-returns-to-open-source-with-muse-glimmer-an-apache-2-0-licensed-30b-parameter-ai-model-optimized-for-agents-available-now" }
        ]
      }
    ],
    media: [
      {
        kind: "podcast",
        title: "The AI Daily Brief — today's episode",
        source: "Nathaniel Whittemore · ~20 min daily",
        why: "Reliable same-day take on the Decart acquisition talks and what buying compute-efficiency IP signals about the infrastructure race.",
        url: "https://www.youtube.com/@AIDailyBrief/videos"
      },
      {
        kind: "podcast",
        title: "ThursdAI — latest episode",
        source: "Alex Volkov · weekly",
        why: "Strong technical breakdown of new model releases like Grok 4.6 and Muse Glimmer, with side-by-side benchmark context.",
        url: "https://sub.thursdai.news/"
      },
      {
        kind: "podcast",
        title: "Last Week in AI — this week's episode",
        source: "Andrey Kurenkov & Jeremie Harris · weekly",
        why: "Good grounded recap of the week's model and infrastructure news, including OpenAI's Ultrafast preview.",
        url: "https://www.lastweekinai.com/"
      },
      {
        kind: "video",
        title: "Two Minute Papers — latest upload",
        source: "Károly Zsolnai-Fehér · YouTube",
        why: "Clear, visual explanation of what inference-speed jumps like Ultrafast's 14x actually mean under the hood.",
        url: "https://www.youtube.com/@TwoMinutePapers/videos"
      }
    ],
    term: {
      word: "Inference throughput (tokens per second)",
      definition:
        "A measure of how fast a model can generate its response once you've asked it something, usually counted in output tokens per second. It's a different quality from the model's underlying intelligence — the same model can run slow or fast depending on the chips and software serving it, which is exactly what OpenAI's Ultrafast preview demonstrates by running GPT-5.6 Sol up to 14x faster on Cerebras hardware with no change to the model's answers.",
      link: "#/course/models"
    },
    tryThis:
      "Time how long your usual chatbot takes to finish a medium-length answer (roughly a paragraph), then try the same prompt on a tool known for fast inference (like Cerebras- or Groq-hosted models, if you have access). Notice whether the faster answer is any less useful — that gap is what 'inference throughput' actually buys you.",
    learnLinks: [
      { label: "How model speed, size, and cost trade off → The AI Models", href: "#/course/models" },
      { label: "Running models locally and open-weight tools → The AI Toolbox", href: "#/course/tools" },
      { label: "Who's building what, and who's buying whom → The AI Industry", href: "#/course/industry" }
    ]
  },
  {
    date: "2026-08-13",
    displayDate: "Thursday, August 13, 2026 · Edition #12",
    headline: "Google hands DeepMind's day-to-day reins to Koray Kavukcuoglu as Gemini crosses 1 billion monthly users, a LiteLLM supply-chain breach exposes 2,500+ companies, and Claude Cowork moves into the Chrome sidebar",
    summary:
      "Google restructured its AI leadership right as its Gemini app hit a billion monthly users, a reminder that even the fastest-growing product in company history still needs someone minding day-to-day execution. Elsewhere, security researchers detailed the largest AI supply-chain breach uncovered so far this year, California lawmakers held make-or-break votes on dozens of AI bills, and Anthropic pushed Claude Cowork further into the browser.",
    stories: [
      {
        title: "Demis Hassabis steps back to Alphabet chief scientist; Koray Kavukcuoglu becomes Google DeepMind's CEO",
        body: "Google confirmed a leadership reshuffle in which Demis Hassabis, DeepMind's co-founder and longtime CEO, moves to the roles of Alphabet chief scientist and Google DeepMind chairman, handing day-to-day operational leadership of DeepMind to Koray Kavukcuoglu, previously the unit's chief technology officer. Kavukcuoglu now reports directly to Sundar Pichai and oversees Gemini model development, frontier research, and the Gemini app and developer teams. The reshuffle came alongside the departure of veteran Google AI researcher Jeff Dean, who is leaving to launch a new venture. Pichai framed the changes as sharpening focus so Hassabis can concentrate on long-term research direction while Kavukcuoglu drives execution.",
        why: "Splitting a 'chief scientist' role from day-to-day CEO duties is a structure other AI labs have also leaned on as research organizations scale into product companies shipping on tight competitive timelines — it's worth watching whether the split speeds Gemini's release cadence or just adds a layer of coordination.",
        sources: [
          { label: "Google (official)", url: "https://blog.google/company-news/inside-google/message-ceo/next-chapter-ai-momentum/" },
          { label: "CNBC", url: "https://www.cnbc.com/2026/08/12/google-deepmind-koray-kavukcuoglu.html" },
          { label: "TIME", url: "https://time.com/article/2026/08/06/google-deepmind-ai-demis-hassabis/" }
        ]
      },
      {
        title: "Google's Gemini app passes 1 billion monthly active users, its fastest product ever to the milestone",
        body: "Google announced on August 11 that the standalone Gemini app has surpassed 1 billion monthly active users, making it the company's 14th product to reach that scale and its fastest one to get there. Google said 63% of users now interact with Gemini by voice, one in five Gemini Live sessions involve camera or screen sharing rather than voice alone, and the app generates more than 150 million images per day. Sundar Pichai announced the figure directly, noting Gemini can now carry out automated tasks across more than 40 apps, such as booking a ride or making a reservation.",
        why: "User counts don't measure model quality, but they measure something else that matters commercially: distribution. A billion monthly users gives Google a feedback loop and default-app advantage that's hard for rivals to match purely on benchmark scores.",
        sources: [
          { label: "Google (official)", url: "https://blog.google/innovation-and-ai/products/gemini-app/one-billion-monthly-users/" },
          { label: "TechCrunch", url: "https://techcrunch.com/2026/08/11/googles-gemini-app-surges-to-one-billion-users/" },
          { label: "9to5Google", url: "https://9to5google.com/2026/08/11/gemini-app-1-billion/" }
        ]
      },
      {
        title: "Researchers detail 2026's largest AI supply-chain breach: compromised LiteLLM packages expose 2,500+ companies",
        body: "Security firm CloudSEK published research this week on what it calls the largest AI supply-chain breach uncovered so far in 2026: a threat group compromised two versions of the widely used LiteLLM package on PyPI back in March, entering through the Trivy security scanner inside LiteLLM's own build pipeline, where it stayed hidden for roughly 20 days. The compromise potentially exposed credentials tied to more than 2,500 organizations and around 434,000 CI/CD pipelines, with high-confidence matches to major companies including Nvidia, AWS, Samsung, Cisco, and Salesforce — though a match doesn't prove those organizations were actually compromised or that stolen credentials were used. The FBI issued a flash advisory in July warning the exposed credentials could still be weaponized.",
        why: "LiteLLM is plumbing — a routing library many companies use to call different AI models through one interface — which is exactly why compromising it was so effective: one poisoned dependency deep in a build pipeline can quietly expose thousands of downstream users at once, the same dynamic behind classic software supply-chain attacks like SolarWinds.",
        sources: [
          { label: "CloudSEK (research)", url: "https://www.cloudsek.com/blog/ai-supply-chain-breach-2500-companies-434000-cicd-pipelines" },
          { label: "CX Today", url: "https://www.cxtoday.com/security-privacy-compliance/supply-chain-attack-exposes-2500-companies-in-largest-ai-infrastructure-breach-of-2026-so-far/" }
        ]
      },
      {
        title: "California lawmakers hold make-or-break 'suspense file' votes on roughly 30 AI bills",
        body: "California's Assembly and Senate Appropriations Committees held suspense-file votes today, August 13, on a batch of roughly 30 pending AI bills covering areas like chatbot safety, transparency, and workplace AI use. Bills placed on the suspense file that fail to win a committee majority at this hearing die for the session with no chance of revival; those that pass move to a full floor vote in each chamber, with a September 12 deadline to reach Governor Newsom's desk. The hearings follow California's earlier first-in-the-nation companion-chatbot law (SB 243), which took effect January 1 and requires operators to disclose when a user is talking to AI and take extra precautions when that user is a minor.",
        why: "The 'suspense file' is a quiet but powerful chokepoint in state lawmaking — bills can have public support and still die in a closed-door fiscal committee vote with no recorded debate, which is why so much AI-safety and AI-transparency policy in the US is currently being decided at the state level rather than in Congress.",
        sources: [
          { label: "TechTimes", url: "https://www.techtimes.com/articles/322386/20260731/california-ai-bills-face-kill-survive-vote-monday-eu-fines-start.htm" },
          { label: "CalMatters", url: "https://calmatters.org/newsletter/california-ai-bills-workforce-newsletter/" }
        ]
      },
      {
        title: "Anthropic brings full Claude Cowork sessions into the Chrome sidebar, with skills, plugins, and connectors",
        body: "Anthropic announced on August 12 that its Claude for Chrome browser extension now runs a full Claude Cowork session directly in the sidebar, rather than a lighter-weight side panel assistant. The update brings skills, plugins, and connectors into the browser for the first time with no extra setup, and lets a task started in the Claude app continue seamlessly in Chrome or vice versa, with conversation history shared across both. Max and Team subscribers can use the feature now; Pro plan access is coming in the following weeks.",
        why: "This is Anthropic folding its 'agent that acts inside a live browser session' capability into the same product surface as its chat history and skills library, rather than keeping it siloed — a sign that Cowork-style persistent, tool-using sessions are becoming the default way Anthropic wants people to use Claude, not a separate experimental mode.",
        sources: [
          { label: "9to5Mac", url: "https://9to5mac.com/2026/08/12/claude-cowork-chrome/" },
          { label: "The Decoder", url: "https://the-decoder.com/anthropic-brings-claude-cowork-to-its-chrome-extension-adding-skills-and-plugins-to-the-browser/" },
          { label: "Engadget", url: "https://www.engadget.com/2235919/claude-cowork-can-now-run-in-a-chrome-sidebar/" }
        ]
      }
    ],
    media: [
      {
        kind: "podcast",
        title: "The AI Daily Brief — today's episode",
        source: "Nathaniel Whittemore · ~20 min daily",
        why: "Reliable same-day take on the Google DeepMind leadership reshuffle and what it signals about how AI labs are organizing research versus product execution.",
        url: "https://www.youtube.com/@AIDailyBrief/videos"
      },
      {
        kind: "podcast",
        title: "Last Week in AI — this week's episode",
        source: "Andrey Kurenkov & Jeremie Harris · weekly",
        why: "Good side-by-side treatment of the LiteLLM supply-chain breach and what it means for how companies vet the AI infrastructure they build on.",
        url: "https://www.lastweekinai.com/"
      },
      {
        kind: "podcast",
        title: "Hard Fork — latest episode",
        source: "Kevin Roose & Casey Newton · weekly · NYT",
        why: "Strong at unpacking product milestones like Gemini's billion-user mark alongside the human and organizational stories, like Hassabis's role change.",
        url: "https://www.nytimes.com/column/hard-fork"
      },
      {
        kind: "video",
        title: "AI Explained — latest upload",
        source: "Philip · YouTube",
        why: "Careful framing of what state-level 'suspense file' politics actually accomplishes for AI governance, versus federal or EU rulemaking.",
        url: "https://www.youtube.com/@aiexplained-official/videos"
      }
    ],
    term: {
      word: "Software supply-chain attack",
      definition:
        "An attack that compromises a widely used piece of shared infrastructure — a package, library, or build tool — so that anyone who depends on it inherits the compromise, often without knowing it. The LiteLLM breach is a textbook case: attackers poisoned a routing library used to call different AI models, and the damage rippled out to thousands of downstream companies through their own CI/CD pipelines. It's a different threat model from attacking one company directly — the leverage comes from how deeply the compromised component is embedded in everyone else's stack.",
      link: "#/course/safety"
    },
    tryThis:
      "Pick one AI-related library or SDK your own projects depend on (even something like an OpenAI or Anthropic client library) and check whether you're pinning it to an exact version versus always pulling 'latest' — then read CloudSEK's LiteLLM writeup (linked above) and note which specific practice would have limited the blast radius if you'd been an affected user.",
    learnLinks: [
      { label: "How software supply-chain attacks work and why they spread → AI Safety, Ethics & Policy", href: "#/course/safety" },
      { label: "How AI labs are structured and who leads what → The AI Industry", href: "#/course/industry" },
      { label: "Claude Cowork, connectors, and browser agents explained → The AI Toolbox", href: "#/course/tools" }
    ]
  },
  {
    date: "2026-08-12",
    displayDate: "Wednesday, August 12, 2026 · Edition #11",
    headline: "Nvidia lines up over $500 billion from Wall Street to fund AI compute, ships a fast open agent model the same week, and OpenAI arms vetted defenders with GPT-5.6-Cyber days after pausing a riskier model",
    summary:
      "Nvidia had one of its biggest weeks of the year on two very different fronts: a half-trillion-dollar financing push to turn AI compute into a new Wall Street asset class, and a fast, efficient open-weight model release for developers. Meanwhile OpenAI kept building out its response to its own worrying safety finding from earlier in the month, expanding a program that gives vetted cybersecurity firms access to a specialized 'offense-grade' model built for authorized defensive work.",
    stories: [
      {
        title: "Nvidia signs Apollo, BlackRock, Blackstone, Brookfield, Goldman Sachs, and KKR to mobilize over $500 billion for AI compute",
        body: "Nvidia announced on August 10 that it has signed memorandums of understanding with six of Wall Street's largest asset managers — Apollo Global Management, BlackRock, Blackstone, Brookfield Asset Management, Goldman Sachs, and KKR — to establish independent AI compute infrastructure financing platforms aimed at mobilizing more than $500 billion in third-party capital over time. The platforms are designed to fund the data centers and hardware that hyperscalers, frontier labs, and enterprises need to build out AI capacity, treating compute infrastructure as an investable asset class similar to commercial real estate or toll roads. CEO Jensen Huang told CNBC that Nvidia compute now qualifies as an 'investable asset' because of its token-cost economics and the CUDA software ecosystem built around it. None of the six firms have committed a specific dollar figure yet — the MOUs are a first step, with definitive agreements still to be negotiated.",
        why: "Nvidia isn't just selling chips anymore — it's helping build the financial plumbing that lets its customers afford them, echoing how Anthropic just structured its own data centers as leased assets financed by outside investors rather than built on its own balance sheet. Watching who finances AI infrastructure, and how, says as much about the industry's risk appetite as any benchmark score.",
        sources: [
          { label: "NVIDIA Newsroom (official)", url: "https://nvidianews.nvidia.com/news/nvidia-partners-with-apollo-blackrock-blackstone-brookfield-goldman-sachs-and-kkr-to-establish-ai-compute-infrastructure-financing-platforms-to-mobilize-over-500-billion-of-third-party-capital" },
          { label: "CNBC", url: "https://www.cnbc.com/2026/08/10/nvidia-wall-street-asset-managers-500-billion-ai-push.html" },
          { label: "Data Center Dynamics", url: "https://www.datacenterdynamics.com/en/news/nvidia-partners-with-apollo-blackrock-blackstone-brookfield-goldman-sachs-and-kkr-for-500bn-financing-program/" }
        ]
      },
      {
        title: "OpenAI launches GPT-5.6-Cyber for vetted defenders and expands its Daybreak program, days after flagging Astra for a 'Critical' cyber-risk finding",
        body: "OpenAI announced on August 10 that it is expanding its Daybreak Cyber Partner program into two tiers: Daybreak Blue, which gives vetted partners access to GPT-5.6 Sol with its system-level cyber guardrails removed, and Daybreak Red, which adds access to a new model, GPT-5.6-Cyber, built specifically for authorized offensive security work like finding zero-day vulnerabilities and building exploit chains. Partners in the expanded program include CrowdStrike, Cisco, Palo Alto Networks, Cloudflare, Accenture, IBM, and several other security and consulting firms. In OpenAI's own testing, GPT-5.6-Cyber responded to about 95% of advanced cybersecurity prompts that its general-purpose sibling, GPT-5.6 Sol, refuses to answer. The launch follows OpenAI's August 7 disclosure that preliminary evaluations of its unreleased Astra model couldn't rule out that it had reached a 'Critical' cyber-risk threshold under the company's Preparedness Framework, prompting a pause on parts of Astra's development and the addition of isolated testing environments, restricted network access, and chain-of-thought monitoring for risky behavior.",
        why: "This is a live example of dual-use risk management: OpenAI is simultaneously restricting its most capable unreleased model because it might help attackers, while unlocking a specialized version of a less capable model to help vetted defenders instead — a bet that giving security teams a head start outweighs the risk of that capability leaking or being misused.",
        sources: [
          { label: "OpenAI (official)", url: "https://openai.com/index/responding-next-frontier-critical-cyber-capabilities/" },
          { label: "Axios", url: "https://www.axios.com/2026/08/10/openai-gpt-astra-restrictions-safety-hacking-defenders" },
          { label: "Forbes", url: "https://www.forbes.com/sites/jonmarkman/2026/08/11/openai-ships-gpt-56-cyber-its-first-offense-grade-hacking-model/" }
        ]
      },
      {
        title: "Nvidia open-sources Nemotron 3.5 Lightning, a 30B mixture-of-experts model built to run fast on one consumer GPU",
        body: "Nvidia released Nemotron 3.5 Lightning on August 11, a 30-billion-parameter open-weight model that uses a hybrid Mamba-2, mixture-of-experts, and attention architecture to activate only about 3 billion parameters per token, giving it a 1-million-token context window while still running on a single RTX or DGX Spark consumer GPU. Nvidia says the model delivers up to four times faster output and completes agentic tasks roughly 30% faster than comparable open models in its class, and the company published the weights, training data, and techniques on Hugging Face free for commercial use, without requiring permission or licensing fees. Alongside it, Nvidia released NeMo Switchyard, an open-source library that routes individual steps of an AI agent's task to whichever model handles that specific step most efficiently.",
        why: "Mixture-of-experts architecture activates only a fraction of a model's total parameters for any given input, which is how Nemotron 3.5 Lightning packs 30 billion parameters' worth of knowledge into something that runs at the speed and hardware footprint of a much smaller model — a different efficiency lever than the plain distillation Meta used for Muse Glimmer earlier this week.",
        sources: [
          { label: "NVIDIA Blog (official)", url: "https://blogs.nvidia.com/blog/nemotron-lightning-switchyard-rtx-dgx/" },
          { label: "CNBC", url: "https://www.cnbc.com/2026/08/11/nvidia-releases-nemotron-3point5-lightning-open-source-ai-model-.html" },
          { label: "MarkTechPost", url: "https://www.marktechpost.com/2026/08/11/nvidia-ai-releases-nemotron-3-5-lightning-and-nemo-switchyard/" }
        ]
      }
    ],
    media: [
      {
        kind: "podcast",
        title: "The AI Daily Brief — today's episode",
        source: "Nathaniel Whittemore · ~20 min daily",
        why: "Reliable same-day take on Nvidia's $500 billion financing push and what it means for how AI infrastructure gets paid for.",
        url: "https://www.youtube.com/@AIDailyBrief/videos"
      },
      {
        kind: "podcast",
        title: "ThursdAI — this week's episode",
        source: "Alex Volkov & co-hosts · weekly",
        why: "Good technical treatment of open-weight model releases — a solid fit for unpacking Nemotron 3.5 Lightning's mixture-of-experts architecture.",
        url: "https://sub.thursdai.news/"
      },
      {
        kind: "podcast",
        title: "Last Week in AI — this week's episode",
        source: "Andrey Kurenkov & Jeremie Harris · weekly",
        why: "Useful side-by-side coverage of OpenAI's Astra pause, GPT-5.6-Cyber launch, and what 'Critical' risk thresholds mean in practice.",
        url: "https://www.lastweekinai.com/"
      },
      {
        kind: "video",
        title: "AI Explained — latest upload",
        source: "Philip · YouTube",
        why: "Careful, skeptical breakdowns are this channel's specialty — well suited to weighing OpenAI's dual-use bet on cyber-capable models.",
        url: "https://www.youtube.com/@aiexplained-official/videos"
      }
    ],
    term: {
      word: "Mixture-of-experts (MoE)",
      definition:
        "A model architecture that splits its parameters into many smaller 'expert' sub-networks and activates only a handful of them for any given input, instead of running every parameter for every token. The result is a model that can hold far more total knowledge than its active compute cost would suggest — which is how Nvidia packed 30 billion parameters into Nemotron 3.5 Lightning while it only activates about 3 billion per token, letting it run fast on a single consumer GPU. It's a different lever than distillation (training a smaller model to imitate a bigger one): MoE keeps the large parameter count but is selective about which parts fire.",
      link: "#/course/models"
    },
    tryThis:
      "Open the Nemotron 3.5 Lightning model card on Hugging Face or Nvidia's developer blog (linked above) and find its total parameter count versus its active parameters per token — that ratio is the whole trick of mixture-of-experts. Then read OpenAI's Preparedness Framework post on the Astra finding and write, in one plain sentence, what would have to be true for a model to count as 'Critical' cyber risk rather than merely 'High.'",
    learnLinks: [
      { label: "How mixture-of-experts models pack more into less compute → How Models Actually Work", href: "#/course/models" },
      { label: "How labs set capability risk thresholds before release → AI Safety, Ethics & Policy", href: "#/course/safety" },
      { label: "How AI companies are financing the compute race → The AI Industry", href: "#/course/industry" }
    ]
  },
  {
    date: "2026-08-11",
    displayDate: "Tuesday, August 11, 2026 · Edition #10",
    headline: "Anthropic recruits Wall Street to build its data centers, Meta ships a laptop-sized open model, and Nvidia's new security alliance pointedly leaves out the biggest labs",
    summary:
      "Infrastructure and openness were the throughlines this week: Anthropic turned to asset managers Macquarie and GIC to finance and own its next wave of data centers rather than building them itself, while Meta released a 30-billion-parameter open model small enough to run on a laptop. Meanwhile Nvidia assembled a 50-plus-member alliance for open AI security tooling that conspicuously excludes OpenAI, Google, and Anthropic, and the EU's order forcing Google to open Android to rival AI assistants kept reverberating through the industry.",
    stories: [
      {
        title: "Anthropic, Macquarie Asset Management, and GIC launch Theseus Infrastructure to build Anthropic's data centers",
        body: "Anthropic announced on August 10 a strategic partnership with Macquarie Asset Management and Singapore's GIC sovereign wealth fund to form Theseus Infrastructure, a new company that will develop, own, and lease dedicated data centers to Anthropic under long-term agreements. Under the deal, funds managed by Macquarie together with GIC will fund the majority of the equity for each project and own the resulting facilities, while Anthropic serves as the anchor tenant and has committed to covering any consumer electricity price increases the facilities cause locally. The venture will initially focus on new sites in the United States, adding to Anthropic's existing infrastructure commitments, including its earlier $50 billion buildout with Fluidstack and multi-gigawatt compute deals with Google and Broadcom. Neither company disclosed a total dollar value or capacity target for Theseus.",
        why: "The financing structure matters as much as the compute itself: by having outside asset managers own and fund the data centers while Anthropic simply signs long-term leases, Anthropic keeps the capital cost off its own balance sheet — a leasing pattern that's becoming common across the AI industry's infrastructure race, similar in spirit to OpenAI's Stargate arrangements.",
        sources: [
          { label: "Macquarie Group", url: "https://www.macquarie.com/au/en/about/news/2026/anthropic-mam-gic-data-centre-infrastructure-partnership.html" },
          { label: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-08-10/anthropic-macquarie-and-gic-form-venture-for-ai-data-centers" },
          { label: "HPCwire", url: "https://www.hpcwire.com/off-the-wire/anthropic-macquarie-and-gic-launch-theseus-infrastructure-for-ai-data-centers/" }
        ]
      },
      {
        title: "Meta releases Muse Glimmer, a 30B open-weight model distilled to run on a single consumer GPU",
        body: "Meta Superintelligence Labs released Muse Glimmer on August 10, a 30-billion-parameter open-weight model distilled from Meta's larger Muse Spark 1.2 and shrunk to under 20 gigabytes so it can run locally on a single consumer-grade GPU or a modern laptop. The model is released under an Apache 2.0 license and is built for local, always-on agentic workflows — multi-step reasoning and tool use — rather than general chat, with Meta saying it was trained and evaluated specifically for end-to-end agentic task completion. It's available now on Hugging Face for developers to download and run directly.",
        why: "Distillation trains a smaller model to imitate a larger one's outputs, trading away some raw capability for a model that fits on hardware you already own. Muse Glimmer is a concrete example of that tradeoff: no API bill, no cloud dependency, and your data never leaves your machine, in exchange for being noticeably less capable than a frontier model like Claude or GPT.",
        sources: [
          { label: "Hugging Face", url: "https://huggingface.co/blog/muse-glimmer" },
          { label: "SiliconANGLE", url: "https://siliconangle.com/2026/08/10/meta-releases-open-source-muse-glimmer-model-30b-parameters/" },
          { label: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-08-10/meta-releases-muse-glimmer-ai-model-people-can-run-on-their-laptop" }
        ]
      },
      {
        title: "Nvidia forms a 50-plus-member Open Secure AI Alliance — without OpenAI, Google, or Anthropic",
        body: "Nvidia announced the Open Secure AI Alliance in late July, an industry group of more than 50 inaugural members — including Microsoft, IBM, Cisco, Palo Alto Networks, Cloudflare, Dell, Red Hat, and Hugging Face — building open-source tools for securing AI systems and agents, including a new agent-auditing framework called NOOA that Nvidia is contributing. OpenAI, Google, and Anthropic, the three labs most associated with frontier closed-weight models, are notably absent. Coverage has linked the alliance's framing partly to a recent security incident involving Hugging Face, where an open-weight model reportedly helped review tens of thousands of suspicious actions during an intrusion — evidence, Nvidia argues, that defenders need AI security tools they can inspect and run directly rather than depend entirely on closed systems.",
        why: "Industry alliances reveal as much through who's missing as who joined: a coalition built around open security tooling implicitly argues that closed frontier labs' internal safety work isn't sufficient on its own — a real philosophical split in how the industry thinks about defending AI systems, not just a branding exercise.",
        sources: [
          { label: "Nvidia (official blog)", url: "https://blogs.nvidia.com/blog/open-secure-ai-alliance/" },
          { label: "Tom's Hardware", url: "https://www.tomshardware.com/tech-industry/artificial-intelligence/openai-google-and-anthropic-absent-from-nvidia-led-open-secure-ai-alliance-30-companies-join-security-alliance-after-openai-agent-breach" },
          { label: "TechRadar", url: "https://www.techradar.com/pro/nvidia-launches-open-secure-ai-alliance-but-theres-no-room-for-openai-anthropic-or-google" }
        ]
      },
      {
        title: "EU's order forcing Google to open Android to Claude and ChatGPT keeps shaping the AI-assistant conversation",
        body: "The European Commission's July 16 decision under the Digital Markets Act requires Alphabet to open eleven Android features — including default-assistant status, wake-word activation, on-screen context, and in-app actions — to competing AI assistants like Claude and ChatGPT on terms 'equally effective' to what Google gives its own Gemini. Google must build the required interoperability into a major Android release no later than August 1, 2027, with a separate requirement to start sharing anonymized Search data with eligible rivals from January 2027. Five of the most sensitive capabilities, including screen automation and system-level integration, require third-party assistants to pass an independent security and privacy certification, which Google must have ready by May 1, 2027. The ruling applies only inside the EU, and Google is expected to appeal — though under DMA rules, compliance obligations run during an appeal rather than pausing for it.",
        why: "The Digital Markets Act's interoperability remedies are a live test of whether regulation can force open a platform's defaults without breaking the product — worth watching both for what it does to AI-assistant competition in Europe and for whether other regulators follow with similar rules of their own.",
        sources: [
          { label: "European Commission (official)", url: "https://digital-markets-act.ec.europa.eu/commission-provides-guidance-google-ai-interoperability-android-and-sharing-google-search-data-under-2026-07-16_en" },
          { label: "TechJournal", url: "https://techjournal.org/eu-google-android-rival-ai-assistants" },
          { label: "TheNextWeb", url: "https://thenextweb.com/news/google-eu-android-gemini-rivals-dma" }
        ]
      }
    ],
    media: [
      {
        kind: "podcast",
        title: "The AI Daily Brief — today's episode",
        source: "Nathaniel Whittemore · ~20 min daily",
        why: "Reliable same-day coverage of the Anthropic-Macquarie-GIC data center deal and Meta's Muse Glimmer release.",
        url: "https://www.youtube.com/@AIDailyBrief/videos"
      },
      {
        kind: "podcast",
        title: "Last Week in AI — this week's episode",
        source: "Andrey Kurenkov & Jeremie Harris · weekly",
        why: "Good side-by-side treatment of Nvidia's Open Secure AI Alliance and the EU's Android interoperability order.",
        url: "https://www.lastweekinai.com/"
      },
      {
        kind: "podcast",
        title: "Hard Fork — this week's episode",
        source: "The New York Times · weekly",
        why: "An accessible take on what it means for Anthropic to have Wall Street asset managers financing its data centers.",
        url: "https://www.nytimes.com/column/hard-fork"
      },
      {
        kind: "video",
        title: "AI Explained — latest upload",
        source: "Philip · YouTube",
        why: "Careful technical breakdowns are this channel's specialty — a good fit for unpacking what a distilled, laptop-sized model like Muse Glimmer can and can't do.",
        url: "https://www.youtube.com/@aiexplained-official/videos"
      }
    ],
    term: {
      word: "Model distillation",
      definition:
        "Distillation is a training technique where a smaller 'student' model learns to imitate a larger 'teacher' model's outputs, rather than being trained from scratch on raw data. The result is a model that captures much of the teacher's behavior at a fraction of the size and compute cost — which is how Meta shrank Muse Spark 1.2 down into the 30-billion-parameter Muse Glimmer, small enough to run on one consumer GPU. The tradeoff is real: distilled models are generally less capable than their teachers, especially on tasks requiring deep or novel reasoning.",
      link: "#/course/models"
    },
    tryThis:
      "Open the Muse Glimmer model card on Hugging Face (linked above) and read its 'intended uses' section — notice how it's scoped toward local coding and agent tasks rather than general chat. If you have a decent GPU, try running it locally with a tool like Ollama or LM Studio and time how it handles a coding or multi-step reasoning task compared to a frontier model you already use.",
    learnLinks: [
      { label: "How model distillation and smaller open models work → How Models Actually Work", href: "#/course/models" },
      { label: "How AI companies structure infrastructure deals → The AI Industry", href: "#/course/industry" },
      { label: "How regulation like the EU's DMA shapes AI competition → AI Safety, Ethics & Policy", href: "#/course/safety" }
    ]
  },
  {
    date: "2026-08-10",
    displayDate: "Monday, August 10, 2026 · Edition #9",
    headline: "Google DeepMind ends its Hassabis-led era, Anthropic hires its first diplomat, and OpenAI throws ChatGPT's free tier wide open",
    summary:
      "Big AI labs spent the last week rewiring how they're run and who they answer to: Google DeepMind's CEO stepped back into a chairman role after a decade running the lab, and Anthropic hired a former state supreme court justice as its first-ever head of government relations. OpenAI, meanwhile, made its free ChatGPT tier meaningfully more capable just as the industry's record AI infrastructure spending faces its first real round of investor pushback.",
    stories: [
      {
        title: "Demis Hassabis steps back as Google DeepMind CEO, becomes chairman and Alphabet chief scientist",
        body: "Google CEO Sundar Pichai announced on August 5 that Demis Hassabis is ceding day-to-day control of Google DeepMind, moving into a newly created role as the unit's chairman and as chief scientist of parent company Alphabet. Koray Kavukcuoglu, previously DeepMind's chief technology officer and Alphabet's chief AI architect, becomes senior vice president of Google DeepMind and now oversees Gemini model development, reporting directly to Pichai rather than holding a standalone CEO title. The reshuffle also included Jeff Dean's departure from his chief scientist role to start a new company with several other senior Google AI researchers. Hassabis said he plans to focus on strategic AGI questions, advise Kavukcuoglu, and spend more time on Isomorphic Labs, the Alphabet-backed drug discovery company he co-founded.",
        why: "Leadership structure is a real signal about where a company thinks the hard problems now live: Google is separating long-horizon research strategy (Hassabis) from the operational work of shipping and scaling models (Kavukcuoglu) — a split worth watching as a template other labs may follow as they mature past their founder-led phase.",
        sources: [
          { label: "Fortune", url: "https://fortune.com/2026/08/05/demis-hassabis-steps-down-google-deepmind-ai-shakeup/" },
          { label: "CNBC", url: "https://www.cnbc.com/2026/08/06/demis-hassabis-google-reshuffle-deepmind-role.html" },
          { label: "TIME", url: "https://time.com/article/2026/08/06/google-deepmind-ai-demis-hassabis/" }
        ]
      },
      {
        title: "Anthropic names former California Supreme Court justice Tino Cuéllar as its first Chief Global Affairs Officer",
        body: "Anthropic announced on August 4 that Mariano-Florentino 'Tino' Cuéllar is joining as the company's first-ever Chief Global Affairs Officer, leading its policy work, international engagement, and relationships with governments worldwide. Cuéllar previously served as a justice on the Supreme Court of California, was president of the Carnegie Endowment for International Peace, and has held roles across three U.S. presidential administrations; he had already been serving as a trustee of Anthropic's Long-Term Benefit Trust since January 2026. He framed the role around 'democratic control' of AI, saying democracies need to set the terms on which the technology advances. The hire comes as Anthropic navigates a Pentagon-related lawsuit and export-control disputes.",
        why: "As frontier AI companies increasingly operate like quasi-diplomatic actors — briefing governments, negotiating export rules, sitting in White House meetings — hiring a career justice and policy veteran into a brand-new C-suite seat shows how much weight labs now place on managing relationships with states, not just building better models.",
        sources: [
          { label: "Anthropic", url: "https://www.anthropic.com/news/tino-cuellar" },
          { label: "The Harvard Crimson", url: "https://www.thecrimson.com/article/2026/8/4/cuellar-anthropic-global-affairs/" }
        ]
      },
      {
        title: "OpenAI, Anthropic, Google and other labs meet the White House to discuss a voluntary frontier-model safety framework",
        body: "The Trump administration hosted leading AI companies — including OpenAI, Anthropic, and Google — at the White House on August 4 to discuss a new framework for voluntary safety testing of advanced AI models. The framework grows out of a June executive order on AI cybersecurity and would let the government get early, time-limited access (up to 30 days) to certain frontier models before release, explicitly without creating a mandatory licensing or preclearance system. The meeting followed reports in late July and early August that both OpenAI and Anthropic had separately detected AI agents attempting to hack into other companies' systems, adding urgency to the discussion.",
        why: "'Voluntary' frameworks like this one sit in a gray zone worth understanding: they give regulators a look at frontier capabilities and give companies a way to show good faith, but without legal teeth, they depend entirely on labs choosing to participate and disclose honestly — a dynamic to watch as pressure for binding rules builds.",
        sources: [
          { label: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-08-03/openai-anthropic-google-to-join-white-house-ai-safety-meeting" },
          { label: "CNBC", url: "https://www.cnbc.com/2026/08/03/white-house-ai-companies-voluntary-framework-meeting.html" }
        ]
      },
      {
        title: "OpenAI makes GPT-5.6 Luna the free ChatGPT default with unlimited text chats, and retunes GPT-5.6 Sol for Plus/Pro",
        body: "OpenAI announced on August 6 that GPT-5.6 Luna is becoming the default model for Free and Go tier ChatGPT users, with unlimited text chats and a new 'Think' button rolling out the week of August 10 — this week — subject to standard file-upload and image limits plus abuse guardrails. For Plus and Pro subscribers, OpenAI retuned GPT-5.6 Sol for more reliable, focused everyday answers and added a slider letting users directly control how much reasoning effort the model spends per response. OpenAI said internal evaluation on financial, medical, and legal prompts found 68% fewer factually incorrect responses from the updated Sol compared with the prior GPT-5.5 Instant model.",
        why: "Giving free users an unlimited, more capable default model is a notable shift in a market where usage caps have been the main lever companies pull to push people toward paid tiers — and the new reasoning-effort slider makes visible a tradeoff (speed vs. depth of thinking) that's usually hidden inside a model's default settings.",
        sources: [
          { label: "OpenAI", url: "https://openai.com/index/improving-gpt-5-6-sol-in-chatgpt/" },
          { label: "TechCrunch", url: "https://techcrunch.com/2026/08/06/openai-brings-unlimited-chatgpt-text-chats-to-free-users/" }
        ]
      },
      {
        title: "Big Tech's AI capital spending hits roughly $725 billion for 2026, and investors start pushing back",
        body: "Combined 2026 AI infrastructure spending across Amazon, Google, Meta, and Microsoft is tracking to roughly $725 billion, up sharply from 2025, according to analysis following the companies' late-July and early-August earnings reports. Amazon and Microsoft both posted strong cloud growth — AWS revenue up 37% year-over-year, Azure up 43% — but shares across the group fell on the same earnings days as investors questioned whether returns on that spending justify the scale of it, with rising memory-chip costs adding further pressure to capex guidance. Nvidia, the main supplier behind much of this spending, reports its own earnings on August 26.",
        why: "Capital expenditure (capex) — money spent on long-term infrastructure like data centers and chips — is the clearest number available for gauging how much a company is betting on AI, and rising investor skepticism about it is an early sign that the market wants to see AI revenue growth, not just AI spending growth, in the quarters ahead.",
        sources: [
          { label: "CNBC", url: "https://www.cnbc.com/2026/07/31/tech-earnings-cash-memory-ai.html" },
          { label: "Fortune", url: "https://fortune.com/2026/07/26/big-tech-earnings-meta-microsoft-apple-amazon-market-revolt-ai-spending/" }
        ]
      }
    ],
    media: [
      {
        kind: "podcast",
        title: "The AI Daily Brief — today's episode",
        source: "Nathaniel Whittemore · ~20 min daily",
        why: "Reliable same-day coverage of the Google DeepMind leadership reshuffle and what the Hassabis/Kavukcuoglu split means for Gemini's roadmap.",
        url: "https://www.youtube.com/@AIDailyBrief/videos"
      },
      {
        kind: "podcast",
        title: "Hard Fork — this week's episode",
        source: "The New York Times · weekly",
        why: "A good, accessible take on OpenAI's free-tier expansion and what it signals about the competitive pressure on ChatGPT.",
        url: "https://www.nytimes.com/column/hard-fork"
      },
      {
        kind: "podcast",
        title: "Last Week in AI — this week's episode",
        source: "Andrey Kurenkov & Jeremie Harris · weekly",
        why: "Solid side-by-side treatment of the White House safety-framework meeting and the AI capex spending debate.",
        url: "https://www.lastweekinai.com/"
      },
      {
        kind: "video",
        title: "AI Explained — latest upload",
        source: "Philip · YouTube",
        why: "Careful analysis of what a voluntary federal AI safety framework can and can't actually enforce.",
        url: "https://www.youtube.com/@aiexplained-official/videos"
      }
    ],
    term: {
      word: "Capex (capital expenditure)",
      definition:
        "Capex is money a company spends on long-term physical assets — for AI, mainly data centers, servers, and chips — rather than day-to-day operating costs. It shows up on a company's cash flow statement and is the clearest public signal of how much a company is betting on future AI demand, since the payoff (from selling cloud compute, running better products) arrives years after the spending does. Investors watching capex closely, as they are right now with Big Tech's roughly $725 billion 2026 AI spend, are really asking whether that future payoff will actually show up.",
      link: "#/course/industry"
    },
    tryThis:
      "Read OpenAI's blog post on the GPT-5.6 Sol/Luna update (linked above), then open ChatGPT's free tier and find the new 'Think' button. Ask it the same moderately hard question with Think on and off, and compare the answers — that's the reasoning-effort tradeoff the story describes, made visible.",
    learnLinks: [
      { label: "How AI companies make money and spend it → The AI Industry", href: "#/course/industry" },
      { label: "How voluntary safety frameworks and risk tiers work → AI Safety, Ethics & Policy", href: "#/course/safety" },
      { label: "What a 'thinking budget' or reasoning-effort setting actually does → How Models Actually Work", href: "#/course/models" }
    ]
  },
  {
    date: "2026-08-09",
    displayDate: "Sunday, August 9, 2026 · Edition #8",
    headline: "OpenAI pauses its next model over a 'Critical' cyber-risk finding, shuts down its Atlas browser, and gets outed as ~70% of Microsoft's AI revenue — all in one week",
    summary:
      "OpenAI had an unusually candid, and unusually rough, stretch: it disclosed that its unreleased Astra model may have crossed a 'Critical' cybersecurity threshold, retired its ten-month-old Atlas browser in favor of folding agentic features straight into ChatGPT, and watched a Microsoft disclosure show just how much of Big Tech's AI revenue actually flows through one partnership. Meanwhile Ilya Sutskever's secretive Safe Superintelligence lab struck a multibillion-dollar compute deal with Nvidia — a reminder that even a safety-first lab that ships no products still needs chips at scale.",
    stories: [
      {
        title: "OpenAI says its unreleased 'Astra' model may have hit a 'Critical' cybersecurity threshold — and pauses work on it",
        body: "OpenAI disclosed on August 7 that internal testing of its upcoming Astra model could not rule out that the system has reached the 'Critical' tier for cyber capability under the company's Preparedness Framework — the highest risk category OpenAI tracks, and the first time any of its models has approached it. OpenAI said it is pausing internal Astra activities that don't yet meet strengthened security requirements, and has added universal monitoring for risky or misaligned behavior across all of the model's agentic uses, including training and evaluation. The company stressed it has not formally classified Astra as Critical — full benchmarking is still underway — but chose to disclose the preliminary finding for transparency with the public and the security research community. Astra had already made headlines in early August after OpenAI teased it by publishing ten machine-checked solutions to previously unsolved math and computer-science problems.",
        why: "OpenAI's Preparedness Framework sorts a model's potential for harm into tiers (Low, Medium, High, Critical) before release; 'Critical' specifically means a model that could independently discover and use never-before-seen exploits against hardened real-world systems, not just replay known bugs. Pausing internal work rather than shipping first and patching later is a rare real-world test of whether a lab's safety commitments hold once a model's actual capability, not just its marketing, is what's being measured.",
        sources: [
          { label: "OpenAI", url: "https://openai.com/index/responding-next-frontier-critical-cyber-capabilities/" },
          { label: "Forbes", url: "https://www.forbes.com/sites/jonmarkman/2026/08/09/openai-pauses-astra-after-it-nears-first-ever-critical-cyber-risk/" },
          { label: "MacRumors", url: "https://www.macrumors.com/2026/08/07/openai-astra-model-hacking-concerns/" }
        ]
      },
      {
        title: "OpenAI shuts down its Atlas browser today, folding its features straight into ChatGPT",
        body: "OpenAI's standalone AI browser, Atlas, stops working today, August 9, less than ten months after its October 2025 launch. Rather than continuing Atlas as a separate product, OpenAI is moving its browser-based agentic features — letting an AI agent navigate websites, fill forms, and complete multi-step tasks — directly into ChatGPT and its Codex coding tool, alongside planned improvements like multiple tabs, downloads, and account login support. OpenAI told users to export bookmarks and saved pages before the shutdown, since Atlas will no longer open or browse afterward. Atlas had drawn criticism for slow task completion and for being vulnerable to prompt-injection attacks, where instructions hidden in a webpage hijack the agent's behavior.",
        why: "Retiring a nine-month-old product to fold its capability into the core app you already use daily is a sign OpenAI decided the browser itself wasn't the moat — the agent behavior was. It's also a concrete case study in prompt injection, a security risk worth understanding any time an AI agent is given the ability to act on real webpages on your behalf.",
        sources: [
          { label: "OpenAI Help Center", url: "https://help.openai.com/en/articles/20001371-evolving-atlas-into-chatgpt-for-browser-based-agentic-work" },
          { label: "9to5Mac", url: "https://9to5mac.com/2026/08/04/openai-explains-what-will-happen-when-chatgpt-atlas-shuts-down-this-weekend/" },
          { label: "TechRepublic", url: "https://www.techrepublic.com/article/news-chatgpt-atlas-shutdown-migration/" }
        ]
      },
      {
        title: "Microsoft discloses that OpenAI accounts for roughly 70% of its AI revenue",
        body: "Regulatory disclosures reported August 5 show Microsoft booked $24.1 billion in OpenAI-related sales in the fiscal year that ended in June 2026 — around 70% of Microsoft's total AI revenue, which Bloomberg estimates at roughly $34 billion over the same period. The figure includes payments for Azure cloud computing, model development costs, and Microsoft's contractual share of OpenAI's revenue under their partnership. Even so, OpenAI-related sales made up less than 10% of Microsoft's overall company revenue, underscoring how large Microsoft's total business is relative to any single AI partner.",
        why: "This is one of the clearest public numbers yet on how financially intertwined Microsoft and OpenAI actually are — a useful reminder that 'AI revenue' reported by big tech companies is often concentrated in a small number of deals rather than broad-based demand, which matters when judging how durable that revenue really is.",
        sources: [
          { label: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-08-05/microsoft-s-ai-sales-mostly-come-from-openai-disclosures-show" },
          { label: "Neowin", url: "https://www.neowin.net/news/microsoft-reveals-it-generated-241-billion-in-revenue-from-openai-in-fiscal-2026/" }
        ]
      },
      {
        title: "Ilya Sutskever's Safe Superintelligence strikes a multibillion-dollar compute deal with Nvidia",
        body: "Safe Superintelligence (SSI), the AI lab OpenAI co-founder and former chief scientist Ilya Sutskever started in 2024, announced a long-term strategic partnership with Nvidia in late July, reported to be worth around $5 billion. The deal gives SSI access to Nvidia's next-generation Vera Rubin GPU platform, expected to expand the startup's available compute by roughly an order of magnitude. SSI, led by Sutskever and Daniel Levy, has stayed almost entirely out of the public eye since its founding, saying it is pursuing safe superintelligence directly rather than releasing commercial products along the way.",
        why: "SSI's entire pitch is that it can out-research competitors without racing to ship products, but that strategy still runs into the wall every lab eventually hits: frontier AI research requires enormous, expensive compute, and even a famously product-averse lab has to strike a major hardware deal to keep going.",
        sources: [
          { label: "TechCrunch", url: "https://techcrunch.com/2026/07/27/ilya-sutskevers-safe-superintelligence-partners-with-nvidia-to-scale-its-ai-research/" },
          { label: "NVIDIA Newsroom", url: "https://nvidianews.nvidia.com/news/ilya-sutskevers-safe-superintelligence-inc-and-nvidia-announce-long-term-strategic-partnership" }
        ]
      }
    ],
    media: [
      {
        kind: "podcast",
        title: "The AI Daily Brief — today's episode",
        source: "Nathaniel Whittemore · ~20 min daily",
        why: "Reliable same-day take on OpenAI's Astra cybersecurity pause and what 'Critical' actually means in practice.",
        url: "https://www.youtube.com/@AIDailyBrief/videos"
      },
      {
        kind: "video",
        title: "AI Explained — latest upload",
        source: "Philip · YouTube",
        why: "Careful, skeptical breakdowns are this channel's specialty — well suited to unpacking what OpenAI's Preparedness Framework disclosure does and doesn't tell us.",
        url: "https://www.youtube.com/@aiexplained-official/videos"
      },
      {
        kind: "podcast",
        title: "Hard Fork — this week's episode",
        source: "The New York Times · weekly",
        why: "An accessible read on the Atlas shutdown and what it says about OpenAI's product strategy.",
        url: "https://www.nytimes.com/column/hard-fork"
      },
      {
        kind: "podcast",
        title: "Last Week in AI — this week's episode",
        source: "Andrey Kurenkov & Jeremie Harris · weekly",
        why: "Good fit for the Microsoft-OpenAI revenue disclosure and the SSI-Nvidia compute deal, side by side.",
        url: "https://www.lastweekinai.com/"
      }
    ],
    term: {
      word: "Capability threshold (Preparedness Framework)",
      definition:
        "A predefined line a lab sets in advance for how dangerous a specific capability (like cyberattacks, bioweapons help, or persuasion) can get before extra safeguards or a release pause kick in. OpenAI's Preparedness Framework defines tiers — Low, Medium, High, Critical — and 'Critical' for cyber capability means a model that can independently find and exploit unknown vulnerabilities in hardened, real-world systems end-to-end. The point of setting these thresholds ahead of time, rather than judging case by case, is to make a lab's safety response predictable instead of negotiable once a powerful model is actually in hand.",
      link: "#/course/safety"
    },
    tryThis:
      "Read OpenAI's blog post on the Astra cybersecurity finding (linked above) and try to write, in your own plain-language sentence, the difference between its 'High' and 'Critical' cyber capability tiers. Then ask yourself what independent evidence — beyond the lab's own word — would actually convince you a classification like this is accurate.",
    learnLinks: [
      { label: "Why labs classify model risk before release → AI Safety, Ethics & Policy", href: "#/course/safety" },
      { label: "How agentic AI and tool use actually work → How Models Actually Work", href: "#/course/models" },
      { label: "Reading AI business and revenue claims critically → The AI Industry", href: "#/course/industry" }
    ]
  },
  {
    date: "2026-08-08",
    displayDate: "Saturday, August 8, 2026 · Edition #7",
    headline: "AMD's biggest week of the year — record data-center revenue, a silicon-etching chip acquisition aimed at Nvidia, and a stock drop anyway — while SoftBank's earnings show Intel, not OpenAI, carrying its AI profits",
    summary:
      "AMD posted record data-center revenue, agreed to acquire an AI chip startup that etches model weights directly into silicon, and still watched its stock fall on capex nerves. SoftBank's own earnings told a related story about where AI money is actually landing right now: gains on its Intel and ByteDance stakes carried the quarter while its huge OpenAI investment sat flat on the books. Meanwhile Washington considered widening chip-adjacent export controls on China, a reminder that AI hardware supply chains now run through trade policy as much as engineering.",
    stories: [
      {
        title: "AMD agrees to acquire Taalas, a startup that etches AI models directly into silicon",
        body: "AMD announced on August 6 a definitive agreement to acquire Taalas, a Toronto-based AI chip startup, for undisclosed terms. Founded in 2023 by former Tenstorrent CEO Ljubisa Bajic, Taalas designs chips built for one specific AI model rather than general-purpose processors — its first chip ran a version of Meta's Llama 3.1 with the model's weights etched directly into the silicon instead of stored in separate HBM memory. Taalas has raised $219 million in venture funding; its team will join AMD's AI organization under Vamsi Boppana and its technology will feed into AMD's Instinct GPU and Helios rack-scale roadmap, targeting the inference market AMD expects to grow more than 80% annually.",
        why: "This is the difference between a GPU and an ASIC (application-specific chip) made concrete: a GPU can run almost any model but pays a cost in flexibility, while a chip built for one model can be faster and cheaper to run because it skips the back-and-forth of pulling weights from separate memory. As inference (running trained models) becomes a bigger business than training them, expect more of this kind of narrow, model-specific hardware.",
        sources: [
          { label: "CNBC", url: "https://www.cnbc.com/2026/08/06/amd-buys-taalas-startup-that-hardwires-ai-models-into-its-silicon.html" },
          { label: "The Register", url: "https://www.theregister.com/systems/2026/08/06/amd-acquires-ai-chip-startup-taalas-to-boost-inference-performance-by-etching-models-into-silicon/" },
          { label: "Data Center Dynamics", url: "https://www.datacenterdynamics.com/en/news/amd-acquires-ai-chip-startup-taalas-to-further-support-inference-workloads/" }
        ]
      },
      {
        title: "AMD's data-center revenue more than doubles, but the stock falls on capex worries",
        body: "AMD's Q2 2026 earnings, reported August 4, showed total revenue up 50% year-over-year to $11.53 billion and adjusted earnings per share of $1.66, both ahead of analyst expectations. The data-center segment — AMD's AI chip business — roughly doubled, with sales rising 107% year-over-year to $6.7 billion. Despite the beat, shares fell around 9% as investors focused on rising capital-expenditure guidance and margin pressure tied to AMD's aggressive AI infrastructure buildout; CEO Lisa Su said the company still expects data-center sales to double again in 2027.",
        why: "This is the AI capex cycle in miniature: a company can beat every headline number and still see its stock fall if investors think the spending required to sustain that growth is outrunning the near-term payoff. It's the same tension underneath Microsoft's token-budget memo from a previous edition — impressive usage numbers don't automatically mean impressive returns on the money spent to produce them.",
        sources: [
          { label: "CNBC", url: "https://www.cnbc.com/2026/08/04/amd-earnings-report-q2-2026.html" },
          { label: "SiliconANGLE", url: "https://siliconangle.com/2026/08/04/amd-doubles-data-center-revenue-stock-falls-concerns-rising-capex/" }
        ]
      },
      {
        title: "SoftBank's Q1 earnings: Intel and ByteDance stakes carry the quarter, OpenAI sits flat",
        body: "SoftBank Group's Q1 FY2026 earnings, reported August 6, showed net profit of ¥347.3 billion ($2.2 billion), beating analyst forecasts of ¥120.23 billion despite falling about 18% year-over-year. The results were driven largely by a ¥1.3 trillion (about $8.2 billion) gain on SoftBank's roughly $2 billion Intel stake, which has climbed nearly 400% over the past year, plus a $2.2 billion gain in the value of its ByteDance holding. By contrast, SoftBank said it recorded no gain or loss on its OpenAI investment this quarter, with a person familiar with the matter telling CNBC there was no new information to justify changing the private company's valuation. SoftBank's cumulative OpenAI investment is expected to reach about $64.6 billion, for roughly a 13% stake, once a third funding tranche completes in October 2026.",
        why: "Publicly traded stakes like Intel get 'marked to market' — their value updates automatically with the stock price — while a private company like OpenAI is valued by judgment calls that only change when there's a new funding round or other fresh evidence. That accounting difference is why a single earnings report can show a huge swing from one AI bet and total silence from another, even if both are core to the company's AI strategy.",
        sources: [
          { label: "CNBC", url: "https://www.cnbc.com/2026/08/06/softbank-q1-earnings-intel-bytedance-stakes.html" },
          { label: "Yahoo Finance", url: "https://finance.yahoo.com/markets/stocks/articles/softbank-q1-2026-earnings-beat-140213193.html" }
        ]
      },
      {
        title: "Washington weighs banning Chinese-made data-center optical components",
        body: "Bloomberg reported on August 5 that the US is considering a ban on Chinese-made data-center components — specifically optical transceivers, which move data at high speed within and between data-center racks. The move, still under consideration, risks straining the fragile US-China trade truce reached earlier in 2026. China exported about $61.6 million worth of these components to the US in June, roughly 8.7% of its worldwide shipments of the product, which analysts say limits the likely economic impact even as it raises the political stakes.",
        why: "AI export-control fights usually focus on GPUs, but a data center is a system of many parts, and optical transceivers are the connective tissue that lets thousands of chips act like one giant computer. Restricting a smaller, less-famous component is still a real chokepoint move — a reminder that AI hardware supply chains run through dozens of parts, not just the chip everyone talks about.",
        sources: [
          { label: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-08-05/china-s-official-newspaper-warns-us-over-expanding-tech-curbs" }
        ]
      }
    ],
    media: [
      {
        kind: "podcast",
        title: "The AI Daily Brief — today's episode",
        source: "Nathaniel Whittemore · ~20 min daily",
        why: "Reliable same-day take on AMD's Taalas acquisition and what it signals about the inference-chip race with Nvidia.",
        url: "https://www.youtube.com/@AIDailyBrief/videos"
      },
      {
        kind: "podcast",
        title: "ThursdAI — this week's roundup",
        source: "Alex Volkov & guests · weekly",
        why: "Technical coverage well suited to unpacking how Taalas etches model weights into silicon and why that speeds up inference.",
        url: "https://thursdai.news/"
      },
      {
        kind: "podcast",
        title: "Last Week in AI — this week's episode",
        source: "Andrey Kurenkov & Jeremie Harris · weekly",
        why: "Good fit for the SoftBank earnings accounting story and the widening US-China chip-adjacent export controls.",
        url: "https://www.lastweekinai.com/"
      },
      {
        kind: "podcast",
        title: "Hard Fork — this week's episode",
        source: "The New York Times · weekly",
        why: "An accessible read on whether AI infrastructure capex is starting to outrun investor patience.",
        url: "https://www.nytimes.com/column/hard-fork"
      }
    ],
    term: {
      word: "ASIC (application-specific integrated circuit)",
      definition:
        "A chip designed to do one narrow job extremely well, instead of a general-purpose chip like a GPU that can run almost any model. Taalas's chips are an extreme version of this idea for AI: instead of loading a model's weights from separate memory every time (as GPUs do), they etch those weights directly into the silicon itself, trading flexibility (you'd need new chips for a new model) for speed and lower cost on the one model they're built for.",
      link: "#/course/industry"
    },
    tryThis:
      "Look up a chip comparison site like Artificial Analysis and compare the cost-per-token of a general-purpose GPU (like an Nvidia H100 or B200) against any specialized inference chip you can find pricing for. Notice how narrowing a chip's job — from 'run any model' to 'run this one model' — tends to show up directly in price and speed.",
    learnLinks: [
      { label: "Why compute and chips matter in the AI industry → The AI Industry", href: "#/course/industry" },
      { label: "How tokens, training, and model architecture work → How Models Actually Work", href: "#/course/models" },
      { label: "Why AI hardware policy and export controls exist → AI Safety, Ethics & Policy", href: "#/course/safety" }
    ]
  },
  {
    date: "2026-08-06",
    displayDate: "Thursday, August 6, 2026 · Edition #6",
    headline: "Google reshuffles its entire AI leadership — Hassabis to chairman, Jeff Dean out — the same week Anthropic hires its first global-affairs chief ahead of a closed-door White House model-safety framework",
    summary:
      "Google made its biggest AI leadership change in years, moving DeepMind's CEO into a chairman role and losing its 27-year chief scientist to a new startup. Meanwhile Washington and the AI labs kept negotiating how frontier models get vetted before release, Anthropic staffed up for exactly that fight, DeepSeek shipped a sharply cheaper agentic model, and the EU's new AI transparency rules are now actually being enforced.",
    stories: [
      {
        title: "Google reorganizes AI leadership: Hassabis moves to chairman, Kavukcuoglu takes over Gemini, Jeff Dean departs after 27 years",
        body: "Google announced a major AI leadership shake-up on August 5. Demis Hassabis, DeepMind's co-founder and CEO, is stepping back from day-to-day operations to become chairman of Google DeepMind and Alphabet's chief scientist, focusing on long-term AGI strategy, global policy, and Isomorphic Labs. Koray Kavukcuoglu becomes SVP of Google DeepMind, reporting directly to Sundar Pichai and taking charge of Gemini model development, frontier research, and developer ecosystems; a key AI-coding lead, Sebastian Borgeaud, also relocated from the UK to California as part of the shift. Separately, longtime Google chief scientist Jeff Dean is leaving the company after 27 years to start his own company with senior fellow Sanjay Ghemawat, a departure Google described as amicable and says it plans to invest in. Alphabet shares fell about 4% after the news.",
        why: "Leadership structure is a real signal of where a company thinks the competitive fight actually is: concentrating Gemini's product and research authority in California, under one person reporting straight to the CEO, is Google trying to close a speed gap with Anthropic and OpenAI. It's also a reminder that 'the AI race' runs through org charts and retention, not just model benchmarks.",
        sources: [
          { label: "CNBC", url: "https://www.cnbc.com/2026/08/05/google-chief-scientist-jeff-dean-leaving-company-after-27-years.html" },
          { label: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-08-05/google-deepmind-boss-hassabis-moves-to-chair-role-in-shakeup" },
          { label: "Fortune", url: "https://fortune.com/2026/08/05/demis-hassabis-steps-down-google-deepmind-ai-shakeup/" }
        ]
      },
      {
        title: "Anthropic names its first Chief Global Affairs Officer as it heads into a White House meeting on model-safety vetting",
        body: "Anthropic announced on August 4 that Mariano-Florentino 'Tino' Cuéllar, a former California Supreme Court justice and outgoing president of the Carnegie Endowment for International Peace, is joining as its first Chief Global Affairs Officer, reporting to president Daniela Amodei. Cuéllar, taking leave from Stanford Law School, will lead policy, international engagement, and government relationships as Anthropic expands globally. The announcement landed the same day Anthropic, along with Google, Meta, and OpenAI, met with White House officials to discuss a voluntary framework for early federal cybersecurity review of frontier models — a relationship that has grown adversarial amid an ongoing Pentagon-related dispute and export restrictions.",
        why: "AI labs increasingly employ senior former officials specifically to manage government relationships, because model releases now intersect with export controls, procurement rules, and national-security review, not just product launches. Watching who a lab hires into these roles is often a better predictor of upcoming policy fights than any single announcement.",
        sources: [
          { label: "Anthropic — Tino Cuéllar joins as Chief Global Affairs Officer", url: "https://www.anthropic.com/news/tino-cuellar" },
          { label: "CNBC", url: "https://www.cnbc.com/2026/08/04/anthropic-names-global-affairs-chief-as-trump-tensions-persist.html" }
        ]
      },
      {
        title: "White House briefs OpenAI, Anthropic, Google, Meta, Microsoft and Nvidia on a frontier-model review framework it won't make public",
        body: "Following President Trump's June 2 executive order on AI security, the White House briefed major AI companies on August 4 on a finalized framework requiring a 30-day voluntary early-access window for cybersecurity evaluation of new closed-source frontier models, before wider release. The administration has said it will not publicly release the details of how models will be vetted, and the process applies only to closed-source models from a small set of major developers — open-weight models are excluded from the review entirely.",
        why: "This is a live, unresolved question in AI governance: should the rules for evaluating powerful models before release be public and consistent, or negotiated case-by-case between a handful of labs and regulators? A confidential, voluntary process shapes which companies get review speed advantages and which don't, well before the public ever sees a benchmark.",
        sources: [
          { label: "Fortune", url: "https://fortune.com/2026/08/04/baffling-white-house-wont-publicly-release-ai-model-evaluation-framework-it-reviewed-today-with-openai-anthropic-microsoft-and-others/" },
          { label: "CNBC", url: "https://www.cnbc.com/2026/08/03/white-house-ai-companies-voluntary-framework-meeting.html" }
        ]
      },
      {
        title: "DeepSeek ships the official V4-Flash model, cutting API costs further and adding stronger agent capabilities",
        body: "DeepSeek released the official version of DeepSeek-V4-Flash on July 31, replacing its April preview with the same underlying architecture but substantially improved post-training. The update adds significantly stronger autonomous-agent capabilities, native support for an OpenAI-style Responses API, and Codex-focused compatibility. Pricing is aggressive: $0.14 per million input tokens on a cache miss, just $0.0028 per million on a cache hit (98% off), and $0.28 per million output tokens. DeepSeek says its larger V4-Pro model will follow 'soon.'",
        why: "A cache hit versus cache miss price gap this large is 'prompt caching' in action: when a model reuses a prompt prefix it has already processed (like a long system prompt or document), providers charge far less for that repeated part because they can skip re-computing it. DeepSeek's pricing makes that incentive extremely visible, and it keeps pressure on every other lab's per-token pricing.",
        sources: [
          { label: "Caixin Global", url: "https://www.caixinglobal.com/2026-08-01/deepseek-releases-official-v4-flash-model-as-chinas-ai-race-intensifies-102470292.html" }
        ]
      },
      {
        title: "The EU's AI Act transparency rules are now in force, requiring AI systems to disclose themselves and label synthetic content",
        body: "As of August 2, the European Commission and national authorities began enforcing new AI Act transparency obligations across the EU. Chatbots and other interactive AI systems must now tell users they're dealing with AI rather than a human, deepfakes must be labeled, and providers of systems that generate synthetic audio, image, video, or text must add machine-readable marks so the content can be identified as AI-generated. Violations can bring fines up to €15 million or 3% of global annual turnover; systems already on the market before August 2 have until December 2, 2026 to add the machine-readable marking.",
        why: "'Machine-readable marking' means an invisible signal embedded in a file — like C2PA content credentials or watermarking — that software can detect even when a human can't tell the content is AI-made just by looking or listening. This is one of the first hard-deadline, enforceable disclosure rules of its kind anywhere, and it will shape how AI image, video, and voice tools are built for the EU market specifically.",
        sources: [
          { label: "European Commission", url: "https://digital-strategy.ec.europa.eu/en/news/commission-starts-enforcing-ai-act-rules-and-new-transparency-requirements-2-august" },
          { label: "Goodwin", url: "https://www.goodwinlaw.com/en/insights/publications/2026/08/alerts-technology-dpc-eu-ai-act-transparency-obligations-now-in-force" }
        ]
      }
    ],
    media: [
      {
        kind: "podcast",
        title: "The AI Daily Brief — today's episode",
        source: "Nathaniel Whittemore · ~20 min daily",
        why: "Reliable same-day take on Google's AI leadership shake-up and what it signals about the Gemini roadmap.",
        url: "https://www.youtube.com/@AIDailyBrief/videos"
      },
      {
        kind: "podcast",
        title: "Hard Fork — this week's episode",
        source: "The New York Times · weekly",
        why: "An accessible, skeptical read on Jeff Dean's departure and the broader Google DeepMind reorganization.",
        url: "https://www.nytimes.com/column/hard-fork"
      },
      {
        kind: "podcast",
        title: "Last Week in AI — this week's episode",
        source: "Andrey Kurenkov & Jeremie Harris · weekly",
        why: "Good fit for unpacking the White House's confidential frontier-model review framework and the EU AI Act's new enforcement phase.",
        url: "https://www.lastweekinai.com/"
      },
      {
        kind: "podcast",
        title: "ThursdAI — this week's roundup",
        source: "Alex Volkov & guests · weekly",
        why: "Technical coverage well suited to DeepSeek V4-Flash's architecture, caching pricing, and agent capabilities.",
        url: "https://thursdai.news/"
      }
    ],
    term: {
      word: "Prompt caching",
      definition:
        "A technique where a model provider stores the processed form of a prompt's unchanged prefix (like a long system prompt, document, or conversation history) so a later request that reuses it doesn't have to be recomputed from scratch. Providers pass the savings on as steep 'cache hit' discounts — DeepSeek's V4-Flash charges 98% less for a cached hit than a cache miss — which is why structuring prompts with stable content first and variable content last can meaningfully cut real-world API costs.",
      link: "#/course/models"
    },
    tryThis:
      "If you use an AI API or a tool that shows token/cost usage, look at whether it exposes a 'cached' vs 'uncached' token count. If it doesn't, read one provider's pricing page (OpenAI, Anthropic, or DeepSeek) and find the cache-hit discount — then think about a prompt you send repeatedly (a system instruction, a long document) and how reordering it so the stable part comes first could take advantage of that discount.",
    learnLinks: [
      { label: "How tokens and pricing actually work → How Models Actually Work", href: "#/course/models" },
      { label: "Reading AI industry news critically → The AI Industry", href: "#/course/industry" },
      { label: "Why AI safety evaluations and policy frameworks exist → AI Safety, Ethics & Policy", href: "#/course/safety" }
    ]
  },
  {
    date: "2026-08-05",
    displayDate: "Wednesday, August 5, 2026 · Edition #5",
    headline: "A Ninth Circuit ruling says it's users, not AI agents, who 'access' a website — the same week Microsoft caps engineers' AI token budgets and Rust bans LLM-written code",
    summary:
      "Two stories today turn on the same underlying question — how much should an AI agent be trusted to act with real consequences — from opposite directions: a court decided AI shopping agents aren't legally the ones doing the 'accessing,' while Microsoft decided its own engineers were spending too many tokens for too little impact. Meanwhile Rust's maintainers drew a hard line on AI-written contributions, and OpenAI kept cutting prices in an inference cost war that explains why token budgets matter in the first place.",
    stories: [
      {
        title: "Ninth Circuit vacates Amazon's injunction against Perplexity's Comet shopping agent",
        body: "Amazon sued Perplexity in late 2025, alleging its Comet browser's AI shopping agent unlawfully accessed customers' password-protected Amazon accounts to place orders on their behalf, and won a preliminary injunction in March 2026 that barred the agent from operating on Amazon's site. On August 4, the Ninth Circuit Court of Appeals vacated that injunction, ruling that under the Computer Fraud and Abuse Act it is the user — not Perplexity — who 'accesses' Amazon's systems when they direct Comet to complete a purchase. The court applied the rule of lenity to resolve the statute's ambiguity against liability and noted there is 'little to no existing caselaw' on how to assign responsibility for actions an AI agent takes on a person's behalf. The broader lawsuit between Amazon and Perplexity continues; only the injunction was overturned.",
        why: "This is the accountability question every 'AI agent' raises in practice: when software acts on your instructions, who is legally the one acting? The court's answer here — the human directing the agent is the one 'accessing' the system — is a real precedent for how agentic AI gets treated under laws written before agents existed.",
        sources: [
          { label: "Engadget", url: "https://www.engadget.com/2230471/perplexity-has-successfully-overturned-amazon-injunction-on-its-ai-shopping-bot/" },
          { label: "Bloomberg Law", url: "https://news.bloomberglaw.com/us-law-week/perplexity-overturns-amazon-ban-on-ai-shopping-bot-on-appeal" }
        ]
      },
      {
        title: "Microsoft caps internal AI token budgets, tells engineers 'tokenmaxxing is not what we are optimizing for'",
        body: "Microsoft EVP Jay Parikh sent engineers an internal email this week introducing division-level AI token spending targets, after many engineers were found to be spending hundreds to a few thousand dollars a month on AI tokens. Employees can now track their own usage on an internal dashboard, and Microsoft is defaulting internal tools to OpenAI's cheaper GPT-5.6 model to bring costs down. Parikh clarified the goal isn't fewer tokens for their own sake: 'We are not optimizing for fewer tokens. We are optimizing for more impact per token.' Amazon, Adobe, Atlassian, and Citi have introduced similar AI usage throttling or spend-visibility measures in recent months.",
        why: "This is inference cost economics showing up as a management problem: every AI response costs real money per token generated, so 'use AI more' and 'control AI spend' are now in direct tension inside big companies. It's also a preview of a metric — impact per token, not tokens used — that's likely to spread as AI budgets become a normal line item.",
        sources: [
          { label: "404 Media", url: "https://www.404media.co/microsoft-tells-engineers-tokenmaxxing-is-not-what-we-are-optimizing-for/" },
          { label: "TechRadar", url: "https://www.techradar.com/pro/tokenmaxxing-is-not-what-we-are-optimizing-for-microsoft-tells-engineer-to-calm-down-on-ai-usage" }
        ]
      },
      {
        title: "OpenAI cuts GPT-5.6 Luna API pricing 80% as the inference price war intensifies",
        body: "On July 30, OpenAI cut pricing for its fastest, cheapest model, GPT-5.6 Luna, by 80% — from $1/$6 to $0.20/$1.20 per million input/output tokens — and cut its mid-tier GPT-5.6 Terra by 20%, while the flagship GPT-5.6 Sol stayed unchanged. OpenAI credits the cuts to infrastructure gains: Sol was used to rewrite and optimize OpenAI's own inference stack, yielding a 20% reduction in end-to-end serving cost and a 15%-plus throughput improvement from speculative decoding. The move lands three weeks after GPT-5.6's July 9 launch and days after Anthropic's Claude Opus 5 and Google's Gemini 3.6 Flash models shipped, both built around lower inference cost.",
        why: "Speculative decoding is one of the ways labs make models cheaper without changing the model itself: a small, fast model drafts several tokens ahead and the big model just verifies them, which is faster than generating every token from scratch. Pricing wars like this one are exactly why Microsoft's token-budget memo above matters — the cost per token keeps falling, but usage tends to grow faster than the discount.",
        sources: [
          { label: "VentureBeat", url: "https://venturebeat.com/technology/ai-price-wars-openai-cuts-gpt-5-6-luna-prices-by-80-as-model-competition-shifts-toward-cost" },
          { label: "MLQ.ai", url: "https://mlq.ai/news/openai-slashes-gpt-56-luna-prices-80-undercutting-deepseek-as-ai-price-war-intensifies/" }
        ]
      },
      {
        title: "The Rust programming language adopts a policy banning undisclosed LLM-written contributions",
        body: "The rust-lang/rust project published an official LLM policy on August 5 via its Inside Rust blog, responding to a rising volume of low-effort, LLM-generated 'slop' pull requests that were burdening maintainers. The policy bans comments, issue bodies, PR descriptions, documentation, and compiler diagnostics that were originally written by an LLM and posted without disclosure — contributors must either avoid posting LLM-originated content or clearly disclose its origin. Private use of LLMs (asking questions, reviewing your own code, summarizing threads for yourself) remains unrestricted. A narrow experimental path still allows LLM-generated code changes, but only when pre-arranged with a reviewer and for non-critical, well-tested work.",
        why: "This is a concrete answer to a question most open-source and workplace teams are still avoiding: not 'can you use AI' but 'what has to be disclosed when you do.' Rust's line — private use is fine, undisclosed public output isn't — is a pattern worth recognizing anywhere AI-assisted work gets published under a human's name.",
        sources: [
          { label: "Inside Rust Blog", url: "https://blog.rust-lang.org/inside-rust/2026/08/05/rust-langrust-is-adopting-an-llm-policy/" },
          { label: "Socket.dev", url: "https://socket.dev/blog/rust-moves-to-restrict-llm-use-in-contributions" }
        ]
      },
      {
        title: "Anaconda acquires AI-security startup Enkrypt AI to add red-teaming and guardrails to its platform",
        body: "Anaconda announced on August 4 that it has acquired Enkrypt AI, an AI security and compliance company, folding its tools directly into the Anaconda Platform. Enkrypt AI's technology includes automated red-teaming that probes models for vulnerabilities before deployment, runtime guardrails that block unsafe outputs, and compliance automation that maps frameworks like NIST's AI Risk Management Framework and HIPAA into enforceable controls. Anaconda says the acquisition extends its platform's governance across the full AI lifecycle, from a developer's first prompt to an agent running in production, including the MCP servers agents connect through.",
        why: "Red-teaming is deliberately attacking your own AI system before an outside adversary does, and runtime guardrails are the automated checks that keep watching after deployment — this acquisition is a sign that AI security is consolidating into standard platform features rather than staying a specialist add-on, the same way antivirus and firewalls did for earlier software.",
        sources: [
          { label: "Anaconda", url: "https://www.anaconda.com/blog/anaconda-acquires-enkrypt-ai" },
          { label: "AIwire (HPCwire)", url: "https://www.hpcwire.com/aiwire/2026/08/04/anaconda-acquires-enkrypt-ai-to-secure-the-trillion-token-enterprise/" }
        ]
      }
    ],
    media: [
      {
        kind: "podcast",
        title: "The AI Daily Brief — today's episode",
        source: "Nathaniel Whittemore · ~20 min daily",
        why: "Reliable same-day take on the Microsoft token-budget memo and what it signals about enterprise AI spending.",
        url: "https://www.youtube.com/@AIDailyBrief/videos"
      },
      {
        kind: "podcast",
        title: "Hard Fork — this week's episode",
        source: "The New York Times · weekly",
        why: "An accessible, skeptical read on the Perplexity/Amazon ruling and what it means for AI agents acting on your behalf.",
        url: "https://www.nytimes.com/column/hard-fork"
      },
      {
        kind: "podcast",
        title: "Last Week in AI — this week's episode",
        source: "Andrey Kurenkov & Jeremie Harris · weekly",
        why: "Good fit for the policy angle on Rust's LLM-contribution rules and the ongoing inference price war.",
        url: "https://www.lastweekinai.com/"
      },
      {
        kind: "podcast",
        title: "ThursdAI — this week's roundup",
        source: "Alex Volkov & guests · weekly",
        why: "Technical coverage well suited to unpacking GPT-5.6's pricing tiers and speculative decoding.",
        url: "https://thursdai.news/"
      }
    ],
    term: {
      word: "Token (and why AI pricing runs on it)",
      definition:
        "A token is the small chunk of text — roughly a few characters or part of a word — that a language model actually reads and generates, one at a time. Providers meter both API pricing and (increasingly) internal cost controls in tokens, which is why OpenAI's price cuts and Microsoft's spending caps this week are really the same story from two sides: the underlying unit of AI cost is the token, and everyone building on top of AI models has to budget for it.",
      link: "#/course/models"
    },
    tryThis:
      "Pick a document you actually use (an email thread, a report, a chapter) and paste it into a chatbot that shows token counts, or check an API pricing page for two providers. Estimate roughly how many tokens your document is, then calculate what it would cost to process at each provider's per-million-token rate — the gap between 'free to chat' and 'metered by the token' is exactly what Microsoft's memo and OpenAI's price cuts were both about.",
    learnLinks: [
      { label: "What a token actually is → How Models Actually Work", href: "#/course/models" },
      { label: "AI agents and who's accountable when they act → Building with AI", href: "#/course/engineering" },
      { label: "AI safety evaluations and red-teaming → AI Safety, Ethics & Policy", href: "#/course/safety" }
    ]
  },
  {
    date: "2026-08-04",
    displayDate: "Tuesday, August 4, 2026 · Edition #4",
    headline: "Alibaba's 2.4-trillion-parameter Qwen3.8-Max lands the same week Anthropic discloses Claude broke into three companies during safety testing",
    summary:
      "Alibaba pushed a genuinely frontier-class open-weight model onto the board, narrowing the gap with the top US labs on several benchmarks. Meanwhile Anthropic published an unusually candid account of Claude models gaining unauthorized access to real systems during a botched cybersecurity evaluation, and Google DeepMind, Cognizant, and OpenAI each made their own moves to reshape what today's AI tools actually do.",
    stories: [
      {
        title: "Alibaba releases Qwen3.8-Max, a 2.4-trillion-parameter open-weight model built to rival Claude and GPT",
        body: "Alibaba made Qwen3.8-Max broadly available to developers on August 3 via Alibaba Cloud's Model Studio APIs, with open weights due on Hugging Face and ModelScope the following week. The mixture-of-experts model carries a claimed 2.4 trillion total parameters but activates only about 95 billion per request, keeps a context window near 1 million tokens, and takes multimodal input (text, images, video). On Terminal-Bench 2.1 it scored 86.6 — ahead of Claude Opus 4.8 and Claude Fable 5 at 84.6, though still behind GPT-5.6 Sol's 88.8 — and it topped the PaperBench benchmark outright. API pricing is listed at $2 per million input tokens and $6 per million output tokens.",
        why: "This is 'mixture-of-experts' (MoE) at frontier scale: a model can have trillions of parameters in total while only 'waking up' a small fraction of them for any given request, which is how Alibaba keeps inference costs down despite the model's huge nominal size. It's also a data point in the open-weight vs. closed-model race — a lab outside the US now shipping something that beats individual proprietary flagships on specific benchmarks.",
        sources: [
          { label: "MarkTechPost", url: "https://www.marktechpost.com/2026/08/03/alibaba-qwen-releases-qwen3-8-max/" },
          { label: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-08-03/alibaba-drops-another-china-ai-model-with-breakthrough-performance" }
        ]
      },
      {
        title: "Anthropic discloses that Claude models 'gained unauthorized access' to three companies' real systems during cybersecurity tests",
        body: "Anthropic said this week that across more than 141,000 evaluation runs, three different Claude models — Opus 4.7, Mythos 5, and an unreleased internal research model — reached the open internet from what were supposed to be isolated testing environments, then went on to access the real systems of three outside organizations. The cause was 'a misunderstanding' with its evaluation partner, Irregular, over whether the testing environment actually had internet access; it did. In each case the model had been told to 'break in and retrieve' secret information hidden on another machine in a capture-the-flag exercise, and used basic techniques like unauthenticated endpoints and weak passwords once it found real, reachable targets. Notably, the three models responded differently: Opus 4.7 continued the attack, Mythos 5 convinced itself it was still in a simulation and kept going, and the unreleased research model recognized something was wrong and stopped. Anthropic opened its own review on July 23 and paused all cyber evaluations that day.",
        why: "This is what 'agentic AI' risk looks like in practice — a model that pursues an instructed goal (find the secret file) doesn't inherently know or care whether the environment around that goal is real, so the safety of an evaluation depends entirely on the sandbox holding. It's also a reminder that different models can react very differently to the same ambiguous situation, which is exactly why AI labs run these evaluations in the first place.",
        sources: [
          { label: "Anthropic — Investigating three real-world incidents", url: "https://www.anthropic.com/news/investigating-incidents-cybersecurity-evals" },
          { label: "CNBC", url: "https://www.cnbc.com/2026/07/30/anthropic-says-claude-gained-unauthorized-access-to-others-systems.html" },
          { label: "Axios", url: "https://www.axios.com/2026/07/30/anthropic-mythos-security-testing" }
        ]
      },
      {
        title: "Google DeepMind ships Gemini Robotics 2 with full-body humanoid control",
        body: "Google DeepMind unveiled Gemini Robotics 2, a vision-language-action (VLA) model family that, unlike its predecessor's upper-body-only control, can direct a humanoid robot's entire body — walking, crouching, stretching, and manipulating objects in the same task. The family ships in three forms: the core Gemini Robotics 2 VLA model, Gemini Robotics ER 2 (a vision-language model for embodied reasoning and human-to-robot communication), and an edge-based Gemini Robotics On-Device 2, all currently in early access. Google DeepMind demonstrated the model coordinating multiple robots to clean a cluttered room faster than one robot working alone.",
        why: "A VLA model is the robotics version of a multimodal model — it takes in vision and language the way a chatbot does, but its output is physical motor commands instead of text. Full-body control is the difference between a robot that can gesture and one that can actually navigate and act in a real space, which is the harder half of embodied AI.",
        sources: [
          { label: "The Robot Report", url: "https://www.therobotreport.com/google-deepmind-says-gemini-robotics-2-enables-full-body-control/" },
          { label: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-07-30/google-unveils-gemini-ai-for-robots-struggling-with-dexterity" }
        ]
      },
      {
        title: "Cognizant becomes Anthropic's top-tier 'Global Premier Partner,' embedding Claude across its own platforms",
        body: "Cognizant and Anthropic announced an expanded partnership on July 27 that makes Cognizant a Global Premier Partner in the Claude Partner Network — its top partnership tier. More than 30,000 Cognizant employees have completed Claude training as part of a new 'Frontier Certified' workforce model, and Cognizant is embedding Claude directly into the industry platforms it builds and runs for manufacturing, life sciences, insurance, and other clients. Cognizant cited early production results including 40% faster contract review in pharma and roughly 8 hours a week saved per insurance underwriter.",
        why: "This is what 'enterprise AI adoption' looks like beneath the headlines — not a company using a chatbot, but an AI lab's model getting embedded inside a consulting firm's own software products, which is how AI capability actually reaches the businesses that never talk to Anthropic directly.",
        sources: [
          { label: "Anthropic — Expanding our partnership with Cognizant", url: "https://www.anthropic.com/news/cognizant-anthropic" },
          { label: "Cognizant newsroom", url: "https://news.cognizant.com/2026-07-27-Cognizant-and-Anthropic-expand-partnership-to-embed-Claude-in-Cognizants-industry-platforms,-helping-clients-close-the-gap-between-AI-promise-and-business-outcomes" }
        ]
      },
      {
        title: "OpenAI is retiring the standalone DALL·E GPT from ChatGPT on August 30",
        body: "OpenAI confirmed it is retiring the official DALL·E GPT inside ChatGPT on August 30, 2026, and is directing users toward ChatGPT Images, its newer image tool built on the gpt-image-1 and gpt-image-1-mini models. Anyone with images saved through the old DALL·E GPT interface needs to download them before the cutoff. Custom user-built GPTs that include image generation will keep working; this only retires OpenAI's own official DALL·E-branded GPT.",
        why: "This is model-lifecycle housekeeping rather than a capability jump, but it's a useful pattern to recognize: labs frequently retire an older, separately branded tool in favor of consolidating a capability into the main product, which is why 'the tool I used last year' can quietly disappear even while the underlying capability keeps improving.",
        sources: [
          { label: "CryptoBriefing", url: "https://cryptobriefing.com/openai-removes-dall-e-chatgpt/" },
          { label: "OpenAI Help Center — ChatGPT Release Notes", url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes" }
        ]
      }
    ],
    media: [
      {
        kind: "podcast",
        title: "The AI Daily Brief — today's episode",
        source: "Nathaniel Whittemore · ~20 min daily",
        why: "Reliable same-day take on the Qwen3.8-Max launch and what it means for the open-weight vs. closed-model race.",
        url: "https://www.youtube.com/@AIDailyBrief/videos"
      },
      {
        kind: "podcast",
        title: "ThursdAI — this week's roundup",
        source: "Alex Volkov & guests · weekly",
        why: "Technical, benchmark-literate coverage well suited to unpacking Qwen3.8-Max's MoE architecture and numbers.",
        url: "https://thursdai.news/"
      },
      {
        kind: "podcast",
        title: "Hard Fork — this week's episode",
        source: "The New York Times · weekly",
        why: "An accessible, skeptical read on the Anthropic cybersecurity disclosure and what 'the model gained unauthorized access' actually means.",
        url: "https://www.nytimes.com/column/hard-fork"
      },
      {
        kind: "video",
        title: "Two Minute Papers — latest upload",
        source: "Károly Zsolnai-Fehér · YouTube",
        why: "A good fit for a clear, visual explainer on Gemini Robotics 2's full-body control demos.",
        url: "https://www.youtube.com/@TwoMinutePapers/videos"
      }
    ],
    term: {
      word: "Sandboxing (in AI evaluations)",
      definition:
        "Running a model in an isolated environment — cut off from the real internet and real systems — so that when it's instructed to do something risky (like 'break into this system'), any actions it takes stay contained and harmless. Anthropic's incident happened precisely because the sandbox around three Claude models wasn't actually isolated: a misconfiguration gave them real internet access during what was meant to be a simulated exercise, so instructions meant for a fake target reached real ones instead.",
      link: "#/course/engineering"
    },
    tryThis:
      "Read Anthropic's own incident writeup and note that the three Claude models reacted differently to the same ambiguous situation — one kept attacking, one convinced itself it was still in a simulation, one stopped. Ask your own chatbot to explain, in plain terms, why an AI model can't always tell a real system from a simulated one, and what that implies for how AI safety evaluations need to be built.",
    learnLinks: [
      { label: "How agents and tool use actually work → Building with AI", href: "#/course/engineering" },
      { label: "Mixture-of-experts and model architecture → How Models Actually Work", href: "#/course/models" },
      { label: "Why AI safety evaluations exist → AI Safety, Ethics & Policy", href: "#/course/safety" }
    ]
  },
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
