import { GenomeRecord } from "./genome-parser";

/**
 * Sample genome data for demo mode.
 * Contains ~30 SNPs that match our database, producing a realistic
 * mix of high, moderate, and low-impact findings across categories.
 */
export const SAMPLE_GENOME: GenomeRecord = {
  // HIGH IMPACT (magnitude >= 3)
  rs762551:  { chromosome: "15", position: "75041917", genotype: "CC" },  // CYP1A2 slow caffeine
  rs4244285: { chromosome: "10", position: "96541616", genotype: "GA" },  // CYP2C19 intermediate
  rs1799853: { chromosome: "10", position: "96702047", genotype: "CT" },  // CYP2C9 intermediate
  rs1801133: { chromosome: "1",  position: "11856378", genotype: "TT" },  // MTHFR C677T homozygous

  // MODERATE IMPACT (magnitude 2)
  rs12248560: { chromosome: "10", position: "96521657", genotype: "CT" }, // CYP2C19 rapid
  rs4680:     { chromosome: "22", position: "19951271", genotype: "AG" }, // COMT intermediate
  rs1800497:  { chromosome: "11", position: "113270828", genotype: "CT" }, // DRD2/ANKK1
  rs5751876:  { chromosome: "22", position: "24830141", genotype: "CT" }, // ADORA2A
  rs1801260:  { chromosome: "4",  position: "56294068", genotype: "TC" }, // CLOCK
  rs9939609:  { chromosome: "16", position: "53820527", genotype: "AT" }, // FTO

  // LOW IMPACT / INFORMATIONAL (magnitude 0-1)
  rs4988235:  { chromosome: "2",  position: "136608646", genotype: "AG" }, // LCT lactase
  rs1815739:  { chromosome: "11", position: "66560624", genotype: "CT" }, // ACTN3
  rs53576:    { chromosome: "3",  position: "8804371",  genotype: "AG" }, // OXTR
  rs7412:     { chromosome: "19", position: "45412079", genotype: "CC" }, // APOE
  rs429358:   { chromosome: "19", position: "45411941", genotype: "TT" }, // APOE
  rs1800629:  { chromosome: "6",  position: "31543031", genotype: "GG" }, // TNF-alpha
  rs1800795:  { chromosome: "7",  position: "22766645", genotype: "GG" }, // IL-6
  rs4880:     { chromosome: "6",  position: "160113872", genotype: "AA" }, // SOD2
  rs671:      { chromosome: "12", position: "112241766", genotype: "GG" }, // ALDH2
  rs1042522:  { chromosome: "17", position: "7579472",  genotype: "GC" }, // TP53
  rs6025:     { chromosome: "1",  position: "169519049", genotype: "CC" }, // Factor V
  rs1801131:  { chromosome: "1",  position: "11854476", genotype: "TG" }, // MTHFR A1298C
  rs2187668:  { chromosome: "6",  position: "32605884", genotype: "CT" }, // HLA-DQ2.5
  rs1805007:  { chromosome: "16", position: "89919736", genotype: "CC" }, // MC1R
  rs2802292:  { chromosome: "6",  position: "108985739", genotype: "TG" }, // FOXO3
  rs1800462:  { chromosome: "6",  position: "18130918", genotype: "CC" }, // TPMT
  rs4149056:  { chromosome: "12", position: "21331549", genotype: "TT" }, // SLCO1B1
  rs2228570:  { chromosome: "12", position: "48272895", genotype: "CT" }, // VDR
  rs12913832: { chromosome: "15", position: "28365618", genotype: "AG" }, // HERC2 (eye color)
  rs1799971:  { chromosome: "6",  position: "154360797", genotype: "AG" }, // OPRM1
};
