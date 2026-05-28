import { profile } from "@/lib/data/profile";
import { experience } from "@/lib/data/experience";
import { projects } from "@/lib/data/projects";
import {
  skillGroups,
  certifications,
  certificationsInProgress,
  awards,
  languages,
} from "@/lib/data/skills";

/** Assembles all structured résumé data into a single text block for the LLM context. */
export function buildResumeContext(): string {
  const summary = profile.summary.join("\n");

  const exp = experience
    .map((e) => {
      const period = `${e.start} – ${e.end}`;
      const bullets = e.highlights.map((h) => `  - ${h}`).join("\n");
      return `### ${e.role} — ${e.company} (${e.location}, ${period})\n${e.summary}\n${bullets}\nStack: ${e.stack.join(", ")}`;
    })
    .join("\n\n");

  const proj = projects
    .map((p) => {
      const impact = p.impact.map((i) => `  - ${i}`).join("\n");
      return `### ${p.title}${p.company ? ` — ${p.company}` : ""} (${p.year})\n${p.tagline}\nRole: ${p.role}\n${impact}\nStack: ${p.stack.join(", ")}`;
    })
    .join("\n\n");

  const skills = skillGroups
    .map((g) => `- ${g.title}: ${g.items.join(", ")}`)
    .join("\n");

  return `# Ashok Modhave — Profile

Role: ${profile.role}
Location: ${profile.locations.join(", ")}
Availability: ${profile.availability}

## Summary
${summary}

## Skills
${skills}

## Experience
${exp}

## Selected Projects
${proj}

## Certifications
Completed: ${certifications.join(", ")}
In progress (2026): ${certificationsInProgress.join(", ")}

## Awards
${awards.join(", ")}

## Languages
${languages.join(", ")}`;
}
