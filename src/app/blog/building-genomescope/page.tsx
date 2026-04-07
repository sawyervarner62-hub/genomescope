import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function BuildingGenemeScopePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="size-4" />
        Back to Blog
      </Link>

      <article className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">April 2026</p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
            How I Built a Privacy-First Genome Analyzer
          </h1>
          <div className="flex flex-wrap gap-1.5">
            {["Next.js", "Web Workers", "Privacy", "Bioinformatics"].map(
              (tag) => (
                <Badge key={tag} variant="outline" className="text-xs font-normal">
                  {tag}
                </Badge>
              )
            )}
          </div>
        </div>

        <Separator />

        {/* Content — placeholder for Sawyer to fill in */}
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              The Problem
            </h2>
            <p>
              When I started exploring genetic data analysis, I noticed
              something troubling: most tools that analyze your 23andMe or
              AncestryDNA raw data require you to upload your most personal
              information — your DNA — to a third-party server. Some of these
              services store your data indefinitely, and you have no real
              guarantee of how it&apos;s used.
            </p>
            <p>
              I asked myself: does genome analysis actually need a server? The
              answer turned out to be no. Every step — parsing the file, matching
              SNPs, looking up clinical context — can happen entirely in your
              browser.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              The Architecture
            </h2>
            <p>
              GenomeScope is built on a simple but powerful idea: your genome
              data never leaves your device. Here&apos;s how it works:
            </p>
            <ol className="list-decimal list-inside space-y-2 pl-2">
              <li>
                You drop your raw data file (a{" "}
                <code className="font-mono bg-muted px-1.5 py-0.5 rounded text-sm">
                  .txt
                </code>{" "}
                file from 23andMe) into the browser
              </li>
              <li>
                A{" "}
                <code className="font-mono bg-muted px-1.5 py-0.5 rounded text-sm">
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
            <p>
              The entire application is a Next.js static site. There are no API
              calls during analysis, no database writes, no cookies. When you
              close the tab, your data is gone.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              Technical Challenges
            </h2>
            <p>
              <strong className="text-foreground">
                Parsing 600K lines without freezing the UI.
              </strong>{" "}
              A typical 23andMe raw data file has 600,000+ lines. Parsing this
              on the main thread would lock the browser for several seconds. I
              used a{" "}
              <code className="font-mono bg-muted px-1.5 py-0.5 rounded text-sm">
                Web Worker
              </code>{" "}
              to offload parsing to a background thread, posting progress
              updates every 50,000 lines so the UI stays responsive with a live
              progress bar.
            </p>
            <p>
              <strong className="text-foreground">
                Bidirectional genotype matching.
              </strong>{" "}
              Genotypes can be reported in either direction — &quot;AG&quot; and
              &quot;GA&quot; are the same thing genetically, but different
              strings. The matcher tries both orientations against the database
              to avoid false negatives.
            </p>
            <p>
              <strong className="text-foreground">
                Building a curated SNP database.
              </strong>{" "}
              I compiled 79 SNPs across 16 health categories from published
              research, each with clinical context: mechanism of action,
              implications, recommended actions, and gene interactions. This
              isn&apos;t a raw data dump — it&apos;s an interpreted,
              actionable database.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              What I Learned
            </h2>
            <p>
              The biggest lesson wasn&apos;t technical — it was about framing.
              Privacy isn&apos;t a limitation; it&apos;s the product. By
              constraining myself to client-side-only processing, I created
              something that competing tools can&apos;t offer: absolute certainty
              that your DNA data is never exposed.
            </p>
            <p>
              This project also taught me that the best technical decisions are
              business decisions. Choosing Web Workers over a server-side
              pipeline wasn&apos;t just an engineering choice — it eliminated
              hosting costs, HIPAA concerns, and the entire category of data
              breach risk. Sometimes the simplest architecture is the smartest
              one.
            </p>
          </section>
        </div>

        <Separator />

        <div className="text-center">
          <Link
            href="/projects/genomescope"
            className="text-sm font-medium hover:underline"
          >
            Try GenomeScope →
          </Link>
        </div>
      </article>
    </div>
  );
}
