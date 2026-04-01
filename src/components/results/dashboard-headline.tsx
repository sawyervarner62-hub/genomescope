"use client";

import { AnalysisResults } from "@/types/genome";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, Activity, ArrowDown } from "lucide-react";

interface DashboardHeadlineProps {
  results: AnalysisResults;
}

export function DashboardHeadline({ results }: DashboardHeadlineProps) {
  const { summary, findings } = results;
  const topFindings = findings.filter((f) => f.magnitude >= 3).slice(0, 3);
  const hasHighImpact = summary.highImpact > 0;

  return (
    <div className="space-y-6">
      {/* Status banner */}
      <Card
        className="border-l-4"
        style={{
          borderLeftColor: hasHighImpact
            ? "oklch(0.7 0.2 25)"
            : "oklch(0.7 0.2 145)",
        }}
      >
        <CardContent className="py-5 flex items-start gap-4">
          {hasHighImpact ? (
            <AlertTriangle className="size-6 text-yellow-500 shrink-0 mt-0.5" />
          ) : (
            <CheckCircle className="size-6 text-green-500 shrink-0 mt-0.5" />
          )}
          <div className="space-y-1">
            <h2 className="font-semibold text-lg">
              {hasHighImpact
                ? `${summary.highImpact} High-Impact Finding${summary.highImpact > 1 ? "s" : ""} Detected`
                : "No High-Impact Findings"}
            </h2>
            <p className="text-sm text-muted-foreground">
              {hasHighImpact
                ? "Review the findings below. High-impact variants may be worth discussing with a healthcare provider."
                : "Your analyzed SNPs show mostly low-impact or informational variants. See the detailed breakdown below."}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Quick stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <QuickStat
          label="SNPs in File"
          value={summary.totalSNPs.toLocaleString()}
          icon={<Activity className="size-4" />}
        />
        <QuickStat
          label="Matched"
          value={`${summary.analyzedSNPs} of 79`}
          icon={<Activity className="size-4" />}
        />
        <QuickStat
          label="High Impact"
          value={String(summary.highImpact)}
          variant={summary.highImpact > 0 ? "warning" : "default"}
          icon={<AlertTriangle className="size-4" />}
        />
        <QuickStat
          label="Categories"
          value={String(Object.keys(results.byCategory).length)}
          icon={<Activity className="size-4" />}
        />
      </div>

      {/* Top concerns (if any) */}
      {topFindings.length > 0 && (
        <Card>
          <CardContent className="py-5 space-y-3">
            <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
              Priority Findings
            </h3>
            {topFindings.map((f) => (
              <div
                key={f.rsid}
                className="flex items-start gap-3 p-3 rounded-lg bg-muted/30"
              >
                <Badge variant="destructive" className="shrink-0 mt-0.5">
                  {f.magnitude}/6
                </Badge>
                <div className="min-w-0">
                  <p className="font-medium text-sm">
                    {f.gene}{" "}
                    <span className="text-muted-foreground font-mono text-xs">
                      {f.rsid}
                    </span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Navigation guide */}
      <div className="text-center space-y-2 py-4">
        <p className="text-sm text-muted-foreground">
          Explore your results using the tabs below
        </p>
        <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
          <span><strong>Overview</strong> — charts &amp; summary</span>
          <span><strong>Categories</strong> — grouped by type</span>
          <span><strong>Pathways</strong> — biological connections</span>
          <span><strong>Export</strong> — download reports</span>
        </div>
        <ArrowDown className="size-4 mx-auto text-muted-foreground animate-bounce" />
      </div>
    </div>
  );
}

function QuickStat({
  label,
  value,
  icon,
  variant = "default",
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
  variant?: "default" | "warning";
}) {
  return (
    <Card className="border-border/50">
      <CardContent className="py-3 px-4">
        <div className="flex items-center gap-2 text-muted-foreground mb-1">
          {icon}
          <span className="text-xs">{label}</span>
        </div>
        <p
          className={`text-xl font-bold ${
            variant === "warning" ? "text-yellow-500" : ""
          }`}
        >
          {value}
        </p>
      </CardContent>
    </Card>
  );
}
