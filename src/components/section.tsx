import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, intro, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("mx-auto max-w-5xl px-6 py-16 md:py-24", className)}>
      {(eyebrow || title || intro) && (
        <header className="mb-10 max-w-2xl">
          {eyebrow && (
            <p className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-brand">
              <span className="h-px w-6 bg-brand" />
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl">{title}</h2>
          )}
          {intro && <p className="mt-4 text-muted leading-relaxed">{intro}</p>}
        </header>
      )}
      {children}
    </section>
  );
}
