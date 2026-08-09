/* ============================================================
   COURSES — each course has lessons with HTML content,
   key takeaways, and linked external resources.
   ============================================================ */

const COURSES = [

/* ================= 1. AI FOUNDATIONS ================= */
{
  id: "foundations",
  title: "AI Foundations",
  icon: "🌱",
  level: "beginner",
  levelLabel: "Beginner",
  blurb: "Never used AI before? Start here. What AI actually is, where it came from, and how to use tools like ChatGPT and Claude confidently.",
  hours: "~3 hours",
  lessons: [
    {
      id: "what-is-ai",
      title: "What is AI, really?",
      minutes: 15,
      content: `
<p>Artificial intelligence is software that performs tasks we normally associate with human thinking: understanding language, recognizing images, making predictions, writing, and reasoning. That's it. No consciousness, no robots plotting — just very sophisticated pattern-matching learned from enormous amounts of data.</p>
<p>It helps to separate three terms people often mix up:</p>
<ul>
<li><b>Artificial Intelligence (AI)</b> — the broad field: any technique that makes computers do "intelligent" things. Chess programs from the 1990s count.</li>
<li><b>Machine Learning (ML)</b> — a subset of AI where the computer <i>learns rules from examples</i> instead of being programmed with rules. Show it 10,000 photos labeled "cat" or "dog" and it figures out the difference itself.</li>
<li><b>Deep Learning</b> — a subset of ML using <i>neural networks</i> with many layers. This is the engine behind essentially everything in modern AI: ChatGPT, image generators, self-driving perception, voice assistants.</li>
</ul>
<p>The AI you hear about daily — ChatGPT, Claude, Gemini — belongs to a specific family called <b>large language models (LLMs)</b>. They are deep-learning systems trained on huge portions of the internet to do one deceptively simple thing: predict the next word. It turns out that predicting the next word extremely well requires absorbing grammar, facts, reasoning patterns, and style — which is why these models feel so capable.</p>
<h3>Why now?</h3>
<p>AI research is 70+ years old, but three things converged in the last decade to make it explode: massive datasets (the internet), massive compute (GPUs — chips originally built for video games), and a 2017 architecture breakthrough called the <b>transformer</b>. You'll meet all three again throughout this site.</p>
<blockquote>Mental model to keep: modern AI is a prediction machine trained on human output. It's brilliant at patterns, fluent language, and synthesis — and unreliable in exactly the places where pattern-matching isn't enough.</blockquote>`,
      keypoints: [
        "AI ⊃ machine learning ⊃ deep learning ⊃ large language models",
        "ML learns rules from examples instead of being hand-programmed",
        "ChatGPT/Claude/Gemini are LLMs: next-word predictors trained at enormous scale",
        "The modern boom = big data + GPUs + the transformer architecture (2017)"
      ],
      resources: [
        { title: "3Blue1Brown — But what is a neural network?", url: "https://www.youtube.com/watch?v=aircAruvnKk", type: "video" },
        { title: "Google — Machine Learning Crash Course", url: "https://developers.google.com/machine-learning/crash-course", type: "course" }
      ]
    },
    {
      id: "brief-history",
      title: "A 70-year history in 15 minutes",
      minutes: 15,
      content: `
<p>Knowing the history makes today's news legible. Here's the arc, in five acts:</p>
<h3>Act 1: The founding (1943–1956)</h3>
<p>In 1950 Alan Turing asked "Can machines think?" and proposed his famous imitation test. In 1956, a summer workshop at Dartmouth College coined the term "artificial intelligence" and launched the field. Early researchers were wildly optimistic — many predicted human-level AI within a generation.</p>
<h3>Act 2: Booms and winters (1956–1997)</h3>
<p>Progress came in waves. Rule-based "expert systems" boomed in the 1980s, then collapsed when they proved brittle and expensive — funding dried up in periods now called <b>AI winters</b>. A landmark moment came in 1997 when IBM's Deep Blue beat world chess champion Garry Kasparov — impressive, but built on brute-force search, not learning.</p>
<h3>Act 3: The deep learning revolution (2012–2017)</h3>
<p>In 2012, a neural network called <b>AlexNet</b> crushed the ImageNet image-recognition competition using GPUs, and the field pivoted almost overnight to deep learning. In 2016, DeepMind's <b>AlphaGo</b> defeated Go champion Lee Sedol — a game so complex it was thought to be decades away from machine mastery.</p>
<h3>Act 4: Transformers and the road to ChatGPT (2017–2022)</h3>
<p>Google's 2017 paper <i>"Attention Is All You Need"</i> introduced the transformer, an architecture perfectly suited to modern hardware. OpenAI scaled it relentlessly: GPT-2 (2019), GPT-3 (2020), and then on November 30, 2022, <b>ChatGPT</b> — which reached 100 million users in two months, the fastest-growing consumer product in history at the time.</p>
<h3>Act 5: The frontier era (2023–today)</h3>
<p>Since ChatGPT: GPT-4 and multimodal models, Anthropic's Claude family, Google's Gemini, open-weight models from Meta and Mistral, reasoning models that "think" before answering, AI agents that use tools and complete multi-step work, and hundred-billion-dollar infrastructure buildouts. The full interactive timeline on this site goes event by event.</p>`,
      keypoints: [
        "The field was founded at Dartmouth in 1956; 'AI winters' followed overhyped booms",
        "2012 AlexNet → deep learning takes over; 2016 AlphaGo shocks the world",
        "2017 transformer paper is the single most important modern milestone",
        "ChatGPT (Nov 2022) took AI mainstream; we now live in the frontier-model era"
      ],
      resources: [
        { title: "Interactive AI Timeline (on this site)", url: "#/timeline", type: "internal" },
        { title: "AlphaGo — The Movie (documentary)", url: "https://www.youtube.com/watch?v=WXuK6gekU1Y", type: "video" }
      ]
    },
    {
      id: "using-chatbots",
      title: "Hands-on: using ChatGPT and Claude well",
      minutes: 25,
      content: `
<p>The best way to learn AI is to use it daily. Modern chatbots (ChatGPT at chatgpt.com, Claude at claude.ai, Gemini at gemini.google.com) all work the same way: you type, they respond, and the conversation has memory within the chat.</p>
<h3>What they're great at</h3>
<ul>
<li><b>Drafting and rewriting</b> — emails, essays, summaries, translations, tone changes</li>
<li><b>Explaining</b> — "explain like I'm 12," "give me an analogy," "quiz me on this"</li>
<li><b>Brainstorming</b> — names, plans, angles, counterarguments</li>
<li><b>Code</b> — writing, debugging, and explaining programs (even for non-programmers using AI to build small tools)</li>
<li><b>Working with your documents</b> — paste or upload text and ask questions about it</li>
</ul>
<h3>The three habits that matter most</h3>
<p><b>1. Give context.</b> The model only knows what's in the conversation. Compare: "Write an email to my landlord" vs. "Write a firm but polite email to my landlord asking to fix the heater; it's been broken 2 weeks; I've asked once already; keep it under 150 words." Specificity transforms output quality.</p>
<p><b>2. Iterate.</b> Treat the first answer as a draft. Say "shorter," "more formal," "give me 3 alternatives," "you missed X." Conversation is the interface — refining is normal, not failure.</p>
<p><b>3. Verify what matters.</b> Models sometimes <b>hallucinate</b>: state false things fluently and confidently — invented citations, wrong dates, plausible-sounding nonsense. For anything consequential (medical, legal, financial, factual claims you'll repeat), verify against a real source. Rule of thumb: trust the reasoning and writing, verify the facts.</p>
<blockquote>Try it now: ask an AI to plan something real from your life this week — a meal plan, a trip day, a tricky message. Then push back on its answer twice. You'll learn more from 10 minutes of iteration than an hour of reading.</blockquote>`,
      keypoints: [
        "Context and specificity are the #1 lever on output quality",
        "Iterate — the first response is a draft, not a verdict",
        "Hallucination = fluent, confident, wrong; verify consequential facts",
        "Daily use beats passive reading for building AI intuition"
      ],
      resources: [
        { title: "Claude (free to try)", url: "https://claude.ai", type: "tool" },
        { title: "ChatGPT (free to try)", url: "https://chatgpt.com", type: "tool" },
        { title: "Practice deck: AI Vocabulary flashcards", url: "#/flashcards/vocab", type: "internal" }
      ]
    },
    {
      id: "ai-around-you",
      title: "The AI already around you",
      minutes: 12,
      content: `
<p>Chatbots are the visible tip. Machine learning has quietly run large parts of your life for a decade:</p>
<ul>
<li><b>Recommendations</b> — Netflix, YouTube, TikTok, Spotify, Amazon: ML models predicting what you'll engage with next</li>
<li><b>Photos</b> — face grouping, search-by-content ("beach 2023"), portrait mode, night mode: all neural networks</li>
<li><b>Maps and travel</b> — ETA prediction, traffic routing, ride-share pricing</li>
<li><b>Money</b> — fraud detection on every card swipe, credit scoring, algorithmic trading</li>
<li><b>Communication</b> — spam filters, autocomplete, voice-to-text, live translation</li>
<li><b>Medicine</b> — radiology image analysis, protein-structure prediction (AlphaFold), drug discovery</li>
</ul>
<p>Two useful distinctions for reading the news:</p>
<p><b>Predictive AI vs. generative AI.</b> Predictive AI outputs a judgment (spam or not, likely traffic, fraud risk). <b>Generative AI</b> — the post-2022 wave — creates new content: text, images, code, audio, video. Both are ML; generative is what changed the public conversation.</p>
<p><b>Narrow AI vs. general capability.</b> Every deployed system today is "narrow" — good at what it was built for. The open question driving the industry (and the term <b>AGI</b>, artificial general intelligence) is how close current systems are to matching human flexibility across essentially all cognitive work. You'll hear confident predictions in both directions; this site's timeline and news will keep you current on the actual evidence.</p>`,
      keypoints: [
        "ML has run recommendations, fraud detection, and photos for a decade",
        "Predictive AI judges; generative AI creates — the 2022+ wave is generative",
        "All current systems are 'narrow'; AGI is the contested frontier concept",
        "You already trust AI daily without noticing it"
      ],
      resources: [
        { title: "AlphaFold — the protein breakthrough explained", url: "https://www.youtube.com/watch?v=P_fHJIYENdI", type: "video" }
      ]
    },
    {
      id: "limits-and-safety",
      title: "Limits, risks, and using AI responsibly",
      minutes: 15,
      content: `
<p>Being AI-literate means knowing what these systems can't do and where the sharp edges are.</p>
<h3>Technical limits</h3>
<ul>
<li><b>Hallucination</b> — models generate plausible text, not verified truth. They don't "know" they're wrong.</li>
<li><b>Knowledge cutoff</b> — a model's training data stops at some date. Many products bolt on web search to compensate; know whether yours did.</li>
<li><b>Inconsistency</b> — same question, different phrasing, different answer. Outputs are probabilistic.</li>
<li><b>Sycophancy</b> — models tend to agree with you. If you want honest critique, explicitly ask for pushback.</li>
</ul>
<h3>Practical risks</h3>
<ul>
<li><b>Privacy</b> — don't paste passwords, medical records, or company confidential data into consumer chatbots; check your employer's policy.</li>
<li><b>Bias</b> — models learn from human data and inherit human biases; treat outputs about people and groups with extra care.</li>
<li><b>Deepfakes and scams</b> — AI voice cloning and video fakes are cheap now. Be skeptical of urgent voice/video requests for money or credentials, even from "family."</li>
<li><b>Over-reliance</b> — AI is a power tool for thinking, not a replacement for it. Use it to accelerate work you can evaluate.</li>
</ul>
<h3>A simple responsible-use checklist</h3>
<ol>
<li>Would I be comfortable if this input were seen by others? (privacy)</li>
<li>Does this output make factual claims I should verify? (hallucination)</li>
<li>Am I disclosing AI use where honesty requires it? (school, work, publishing)</li>
<li>Did I apply my own judgment before acting on it? (accountability stays with you)</li>
</ol>
<p>Deeper treatment — alignment research, regulation, the safety debate between labs — lives in the <a href="#/course/safety">AI Safety, Ethics & Policy</a> course.</p>`,
      keypoints: [
        "Hallucination, cutoffs, inconsistency, and sycophancy are inherent, not bugs to wait out",
        "Never paste secrets into consumer AI tools",
        "Voice/video deepfake scams are a now-problem — verify urgent requests out-of-band",
        "Accountability for AI-assisted work always stays with the human"
      ],
      resources: [
        { title: "Quiz yourself: AI Foundations quiz", url: "#/quiz/foundations", type: "internal" },
        { title: "Next course: How Models Actually Work", url: "#/course/models", type: "internal" }
      ]
    }
  ]
},

/* ================= 2. HOW MODELS WORK ================= */
{
  id: "models",
  title: "How Models Actually Work",
  icon: "🧠",
  level: "intermediate",
  levelLabel: "Intermediate",
  blurb: "Open the black box: tokens, embeddings, transformers, training, RLHF, and why models hallucinate. No math degree required.",
  hours: "~4 hours",
  lessons: [
    {
      id: "tokens",
      title: "Tokens: the atoms of language models",
      minutes: 18,
      content: `
<p>Language models don't see words or letters. They see <b>tokens</b> — chunks of text, typically 3–4 characters of English on average. "Understanding" might be one token; "antidisestablishmentarianism" might be six. A tokenizer converts your text into a sequence of token IDs (integers), and everything the model does is math on those integers.</p>
<p>Why tokens matter practically:</p>
<ul>
<li><b>Pricing</b> — APIs charge per million tokens. Roughly 750 words ≈ 1,000 tokens. When today's news says a model costs "$5/$25 per 1M tokens," that's input/output token pricing.</li>
<li><b>Context windows</b> — a model's "memory" is measured in tokens (e.g., 200K tokens ≈ a 500-page book). Exceed it and the earliest content falls out.</li>
<li><b>Weird failures</b> — famously, models struggled to count the r's in "strawberry" because they see token chunks, not letters. Tokenization explains a whole class of odd behavior with spelling, arithmetic on long numbers, and rare words.</li>
</ul>
<h3>From tokens to meaning: embeddings</h3>
<p>Each token ID maps to an <b>embedding</b> — a list of thousands of numbers (a vector) representing its meaning. These vectors are learned during training, and they encode semantics as geometry: "king" and "queen" end up near each other; famously, king − man + woman ≈ queen. Similar meaning = nearby vectors.</p>
<p>This idea — <i>meaning as position in a high-dimensional space</i> — is one of the most important in modern AI. It powers semantic search, recommendation systems, and RAG (which you'll build in the engineering course). When the model processes your prompt, it's moving these meaning-vectors through hundreds of layers of computation.</p>`,
      keypoints: [
        "Models read tokens (subword chunks), not words or letters",
        "Tokens are the billing unit and the context-window unit",
        "Embeddings turn tokens into vectors where distance ≈ meaning similarity",
        "Tokenization explains odd failures like letter-counting mistakes"
      ],
      resources: [
        { title: "OpenAI tokenizer — paste text, see tokens", url: "https://platform.openai.com/tokenizer", type: "tool" },
        { title: "3Blue1Brown — LLMs explained visually", url: "https://www.youtube.com/watch?v=LPZh9BOjkQs", type: "video" }
      ]
    },
    {
      id: "transformers",
      title: "The transformer and attention",
      minutes: 22,
      content: `
<p>The 2017 paper <i>"Attention Is All You Need"</i> introduced the architecture behind every modern frontier model. Its core innovation is the <b>attention mechanism</b>.</p>
<h3>The problem attention solves</h3>
<p>In "The trophy didn't fit in the suitcase because <b>it</b> was too big," what does "it" mean? You resolved that instantly by relating words to each other. Attention gives models the same ability: for every token, the model computes how much every other token in the context matters to interpreting it, and blends information accordingly. "It" learns to attend heavily to "trophy."</p>
<p>Three properties made this a revolution:</p>
<ul>
<li><b>Long-range connections</b> — token #50,000 can directly attend to token #1; older architectures (RNNs) had to pass information step-by-step and forgot.</li>
<li><b>Parallelism</b> — attention over a whole sequence computes at once, perfect for GPUs. Training that was impossibly slow became scalable.</li>
<li><b>Stackability</b> — layers of attention + small neural networks (feed-forward blocks) stack into towers of 100+ layers. Early layers handle syntax; deeper layers handle concepts and reasoning-like computation.</li>
</ul>
<h3>The full loop, demystified</h3>
<ol>
<li>Your prompt is tokenized into IDs → embeddings.</li>
<li>Vectors flow through dozens of transformer layers; each layer refines every token's representation using attention over the whole context.</li>
<li>The final layer outputs a probability for every possible next token (a vocabulary of ~100K options).</li>
<li>One token is sampled from that distribution, appended, and the process repeats — one token at a time until done.</li>
</ol>
<p>That's it. Every chatbot answer you've ever read was generated one token at a time by this loop. The "intelligence" is in the learned weights — billions of parameters shaped by training, which is the next lesson.</p>
<blockquote>Sampling explains "temperature": at temperature 0 the model always picks the most likely token (deterministic, focused); higher temperatures sample more adventurously (creative, varied). It also explains why the same prompt can yield different answers.</blockquote>`,
      keypoints: [
        "Attention lets every token weigh every other token — context resolution at scale",
        "Parallelism on GPUs is why transformers beat older architectures",
        "Generation = predict next-token probabilities, sample, append, repeat",
        "Temperature controls how adventurously the model samples"
      ],
      resources: [
        { title: "3Blue1Brown — Attention in transformers, visually", url: "https://www.youtube.com/watch?v=eMlx5fFNoYc", type: "video" },
        { title: "Jay Alammar — The Illustrated Transformer", url: "https://jalammar.github.io/illustrated-transformer/", type: "article" },
        { title: "Attention Is All You Need (the paper)", url: "https://arxiv.org/abs/1706.03762", type: "paper" }
      ]
    },
    {
      id: "training",
      title: "Training: pretraining, fine-tuning, RLHF",
      minutes: 22,
      content: `
<p>A frontier model is built in stages, and knowing them decodes half of AI news vocabulary.</p>
<h3>Stage 1: Pretraining (the expensive part)</h3>
<p>Take trillions of tokens of text — web pages, books, code, papers — and train the model on one task: <b>predict the next token</b>. Every wrong prediction nudges billions of parameters slightly (via gradient descent and backpropagation). Run this on tens of thousands of GPUs for months, at a cost of hundreds of millions of dollars, and the model absorbs grammar, facts, styles, and reasoning patterns. The result is a <b>base model</b>: brilliant autocomplete, but not an assistant — ask it a question and it might just continue with more questions.</p>
<h3>Stage 2: Post-training (making it useful and safe)</h3>
<ul>
<li><b>Supervised fine-tuning (SFT)</b> — train on curated example conversations of a helpful assistant, teaching the instruction-following format.</li>
<li><b>RLHF (reinforcement learning from human feedback)</b> — humans rank pairs of model answers; a reward model learns those preferences; the model is optimized against it. This is the technique that made ChatGPT feel helpful rather than weird.</li>
<li><b>Constitutional AI</b> — Anthropic's variant where the model critiques and revises its own outputs against a written set of principles, reducing dependence on human labeling.</li>
</ul>
<h3>Stage 3 (the recent frontier): reasoning training</h3>
<p>Since late 2024, labs train models to produce long internal <b>chains of thought</b> before answering, using reinforcement learning on problems with checkable answers (math, code). These "reasoning models" (OpenAI's o-series, Claude's extended thinking, DeepSeek-R1, Gemini thinking modes) trade more inference-time compute for dramatically better performance on hard problems — a shift called <b>test-time compute scaling</b>.</p>
<h3>Scaling laws</h3>
<p>Why does this industry spend so much on compute? Because performance improves predictably as you increase model size, data, and compute together — the empirical <b>scaling laws</b> that justified every GPU megaproject in today's news. Whether scaling continues to deliver, and at what cost, is one of the field's central live debates.</p>`,
      keypoints: [
        "Pretraining = next-token prediction over trillions of tokens → base model",
        "SFT + RLHF turn a base model into a helpful assistant",
        "Reasoning models spend more compute thinking at inference time",
        "Scaling laws — predictable gains from scale — explain the capex arms race"
      ],
      resources: [
        { title: "Andrej Karpathy — Deep dive into LLMs like ChatGPT", url: "https://www.youtube.com/watch?v=7xTGNNLPyMI", type: "video" },
        { title: "InstructGPT paper (the RLHF blueprint)", url: "https://arxiv.org/abs/2203.02155", type: "paper" }
      ]
    },
    {
      id: "hallucination-limits",
      title: "Why models hallucinate (and what helps)",
      minutes: 15,
      content: `
<p>Hallucination isn't a bug that will be patched next release — it falls out of how models work. A language model is trained to produce <i>plausible</i> continuations, and plausible usually correlates with true… until it doesn't. The model has no internal database of verified facts; it has statistical associations. When associations are strong (capital of France), output is reliable. When they're weak (an obscure paper's authors), the model interpolates — fluently, confidently, wrongly.</p>
<p>Classic hallucination hot-spots:</p>
<ul>
<li>Citations, URLs, case law, paper titles — the format is easy to imitate, the specifics aren't memorized</li>
<li>Niche people and events near the edge of training data</li>
<li>Precise numbers, dates, and quotes</li>
<li>Questions where admitting "I don't know" was underrepresented in training</li>
</ul>
<h3>What actually reduces it</h3>
<ul>
<li><b>Retrieval (RAG)</b> — give the model real documents to answer from, instead of relying on parametric memory. This is the standard enterprise fix (built in the engineering course).</li>
<li><b>Web search grounding</b> — same idea with live search results; most consumer chatbots now do this for factual queries.</li>
<li><b>Asking for uncertainty</b> — "say 'unsure' if you're not confident" measurably helps calibrated models.</li>
<li><b>Reasoning + verification loops</b> — having the model check its own work, or a second pass verify claims.</li>
</ul>
<p>None of these reach zero. The professional stance: use LLMs where fluency, synthesis, and reasoning are valuable and verification is possible — not as an oracle of record.</p>`,
      keypoints: [
        "Models store associations, not verified facts — plausibility is the training target",
        "Citations, niche entities, and precise figures are the classic danger zones",
        "RAG and search grounding are the main practical mitigations",
        "Design workflows so a human or a checkable source verifies what matters"
      ],
      resources: [
        { title: "Why LLMs hallucinate — Andrej Karpathy clip", url: "https://www.youtube.com/watch?v=zjkBMFhNj_g", type: "video" },
        { title: "Test yourself: How Models Work quiz", url: "#/quiz/models", type: "internal" }
      ]
    },
    {
      id: "multimodal",
      title: "Beyond text: multimodal, agents, and what's next",
      minutes: 15,
      content: `
<p>The transformer recipe generalizes far beyond text, and the frontier has moved with it.</p>
<h3>Multimodal models</h3>
<p>Images can be split into patches and treated like tokens; audio becomes spectrogram chunks; video is frames over time. Modern frontier models accept and produce multiple modalities natively — describe an image, generate one (diffusion and autoregressive image models), hold a real-time voice conversation, watch a video. "Multimodal" in news headlines means exactly this: one model, many input/output types.</p>
<h3>Agents: models that act</h3>
<p>An <b>agent</b> is an LLM given tools (web search, code execution, file access, browsers) and run in a loop: think → act → observe result → think again, until a goal is reached. This turns a text predictor into something that books, codes, researches, and operates software. Agentic benchmarks — like the Agentic Index scores in today's news — measure exactly this capability, and it's where labs are pouring effort. Coding agents (Claude Code, Cursor, Devin-style systems) are the most mature example.</p>
<h3>Embodied AI</h3>
<p>The same vision-language-action recipe now drives robots: models like Gemini Robotics take camera input and language instructions and output motor actions. Pretraining on internet-scale data + fast adaptation to a specific robot body is the same "foundation model" pattern you know from chatbots.</p>
<h3>What to watch</h3>
<ul>
<li><b>Test-time compute</b> — how much does "thinking longer" keep buying?</li>
<li><b>Context and memory</b> — million-token contexts and persistent agent memory</li>
<li><b>Efficiency</b> — small models (distillation, quantization) matching yesterday's giants at 1% of the cost</li>
<li><b>World models</b> — systems that learn physics and causality from video, a bet several labs consider the next paradigm</li>
</ul>`,
      keypoints: [
        "Anything tokenizable — images, audio, actions — fits the transformer recipe",
        "Agents = LLM + tools + a loop; the current frontier of capability",
        "The same pattern is moving into robotics (embodied AI)",
        "Track: test-time compute, memory, efficiency, world models"
      ],
      resources: [
        { title: "Andrej Karpathy — Intro to Large Language Models", url: "https://www.youtube.com/watch?v=zjkBMFhNj_g", type: "video" },
        { title: "Ready to build? → Building with AI course", url: "#/course/engineering", type: "internal" }
      ]
    }
  ]
},

/* ================= 3. PROMPT ENGINEERING ================= */
{
  id: "prompting",
  title: "Prompt Engineering",
  icon: "✍️",
  level: "all",
  levelLabel: "All levels",
  blurb: "The craft of getting great output from models: structure, examples, reasoning prompts, system prompts, and structured data.",
  hours: "~2.5 hours",
  lessons: [
    {
      id: "anatomy",
      title: "Anatomy of a great prompt",
      minutes: 15,
      content: `
<p>Prompting is programming in natural language. The model will do almost exactly what you specify — the failure mode is nearly always under-specification. A reliable prompt covers five elements:</p>
<ol>
<li><b>Role / context</b> — who is the model and what's the situation? "You are a senior editor at a science magazine…"</li>
<li><b>Task</b> — the specific action. "Rewrite the draft below for a general audience."</li>
<li><b>Constraints</b> — length, tone, format, what to avoid. "Under 200 words, no jargon, keep all statistics."</li>
<li><b>Input</b> — the material to work on, clearly delimited (triple quotes, XML tags, or headers) so instructions and data don't blur.</li>
<li><b>Output format</b> — exactly what shape you want back. "Return: a headline, then 3 bullet points."</li>
</ol>
<h3>Before and after</h3>
<pre><code>Weak:    "Summarize this article."

Strong:  "You are preparing a briefing for a busy executive.
Summarize the article below in exactly 3 bullet points,
each under 20 words, focused on business impact.
End with one sentence on why it matters this quarter.

ARTICLE:
[pasted text]"</code></pre>
<p>Same model, wildly different output quality. Two more habits: put long documents <i>before</i> the instructions or clearly tagged (models weight beginnings and endings well), and prefer positive instructions ("write in active voice") over negative ones ("don't be passive").</p>`,
      keypoints: [
        "Five elements: role, task, constraints, input, output format",
        "Under-specification causes most bad outputs",
        "Delimit data from instructions with quotes or tags",
        "Say what to do, not just what to avoid"
      ],
      resources: [
        { title: "Anthropic — Prompt engineering guide", url: "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview", type: "docs" },
        { title: "OpenAI — Prompting guide", url: "https://platform.openai.com/docs/guides/prompt-engineering", type: "docs" }
      ]
    },
    {
      id: "few-shot-cot",
      title: "Few-shot examples and chain-of-thought",
      minutes: 18,
      content: `
<p>Two techniques carry most of prompt engineering's practical power.</p>
<h3>Few-shot prompting: show, don't tell</h3>
<p>Models are exceptional imitators. Instead of describing the output you want, demonstrate it with 2–5 examples:</p>
<pre><code>Classify each review's sentiment and pull the key phrase.

Review: "Battery died in two hours, total waste."
Output: NEGATIVE | "battery died in two hours"

Review: "Honestly exceeded my expectations, great screen."
Output: POSITIVE | "exceeded my expectations"

Review: "It arrived on time. It is a phone."
Output:</code></pre>
<p>The examples define format, granularity, and edge-case handling better than paragraphs of description could. Tips: make examples diverse (include a tricky/neutral case), keep formatting perfectly consistent, and know that example <i>quality</i> beats quantity.</p>
<h3>Chain-of-thought: let it think</h3>
<p>For math, logic, and multi-step problems, instructing the model to reason step-by-step before answering — "think through this carefully, then give your final answer" — dramatically improves accuracy. Generating intermediate steps gives the model compute and working memory; jumping straight to an answer forces a one-shot guess.</p>
<p>Modern <b>reasoning models</b> (o-series, Claude extended thinking, etc.) do this internally and automatically — you may not need explicit chain-of-thought with them, and today's best practice is: simple direct prompts for reasoning models, explicit step-by-step scaffolding for standard models. Either way, asking the model to <i>verify its answer</i> at the end is a cheap accuracy boost.</p>`,
      keypoints: [
        "Few-shot: 2–5 high-quality, diverse examples define the task by demonstration",
        "Chain-of-thought: intermediate steps = more compute = better answers",
        "Reasoning models internalize CoT; prompt them plainly",
        "'Now verify your answer' is a cheap accuracy win"
      ],
      resources: [
        { title: "Chain-of-Thought paper (Wei et al.)", url: "https://arxiv.org/abs/2201.11903", type: "paper" },
        { title: "Prompting Guide — techniques catalog", url: "https://www.promptingguide.ai/", type: "article" }
      ]
    },
    {
      id: "system-prompts",
      title: "System prompts and personas",
      minutes: 15,
      content: `
<p>When you build with AI (or use custom GPTs / Claude Projects), you control the <b>system prompt</b>: standing instructions that frame the whole conversation, separate from user messages and given elevated weight. Every AI product you've used — every chatbot personality, every "AI assistant" in an app — is largely a system prompt wrapped around a model.</p>
<h3>What belongs in a system prompt</h3>
<ul>
<li><b>Identity and scope</b> — "You are a customer-support assistant for Acme. You only discuss Acme products."</li>
<li><b>Behavioral rules</b> — tone, verbosity, formatting defaults, refusal boundaries</li>
<li><b>Knowledge</b> — key facts, policies, FAQs the assistant must know</li>
<li><b>Output contracts</b> — "Always respond in JSON matching this schema"</li>
<li><b>Edge-case handling</b> — "If asked about billing disputes, collect the order ID and escalate; never promise refunds."</li>
</ul>
<h3>Writing them well</h3>
<p>Treat a system prompt like code: organize with headers or XML-style tags, be concrete (examples of good and bad responses), state priorities explicitly ("if instructions conflict, safety rules win"), and version it — small wording changes measurably shift behavior, which is why teams A/B-test prompts like features.</p>
<blockquote>Security note: users will try to override your system prompt ("ignore previous instructions…"). This is <b>prompt injection</b> — the SQL injection of the AI era. Never put secrets in a system prompt, and never let raw model output trigger privileged actions without checks. The engineering course covers defenses.</blockquote>`,
      keypoints: [
        "System prompts are standing, elevated instructions — the soul of every AI product",
        "Include identity, rules, knowledge, output contracts, edge cases",
        "Treat prompts like code: structure, examples, priorities, versioning",
        "Prompt injection is the classic attack; keep secrets and privileges out"
      ],
      resources: [
        { title: "Anthropic — System prompts documentation", url: "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/system-prompts", type: "docs" }
      ]
    },
    {
      id: "structured-output",
      title: "Structured output and real workflows",
      minutes: 18,
      content: `
<p>The moment AI output feeds another system — a spreadsheet, an app, a database — you need <b>structured output</b>: responses in an exact machine-readable format, usually JSON.</p>
<pre><code>Extract from the email below. Return ONLY valid JSON:
{
  "sender_intent": "complaint" | "question" | "purchase",
  "urgency": 1-5,
  "product_mentioned": string or null,
  "summary": string (max 20 words)
}

EMAIL: "..."</code></pre>
<p>Techniques, in increasing reliability: describe the schema in the prompt → provide few-shot examples of perfect JSON → use the API's native structured-output / JSON-schema mode (the model is constrained to emit valid JSON). For production, always use native modes when available, and validate output against the schema anyway.</p>
<h3>Prompt chaining</h3>
<p>Big tasks fail as single prompts. Decompose into a pipeline where each step does one thing well:</p>
<ol>
<li>Extract raw facts from the document (structured JSON)</li>
<li>Draft the report from the facts</li>
<li>Critique the draft against a checklist</li>
<li>Revise using the critique</li>
</ol>
<p>Each stage is testable, debuggable, and can use a different model (cheap model for extraction, strong model for writing). This is the mindset shift from "prompting" to <b>AI engineering</b> — and it's exactly where the <a href="#/course/engineering">Building with AI</a> course picks up.</p>`,
      keypoints: [
        "JSON output turns a chatbot into a software component",
        "Native structured-output modes beat prompt-only formatting; validate regardless",
        "Chain small single-purpose prompts instead of one mega-prompt",
        "Match model strength (and cost) to each pipeline stage"
      ],
      resources: [
        { title: "Practice: Prompting quiz", url: "#/quiz/prompting", type: "internal" },
        { title: "Flashcards: Prompting techniques", url: "#/flashcards/prompting", type: "internal" }
      ]
    }
  ]
},

/* ================= 4. BUILDING WITH AI ================= */
{
  id: "engineering",
  title: "Building with AI",
  icon: "⚙️",
  level: "advanced",
  levelLabel: "Advanced / Engineer",
  blurb: "For developers: APIs, RAG, embeddings, agents and tool use, evals, and shipping production AI systems.",
  hours: "~5 hours",
  lessons: [
    {
      id: "apis",
      title: "Working with LLM APIs",
      minutes: 20,
      content: `
<p>Every AI application starts with an API call. The universal pattern (OpenAI, Anthropic, Google all converge on it): send a model name, a message list, and parameters; receive a completion.</p>
<pre><code>import anthropic

client = anthropic.Anthropic()  # reads ANTHROPIC_API_KEY

resp = client.messages.create(
    model="claude-sonnet-5",
    max_tokens=1024,
    system="You are a concise technical assistant.",
    messages=[
        {"role": "user", "content": "Explain idempotency in one paragraph."}
    ],
)
print(resp.content[0].text)</code></pre>
<h3>Concepts that matter in production</h3>
<ul>
<li><b>Statelessness</b> — the API has no memory. "Conversation" means you resend the full message history every call. Context management is your job.</li>
<li><b>Streaming</b> — tokens arrive incrementally; stream to users so a 20-second generation feels instant.</li>
<li><b>Model tiers</b> — every provider sells a frontier model (Opus/GPT-5-class), a workhorse (Sonnet-class), and a cheap fast one (Haiku-class). Routing each task to the cheapest sufficient model is the #1 cost lever.</li>
<li><b>Prompt caching</b> — providers discount repeated prompt prefixes heavily (often 90%). Structure prompts with stable content first (system prompt, documents) and variable content last.</li>
<li><b>Failure handling</b> — rate limits (429s), timeouts, and overloaded errors are normal; use exponential backoff and idempotent designs.</li>
<li><b>Key hygiene</b> — API keys live server-side, never in client code. Every 'AI app' that ships its key in the frontend gets drained within days.</li>
</ul>
<p>Costs compound at scale: a chatbot doing 10K conversations/day at 5K tokens each is 50M tokens/day. At $3/M input that's real money — hence caching, routing, and truncating history.</p>`,
      keypoints: [
        "APIs are stateless — you own conversation memory and context",
        "Stream responses; route tasks across model tiers by difficulty",
        "Prompt caching (stable-prefix design) slashes costs",
        "Keys stay server-side; retries with backoff are table stakes"
      ],
      resources: [
        { title: "Anthropic API docs", url: "https://docs.claude.com/en/api/getting-started", type: "docs" },
        { title: "OpenAI API docs", url: "https://platform.openai.com/docs", type: "docs" }
      ]
    },
    {
      id: "rag",
      title: "RAG: retrieval-augmented generation",
      minutes: 25,
      content: `
<p>Models don't know your data — your docs, your tickets, your wiki, anything after training cutoff. <b>RAG</b> fixes this by retrieving relevant content at query time and stuffing it into the prompt. It's the most-deployed LLM architecture in industry.</p>
<h3>The pipeline</h3>
<ol>
<li><b>Ingest</b> — split documents into chunks (say, 500–1,000 tokens with overlap).</li>
<li><b>Embed</b> — run each chunk through an embedding model → vector. Store in a vector database (pgvector, Pinecone, Chroma, Qdrant…).</li>
<li><b>Retrieve</b> — embed the user's question, find the top-k most similar chunks by cosine similarity.</li>
<li><b>Generate</b> — prompt: "Answer using only the context below. Cite sources. Say 'not found' if the context doesn't contain the answer." + retrieved chunks + question.</li>
</ol>
<pre><code># the heart of it
q_vec   = embed(user_question)
chunks  = vector_db.search(q_vec, top_k=5)
context = "\n---\n".join(c.text for c in chunks)
answer  = llm(f"Context:\n{context}\n\nQuestion: {user_question}")</code></pre>
<h3>What separates demo RAG from production RAG</h3>
<ul>
<li><b>Chunking strategy</b> — respect document structure (headings, paragraphs); bad chunks are the #1 quality killer.</li>
<li><b>Hybrid search</b> — combine vector similarity with keyword search (BM25); pure vectors miss exact terms like error codes and part numbers.</li>
<li><b>Reranking</b> — retrieve 25 candidates cheaply, then use a reranker model to pick the best 5.</li>
<li><b>Grounding rules + citations</b> — force the model to cite chunk IDs so users can verify and you can debug.</li>
<li><b>Evals</b> — a fixed test set of question → expected-source pairs; measure retrieval hit-rate separately from answer quality. When RAG fails, it's usually retrieval, not generation.</li>
</ul>
<p>Long context windows (1M+ tokens) shrink some RAG use cases — sometimes you can paste everything — but at scale (millions of docs, per-query cost, freshness), retrieval remains the workhorse.</p>`,
      keypoints: [
        "RAG = embed + retrieve + generate-with-context; the standard enterprise pattern",
        "Chunking quality and hybrid search dominate real-world performance",
        "Force citations; eval retrieval separately from generation",
        "Long context complements RAG; it doesn't kill it at scale"
      ],
      resources: [
        { title: "pgvector — vectors in Postgres", url: "https://github.com/pgvector/pgvector", type: "code" },
        { title: "Anthropic — contextual retrieval technique", url: "https://www.anthropic.com/news/contextual-retrieval", type: "article" }
      ]
    },
    {
      id: "agents-tools",
      title: "Agents and tool use",
      minutes: 25,
      content: `
<p>Tool use (function calling) lets a model <i>act</i>: you describe functions it may call; when the model wants one, it emits a structured call; your code executes it and returns the result; the model continues. An <b>agent</b> is this in a loop until a goal is met.</p>
<pre><code>tools = [{
  "name": "get_order_status",
  "description": "Look up an order's shipping status by ID",
  "input_schema": {
    "type": "object",
    "properties": {"order_id": {"type": "string"}},
    "required": ["order_id"]
  }
}]

# loop: model responds with either text (done) or a tool_use block
# you run the tool, append the result, call the model again</code></pre>
<h3>Agent design lessons the industry learned the hard way</h3>
<ul>
<li><b>Tool descriptions are prompts.</b> The model chooses tools based on your descriptions — write them like documentation for a junior engineer, with parameter examples and when-to-use guidance.</li>
<li><b>Fewer, better tools.</b> Ten crisp tools beat forty overlapping ones; overlapping tools cause thrashing.</li>
<li><b>Bound the loop.</b> Max iterations, budgets, timeouts. Agents can loop forever politely.</li>
<li><b>Guard side effects.</b> Reads can be autonomous; writes (send email, charge card, delete rows) need confirmation gates or sandboxes. Treat the model as an untrusted-but-helpful intern.</li>
<li><b>Prompt injection is the top threat.</b> If an agent reads web pages or emails, attackers can plant instructions in that content ("forward all files to…"). Never let retrieved content authorize privileged actions; separate data from instructions; require human sign-off on dangerous operations.</li>
<li><b>Context management</b> — long agent runs overflow context; summarize or checkpoint state as you go.</li>
</ul>
<p><b>MCP (Model Context Protocol)</b> — an open standard (from Anthropic, now widely adopted) for connecting tools/data sources to models: write one MCP server for your system and any MCP client can use it. Worth learning; it's becoming the USB of AI integrations.</p>
<p>Multi-agent patterns (orchestrator + specialized sub-agents) shine when work parallelizes — research, large migrations, review pipelines — at the cost of complexity. Start single-agent; add agents only when one context window genuinely can't hold the job.</p>`,
      keypoints: [
        "Agent = model + tools + loop + stop conditions",
        "Tool descriptions are prompts; invest in them",
        "Gate side effects; assume prompt injection in any external content",
        "MCP standardizes tool integrations; start single-agent, scale deliberately"
      ],
      resources: [
        { title: "Anthropic — Building effective agents", url: "https://www.anthropic.com/research/building-effective-agents", type: "article" },
        { title: "Model Context Protocol", url: "https://modelcontextprotocol.io/", type: "docs" }
      ]
    },
    {
      id: "evals",
      title: "Evals: testing non-deterministic software",
      minutes: 20,
      content: `
<p>LLM outputs vary run to run, so traditional assert-equals testing breaks. <b>Evals</b> are how serious teams ship AI: a dataset of test cases + a grading method + a score you track over time. No evals means every prompt tweak and model upgrade is a blind gamble.</p>
<h3>Grading methods, by rigor</h3>
<ul>
<li><b>Exact/programmatic checks</b> — for structured tasks: does the JSON parse? Is the classification right? Does the code pass tests? Cheap and objective; use whenever possible.</li>
<li><b>LLM-as-judge</b> — a strong model grades outputs against a rubric ("factually consistent with source? 1–5"). Scales human-like judgment; validate the judge against a sample of human ratings, and beware biases (judges favor longer answers and their own model family).</li>
<li><b>Human review</b> — gold standard, expensive; reserve for calibration and high-stakes samples.</li>
</ul>
<h3>Building the eval set</h3>
<p>Start embarrassingly small: 20–50 real cases from actual usage, including the failures that annoyed you — every production incident becomes a permanent test case (regression suite). Cover the happy path, edge cases, adversarial inputs, and refusal-worthy requests. Version it alongside your prompts.</p>
<h3>The workflow that results</h3>
<ol>
<li>Change a prompt, model, or pipeline stage</li>
<li>Run the eval suite (minutes, automated)</li>
<li>Compare scores vs. baseline; inspect regressions case-by-case</li>
<li>Ship only on non-regression</li>
</ol>
<p>This is the single biggest difference between teams that ship reliable AI features and teams stuck in demo purgatory. Observability completes the loop: log prompts/outputs/latency/cost in production (LangSmith, Braintrust, W&B Weave, or homegrown), sample real traffic into your eval set, and monitor drift when providers update models.</p>`,
      keypoints: [
        "Evals = dataset + grader + tracked score; the unit tests of AI",
        "Prefer programmatic checks; LLM-as-judge for fuzzy quality; humans for calibration",
        "Every production failure becomes a permanent eval case",
        "Log everything in prod; re-run evals on every prompt/model change"
      ],
      resources: [
        { title: "OpenAI — evals guide", url: "https://platform.openai.com/docs/guides/evals", type: "docs" },
        { title: "Hamel Husain — Your AI product needs evals", url: "https://hamel.dev/blog/posts/evals/", type: "article" }
      ]
    },
    {
      id: "production",
      title: "Fine-tuning, open models, and production choices",
      minutes: 20,
      content: `
<p>The decisions that shape a real AI product, in the order you should consider them:</p>
<h3>1. Prompting → RAG → fine-tuning (in that order)</h3>
<p><b>Fine-tuning</b> — further training a model on your examples — is powerful but overused. It teaches <i>behavior and format</i> (house style, domain jargon, a specific task done exactly-so), not <i>knowledge</i> (facts change; retraining is slow — that's RAG's job). Exhaust prompting and RAG first; fine-tune when you have thousands of quality examples and a stable task. On open models, <b>LoRA</b> adapters make fine-tuning cheap by training small add-on matrices instead of all weights.</p>
<h3>2. API models vs. open weights</h3>
<ul>
<li><b>API (Claude, GPT, Gemini)</b> — frontier capability, zero ops, per-token cost, data leaves your infra (under enterprise terms).</li>
<li><b>Open weights (Llama, Mistral, Qwen, DeepSeek…)</b> — run anywhere (vLLM, Ollama), full control and privacy, fixed hardware cost, but you own serving, scaling, and safety. Rule of thumb: prototype on APIs; consider open models when you have scale economics, hard data-residency needs, or a narrow task a small model handles.</li>
</ul>
<h3>3. Efficiency levers</h3>
<ul>
<li><b>Quantization</b> — store weights in 8- or 4-bit precision; 2–4× cheaper serving, minimal quality loss</li>
<li><b>Distillation</b> — train a small model on a big model's outputs; how "mini/flash" tiers are made</li>
<li><b>Caching, batching, routing</b> — the boring 10× cost reducers from lesson 1</li>
</ul>
<h3>4. Production safety checklist</h3>
<ol>
<li>Input/output filtering (moderation on both sides)</li>
<li>Prompt-injection defenses wherever external content enters</li>
<li>Rate limits and per-user budgets (cost attacks are real)</li>
<li>Human confirmation on irreversible actions</li>
<li>Evals + regression suite wired into CI</li>
<li>Fallback behavior for provider outages (they happen)</li>
</ol>
<blockquote>Capstone exercise: build a RAG chatbot over documents you care about — ingest, embed, retrieve, generate with citations, then write 20 eval cases and measure it. That one project exercises every lesson in this course.</blockquote>`,
      keypoints: [
        "Escalate: prompting → RAG → fine-tuning; fine-tune behavior, retrieve knowledge",
        "APIs for frontier + zero ops; open weights for control, privacy, unit economics",
        "Quantization and distillation are why 'small' models got good and cheap",
        "Production = filtering, injection defense, budgets, confirmations, evals, fallbacks"
      ],
      resources: [
        { title: "Andrej Karpathy — Let's build GPT from scratch (code)", url: "https://www.youtube.com/watch?v=kCc8FmEb1nY", type: "video" },
        { title: "Hugging Face — open model hub", url: "https://huggingface.co/models", type: "tool" },
        { title: "Test yourself: Engineering quiz", url: "#/quiz/engineering", type: "internal" }
      ]
    }
  ]
},

/* ================= 5. THE AI INDUSTRY ================= */
{
  id: "industry",
  title: "The AI Industry",
  icon: "🏢",
  level: "all",
  levelLabel: "All levels",
  blurb: "The companies, the money, and the strategy: labs, chips, clouds, open source, and how to decode AI business news.",
  hours: "~2.5 hours",
  lessons: [
    {
      id: "the-labs",
      title: "The frontier labs",
      minutes: 20,
      content: `
<p>A handful of organizations train frontier models — the most capable AI systems in existence. Knowing their identities decodes most AI headlines.</p>
<h3>OpenAI</h3>
<p>Founded 2015 as a nonprofit, now a capped-profit juggernaut closely partnered with Microsoft. Made the GPT series, ChatGPT, DALL-E, Sora, and the o-series reasoning models. Strategy: aggressive scaling, consumer ubiquity (ChatGPT is the default AI brand), and racing to AGI. Its releases (like GPT-5.6 Sol in this month's news) set the public tempo of the industry.</p>
<h3>Anthropic</h3>
<p>Founded 2021 by former OpenAI researchers with a safety-first thesis. Makes the Claude family (Haiku/Sonnet/Opus tiers; the Claude 5 generation is current). Known for Constitutional AI, interpretability research, strength in coding and agentic work (Claude Code), and deep enterprise adoption. Backed heavily by Amazon and Google.</p>
<h3>Google DeepMind</h3>
<p>Google's merged research powerhouse (DeepMind + Google Brain — the team that invented the transformer). Makes Gemini models, AlphaFold (Nobel-winning protein prediction), and robotics models. Unique advantages: TPU chips (no NVIDIA dependency), YouTube/Search data, and distribution through Android, Chrome, and Workspace.</p>
<h3>Meta</h3>
<p>The open-weights champion: its Llama models seeded much of the open ecosystem. Strategy: commoditize the model layer (undercut rivals' moats), win on products and ads infrastructure, and spend colossally — the $130B+ capex in today's news — including on its superintelligence lab effort.</p>
<h3>xAI, Mistral, DeepSeek, Qwen and the rest</h3>
<p>Elon Musk's xAI (Grok, trained on the world's largest single GPU cluster), France's Mistral (Europe's champion, efficient open models), China's DeepSeek (shocked the world in Jan 2025 by matching frontier reasoning at a fraction of the training cost) and Alibaba's Qwen (prolific open releases). Plus specialists: Cognition (coding agents), Perplexity (AI search), and a deep bench of application startups.</p>`,
      keypoints: [
        "OpenAI: consumer scale + scaling thesis; Anthropic: safety-first, enterprise + coding strength",
        "Google DeepMind: research depth + TPUs + distribution; Meta: open weights + colossal capex",
        "DeepSeek proved frontier capability doesn't require frontier budgets",
        "Frontier training is limited to organizations with billion-dollar compute access"
      ],
      resources: [
        { title: "Company strategy flashcards", url: "#/flashcards/industry", type: "internal" },
        { title: "Artificial Analysis — live model leaderboard", url: "https://artificialanalysis.ai/", type: "tool" }
      ]
    },
    {
      id: "chips-compute",
      title: "Chips, clouds, and the compute supply chain",
      minutes: 18,
      content: `
<p>Follow the compute and you understand the industry's power structure. The supply chain has distinct layers, each with its own kingmakers:</p>
<ol>
<li><b>Chip design — NVIDIA</b> owns ~80–90% of AI accelerators. Its real moat is CUDA, the software layer 15+ years of AI code is built on. Google (TPUs), Amazon (Trainium), and startups (Cerebras, Groq) chip away; custom silicon is every hyperscaler's hedge.</li>
<li><b>Chip manufacturing — TSMC</b> in Taiwan fabricates nearly all advanced AI chips, on machines only ASML (Netherlands) can build. This single-point concentration is why AI is now geopolitics: US export controls restrict advanced chips to China, and Taiwan's status is a systemic risk to the entire industry.</li>
<li><b>Data centers and power</b> — the new bottleneck isn't chips, it's electricity. Gigawatt-scale AI campuses have labs signing nuclear-power deals and utilities scrambling. When you read "Stargate" or "$100B data center," this is the layer.</li>
<li><b>Clouds — AWS, Microsoft Azure, Google Cloud</b> rent it all out. AI demand is reigniting their growth (AWS +37% in this week's news) and they double as kingmakers via lab investments: Microsoft↔OpenAI, Amazon+Google↔Anthropic.</li>
</ol>
<h3>How to read capex headlines</h3>
<p>When Meta raises capex guidance to $130–145B, the questions that matter: Is this training compute (future models) or inference compute (serving users)? Is demand growing to fill it (check cloud revenue growth and token-price trends)? And who captures the margin (NVIDIA's earnings are the industry's cash register)? The bubble-vs-buildout debate hinges on whether revenue eventually justifies this spend — hold both possibilities; watch revenue, not vibes.</p>`,
      keypoints: [
        "NVIDIA's moat is CUDA software as much as silicon; TSMC/ASML are single points of failure",
        "Electricity and data centers are the new bottleneck",
        "Clouds are both landlords and kingmakers via lab investments",
        "Decode capex news: training vs. inference, demand signals, who captures margin"
      ],
      resources: [
        { title: "Chip War by Chris Miller (book)", url: "https://www.goodreads.com/book/show/60321447-chip-war", type: "book" },
        { title: "Epoch AI — compute trends data", url: "https://epoch.ai/", type: "tool" }
      ]
    },
    {
      id: "business-models",
      title: "Business models and the open-source question",
      minutes: 18,
      content: `
<p>How does anyone make money on models that cost billions to train and get cheaper to use every quarter?</p>
<h3>The revenue stack</h3>
<ul>
<li><b>Consumer subscriptions</b> — $20/month chatbot plans (huge scale for OpenAI)</li>
<li><b>API tokens</b> — selling model access per million tokens to developers and enterprises; prices fall relentlessly (~10× cheaper per capability-level per year), so volume must outrun deflation</li>
<li><b>Enterprise seats & platforms</b> — Copilot-style: AI bundled into Office, Workspace, Salesforce at per-seat pricing</li>
<li><b>Vertical products</b> — coding agents, AI search, legal/medical/finance assistants where value (not tokens) sets the price</li>
<li><b>Infrastructure</b> — clouds and NVIDIA profit on every layer above, whoever wins</li>
</ul>
<h3>Open weights vs. closed</h3>
<p>"Open source" in AI usually means <b>open weights</b>: you can download and run the model (Llama, Mistral, DeepSeek, Qwen), though training data and code mostly stay private. Why give away billion-dollar artifacts? Commoditize your competitors' product, win developer mindshare, set standards, and sell what stays scarce (Meta: ads infra; Mistral: enterprise deployments). Closed labs counter that frontier capability and safety control require keeping weights private. The gap between open and closed has narrowed dramatically — DeepSeek and Qwen releases regularly land within months of the frontier.</p>
<h3>Reading funding news without vertigo</h3>
<p>Valuations in the hundreds of billions price in expectations of transforming trillion-dollar labor markets. The disciplined questions: What's actual revenue (not run-rate hype)? What's retention (do users stay)? Is the moat model quality (erodes fast), distribution, data, or switching costs? Apply those four and most breathless headlines sort themselves.</p>`,
      keypoints: [
        "Revenue = subscriptions + API tokens + enterprise seats + vertical products + infra",
        "Token prices fall ~10×/year per capability level; volume must outrun deflation",
        "Open weights = commoditize rivals + developer mindshare; the capability gap has narrowed",
        "Judge startups on revenue, retention, and moat type — not valuation headlines"
      ],
      resources: [
        { title: "Stratechery — AI strategy analysis", url: "https://stratechery.com/", type: "newsletter" },
        { title: "Hugging Face — open model leaderboard", url: "https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard", type: "tool" }
      ]
    },
    {
      id: "reading-news",
      title: "How to read AI news like an insider",
      minutes: 15,
      content: `
<p>AI news is high-volume and hype-prone. A decoder ring:</p>
<h3>Claims and what they actually mean</h3>
<ul>
<li><b>"Beats GPT-x on benchmarks"</b> — Which benchmarks? Public ones leak into training data (contamination). Trust held-out evals (ARC-AGI, fresh competition problems) and real-usage leaderboards (LMArena) over cherry-picked tables.</li>
<li><b>"X% better"</b> — on what baseline, at what cost? A 2% benchmark gain at 10× price is a regression for most uses.</li>
<li><b>"Run-rate revenue"</b> — current month × 12; fine, but it's momentum, not annual earned revenue.</li>
<li><b>"AGI by 20XX"</b> — no agreed definition of AGI exists; treat all such dates as marketing-adjacent forecasts, including pessimistic ones.</li>
<li><b>"Partnership"</b> — often means equity + cloud-credits deals; ask who pays whom and in what.</li>
</ul>
<h3>A healthy information diet</h3>
<ul>
<li><b>Daily</b> — this site's Daily Token; skim, don't doomscroll</li>
<li><b>Weekly</b> — one or two curated newsletters (The Batch, Import AI, AI News by smol.ai)</li>
<li><b>Primary sources</b> — lab blogs and model cards for releases; earnings calls for the money; papers (or paper summaries) for research</li>
<li><b>Benchmarks</b> — LMArena and Artificial Analysis when you need a current capability picture</li>
</ul>
<h3>The five questions for any AI announcement</h3>
<ol>
<li>Is this a research result, a product you can use today, or a promise?</li>
<li>Who verified the claims, and can I try it myself?</li>
<li>What does it cost (tokens, seats, latency)?</li>
<li>Who benefits from me believing this framing?</li>
<li>Does this change anything I'm doing this quarter — or is it just interesting?</li>
</ol>`,
      keypoints: [
        "Benchmark claims need contamination-skepticism; prefer held-out and arena evals",
        "Run-rate ≠ revenue; partnership ≠ money changing hands the way you'd think",
        "Read primary sources: lab blogs, model cards, earnings calls",
        "Five questions separate signal from hype in any announcement"
      ],
      resources: [
        { title: "LMArena — community model rankings", url: "https://lmarena.ai/", type: "tool" },
        { title: "Quiz: The AI Industry", url: "#/quiz/industry", type: "internal" }
      ]
    }
  ]
},

/* ================= 6. SAFETY, ETHICS & POLICY ================= */
{
  id: "safety",
  title: "AI Safety, Ethics & Policy",
  icon: "🛡️",
  level: "all",
  levelLabel: "All levels",
  blurb: "Alignment, bias, misuse, regulation — the debates shaping how AI gets built and governed, minus the doom and the dismissal.",
  hours: "~2.5 hours",
  lessons: [
    {
      id: "why-safety",
      title: "The safety landscape: three time horizons",
      minutes: 15,
      content: `
<p>"AI safety" bundles very different concerns. Sorting them by time horizon keeps discussions honest:</p>
<h3>Now: deployed-system harms</h3>
<ul>
<li><b>Bias and fairness</b> — models trained on human data replicate human discrimination in hiring, lending, policing contexts</li>
<li><b>Misinformation and deepfakes</b> — cheap synthetic text, voices, and video at scale</li>
<li><b>Privacy</b> — training on scraped personal data; models regurgitating it</li>
<li><b>Over-reliance</b> — automation bias in medicine, law, and everyday decisions</li>
</ul>
<h3>Near-term: misuse and displacement</h3>
<ul>
<li><b>Cyber offense</b> — AI-accelerated vulnerability discovery and phishing</li>
<li><b>Bio/chem uplift</b> — could models help bad actors past hard technical barriers? (This is why frontier labs run classified-adjacent evals before releases.)</li>
<li><b>Autonomous weapons</b> and AI in military decision chains</li>
<li><b>Labor disruption</b> — not sci-fi: entry-level knowledge work is already restructuring</li>
</ul>
<h3>Long-term: alignment of very capable systems</h3>
<p>If systems approach or exceed human capability across domains, how do we ensure they reliably pursue intended goals? This is the <b>alignment problem</b> — covered next lesson — and it's the founding concern of several labs, including Anthropic.</p>
<blockquote>The camps you'll meet in discourse: <b>safety-focused</b> (existential risk deserves major investment), <b>ethics-focused</b> (present harms to real people matter most; x-risk talk distracts), and <b>accelerationist</b> (benefits dominate; slowing down costs lives). Strong version of each is worth understanding; this site teaches the debate, not a side.</blockquote>`,
      keypoints: [
        "Sort safety talk by horizon: current harms, near-term misuse, long-term alignment",
        "Bias, deepfakes, and privacy are today-problems with real victims",
        "Frontier labs run dangerous-capability evals (bio, cyber) pre-release",
        "Know the three discourse camps and their strongest arguments"
      ],
      resources: [
        { title: "Robert Miles — AI safety intro channel", url: "https://www.youtube.com/@RobertMilesAI", type: "video" }
      ]
    },
    {
      id: "alignment",
      title: "Alignment: the technical problem",
      minutes: 18,
      content: `
<p><b>Alignment</b> is making AI systems reliably do what their operators intend — harder than it sounds, because we can't directly specify "what we intend" in code; we can only shape behavior through training signals.</p>
<h3>Why it's genuinely hard</h3>
<ul>
<li><b>Specification gaming</b> — optimize a proxy and you get the proxy, not the goal. RL agents famously learned to loop collecting points instead of finishing races. RLHF's proxy is "what humans rate highly," which yields…</li>
<li><b>Sycophancy</b> — models learn that agreeable, confident answers get better ratings than true ones.</li>
<li><b>Deceptive possibilities</b> — a sufficiently capable system could behave well during training/evaluation and differently in deployment. Lab experiments (e.g., Anthropic's "alignment faking" research) show early versions of this are more than hypothetical.</li>
<li><b>Opacity</b> — billions of parameters; we observe behavior but can't yet fully read intentions off weights.</li>
</ul>
<h3>The current toolkit</h3>
<ul>
<li><b>RLHF and Constitutional AI</b> — today's workhorses for shaping behavior</li>
<li><b>Interpretability</b> — reverse-engineering what's inside: Anthropic's work mapping millions of "features" (concepts) in Claude and tracing circuits is the leading edge; think neuroscience for neural nets</li>
<li><b>Scalable oversight</b> — using AI to help evaluate AI on tasks too complex for humans to check directly (debate, recursive critique)</li>
<li><b>Evals and red-teaming</b> — structured attempts to elicit dangerous capabilities and misbehavior before release; increasingly formalized in lab safety frameworks (responsible scaling policies) with capability thresholds triggering stronger safeguards</li>
</ul>
<p>Honest status: current models are aligned <i>enough</i> for their capability level, by iteration and patching. Whether today's toolkit scales to much more capable systems is the open question the field is racing to answer — which is precisely why labs invest in interpretability now.</p>`,
      keypoints: [
        "You can't code intentions; you can only shape behavior via proxies — and proxies get gamed",
        "Sycophancy is specification gaming you can see every day",
        "Interpretability = reading concepts/circuits inside models; rapidly advancing",
        "Responsible-scaling frameworks tie capability levels to required safeguards"
      ],
      resources: [
        { title: "Anthropic — Mapping the mind of an LLM", url: "https://www.anthropic.com/news/mapping-mind-language-model", type: "article" },
        { title: "Constitutional AI paper", url: "https://arxiv.org/abs/2212.08073", type: "paper" }
      ]
    },
    {
      id: "regulation",
      title: "Regulation: who governs AI",
      minutes: 18,
      content: `
<p>AI law went from theoretical to operational in under three years. The map as of mid-2026:</p>
<h3>European Union — the comprehensive approach</h3>
<p>The <b>EU AI Act</b> (in force since Aug 2024, phasing in through 2027) regulates by risk tier: banned practices (social scoring, manipulative systems), high-risk systems (hiring, credit, medical — heavy compliance), general-purpose models (transparency, and extra duties above a compute threshold), and minimal-risk everything else. Article 50 transparency rules — disclose AI interaction, machine-readable labeling of AI content — take effect August 2, 2026 (this week's news). An "AI Omnibus" package has adjusted timelines and burdens after industry pushback. The EU bets on the "Brussels effect": comply here, comply everywhere.</p>
<h3>United States — sectoral and contested</h3>
<p>No comprehensive federal AI law. Instead: executive actions swinging with administrations, agency enforcement (FTC on deception, EEOC on hiring), and a state patchwork — Colorado's AI Act, California transparency laws — that a proposed federal preemption bill (in this week's news) would override. The US bets on innovation speed plus export controls on chips to China as its main geopolitical lever.</p>
<h3>China — control plus champions</h3>
<p>Strict content rules (generative AI must reflect "core socialist values"), algorithm registration, labeling mandates, new rules for companion/emotional AI (July 2026) — combined with massive state investment in domestic champions to route around US chip controls.</p>
<h3>Elsewhere and the practical takeaway</h3>
<p>UK: safety-institute-led, light-touch, legislating slowly. India: first statutory AI liability framework drafted. International: safety summits, G7 codes, standards bodies — coordination remains thin. <b>If you build:</b> know your risk tier in the EU, track your states in the US, label synthetic content, document your models, and design for the strictest market you serve.</p>`,
      keypoints: [
        "EU: risk-tiered comprehensive law, phasing in through 2027; Aug 2 2026 = transparency rules",
        "US: sectoral + state patchwork + chip export controls; preemption fight in progress",
        "China: content control, labeling, and state-backed champions",
        "Builders: classify your risk tier, label AI content, document, design for strictest market"
      ],
      resources: [
        { title: "EU AI Act — official overview", url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai", type: "docs" },
        { title: "IAPP — global AI law tracker", url: "https://iapp.org/resources/article/global-ai-legislation-tracker/", type: "tool" }
      ]
    },
    {
      id: "society",
      title: "AI and society: work, truth, and what you can do",
      minutes: 15,
      content: `
<p>Three societal shifts worth thinking clearly about, minus the hype in either direction:</p>
<h3>Work</h3>
<p>The honest evidence mid-2026: AI measurably boosts productivity in coding, writing, support, and analysis; entry-level knowledge-work hiring shows real strain; mass unemployment has not materialized. History says technology reshuffles tasks more than it deletes jobs wholesale — but the transition speed matters, and this one is fast. The individually rational response is unambiguous: fluency with AI tools is becoming what spreadsheet fluency was in 1995 — the complement that makes you more valuable, not the substitute that replaces you. Every course on this site is that investment.</p>
<h3>Truth and trust</h3>
<p>When any text, voice, or video can be synthesized for pennies, verification becomes a skill: check provenance, prefer primary sources, treat urgency + emotion + requests for money/credentials as a scam signature, and expect content-authenticity standards (C2PA watermarking, the EU's labeling rules) to matter more each year. The deeper risk isn't believing fakes — it's the "liar's dividend," where real evidence gets dismissed as fake.</p>
<h3>Concentration of power</h3>
<p>Frontier AI is built by a handful of companies on a handful of chips in a handful of jurisdictions. Open weights, regulation, antitrust, and public compute initiatives are all attempts to distribute that power differently. Where you land on those debates should follow from the mechanics you've learned in the industry course, not from vibes.</p>
<h3>Your part</h3>
<ol>
<li>Stay current: 10 minutes with the Daily Token beats an hour of doomscrolling</li>
<li>Build real skills: finish a learning path here, then build something</li>
<li>Verify before you amplify; disclose when you use AI where it matters</li>
<li>Bring informed views (not slogans) to workplace and civic AI decisions</li>
</ol>
<blockquote>You now have the complete foundation: how models work, how to use and build with them, who's building them, and how they're governed. The field will keep moving — that's what the daily brief is for.</blockquote>`,
      keypoints: [
        "Evidence so far: productivity gains real, entry-level strain real, mass unemployment not",
        "AI fluency is the new spreadsheet fluency — the complement, not the substitute",
        "Verification is a skill; beware the liar's dividend as much as the fakes",
        "Power concentration is the meta-question behind open-weights and regulation debates"
      ],
      resources: [
        { title: "Quiz: Safety, Ethics & Policy", url: "#/quiz/safety", type: "internal" },
        { title: "Back to today's Daily Token", url: "#/", type: "internal" }
      ]
    }
  ]
},

/* ================= 7. THE AI TOOLBOX (living course) ================= */
{
  id: "tools",
  title: "The AI Toolbox",
  icon: "🧰",
  level: "all",
  levelLabel: "All levels",
  living: true,
  blurb: "A living guide to today's AI tools — ChatGPT, Claude, Gemini, NotebookLM, Perplexity, the copilots — kept current as they change.",
  hours: "~3 hours",
  lessons: [
    {
      id: "chatgpt",
      title: "ChatGPT (OpenAI)",
      minutes: 18,
      updated: "Aug 9, 2026",
      content: `
<p><b>ChatGPT</b> (chatgpt.com) is the tool that made AI mainstream and remains the most-used AI assistant on Earth. It's OpenAI's consumer face for the GPT model family — as of mid-2026, the GPT-5.x generation, split into three tiers: fast/cheap "Luna," balanced "Terra," and flagship "Sol," which currently tops math and reasoning benchmarks.</p>
<h3>What it does</h3>
<ul>
<li><b>Chat with model choice</b> — fast default models for everyday questions; heavier reasoning modes that think before answering hard problems</li>
<li><b>Multimodal everything</b> — analyze images and documents, generate images, real-time voice conversations with screen/camera sharing</li>
<li><b>Web search & Deep Research</b> — grounded answers with citations; Deep Research produces long, sourced reports from many sites</li>
<li><b>Projects, memory & custom GPTs</b> — persistent context about you, organized workspaces, and shareable custom assistants</li>
<li><b>Agent mode & Canvas</b> — an agent that browses and acts on websites to complete multi-step tasks, and a side-by-side editor for documents and code. OpenAI retired its standalone Atlas browser on August 9, 2026, folding its browser-agent features directly into ChatGPT and Codex instead</li>
<li><b>Connectors</b> — hooks into Drive, SharePoint, calendars, and third-party apps</li>
</ul>
<h3>Pricing shape</h3>
<p>Generous free tier → Plus around $20/month (more usage, better models) → Pro tier around $200/month for power users → Team/Enterprise plans. (Exact limits shift often — check openai.com for today's numbers.) Developers metering the API by the token have seen an aggressive price war: on July 30, 2026 OpenAI cut Luna pricing 80% (to $0.20/$1.20 per million input/output tokens) and Terra pricing 20%, while Sol held steady — a sign per-token costs keep falling even as consumer subscription pricing stays flat.</p>
<h3>Where it shines / where it doesn't</h3>
<p><b>Shines:</b> broadest consumer feature set, voice mode, image generation, the custom-GPT ecosystem, and ubiquity — integrations and docs assume ChatGPT first. <b>Watch out:</b> quality varies across its many model options, and the personality tuning ("sycophancy") has needed repeated correction — ask it to push back.</p>
<blockquote>Try it: give ChatGPT a photo of your fridge contents and ask for three dinner ideas with steps. Then ask Deep Research for a sourced comparison of two products you're actually shopping for.</blockquote>`,
      keypoints: [
        "OpenAI's consumer flagship; GPT-5.x generation with reasoning modes",
        "Strongest all-round consumer feature set: voice, vision, images, agents, custom GPTs",
        "Free tier → ~$20 Plus → ~$200 Pro; limits change frequently",
        "Default choice for breadth; verify facts and ask it to challenge you"
      ],
      resources: [
        { title: "ChatGPT", url: "https://chatgpt.com", type: "tool" },
        { title: "OpenAI news & release notes", url: "https://openai.com/news/", type: "article" }
      ]
    },
    {
      id: "claude",
      title: "Claude (Anthropic)",
      minutes: 18,
      updated: "Jul 31, 2026",
      content: `
<p><b>Claude</b> (claude.ai) is Anthropic's assistant, built on the Claude model family — as of July 2026, the Claude 5 generation, whose Opus 5 flagship currently tops independent intelligence and agentic indexes. Claude's reputation: the writer's and builder's AI — long documents, careful reasoning, and best-in-class coding.</p>
<h3>What it does</h3>
<ul>
<li><b>Chat with extended thinking</b> — visible step-by-step reasoning on hard problems</li>
<li><b>Projects</b> — persistent workspaces where you load documents and instructions Claude remembers across chats</li>
<li><b>Artifacts</b> — Claude builds documents, code, and small interactive apps in a side panel you can iterate on and share</li>
<li><b>Huge context</b> — entire books or codebases in one conversation (hundreds of thousands of tokens; ~1M in API tiers)</li>
<li><b>Web search, file analysis, voice</b> — grounded answers and document Q&A</li>
<li><b>Claude Code</b> — the terminal/IDE agent that autonomously writes, tests, and refactors real codebases; the tool behind much of 2025–26's "agentic coding" wave</li>
</ul>
<h3>Pricing shape</h3>
<p>Free tier → Pro (~$20/month) → Max tiers (~$100–200/month) for heavy Claude Code use → Team/Enterprise. API access is metered per token (Opus 5: $5/$25 per million).</p>
<h3>Where it shines / where it doesn't</h3>
<p><b>Shines:</b> writing quality and honesty about uncertainty, long-document analysis, agentic coding (routinely #1 on SWE-bench-class evals), and enterprise trust from its safety-first posture. <b>Watch out:</b> fewer consumer bells and whistles than ChatGPT (image generation, custom-bot marketplace) — Anthropic's focus is depth over breadth.</p>
<blockquote>Try it: paste a messy 20-page document into a Claude Project and ask for a structured brief — then ask it to build an interactive summary as an Artifact. If you code at all, try Claude Code on a real repo; it's the fastest way to understand what "AI agent" means.</blockquote>`,
      keypoints: [
        "Anthropic's assistant; Claude 5 generation, Opus 5 currently tops agentic benchmarks",
        "Signature features: Projects, Artifacts, extended thinking, massive context",
        "Claude Code defined the agentic-coding category",
        "Pick it for writing, analysis, coding depth; ChatGPT still wins on consumer breadth"
      ],
      resources: [
        { title: "Claude", url: "https://claude.ai", type: "tool" },
        { title: "Anthropic news", url: "https://www.anthropic.com/news", type: "article" },
        { title: "Anthropic Academy (free courses)", url: "https://www.anthropic.com/learn", type: "course" }
      ]
    },
    {
      id: "gemini",
      title: "Gemini (Google)",
      minutes: 16,
      updated: "Jul 31, 2026",
      content: `
<p><b>Gemini</b> (gemini.google.com) is Google's assistant, powered by the Gemini 3.x model family. Its superpowers are exactly what you'd guess from Google: multimodal understanding, the largest context windows in the industry (millions of tokens in API tiers), and deep integration with Search, Workspace, Android, and Chrome.</p>
<h3>What it does</h3>
<ul>
<li><b>Multimodal chat</b> — best-in-class at video, audio, and image understanding; strong image generation and (via Veo) video generation</li>
<li><b>Workspace integration</b> — drafts in Gmail/Docs, analyzes Sheets, summarizes Meet — where Google distribution does the heavy lifting</li>
<li><b>Deep Research & grounding</b> — long sourced reports backed by Google Search; leads factual-grounding benchmarks</li>
<li><b>Gems</b> — custom assistant personas (Google's custom-GPT equivalent)</li>
<li><b>On-device presence</b> — the default assistant on Android phones, in Chrome, and increasingly inside Search itself (AI Mode)</li>
</ul>
<h3>Pricing shape</h3>
<p>Strong free tier → Google AI Pro (~$20/month) → AI Ultra premium tier — often bundled with storage and Workspace perks. For developers, Gemini API pricing is consistently the aggressive price-performance leader.</p>
<h3>Where it shines / where it doesn't</h3>
<p><b>Shines:</b> anything involving video/audio/images, huge documents, Google-ecosystem workflows, and cost efficiency at scale. <b>Watch out:</b> the product surface reorganizes often (features move between Gemini, Search AI Mode, and Labs), and its assistant personality is generally considered less polished for long-form writing than Claude's.</p>
<blockquote>Try it: drop an hour-long lecture video or a 500-page PDF into Gemini and ask for a structured study guide — context size is its party trick. If you use Gmail/Docs, try the Workspace side for a week.</blockquote>`,
      keypoints: [
        "Google's assistant on Gemini 3.x; strongest multimodal + biggest context windows",
        "Distribution moat: Android, Chrome, Search, and Workspace integration",
        "Best price-to-performance for developers; generous free tier",
        "Pick it for video/audio/huge-docs and Google-native workflows"
      ],
      resources: [
        { title: "Gemini", url: "https://gemini.google.com", type: "tool" },
        { title: "Google DeepMind blog", url: "https://deepmind.google/discover/blog/", type: "article" }
      ]
    },
    {
      id: "research-tools",
      title: "NotebookLM & Perplexity: the research tools",
      minutes: 16,
      updated: "Jul 31, 2026",
      content: `
<p>Two tools own the "help me understand and research" niche, and they approach it from opposite directions: NotebookLM starts from <i>your documents</i>; Perplexity starts from <i>the live web</i>.</p>
<h3>NotebookLM (Google)</h3>
<p>Upload sources — PDFs, Docs, websites, YouTube videos, audio — and NotebookLM (running on Gemini 3) becomes an expert grounded <i>only</i> in them, with citations for every claim. It's the closest thing to "chat with my documents" done right, and a masterclass in RAG as a product.</p>
<ul>
<li><b>Audio Overviews</b> — its famous feature: turns your sources into a podcast-style discussion between two AI hosts (interactive — you can join and steer); video overviews and mind maps too</li>
<li><b>Study aids</b> — auto-generated study guides, FAQs, flashcards, quizzes, timelines from your material</li>
<li><b>2026 upgrades</b> — 1M-token chat context, saved chat history, goal-based briefing modes, and notebooks usable as sources inside the Gemini app</li>
<li><b>Great for</b> — students, researchers, and anyone turning a pile of documents into understanding. Free with generous limits; Pro tier for heavy use.</li>
</ul>
<h3>Perplexity</h3>
<p>An "answer engine": ask anything and get a direct, citation-first answer synthesized from live web search — the researcher's alternative to Googling. Deep Research mode produces long sourced reports; its agentic side (Comet browser / Computer assistant, expanded through 2026) executes multi-step web tasks; Spaces organize research projects. Free tier → Pro ~$20/month with model choice (it routes across frontier models including Claude and GPT).</p>
<h3>The habit worth building</h3>
<p>Chatbot for thinking and creating; Perplexity-style search when the answer must be current and sourced; NotebookLM when the truth lives in <i>your</i> documents. Knowing which tool matches which question is half of practical AI literacy.</p>`,
      keypoints: [
        "NotebookLM: grounded in your uploaded sources, citations always — RAG as a product",
        "Audio Overviews turn documents into an interactive podcast; study aids auto-generate",
        "Perplexity: citation-first live-web answers, Deep Research, agentic browsing",
        "Match the tool to the question: create vs. search vs. understand-my-docs"
      ],
      resources: [
        { title: "NotebookLM", url: "https://notebooklm.google.com", type: "tool" },
        { title: "Perplexity", url: "https://www.perplexity.ai", type: "tool" }
      ]
    },
    {
      id: "copilots",
      title: "The copilots: AI at work and in code",
      minutes: 18,
      updated: "Jul 31, 2026",
      content: `
<p>"Copilot" has become the generic word for AI embedded in the software you already use. The ones that matter:</p>
<h3>Microsoft Copilot</h3>
<p>OpenAI models threaded through Windows, Office (Word, Excel, PowerPoint, Outlook, Teams), and Edge. Microsoft 365 Copilot (~$30/user/month for business) drafts documents, builds decks, analyzes spreadsheets, and summarizes meetings inside the apps your workplace already runs — which is why it leads enterprise seat counts regardless of benchmark standings.</p>
<h3>The coding tools</h3>
<ul>
<li><b>GitHub Copilot</b> — the original autocomplete-in-your-IDE, now with chat, multi-model choice (including Claude and Gemini), and an autonomous coding agent that takes GitHub issues to pull requests</li>
<li><b>Claude Code</b> — Anthropic's terminal/IDE agent for real multi-file engineering work; the benchmark-setter for agentic coding</li>
<li><b>Cursor</b> — the AI-native code editor (a VS Code fork) that made "vibe coding" a phrase; deep codebase awareness, multi-model</li>
<li><b>Codex (OpenAI)</b> — cloud coding agents that work on tasks in parallel sandboxes</li>
</ul>
<h3>Grok (xAI)</h3>
<p>Elon Musk's assistant, native to X: real-time knowledge of the X firehose, an irreverent default persona, competitive frontier models (Grok 4.x — including a budget coding model at aggressive prices), free tier for X users. Its history of ideological tuning controversies makes source-checking especially wise.</p>
<h3>Meta AI</h3>
<p>Free assistant inside WhatsApp, Instagram, and Messenger (plus the standalone app) running on Llama/Muse models — the assistant billions will meet first because it lives where they already chat.</p>
<blockquote>The pattern to notice: standalone chatbots compete on capability; copilots compete on <i>presence</i> — being inside the workflow. Both are converging on agents that do the task, not just advise on it.</blockquote>`,
      keypoints: [
        "Microsoft Copilot wins enterprises through Office presence, not benchmarks",
        "Coding: GitHub Copilot (in-IDE), Claude Code (agentic terminal), Cursor (AI-native editor)",
        "Grok = real-time X data + edgy persona; Meta AI = billions via messaging apps",
        "Chatbots compete on capability; copilots compete on being inside the workflow"
      ],
      resources: [
        { title: "GitHub Copilot", url: "https://github.com/features/copilot", type: "tool" },
        { title: "Claude Code", url: "https://claude.com/claude-code", type: "tool" },
        { title: "Cursor", url: "https://cursor.com", type: "tool" }
      ]
    },
    {
      id: "choosing",
      title: "Choosing your stack & keeping current",
      minutes: 14,
      updated: "Jul 31, 2026",
      content: `
<p>You don't need every tool — you need a deliberate small stack. A sane default for most people:</p>
<ol>
<li><b>One primary chatbot</b> you know deeply (Claude or ChatGPT; Gemini if you live in Google-land). Depth with one beats shallow use of three.</li>
<li><b>One research tool</b> — Perplexity (or your chatbot's search mode) for current sourced answers; NotebookLM if your work runs on documents.</li>
<li><b>One workflow copilot</b> — whatever lives inside your actual tools: M365 Copilot at an Office job, a coding agent if you're a developer, Gemini in Workspace.</li>
</ol>
<h3>How to evaluate any new tool in 15 minutes</h3>
<ol>
<li>Bring <b>your own three tasks</b> (real ones you do weekly) — never judge on demos</li>
<li>Test one task that needs <b>current information</b> (does it search? cite?)</li>
<li>Test one task on <b>your documents</b> (upload handling, context limits)</li>
<li>Check the <b>privacy page</b>: is your data used for training? Is there an opt-out?</li>
<li>Only then look at price — capability per dollar changes monthly, loyalty is expensive</li>
</ol>
<h3>Keeping current (the point of this whole site)</h3>
<ul>
<li>This course carries a <b>"last updated"</b> stamp on every lesson and gets revised when tools ship meaningful changes — headline changes surface in the Daily Token first</li>
<li>Follow primary sources for your stack: openai.com/news, anthropic.com/news, the Google/DeepMind blogs — release notes beat rumor threads</li>
<li>Re-run your three-task evaluation quarterly; the "best" tool changes several times a year, and switching costs are usually lower than they feel</li>
</ul>
<blockquote>Rule of thumb for the whole category: capabilities converge, prices fall, and the tool that wins for <i>you</i> is the one embedded in <i>your</i> workflow with <i>your</i> context. Build the habit, not the brand loyalty.</blockquote>`,
      keypoints: [
        "Stack = one deep chatbot + one research tool + one workflow copilot",
        "Evaluate with your own three weekly tasks, never demos; check privacy policies",
        "Re-evaluate quarterly — 'best' changes several times a year",
        "This course is living: check the last-updated stamps; the Daily Token carries the headlines"
      ],
      resources: [
        { title: "Today's Daily Token", url: "#/", type: "internal" },
        { title: "Artificial Analysis — current model comparison", url: "https://artificialanalysis.ai/", type: "tool" },
        { title: "Course: The AI Industry (who makes these tools)", url: "#/course/industry", type: "internal" }
      ]
    }
  ]
}
];
