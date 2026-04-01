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
