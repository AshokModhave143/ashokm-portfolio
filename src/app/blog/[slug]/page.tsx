import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { format } from "date-fns";
import { getAllPosts, getPost } from "@/lib/blog";

type Params = { slug: string };

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.frontmatter.title, description: post.frontmatter.description };
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground">
        <ArrowLeft size={14} /> All writing
      </Link>
      <header className="mt-8 border-b border-border pb-8">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
          {format(new Date(post.frontmatter.date), "MMM d, yyyy")} · {post.readingTime}
        </p>
        <h1 className="mt-3 font-serif text-4xl tracking-tight md:text-5xl">{post.frontmatter.title}</h1>
        <p className="mt-4 text-lg text-muted leading-relaxed">{post.frontmatter.description}</p>
      </header>
      <div className="prose-mono mt-10">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
