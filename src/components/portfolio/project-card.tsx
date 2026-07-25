import Link from "next/link";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { TagList } from "@/components/ui/tag-list";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
  fig: string;
  featured?: boolean;
  isLive?: boolean;
  icon: LucideIcon;
}

export function ProjectCard({
  title,
  description,
  tags,
  href,
  fig,
  featured = false,
  isLive = false,
  icon: Icon,
}: ProjectCardProps) {
  const isExternal = href.startsWith("http");
  const Wrapper = isExternal ? "a" : Link;
  const wrapperProps = isExternal
    ? { href, target: "_blank" as const, rel: "noopener noreferrer" }
    : { href };

  return (
    <Wrapper
      {...wrapperProps}
      className={cn(
        "group spec-tile flex flex-col transition-colors duration-200 hover:border-viridian",
        featured && "sm:col-span-2 sm:flex-row sm:gap-8"
      )}
    >
      {/* Figure plate — line-art icon on ink, no gradient, no glow. */}
      <div
        className={cn(
          "shrink-0 flex items-center justify-center border border-rule bg-ink text-viridian",
          featured ? "sm:w-56 h-40 sm:h-auto mb-6 sm:mb-0" : "h-32 mb-6"
        )}
      >
        <Icon
          className={featured ? "size-14" : "size-11"}
          strokeWidth={1.25}
        />
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between gap-3">
          <span className="mono-spec">FIG. {fig}</span>
          {isLive && (
            <span className="mono-spec inline-flex items-center gap-1.5 text-viridian">
              <span className="size-1.5 rounded-full bg-viridian animate-pulse" />
              LIVE
            </span>
          )}
        </div>

        <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink">
          {title}
        </h3>

        <p className="mt-2 text-sm text-ink-soft leading-relaxed">
          {description}
        </p>

        <TagList tags={tags} className="mt-4" />

        <p className="mt-5 pt-4 border-t border-rule-paper text-sm font-medium text-ink inline-flex items-center gap-1.5">
          {featured ? "Try it live" : isExternal ? "Visit site" : "View project"}
          <span className="inline-block text-viridian transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </p>
      </div>
    </Wrapper>
  );
}
