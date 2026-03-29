"use client";

import { ParseProgress as ParseProgressType } from "@/types/genome";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ParseProgressProps {
  progress: ParseProgressType;
  phase: "parsing" | "analyzing";
}

export function ParseProgress({ progress, phase }: ParseProgressProps) {
  return (
    <div className="w-full max-w-lg mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">
            {phase === "parsing" ? "Parsing Genome File..." : "Analyzing SNPs..."}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Progress value={phase === "analyzing" ? 100 : progress.percent} />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>
              {progress.linesProcessed.toLocaleString()} /{" "}
              {progress.totalLines.toLocaleString()} lines
            </span>
            <span>{progress.snpsFound.toLocaleString()} SNPs found</span>
          </div>
          {phase === "analyzing" && (
            <p className="text-center text-sm text-muted-foreground animate-pulse">
              Matching against 79 curated SNPs...
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
