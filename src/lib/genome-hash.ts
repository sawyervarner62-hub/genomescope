/**
 * Validates that a file looks like a real 23andMe/genome raw data file.
 * Checks for:
 * 1. Comment headers starting with # (23andMe files have these)
 * 2. Tab-separated lines with rsid, chromosome, position, genotype format
 * 3. Minimum number of valid SNP lines (at least 100)
 */
export async function validateGenomeFile(file: File): Promise<boolean> {
  const text = await file.slice(0, 200_000).text(); // Check first ~2000 lines
  const lines = text.split("\n");

  let hasCommentHeader = false;
  let validSnpLines = 0;
  const rsidPattern = /^rs\d+\t/; // rsID followed by tab
  const snpLinePattern = /^(rs\d+|i\d+)\t(\d{1,2}|[XYM]T?)\t\d+\t[ACGT\-]{1,2}$/;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    if (trimmed.startsWith("#")) {
      hasCommentHeader = true;
      continue;
    }

    // Check if line matches genome data format: rsid\tchromosome\tposition\tgenotype
    if (rsidPattern.test(trimmed) || snpLinePattern.test(trimmed)) {
      validSnpLines++;
    }

    // Once we've found enough valid lines, no need to check more
    if (validSnpLines >= 100) break;
  }

  // A real genome file should have at least 100 valid SNP-formatted lines
  return validSnpLines >= 100;
}

/**
 * Generate a SHA-256 hash of the first ~1000 lines of a genome file.
 * This uniquely identifies a genome without sending actual genetic data.
 */
export async function hashGenomeFile(file: File): Promise<string> {
  const text = await file.slice(0, 100_000).text(); // ~1000 lines worth
  const lines = text.split("\n").slice(0, 1000).join("\n");
  const encoded = new TextEncoder().encode(lines);
  const hashBuffer = await crypto.subtle.digest("SHA-256", encoded);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}
