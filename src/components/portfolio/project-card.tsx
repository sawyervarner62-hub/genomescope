import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { type LucideIcon } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
  featured?: boolean;
  icon: LucideIcon;
  gradientFrom: string;
  gradientTo: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  href,
  featured = false,
  icon: Icon,
  gradientFrom,
  gradientTo,
}: ProjectCardProps) {
  const isExternal = href.startsWith("http");
  const Wrapper = isExternal ? "a" : Link;
  const wrapperProps = isExternal
    ? { href, target: "_blank" as const, rel: "noopener noreferrer" }
    : { href };

  return (
    <Wrapper
      {...wrapperProps}
      className={`block ${featured ? "sm:col-span-2" : ""}`}
    >
      <Card className="group overflow-hidden border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 h-full">
        {/* Icon + gradient thumbnail */}
        <div
          className={`relative w-full flex items-center justify-center ${
            featured ? "h-44" : "h-32"
          }`}
          style={{
            backgroundImage: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
          }}
        >
          <Icon
            className={`text-white/80 group-hover:text-white transition-colors duration-300 ${
              featured ? "size-16" : "size-10"
            }`}
            strokeWidth={1.5}
          />
          {featured && (
            <Badge className="absolute top-3 right-3 bg-white/20 text-white border-white/30 backdrop-blur-sm text-xs">
              Featured
            </Badge>
          )}
        </div>

        <CardHeader className="pb-2">
          <CardTitle className={featured ? "text-xl" : "text-base"}>
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs font-normal">
                {tag}
              </Badge>
            ))}
          </div>
          <p className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-200">
            {featured ? "Try It Live" : "View Project"}{" "}
            <span className="inline-block">→</span>
          </p>
        </CardContent>
      </Card>
    </Wrapper>
  );
}
