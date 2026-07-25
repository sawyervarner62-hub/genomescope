"use client";

import Link from "next/link";
import { Github } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // The genome analyzer renders on an ink (dark) surface. Match the nav to it
  // so the header blends into the page instead of sitting as a cream strip.
  const isInk = pathname?.startsWith("/projects/traitmap") ?? false;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinkClass = cn(
    "link-accent text-sm transition-colors duration-200",
    isInk
      ? "text-steel-light hover:text-paper-text"
      : "text-steel hover:text-ink"
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-colors duration-300",
        isInk ? "bg-ink" : "bg-paper",
        scrolled
          ? isInk
            ? "border-b border-rule"
            : "border-b border-rule-paper"
          : "border-b border-transparent"
      )}
    >
      <div className="container mx-auto max-w-5xl flex items-center justify-between px-4 h-16">
        <Link href="/" className="flex items-baseline gap-2.5 group">
          <span
            className={cn(
              "font-display text-lg font-semibold tracking-tight",
              isInk ? "text-paper-text" : "text-ink"
            )}
          >
            Sawyer Varner
          </span>
          <span className="mono-spec hidden sm:inline">/ IDX.00</span>
        </Link>
        <nav className="flex items-center gap-5 sm:gap-6">
          <Link href="/#projects" className={navLinkClass}>
            Projects
          </Link>
          <Link href="/#about" className={navLinkClass}>
            About
          </Link>
          <Link href="/blog" className={navLinkClass}>
            Blog
          </Link>
          <Link href="/#contact" className={navLinkClass}>
            Contact
          </Link>
          <a
            href="https://github.com/sawyervarner62-hub"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={cn(
              "transition-colors duration-200 hover:text-viridian",
              isInk ? "text-steel-light" : "text-steel"
            )}
          >
            <Github className="size-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
