"use client";

import { useCountUp } from "@/hooks/use-count-up";

const metrics = [
  { target: 79, label: "Curated SNPs", suffix: "" },
  { target: 16, label: "Health Categories", suffix: "" },
  { target: 0, label: "Bytes Sent to Servers", suffix: "" },
  { target: 3, label: "Second Analysis", prefix: "<", suffix: "s" },
];

export function MetricsBanner() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-10">
      {metrics.map((metric, i) => (
        <MetricItem key={metric.label} {...metric} index={i} />
      ))}
    </div>
  );
}

function MetricItem({
  target,
  label,
  prefix,
  suffix,
  index,
}: {
  target: number;
  label: string;
  prefix?: string;
  suffix?: string;
  index: number;
}) {
  const value = useCountUp(target);

  return (
    <div
      className="text-center space-y-1.5 relative"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <p
        className="text-4xl sm:text-5xl font-bold tracking-tighter bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(180deg, oklch(0.9 0.05 270), oklch(0.6 0.1 270))",
        }}
      >
        {prefix}
        {value}
        {suffix}
      </p>
      <p className="text-xs sm:text-sm text-muted-foreground/70">{label}</p>
    </div>
  );
}
