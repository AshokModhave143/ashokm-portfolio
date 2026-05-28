export type LearningItem = {
  title: string;
  source?: string;
  status: "in-progress" | "planned" | "done";
  url?: string;
};

export const focusAreas: { title: string; description: string }[] = [
  {
    title: "Agentic AI & MCP",
    description:
      "LangGraph state machines, Anthropic Agent SDK, and shipping my own MCP server to the registry.",
  },
  {
    title: "Production RAG",
    description:
      "Hybrid retrieval, reranking, chunking strategies, and evals discipline with LangSmith and Promptfoo.",
  },
  {
    title: "Vercel AI SDK & streaming UX",
    description:
      "Next.js App Router patterns for streaming chat, tool-calling UIs, and partial prerendering with AI.",
  },
  {
    title: "Azure AI engineering",
    description:
      "Building on the Azure OpenAI work from Air NZ — adding AI Search, Document Intelligence, and AI-102 certification.",
  },
];

export const currentlyLearning: LearningItem[] = [
  { title: "Anthropic Academy — Claude API Fundamentals", status: "in-progress", url: "https://www.anthropic.com/learn" },
  { title: "Anthropic — Prompt Engineering Interactive Tutorial", status: "in-progress" },
  { title: "Anthropic — Tool Use with Claude", status: "in-progress" },
  { title: "DeepLearning.AI — LangChain for LLM Application Dev", status: "in-progress", url: "https://learn.deeplearning.ai" },
  { title: "Vercel AI SDK docs (end-to-end)", status: "in-progress", url: "https://ai-sdk.dev" },
  { title: "LangChain Academy — Introduction to LangGraph", status: "planned", url: "https://academy.langchain.com" },
  { title: "DeepLearning.AI — AI Agents in LangGraph", status: "planned" },
  { title: "DeepLearning.AI — Building & Evaluating Advanced RAG", status: "planned" },
  { title: "MCP Quickstart — building & publishing a server", status: "planned", url: "https://modelcontextprotocol.io" },
];

export const targetCertifications: LearningItem[] = [
  { title: "Anthropic Skilled Builder", status: "in-progress" },
  { title: "Microsoft Azure AI Engineer Associate (AI-102)", status: "planned" },
  { title: "AWS Certified AI Practitioner (AIF-C01)", status: "planned" },
];

export const readingList: { title: string; author: string }[] = [
  { title: "Hands-On Large Language Models", author: "Jay Alammar & Maarten Grootendorst" },
  { title: "AI Engineering", author: "Chip Huyen" },
  { title: "Designing Machine Learning Systems", author: "Chip Huyen" },
  { title: "Prompt Engineering for LLMs", author: "John Berryman & Albert Ziegler" },
];

export const learningProjects: { title: string; tagline: string; stack: string[] }[] = [
  {
    title: "Resume-RAG",
    tagline: "A chatbot over my own CV — Next.js + Vercel AI SDK + Claude + pgvector. The hello-world for the toolkit.",
    stack: ["Next.js 15", "Vercel AI SDK", "Anthropic Claude", "pgvector"],
  },
  {
    title: "DocuAsk — Production RAG",
    tagline: "FastAPI + LangChain RAG with hybrid search, reranking, and a LangSmith eval dashboard. Quality you can measure.",
    stack: ["FastAPI", "LangChain", "pgvector", "LangSmith", "Cohere Rerank"],
  },
  {
    title: "JD-Tailor — Multi-Agent Assistant",
    tagline: "LangGraph state-machine of five agents (Parser, Matcher, Tailor, Writer, Critic), wrapped as an MCP server.",
    stack: ["LangGraph", "Anthropic Claude", "Python", "Tavily", "MCP"],
  },
  {
    title: "NZ Public Holidays — MCP server",
    tagline: "Small, focused MCP server published to the registry. A clean reference for protocol authors.",
    stack: ["MCP", "TypeScript", "Node.js"],
  },
];

export const roadmap: { phase: string; window: string; focus: string; output: string }[] = [
  {
    phase: "Phase 1 — Foundations",
    window: "Weeks 1–4 (May–Jun 2026)",
    focus: "LLM mental model, Anthropic Claude API, Vercel AI SDK.",
    output: "Ship Resume-RAG · 1 LinkedIn write-up · refreshed profile.",
  },
  {
    phase: "Phase 2 — RAG & Evals",
    window: "Weeks 5–8 (Jun–Jul 2026)",
    focus: "Production-grade RAG: chunking, hybrid search, rerankers, LangSmith evals.",
    output: "Ship DocuAsk · blog post on RAG lessons · start applying to AI roles.",
  },
  {
    phase: "Phase 3 — Agents & MCP",
    window: "Weeks 9–12 (Jul–Aug 2026)",
    focus: "LangGraph multi-agent systems, MCP server design, Claude Agent SDK.",
    output: "Ship JD-Tailor · publish MCP server · 2 blog posts.",
  },
  {
    phase: "Phase 4 — Consolidation",
    window: "Months 4–6 (Aug–Nov 2026)",
    focus: "Certification, deepen weakest area, 1 merged OSS PR.",
    output: "AI-102 badge · OSS contribution · meetup talk submission.",
  },
];
