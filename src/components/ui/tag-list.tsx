import { cn } from "@/lib/utils";

/**
 * Mono tag row with slash separators — the editorial "spec list" idiom used
 * for tech stacks and post tags. Replaces the same markup that was copy-pasted
 * across the project cards, tech stack, blog, and case study.
 */
export function TagList({
  tags,
  className,
  tagClassName,
}: {
  tags: string[];
  className?: string;
  tagClassName?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-center gap-x-3 gap-y-1 mono-spec", className)}>
      {tags.map((tag, i) => (
        <span key={tag} className="flex items-center gap-x-3">
          {i > 0 && (
            <span className="text-rule-paper" aria-hidden>
              /
            </span>
          )}
          <span className={cn("text-steel", tagClassName)}>{tag}</span>
        </span>
      ))}
    </div>
  );
}
