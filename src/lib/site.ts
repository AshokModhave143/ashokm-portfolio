export const site = {
  name: "Ashok Modhave",
  shortName: "Ashok",
  title: "Ashok Modhave — Senior Full-Stack Developer · Web · Mobile · AI",
  description:
    "Senior engineer based in Auckland — 13+ years shipping web, mobile, and AI products across banking, fintech, and travel. Open to contract roles in NZ or remote.",
  url: "https://ashokmodhave.com",
  location: "Auckland, New Zealand",
  email: "ashok.modhave143@gmail.com",
  phone: "+64 22 571 8844",
  resumeFile: "/Ashok_Modhave_Senior_FullStack_AI_Engineer.pdf",
  socials: {
    github: "https://github.com/AshokModhave143",
    linkedin: "https://www.linkedin.com/in/ashok-modhave",
    email: "mailto:ashok.modhave143@gmail.com",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/ask", label: "Ask" },
    { href: "/blog", label: "Writing" },
    { href: "/now", label: "Now" },
    { href: "/stack", label: "Stack" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export type SiteConfig = typeof site;
