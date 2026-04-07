"use client";

import { useGenomeCounter } from "@/hooks/use-genome-counter";
import { Users } from "lucide-react";

export function GenomeCountBadge() {
  const { count } = useGenomeCounter();
  if (count === null || count === 0) return null;
  return (
    <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
      <Users className="size-3.5" />
      {count} genome{count !== 1 ? "s" : ""} analyzed
    </span>
  );
}
