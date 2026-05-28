import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data/projects";

const categoryAccent: Record<Project["category"], { chip: string; dot: string; label: string }> = {
  ai: { chip: "chip chip-brand", dot: "bg-brand", label: "AI" },
  platform: { chip: "chip chip-teal", dot: "bg-teal", label: "Platform" },
  payments: { chip: "chip chip-amber", dot: "bg-amber", label: "Payments" },
  mobile: { chip: "chip chip-violet", dot: "bg-violet", label: "Mobile" },
  fintech: { chip: "chip chip-emerald", dot: "bg-emerald", label: "FinTech" },
  trading: { chip: "chip", dot: "bg-muted", label: "Capital Markets" },
};

export function ProjectCard({ project }: { project: Project }) {
  const accent = categoryAccent[project.category];
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block border-b border-border py-8 transition-colors hover:bg-surface/40"
    >
      <div className="grid gap-4 md:grid-cols-[7rem_1fr_auto] md:items-baseline">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-xs uppercase tracking-wider text-muted">{project.year}</span>
          <span className={accent.chip}>{accent.label}</span>
        </div>
        <div className="space-y-2">
          <h3 className="font-serif text-2xl tracking-tight">
            {project.title}
            {project.company && (
              <span className="ml-3 text-base text-muted">— {project.company}</span>
            )}
          </h3>
          <p className="text-muted leading-relaxed">{project.tagline}</p>
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.stack.slice(0, 7).map((s) => (
              <span key={s} className="chip">{s}</span>
            ))}
            {project.stack.length > 7 && <span className="chip">+{project.stack.length - 7}</span>}
          </div>
        </div>
        <ArrowUpRight
          size={18}
          className="hidden text-muted transition group-hover:-translate-y-0.5 group-hover:text-brand md:block"
        />
      </div>
    </Link>
  );
}
