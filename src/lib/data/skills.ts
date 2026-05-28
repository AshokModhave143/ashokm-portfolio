export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "AI / GenAI — Shipped in production",
    items: [
      "Azure OpenAI",
      "RAG (contact-centre assistant)",
      "Prompt engineering",
      "Streaming LLM UX (RxJS)",
      "LLM fine-tuning workflows",
      "Azure B2C auth for AI apps",
    ],
  },
  {
    title: "AI / GenAI — Actively learning (2026)",
    items: [
      "Anthropic Claude API",
      "LangChain",
      "LangGraph",
      "Vercel AI SDK",
      "MCP",
      "Tool calling / agents",
      "pgvector",
      "Pinecone",
      "Hybrid search + reranking",
      "LLM evals (LangSmith)",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React 18+",
      "Next.js 14/15",
      "TypeScript",
      "React Native",
      "NX monorepo",
      "Tailwind CSS",
      "shadcn/ui",
      "Material UI",
      "Radix",
      "React Hook Form",
      "Zod",
      "React Query",
      "Jotai",
      "Zustand",
      "Redux Toolkit",
      "RxJS",
      "Storybook",
    ],
  },
  {
    title: "Backend",
    items: [
      "Java 17",
      "Spring Boot",
      "Node.js",
      "NestJS",
      "Express",
      "Python",
      "FastAPI",
      "Django REST",
      "GraphQL",
      "Microservices",
      "OpenAPI / Orval",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS (Lambda, S3, SNS, SES, EC2, EKS, IAM)",
      "Azure (OpenAI, B2C, DevOps)",
      "Docker",
      "Kubernetes",
      "OpenShift",
      "Kong API Gateway",
      "Jenkins",
      "Spinnaker",
      "CI/CD",
    ],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "pgvector", "MySQL", "MS SQL", "MongoDB", "DynamoDB", "Kafka", "Redis"],
  },
  {
    title: "Testing & Quality",
    items: [
      "Jest",
      "React Testing Library",
      "Playwright",
      "Cypress",
      "Selenium",
      "Postman",
      "REST Assured",
      "TDD",
    ],
  },
  {
    title: "Observability",
    items: [
      "New Relic",
      "Dynatrace",
      "Sentry",
      "CloudWatch",
      "Sumo Logic",
      "OpenTelemetry",
    ],
  },
  {
    title: "Practices",
    items: [
      "System design",
      "Micro-frontends",
      "Monorepo architecture",
      "PCI-DSS aware development",
      "OAuth2 / Azure B2C",
      "Agile",
      "Code review",
      "Mentoring",
    ],
  },
];

export const certifications = [
  "Introduction to Generative AI — Google",
  "Oracle Certified Java SE 6 Programmer (OCJP) — 2012",
  "Implementing Design Systems",
  "Mobile App Analytics for Developers",
  "Fim Tech Pro",
];

export const certificationsInProgress = [
  "Anthropic Skilled Builder",
  "DeepLearning.AI — LangChain for LLM Application Dev",
  "AWS Certified AI Practitioner",
  "Azure AI Engineer Associate (AI-102)",
];

export const awards = [
  "Top-5 Finalist, FIS Hackathon 2017",
  "Runner-Up, FIS Innov8 2017",
];

export const languages = [
  "English (Professional)",
  "Hindi (Full Professional)",
  "Marathi (Native)",
];
