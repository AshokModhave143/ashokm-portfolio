import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">404</p>
      <h1 className="mt-3 font-serif text-4xl tracking-tight">Page not found.</h1>
      <p className="mt-4 text-muted">The thing you&rsquo;re looking for has moved, or maybe never existed.</p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm hover:bg-surface"
      >
        Back to home
      </Link>
    </div>
  );
}
