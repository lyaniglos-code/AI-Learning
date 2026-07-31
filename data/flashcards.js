/* ============================================================
   FLASHCARD DECKS
   ============================================================ */

const DECKS = [
  {
    id: "vocab",
    title: "AI Vocabulary Essentials",
    icon: "🔤",
    desc: "The 20 terms you need to read any AI article. Start here.",
    cards: [
      { q: "LLM", a: "Large Language Model — an AI system trained on massive text data to predict the next token. ChatGPT, Claude, and Gemini are all LLMs." },
      { q: "Token", a: "The chunk of text a model actually reads — usually 3–4 characters of English. Models are priced and limited by tokens (~750 words ≈ 1,000 tokens)." },
      { q: "Context window", a: "The model's working memory, measured in tokens. Everything in the conversation must fit; exceed it and the earliest content is forgotten." },
      { q: "Hallucination", a: "When a model states false information fluently and confidently. Caused by models generating plausible text rather than verified facts." },
      { q: "Prompt", a: "The input you give a model. Prompt engineering is the craft of writing inputs that reliably produce the output you want." },
      { q: "Parameters (weights)", a: "The billions of learned numbers inside a model that encode everything it knows. 'A 70B model' = 70 billion parameters." },
      { q: "Training vs. inference", a: "Training = building the model from data (months, $100M+). Inference = running the finished model to answer you (milliseconds, fractions of a cent)." },
      { q: "GPU", a: "Graphics Processing Unit — the chip (mostly NVIDIA's) that powers AI. Designed for parallel math, which is exactly what neural networks need." },
      { q: "Multimodal", a: "A model that handles more than text — images, audio, video — as input, output, or both." },
      { q: "Fine-tuning", a: "Further training an existing model on your own examples to specialize its behavior or style." },
      { q: "RAG", a: "Retrieval-Augmented Generation — fetching relevant documents at question time and giving them to the model, so it answers from your data instead of memory." },
      { q: "Agent", a: "An AI model given tools (search, code, files) and run in a loop — think, act, observe, repeat — until it completes a task." },
      { q: "AGI", a: "Artificial General Intelligence — a hypothetical AI matching human flexibility across essentially all cognitive work. No agreed definition or arrival date." },
      { q: "Open weights", a: "A model whose parameters are downloadable and runnable by anyone (Llama, Mistral, DeepSeek). 'Open source AI' usually means this." },
      { q: "Alignment", a: "The problem of making AI systems reliably do what their operators intend — the core concern of AI safety research." },
      { q: "RLHF", a: "Reinforcement Learning from Human Feedback — training a model on human preference rankings. The technique that turned raw GPT into helpful ChatGPT." },
      { q: "Transformer", a: "The 2017 neural-network architecture behind all modern frontier models. Its attention mechanism lets every token relate to every other token." },
      { q: "Reasoning model", a: "A model trained to generate long internal chains of thought before answering (o-series, Claude extended thinking). Trades more compute per answer for better accuracy on hard problems." },
      { q: "Benchmark", a: "A standardized test for comparing models (MMLU, ARC-AGI, LiveBench). Useful but gameable — public benchmarks can leak into training data." },
      { q: "Temperature", a: "A setting controlling randomness in generation: 0 = always pick the most likely next token (focused), higher = more varied and creative." }
    ]
  },
  {
    id: "models",
    title: "How Models Work",
    icon: "🧠",
    desc: "Architecture, training, and inference — the technical core.",
    cards: [
      { q: "What single task is a language model pretrained on?", a: "Predicting the next token. Everything else — grammar, facts, reasoning patterns — is absorbed as a side effect of doing this over trillions of tokens." },
      { q: "What does the attention mechanism do?", a: "For every token, it computes how much every other token in the context matters and blends their information — letting the model resolve references and relationships at any distance." },
      { q: "What is an embedding?", a: "A vector (list of numbers) representing meaning. Similar meanings sit near each other in the vector space — the foundation of semantic search and RAG." },
      { q: "Base model vs. assistant model?", a: "A base model is raw autocomplete after pretraining. Post-training (SFT + RLHF) turns it into an instruction-following assistant." },
      { q: "Why do models hallucinate?", a: "They store statistical associations, not verified facts, and are trained to produce plausible text. Weak associations get filled in with fluent guesses." },
      { q: "What are scaling laws?", a: "Empirical findings that model performance improves predictably as parameters, data, and compute grow together — the justification for billion-dollar training runs." },
      { q: "What is test-time compute?", a: "Improving answers by letting the model think longer at inference (long chains of thought) rather than only making the model bigger — the reasoning-model paradigm." },
      { q: "What is quantization?", a: "Storing model weights at lower precision (8-bit, 4-bit) to cut memory and cost 2–4× with minimal quality loss." },
      { q: "What is distillation?", a: "Training a small, cheap model to imitate a large one's outputs — how 'mini' and 'flash' model tiers are made." },
      { q: "Why was the transformer such a leap over RNNs?", a: "It processes whole sequences in parallel (perfect for GPUs) and connects distant tokens directly, instead of passing information step-by-step and forgetting." },
      { q: "What is a chain of thought?", a: "Intermediate reasoning steps a model generates before its final answer. More steps = more computation = better accuracy on hard problems." },
      { q: "What limits a conversation's length?", a: "The context window — the maximum tokens (prompt + response + history) the model can attend to at once." }
    ]
  },
  {
    id: "prompting",
    title: "Prompting Techniques",
    icon: "✍️",
    desc: "The practical craft of getting great output.",
    cards: [
      { q: "The five elements of a strong prompt", a: "Role/context, task, constraints, clearly-delimited input, and explicit output format." },
      { q: "Few-shot prompting", a: "Including 2–5 worked examples in the prompt so the model imitates the demonstrated format and judgment. Show, don't tell." },
      { q: "Zero-shot prompting", a: "Asking directly with no examples. Works well for common tasks; add examples when format or edge-case handling matters." },
      { q: "Chain-of-thought prompting", a: "Instructing the model to reason step-by-step before answering. Dramatically improves math and logic accuracy on standard models." },
      { q: "System prompt", a: "Standing instructions that frame the whole conversation with elevated weight — identity, rules, knowledge, output contracts. The core of every AI product." },
      { q: "Prompt injection", a: "An attack where malicious instructions hidden in content (a web page, email) hijack the model. Never let external content authorize privileged actions." },
      { q: "Why delimit input data?", a: "Tags or triple-quotes separate instructions from data, preventing the model from confusing content with commands — clarity and injection defense." },
      { q: "Prompt chaining", a: "Splitting a big task into a pipeline of small single-purpose prompts (extract → draft → critique → revise). Each stage is testable and can use a different model." },
      { q: "Best prompting for reasoning models?", a: "Simple and direct — they generate their own internal chain of thought. Save explicit step-by-step scaffolding for standard models." },
      { q: "Cheap accuracy boost at the end of a prompt?", a: "Ask the model to verify or double-check its answer before finalizing." },
      { q: "Positive vs. negative instructions", a: "Say what you want ('write in active voice') rather than what to avoid ('don't use passive'). Models follow positive direction more reliably." },
      { q: "Structured output", a: "Making the model return exact machine-readable formats (JSON). Use native JSON-schema modes in APIs and validate the result anyway." }
    ]
  },
  {
    id: "industry",
    title: "Companies & Industry",
    icon: "🏢",
    desc: "Who's who and how the money flows.",
    cards: [
      { q: "OpenAI — identity in one line", a: "Maker of ChatGPT and the GPT/o-series; consumer-scale leader, Microsoft-partnered, aggressive scaling toward AGI." },
      { q: "Anthropic — identity in one line", a: "Safety-first lab founded by ex-OpenAI researchers; makes Claude (Haiku/Sonnet/Opus), strong in coding, agents, and enterprise; backed by Amazon and Google." },
      { q: "Google DeepMind — identity in one line", a: "Google's research powerhouse (invented the transformer); makes Gemini and AlphaFold; unique edge: TPU chips + Search/YouTube data + distribution." },
      { q: "Meta's AI strategy", a: "Open-weight Llama models to commoditize rivals' model layer, plus colossal capex ($130B+ in 2026) — monetizing through products and ads, not model access." },
      { q: "Why does NVIDIA dominate AI chips?", a: "Best hardware plus the CUDA software moat — 15+ years of AI code written for its platform. ~80–90% of AI accelerator share." },
      { q: "Why is TSMC critical?", a: "It fabricates nearly all advanced AI chips (in Taiwan, on ASML machines) — a single point of failure that makes AI a geopolitical issue." },
      { q: "What did DeepSeek prove in Jan 2025?", a: "That near-frontier reasoning capability could be trained at a fraction of assumed cost — shaking confidence in compute-spending moats." },
      { q: "The main AI revenue streams", a: "Consumer subscriptions, per-token API sales, enterprise seats (Copilots), vertical products, and infrastructure (clouds + chips)." },
      { q: "What is 'capex' in AI news?", a: "Capital expenditure — spending on data centers and GPUs. The clearest measure of how hard a company is betting on AI." },
      { q: "What does 'open weights' strategy buy a company?", a: "Commoditizes competitors' product, wins developer mindshare, sets standards — while the company sells what stays scarce (infra, deployments, ads)." },
      { q: "Run-rate revenue", a: "Current month's revenue × 12. A momentum signal, not earned annual revenue — treat headlines accordingly." },
      { q: "The cloud–lab alliances", a: "Microsoft ↔ OpenAI; Amazon + Google ↔ Anthropic. Clouds invest billions, largely returned as compute spending on their own platforms." }
    ]
  },
  {
    id: "history",
    title: "AI History Milestones",
    icon: "📜",
    desc: "The events that built the field, 1950 → today.",
    cards: [
      { q: "1950 — Alan Turing", a: "Published 'Computing Machinery and Intelligence,' proposing the Turing Test: can a machine's conversation pass as human?" },
      { q: "1956 — Dartmouth Workshop", a: "The summer conference that coined 'artificial intelligence' and founded the field." },
      { q: "AI winters", a: "Periods (mid-70s, late-80s) when AI failed to meet hype and funding collapsed — a recurring cautionary pattern." },
      { q: "1997 — Deep Blue", a: "IBM's chess machine beat world champion Garry Kasparov — brute-force search, not learning, but a landmark for machine capability." },
      { q: "2012 — AlexNet", a: "A GPU-trained deep neural network crushed the ImageNet vision contest, igniting the deep-learning revolution." },
      { q: "2016 — AlphaGo", a: "DeepMind's system beat Go champion Lee Sedol using deep RL — famous for the creative 'Move 37' no human would play." },
      { q: "2017 — 'Attention Is All You Need'", a: "Google researchers introduced the transformer, the architecture behind every modern frontier model." },
      { q: "2020 — GPT-3", a: "175B parameters showed that scale alone produces surprising general abilities (few-shot learning from prompts)." },
      { q: "2020 — AlphaFold 2", a: "DeepMind essentially solved protein-structure prediction — AI's biggest scientific contribution to date (2024 Nobel Prize in Chemistry)." },
      { q: "Nov 30, 2022 — ChatGPT", a: "OpenAI's chat interface on GPT-3.5 hit 100M users in two months and took AI mainstream overnight." },
      { q: "2023 — GPT-4 and the frontier race", a: "Multimodal frontier models arrived; Claude, Gemini, and Llama followed within months, starting today's rapid-release era." },
      { q: "2024–25 — Reasoning models", a: "OpenAI's o1/o3, DeepSeek-R1, and Claude's extended thinking made 'thinking before answering' the new frontier paradigm (test-time compute)." }
    ]
  }
];
