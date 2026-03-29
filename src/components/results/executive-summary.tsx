"use client";

import { AnalysisResults } from "@/types/genome";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExecutiveSummaryProps {
  results: AnalysisResults;
}

export function ExecutiveSummary({ results }: ExecutiveSummaryProps) {
  const { summary, findings } = results;
  const categories = [...new Set(findings.map((f) => f.category))];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total SNPs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">
              {summary.totalSNPs.toLocaleString()}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Analyzed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{summary.analyzedSNPs}</p>
            <p className="text-xs text-muted-foreground">of 79 curated</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              High Impact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-red-400">
              {summary.highImpact}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Categories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{categories.length}</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-wrap gap-2">
        <Badge variant="destructive" className="gap-1">
          {summary.highImpact} High
        </Badge>
        <Badge className="gap-1 bg-yellow-600 hover:bg-yellow-700">
          {summary.moderateImpact} Moderate
        </Badge>
        <Badge className="gap-1 bg-green-600 hover:bg-green-700">
          {summary.lowImpact} Low
        </Badge>
        <Badge variant="secondary" className="gap-1">
          {summary.analyzedSNPs - summary.highImpact - summary.moderateImpact - summary.lowImpact}{" "}
          Informational
        </Badge>
      </div>
    </div>
  );
}
