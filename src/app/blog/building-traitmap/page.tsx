import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { TagList } from "@/components/ui/tag-list";
import { JsonLd, blogPostingSchema } from "@/components/seo/json-ld";
import { SITE_URL, getOgImageUrl } from "@/lib/seo";

const tags = ["Next.js", "Web Workers", "Privacy", "Bioinformatics"];

const POST = {
  title: "How I Built a Privacy-First Genome Analyzer",
  description:
    "The architecture decisions, technical challenges, and lessons learned from building a client-side genetic analysis tool.",
  slug: "building-traitmap",
  datePublished: "2026-04-15",
};

export const metadata: Metadata = {
  title: POST.title,
  description: POST.description,
  alternates: { canonical: `/blog/${POST.slug}` },
  openGraph: {
    type: "article",
    title: POST.title,
    description: POST.description,
    url: `${SITE_URL}/blog/${POST.slug}`,
    publishedTime: POST.datePublished,
    authors: ["Sawyer Varner"],
    tags,
    images: [getOgImageUrl(POST.title, POST.description)],
  },
  twitter: {
    card: "summary_large_image",
    title: POST.title,
    description: POST.description,
    images: [getOgImageUrl(POST.title, POST.description)],
  },
};

export default function BuildingTraitmapPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <JsonLd data={blogPostingSchema(POST)} />
      <Link
        href="/blog"
        className="link-accent inline-flex items-center gap-2 mono-spec text-steel hover:text-viridian transition-colors duration-200 mb-12 hero-fade-in"
      >
        <ArrowLeft className="size-4" />
        Back to Blog
      </Link>

      <article className="space-y-10">
        {/* Header */}
        <div className="space-y-4 hero-fade-in hero-delay-1">
          <p className="eyebrow">
            <time dateTime={POST.datePublished}>April 2026</time> / Essay
          </p>
          <h1 className="text-display-sm text-ink leading-tight">
            How I Built a Privacy-First Genome Analyzer
          </h1>
          <TagList tags={tags} />
        </div>

        <hr className="rule-accent hero-fade-in hero-delay-2" />

        {/* Article content */}
        <div className="space-y-10 hero-fade-in hero-delay-3">
          <section className="space-y-4">
            <h2 className="font-display text-xl font-semibold text-ink">
              The Problem
            </h2>
            <p className="text-ink-soft leading-relaxed">
              When I started exploring genetic data analysis, I noticed
              something troubling: most tools that analyze your 23andMe or
              AncestryDNA raw data require you to upload your most personal
              information, your DNA, to a third-party server. Some of these
              services store your data indefinitely, and you have no real
              guarantee of how it&apos;s used.
            </p>
            <p className="text-ink-soft leading-relaxed">
              I asked myself: does genome analysis actually need a server? The
              answer turned out to be no. Every step, parsing the file, matching
              SNPs, looking up clinical context, can happen entirely in your
              browser.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-semibold text-ink">
              The Architecture
            </h2>
            <p className="text-ink-soft leading-relaxed">
              Traitmap is built on a simple but powerful idea: your genome data
              never leaves your device. Here&apos;s how it works:
            </p>
            <ol className="list-decimal list-inside space-y-3 pl-2 text-ink-soft leading-relaxed">
              <li>
                You drop your raw data file (a{" "}
                <code className="font-mono bg-paper-deep px-1.5 py-0.5 text-sm text-viridian">
                  .txt
                </code>{" "}
                file from 23andMe) into the browser
              </li>
              <li>
                A{" "}
                <code className="font-mono bg-paper-deep px-1.5 py-0.5 text-sm text-viridian">
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
            <p className="text-ink-soft leading-relaxed">
              The entire application is a Next.js static site. There are no API
              calls during analysis, no database writes, no cookies. When you
              close the tab, your data is gone.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-semibold text-ink">
              Technical Challenges
            </h2>
            <p className="text-ink-soft leading-relaxed">
              <strong className="text-ink font-semibold">
                Parsing 600K lines without freezing the UI.
              </strong>{" "}
              A typical 23andMe raw data file has 600,000+ lines. Parsing this
              on the main thread would lock the browser for several seconds. I
              used a{" "}
              <code className="font-mono bg-paper-deep px-1.5 py-0.5 text-sm text-viridian">
                Web Worker
              </code>{" "}
              to offload parsing to a background thread, posting progress
              updates every 50,000 lines so the UI stays responsive with a live
              progress bar.
            </p>
            <p className="text-ink-soft leading-relaxed">
              <strong className="text-ink font-semibold">
                Bidirectional genotype matching.
              </strong>{" "}
              Genotypes can be reported in either direction. &quot;AG&quot; and
              &quot;GA&quot; are the same thing genetically, but different
              strings. The matcher tries both orientations against the database
              to avoid false negatives.
            </p>
            <p className="text-ink-soft leading-relaxed">
              <strong className="text-ink font-semibold">
                Building a curated SNP database.
              </strong>{" "}
              I compiled 79 SNPs across 16 health categories from published
              research, each with clinical context: mechanism of action,
              implications, recommended actions, and gene interactions. This
              isn&apos;t a raw data dump, it&apos;s an interpreted, actionable
              database.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-semibold text-ink">
              What I Learned
            </h2>
            <p className="text-ink-soft leading-relaxed">
              The biggest lesson wasn&apos;t technical, it was about framing.
              Privacy isn&apos;t a limitation; it&apos;s the product. By
              constraining myself to client-side-only processing, I created
              something competing tools can&apos;t offer: absolute certainty
              that your DNA data is never exposed.
            </p>
            <p className="text-ink-soft leading-relaxed">
              This project also taught me that the best technical decisions are
              business decisions. Choosing Web Workers over a server-side
              pipeline wasn&apos;t just an engineering choice, it eliminated
              hosting costs, HIPAA concerns, and the entire category of data
              breach risk. Sometimes the simplest architecture is the smartest
              one.
            </p>
          </section>
        </div>

        <hr className="rule-accent" />

        <div className="py-2">
          <Link
            href="/projects/traitmap"
            className="btn btn-accent"
          >
            Try Traitmap
            <span aria-hidden>→</span>
          </Link>
        </div>
      </article>
    </div>
  );
}
