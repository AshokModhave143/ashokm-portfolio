import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="no-print mt-24 border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 md:flex-row md:items-start md:justify-between">
        <div className="space-y-2">
          <p className="font-serif text-lg">{site.name}</p>
          <p className="text-sm text-muted">
            {site.location} · open to contract roles, NZ or remote.
          </p>
          <nav className="flex flex-wrap gap-x-4 gap-y-1 pt-1">
            {site.nav
              .filter((item) => item.href !== "/")
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted underline-offset-4 hover:text-foreground hover:underline"
                >
                  {item.label}
                </Link>
              ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={site.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-surface"
          >
            <Github size={16} />
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-surface"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={site.socials.email}
            aria-label="Email"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-surface"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-6 pb-8 text-xs text-muted">
        © {new Date().getFullYear()} {site.name}.{" "}
        <Link className="underline-offset-4 hover:underline" href="/resume">
          Resume
        </Link>
        .
      </div>
    </footer>
  );
}
