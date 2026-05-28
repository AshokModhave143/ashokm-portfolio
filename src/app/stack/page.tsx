import type { Metadata } from "next";
import {
  Bot,
  Brain,
  Cloud,
  Code2,
  Cpu,
  Database,
  Layers,
  Network,
  Server,
  Shield,
  Smartphone,
  Workflow,
} from "lucide-react";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Stack",
  description:
    "The tech stack I use, explore, and ship in production — AI/agentic, web, mobile, cloud, and the platform glue underneath.",
};

type Pillar = {
  icon: typeof Brain;
  title: string;
  tag: "brand" | "teal" | "violet" | "amber" | "emerald";
  blurb: string;
  shipping: string[];
  exploring: string[];
};

const pillars: Pillar[] = [
  {
    icon: Brain,
    tag: "brand",
    title: "AI & Agentic",
    blurb:
      "Shipping LLM-powered features into production — and going deeper on the agentic patterns that turn an LLM into a system.",
    shipping: [
      "Azure OpenAI",
      "Prompt engineering",
      "Structured output",
      "RxJS streaming LLM UX",
    ],
    exploring: [
      "Anthropic Claude API",
      "Vercel AI SDK (streaming + tool-call UIs)",
      "Tool calling / agents",
      "LangGraph (multi-agent state machines)",
      "Anthropic Agent SDK",
      "Model Context Protocol (MCP)",
      "Production RAG — hybrid search, rerankers",
      "LangChain · LlamaIndex",
      "LangSmith · Promptfoo (evals)",
      "pgvector · Pinecone",
    ],
  },
  {
    icon: Code2,
    tag: "teal",
    title: "Web (Frontend & Full-Stack)",
    blurb:
      "Frontend-heavy full-stack on React, Next.js, TypeScript, and NX monorepos. Architecture and shipping discipline.",
    shipping: [
      "React 18+",
      "Next.js 14/15 (App Router, Server Components, Server Actions)",
      "TypeScript",
      "NX monorepo",
      "Tailwind CSS · shadcn/ui · Radix",
      "React Query · Jotai · Zustand · Redux Toolkit · RxJS",
      "React Hook Form · Zod",
      "Storybook",
    ],
    exploring: [
      "Partial Prerendering with AI",
      "Vercel AI SDK streaming UX patterns",
      "Server Actions + AI tool-call UIs",
    ],
  },
  {
    icon: Smartphone,
    tag: "violet",
    title: "Mobile",
    blurb:
      "Cross-platform mobile work — React Native apps shipping to iOS and Android from a single codebase, including IoT-integrated experiences.",
    shipping: [
      "React Native (iOS + Android)",
      "Redux Toolkit on mobile",
      "React Testing Library",
      "Dashcam / IoT integrations",
    ],
    exploring: ["Expo Router patterns", "On-device LLM exploration"],
  },
  {
    icon: Server,
    tag: "amber",
    title: "Backend & APIs",
    blurb:
      "Java Spring Boot for regulated workloads, Node / NestJS for product velocity, Python (FastAPI) for AI services.",
    shipping: [
      "Java 17 · Spring Boot · Spring MVC",
      "Node.js · NestJS · Express",
      "Python · FastAPI · Django REST",
      "REST · OpenAPI / Orval codegen",
      "Microservices",
      "Kong API Gateway",
    ],
    exploring: ["Streaming AI APIs", "Event-driven AI orchestration"],
  },
  {
    icon: Cloud,
    tag: "brand",
    title: "Cloud — AWS & Azure",
    blurb:
      "Production experience on both major clouds. Comfortable choosing between them by workload — AI inference, data, regulated apps.",
    shipping: [
      "AWS — Lambda, S3, SNS, SES, EC2, EKS, IAM, Serverless",
      "Azure — OpenAI, B2C, DevOps",
      "Kubernetes · OpenShift · Docker",
      "Jenkins · Spinnaker · CI/CD",
    ],
    exploring: [
      "Azure AI Foundry · Azure AI Search · Document Intelligence",
      "AWS Bedrock & Agent patterns",
      "Cost-aware AI inference architectures",
    ],
  },
  {
    icon: Database,
    tag: "teal",
    title: "Data & Vector",
    blurb:
      "Relational and document stores, plus the vector layer that powers RAG and semantic features.",
    shipping: ["PostgreSQL", "MySQL", "MS SQL", "MongoDB", "DynamoDB", "Kafka", "Redis"],
    exploring: ["pgvector at scale", "Hybrid (BM25 + dense) retrieval", "Pinecone · LanceDB"],
  },
  {
    icon: Workflow,
    tag: "violet",
    title: "Architecture & Solutioning",
    blurb:
      "Senior-level system design, monorepo architecture, micro-frontends, and the trade-off thinking a tech lead / solution architect needs.",
    shipping: [
      "System design",
      "Micro-frontends",
      "Monorepo architecture (NX)",
      "PCI-DSS aware design",
      "OAuth2 · Azure B2C",
      "Domain-driven boundaries",
      "Code review · standards · mentoring",
    ],
    exploring: [
      "Reference architectures for production AI agents",
      "Enterprise RAG patterns (data residency, evals, observability)",
    ],
  },
  {
    icon: Network,
    tag: "emerald",
    title: "Observability & Quality",
    blurb:
      "What gets measured gets shipped safely — production telemetry, evals for AI, and a disciplined testing pyramid.",
    shipping: [
      "New Relic · Dynatrace · Sentry · Sumo Logic · CloudWatch",
      "OpenTelemetry basics",
      "Jest · React Testing Library · Playwright · Cypress · Selenium",
      "REST Assured · Postman",
      "TDD",
    ],
    exploring: ["LangSmith for AI tracing & evals", "Promptfoo · Ragas"],
  },
  {
    icon: Shield,
    tag: "amber",
    title: "Security & Compliance",
    blurb:
      "Banking, PCI, and regulated-product work shapes how I think about defaults — least-privilege, scope minimisation, auditability.",
    shipping: [
      "PCI-DSS aware development",
      "Azure B2C · OAuth2 / OIDC",
      "IAM (AWS) · RBAC patterns",
      "Secure iframe / tokenisation flows (Sequence Shift)",
    ],
    exploring: ["LLM threat modelling (OWASP LLM Top 10)", "Prompt-injection defences", "PII redaction in agent pipelines"],
  },
  {
    icon: Bot,
    tag: "brand",
    title: "Shipping AI into Real Businesses",
    blurb:
      "Production AI experience — and a growing toolkit for agentic features that contact-centre, ops, and document-heavy teams actually use.",
    shipping: [
      "Production GenAI on Azure OpenAI (Air NZ TUI Chatbot — +73% agent efficiency)",
      "Domain-agnostic LLM platform design for multi-team adoption",
    ],
    exploring: [
      "Agentic workflows for contact-centre, ops, and document-heavy work",
      "Evals as a product surface, not just an engineering artefact",
      "Patterns for AI adoption in regulated, AI-skeptical teams",
    ],
  },
];

const accentClass: Record<Pillar["tag"], string> = {
  brand: "text-brand",
  teal: "text-teal",
  violet: "text-violet",
  amber: "text-amber",
  emerald: "text-emerald",
};
const chipClass: Record<Pillar["tag"], string> = {
  brand: "chip chip-brand",
  teal: "chip chip-teal",
  violet: "chip chip-violet",
  amber: "chip chip-amber",
  emerald: "chip chip-emerald",
};

export default function StackPage() {
  return (
    <Section
      eyebrow="Stack"
      title="The tech I use, explore, and architect with."
      intro="Not editors and hardware — the layers that matter. What I ship in production today and the next frontier I&rsquo;m moving into."
    >
      <div className="mb-8 flex flex-wrap items-center gap-2 text-xs">
        <span className="chip chip-brand">Shipping</span>
        <span className="text-muted">— in production today.</span>
        <span className="ml-4 chip chip-violet">Exploring</span>
        <span className="text-muted">— upskilling toward, building with.</span>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {pillars.map((p) => {
          const Icon = p.icon;
          return (
            <article
              key={p.title}
              className="rounded-2xl border border-border bg-surface/40 p-6"
            >
              <header className="flex items-center gap-3">
                <span
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ${accentClass[p.tag]}`}
                  style={{ background: `var(--${p.tag === "brand" ? "brand" : p.tag}-soft)` }}
                >
                  <Icon size={18} />
                </span>
                <h3 className="font-serif text-xl">{p.title}</h3>
              </header>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.blurb}</p>

              <div className="mt-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Shipping</p>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {p.shipping.map((s) => (
                    <li key={s} className={chipClass[p.tag]}>{s}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Exploring</p>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {p.exploring.map((s) => (
                    <li key={s} className="chip">{s}</li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-12 flex items-center gap-3 rounded-2xl border border-border bg-surface/40 p-6">
        <Layers size={18} className="text-brand" />
        <div className="text-sm">
          <p className="font-serif text-lg">Full-stack reach, by design.</p>
          <p className="mt-1 text-muted">
            Web, mobile, backend, and AI in one engineer. Useful for senior, lead, and consulting contracts where a single person needs to hold the whole picture and still pair-program.
          </p>
        </div>
        <Cpu size={18} className="ml-auto hidden text-violet md:block" />
      </div>
    </Section>
  );
}
