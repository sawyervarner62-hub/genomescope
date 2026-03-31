import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
  featured?: boolean;
  gradient?: boolean;
}

export function ProjectCard({
  title,
  description,
  tags,
  href,
  featured = false,
  gradient = false,
}: ProjectCardProps) {
  const isExternal = href.startsWith("http");
  const Wrapper = isExternal ? "a" : Link;
  const wrapperProps = isExternal
    ? { href, target: "_blank" as const, rel: "noopener noreferrer" }
    : { href };

  return (
    <Wrapper {...wrapperProps} className={`block break-inside-avoid mb-4 ${featured ? "sm:col-span-2" : ""}`}>
      <Card className="group hover:border-primary/50 transition-colors h-full">
        {/* Thumbnail placeholder */}
        <div
          className={`w-full rounded-t-lg ${featured ? "h-48" : "h-32"}`}
          style={
            gradient
              ? {
                  backgroundImage:
                    "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
                }
              : { backgroundColor: "var(--muted)" }
          }
        />
        <CardHeader className="pb-2">
          <CardTitle className={featured ? "text-xl" : "text-base"}>
            {title}
            {featured && (
              <Badge className="ml-2 text-xs" variant="secondary">
                Featured
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <p className="text-sm font-medium group-hover:underline">
            {featured ? "Try It Live →" : "View Project →"}
          </p>
        </CardContent>
      </Card>
    </Wrapper>
  );
}
