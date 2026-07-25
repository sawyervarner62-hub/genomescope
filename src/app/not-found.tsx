import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

const quickLinks = [
  { href: "/", fig: "00", label: "Home", note: "Portfolio index" },
  { href: "/projects/traitmap", fig: "01", label: "Traitmap", note: "Genome analyzer" },
  { href: "/blog", fig: "02", label: "Blog", note: "Notes and essays" },
];

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 max-w-3xl min-h-[72vh] flex flex-col justify-center py-20">
      <p className="eyebrow">Error / 404</p>
      <h1 className="mt-4 text-display-hero text-ink leading-none">404</h1>
      <p className="mt-6 text-lg text-ink-soft max-w-md leading-relaxed">
        This page wandered off. It may have been moved, renamed, or never
        existed. Here&apos;s the way back.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-accent">
          Back home
        </Link>
        <Link href="/projects/traitmap" className="btn btn-paper">
          Try Traitmap
        </Link>
      </div>

      <div className="mt-14 divide-y divide-rule-paper border-y border-rule-paper">
        {quickLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex items-baseline gap-4 py-4"
          >
            <span className="spec-index text-xl">{link.fig}</span>
            <span className="flex-1 font-display text-lg font-semibold text-ink group-hover:text-viridian transition-colors">
              {link.label}
            </span>
            <span className="mono-spec">{link.note}</span>
            <span className="text-viridian transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
