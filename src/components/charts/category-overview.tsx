"use client";

import { AnalysisResults } from "@/types/genome";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

interface CategoryOverviewProps {
  results: AnalysisResults;
}

export function CategoryOverview({ results }: CategoryOverviewProps) {
  const data = Object.entries(results.byCategory)
    .map(([category, findings]) => ({
      category: category.length > 15 ? category.slice(0, 13) + "..." : category,
      fullName: category,
      total: findings.length,
      high: findings.filter((f) => f.magnitude >= 3).length,
    }))
    .sort((a, b) => b.total - a.total);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Findings by Category</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} layout="vertical" margin={{ left: 100 }}>
            <XAxis type="number" allowDecimals={false} />
            <YAxis
              type="category"
              dataKey="category"
              width={100}
              tick={{ fontSize: 12 }}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length > 0) {
                  const item = payload[0].payload as (typeof data)[0];
                  return (
                    <div className="bg-popover border rounded-md p-2 text-sm shadow-md">
                      <p className="font-medium">{item.fullName}</p>
                      <p>Total: {item.total}</p>
                      {item.high > 0 && (
                        <p className="text-red-400">High impact: {item.high}</p>
                      )}
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="total" radius={[0, 4, 4, 0]}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.high > 0 ? "#ef4444" : "#6b7280"}
                  fillOpacity={0.7}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
