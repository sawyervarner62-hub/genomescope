export interface VariantInfo {
  status: string;
  desc: string;
  magnitude: number;
}

export interface SNPEntry {
  gene: string;
  category: SNPCategory;
  note?: string;
  variants: Record<string, VariantInfo>;
}

export type SNPCategory =
  | "Drug Metabolism"
  | "Methylation"
  | "Detoxification"
  | "Neurotransmitters"
  | "Caffeine Response"
  | "Sleep/Circadian"
  | "Fitness"
  | "Nutrition"
  | "Cardiovascular"
  | "Inflammation"
  | "Iron Metabolism"
  | "Autoimmune"
  | "Skin"
  | "Longevity"
  | "Respiratory"
  | "Alcohol";

export interface GenomeSNP {
  chromosome: string;
  position: string;
  genotype: string;
}

export interface Finding {
  rsid: string;
  gene: string;
  category: SNPCategory;
  genotype: string;
  status: string;
  description: string;
  magnitude: number;
  note: string;
}

export interface ClinicalContextEntry {
  mechanism: string;
  implications: string[];
  actions: string[];
  interactions: string[];
}

export interface AnalysisResults {
  findings: Finding[];
  byCategory: Record<string, Finding[]>;
  summary: {
    totalSNPs: number;
    analyzedSNPs: number;
    highImpact: number;
    moderateImpact: number;
    lowImpact: number;
  };
}

export interface ParseProgress {
  linesProcessed: number;
  totalLines: number;
  snpsFound: number;
  percent: number;
}

export type AnalysisPhase = "idle" | "parsing" | "analyzing" | "complete" | "error";
