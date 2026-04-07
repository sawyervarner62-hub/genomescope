import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";

const posts = [
  {
    slug: "building-genomescope",
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
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="size-4" />
        Back to Portfolio
      </Link>

      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Blog</h1>

        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="group hover:border-primary/50 transition-colors">
              <CardHeader>
                <p className="text-xs text-muted-foreground">{post.date}</p>
                <CardTitle className="group-hover:underline">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {post.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
