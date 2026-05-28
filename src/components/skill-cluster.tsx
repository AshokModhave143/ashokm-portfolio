import type { SkillGroup } from "@/lib/data/skills";

export function SkillCluster({ groups }: { groups: SkillGroup[] }) {
  return (
    <dl className="grid gap-10 md:grid-cols-2">
      {groups.map((g) => (
        <div key={g.title} className="border-t border-border pt-6">
          <dt className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">
            {g.title}
          </dt>
          <dd>
            <ul className="flex flex-wrap gap-x-2 gap-y-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  );
}
