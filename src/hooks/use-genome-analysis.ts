"use client";

import { useState, useCallback, useRef } from "react";
import { AnalysisPhase, AnalysisResults, ParseProgress } from "@/types/genome";
import { parseGenomeFile, GenomeRecord } from "@/lib/genome-parser";
import { analyzeGenome } from "@/lib/analyzer";

export function useGenomeAnalysis() {
  const [phase, setPhase] = useState<AnalysisPhase>("idle");
  const [progress, setProgress] = useState<ParseProgress>({
    linesProcessed: 0,
    totalLines: 0,
    snpsFound: 0,
    percent: 0,
  });
  const [results, setResults] = useState<AnalysisResults | null>(null);
  const [error, setError] = useState<string | null>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  const analyze = useCallback((file: File) => {
    setPhase("parsing");
    setError(null);
    setResults(null);

    const cleanup = parseGenomeFile(file, {
      onProgress: (p) => setProgress(p),
      onComplete: (genome: GenomeRecord) => {
        setPhase("analyzing");
        // Use requestAnimationFrame to let the UI update before heavy computation
        requestAnimationFrame(() => {
          try {
            const analysisResults = analyzeGenome(genome);
            setResults(analysisResults);
            setPhase("complete");
          } catch (err) {
            setError(err instanceof Error ? err.message : "Analysis failed");
            setPhase("error");
          }
        });
      },
      onError: (msg) => {
        setError(msg);
        setPhase("error");
      },
    });

    cleanupRef.current = cleanup;
  }, []);

  const reset = useCallback(() => {
    if (cleanupRef.current) {
      cleanupRef.current();
      cleanupRef.current = null;
    }
    setPhase("idle");
    setProgress({ linesProcessed: 0, totalLines: 0, snpsFound: 0, percent: 0 });
    setResults(null);
    setError(null);
  }, []);

  return { phase, progress, results, error, analyze, reset };
}
