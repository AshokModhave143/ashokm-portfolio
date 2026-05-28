import { MapPin } from "lucide-react";
import { profile } from "@/lib/data/profile";
import { cn } from "@/lib/utils";

const tones = [
  "chip chip-brand",
  "chip chip-teal",
  "chip chip-violet",
  "chip chip-amber",
  "chip chip-emerald",
  "chip chip-brand",
];

export function OpenToCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface/50 p-5",
        className,
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-emerald">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> Open to
          contract roles
        </span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          <MapPin size={12} /> Auckland, NZ · Remote
        </span>
      </div>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {profile.openToRoles.map((r, i) => (
          <li key={r} className={tones[i % tones.length]}>
            {r}
          </li>
        ))}
      </ul>
    </div>
  );
}
