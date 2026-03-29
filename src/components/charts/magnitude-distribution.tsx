"use client";

import { AnalysisResults } from "@/types/genome";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

interface MagnitudeDistributionProps {
  results: AnalysisResults;
}

const COLORS = ["#ef4444", "#eab308", "#22c55e", "#6b7280"];

export function MagnitudeDistribution({ results }: MagnitudeDistributionProps) {
  const { summary } = results;
  const info =
    summary.analyzedSNPs -
    summary.highImpact -
    summary.moderateImpact -
    summary.lowImpact;

  const data = [
    { name: "High", value: summary.highImpact, color: COLORS[0] },
    { name: "Moderate", value: summary.moderateImpact, color: COLORS[1] },
    { name: "Low", value: summary.lowImpact, color: COLORS[2] },
    { name: "Info", value: info, color: COLORS[3] },
  ].filter((d) => d.value > 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Impact Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={90}
              dataKey="value"
              label={({ name, value }) => `${name}: ${value}`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
