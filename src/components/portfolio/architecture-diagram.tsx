import { FileUp, Cpu, Dna, BarChart3, Shield } from "lucide-react";

const steps = [
  {
    icon: FileUp,
    label: "File Upload",
    description: "Drag and drop your raw data file",
  },
  {
    icon: Cpu,
    label: "Web Worker",
    description: "Parses 600K+ lines off the main thread",
  },
  {
    icon: Dna,
    label: "SNP Matcher",
    description: "Matches against 79 curated variants",
  },
  {
    icon: BarChart3,
    label: "Dashboard",
    description: "Charts, findings, and exportable reports",
  },
];

export function ArchitectureDiagram() {
  return (
    <section className="pb-16 space-y-8">
      <div className="flex items-baseline gap-4">
        <span className="spec-index">00</span>
        <div>
          <h2 className="text-display-sm">How It Works</h2>
          <p className="mono-spec mt-1">The Traitmap data pipeline</p>
        </div>
      </div>

      <div className="grid gap-px bg-rule sm:grid-cols-4 border border-rule">
        {steps.map((step, i) => (
          <div
            key={step.label}
            className="bg-ink-elevated p-5 flex flex-col gap-3"
          >
            <div className="flex items-center justify-between">
              <span className="spec-index text-xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <step.icon className="size-5 text-viridian" strokeWidth={1.5} />
            </div>
            <div>
              <p className="font-display text-base font-semibold text-paper-text">
                {step.label}
              </p>
              <p className="mt-1 text-xs text-steel-light leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="mono-spec inline-flex items-center gap-2 text-steel-light">
        <Shield className="size-3.5 text-viridian" />
        Your data never leaves your browser. All processing happens locally.
      </p>
    </section>
  );
}
