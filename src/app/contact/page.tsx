import type { Metadata } from "next";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Section } from "@/components/section";
import { site } from "@/lib/site";
import { profile } from "@/lib/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Say hello — open to contract roles across NZ and remote.",
};

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title="Let&rsquo;s talk."
      intro="Building something with LLMs, payments, or a frontend that&rsquo;s outgrown its architecture? Tell me what&rsquo;s hard about it. Email&rsquo;s best — I read every message and reply within a day or two."
    >
      <div className="grid gap-10 md:grid-cols-[1fr_18rem]">
        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <p>
            I&rsquo;m open to contract roles — across Auckland, New Zealand, and remote.
          </p>
          <div>
            <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-brand">Roles I&rsquo;m open to</p>
            <ul className="flex flex-wrap gap-1.5">
              {profile.openToRoles.map((r, i) => {
                const tones = ["chip chip-brand", "chip chip-teal", "chip chip-violet", "chip chip-amber", "chip chip-emerald", "chip chip-brand"];
                return <li key={r} className={tones[i % tones.length]}>{r}</li>;
              })}
            </ul>
          </div>
          <p>
            If you&rsquo;re hiring for one of these, building something interesting with LLMs or agents, or want a second pair of eyes on your frontend or mobile architecture — drop me a line and tell me a little about the problem you&rsquo;re working on.
          </p>
          <a
            href={site.socials.email}
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm text-background hover:opacity-90"
          >
            <Mail size={14} /> {site.email}
          </a>
        </div>

        <aside className="space-y-4 border-t border-border pt-6 text-sm md:border-l md:border-t-0 md:pl-8 md:pt-0">
          <div className="flex items-center gap-2 text-muted">
            <MapPin size={14} /> {site.location}
          </div>
          <a href={site.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline underline-offset-4">
            <Github size={14} /> github.com/AshokModhave143
          </a>
          <a href={site.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline underline-offset-4">
            <Linkedin size={14} /> linkedin.com/in/ashok-modhave
          </a>
          <p className="pt-2 text-xs text-muted">Phone (NZ): {site.phone}</p>
        </aside>
      </div>
    </Section>
  );
}
