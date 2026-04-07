import { Card, CardContent } from "@/components/ui/card";
import { FileUp, Cpu, Dna, BarChart3, Shield } from "lucide-react";

const steps = [
  {
    icon: FileUp,
    label: "File Upload",
    description: "Drag & drop your raw data",
  },
  {
    icon: Cpu,
    label: "Web Worker",
    description: "Parses 600K+ lines in background",
  },
  {
    icon: Dna,
    label: "SNP Matcher",
    description: "Matches against 79 curated variants",
  },
  {
    icon: BarChart3,
    label: "Dashboard",
    description: "Charts, findings, and reports",
  },
];

export function ArchitectureDiagram() {
  return (
    <section className="pb-20 space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold tracking-tight">How It Works</h2>
        <p className="text-sm text-muted-foreground">
          The GenomeScope data pipeline
        </p>
      </div>

      {/* Desktop: horizontal */}
      <div className="hidden sm:flex items-start justify-between gap-2">
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-start flex-1">
            <Card className="flex-1 border-border/50">
              <CardContent className="pt-5 pb-4 text-center space-y-2">
                <div
                  className="mx-auto size-10 rounded-lg flex items-center justify-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
                  }}
                >
                  <step.icon className="size-5 text-white" />
                </div>
                <p className="font-medium text-sm">{step.label}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
            {i < steps.length - 1 && (
              <span className="text-muted-foreground/40 text-xl px-1 pt-8 shrink-0">
                →
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Mobile: vertical */}
      <div className="sm:hidden space-y-2">
        {steps.map((step, i) => (
          <div key={step.label}>
            <Card className="border-border/50">
              <CardContent className="py-4 flex items-center gap-4">
                <div
                  className="size-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
                  }}
                >
                  <step.icon className="size-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-sm">{step.label}</p>
                  <p className="text-xs text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </CardContent>
            </Card>
            {i < steps.length - 1 && (
              <div className="flex justify-center py-1">
                <span className="text-muted-foreground/40 text-lg">↓</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <Shield className="size-3.5" />
        Your data never leaves your browser — all processing happens locally.
      </div>
    </section>
  );
}
