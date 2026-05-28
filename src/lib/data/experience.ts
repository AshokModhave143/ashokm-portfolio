export type Experience = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Bank of New Zealand",
    role: "Senior Full Stack Developer",
    location: "Auckland, NZ",
    start: "Apr 2025",
    end: "Present",
    current: true,
    summary:
      "Own the frontend architecture for the bank's document-generation platform that replaced legacy HotDocs — now ~70% of home-lending document volume.",
    highlights: [
      "Set the frontend architecture — React + TypeScript with Jotai, React Hook Form + Zod, and React Query; designed save/resume so customers don't lose progress on long compliance forms",
      "Designed Java Spring Boot microservices integrating SmartCOMM and nCino through Kong on AWS EKS / OpenShift",
      "Set the code-quality bar through reviews, shared standards, and internal knowledge-sharing",
    ],
    stack: [
      "React",
      "TypeScript",
      "Jotai",
      "React Query",
      "Java Spring Boot",
      "Kong",
      "AWS EKS",
      "OpenShift",
      "Dynatrace",
    ],
  },
  {
    company: "Serko Ltd.",
    role: "Senior Frontend Engineer",
    location: "Auckland, NZ",
    start: "Oct 2024",
    end: "Mar 2025",
    summary:
      "Led the checkout & payments build for BBX Phase 2, a managed business-accommodation booking platform.",
    highlights: [
      "Owned the PCI-compliant payment flow — secure-iframe integration that keeps card data out of application scope",
      "Drove checkout-conversion gains through Optimizely + LaunchDarkly experimentation",
      "Closed observability gaps on the checkout funnel with New Relic + Sumo Logic",
    ],
    stack: [
      "Next.js",
      "React",
      "NX",
      "React Query",
      "Orval",
      "Optimizely",
      "LaunchDarkly",
    ],
  },
  {
    company: "Air New Zealand",
    role: "Senior Software Developer",
    location: "Auckland, NZ",
    start: "May 2023",
    end: "Oct 2024",
    summary:
      "Shipped a GenAI contact-centre assistant, a PCI phone-payment platform, and customer-facing self-service forms.",
    highlights: [
      "Led TUI Chatbot — Next.js + Azure OpenAI with RxJS streaming; architected it as a platform so other business units onboard their own datasets without touching the core; +73% agent answer-efficiency",
      "Delivered Secure Pay — Amazon Connect + Sequence Shift tokenisation; unblocked go-live by fixing a critical call-flow defect; +43% call-handling efficiency",
      "Built the Customer Forms platform (Refund / Feedback / Pet / Anonymous) with deterministic routing into MS Dynamics 365 queues",
    ],
    stack: [
      "Next.js",
      "Azure OpenAI",
      "RxJS",
      "NX",
      "Amazon Connect",
      "Azure B2C",
      "Redux Toolkit",
    ],
  },
  {
    company: "Serko Ltd.",
    role: "Senior Software Developer",
    location: "Auckland, NZ",
    start: "May 2022",
    end: "May 2023",
    summary:
      "Core contributor on Zeno & BBX — flights, hotels, and car rentals across an NX monorepo.",
    highlights: [
      "Designed the NX monorepo adopted across multiple product teams",
      "Built booking flows with Google Maps and a Material UI design system",
      "Established the React Query + Orval (OpenAPI codegen) API client strategy",
    ],
    stack: ["Next.js", "React", "NX", "Material UI", "React Query", "Orval"],
  },
  {
    company: "Datacom (Client: EROAD)",
    role: "Senior React Developer",
    location: "Auckland, NZ",
    start: "May 2021",
    end: "May 2022",
    summary:
      "Built a React Native iOS/Android logistics app talking to in-vehicle dashcam IoT devices.",
    highlights: [
      "Cross-platform mobile logistics app for fleet operators",
      "Feature work and fixes on the PGDB licensing-renewals app",
    ],
    stack: ["React Native", "Redux Toolkit", "React Testing Library"],
  },
  {
    company: "ASB Bank",
    role: "Senior Software Engineer",
    location: "Auckland, NZ",
    start: "Dec 2018",
    end: "May 2021",
    summary:
      "Migrated KiwiSaver and Investment Fund platforms from Angular to React + TypeScript without disrupting customer journeys, inside banking compliance.",
    highlights: [
      "Built customer-facing retirement & first-home calculators with government-contribution prediction",
      "Owned the C# .NET Core REST APIs behind fund switches, withdrawals, and account management",
      "Contributed to bank-wide design-system adoption",
    ],
    stack: ["React", "Redux", "Storybook", "Angular 2", "C# .NET Core", "Azure"],
  },
  {
    company: "Centelon Ltd.",
    role: "Senior Full-Stack Developer",
    location: "Pune, IN",
    start: "Nov 2017",
    end: "Nov 2018",
    summary:
      "Led MyDhan, a white-label mutual-fund investment platform (MERN), plus Action Planner and ChurchConnect.",
    highlights: [
      "BSE + Aadhaar KYC integrations and nightly RTA file processing",
      "Action Planner on MEAN + AWS Cognito + Serverless",
      "Mentored 3 developers",
    ],
    stack: ["React", "Node.js", "MongoDB", "AWS", "Serverless"],
  },
  {
    company: "FIS (formerly SunGard)",
    role: "Engineer / Senior Engineer",
    location: "Pune, IN",
    start: "Jul 2012",
    end: "Oct 2017",
    summary:
      "Product development across trading and post-trade systems — Securities360, Oasys, FIX Engine, MFMT.",
    highlights: [
      "Migrated legacy Java applet UI to AngularJS + HTML5 with SSO",
      "Java Spring trade-processing platform integrating Omgeo",
      "High-throughput C++ trading console; led DB migrations",
    ],
    stack: ["Java Spring", "AngularJS", "C++", ".NET", "SQL"],
  },
];
