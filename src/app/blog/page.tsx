import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { TagList } from "@/components/ui/tag-list";
import { SITE_URL, getOgImageUrl } from "@/lib/seo";

const BLOG_DESCRIPTION = "Writing about what I build and what I learn.";

export const metadata: Metadata = {
  title: "Blog",
  description: BLOG_DESCRIPTION,
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    title: "Blog — Sawyer Varner",
    description: BLOG_DESCRIPTION,
    url: `${SITE_URL}/blog`,
    images: [getOgImageUrl("Blog", BLOG_DESCRIPTION)],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Sawyer Varner",
    description: BLOG_DESCRIPTION,
    images: [getOgImageUrl("Blog", BLOG_DESCRIPTION)],
  },
};

const posts = [
  {
    slug: "building-traitmap",
    title: "How I Built a Privacy-First Genome Analyzer",
    date: "April 2026",
    datePublished: "2026-04-15",
    fig: "01",
    description:
      "The architecture decisions, technical challenges, and lessons learned from building a client-side genetic analysis tool.",
    tags: ["Next.js", "Web Workers", "Privacy", "Bioinformatics"],
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <Link
        href="/"
        className="link-accent inline-flex items-center gap-2 mono-spec text-steel hover:text-viridian transition-colors duration-200 mb-12 hero-fade-in"
      >
        <ArrowLeft className="size-4" />
        Back to Portfolio
      </Link>

      <div className="space-y-10">
        <div className="space-y-2 hero-fade-in hero-delay-1">
          <p className="eyebrow">Notes</p>
          <h1 className="text-display-md text-ink">Blog</h1>
          <p className="mono-spec">Writing about what I build and what I learn</p>
        </div>

        <Reveal className="divide-y divide-rule-paper border-y border-rule-paper">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block py-8 transition-colors"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="mono-spec">FIG. {post.fig}</span>
                <time dateTime={post.datePublished} className="mono-spec">
                  {post.date}
                </time>
              </div>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink group-hover:text-viridian transition-colors duration-200">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed max-w-2xl">
                {post.description}
              </p>
              <TagList tags={post.tags} className="mt-4" />
              <p className="mt-5 text-sm font-medium text-ink inline-flex items-center gap-1.5">
                Read more
                <span className="inline-block text-viridian transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </p>
            </Link>
          ))}
        </Reveal>
      </div>
    </div>
  );
}
