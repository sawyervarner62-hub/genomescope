"use client";

import { useCountUp } from "@/hooks/use-count-up";

const metrics = [
  { target: 79, label: "Curated SNPs", suffix: "" },
  { target: 16, label: "Health Categories", suffix: "" },
  { target: 0, label: "Bytes Sent to Servers", suffix: "", isStatic: false },
  { target: 3, label: "Second Analysis", prefix: "<", suffix: "s" },
];

export function MetricsBanner() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-8">
      {metrics.map((metric) => (
        <MetricItem key={metric.label} {...metric} />
      ))}
    </div>
  );
}

function MetricItem({
  target,
  label,
  prefix,
  suffix,
}: {
  target: number;
  label: string;
  prefix?: string;
  suffix?: string;
  isStatic?: boolean;
}) {
  const value = useCountUp(target);

  return (
    <div className="text-center space-y-1">
      <p className="text-3xl sm:text-4xl font-bold tracking-tight">
        {prefix}
        {value}
        {suffix}
      </p>
      <p className="text-xs sm:text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
