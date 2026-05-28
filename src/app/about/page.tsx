import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { SkillCluster } from "@/components/skill-cluster";
import { OpenToCard } from "@/components/open-to-card";
import { profile } from "@/lib/data/profile";
import { experience } from "@/lib/data/experience";
import {
  skillGroups,
  certifications,
  certificationsInProgress,
  awards,
  languages,
} from "@/lib/data/skills";
import { focusAreas } from "@/lib/data/learning";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: profile.shortBio,
};

export default function AboutPage() {
  return (
    <>
      <Section
        eyebrow="About"
        title={<>A senior engineer who still loves the craft.</>}
        intro={profile.summary[0]}
      >
        <OpenToCard className="mb-10 max-w-2xl" />
        <div className="grid gap-12 md:grid-cols-3">
          <div className="space-y-5 md:col-span-2">
            {profile.summary.slice(1).map((p, i) => (
              <p key={i} className="text-foreground/90 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          <aside className="space-y-6 text-sm">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Currently
              </p>
              <p className="mt-1">
                {experience[0].role} @ {experience[0].company}
              </p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Based in
              </p>
              <p className="mt-1">{site.location}</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Email
              </p>
              <a
                href={site.socials.email}
                className="mt-1 block hover:underline underline-offset-4"
              >
                {site.email}
              </a>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Elsewhere
              </p>
              <div className="mt-1 flex flex-col gap-1">
                <a
                  href={site.socials.github}
                  className="hover:underline underline-offset-4"
                >
                  GitHub
                </a>
                <a
                  href={site.socials.linkedin}
                  className="hover:underline underline-offset-4"
                >
                  LinkedIn
                </a>
                <Link
                  href="/resume"
                  className="hover:underline underline-offset-4"
                >
                  Resume
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section
        eyebrow="Right now"
        title="Currently going deep on."
        intro="A 90-day intensive alongside day-job work. See the live plan on /now."
        className="border-t border-border"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {focusAreas.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-border bg-surface/40 p-6"
            >
              <p className="font-serif text-lg">{f.title}</p>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Experience"
        title="The places that taught me."
        className="border-t border-border"
      >
        <ol className="space-y-12">
          {experience.map((e) => (
            <li
              key={`${e.company}-${e.start}`}
              className="grid gap-6 md:grid-cols-[10rem_1fr]"
            >
              <div className="font-mono text-xs uppercase tracking-wider text-muted">
                <div>
                  {e.start} — {e.end}
                </div>
                <div className="mt-1 text-foreground/70 normal-case tracking-normal">
                  {e.location}
                </div>
              </div>
              <div>
                <p className="font-serif text-xl">
                  {e.role} <span className="text-muted">— {e.company}</span>
                </p>
                <p className="mt-2 text-muted leading-relaxed">{e.summary}</p>
                <ul className="mt-3 space-y-1.5 text-sm">
                  {e.highlights.map((h, i) => (
                    <li key={i} className="pl-4 -indent-4 text-foreground/90">
                      <span className="text-muted">— </span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {e.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border px-2 py-0.5 font-mono text-[11px] text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        eyebrow="Skills"
        title="Toolkit."
        intro="Tools I reach for often — grouped roughly by where they live in the stack."
        className="border-t border-border"
      >
        <SkillCluster groups={skillGroups} />
      </Section>

      <Section
        eyebrow="Recognitions"
        title="Certifications, awards, and languages."
        className="border-t border-border"
      >
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Certifications
            </p>
            <ul className="mt-3 space-y-1.5 text-sm">
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              In progress (2026)
            </p>
            <ul className="mt-3 space-y-1.5 text-sm">
              {certificationsInProgress.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Awards
            </p>
            <ul className="mt-3 space-y-1.5 text-sm">
              {awards.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Languages
            </p>
            <ul className="mt-3 space-y-1.5 text-sm">
              {languages.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Education
            </p>
            <p className="mt-3 text-sm">
              B.E. Information Technology — University of Pune, 2007–2011 (First
              Class, 60.26%)
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
