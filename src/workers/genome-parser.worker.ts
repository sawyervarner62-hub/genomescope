// Receives: { type: "parse", buffer: ArrayBuffer }
// Posts progress: { type: "progress", linesProcessed, totalLines, snpsFound, percent }
// Posts result: { type: "complete", genome: Record<string, { chromosome: string; position: string; genotype: string }> }
// Posts error: { type: "error", message: string }

const ctx = self as unknown as Worker;

ctx.addEventListener("message", (event: MessageEvent) => {
  const { type, buffer } = event.data;
  if (type !== "parse") return;

  try {
    const text = new TextDecoder().decode(buffer);
    const lines = text.split("\n");
    const totalLines = lines.length;
    const genome: Record<string, { chromosome: string; position: string; genotype: string }> = {};
    let snpsFound = 0;

    for (let i = 0; i < totalLines; i++) {
      const line = lines[i].trim();
      if (!line || line.startsWith("#")) continue;

      const parts = line.split("\t");
      if (parts.length >= 4) {
        const [rsid, chromosome, position, genotype] = parts;
        if (genotype && genotype !== "--") {
          genome[rsid] = { chromosome, position, genotype };
          snpsFound++;
        }
      }

      // Post progress every 50,000 lines
      if (i % 50000 === 0) {
        ctx.postMessage({
          type: "progress",
          linesProcessed: i,
          totalLines,
          snpsFound,
          percent: Math.round((i / totalLines) * 100),
        });
      }
    }

    // Final progress
    ctx.postMessage({
      type: "progress",
      linesProcessed: totalLines,
      totalLines,
      snpsFound,
      percent: 100,
    });

    ctx.postMessage({ type: "complete", genome });
  } catch (err) {
    ctx.postMessage({
      type: "error",
      message: err instanceof Error ? err.message : "Unknown parsing error",
    });
  }
});
