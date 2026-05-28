import type { Metadata } from "next";
import { BookOpen, GraduationCap, Sparkles, Target } from "lucide-react";
import { Section } from "@/components/section";
import {
  focusAreas,
  currentlyLearning,
  targetCertifications,
  readingList,
  roadmap,
  learningProjects,
} from "@/lib/data/learning";

export const metadata: Metadata = {
  title: "Now",
  description:
    "What I'm focused on right now — current learning, projects in flight, and the 90-day plan I'm running.",
};

function StatusBadge({ status }: { status: string }) {
  const cls = status === "in-progress" ? "chip chip-emerald" : status === "done" ? "chip chip-brand" : "chip";
  return <span className={cls}>{status}</span>;
}

export default function NowPage() {
  return (
    <>
      <Section
        eyebrow={`Updated · ${new Date().toLocaleDateString("en-NZ", { month: "long", year: "numeric" })}`}
        title="What I&rsquo;m focused on right now."
        intro={
          <>
            Inspired by Derek Sivers&rsquo; <a className="underline underline-offset-4" href="https://nownownow.com" target="_blank" rel="noreferrer">/now</a> page idea. This is the honest snapshot — current focus, what I&rsquo;m learning, and the projects in flight.
          </>
        }
      >
        <div className="grid gap-6 md:grid-cols-2">
          {focusAreas.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-surface/40 p-6">
              <div className="mb-3 inline-flex items-center gap-2 text-foreground">
                <Sparkles size={14} className="text-brand" />
                <span className="font-serif text-lg">{f.title}</span>
              </div>
              <p className="text-sm leading-relaxed text-muted">{f.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* The 90-day plan */}
      <Section
        eyebrow="The 90-day plan"
        title="A deliberate run at applied AI."
        intro="Ten hours a week. Three shipped projects. One certification. The plan is public on purpose — it keeps me honest."
        className="border-t border-border"
      >
        <ol className="space-y-8">
          {roadmap.map((r, i) => (
            <li key={r.phase} className="grid gap-4 md:grid-cols-[3rem_1fr]">
              <span className="font-mono text-sm text-muted">0{i + 1}</span>
              <div className="border-t border-border pt-4">
                <p className="font-serif text-xl">{r.phase}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted">{r.window}</p>
                <p className="mt-3 text-sm leading-relaxed">{r.focus}</p>
                <p className="mt-2 text-sm text-muted">
                  <span className="font-mono text-[11px] uppercase tracking-wider">Output</span> · {r.output}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Learning targets */}
      <Section
        eyebrow="Targets"
        title="Projects I&rsquo;m building as I learn."
        intro="These move from this list onto the Work page only when they ship. Concepts first, code second."
        className="border-t border-border"
      >
        <ul className="grid gap-4 md:grid-cols-2">
          {learningProjects.map((p) => (
            <li key={p.title} className="rounded-2xl border border-border bg-surface/40 p-5">
              <div className="flex items-center gap-2">
                <Target size={14} className="text-brand" />
                <p className="font-serif text-lg">{p.title}</p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.tagline}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* Learning */}
      <Section
        eyebrow="Learning"
        title="Courses, certs, and books."
        className="border-t border-border"
      >
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2">
              <GraduationCap size={14} className="text-muted" />
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Courses</p>
            </div>
            <ul className="space-y-2.5 text-sm">
              {currentlyLearning.map((c) => (
                <li key={c.title} className="flex flex-wrap items-center gap-2">
                  <StatusBadge status={c.status} />
                  {c.url ? (
                    <a href={c.url} target="_blank" rel="noreferrer" className="hover:underline underline-offset-4">
                      {c.title}
                    </a>
                  ) : (
                    <span>{c.title}</span>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-8 mb-4 inline-flex items-center gap-2">
              <GraduationCap size={14} className="text-muted" />
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Certifications target</p>
            </div>
            <ul className="space-y-2.5 text-sm">
              {targetCertifications.map((c) => (
                <li key={c.title} className="flex flex-wrap items-center gap-2">
                  <StatusBadge status={c.status} />
                  <span>{c.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-4 inline-flex items-center gap-2">
              <BookOpen size={14} className="text-muted" />
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Reading queue</p>
            </div>
            <ul className="space-y-3 text-sm">
              {readingList.map((b) => (
                <li key={b.title}>
                  <p className="text-foreground">{b.title}</p>
                  <p className="text-muted">{b.author}</p>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-border bg-surface/40 p-5 text-sm">
              <p className="font-serif text-lg">Public output, by design.</p>
              <p className="mt-2 text-muted">
                A LinkedIn post per shipped milestone, a blog post per phase, and every project in a public repo. If it isn&rsquo;t shipped, it doesn&rsquo;t count.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
