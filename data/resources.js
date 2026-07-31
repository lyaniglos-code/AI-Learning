/* ============================================================
   CURATED RESOURCE LIBRARY
   ============================================================ */

const RESOURCES = [
  {
    category: "Start Here: Best Videos",
    icon: "🎬",
    items: [
      { title: "3Blue1Brown — Neural Networks series", desc: "The most beautiful visual explanation of neural nets, gradient descent, and transformers ever made. Watch all of it.", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi", type: "video", level: "beginner" },
      { title: "Andrej Karpathy — Intro to Large Language Models", desc: "The legendary 1-hour talk: what LLMs are, how they're trained, where they're going. From an OpenAI founding member.", url: "https://www.youtube.com/watch?v=zjkBMFhNj_g", type: "video", level: "beginner" },
      { title: "Andrej Karpathy — Deep Dive into LLMs like ChatGPT", desc: "The 3.5-hour sequel: tokenization through RLHF and reasoning models, for a general audience.", url: "https://www.youtube.com/watch?v=7xTGNNLPyMI", type: "video", level: "intermediate" },
      { title: "3Blue1Brown — But what is a GPT?", desc: "Transformers and attention, visually. The best 30 minutes you can spend on how models work.", url: "https://www.youtube.com/watch?v=wjZofJX0v4M", type: "video", level: "intermediate" },
      { title: "Karpathy — Let's build GPT from scratch", desc: "Write a working GPT in Python, line by line, in 2 hours. The rite of passage for AI engineers.", url: "https://www.youtube.com/watch?v=kCc8FmEb1nY", type: "video", level: "advanced" },
      { title: "AlphaGo — The Movie", desc: "Award-winning documentary of the 2016 match that changed AI history. Gripping even for non-technical viewers.", url: "https://www.youtube.com/watch?v=WXuK6gekU1Y", type: "video", level: "beginner" }
    ]
  },
  {
    category: "Free Courses",
    icon: "🎓",
    items: [
      { title: "Google — Machine Learning Crash Course", desc: "Google's fast, practical ML intro with interactive exercises. No PhD required.", url: "https://developers.google.com/machine-learning/crash-course", type: "course", level: "beginner" },
      { title: "DeepLearning.AI — AI For Everyone", desc: "Andrew Ng's famous non-technical course: what AI can/can't do and how to navigate it at work.", url: "https://www.deeplearning.ai/courses/ai-for-everyone/", type: "course", level: "beginner" },
      { title: "fast.ai — Practical Deep Learning for Coders", desc: "Top-down, code-first deep learning. Build real models in lesson one, learn theory as needed.", url: "https://course.fast.ai/", type: "course", level: "intermediate" },
      { title: "Hugging Face — LLM Course", desc: "Free hands-on course on transformers, fine-tuning, and the open-model ecosystem.", url: "https://huggingface.co/learn/llm-course", type: "course", level: "intermediate" },
      { title: "Anthropic Academy", desc: "Anthropic's free courses on prompting, tool use, and building with Claude.", url: "https://www.anthropic.com/learn", type: "course", level: "all" },
      { title: "Stanford CS231n / CS224n (lectures on YouTube)", desc: "The famous university courses on vision and NLP deep learning — free to watch.", url: "https://www.youtube.com/c/stanfordonline", type: "course", level: "advanced" }
    ]
  },
  {
    category: "Papers That Matter",
    icon: "📄",
    items: [
      { title: "Attention Is All You Need (2017)", desc: "The transformer paper. The most influential AI paper of the modern era.", url: "https://arxiv.org/abs/1706.03762", type: "paper", level: "advanced" },
      { title: "Language Models are Few-Shot Learners (GPT-3, 2020)", desc: "The paper that revealed what scale alone can do.", url: "https://arxiv.org/abs/2005.14165", type: "paper", level: "advanced" },
      { title: "InstructGPT (2022)", desc: "The RLHF blueprint that made ChatGPT possible.", url: "https://arxiv.org/abs/2203.02155", type: "paper", level: "advanced" },
      { title: "Constitutional AI (2022)", desc: "Anthropic's method for training harmless assistants using AI feedback against written principles.", url: "https://arxiv.org/abs/2212.08073", type: "paper", level: "advanced" },
      { title: "Chain-of-Thought Prompting (2022)", desc: "Why 'think step by step' works — the paper behind the technique.", url: "https://arxiv.org/abs/2201.11903", type: "paper", level: "intermediate" },
      { title: "Mapping the Mind of an LLM (Anthropic, 2024)", desc: "Interpretability breakthrough: extracting millions of human-understandable features from Claude.", url: "https://www.anthropic.com/news/mapping-mind-language-model", type: "article", level: "intermediate" }
    ]
  },
  {
    category: "Podcasts",
    icon: "🎧",
    items: [
      { title: "The AI Daily Brief (Nathaniel Whittemore)", desc: "A ~20-minute episode every single day on the most important AI story — the closest audio equivalent to this site's Daily Token.", url: "https://www.youtube.com/@AIDailyBrief", type: "podcast", level: "all" },
      { title: "Hard Fork (The New York Times)", desc: "Kevin Roose and Casey Newton's weekly show — the most entertaining credible take on AI news and tech culture.", url: "https://www.nytimes.com/column/hard-fork", type: "podcast", level: "beginner" },
      { title: "Dwarkesh Podcast", desc: "Long, deeply-prepared interviews with the researchers and lab leaders actually building frontier AI. The best questions in the game.", url: "https://www.dwarkesh.com/", type: "podcast", level: "intermediate" },
      { title: "Lex Fridman Podcast", desc: "Multi-hour conversations with AI's biggest figures — Altman, Amodei, Hassabis, Karpathy, LeCun have all sat down.", url: "https://lexfridman.com/podcast/", type: "podcast", level: "all" },
      { title: "Latent Space", desc: "The podcast for AI engineers — practical deep dives on agents, evals, and building with LLMs, from swyx and Alessio.", url: "https://www.latent.space/podcast", type: "podcast", level: "advanced" },
      { title: "ThursdAI", desc: "A weekly live roundup of every model release and open-source drop — dense, fast, and reliably first.", url: "https://thursdai.news/", type: "podcast", level: "intermediate" },
      { title: "No Priors (Sarah Guo & Elad Gil)", desc: "Investor-side interviews with AI founders and researchers — sharp on the business layer.", url: "https://www.nopriors.com/", type: "podcast", level: "intermediate" },
      { title: "Last Week in AI", desc: "A weekly researcher-hosted news roundup that separates real results from hype.", url: "https://lastweekin.ai/", type: "podcast", level: "all" }
    ]
  },
  {
    category: "YouTube Channels to Follow",
    icon: "📺",
    items: [
      { title: "AI Explained", desc: "The most benchmark-literate coverage of new model releases on YouTube — measured, sourced, hype-free.", url: "https://www.youtube.com/@aiexplained-official", type: "channel", level: "all" },
      { title: "Two Minute Papers", desc: "Joyful short summaries of new AI research papers — 'What a time to be alive!'", url: "https://www.youtube.com/@TwoMinutePapers", type: "channel", level: "beginner" },
      { title: "Andrej Karpathy", desc: "The former OpenAI/Tesla legend's channel — from zero-to-GPT coding marathons to general-audience deep dives.", url: "https://www.youtube.com/@AndrejKarpathy", type: "channel", level: "all" },
      { title: "3Blue1Brown", desc: "Grant Sanderson's peerless visual math — the neural network and transformer series are essential.", url: "https://www.youtube.com/@3blue1brown", type: "channel", level: "all" },
      { title: "Yannic Kilcher", desc: "Detailed paper walkthroughs and ML news for people who want the technical meat.", url: "https://www.youtube.com/@YannicKilcher", type: "channel", level: "advanced" },
      { title: "Welch Labs", desc: "Beautifully-produced visual essays on the math and history behind deep learning.", url: "https://www.youtube.com/@WelchLabsVideo", type: "channel", level: "intermediate" },
      { title: "Computerphile", desc: "University of Nottingham's CS channel — reliable explainers on AI concepts and security.", url: "https://www.youtube.com/@Computerphile", type: "channel", level: "beginner" }
    ]
  },
  {
    category: "Stay Current: News & Newsletters",
    icon: "📰",
    items: [
      { title: "The Batch (DeepLearning.AI)", desc: "Andrew Ng's weekly — the gold standard for balanced AI news.", url: "https://www.deeplearning.ai/the-batch/", type: "newsletter", level: "all" },
      { title: "Import AI (Jack Clark)", desc: "Weekly deep analysis from an Anthropic co-founder — research and policy.", url: "https://importai.substack.com/", type: "newsletter", level: "intermediate" },
      { title: "AI News (smol.ai)", desc: "Exhaustive daily roundup of models, papers, and community discourse.", url: "https://news.smol.ai/", type: "newsletter", level: "intermediate" },
      { title: "Stratechery (Ben Thompson)", desc: "The sharpest strategic analysis of AI business moves.", url: "https://stratechery.com/", type: "newsletter", level: "all" },
      { title: "Lab blogs: OpenAI / Anthropic / DeepMind", desc: "Primary sources — read announcements where they happen: openai.com/news, anthropic.com/news, deepmind.google.", url: "https://www.anthropic.com/news", type: "article", level: "all" }
    ]
  },
  {
    category: "Tools & Leaderboards",
    icon: "🛠️",
    items: [
      { title: "LMArena", desc: "Community blind-vote model rankings — the closest thing to a fair fight between models.", url: "https://lmarena.ai/", type: "tool", level: "all" },
      { title: "Artificial Analysis", desc: "Independent benchmarks of model intelligence, speed, and price — the source of many 'Index' scores in the news.", url: "https://artificialanalysis.ai/", type: "tool", level: "all" },
      { title: "Hugging Face", desc: "The GitHub of AI — models, datasets, demos, and the open-source community's home.", url: "https://huggingface.co/", type: "tool", level: "intermediate" },
      { title: "OpenAI Tokenizer", desc: "Paste text, see exactly how a model tokenizes it. Instantly demystifying.", url: "https://platform.openai.com/tokenizer", type: "tool", level: "all" },
      { title: "Ollama", desc: "Run open-weight models locally on your own machine with one command.", url: "https://ollama.com/", type: "tool", level: "advanced" },
      { title: "Epoch AI", desc: "Rigorous data on compute trends, training costs, and AI progress over time.", url: "https://epoch.ai/", type: "tool", level: "intermediate" }
    ]
  },
  {
    category: "Books",
    icon: "📚",
    items: [
      { title: "The Coming Wave — Mustafa Suleyman", desc: "DeepMind co-founder on the containment problem of AI and synthetic biology.", url: "https://www.the-coming-wave.com/", type: "book", level: "beginner" },
      { title: "Chip War — Chris Miller", desc: "The geopolitics of semiconductors — essential background for the NVIDIA/TSMC layer of AI news.", url: "https://www.goodreads.com/book/show/60321447-chip-war", type: "book", level: "all" },
      { title: "Superintelligence — Nick Bostrom", desc: "The 2014 book that framed the long-term alignment debate.", url: "https://www.goodreads.com/book/show/20527133-superintelligence", type: "book", level: "intermediate" },
      { title: "Co-Intelligence — Ethan Mollick", desc: "The practical playbook for living and working with AI, from Wharton's leading AI professor.", url: "https://www.goodreads.com/book/show/198678736-co-intelligence", type: "book", level: "beginner" }
    ]
  }
];
