// ---------------------------------------------------------------------------
// All portfolio content lives here. Edit this file to update copy without
// touching any component markup. Anything marked TODO is a placeholder —
// swap it for the real link before you deploy.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Jairaj R",
  role: "CS Undergrad — AI/ML · Web Dev · DSA",
  location: "Thiruvananthapuram, Kerala, India",
  tagline:
    "I build the systems that sit behind the interface — agents that reason, pipelines that retrieve, and interfaces people actually enjoy using.",
  focusFields: ["AI / ML", "Web Development", "DSA & Problem Solving"],
  bio: [
    "B.Tech Computer Science and Engineering candidate at College of Engineering Trivandrum (CET), currently holding an 8.79 CGPA across three semesters.",
    "Most of my time goes into two things that turn out to rhyme more than people expect: getting language models to reason reliably in multi-agent pipelines, and shipping full-stack web products that real people use — from booking platforms to club sites.",
    "Outside of coursework, I lead teams through hackathons, contribute to open source, and keep a running list of ideas that are 70% feasible and 100% fun to try.",
  ],
};

export const education = {
  degree: "B.Tech in Computer Science and Engineering",
  institute: "College of Engineering Trivandrum (CET), Kerala",
  period: "2024 – Present",
  cgpa: "8.52 / 10",
  semesters: [
    { label: "Sem 1", value: "8.87" },
    { label: "Sem 2", value: "9.03" },
    { label: "Sem 3", value: "8.56" },
    { label: "Sem 4", value: "7.79" },
  ],
};

export const skillCategories = [
  {
    key: "languages",
    label: "Languages",
    items: ["Python", "C", "C++", "JavaScript", "HTML", "CSS", "Java", "SQL", "Bash"],
  },
  {
    key: "ai-ml",
    label: "AI / ML Tools",
    items: [
      "Google AI Studio",
      "OpenAI API",
      "TensorFlow",
      "Hugging Face Hub",
      "LiteLLM",
      "ChromaDB",
      "LightFM",
      "UMAP",
      "sentence-transformers",
      "Google Colab",
    ],
  },
  {
    key: "frameworks",
    label: "Frameworks & Platforms",
    items: ["FastAPI", "React", "Vite", "Node.js", "LlamaIndex", "RAG Pipelines", "REST APIs"],
  },
  {
    key: "core",
    label: "Core Areas",
    items: [
      "Machine Learning",
      "Explainable AI",
      "Recommendation Systems",
      "Multi-Agent Systems",
      "Web Development",
      "System Design",
    ],
  },
  {
    key: "tools",
    label: "Developer Tools",
    items: ["VS Code", "Git", "GitHub", "LaTeX", "SQLite", "Firebase", "API Testing"],
  },
  {
    key: "judges",
    label: "Problem Solving",
    items: ["LeetCode", "HackerRank", "CodeChef", "100+ problems solved"],
  },
];

export const experience = [
  {
    role: "Research Intern — Explainable Recommendation using Embeddings",
    org: "College of Engineering Trivandrum (CET), Kerala",
    period: "May 2026 – June 2026",
    points: [
      "Developed an explainable movie recommendation framework using the LightFM hybrid model, combining user-item interactions with feature-based embeddings under faculty supervision.",
      "Built an explanation module spanning 4 complementary signals — embedding similarity, shared genres, user-generated tags, and collaborative evidence — to surface human-interpretable reasoning per prediction.",
      "Ran exploratory analysis across 3 experiment types (UMAP embedding visualization, arithmetic probing, cluster inspection) to uncover semantic structure in latent space.",
      "Evaluated recommendation quality across Precision@K, Recall@K, AUC, and MRR, aligning implementation with current XAI literature.",
    ],
  },
];

export const projects = [
  {
    name: "Multi-Agent Research Intelligence System",
    context: "Techashy Hackathon · 2026",
    description:
      "A reflective multi-agent pipeline for structured, multi-perspective research analysis, routed across three model providers with automatic failover.",
    points: [
      "Architected a sequential Supervisor → Pros → Cons → Future agent chain where each stage builds on prior outputs for reasoning consistency.",
      "Powered by DeepSeek R1, Groq Llama 3.3 70B, and Cerebras Llama 3.1 70B via LiteLLM-based multi-provider routing.",
      "Integrated the ArXiv API with sentence-transformers and ChromaDB for persistent retrieval-augmented generation.",
    ],
    tags: ["Multi-Agent", "RAG", "LiteLLM", "ChromaDB"],
    github: "https://github.com/jairajrenjith/Research-Intelligence-System",
  },
  {
    name: "Blind Server Architecture for Anonymous Learning",
    context: "TechThrive 2.0 · 2026",
    description:
      "A zero-knowledge-inspired adaptive learning platform where quiz evaluation, level computation, and profiling all happen client-side.",
    points: [
      "Stateless FastAPI backend serving modular JSON content — no sessions, no database, no stored user data.",
      "Applied Fernet encryption with timestamp-based token validation to deliver content securely without exposing user behavior.",
    ],
    tags: ["FastAPI", "Zero-Knowledge", "Fernet", "Privacy"],
    github: "https://github.com/jairajrenjith/ZK-EduHub",
  },
  {
    name: "Kashmiri Multilingual Audio Intelligence Agent",
    context: "GNOSIS Hackathon, Incepta 2026 — 🏆 3rd Place",
    description:
      "An offline multilingual audio analysis system for Kashmiri, Hindi, and Urdu speech, built against 20+ competing teams.",
    points: [
      "Multi-stage pipeline: noise reduction → Faster-Whisper ASR → MarianMT translation → spaCy NER → rule-based risk scoring.",
      "Keyword-based threat detection with contextual flagging and a deterministic 3-tier risk classification system.",
    ],
    tags: ["Speech", "Faster-Whisper", "MarianMT", "spaCy"],
    github: "https://github.com/jairajrenjith/Kashmir_Audio_Intelligence_Agent",
  },
  {
    name: "AI Semiconductor Datasheet Chatbot",
    context: "Via CampusConnect Hackathon · 2025 — 🏆 Winner",
    description:
      "A RAG chatbot that lets engineers query dense semiconductor datasheets in plain language and get grounded answers back.",
    points: [
      "Processed PDF datasheets into semantic embeddings with BGE models, stored in Qdrant for fast similarity search.",
      "Integrated TinyLlama and Qwen via LlamaIndex to generate accurate, context-grounded responses.",
    ],
    tags: ["RAG", "Qdrant", "LlamaIndex", "BGE"],
    github: "https://github.com/jairajrenjith/Semiconductor-Chatbot",
  },
];

export const freelanceWork = [
  {
    name: "Alfa Catering — Booking Platform",
    description:
      "A Firebase-backed React + Vite booking platform for a catering business: slot management, WhatsApp-based booking confirmation, an admin panel, and a four-color Kerala-themed palette.",
    tags: ["React", "Vite", "Firebase", "WhatsApp API"],
    live: "https://alfa-catering.vercel.app/",
    github: "https://github.com/jairajrenjith/Alfa-Catering",
  },
  {
    name: "Zaro Sportz — Turf & Nets Booking",
    description:
      "A Firebase-backed React + Vite booking platform for a 6's football turf and cricket nets in Maniyur, Kerala, with slot booking and WhatsApp-based booking confirmation.",
    tags: ["React", "Vite", "Firebase", "WhatsApp API"],
    live: "https://zaro-sportz.vercel.app/",
    github: "https://github.com/jairajrenjith/Zaro-Sportz",
  },
];

export const achievements = [
  "3rd Place, GNOSIS Hackathon (Incepta 2026) — Kashmiri Multilingual Audio Intelligence Agent, against 20+ teams.",
  "Winner, Via CampusConnect Hackathon — AI-based RAG solution for semiconductor datasheet analysis.",
  "Team Lead across 4 hackathons, delivering AI and software solutions under competitive time constraints.",
  "100+ problems solved on LeetCode, HackerRank, and CodeChef across arrays, graphs, DP, and recursion.",
  "Shipped full-stack web and AI applications with React, Firebase, FastAPI, and Python across multiple independent projects.",
];

export const activities = [
  {
    role: "Open Source Contributor",
    org: "GSSoC · NSoC · SSoC",
    description:
      "Participated in GirlScript Summer of Code, Nexus Spring of Code, and Social Summer of Code, collaborating with global maintainers on real-world codebases.",
  },
  {
    role: "Web Team Member",
    org: "AstroCET (Astronomy Club, CET)",
    description: "Developed and maintained the club website — UI fixes and content updates in React.",
  },
  {
    role: "Content Subpanel Member",
    org: "CS Association, CET",
    description: "Produced technical content, supported event organization, and managed association communication.",
  },
  {
    role: "Technical Team Member",
    org: "Glitch CET (Game Development Club)",
    description: "Front-end integration and interactive systems across 2+ collaborative projects.",
  },
  {
    role: "Technical Team Member",
    org: "Build Club CET",
    description: "Collaborative software projects and rapid prototyping — 3+ prototypes shipped.",
  },
  {
    role: "Volunteer",
    org: "Dotslash 2025 (CET)",
    description: "Helped organize and coordinate one of CET's flagship technical fest events.",
  },
];

export const certifications = [
  "Solutions Challenge, Google Developer Group CET",
  "Web Development and AI with TensorFlow, Dotslash 2025 CET",
  "Ctrl+Create Game Development Challenge, Glitch CET",
  "Python, Blender, and MS Excel Workshop, SAEIndia CET",
];

export const softSkills = [
  "Analytical & Creative Problem Solving",
  "Agile Team Collaboration",
  "Curiosity-Driven Learning",
  "Project Management & Accountability",
];

export const interests = [
  "Artificial Intelligence",
  "Web Development",
  "Software Engineering",
  "Machine Learning",
  "Cybersecurity",
  "AI-driven Security",
  "Multi-Agent Systems",
  "Explainable AI",
  "Hackathons",
  "Technology Trends",
  "Reading",
  "Photography",
];

export const socials = {
  github: "https://github.com/jairajrenjith",
  linkedin: "https://linkedin.com/in/jairaj-r-47a930333",
  email: "jairajrenjith@gmail.com",
  instagram: "https://instagram.com/jairajrenjith_1019",
};
