import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data/projects";

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: p.title, description: p.tagline };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <Link href="/work" className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground">
        <ArrowLeft size={14} /> All work
      </Link>

      <header className="mt-8 border-b border-border pb-8">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
          {p.year}{p.company ? ` · ${p.company}` : ""}{p.status ? ` · ${p.status}` : ""}
        </p>
        <h1 className="mt-3 font-serif text-4xl tracking-tight md:text-5xl">{p.title}</h1>
        <p className="mt-4 text-lg text-muted leading-relaxed">{p.tagline}</p>
      </header>

      <section className="mt-10 prose-mono">
        <h2>Overview</h2>
        <p>{p.description}</p>

        <h2>Role</h2>
        <p>{p.role}</p>

        <h2>Impact</h2>
        <ul>
          {p.impact.map((i, idx) => <li key={idx}>{i}</li>)}
        </ul>

        <h2>Stack</h2>
        <div className="mt-2 flex flex-wrap gap-2 not-prose">
          {p.stack.map((s) => (
            <span key={s} className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-muted">{s}</span>
          ))}
        </div>

        {p.links && p.links.length > 0 && (
          <>
            <h2>Links</h2>
            <ul>
              {p.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5">
                    {l.label} <ExternalLink size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </article>
  );
}
