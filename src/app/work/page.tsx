import type { Metadata } from "next";
import { Section } from "@/components/section";
import { ProjectCard } from "@/components/project-card";
import { projects, projectCategories } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects shipped across AI, banking, fintech, travel, capital markets, and mobile.",
};

export default function WorkPage() {
  return (
    <Section
      eyebrow="Work"
      title="Things I&rsquo;ve architected, built, and shipped."
      intro="Across AI, banking, fintech, travel, capital markets, and mobile. Grouped by domain so you can jump to what&rsquo;s most relevant."
    >
      <div className="space-y-16">
        {projectCategories.map((c) => {
          const items = projects.filter((p) => p.category === c.id);
          if (items.length === 0) return null;
          return (
            <section key={c.id} id={c.id}>
              <div className="mb-2 flex items-center gap-3">
                <h2 className="font-serif text-2xl tracking-tight">{c.label}</h2>
                <span className="chip">{items.length} project{items.length > 1 ? "s" : ""}</span>
              </div>
              <div>
                {items.map((p) => (
                  <ProjectCard key={p.slug} project={p} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </Section>
  );
}
