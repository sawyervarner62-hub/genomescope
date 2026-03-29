import { Finding, AnalysisResults, SNPCategory } from "@/types/genome";
import { GenomeRecord } from "./genome-parser";
import { COMPREHENSIVE_SNPS } from "./snp-database";

export function analyzeGenome(genome: GenomeRecord): AnalysisResults {
  const findings: Finding[] = [];
  const byCategory: Record<string, Finding[]> = {};

  let analyzedSNPs = 0;
  let highImpact = 0;
  let moderateImpact = 0;
  let lowImpact = 0;

  for (const [rsid, snpInfo] of Object.entries(COMPREHENSIVE_SNPS)) {
    const userSNP = genome[rsid];
    if (!userSNP) continue;

    const genotype = userSNP.genotype;
    // Bidirectional matching: try genotype, then reversed
    const genotypeReversed = genotype.length === 2
      ? genotype[1] + genotype[0]
      : genotype;

    const variantInfo =
      snpInfo.variants[genotype] ?? snpInfo.variants[genotypeReversed];

    if (!variantInfo) continue;

    const finding: Finding = {
      rsid,
      gene: snpInfo.gene,
      category: snpInfo.category as SNPCategory,
      genotype,
      status: variantInfo.status,
      description: variantInfo.desc,
      magnitude: variantInfo.magnitude,
      note: snpInfo.note ?? "",
    };

    findings.push(finding);
    analyzedSNPs++;

    if (!byCategory[snpInfo.category]) {
      byCategory[snpInfo.category] = [];
    }
    byCategory[snpInfo.category].push(finding);

    if (variantInfo.magnitude >= 3) highImpact++;
    else if (variantInfo.magnitude >= 2) moderateImpact++;
    else if (variantInfo.magnitude >= 1) lowImpact++;
  }

  // Sort findings by magnitude descending
  findings.sort((a, b) => b.magnitude - a.magnitude);

  // Sort within each category too
  for (const cat of Object.keys(byCategory)) {
    byCategory[cat].sort((a, b) => b.magnitude - a.magnitude);
  }

  return {
    findings,
    byCategory,
    summary: {
      totalSNPs: Object.keys(genome).length,
      analyzedSNPs,
      highImpact,
      moderateImpact,
      lowImpact,
    },
  };
}
