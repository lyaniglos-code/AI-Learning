/* ============================================================
   AI HISTORY TIMELINE
   era: founding | golden | deep | llm  (controls dot color)
   ============================================================ */

const TIMELINE = [
  { year: "1943", era: "founding", title: "The first artificial neuron", body: "McCulloch and Pitts publish a mathematical model of a neuron — the theoretical seed of neural networks, 80 years before ChatGPT." },
  { year: "1950", era: "founding", title: "Turing asks 'Can machines think?'", body: "Alan Turing's paper proposes the imitation game — the Turing Test — reframing an unanswerable philosophical question as a measurable one." },
  { year: "1956", era: "founding", title: "The Dartmouth Workshop founds the field", body: "John McCarthy coins 'artificial intelligence' at a summer workshop with Minsky, Shannon, and others. The founders predict rapid progress — a bit early." },
  { year: "1957", era: "founding", title: "The perceptron", body: "Frank Rosenblatt builds a machine that learns from examples. The New York Times predicts machines that 'walk, talk, see, write' — 65 years ahead of schedule." },
  { year: "1966", era: "founding", title: "ELIZA, the first chatbot", body: "Joseph Weizenbaum's simple pattern-matching 'therapist' fools users into feeling understood — the first demonstration of how readily humans bond with conversational machines." },
  { year: "1969–74", era: "founding", title: "The first AI winter", body: "Minsky and Papert expose the perceptron's limits; government reports slam overpromising; funding collapses. A recurring pattern is born: hype, disillusionment, winter." },
  { year: "1980s", era: "golden", title: "Expert systems boom — and bust", body: "Rule-based systems encoding human expertise become a billion-dollar industry, then prove brittle and unmaintainable. Second AI winter follows by 1990." },
  { year: "1986", era: "golden", title: "Backpropagation goes mainstream", body: "Rumelhart, Hinton, and Williams popularize the algorithm for training multi-layer neural networks — the mathematical engine of everything that follows." },
  { year: "1997", era: "golden", title: "Deep Blue defeats Kasparov", body: "IBM's chess machine beats the world champion via brute-force search. Machines conquer their first grand intellectual game — without learning anything." },
  { year: "2012", era: "deep", title: "AlexNet ignites the deep learning revolution", body: "Hinton's students Krizhevsky and Sutskever crush the ImageNet vision contest with a GPU-trained deep network. Within two years, the entire field pivots." },
  { year: "2014", era: "deep", title: "GANs and the acquisition wave", body: "Goodfellow invents generative adversarial networks (machines that create images); Google buys DeepMind. Big Tech begins hoarding AI talent." },
  { year: "2016", era: "deep", title: "AlphaGo beats Lee Sedol", body: "DeepMind's system wins 4–1 at Go, a game with more positions than atoms in the universe. 'Move 37' — a move no human would play — becomes shorthand for machine creativity." },
  { year: "2017", era: "deep", title: "'Attention Is All You Need'", body: "Eight Google researchers publish the transformer architecture. Parallelizable, scalable, and hungry for data — it becomes the foundation of every modern frontier model." },
  { year: "2018–19", era: "deep", title: "GPT and BERT: pretraining takes over", body: "OpenAI's GPT and Google's BERT show that pretraining transformers on raw text, then adapting, beats task-specific models. GPT-2 is briefly withheld as 'too dangerous.'" },
  { year: "2020", era: "llm", title: "GPT-3 and the scaling revelation", body: "175 billion parameters. Few-shot learning emerges from scale alone — describe a task in the prompt and the model just does it. The scaling-law era begins in earnest." },
  { year: "2020", era: "llm", title: "AlphaFold 2 cracks protein folding", body: "DeepMind solves a 50-year grand challenge in biology, later earning the 2024 Nobel Prize in Chemistry — AI's clearest scientific triumph." },
  { year: "2021", era: "llm", title: "Anthropic founded; diffusion art arrives", body: "Ex-OpenAI researchers found Anthropic with a safety-first mission. DALL-E and diffusion models make 'AI art' a public phenomenon." },
  { year: "Nov 2022", era: "llm", title: "ChatGPT changes everything", body: "A 'research preview' chat interface on GPT-3.5 reaches 100 million users in two months — the fastest-adopted consumer product in history. AI becomes dinner-table conversation." },
  { year: "2023", era: "llm", title: "GPT-4, Claude, Gemini, Llama — the frontier race", body: "Multimodal GPT-4 stuns; Anthropic ships Claude; Google merges Brain+DeepMind for Gemini; Meta's leaked-then-released Llama seeds the open-weights ecosystem. Regulation talks begin globally." },
  { year: "2024", era: "llm", title: "Reasoning models and the EU AI Act", body: "OpenAI's o1 shows models that 'think before answering' (test-time compute); the EU AI Act enters force; AI pioneers win Nobel Prizes in both Physics and Chemistry." },
  { year: "Jan 2025", era: "llm", title: "DeepSeek shocks the market", body: "China's DeepSeek releases R1, matching frontier reasoning at a claimed fraction of the cost — briefly erasing hundreds of billions in chip-stock value and resetting assumptions about compute moats." },
  { year: "2025", era: "llm", title: "The year of agents", body: "Claude Code, Cursor, and computer-use agents make AI that acts — not just chats — the industry's center of gravity. MCP emerges as the standard for connecting AI to tools. Capex commitments pass $300B industry-wide." },
  { year: "2026", era: "llm", title: "The frontier era compounds", body: "Claude 5 and GPT-5.x generations ship at unprecedented cadence; robotics foundation models (Gemini Robotics 2) bring AI into the physical world; EU transparency rules take effect; single-company AI budgets exceed $100B. You are here." }
];
