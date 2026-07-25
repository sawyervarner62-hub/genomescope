"use client";

import { useCountUp } from "@/hooks/use-count-up";

const metrics = [
  { target: 79, label: "Curated SNPs", suffix: "" },
  { target: 16, label: "Health Categories", suffix: "" },
  { target: 0, label: "Bytes to Servers", suffix: "" },
  { target: 3, label: "Second Analysis", prefix: "<", suffix: "s" },
];

export function MetricsBanner() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 border-y border-rule-paper divide-x divide-rule-paper">
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
}: {
  target: number;
  label: string;
  prefix?: string;
  suffix?: string;
  index: number;
}) {
  const value = useCountUp(target);

  return (
    <div className="px-4 py-8 text-center sm:text-left">
      <p className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-ink tabular-nums">
        {prefix}
        {value}
        {suffix}
      </p>
      <p className="mt-2 mono-spec">{label}</p>
    </div>
  );
}
