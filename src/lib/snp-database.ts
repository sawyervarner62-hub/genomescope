import { SNPEntry } from "@/types/genome";

export const COMPREHENSIVE_SNPS: Record<string, SNPEntry> = {
  // ============================================================
  // DRUG METABOLISM
  // ============================================================
  rs762551: {
    gene: "CYP1A2",
    category: "Drug Metabolism",
    variants: {
      AA: { status: "fast", desc: "Fast caffeine metabolizer - clears caffeine quickly, lower cardiovascular risk from coffee", magnitude: 1 },
      AC: { status: "intermediate", desc: "Intermediate caffeine metabolizer - moderate clearance, ~5-6hr half-life", magnitude: 2 },
      CC: { status: "slow", desc: "Slow caffeine metabolizer - caffeine lingers 8-12hrs, increased cardiovascular risk with high intake", magnitude: 3 },
    },
  },
  rs4244285: {
    gene: "CYP2C19",
    category: "Drug Metabolism",
    variants: {
      GG: { status: "normal", desc: "Normal CYP2C19 function - standard metabolism of clopidogrel, PPIs, antidepressants", magnitude: 1 },
      GA: { status: "intermediate", desc: "One loss-of-function allele (*2) - reduced activation of clopidogrel, may need alternative", magnitude: 3 },
      AG: { status: "intermediate", desc: "One loss-of-function allele (*2) - reduced activation of clopidogrel, may need alternative", magnitude: 3 },
      AA: { status: "poor", desc: "Poor metabolizer (*2/*2) - clopidogrel essentially inactive, PPIs accumulate, SSRIs may need dose reduction", magnitude: 4 },
    },
  },
  rs12248560: {
    gene: "CYP2C19",
    category: "Drug Metabolism",
    variants: {
      CC: { status: "normal", desc: "Normal CYP2C19 activity - standard drug metabolism", magnitude: 1 },
      CT: { status: "rapid", desc: "Rapid metabolizer (*17) - may need higher doses of PPIs, clopidogrel works well", magnitude: 2 },
      TC: { status: "rapid", desc: "Rapid metabolizer (*17) - may need higher doses of PPIs, clopidogrel works well", magnitude: 2 },
      TT: { status: "ultrarapid", desc: "Ultrarapid metabolizer (*17/*17) - drugs cleared very fast, may need dose adjustments", magnitude: 3 },
    },
  },
  rs1799853: {
    gene: "CYP2C9",
    category: "Drug Metabolism",
    variants: {
      CC: { status: "normal", desc: "Normal CYP2C9 function - standard warfarin/NSAID metabolism", magnitude: 1 },
      CT: { status: "intermediate", desc: "One reduced-function allele (*2) - warfarin dose ~20% lower, NSAIDs clear slower", magnitude: 3 },
      TC: { status: "intermediate", desc: "One reduced-function allele (*2) - warfarin dose ~20% lower, NSAIDs clear slower", magnitude: 3 },
      TT: { status: "poor", desc: "Poor metabolizer (*2/*2) - warfarin dose 30-50% lower, significant NSAID accumulation risk", magnitude: 4 },
    },
  },
  rs1057910: {
    gene: "CYP2C9",
    category: "Drug Metabolism",
    variants: {
      AA: { status: "normal", desc: "Normal CYP2C9 function - standard warfarin metabolism", magnitude: 1 },
      AC: { status: "intermediate", desc: "One *3 allele - warfarin dose ~33% lower, celecoxib accumulation possible", magnitude: 3 },
      CA: { status: "intermediate", desc: "One *3 allele - warfarin dose ~33% lower, celecoxib accumulation possible", magnitude: 3 },
      CC: { status: "poor", desc: "Poor metabolizer (*3/*3) - warfarin dose 50-70% lower, high bleeding risk", magnitude: 4 },
    },
  },
  rs9923231: {
    gene: "VKORC1",
    category: "Drug Metabolism",
    variants: {
      GG: { status: "normal", desc: "Normal warfarin sensitivity - standard dosing range (5-7mg/day typical)", magnitude: 1 },
      GA: { status: "sensitive", desc: "Increased warfarin sensitivity - typically need ~25% lower dose", magnitude: 2 },
      AG: { status: "sensitive", desc: "Increased warfarin sensitivity - typically need ~25% lower dose", magnitude: 2 },
      AA: { status: "highly_sensitive", desc: "Highly sensitive to warfarin - may need 50%+ dose reduction, higher bleeding risk", magnitude: 4 },
    },
  },
  rs4149056: {
    gene: "SLCO1B1",
    category: "Drug Metabolism",
    variants: {
      TT: { status: "normal", desc: "Normal statin transport - standard risk of myopathy", magnitude: 1 },
      TC: { status: "intermediate", desc: "Reduced statin transport - 4x increased risk of simvastatin myopathy", magnitude: 3 },
      CT: { status: "intermediate", desc: "Reduced statin transport - 4x increased risk of simvastatin myopathy", magnitude: 3 },
      CC: { status: "poor", desc: "Poor statin transport - 17x increased myopathy risk, consider alternative statins", magnitude: 4 },
    },
  },
  rs3892097: {
    gene: "CYP2D6",
    category: "Drug Metabolism",
    variants: {
      CC: { status: "normal", desc: "Normal CYP2D6 function - standard metabolism of codeine, tramadol, many antidepressants", magnitude: 1 },
      CT: { status: "intermediate", desc: "One non-functional allele (*4) - reduced codeine activation, may need dose adjustment", magnitude: 3 },
      TC: { status: "intermediate", desc: "One non-functional allele (*4) - reduced codeine activation, may need dose adjustment", magnitude: 3 },
      TT: { status: "poor", desc: "Poor metabolizer (*4/*4) - codeine/tramadol ineffective, fluoxetine levels elevated", magnitude: 4 },
    },
  },
  rs776746: {
    gene: "CYP3A5",
    category: "Drug Metabolism",
    variants: {
      CC: { status: "non_expressor", desc: "CYP3A5 non-expressor (*3/*3) - most common in Europeans, relies on CYP3A4 for tacrolimus metabolism", magnitude: 1 },
      CT: { status: "intermediate", desc: "One functional allele - intermediate tacrolimus metabolism", magnitude: 2 },
      TC: { status: "intermediate", desc: "One functional allele - intermediate tacrolimus metabolism", magnitude: 2 },
      TT: { status: "expressor", desc: "CYP3A5 expressor (*1/*1) - rapid tacrolimus clearance, may need higher doses", magnitude: 3 },
    },
  },
  rs3918290: {
    gene: "DPYD",
    category: "Drug Metabolism",
    variants: {
      CC: { status: "normal", desc: "Normal DPD enzyme - standard 5-FU/capecitabine metabolism", magnitude: 1 },
      CT: { status: "intermediate", desc: "DPD deficiency carrier - 50% dose reduction for fluoropyrimidines recommended", magnitude: 4 },
      TC: { status: "intermediate", desc: "DPD deficiency carrier - 50% dose reduction for fluoropyrimidines recommended", magnitude: 4 },
      TT: { status: "deficient", desc: "Complete DPD deficiency - fluoropyrimidines CONTRAINDICATED, potentially fatal toxicity", magnitude: 5 },
    },
  },
  rs1800460: {
    gene: "TPMT",
    category: "Drug Metabolism",
    variants: {
      CC: { status: "normal", desc: "Normal TPMT activity - standard azathioprine/6-MP dosing", magnitude: 1 },
      CT: { status: "intermediate", desc: "Intermediate TPMT activity (*3B carrier) - reduce thiopurine dose 30-70%", magnitude: 3 },
      TC: { status: "intermediate", desc: "Intermediate TPMT activity (*3B carrier) - reduce thiopurine dose 30-70%", magnitude: 3 },
      TT: { status: "deficient", desc: "TPMT deficient - thiopurines at standard dose cause severe myelosuppression, use 10% dose", magnitude: 5 },
    },
  },
  rs2395029: {
    gene: "HLA-B",
    category: "Drug Metabolism",
    variants: {
      TT: { status: "normal", desc: "Normal - no HLA-B*5701 associated risk", magnitude: 1 },
      TG: { status: "carrier", desc: "HLA-B*5701 carrier - abacavir hypersensitivity risk, must avoid abacavir (HIV treatment)", magnitude: 5 },
      GT: { status: "carrier", desc: "HLA-B*5701 carrier - abacavir hypersensitivity risk, must avoid abacavir (HIV treatment)", magnitude: 5 },
      GG: { status: "positive", desc: "HLA-B*5701 positive - abacavir CONTRAINDICATED, high risk of severe hypersensitivity reaction", magnitude: 5 },
    },
  },

  // ============================================================
  // METHYLATION
  // ============================================================
  rs1801133: {
    gene: "MTHFR",
    category: "Methylation",
    variants: {
      CC: { status: "normal", desc: "Normal MTHFR C677T - full enzyme activity, standard folate metabolism", magnitude: 1 },
      CT: { status: "reduced", desc: "Heterozygous C677T - ~65% enzyme activity, mildly reduced folate conversion", magnitude: 2 },
      TC: { status: "reduced", desc: "Heterozygous C677T - ~65% enzyme activity, mildly reduced folate conversion", magnitude: 2 },
      TT: { status: "significantly_reduced", desc: "Homozygous C677T - ~30% enzyme activity, significantly impaired folate-to-methylfolate conversion, elevated homocysteine risk", magnitude: 4 },
    },
  },
  rs1801131: {
    gene: "MTHFR",
    category: "Methylation",
    variants: {
      TT: { status: "normal", desc: "Normal MTHFR A1298C - standard enzyme function", magnitude: 1 },
      TG: { status: "reduced", desc: "Heterozygous A1298C - mildly reduced BH4 production, minor impact alone", magnitude: 2 },
      GT: { status: "reduced", desc: "Heterozygous A1298C - mildly reduced BH4 production, minor impact alone", magnitude: 2 },
      GG: { status: "significantly_reduced", desc: "Homozygous A1298C - reduced BH4 recycling, impacts neurotransmitter synthesis", magnitude: 3 },
    },
  },
  rs1805087: {
    gene: "MTR",
    category: "Methylation",
    variants: {
      AA: { status: "normal", desc: "Normal methionine synthase - standard B12-dependent methylation", magnitude: 1 },
      AG: { status: "upregulated", desc: "Upregulated MTR - increased B12 utilization, may deplete B12 faster", magnitude: 2 },
      GA: { status: "upregulated", desc: "Upregulated MTR - increased B12 utilization, may deplete B12 faster", magnitude: 2 },
      GG: { status: "significantly_upregulated", desc: "Significantly upregulated - high B12 demand, monitor levels closely", magnitude: 3 },
    },
  },
  rs1801394: {
    gene: "MTRR",
    category: "Methylation",
    variants: {
      AA: { status: "normal", desc: "Normal MTRR - efficient B12 regeneration for methylation cycle", magnitude: 1 },
      AG: { status: "reduced", desc: "Reduced MTRR efficiency - B12 recycling impaired, supplement may help", magnitude: 2 },
      GA: { status: "reduced", desc: "Reduced MTRR efficiency - B12 recycling impaired, supplement may help", magnitude: 2 },
      GG: { status: "significantly_reduced", desc: "Significantly reduced MTRR - poor B12 recycling, methylation cycle compromised especially with MTHFR variants", magnitude: 3 },
    },
  },
  rs234706: {
    gene: "CBS",
    category: "Methylation",
    variants: {
      GG: { status: "normal", desc: "Normal CBS enzyme - standard homocysteine-to-cystathionine conversion", magnitude: 1 },
      GA: { status: "upregulated", desc: "CBS upregulation - faster homocysteine clearance, may deplete homocysteine/increase taurine and ammonia", magnitude: 2 },
      AG: { status: "upregulated", desc: "CBS upregulation - faster homocysteine clearance, may deplete homocysteine/increase taurine and ammonia", magnitude: 2 },
      AA: { status: "significantly_upregulated", desc: "Significantly upregulated CBS - rapid homocysteine depletion, can drain methyl groups from cycle", magnitude: 3 },
    },
  },
  rs7946: {
    gene: "PEMT",
    category: "Methylation",
    variants: {
      CC: { status: "normal", desc: "Normal PEMT - adequate phosphatidylcholine synthesis from methylation pathway", magnitude: 1 },
      CT: { status: "reduced", desc: "Reduced PEMT activity - may need more dietary choline (eggs, liver), especially important in pregnancy", magnitude: 2 },
      TC: { status: "reduced", desc: "Reduced PEMT activity - may need more dietary choline (eggs, liver), especially important in pregnancy", magnitude: 2 },
      TT: { status: "significantly_reduced", desc: "Significantly reduced PEMT - high dietary choline requirement, risk of fatty liver if choline-deficient", magnitude: 3 },
    },
  },

  // ============================================================
  // DETOXIFICATION
  // ============================================================
  rs1801280: {
    gene: "NAT2",
    category: "Detoxification",
    variants: {
      TT: { status: "fast", desc: "Fast acetylator - rapid drug/toxin acetylation, standard isoniazid metabolism", magnitude: 1 },
      TC: { status: "intermediate", desc: "Intermediate acetylator - moderate acetylation capacity", magnitude: 2 },
      CT: { status: "intermediate", desc: "Intermediate acetylator - moderate acetylation capacity", magnitude: 2 },
      CC: { status: "slow", desc: "Slow acetylator - isoniazid toxicity risk, increased bladder cancer risk with aromatic amine exposure", magnitude: 3 },
    },
  },
  rs1799930: {
    gene: "NAT2",
    category: "Detoxification",
    variants: {
      GG: { status: "fast", desc: "Fast acetylator allele - normal NAT2 function at this position", magnitude: 1 },
      GA: { status: "intermediate", desc: "Intermediate acetylator - combined with other NAT2 SNPs determines overall phenotype", magnitude: 2 },
      AG: { status: "intermediate", desc: "Intermediate acetylator - combined with other NAT2 SNPs determines overall phenotype", magnitude: 2 },
      AA: { status: "slow", desc: "Slow acetylator at this position - contributes to overall slow acetylator phenotype", magnitude: 3 },
    },
  },
  rs1695: {
    gene: "GSTP1",
    category: "Detoxification",
    variants: {
      AA: { status: "normal", desc: "Normal GSTP1 - standard glutathione conjugation for detoxification", magnitude: 1 },
      AG: { status: "reduced", desc: "Reduced GSTP1 activity - decreased detox capacity for certain carcinogens and drugs", magnitude: 2 },
      GA: { status: "reduced", desc: "Reduced GSTP1 activity - decreased detox capacity for certain carcinogens and drugs", magnitude: 2 },
      GG: { status: "significantly_reduced", desc: "Significantly reduced GSTP1 - impaired Phase II detox, consider increasing cruciferous vegetables", magnitude: 3 },
    },
  },
  rs1138272: {
    gene: "GSTP1",
    category: "Detoxification",
    variants: {
      CC: { status: "normal", desc: "Normal GSTP1 at this position - standard detoxification", magnitude: 1 },
      CT: { status: "reduced", desc: "Reduced GSTP1 function - combined with rs1695 can significantly impair detox", magnitude: 2 },
      TC: { status: "reduced", desc: "Reduced GSTP1 function - combined with rs1695 can significantly impair detox", magnitude: 2 },
      TT: { status: "significantly_reduced", desc: "Significantly reduced GSTP1 - substantially impaired detoxification capacity", magnitude: 3 },
    },
  },
  rs4880: {
    gene: "SOD2",
    category: "Detoxification",
    variants: {
      AA: { status: "high_activity", desc: "High SOD2 (Ala/Ala) - efficient mitochondrial antioxidant defense, but may generate excess H2O2", magnitude: 2 },
      AG: { status: "intermediate", desc: "Intermediate SOD2 activity - balanced mitochondrial antioxidant function", magnitude: 1 },
      GA: { status: "intermediate", desc: "Intermediate SOD2 activity - balanced mitochondrial antioxidant function", magnitude: 1 },
      GG: { status: "low_activity", desc: "Low SOD2 (Val/Val) - reduced mitochondrial antioxidant defense, higher oxidative stress risk", magnitude: 3 },
    },
  },

  // ============================================================
  // NEUROTRANSMITTERS
  // ============================================================
  rs4680: {
    gene: "COMT",
    category: "Neurotransmitters",
    variants: {
      GG: { status: "fast", desc: "Warrior type - rapid dopamine/norepinephrine clearance, stress-resilient but may have lower baseline dopamine", magnitude: 2 },
      GA: { status: "intermediate", desc: "Balanced COMT - moderate dopamine clearance, good mix of stress resilience and cognitive function", magnitude: 1 },
      AG: { status: "intermediate", desc: "Balanced COMT - moderate dopamine clearance, good mix of stress resilience and cognitive function", magnitude: 1 },
      AA: { status: "slow", desc: "Worrier type - slow dopamine clearance, higher prefrontal dopamine, better focus but stress-sensitive", magnitude: 3 },
    },
  },
  rs4633: {
    gene: "COMT",
    category: "Neurotransmitters",
    variants: {
      CC: { status: "fast", desc: "Fast COMT (linked with rs4680 GG) - rapid catecholamine clearance", magnitude: 2 },
      CT: { status: "intermediate", desc: "Intermediate COMT activity - moderate catecholamine levels", magnitude: 1 },
      TC: { status: "intermediate", desc: "Intermediate COMT activity - moderate catecholamine levels", magnitude: 1 },
      TT: { status: "slow", desc: "Slow COMT (linked with rs4680 AA) - elevated catecholamine levels, enhanced cognition under calm conditions", magnitude: 3 },
    },
  },
  rs6265: {
    gene: "BDNF",
    category: "Neurotransmitters",
    variants: {
      CC: { status: "normal", desc: "Normal BDNF secretion (Val/Val) - standard neuroplasticity and memory formation", magnitude: 1 },
      CT: { status: "reduced", desc: "Reduced BDNF secretion (Val/Met) - may benefit more from exercise for neuroplasticity", magnitude: 2 },
      TC: { status: "reduced", desc: "Reduced BDNF secretion (Val/Met) - may benefit more from exercise for neuroplasticity", magnitude: 2 },
      TT: { status: "significantly_reduced", desc: "Significantly reduced BDNF (Met/Met) - impaired activity-dependent secretion, exercise strongly recommended", magnitude: 3 },
    },
  },
  rs25531: {
    gene: "SLC6A4",
    category: "Neurotransmitters",
    variants: {
      TT: { status: "normal", desc: "Long/long serotonin transporter - normal serotonin reuptake, typical SSRI response", magnitude: 1 },
      TC: { status: "intermediate", desc: "Long/short allele - intermediate serotonin reuptake, may be more stress-sensitive", magnitude: 2 },
      CT: { status: "intermediate", desc: "Long/short allele - intermediate serotonin reuptake, may be more stress-sensitive", magnitude: 2 },
      CC: { status: "reduced", desc: "Short/short - reduced serotonin reuptake, higher stress sensitivity, may respond differently to SSRIs", magnitude: 3 },
    },
  },
  rs1800497: {
    gene: "ANKK1/DRD2",
    category: "Neurotransmitters",
    variants: {
      CC: { status: "normal", desc: "Normal D2 receptor density - standard dopamine signaling and reward processing", magnitude: 1 },
      CT: { status: "reduced", desc: "Reduced D2 receptors (Taq1A heterozygous) - may seek more stimulation, modest addiction risk increase", magnitude: 2 },
      TC: { status: "reduced", desc: "Reduced D2 receptors (Taq1A heterozygous) - may seek more stimulation, modest addiction risk increase", magnitude: 2 },
      TT: { status: "significantly_reduced", desc: "Significantly reduced D2 density (Taq1A homozygous) - reward deficiency, higher addiction susceptibility", magnitude: 3 },
    },
  },
  rs1799971: {
    gene: "OPRM1",
    category: "Neurotransmitters",
    variants: {
      AA: { status: "normal", desc: "Normal mu-opioid receptor - standard pain sensitivity and opioid response", magnitude: 1 },
      AG: { status: "altered", desc: "Altered opioid receptor (Asn40Asp) - may need higher opioid doses, different pain perception", magnitude: 3 },
      GA: { status: "altered", desc: "Altered opioid receptor (Asn40Asp) - may need higher opioid doses, different pain perception", magnitude: 3 },
      GG: { status: "significantly_altered", desc: "Significantly altered receptor - higher opioid dose requirements, better naltrexone response for alcohol", magnitude: 3 },
    },
  },

  // ============================================================
  // CAFFEINE RESPONSE
  // ============================================================
  rs5751876: {
    gene: "ADORA2A",
    category: "Caffeine Response",
    variants: {
      CC: { status: "lower_sensitivity", desc: "Lower caffeine anxiety risk - less likely to feel jittery from caffeine", magnitude: 1 },
      CT: { status: "moderate_sensitivity", desc: "Moderate caffeine sensitivity - may experience some anxiety at higher doses", magnitude: 2 },
      TC: { status: "moderate_sensitivity", desc: "Moderate caffeine sensitivity - may experience some anxiety at higher doses", magnitude: 2 },
      TT: { status: "anxiety_prone", desc: "Caffeine-induced anxiety risk - adenosine receptor variant linked to caffeine-triggered anxiety and sleep disruption", magnitude: 3 },
    },
  },
  rs2298383: {
    gene: "ADORA2A",
    category: "Caffeine Response",
    variants: {
      CC: { status: "lower_sensitivity", desc: "Lower caffeine sensitivity - less sleep disruption from caffeine", magnitude: 1 },
      CT: { status: "moderate_sensitivity", desc: "Moderate caffeine sensitivity at ADORA2A", magnitude: 2 },
      TC: { status: "moderate_sensitivity", desc: "Moderate caffeine sensitivity at ADORA2A", magnitude: 2 },
      TT: { status: "anxiety_prone", desc: "High caffeine sensitivity - significant sleep and anxiety effects, consider limiting intake", magnitude: 3 },
    },
  },
  rs73598374: {
    gene: "ADA",
    category: "Caffeine Response",
    variants: {
      CC: { status: "normal", desc: "Normal adenosine deaminase - standard adenosine clearance and sleep pressure", magnitude: 1 },
      CT: { status: "reduced", desc: "Reduced ADA activity - higher adenosine levels, may feel sleepier and more caffeine-sensitive", magnitude: 2 },
      TC: { status: "reduced", desc: "Reduced ADA activity - higher adenosine levels, may feel sleepier and more caffeine-sensitive", magnitude: 2 },
      TT: { status: "significantly_reduced", desc: "Significantly reduced ADA - high adenosine, deep sleeper but very caffeine-sensitive", magnitude: 3 },
    },
  },

  // ============================================================
  // SLEEP / CIRCADIAN
  // ============================================================
  rs1801260: {
    gene: "CLOCK",
    category: "Sleep/Circadian",
    variants: {
      TT: { status: "normal", desc: "Normal CLOCK gene - standard circadian rhythm, typical sleep-wake preferences", magnitude: 1 },
      TC: { status: "evening_tendency", desc: "Mild evening chronotype tendency - may prefer later bedtimes", magnitude: 2 },
      CT: { status: "evening_tendency", desc: "Mild evening chronotype tendency - may prefer later bedtimes", magnitude: 2 },
      CC: { status: "evening_type", desc: "Strong evening chronotype - night owl tendency, may struggle with early schedules, delayed melatonin onset", magnitude: 3 },
    },
  },
  rs57875989: {
    gene: "ARNTL",
    category: "Sleep/Circadian",
    variants: {
      CC: { status: "normal", desc: "Normal ARNTL/BMAL1 - standard circadian master clock function", magnitude: 1 },
      CT: { status: "altered", desc: "Altered circadian rhythm - may have less robust sleep-wake cycling", magnitude: 2 },
      TC: { status: "altered", desc: "Altered circadian rhythm - may have less robust sleep-wake cycling", magnitude: 2 },
      TT: { status: "significantly_altered", desc: "Significantly altered circadian rhythm - fragile sleep-wake cycle, benefit from strict light/dark schedules", magnitude: 3 },
    },
  },
  rs12649507: {
    gene: "PER2",
    category: "Sleep/Circadian",
    variants: {
      AA: { status: "normal", desc: "Normal PER2 - standard circadian period length", magnitude: 1 },
      AG: { status: "morning_tendency", desc: "Mild morning chronotype tendency - may naturally wake earlier", magnitude: 2 },
      GA: { status: "morning_tendency", desc: "Mild morning chronotype tendency - may naturally wake earlier", magnitude: 2 },
      GG: { status: "morning_type", desc: "Strong morning chronotype - early bird, advanced sleep phase tendency", magnitude: 2 },
    },
  },
  rs28532698: {
    gene: "MTNR1B",
    category: "Sleep/Circadian",
    variants: {
      CC: { status: "normal", desc: "Normal melatonin receptor - standard melatonin signaling and glucose regulation", magnitude: 1 },
      CG: { status: "altered", desc: "Altered melatonin signaling - increased type 2 diabetes risk, late eating may worsen glucose control", magnitude: 2 },
      GC: { status: "altered", desc: "Altered melatonin signaling - increased type 2 diabetes risk, late eating may worsen glucose control", magnitude: 2 },
      GG: { status: "significantly_altered", desc: "Significantly altered melatonin receptor - higher T2D risk, avoid late-night eating, melatonin supplements may impair glucose", magnitude: 3 },
    },
  },

  // ============================================================
  // FITNESS
  // ============================================================
  rs1815739: {
    gene: "ACTN3",
    category: "Fitness",
    variants: {
      CC: { status: "power", desc: "Alpha-actinin-3 present (R/R) - full fast-twitch muscle fiber function, sprint/power advantage", magnitude: 2 },
      CT: { status: "mixed", desc: "Heterozygous (R/X) - mixed fiber type, good all-around athletic potential", magnitude: 1 },
      TC: { status: "mixed", desc: "Heterozygous (R/X) - mixed fiber type, good all-around athletic potential", magnitude: 1 },
      TT: { status: "endurance", desc: "Alpha-actinin-3 deficient (X/X) - no fast-twitch optimization, endurance advantage, ~18% of population", magnitude: 2 },
    },
  },
  rs4994: {
    gene: "ADRB3",
    category: "Fitness",
    variants: {
      CC: { status: "normal", desc: "Normal beta-3 adrenergic receptor - standard fat mobilization during exercise", magnitude: 1 },
      CT: { status: "reduced", desc: "Reduced fat mobilization - Trp64Arg variant, may have harder time losing visceral fat", magnitude: 2 },
      TC: { status: "reduced", desc: "Reduced fat mobilization - Trp64Arg variant, may have harder time losing visceral fat", magnitude: 2 },
      TT: { status: "significantly_reduced", desc: "Significantly reduced fat mobilization - higher visceral fat tendency, benefit from high-intensity exercise", magnitude: 3 },
    },
  },
  rs1042713: {
    gene: "ADRB2",
    category: "Fitness",
    variants: {
      GG: { status: "gly16", desc: "Gly16 homozygous - enhanced exercise bronchodilation but faster receptor downregulation", magnitude: 2 },
      GA: { status: "heterozygous", desc: "Gly16/Arg16 - intermediate beta-2 receptor function", magnitude: 1 },
      AG: { status: "heterozygous", desc: "Gly16/Arg16 - intermediate beta-2 receptor function", magnitude: 1 },
      AA: { status: "arg16", desc: "Arg16 homozygous - more resistant to receptor downregulation, may respond better to beta-agonists long-term", magnitude: 2 },
    },
  },
  rs8192678: {
    gene: "PPARGC1A",
    category: "Fitness",
    variants: {
      CC: { status: "normal", desc: "Normal PGC-1alpha - standard mitochondrial biogenesis and endurance training response", magnitude: 1 },
      CT: { status: "reduced", desc: "Reduced PGC-1alpha activity - may need more training volume for same endurance gains", magnitude: 2 },
      TC: { status: "reduced", desc: "Reduced PGC-1alpha activity - may need more training volume for same endurance gains", magnitude: 2 },
      TT: { status: "significantly_reduced", desc: "Significantly reduced PGC-1alpha - lower mitochondrial response to exercise, focus on consistency", magnitude: 3 },
    },
  },
  rs4253778: {
    gene: "PPARA",
    category: "Fitness",
    variants: {
      GG: { status: "endurance", desc: "PPARA endurance variant - enhanced fat oxidation during exercise, favors endurance performance", magnitude: 2 },
      GC: { status: "mixed", desc: "Mixed PPARA - balanced fat/carb utilization during exercise", magnitude: 1 },
      CG: { status: "mixed", desc: "Mixed PPARA - balanced fat/carb utilization during exercise", magnitude: 1 },
      CC: { status: "power", desc: "PPARA power variant - favors glucose metabolism, may suit power/sprint activities", magnitude: 2 },
    },
  },
  rs1799752: {
    gene: "ACE",
    category: "Fitness",
    variants: {
      DD: { status: "power", desc: "ACE DD genotype - higher ACE activity, favors power/strength, higher blood pressure tendency", magnitude: 2 },
      DI: { status: "mixed", desc: "ACE ID genotype - intermediate ACE activity, balanced power/endurance", magnitude: 1 },
      ID: { status: "mixed", desc: "ACE ID genotype - intermediate ACE activity, balanced power/endurance", magnitude: 1 },
      II: { status: "endurance", desc: "ACE II genotype - lower ACE activity, endurance advantage, better altitude adaptation", magnitude: 2 },
      GG: { status: "power", desc: "ACE DD equivalent - higher ACE activity, power/strength phenotype", magnitude: 2 },
      GA: { status: "mixed", desc: "ACE ID equivalent - intermediate ACE activity", magnitude: 1 },
      AG: { status: "mixed", desc: "ACE ID equivalent - intermediate ACE activity", magnitude: 1 },
      AA: { status: "endurance", desc: "ACE II equivalent - lower ACE activity, endurance phenotype", magnitude: 2 },
    },
  },
  rs7181866: {
    gene: "AGT",
    category: "Fitness",
    variants: {
      CC: { status: "normal", desc: "Normal angiotensinogen - standard blood pressure response to exercise", magnitude: 1 },
      CT: { status: "elevated", desc: "Elevated angiotensinogen - may have higher blood pressure response to exercise", magnitude: 2 },
      TC: { status: "elevated", desc: "Elevated angiotensinogen - may have higher blood pressure response to exercise", magnitude: 2 },
      TT: { status: "high", desc: "High angiotensinogen - significant blood pressure response, monitor during intense exercise", magnitude: 3 },
    },
  },
  rs1800012: {
    gene: "COL1A1",
    category: "Fitness",
    variants: {
      GG: { status: "normal", desc: "Normal collagen type I - standard tendon/ligament strength", magnitude: 1 },
      GT: { status: "reduced", desc: "Altered collagen structure - may have increased soft tissue injury risk", magnitude: 2 },
      TG: { status: "reduced", desc: "Altered collagen structure - may have increased soft tissue injury risk", magnitude: 2 },
      TT: { status: "significantly_reduced", desc: "Significantly altered collagen - higher risk of tendon/ligament injuries, focus on mobility work", magnitude: 3 },
    },
  },

  // ============================================================
  // NUTRITION
  // ============================================================
  rs9939609: {
    gene: "FTO",
    category: "Nutrition",
    variants: {
      TT: { status: "normal", desc: "Normal FTO - standard appetite regulation and satiety signaling", magnitude: 1 },
      TA: { status: "increased_risk", desc: "Moderate obesity risk - FTO variant increases appetite, ~1.5kg average weight increase", magnitude: 2 },
      AT: { status: "increased_risk", desc: "Moderate obesity risk - FTO variant increases appetite, ~1.5kg average weight increase", magnitude: 2 },
      AA: { status: "high_risk", desc: "Higher obesity risk - ~3kg average weight increase, reduced satiety, benefits most from exercise intervention", magnitude: 3 },
    },
  },
  rs1801282: {
    gene: "PPARG",
    category: "Nutrition",
    variants: {
      CC: { status: "normal", desc: "Normal PPARG (Pro12Pro) - standard insulin sensitivity and fat storage", magnitude: 1 },
      CG: { status: "protective", desc: "Pro12Ala heterozygous - improved insulin sensitivity, lower type 2 diabetes risk", magnitude: 2 },
      GC: { status: "protective", desc: "Pro12Ala heterozygous - improved insulin sensitivity, lower type 2 diabetes risk", magnitude: 2 },
      GG: { status: "highly_protective", desc: "Pro12Ala homozygous - significantly improved insulin sensitivity, but may gain more weight on high-fat diet", magnitude: 2 },
    },
  },
  rs7903146: {
    gene: "TCF7L2",
    category: "Nutrition",
    variants: {
      CC: { status: "normal", desc: "Normal TCF7L2 - standard insulin secretion and glucose regulation", magnitude: 1 },
      CT: { status: "increased_risk", desc: "Increased T2D risk (~40%) - impaired insulin secretion, benefit from low-glycemic diet", magnitude: 3 },
      TC: { status: "increased_risk", desc: "Increased T2D risk (~40%) - impaired insulin secretion, benefit from low-glycemic diet", magnitude: 3 },
      TT: { status: "high_risk", desc: "High T2D risk (~80% increase) - significantly impaired insulin secretion, strict glycemic control recommended", magnitude: 4 },
    },
  },
  rs5082: {
    gene: "APOA2",
    category: "Nutrition",
    variants: {
      GG: { status: "normal", desc: "Normal APOA2 - standard response to dietary saturated fat", magnitude: 1 },
      GA: { status: "sensitive", desc: "Saturated fat sensitive - higher BMI gain with saturated fat >22g/day", magnitude: 2 },
      AG: { status: "sensitive", desc: "Saturated fat sensitive - higher BMI gain with saturated fat >22g/day", magnitude: 2 },
      AA: { status: "highly_sensitive", desc: "Highly sensitive to saturated fat - significant weight gain risk with high saturated fat intake, limit to <22g/day", magnitude: 3 },
    },
  },
  rs174547: {
    gene: "FADS1",
    category: "Nutrition",
    variants: {
      TT: { status: "normal", desc: "Normal fatty acid desaturase - efficient conversion of plant omega-3 (ALA) to EPA/DHA", magnitude: 1 },
      TC: { status: "reduced", desc: "Reduced conversion - less efficient ALA to EPA/DHA conversion, may benefit from direct fish oil/DHA", magnitude: 2 },
      CT: { status: "reduced", desc: "Reduced conversion - less efficient ALA to EPA/DHA conversion, may benefit from direct fish oil/DHA", magnitude: 2 },
      CC: { status: "significantly_reduced", desc: "Poor omega-3 conversion - strongly recommend preformed EPA/DHA (fish, algae oil) over plant sources", magnitude: 3 },
    },
  },
  rs4988235: {
    gene: "MCM6/LCT",
    category: "Nutrition",
    variants: {
      TT: { status: "persistent", desc: "Lactase persistent - maintains lactose digestion into adulthood, can consume dairy freely", magnitude: 1 },
      TC: { status: "persistent", desc: "Lactase persistent (one copy sufficient) - can digest lactose normally", magnitude: 1 },
      CT: { status: "persistent", desc: "Lactase persistent (one copy sufficient) - can digest lactose normally", magnitude: 1 },
      CC: { status: "non_persistent", desc: "Lactase non-persistent - lactose intolerance likely, dairy may cause GI distress, use lactase enzyme or alternatives", magnitude: 2 },
    },
  },
  rs2282679: {
    gene: "GC",
    category: "Nutrition",
    variants: {
      GG: { status: "normal", desc: "Normal vitamin D binding protein - efficient vitamin D transport and bioavailability", magnitude: 1 },
      GT: { status: "low", desc: "Reduced vitamin D transport - lower 25(OH)D levels, may need higher supplementation", magnitude: 2 },
      TG: { status: "low", desc: "Reduced vitamin D transport - lower 25(OH)D levels, may need higher supplementation", magnitude: 2 },
      TT: { status: "very_low", desc: "Significantly reduced vitamin D transport - much lower circulating levels, aggressive supplementation + sun exposure needed", magnitude: 3 },
    },
  },
  rs12934922: {
    gene: "BCMO1",
    category: "Nutrition",
    variants: {
      AA: { status: "normal", desc: "Normal beta-carotene conversion to vitamin A - plant sources (carrots, sweet potato) adequate", magnitude: 1 },
      AT: { status: "reduced", desc: "Reduced conversion (~32% less) - may need more preformed vitamin A (eggs, liver, dairy)", magnitude: 2 },
      TA: { status: "reduced", desc: "Reduced conversion (~32% less) - may need more preformed vitamin A (eggs, liver, dairy)", magnitude: 2 },
      TT: { status: "significantly_reduced", desc: "Poor beta-carotene conversion (~69% less) - preformed vitamin A sources important, don't rely on plant carotenoids alone", magnitude: 3 },
    },
  },
  rs602662: {
    gene: "FUT2",
    category: "Nutrition",
    variants: {
      GG: { status: "secretor", desc: "Secretor status - normal B12 absorption, standard gut microbiome composition", magnitude: 1 },
      GA: { status: "secretor", desc: "Secretor (one copy sufficient) - normal B12 absorption", magnitude: 1 },
      AG: { status: "secretor", desc: "Secretor (one copy sufficient) - normal B12 absorption", magnitude: 1 },
      AA: { status: "non_secretor", desc: "Non-secretor - lower B12 levels, altered gut microbiome, may have some infection resistance but need B12 monitoring", magnitude: 2 },
    },
  },

  // ============================================================
  // CARDIOVASCULAR
  // ============================================================
  rs429358: {
    gene: "APOE",
    category: "Cardiovascular",
    note: "Combine with rs7412 for APOE type",
    variants: {
      TT: { status: "e2_or_e3", desc: "APOE2 or APOE3 component - combine with rs7412 to determine full APOE genotype", magnitude: 1 },
      TC: { status: "e3_e4", desc: "One APOE4 allele - combine with rs7412 for full type, potential increased Alzheimer's/CVD risk", magnitude: 3 },
      CT: { status: "e3_e4", desc: "One APOE4 allele - combine with rs7412 for full type, potential increased Alzheimer's/CVD risk", magnitude: 3 },
      CC: { status: "e4_e4", desc: "APOE4/E4 - highest genetic risk for Alzheimer's and cardiovascular disease, strongly benefit from preventive measures", magnitude: 5 },
    },
  },
  rs7412: {
    gene: "APOE",
    category: "Cardiovascular",
    note: "Combine with rs429358 for APOE type",
    variants: {
      CC: { status: "e3_or_e4", desc: "APOE3 or APOE4 component - combine with rs429358 for full APOE genotype", magnitude: 1 },
      CT: { status: "e2_component", desc: "One APOE2 allele - generally protective for cardiovascular health", magnitude: 2 },
      TC: { status: "e2_component", desc: "One APOE2 allele - generally protective for cardiovascular health", magnitude: 2 },
      TT: { status: "e2_e2", desc: "APOE2/E2 - lowest Alzheimer's risk, but may have type III hyperlipoproteinemia risk", magnitude: 2 },
    },
  },
  rs6025: {
    gene: "F5",
    category: "Cardiovascular",
    variants: {
      CC: { status: "normal", desc: "Normal Factor V - standard blood clotting", magnitude: 1 },
      CT: { status: "carrier", desc: "Factor V Leiden heterozygous - 5-10x increased DVT/PE risk, caution with oral contraceptives/surgery", magnitude: 4 },
      TC: { status: "carrier", desc: "Factor V Leiden heterozygous - 5-10x increased DVT/PE risk, caution with oral contraceptives/surgery", magnitude: 4 },
      TT: { status: "homozygous", desc: "Factor V Leiden homozygous - 50-80x increased clotting risk, anticoagulation may be needed, avoid estrogen", magnitude: 5 },
    },
  },
  rs1799963: {
    gene: "F2",
    category: "Cardiovascular",
    variants: {
      GG: { status: "normal", desc: "Normal prothrombin - standard clotting function", magnitude: 1 },
      GA: { status: "carrier", desc: "Prothrombin G20210A carrier - 2-5x increased DVT risk, additive with Factor V Leiden", magnitude: 4 },
      AG: { status: "carrier", desc: "Prothrombin G20210A carrier - 2-5x increased DVT risk, additive with Factor V Leiden", magnitude: 4 },
      AA: { status: "homozygous", desc: "Prothrombin homozygous variant - significantly increased clotting risk, hematology referral recommended", magnitude: 5 },
    },
  },
  rs5186: {
    gene: "AGTR1",
    category: "Cardiovascular",
    variants: {
      AA: { status: "normal", desc: "Normal angiotensin II receptor - standard blood pressure regulation", magnitude: 1 },
      AC: { status: "increased", desc: "Increased AGTR1 activity - associated with higher blood pressure and aortic stiffness", magnitude: 2 },
      CA: { status: "increased", desc: "Increased AGTR1 activity - associated with higher blood pressure and aortic stiffness", magnitude: 2 },
      CC: { status: "significantly_increased", desc: "Significantly increased AGTR1 - higher hypertension risk, may respond well to ARB medications", magnitude: 3 },
    },
  },
  rs699: {
    gene: "AGT",
    category: "Cardiovascular",
    variants: {
      CC: { status: "normal", desc: "Normal angiotensinogen (Met235) - standard blood pressure regulation", magnitude: 1 },
      CT: { status: "increased", desc: "One Thr235 allele - modestly increased hypertension risk, salt-sensitive blood pressure", magnitude: 2 },
      TC: { status: "increased", desc: "One Thr235 allele - modestly increased hypertension risk, salt-sensitive blood pressure", magnitude: 2 },
      TT: { status: "significantly_increased", desc: "Thr235 homozygous - significantly increased hypertension risk, strong salt sensitivity, DASH diet beneficial", magnitude: 3 },
    },
  },
  rs4343: {
    gene: "ACE",
    category: "Cardiovascular",
    variants: {
      AA: { status: "low", desc: "Lower ACE activity - associated with lower blood pressure, endurance advantage", magnitude: 1 },
      AG: { status: "intermediate", desc: "Intermediate ACE activity - moderate blood pressure effect", magnitude: 1 },
      GA: { status: "intermediate", desc: "Intermediate ACE activity - moderate blood pressure effect", magnitude: 1 },
      GG: { status: "high", desc: "Higher ACE activity - increased angiotensin II, higher blood pressure tendency, may benefit from ACE inhibitors", magnitude: 2 },
    },
  },
  rs5443: {
    gene: "GNB3",
    category: "Cardiovascular",
    variants: {
      CC: { status: "normal", desc: "Normal G-protein signaling - standard blood pressure and metabolic regulation", magnitude: 1 },
      CT: { status: "increased", desc: "Enhanced G-protein signaling (C825T) - associated with hypertension and obesity risk", magnitude: 2 },
      TC: { status: "increased", desc: "Enhanced G-protein signaling (C825T) - associated with hypertension and obesity risk", magnitude: 2 },
      TT: { status: "significantly_increased", desc: "Significantly enhanced signaling - higher hypertension risk, may respond better to diuretics", magnitude: 3 },
    },
  },
  rs1801253: {
    gene: "ADRB1",
    category: "Cardiovascular",
    variants: {
      CC: { status: "normal", desc: "Normal beta-1 adrenergic receptor (Arg389) - standard heart rate response to catecholamines", magnitude: 1 },
      CG: { status: "reduced", desc: "Gly389 heterozygous - reduced cardiac stimulation, may need higher beta-blocker doses", magnitude: 2 },
      GC: { status: "reduced", desc: "Gly389 heterozygous - reduced cardiac stimulation, may need higher beta-blocker doses", magnitude: 2 },
      GG: { status: "significantly_reduced", desc: "Gly389 homozygous - significantly reduced beta-1 response, important for beta-blocker dosing", magnitude: 3 },
    },
  },
  rs1800629: {
    gene: "TNF",
    category: "Cardiovascular",
    variants: {
      GG: { status: "normal", desc: "Normal TNF-alpha production - standard inflammatory response", magnitude: 1 },
      GA: { status: "high", desc: "Elevated TNF-alpha (G-308A) - increased inflammation, associated with insulin resistance and autoimmune risk", magnitude: 2 },
      AG: { status: "high", desc: "Elevated TNF-alpha (G-308A) - increased inflammation, associated with insulin resistance and autoimmune risk", magnitude: 2 },
      AA: { status: "very_high", desc: "Very high TNF-alpha - significant chronic inflammation risk, anti-inflammatory diet/lifestyle important", magnitude: 3 },
    },
  },
  rs1800795: {
    gene: "IL6",
    category: "Cardiovascular",
    variants: {
      GG: { status: "high", desc: "Higher IL-6 production - increased baseline inflammation, higher CRP levels, cardiovascular risk factor", magnitude: 3 },
      GC: { status: "intermediate", desc: "Intermediate IL-6 production - moderate inflammatory tendency", magnitude: 2 },
      CG: { status: "intermediate", desc: "Intermediate IL-6 production - moderate inflammatory tendency", magnitude: 2 },
      CC: { status: "normal", desc: "Lower IL-6 production - reduced inflammatory tendency, generally protective", magnitude: 1 },
    },
  },

  // ============================================================
  // IRON METABOLISM
  // ============================================================
  rs1800562: {
    gene: "HFE",
    category: "Iron Metabolism",
    variants: {
      GG: { status: "normal", desc: "Normal HFE (C282Y wild-type) - standard iron absorption regulation", magnitude: 1 },
      GA: { status: "carrier", desc: "C282Y carrier - mildly increased iron absorption, monitor ferritin periodically", magnitude: 2 },
      AG: { status: "carrier", desc: "C282Y carrier - mildly increased iron absorption, monitor ferritin periodically", magnitude: 2 },
      AA: { status: "at_risk", desc: "C282Y homozygous - hereditary hemochromatosis risk, regular ferritin monitoring essential, may need phlebotomy", magnitude: 4 },
    },
  },
  rs1799945: {
    gene: "HFE",
    category: "Iron Metabolism",
    variants: {
      CC: { status: "normal", desc: "Normal HFE (H63D wild-type) - standard iron regulation", magnitude: 1 },
      CG: { status: "carrier", desc: "H63D carrier - slight increase in iron absorption, compound heterozygote with C282Y increases risk", magnitude: 2 },
      GC: { status: "carrier", desc: "H63D carrier - slight increase in iron absorption, compound heterozygote with C282Y increases risk", magnitude: 2 },
      GG: { status: "homozygous", desc: "H63D homozygous - modest iron overload risk, monitor if combined with other HFE variants", magnitude: 3 },
    },
  },

  // ============================================================
  // AUTOIMMUNE
  // ============================================================
  rs2187668: {
    gene: "HLA-DQA1",
    category: "Autoimmune",
    variants: {
      CC: { status: "normal", desc: "Normal HLA-DQA1 - standard immune recognition, no increased celiac risk from this variant", magnitude: 1 },
      CT: { status: "increased_risk", desc: "HLA-DQ2.5 carrier - significantly increased celiac disease risk (~3% lifetime), gluten sensitivity possible", magnitude: 3 },
      TC: { status: "increased_risk", desc: "HLA-DQ2.5 carrier - significantly increased celiac disease risk (~3% lifetime), gluten sensitivity possible", magnitude: 3 },
      TT: { status: "high_risk", desc: "HLA-DQ2.5 homozygous - highest celiac genetic risk (~10% lifetime), consider screening if symptomatic", magnitude: 4 },
    },
  },
  rs7574865: {
    gene: "STAT4",
    category: "Autoimmune",
    variants: {
      GG: { status: "normal", desc: "Normal STAT4 - standard immune signaling, no increased autoimmune risk from this variant", magnitude: 1 },
      GT: { status: "increased_risk", desc: "STAT4 risk allele carrier - modestly increased risk of lupus, rheumatoid arthritis, and other autoimmune conditions", magnitude: 2 },
      TG: { status: "increased_risk", desc: "STAT4 risk allele carrier - modestly increased risk of lupus, rheumatoid arthritis, and other autoimmune conditions", magnitude: 2 },
      TT: { status: "high_risk", desc: "STAT4 homozygous risk - significantly increased autoimmune disease susceptibility", magnitude: 3 },
    },
  },
  rs2476601: {
    gene: "PTPN22",
    category: "Autoimmune",
    variants: {
      GG: { status: "normal", desc: "Normal PTPN22 - standard T-cell regulation", magnitude: 1 },
      GA: { status: "increased_risk", desc: "PTPN22 risk allele (R620W) - increased risk of type 1 diabetes, RA, thyroid autoimmunity", magnitude: 3 },
      AG: { status: "increased_risk", desc: "PTPN22 risk allele (R620W) - increased risk of type 1 diabetes, RA, thyroid autoimmunity", magnitude: 3 },
      AA: { status: "high_risk", desc: "PTPN22 homozygous risk - substantially increased autoimmune disease risk across multiple conditions", magnitude: 4 },
    },
  },

  // ============================================================
  // SKIN
  // ============================================================
  rs1805007: {
    gene: "MC1R",
    category: "Skin",
    variants: {
      CC: { status: "normal", desc: "Normal MC1R - standard melanin production and UV response", magnitude: 1 },
      CT: { status: "carrier", desc: "MC1R R151C carrier - increased freckling, red hair tendency, mildly increased melanoma risk", magnitude: 2 },
      TC: { status: "carrier", desc: "MC1R R151C carrier - increased freckling, red hair tendency, mildly increased melanoma risk", magnitude: 2 },
      TT: { status: "accelerated", desc: "MC1R R151C homozygous - fair skin, high UV sensitivity, significantly increased melanoma risk, rigorous sun protection needed", magnitude: 3 },
    },
  },
  rs1805008: {
    gene: "MC1R",
    category: "Skin",
    variants: {
      CC: { status: "normal", desc: "Normal MC1R at this position - standard pigmentation", magnitude: 1 },
      CT: { status: "carrier", desc: "MC1R R160W carrier - contributes to fair skin/red hair phenotype, additive with other MC1R variants", magnitude: 2 },
      TC: { status: "carrier", desc: "MC1R R160W carrier - contributes to fair skin/red hair phenotype, additive with other MC1R variants", magnitude: 2 },
      TT: { status: "accelerated", desc: "MC1R R160W homozygous - strong red hair/fair skin, high melanoma risk", magnitude: 3 },
    },
  },
  rs12203592: {
    gene: "IRF4",
    category: "Skin",
    variants: {
      CC: { status: "normal", desc: "Normal IRF4 - standard pigmentation regulation", magnitude: 1 },
      CT: { status: "sensitive", desc: "IRF4 variant carrier - associated with sun sensitivity, freckling, and increased skin cancer risk", magnitude: 2 },
      TC: { status: "sensitive", desc: "IRF4 variant carrier - associated with sun sensitivity, freckling, and increased skin cancer risk", magnitude: 2 },
      TT: { status: "very_sensitive", desc: "IRF4 homozygous variant - high sun sensitivity, strong freckling tendency, elevated melanoma risk", magnitude: 3 },
    },
  },
  rs2228479: {
    gene: "MC1R",
    category: "Skin",
    variants: {
      GG: { status: "normal", desc: "Normal MC1R at V92M position - standard pigmentation", magnitude: 1 },
      GA: { status: "mild_variant", desc: "MC1R V92M carrier - mild pigmentation effect, slight increase in fair skin tendency", magnitude: 1 },
      AG: { status: "mild_variant", desc: "MC1R V92M carrier - mild pigmentation effect, slight increase in fair skin tendency", magnitude: 1 },
      AA: { status: "variant", desc: "MC1R V92M homozygous - modest pigmentation effect, less impactful than R151C or R160W variants", magnitude: 2 },
    },
  },

  // ============================================================
  // LONGEVITY
  // ============================================================
  rs2802292: {
    gene: "FOXO3",
    category: "Longevity",
    variants: {
      TT: { status: "normal", desc: "Normal FOXO3 - standard stress response and cellular maintenance pathways", magnitude: 1 },
      TG: { status: "favorable", desc: "One longevity allele - associated with increased lifespan in multiple populations", magnitude: 2 },
      GT: { status: "favorable", desc: "One longevity allele - associated with increased lifespan in multiple populations", magnitude: 2 },
      GG: { status: "highly_favorable", desc: "FOXO3 longevity genotype - 2.7x more common in centenarians, enhanced stress resistance and DNA repair", magnitude: 2 },
    },
  },
  rs1042522: {
    gene: "TP53",
    category: "Longevity",
    variants: {
      GG: { status: "arg72", desc: "TP53 Arg72 - more efficient apoptosis (cancer cell killing) but may accelerate aging", magnitude: 2 },
      GC: { status: "heterozygous", desc: "TP53 Arg72Pro heterozygous - balanced apoptosis and cellular protection", magnitude: 1 },
      CG: { status: "heterozygous", desc: "TP53 Arg72Pro heterozygous - balanced apoptosis and cellular protection", magnitude: 1 },
      CC: { status: "pro72", desc: "TP53 Pro72 - reduced apoptosis efficiency but better DNA repair, associated with longevity in some studies", magnitude: 2 },
    },
  },
  rs2542052: {
    gene: "CETP",
    category: "Longevity",
    variants: {
      CC: { status: "normal", desc: "Normal CETP activity - standard HDL/LDL cholesterol transfer", magnitude: 1 },
      CT: { status: "favorable", desc: "Reduced CETP activity - higher HDL, associated with longevity and reduced CVD risk", magnitude: 2 },
      TC: { status: "favorable", desc: "Reduced CETP activity - higher HDL, associated with longevity and reduced CVD risk", magnitude: 2 },
      TT: { status: "highly_favorable", desc: "Significantly reduced CETP - notably higher HDL cholesterol, exceptional longevity association", magnitude: 2 },
    },
  },

  // ============================================================
  // RESPIRATORY
  // ============================================================
  rs28929474: {
    gene: "SERPINA1",
    category: "Respiratory",
    variants: {
      CC: { status: "normal", desc: "Normal alpha-1 antitrypsin (MM genotype) - standard lung/liver protection", magnitude: 1 },
      CT: { status: "carrier", desc: "Alpha-1 antitrypsin carrier (MZ) - mildly reduced AAT levels, avoid smoking, minor COPD/liver risk", magnitude: 2 },
      TC: { status: "carrier", desc: "Alpha-1 antitrypsin carrier (MZ) - mildly reduced AAT levels, avoid smoking, minor COPD/liver risk", magnitude: 2 },
      TT: { status: "deficient", desc: "Alpha-1 antitrypsin deficient (ZZ) - severely reduced AAT, high risk of early-onset COPD and liver disease, absolutely no smoking", magnitude: 5 },
    },
  },

  // ============================================================
  // ALCOHOL
  // ============================================================
  rs671: {
    gene: "ALDH2",
    category: "Alcohol",
    variants: {
      GG: { status: "normal", desc: "Normal ALDH2 - efficient acetaldehyde metabolism, standard alcohol processing", magnitude: 1 },
      GA: { status: "reduced", desc: "ALDH2*2 carrier - 'Asian flush', acetaldehyde accumulates, increased esophageal cancer risk with alcohol", magnitude: 3 },
      AG: { status: "reduced", desc: "ALDH2*2 carrier - 'Asian flush', acetaldehyde accumulates, increased esophageal cancer risk with alcohol", magnitude: 3 },
      AA: { status: "deficient", desc: "ALDH2 deficient - severe alcohol intolerance, very high cancer risk with any alcohol consumption", magnitude: 4 },
    },
  },
  rs1229984: {
    gene: "ADH1B",
    category: "Alcohol",
    variants: {
      CC: { status: "slow", desc: "Slow alcohol metabolism (ADH1B*1) - standard ethanol-to-acetaldehyde conversion, higher alcoholism risk", magnitude: 2 },
      CT: { status: "fast", desc: "Fast alcohol metabolism (ADH1B*2 carrier) - rapid ethanol conversion, protective against alcoholism", magnitude: 2 },
      TC: { status: "fast", desc: "Fast alcohol metabolism (ADH1B*2 carrier) - rapid ethanol conversion, protective against alcoholism", magnitude: 2 },
      TT: { status: "very_fast", desc: "Very fast alcohol metabolism - very rapid ethanol clearance, strong alcoholism protection but faster acetaldehyde generation", magnitude: 2 },
    },
  },
};
