import { cn } from "@/lib/utils";

/**
 * Shimmering placeholder block. Set width/height via className. The shimmer
 * sweep is disabled under prefers-reduced-motion (see globals.css). On dark
 * (ink) surfaces pass `variant="ink"` so the base tint stays visible.
 */
export function Skeleton({
  className,
  variant = "paper",
}: {
  className?: string;
  variant?: "paper" | "ink";
}) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn(
        "relative overflow-hidden rounded",
        variant === "ink" ? "bg-white/10" : "bg-black/10",
        "after:absolute after:inset-0 after:animate-shimmer after:bg-[length:200%_100%]",
        variant === "ink"
          ? "after:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)]"
          : "after:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.45),transparent)]",
        className
      )}
    />
  );
}
