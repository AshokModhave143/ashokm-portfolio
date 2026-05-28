import type { Metadata } from "next";
import { Download, Mail } from "lucide-react";
import { Section } from "@/components/section";
import { experience } from "@/lib/data/experience";
import {
  skillGroups,
  certifications,
  certificationsInProgress,
  awards,
  languages,
} from "@/lib/data/skills";
import { site } from "@/lib/site";
import { profile } from "@/lib/data/profile";

export const metadata: Metadata = {
  title: "Resume",
  description: "Single-page ATS-friendly resume for Ashok Modhave.",
};

export default function ResumePage() {
  return (
    <Section
      eyebrow="Resume"
      title="Single-page summary."
      intro="A printable, ATS-friendly version of my CV. PDF download below for recruiter pipelines."
    >
      <div className="no-print mb-8 flex flex-wrap gap-3">
        <a
          href={site.resumeFile}
          download
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm text-background hover:opacity-90"
        >
          <Download size={14} /> Download PDF
        </a>
        <a
          href={site.socials.email}
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:bg-surface"
        >
          <Mail size={14} /> Email me
        </a>
      </div>

      <article className="rounded-2xl border border-border bg-surface/40 p-8 md:p-12">
        <header className="border-b border-border pb-6">
          <h1 className="font-serif text-3xl tracking-tight">{profile.name}</h1>
          <p className="mt-1 text-muted">{profile.role}</p>
          <p className="mt-2 text-xs text-brand">
            Open to contract roles: {profile.openToRoles.join(" · ")}
          </p>
          <p className="mt-3 text-sm text-muted">
            {site.location} or Remote · {site.email} · {site.phone}
          </p>
          <p className="mt-1 text-sm text-muted">
            <a
              className="hover:underline underline-offset-4"
              href={site.socials.linkedin}
            >
              linkedin.com/in/ashok-modhave
            </a>
            {" · "}
            <a
              className="hover:underline underline-offset-4"
              href={site.socials.github}
            >
              github.com/AshokModhave143
            </a>
          </p>
        </header>

        <section className="mt-8">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Summary
          </h2>
          <p className="mt-2 leading-relaxed">
            Senior Full-Stack Engineer with 13+ years shipping enterprise web
            and mobile platforms across banking, fintech, and travel. Recently
            delivered GenAI / LLM-powered applications on Azure OpenAI (RAG
            chatbot, +73% agent efficiency), PCI-compliant payment platforms
            (+43% call-handling efficiency), and enterprise document generation
            replacing legacy systems (~70% volume captured at BNZ).
          </p>
          <p className="mt-3 leading-relaxed">
            Currently expanding into <strong>Agentic AI</strong> (LangGraph,
            Anthropic Agent SDK, MCP), <strong>RAG at scale</strong> (pgvector,
            Pinecone, LangChain), and <strong>Vercel AI SDK</strong> for
            streaming AI UX — building three public portfolio projects
            (Resume-RAG, DocuAsk, JD-Tailor) alongside the Azure AI-102
            certification.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Core Skills
          </h2>
          <div className="mt-3 space-y-2 text-sm">
            {skillGroups.map((g) => (
              <p key={g.title}>
                <strong className="font-medium">{g.title}:</strong>{" "}
                <span className="text-foreground/90">{g.items.join(", ")}</span>
              </p>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Experience
          </h2>
          <ol className="mt-3 space-y-6">
            {experience.map((e) => (
              <li key={`${e.company}-${e.start}`}>
                <p>
                  <strong className="font-medium">{e.role}</strong> —{" "}
                  {e.company}{" "}
                  <span className="text-muted">
                    · {e.location} · {e.start} – {e.end}
                  </span>
                </p>
                <p className="mt-1 text-sm text-foreground/90">{e.summary}</p>
                <ul className="mt-1.5 space-y-1 text-sm">
                  {e.highlights.map((h, i) => (
                    <li key={i} className="pl-4 -indent-4">
                      <span className="text-muted">— </span>
                      {h}
                    </li>
                  ))}
                </ul>
                <p className="mt-1.5 text-xs text-muted">
                  Stack: {e.stack.join(", ")}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Education
            </h2>
            <p className="mt-2 text-sm">
              B.E. Information Technology — University of Pune, India · 2007 –
              2011 · First Class (60.26%)
            </p>
            <h2 className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Languages
            </h2>
            <p className="mt-2 text-sm">{languages.join(" · ")}</p>
          </div>
          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Certifications
            </h2>
            <ul className="mt-2 space-y-1 text-sm">
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <p className="mt-2 text-xs text-muted">
              In progress (2026): {certificationsInProgress.join(", ")}
            </p>
            <h2 className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Awards
            </h2>
            <ul className="mt-2 space-y-1 text-sm">
              {awards.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </section>
      </article>
    </Section>
  );
}
