import { GenomeSNP, ParseProgress } from "@/types/genome";

export type GenomeRecord = Record<string, GenomeSNP>;

interface ParserCallbacks {
  onProgress: (progress: ParseProgress) => void;
  onComplete: (genome: GenomeRecord) => void;
  onError: (error: string) => void;
}

export function parseGenomeFile(file: File, callbacks: ParserCallbacks): () => void {
  const worker = new Worker(new URL("../workers/genome-parser.worker.ts", import.meta.url));

  worker.addEventListener("message", (event: MessageEvent) => {
    const { type } = event.data;

    switch (type) {
      case "progress":
        callbacks.onProgress({
          linesProcessed: event.data.linesProcessed,
          totalLines: event.data.totalLines,
          snpsFound: event.data.snpsFound,
          percent: event.data.percent,
        });
        break;
      case "complete":
        callbacks.onComplete(event.data.genome);
        worker.terminate();
        break;
      case "error":
        callbacks.onError(event.data.message);
        worker.terminate();
        break;
    }
  });

  worker.addEventListener("error", (event) => {
    callbacks.onError(event.message || "Worker error");
    worker.terminate();
  });

  // Read file as ArrayBuffer and send to worker
  file.arrayBuffer().then((buffer) => {
    worker.postMessage({ type: "parse", buffer }, [buffer]);
  });

  // Return cleanup function
  return () => worker.terminate();
}
