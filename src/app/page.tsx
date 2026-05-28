import Link from "next/link";
import { ArrowRight, Bot, Cloud, Github, Linkedin, Mail, Smartphone, Sparkles } from "lucide-react";
import { Section } from "@/components/section";
import { ProjectCard } from "@/components/project-card";
import { OpenToCard } from "@/components/open-to-card";
import { site } from "@/lib/site";
import { profile } from "@/lib/data/profile";
import { projects } from "@/lib/data/projects";
import { focusAreas } from "@/lib/data/learning";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);
  const posts = getAllPosts().slice(0, 3);

  const capabilities = [
    "Technical Leadership",
    "Architecture",
    "Full-Stack Development",
    "Web",
    "Mobile",
    "Cloud",
    "AI",
  ];
  const dotColors = ["bg-brand", "bg-violet", "bg-teal", "bg-amber", "bg-emerald"];
  const heroCards = [
    { icon: Sparkles, color: "text-brand", soft: "var(--brand-soft)", value: "GenAI", label: "Shipped in production" },
    { icon: Cloud, color: "text-teal", soft: "var(--teal-soft)", value: "AWS · Azure", label: "Cloud & DevOps" },
    { icon: Smartphone, color: "text-violet", soft: "var(--violet-soft)", value: "Web · Mobile", label: "React & React Native" },
    { icon: Bot, color: "text-amber", soft: "var(--amber-soft)", value: "13+ yrs", label: "Senior · Lead" },
  ];

  return (
    <>
      {/* Hero / Banner */}
      <section className="hero-aurora relative overflow-hidden border-b border-border">
        <div className="grid-bg absolute inset-0 -z-10 opacity-50" />
        <div className="mx-auto max-w-5xl px-6 pb-14 pt-20 md:pb-20 md:pt-28">
          {/* Capabilities */}
          <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2">
            {capabilities.map((c, i) => (
              <span key={c} className="flex items-center gap-4">
                <span className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/70">
                  {c}
                </span>
                {i < capabilities.length - 1 && (
                  <span
                    className={`h-1 w-1 rounded-full ${dotColors[i % dotColors.length]}`}
                  />
                )}
              </span>
            ))}
          </div>

          {/* Tagline */}
          <h1 className="max-w-4xl font-serif text-4xl leading-[1.07] tracking-tight md:text-[3.3rem]">
            I <span className="italic text-brand">architect</span> and{" "}
            <span className="italic">ship</span> scalable products across{" "}
            <span className="italic text-brand">web</span>,{" "}
            <span className="italic text-violet">mobile</span>,{" "}
            <span className="italic text-teal">cloud</span>, and{" "}
            <span className="italic text-amber">AI</span>.
            <span className="mt-3 block text-2xl text-muted md:text-3xl">
              Engineered with precision, delivered with ownership.
            </span>
          </h1>

          {/* Sub-tagline */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">
            Senior full-stack engineer with 13+ years building secure, scalable
            products across banking, fintech, and travel — including production
            GenAI in regulated, high-trust environments.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
              style={{ boxShadow: "0 6px 24px var(--brand-ring)" }}
            >
              See my work
              <ArrowRight
                size={14}
                className="transition group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              href="/stack"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition hover:bg-surface"
            >
              Explore the stack
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition hover:bg-surface"
            >
              Get in touch
            </Link>
            <span className="mx-1 hidden h-6 w-px bg-border sm:block" />
            <div className="flex items-center gap-1">
              <a href={site.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border transition hover:bg-surface">
                <Github size={16} />
              </a>
              <a href={site.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border transition hover:bg-surface">
                <Linkedin size={16} />
              </a>
              <a href={site.socials.email} aria-label="Email" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border transition hover:bg-surface">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Stat cards */}
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {heroCards.map((c) => {
              const I = c.icon;
              return (
                <div
                  key={c.value}
                  className="group rounded-2xl border border-border bg-surface/50 p-4 transition hover:border-foreground/20 hover:bg-surface"
                >
                  <span
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ${c.color}`}
                    style={{ background: c.soft }}
                  >
                    <I size={16} />
                  </span>
                  <p className="mt-3 font-serif text-lg leading-tight">{c.value}</p>
                  <p className="mt-0.5 text-xs text-muted">{c.label}</p>
                </div>
              );
            })}
          </div>

          {/* Open to / availability */}
          <OpenToCard className="mt-10 max-w-2xl" />
        </div>
      </section>

      {/* Featured work */}
      <Section
        eyebrow="Selected work"
        title="A few things I&rsquo;ve helped ship."
        intro="Recent projects across banking, travel, payments, and mobile — what they were, what they changed, and the stack underneath."
      >
        <div>
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
        <div className="mt-8">
          <Link href="/work" className="inline-flex items-center gap-2 text-sm text-brand hover:opacity-80">
            All 14 projects <ArrowRight size={14} />
          </Link>
        </div>
      </Section>

      {/* About teaser */}
      <Section
        eyebrow="About"
        title="Senior, across the whole stack."
        className="border-t border-border"
      >
        <div className="grid gap-10 md:grid-cols-3">
          <p className="text-foreground/85 leading-relaxed md:col-span-2">{profile.summary[0]}</p>
          <div className="space-y-3 text-sm text-muted">
            <p>{profile.availability}</p>
            <Link href="/about" className="inline-flex items-center gap-2 text-brand hover:opacity-80">
              Read the full story <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </Section>

      {/* Currently learning */}
      <Section
        eyebrow="Right now"
        title="Going deeper on agentic AI."
        intro="A 90-day intensive on production AI engineering — agentic systems, MCP, production RAG with measurable evals, and an Azure AI-102 certification in parallel."
        className="border-t border-border"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((f, i) => {
            const accents = ["text-brand", "text-teal", "text-violet", "text-amber"];
            const softs = ["var(--brand-soft)", "var(--teal-soft)", "var(--violet-soft)", "var(--amber-soft)"];
            return (
              <div key={f.title} className="rounded-2xl border border-border bg-surface/40 p-5">
                <span
                  className={`mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg ${accents[i % 4]}`}
                  style={{ background: softs[i % 4] }}
                >
                  <Sparkles size={14} />
                </span>
                <p className="font-serif text-lg">{f.title}</p>
                <p className="mt-2 text-sm text-muted leading-relaxed">{f.description}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-8">
          <Link href="/now" className="inline-flex items-center gap-2 text-sm text-brand hover:opacity-80">
            See the full plan <ArrowRight size={14} />
          </Link>
        </div>
      </Section>

      {/* Writing */}
      <Section
        eyebrow="Writing"
        title="Notes from the workbench."
        intro="A space for things I&rsquo;m learning — agentic AI, RAG, React, monorepos, and the occasional war story. Posts coming soon."
        className="border-t border-border"
      >
        {posts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-surface/40 p-10 text-center">
            <p className="font-serif text-xl">First post brewing.</p>
            <p className="mt-2 text-sm text-muted">
              The blog is wired up and waiting — I&rsquo;ll start with something on building the GenAI assistant at Air NZ.
            </p>
            <Link href="/blog" className="mt-6 inline-flex items-center gap-2 text-sm text-brand hover:opacity-80">
              Visit the blog <ArrowRight size={14} />
            </Link>
          </div>
        ) : (
          <ul className="divide-y divide-border">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="block py-5 hover:bg-surface/40">
                  <p className="font-serif text-xl">{p.frontmatter.title}</p>
                  <p className="mt-1 text-sm text-muted">{p.frontmatter.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Section>
    </>
  );
}
