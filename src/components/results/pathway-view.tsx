"use client";

import { Finding } from "@/types/genome";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PATHWAYS } from "@/lib/pathways";

interface PathwayViewProps {
  findings: Finding[];
}

export function PathwayView({ findings }: PathwayViewProps) {
  const pathwayEntries = Object.entries(PATHWAYS)
    .map(([name, genes]) => {
      const matched = findings.filter((f) => genes.includes(f.gene));
      return { name, genes, matched };
    })
    .filter((p) => p.matched.length > 0)
    .sort((a, b) => b.matched.length - a.matched.length);

  if (pathwayEntries.length === 0) {
    return (
      <p className="text-muted-foreground text-center py-8">
        No pathway matches found.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {pathwayEntries.map(({ name, matched }) => (
        <Card key={name}>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">{name}</CardTitle>
              <Badge variant="outline">{matched.length} findings</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {matched.map((f) => (
                <div
                  key={f.rsid}
                  className="flex items-center gap-3 text-sm"
                >
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 ${
                      f.magnitude >= 3
                        ? "bg-red-400"
                        : f.magnitude === 2
                          ? "bg-yellow-400"
                          : f.magnitude === 1
                            ? "bg-green-400"
                            : "bg-muted-foreground/40"
                    }`}
                  />
                  <span className="font-medium w-20">{f.gene}</span>
                  <span className="text-muted-foreground">
                    {f.status.replace(/_/g, " ")}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
