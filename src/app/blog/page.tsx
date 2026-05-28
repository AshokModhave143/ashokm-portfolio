import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { getAllPosts } from "@/lib/blog";
import { format } from "date-fns";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on building software, AI products, and the occasional war story.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <Section
      eyebrow="Writing"
      title="Notes from the workbench."
      intro="Long-form posts on things I&rsquo;m learning — agentic AI, RAG, frontend architecture, monorepos, and lessons from shipping in regulated industries."
    >
      {posts.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border bg-surface/40 p-12 text-center">
          <p className="font-serif text-2xl">No posts yet — but the space is reserved.</p>
          <p className="mt-3 text-sm text-muted">
            Drafts are queued. First one will land soon.
          </p>
        </div>
      ) : (
        <ul className="divide-y divide-border">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="grid gap-2 py-6 md:grid-cols-[8rem_1fr] md:items-baseline">
                <span className="font-mono text-xs uppercase tracking-wider text-muted">
                  {format(new Date(p.frontmatter.date), "MMM d, yyyy")}
                </span>
                <div>
                  <p className="font-serif text-2xl tracking-tight">{p.frontmatter.title}</p>
                  <p className="mt-1 text-muted">{p.frontmatter.description}</p>
                  <p className="mt-2 flex flex-wrap items-center gap-2 text-xs text-muted">
                    {p.frontmatter.tags?.[0] && (
                      <span className="chip chip-brand capitalize">{p.frontmatter.tags[0]}</span>
                    )}
                    <span>{p.readingTime}</span>
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
