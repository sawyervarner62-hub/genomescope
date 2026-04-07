"use client";

import Link from "next/link";
import { Github } from "lucide-react";

const navLinkClass =
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-8 px-3 text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all duration-200";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-background/60 backdrop-blur-xl backdrop-saturate-150">
      <div className="container mx-auto max-w-5xl flex items-center justify-between px-4 h-14">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight hover:opacity-80 transition-opacity"
        >
          Sawyer Varner
        </Link>
        <nav className="flex items-center gap-0.5">
          <a href="#projects" className={navLinkClass}>
            Projects
          </a>
          <a href="#about" className={navLinkClass}>
            About
          </a>
          <Link href="/blog" className={navLinkClass}>
            Blog
          </Link>
          <a href="#contact" className={navLinkClass}>
            Contact
          </a>
          <a
            href="https://github.com/sawyervarner62-hub"
            target="_blank"
            rel="noopener noreferrer"
            className={navLinkClass}
          >
            <Github className="size-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
