"use client";

import { useCallback, useRef } from "react";
import { useGenomeAnalysis } from "@/hooks/use-genome-analysis";
import { useGenomeCounter } from "@/hooks/use-genome-counter";
import { hashGenomeFile, validateGenomeFile } from "@/lib/genome-hash";
import { FileDropzone } from "@/components/upload/file-dropzone";
import { ParseProgress } from "@/components/upload/parse-progress";
import { DashboardHeadline } from "@/components/results/dashboard-headline";
import { CategoryCard } from "@/components/results/category-card";
import { PathwayView } from "@/components/results/pathway-view";
import { FindingDetail } from "@/components/results/finding-detail";
import { MagnitudeDistribution } from "@/components/charts/magnitude-distribution";
import { CategoryOverview } from "@/components/charts/category-overview";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, Users } from "lucide-react";
import Link from "next/link";
import {
  generateMarkdownReport,
  generateJSONExport,
  downloadFile,
} from "@/lib/report-generator";
import { SAMPLE_GENOME } from "@/lib/sample-genome";
import { ArchitectureDiagram } from "@/components/portfolio/architecture-diagram";

export default function GenomeScopePage() {
  const { phase, progress, results, error, analyze, analyzePrebuilt, reset } =
    useGenomeAnalysis();
  const { count, recordGenome } = useGenomeCounter();
  const hasRecordedRef = useRef(false);

  const handleFileSelect = useCallback(
    async (file: File) => {
      // Validate this is a real genome file before counting
      hasRecordedRef.current = false;
      try {
        const isGenome = await validateGenomeFile(file);
        if (isGenome) {
          const hash = await hashGenomeFile(file);
          await recordGenome(hash);
          hasRecordedRef.current = true;
        }
      } catch {
        // Counter failure shouldn't block analysis
      }
      analyze(file);
    },
    [analyze, recordGenome]
  );

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-4" />
          Back to Portfolio
        </Link>
        {count !== null && count > 0 && (
          <Badge variant="secondary" className="gap-1.5">
            <Users className="size-3" />
            {count} genome{count !== 1 ? "s" : ""} analyzed
          </Badge>
        )}
      </div>

      {phase === "idle" && (
        <>
        <ArchitectureDiagram />
        <FileDropzone
          onFileSelect={handleFileSelect}
          onDemoClick={() => analyzePrebuilt(SAMPLE_GENOME)}
        />
        </>
      )}

      {(phase === "parsing" || phase === "analyzing") && (
        <ParseProgress progress={progress} phase={phase} />
      )}

      {phase === "error" && (
        <div className="w-full max-w-lg mx-auto space-y-4">
          <Alert variant="destructive">
            <AlertTitle>Analysis Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
          <div className="flex justify-center">
            <Button onClick={reset} variant="outline">
              Try Again
            </Button>
          </div>
        </div>
      )}

      {phase === "complete" && results && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                GenomeScope
              </h1>
              <p className="text-muted-foreground">
                Analysis complete &mdash; {results.summary.analyzedSNPs}{" "}
                SNPs matched
              </p>
            </div>
            <Button variant="outline" onClick={reset}>
              New Analysis
            </Button>
          </div>

          {/* Headline dashboard */}
          <DashboardHeadline results={results} />

          {/* Detailed tabs */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="categories">Categories</TabsTrigger>
              <TabsTrigger value="pathways">Pathways</TabsTrigger>
              <TabsTrigger value="details">All Findings</TabsTrigger>
              <TabsTrigger value="export">Export</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6 mt-4">
              <div className="grid md:grid-cols-2 gap-4">
                <MagnitudeDistribution results={results} />
                <CategoryOverview results={results} />
              </div>
            </TabsContent>

            <TabsContent value="categories" className="space-y-4 mt-4">
              {Object.entries(results.byCategory)
                .sort(
                  ([, a], [, b]) =>
                    Math.max(...b.map((f) => f.magnitude)) -
                    Math.max(...a.map((f) => f.magnitude))
                )
                .map(([category, findings]) => (
                  <CategoryCard
                    key={category}
                    category={category}
                    findings={findings}
                  />
                ))}
            </TabsContent>

            <TabsContent value="pathways" className="mt-4">
              <PathwayView findings={results.findings} />
            </TabsContent>

            <TabsContent value="details" className="mt-4">
              <ScrollArea className="h-[600px]">
                <div className="space-y-3 pr-4">
                  {results.findings.map((f) => (
                    <FindingDetail key={f.rsid} finding={f} />
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="export" className="mt-4 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="h-24 text-base"
                  onClick={() => {
                    const md = generateMarkdownReport(results);
                    downloadFile(md, "genomescope-report.md", "text/markdown");
                  }}
                >
                  Download Markdown Report
                </Button>
                <Button
                  variant="outline"
                  className="h-24 text-base"
                  onClick={() => {
                    const json = generateJSONExport(results);
                    downloadFile(
                      json,
                      "genomescope-results.json",
                      "application/json"
                    );
                  }}
                >
                  Download JSON Data
                </Button>
              </div>
            </TabsContent>
          </Tabs>

          <Alert className="mt-8">
            <AlertTitle>Disclaimer</AlertTitle>
            <AlertDescription className="text-xs leading-relaxed">
              This report is for informational and educational purposes only. It
              is NOT medical advice. Genetic associations are probabilistic, not
              deterministic. Consult healthcare providers before making medical
              decisions.
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
}
