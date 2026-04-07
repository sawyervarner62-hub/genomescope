import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";

export default function BuildingGenomeScopePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground/70 hover:text-foreground transition-colors duration-200 mb-10 animate-fade-up"
      >
        <ArrowLeft className="size-4" />
        Back to Blog
      </Link>

      <article className="space-y-8">
        {/* Header */}
        <div className="space-y-4 animate-fade-up-delay-1">
          <p className="text-xs text-muted-foreground/60 tracking-widest uppercase">
            April 2026
          </p>
          <h1
            className="text-3xl sm:text-5xl font-bold tracking-tighter leading-tight bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, oklch(0.85 0.12 270), oklch(0.7 0.18 250))",
            }}
          >
            How I Built a Privacy-First Genome Analyzer
          </h1>
          <div className="flex flex-wrap gap-1.5">
            {["Next.js", "Web Workers", "Privacy", "Bioinformatics"].map(
              (tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-xs font-normal border-border/40 bg-white/[0.02]"
                >
                  {tag}
                </Badge>
              )
            )}
          </div>
        </div>

        {/* Glowing divider */}
        <div className="h-px relative animate-fade-up-delay-2">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        </div>

        {/* Article content */}
        <div className="space-y-8 leading-relaxed animate-fade-up-delay-3">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground/90">
              The Problem
            </h2>
            <p className="text-muted-foreground/80">
              When I started exploring genetic data analysis, I noticed
              something troubling: most tools that analyze your 23andMe or
              AncestryDNA raw data require you to upload your most personal
              information — your DNA — to a third-party server. Some of these
              services store your data indefinitely, and you have no real
              guarantee of how it&apos;s used.
            </p>
            <p className="text-muted-foreground/80">
              I asked myself: does genome analysis actually need a server? The
              answer turned out to be no. Every step — parsing the file, matching
              SNPs, looking up clinical context — can happen entirely in your
              browser.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground/90">
              The Architecture
            </h2>
            <p className="text-muted-foreground/80">
              GenomeScope is built on a simple but powerful idea: your genome
              data never leaves your device. Here&apos;s how it works:
            </p>
            <ol className="list-decimal list-inside space-y-3 pl-2 text-muted-foreground/80">
              <li>
                You drop your raw data file (a{" "}
                <code className="font-mono bg-white/[0.06] px-1.5 py-0.5 rounded text-sm text-primary/80">
                  .txt
                </code>{" "}
                file from 23andMe) into the browser
              </li>
              <li>
                A{" "}
                <code className="font-mono bg-white/[0.06] px-1.5 py-0.5 rounded text-sm text-primary/80">
                  Web Worker
                </code>{" "}
                parses 600,000+ lines in a background thread without freezing
                the page
              </li>
              <li>
                The parsed SNPs are matched against a curated database of 79
                clinically-relevant variants
              </li>
              <li>
                Results appear in an interactive dashboard with severity
                rankings, pathway analysis, and exportable reports
              </li>
            </ol>
            <p className="text-muted-foreground/80">
              The entire application is a Next.js static site. There are no API
              calls during analysis, no database writes, no cookies. When you
              close the tab, your data is gone.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground/90">
              Technical Challenges
            </h2>
            <p className="text-muted-foreground/80">
              <strong className="text-foreground/90">
                Parsing 600K lines without freezing the UI.
              </strong>{" "}
              A typical 23andMe raw data file has 600,000+ lines. Parsing this
              on the main thread would lock the browser for several seconds. I
              used a{" "}
              <code className="font-mono bg-white/[0.06] px-1.5 py-0.5 rounded text-sm text-primary/80">
                Web Worker
              </code>{" "}
              to offload parsing to a background thread, posting progress
              updates every 50,000 lines so the UI stays responsive with a live
              progress bar.
            </p>
            <p className="text-muted-foreground/80">
              <strong className="text-foreground/90">
                Bidirectional genotype matching.
              </strong>{" "}
              Genotypes can be reported in either direction — &quot;AG&quot; and
              &quot;GA&quot; are the same thing genetically, but different
              strings. The matcher tries both orientations against the database
              to avoid false negatives.
            </p>
            <p className="text-muted-foreground/80">
              <strong className="text-foreground/90">
                Building a curated SNP database.
              </strong>{" "}
              I compiled 79 SNPs across 16 health categories from published
              research, each with clinical context: mechanism of action,
              implications, recommended actions, and gene interactions. This
              isn&apos;t a raw data dump — it&apos;s an interpreted,
              actionable database.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground/90">
              What I Learned
            </h2>
            <p className="text-muted-foreground/80">
              The biggest lesson wasn&apos;t technical — it was about framing.
              Privacy isn&apos;t a limitation; it&apos;s the product. By
              constraining myself to client-side-only processing, I created
              something that competing tools can&apos;t offer: absolute certainty
              that your DNA data is never exposed.
            </p>
            <p className="text-muted-foreground/80">
              This project also taught me that the best technical decisions are
              business decisions. Choosing Web Workers over a server-side
              pipeline wasn&apos;t just an engineering choice — it eliminated
              hosting costs, HIPAA concerns, and the entire category of data
              breach risk. Sometimes the simplest architecture is the smartest
              one.
            </p>
          </section>
        </div>

        {/* Glowing divider */}
        <div className="h-px relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        </div>

        <div className="text-center py-4">
          <Link
            href="/projects/genomescope"
            className="text-sm font-medium hover:text-primary/90 transition-colors duration-200 group"
          >
            Try GenomeScope{" "}
            <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </Link>
        </div>
      </article>
    </div>
  );
}
