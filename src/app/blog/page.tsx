import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";

const posts = [
  {
    slug: "building-traitmap",
    title: "How I Built a Privacy-First Genome Analyzer",
    date: "April 2026",
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
        className="inline-flex items-center gap-2 text-sm text-muted-foreground/70 hover:text-foreground transition-colors duration-200 mb-10 animate-fade-up"
      >
        <ArrowLeft className="size-4" />
        Back to Portfolio
      </Link>

      <div className="space-y-8">
        <div className="space-y-2 animate-fade-up-delay-1">
          <h1 className="text-4xl font-bold tracking-tighter">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, oklch(0.75 0.2 280), oklch(0.65 0.22 250))",
              }}
            >
              Blog
            </span>
          </h1>
          <p className="text-sm text-muted-foreground/60">
            Writing about what I build and what I learn
          </p>
        </div>

        {posts.map((post, i) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card
              className={`group overflow-hidden border-border/30 bg-card/60 backdrop-blur-sm hover:border-primary/30 hover:shadow-[0_0_40px_-12px] hover:shadow-primary/15 transition-all duration-500 animate-fade-up-delay-${i + 2}`}
            >
              <CardHeader>
                <p className="text-xs text-muted-foreground/60">{post.date}</p>
                <CardTitle className="text-xl group-hover:text-primary/90 transition-colors duration-300">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground/80 leading-relaxed">
                  {post.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs font-normal border-border/40 bg-white/[0.02]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm font-medium group-hover:translate-x-1.5 transition-transform duration-300">
                  Read More{" "}
                  <span className="inline-block group-hover:translate-x-0.5 transition-transform duration-300">
                    →
                  </span>
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
