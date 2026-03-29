import { AnalysisResults, Finding } from "@/types/genome";
import { CLINICAL_CONTEXT } from "./clinical-context";
import { PATHWAYS } from "./pathways";

function formatMagnitude(mag: number): string {
  if (mag >= 3) return `HIGH (${mag}/6)`;
  if (mag === 2) return `MODERATE (${mag}/6)`;
  if (mag === 1) return `LOW (${mag}/6)`;
  return `NEUTRAL (${mag}/6)`;
}

function getClinicalContext(gene: string, status: string) {
  return CLINICAL_CONTEXT[`${gene}|${status}`] ?? null;
}

function getRelatedPathways(gene: string): string[] {
  return Object.entries(PATHWAYS)
    .filter(([, genes]) => genes.includes(gene))
    .map(([name]) => name);
}

export function generateMarkdownReport(results: AnalysisResults): string {
  const { findings, summary } = results;
  const lines: string[] = [];

  // Header
  lines.push("# GenomeScope Genetic Health Report");
  lines.push("");
  lines.push(`**Generated:** ${new Date().toISOString().slice(0, 16).replace("T", " ")}`);
  lines.push("");
  lines.push("---");
  lines.push("");

  // Executive summary
  lines.push("## Executive Summary");
  lines.push("");
  lines.push(`- **Total SNPs in Raw Data:** ${summary.totalSNPs.toLocaleString()}`);
  lines.push(`- **Clinically Relevant SNPs Analyzed:** ${summary.analyzedSNPs}`);
  lines.push("");
  lines.push("### Impact Distribution");
  lines.push(`- **High Impact (magnitude >= 3):** ${summary.highImpact}`);
  lines.push(`- **Moderate Impact (magnitude 2):** ${summary.moderateImpact}`);
  lines.push(`- **Low Impact (magnitude 1):** ${summary.lowImpact}`);
  lines.push(
    `- **Informational (magnitude 0):** ${summary.analyzedSNPs - summary.highImpact - summary.moderateImpact - summary.lowImpact}`
  );
  lines.push("");
  lines.push("---");
  lines.push("");

  // Priority findings
  const highImpact = findings.filter((f) => f.magnitude >= 3);
  if (highImpact.length > 0) {
    lines.push("## Priority Findings (High Impact)");
    lines.push("");
    for (const [i, finding] of highImpact.entries()) {
      lines.push(...formatFinding(finding, i + 1));
    }
  }

  // Moderate
  const modImpact = findings.filter((f) => f.magnitude === 2);
  if (modImpact.length > 0) {
    lines.push("## Moderate Impact Findings");
    lines.push("");
    for (const [i, finding] of modImpact.entries()) {
      lines.push(...formatFinding(finding, i + 1));
    }
  }

  // Pathway analysis
  lines.push("## Pathway Analysis");
  lines.push("");
  for (const [pathwayName, pathwayGenes] of Object.entries(PATHWAYS)) {
    const pathwayFindings = findings.filter((f) => pathwayGenes.includes(f.gene));
    if (pathwayFindings.length === 0) continue;

    lines.push(`### ${pathwayName}`);
    lines.push("");
    for (const finding of pathwayFindings) {
      const icon = finding.magnitude >= 3 ? "HIGH" : finding.magnitude === 2 ? "MOD" : "LOW";
      lines.push(`- [${icon}] **${finding.gene}:** ${finding.status.replace(/_/g, " ")}`);
    }
    lines.push("");
    lines.push("---");
    lines.push("");
  }

  // Disclaimer
  lines.push("## Disclaimer");
  lines.push("");
  lines.push("This report is for **informational and educational purposes only**. It is NOT medical advice.");
  lines.push("");
  lines.push("- Genetic associations are probabilistic, not deterministic");
  lines.push("- Consult healthcare providers before making medical decisions");
  lines.push("- Genetic science evolves — recommendations may change");
  lines.push("");

  return lines.join("\n");
}

function formatFinding(finding: Finding, index: number): string[] {
  const lines: string[] = [];
  lines.push(`### ${index}. ${finding.gene} (${finding.rsid})`);
  lines.push("");
  lines.push(`**Category:** ${finding.category}  `);
  lines.push(`**Your Genotype:** \`${finding.genotype}\`  `);
  lines.push(`**Status:** ${finding.status.replace(/_/g, " ")}  `);
  lines.push(`**Impact:** ${formatMagnitude(finding.magnitude)}`);
  lines.push("");
  lines.push(`**Description:** ${finding.description}`);

  if (finding.note) {
    lines.push("");
    lines.push(`**Note:** ${finding.note}`);
  }

  const pathways = getRelatedPathways(finding.gene);
  if (pathways.length > 0) {
    lines.push("");
    lines.push(`**Related Pathways:** ${pathways.join(", ")}`);
  }

  const context = getClinicalContext(finding.gene, finding.status);
  if (context) {
    lines.push("");
    lines.push("#### Mechanism");
    lines.push(context.mechanism);

    if (context.implications.length > 0) {
      lines.push("");
      lines.push("#### Implications");
      for (const imp of context.implications) {
        lines.push(`- ${imp}`);
      }
    }

    if (context.actions.length > 0) {
      lines.push("");
      lines.push("#### Recommended Actions");
      for (const action of context.actions) {
        lines.push(`- ${action}`);
      }
    }

    if (context.interactions.length > 0) {
      lines.push("");
      lines.push("#### Gene Interactions");
      for (const interaction of context.interactions) {
        lines.push(`- ${interaction}`);
      }
    }
  }

  lines.push("");
  lines.push("---");
  lines.push("");

  return lines;
}

export function generateJSONExport(results: AnalysisResults): string {
  return JSON.stringify(results, null, 2);
}

export function downloadFile(content: string, filename: string, mimeType: string): void {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
