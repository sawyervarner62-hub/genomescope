"use client";

import Link from "next/link";
import { Github } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto max-w-5xl flex items-center justify-between px-4 h-14">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Sawyer Varner
        </Link>
        <nav className="flex items-center gap-1">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-8 px-3 hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Projects
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-8 px-3 hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            About
          </a>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-8 px-3 hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Blog
          </Link>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-8 px-3 hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Contact
          </a>
          <a
            href="https://github.com/sawyervarner62-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-8 px-3 hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Github className="size-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
