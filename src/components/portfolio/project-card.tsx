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
  isLive?: boolean;
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
  isLive = false,
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
      <Card className="group overflow-hidden border-border/30 bg-card/60 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_40px_-12px] hover:shadow-primary/20 h-full">
        {/* Icon + gradient thumbnail with inner glow */}
        <div
          className={`relative w-full flex items-center justify-center overflow-hidden ${
            featured ? "h-48" : "h-36"
          }`}
          style={{
            backgroundImage: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
          }}
        >
          {/* Animated shimmer on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

          <Icon
            className={`text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-500 ${
              featured ? "size-16" : "size-10"
            }`}
            strokeWidth={1.5}
          />
          {isLive && (
            <Badge className="absolute top-3 left-3 bg-green-500/20 text-green-300 border-green-400/30 backdrop-blur-md text-xs gap-1.5">
              <span className="size-1.5 rounded-full bg-green-400 animate-pulse" />
              Live
            </Badge>
          )}
          {featured && (
            <Badge className="absolute top-3 right-3 bg-white/10 text-white/90 border-white/20 backdrop-blur-md text-xs">
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
              <Badge
                key={tag}
                variant="outline"
                className="text-xs font-normal border-border/40 bg-background/30"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <p className="text-sm font-medium group-hover:translate-x-1.5 transition-transform duration-300">
            {featured ? "Try It Live" : "View Project"}{" "}
            <span className="inline-block group-hover:translate-x-0.5 transition-transform duration-300">
              →
            </span>
          </p>
        </CardContent>
      </Card>
    </Wrapper>
  );
}
