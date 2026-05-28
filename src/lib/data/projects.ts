export type Project = {
  slug: string;
  title: string;
  company?: string;
  year: string;
  tagline: string;
  description: string;
  role: string;
  impact: string[];
  stack: string[];
  links?: { label: string; href: string }[];
  featured?: boolean;
  status?: "shipped" | "in-progress" | "planned";
  category: "ai" | "platform" | "payments" | "mobile" | "fintech" | "trading";
};

export const projects: Project[] = [
  // ── AI ──────────────────────────────────────────────────────────────────
  {
    slug: "tui-chatbot",
    title: "TUI Chatbot — GenAI Contact-Centre Assistant",
    company: "Air New Zealand",
    year: "2024",
    tagline: "A domain-agnostic Azure OpenAI assistant powering contact-centre agents in real time.",
    description:
      "Next.js + Azure OpenAI chatbot trained on internal legal and operational documents, streaming responses through RxJS observables. Designed as a platform: multiple business units later plugged in their own LLM datasets without changing the core. Built suggestion generation, prompt refinement, and fine-tuning workflows on top.",
    role: "Senior software developer · feature lead",
    impact: [
      "+73% agent answer-efficiency — materially reduced time-to-answer for customer queries",
      "Multiple internal teams onboarded their own datasets onto the same platform",
      "Production GenAI shipped under enterprise compliance and Azure B2C auth",
    ],
    stack: ["Next.js", "Azure OpenAI", "RxJS", "NX", "React Query", "Azure B2C"],
    featured: true,
    status: "shipped",
    category: "ai",
  },

  // ── Platform (BNZ) ──────────────────────────────────────────────────────
  {
    slug: "doc-gen-platform",
    title: "Doc-Gen Platform & Home-Lending Adapter",
    company: "Bank of New Zealand",
    year: "2025",
    tagline: "Replaced legacy HotDocs with a React + Spring Boot platform powering ~70% of home-lending document volume.",
    description:
      "Led the frontend architecture for the bank's modern document-generation platform. Save/resume customer onboarding, complex form orchestration, and Java Spring Boot microservices integrating SmartCOMM and nCino via Kong API on AWS EKS / OpenShift.",
    role: "Senior full-stack engineer · frontend architect",
    impact: [
      "~70% of home-lending document volume now flows through the new platform",
      "Migrated off a brittle legacy stack with no service interruption",
      "Set the code-quality bar via reviews, standards, and internal dev-community knowledge sharing",
    ],
    stack: [
      "React",
      "TypeScript",
      "Jotai",
      "React Hook Form",
      "Zod",
      "React Query",
      "Java Spring Boot",
      "Kong",
      "AWS EKS",
      "OpenShift",
      "Dynatrace",
    ],
    featured: true,
    status: "shipped",
    category: "platform",
  },

  // ── Payments / Travel ───────────────────────────────────────────────────
  {
    slug: "secure-pay",
    title: "Secure Pay — PCI Phone-Payment Platform",
    company: "Air New Zealand",
    year: "2024",
    tagline: "Contact-centre agents take card payments mid-call without ever hearing the card number.",
    description:
      "PCI-compliant phone-payment platform integrating Amazon Connect for call handling and Sequence Shift for tokenisation. Fixed a critical defect blocking end/restart-call flows that had been holding back go-live.",
    role: "Senior software developer",
    impact: [
      "+43% call-handling efficiency for the contact centre",
      "Closed a long-standing call-flow defect that had been blocking go-live",
      "Azure B2C auth, hardened against PCI scope creep",
    ],
    stack: [
      "Next.js",
      "NX",
      "Amazon Connect",
      "Sequence Shift",
      "Azure B2C",
      "Redux Toolkit",
      "RxJS",
    ],
    featured: true,
    status: "shipped",
    category: "payments",
  },
  {
    slug: "bbx-checkout",
    title: "BBX Phase 2 — Checkout & Payments",
    company: "Serko",
    year: "2024–2025",
    tagline: "Led the checkout & payments build for managed business-accommodation booking.",
    description:
      "Next.js + NX monorepo checkout experience for Serko's managed business-accommodation product. PCI-compliant payment flow via secure iframe with external providers, A/B experimentation with Optimizely + LaunchDarkly, and tightened observability with New Relic + Sumo Logic.",
    role: "Senior frontend engineer · feature lead",
    impact: [
      "Owned the experimentation harness driving checkout-conversion lift",
      "PCI compliance held while shipping at speed across multiple providers",
      "Closed observability gaps on the checkout funnel",
    ],
    stack: ["Next.js", "NX", "React Query", "Orval", "Optimizely", "LaunchDarkly", "New Relic"],
    status: "shipped",
    category: "payments",
  },
  {
    slug: "customer-forms",
    title: "Customer Forms Platform",
    company: "Air New Zealand",
    year: "2023–2024",
    tagline: "Self-service forms — Refund, Feedback, Pet, Anonymous — routed straight into MS Dynamics 365.",
    description:
      "Customer-facing self-service forms that auto-create and route tickets to the right MS Dynamics 365 queues. Replaced manual triage with deterministic routing and reduced handling time across the customer-service org.",
    role: "Senior software developer",
    impact: [
      "Replaced manual triage with deterministic routing, cutting handling time across customer service",
      "Onboarded multiple form types onto one shared NX platform",
    ],
    stack: ["Next.js", "NX", "React Final Form", "Redux Toolkit", "AWS S3", "MS Dynamics 365"],
    status: "shipped",
    category: "platform",
  },
  {
    slug: "zeno-bbx",
    title: "Zeno & BBX — Business Booking Platform",
    company: "Serko",
    year: "2022–2023",
    tagline: "Core contributor on Serko's NX monorepo — flights, hotels, car rentals.",
    description:
      "Designed the NX monorepo adopted across Serko frontends and built booking flows for flights, hotels, and car rentals with Google Maps integration and a Material UI design system. Established the API-client strategy with React Query + Orval (OpenAPI codegen) and mentored juniors through architectural reviews.",
    role: "Senior software developer · architect",
    impact: [
      "NX monorepo scaled to multiple product teams shipping independently",
      "Standardised typed API-client codegen across the platform",
      "Mentored junior engineers and led architectural reviews",
    ],
    stack: ["Next.js", "React", "NX", "Material UI", "React Query", "Orval", "Google Maps API"],
    status: "shipped",
    category: "platform",
  },

  // ── Mobile ──────────────────────────────────────────────────────────────
  {
    slug: "eroad-mobile",
    title: "EROAD — React Native Logistics App",
    company: "Datacom (Client: EROAD)",
    year: "2021–2022",
    tagline: "iOS + Android logistics app talking to in-vehicle dashcam IoT devices.",
    description:
      "Built a cross-platform React Native app for fleet operators, interfacing with in-vehicle dashcam IoT devices. Also delivered feature work and fixes on the PGDB licensing-renewals app.",
    role: "Senior React developer",
    impact: [
      "Shipped a single React Native codebase to both iOS and Android for fleet operators",
      "Wired the mobile UX to live in-vehicle dashcam IoT data streams",
    ],
    stack: ["React Native", "Redux Toolkit", "React Testing Library", "iOS", "Android"],
    featured: true,
    status: "shipped",
    category: "mobile",
  },

  // ── FinTech / Banking ───────────────────────────────────────────────────
  {
    slug: "kiwisaver-migration",
    title: "KiwiSaver, Investment Fund & Wealth Central",
    company: "ASB Bank",
    year: "2018–2021",
    tagline: "Migrated retail investment platforms from Angular to React + TypeScript under banking compliance.",
    description:
      "Migrated KiwiSaver and Investment Fund platforms from Angular 2 to React + TypeScript while staying inside banking compliance. Built customer-facing retirement and first-home calculators with government-contribution prediction, and maintained the underlying C# .NET Core REST APIs for fund switches, withdrawals, and account management. Contributed to bank-wide design-system adoption.",
    role: "Senior software engineer",
    impact: [
      "Migrated a regulated platform without disrupting customer journeys",
      "Shipped calculators predicting government-contribution outcomes",
      "Contributed to bank-wide design-system rollout",
    ],
    stack: ["React", "Redux", "Redux Saga", "Storybook", "Angular 2", "C# .NET Core", "Azure"],
    status: "shipped",
    category: "fintech",
  },
  {
    slug: "mydhan",
    title: "MyDhan — Mutual-Fund Investment Platform",
    company: "Centelon Ltd.",
    year: "2017–2018",
    tagline: "White-label MERN platform with BSE + Aadhaar KYC integrations.",
    description:
      "End-to-end delivery of MyDhan, a white-label mutual-fund investment platform on the MERN stack with BSE and Aadhaar KYC integrations, nightly RTA file processing, and AWS infrastructure (S3, SNS, SES, EC2). Led the build and mentored three developers.",
    role: "Senior full-stack developer · delivery lead",
    impact: [
      "Shipped a regulated investment platform end-to-end as delivery lead",
      "Integrated BSE + Aadhaar KYC and nightly RTA file processing",
      "Mentored three developers through delivery",
    ],
    stack: ["React", "Node.js", "MongoDB", "AWS S3", "AWS SNS", "AWS SES", "AWS EC2"],
    status: "shipped",
    category: "fintech",
  },
  {
    slug: "action-planner",
    title: "Action Planner — Task-Management SaaS",
    company: "Centelon Ltd.",
    year: "2017–2018",
    tagline: "MEAN + AWS Cognito + Serverless task-management app.",
    description:
      "Task-management application built on the MEAN stack with AWS Cognito auth and Serverless backend. Designed for distributed teams to coordinate work and track progress.",
    role: "Senior full-stack developer",
    impact: [
      "Chose a serverless backend to keep infra cost near-zero for early users",
      "Integrated AWS Cognito for managed auth",
    ],
    stack: ["Angular", "Node.js", "MongoDB", "AWS Cognito", "Serverless"],
    status: "shipped",
    category: "platform",
  },
  {
    slug: "churchconnect",
    title: "ChurchConnect — Volunteer Management SaaS",
    company: "Centelon Ltd.",
    year: "2017–2018",
    tagline: "Volunteer-management SaaS with a rules engine and RBAC.",
    description:
      "SaaS volunteer-management platform with a configurable rules engine, role-based access control, and event-scheduling workflows for faith-based organisations.",
    role: "Senior full-stack developer",
    impact: [
      "Built a configurable rules engine for volunteer scheduling",
      "Designed fine-grained RBAC for multi-tenant organisations",
    ],
    stack: ["React", "Node.js", "MongoDB", "RBAC"],
    status: "shipped",
    category: "platform",
  },

  // ── Trading / Capital Markets ───────────────────────────────────────────
  {
    slug: "securities360",
    title: "Securities360 — Post-Trade Modernisation",
    company: "FIS (formerly SunGard)",
    year: "2015–2017",
    tagline: "Migrated a legacy Java applet UI to AngularJS + HTML5 with SSO.",
    description:
      "Post-trade securities platform modernisation. Migrated the legacy Java applet UI to AngularJS + HTML5, integrated single sign-on, and built L1/L2 support tooling that cut diagnosis time for production incidents.",
    role: "Senior engineer · product development",
    impact: [
      "Retired a legacy applet UI in favour of a modern web stack",
      "L1/L2 tooling cut incident diagnosis time",
    ],
    stack: ["AngularJS", "HTML5", "Java", "SSO"],
    status: "shipped",
    category: "trading",
  },
  {
    slug: "oasys",
    title: "Oasys — Trade-Processing Platform",
    company: "FIS (formerly SunGard)",
    year: "2012–2017",
    tagline: "Java Spring trade-processing platform integrating Omgeo.",
    description:
      "Server-side trade-processing platform on Java Spring, integrating with Omgeo for trade confirmation flows across capital-markets clients.",
    role: "Engineer / Senior Engineer",
    impact: [
      "Production trade-processing under capital-markets SLAs",
      "Omgeo integration for downstream confirmation flows",
    ],
    stack: ["Java", "Spring", "Omgeo", "SQL"],
    status: "shipped",
    category: "trading",
  },
  {
    slug: "fix-engine",
    title: "FIX Engine — High-Throughput Trading Console",
    company: "FIS (formerly SunGard)",
    year: "2012–2017",
    tagline: "High-throughput C++ trading & settlement console; led DB migrations.",
    description:
      "C++ trading and settlement console operating at high throughput for capital-markets clients. Led database migrations and contributed to performance-critical parts of the stack.",
    role: "Engineer / Senior Engineer",
    impact: [
      "Performance-critical C++ in production trading flows",
      "Owned database migrations for the platform",
    ],
    stack: ["C++", "FIX Protocol", "SQL"],
    status: "shipped",
    category: "trading",
  },
  {
    slug: "mfmt",
    title: "MFMT — Mutual-Fund Analytics Tool",
    company: "FIS (formerly SunGard)",
    year: "2013–2014",
    tagline: "Silverlight + .NET analytics tool with REST APIs.",
    description:
      "Mutual-fund analytics tool built on Silverlight and .NET with REST APIs for portfolio and performance analytics.",
    role: "Engineer",
    impact: ["Shipped analytics tooling used by fund managers"],
    stack: ["Silverlight", ".NET", "REST"],
    status: "shipped",
    category: "fintech",
  },
];

export const projectCategories: { id: Project["category"]; label: string }[] = [
  { id: "ai", label: "AI / GenAI" },
  { id: "platform", label: "Platforms" },
  { id: "payments", label: "Payments & Travel" },
  { id: "mobile", label: "Mobile" },
  { id: "fintech", label: "Banking & FinTech" },
  { id: "trading", label: "Capital Markets" },
];
