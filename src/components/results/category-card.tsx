"use client";

import { useState } from "react";
import { Finding } from "@/types/genome";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CategoryCardProps {
  category: string;
  findings: Finding[];
}

function magnitudeBadge(mag: number) {
  if (mag >= 3) return <Badge variant="destructive">High</Badge>;
  if (mag === 2) return <Badge className="bg-yellow-600 hover:bg-yellow-700">Mod</Badge>;
  if (mag === 1) return <Badge className="bg-green-600 hover:bg-green-700">Low</Badge>;
  return <Badge variant="secondary">Info</Badge>;
}

export function CategoryCard({ category, findings }: CategoryCardProps) {
  const [expanded, setExpanded] = useState(false);
  const highCount = findings.filter((f) => f.magnitude >= 3).length;
  const modCount = findings.filter((f) => f.magnitude === 2).length;

  return (
    <Card>
      <CardHeader
        className="cursor-pointer select-none"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{category}</CardTitle>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {findings.length} finding{findings.length !== 1 ? "s" : ""}
            </span>
            {highCount > 0 && (
              <Badge variant="destructive">{highCount} high</Badge>
            )}
            {modCount > 0 && (
              <Badge className="bg-yellow-600">{modCount} mod</Badge>
            )}
            <span className="text-muted-foreground">
              {expanded ? "\u25B2" : "\u25BC"}
            </span>
          </div>
        </div>
      </CardHeader>
      {expanded && (
        <CardContent className="space-y-3">
          {findings.map((finding) => (
            <div
              key={finding.rsid}
              className="flex items-start gap-3 p-3 rounded-lg bg-muted/50"
            >
              <div className="pt-0.5">{magnitudeBadge(finding.magnitude)}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="font-medium">{finding.gene}</span>
                  <span className="text-xs text-muted-foreground font-mono">
                    {finding.rsid}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Genotype: {finding.genotype}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {finding.description}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      )}
    </Card>
  );
}
