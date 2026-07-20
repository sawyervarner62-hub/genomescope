"use client";

import { useCallback } from "react";
import { useGenomeAnalysis } from "@/hooks/use-genome-analysis";
import { FileDropzone } from "@/components/upload/file-dropzone";
import { ParseProgress } from "@/components/upload/parse-progress";
import { DashboardHeadline } from "@/components/results/dashboard-headline";
import { CategoryCard } from "@/components/results/category-card";
import { PathwayView } from "@/components/results/pathway-view";
import { FindingDetail } from "@/components/results/finding-detail";
import { MagnitudeDistribution } from "@/components/charts/magnitude-distribution";
import { CategoryOverview } from "@/components/charts/category-overview";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import {
  generateMarkdownReport,
  generateJSONExport,
  downloadFile,
} from "@/lib/report-generator";
import { SAMPLE_GENOME } from "@/lib/sample-genome";
import { ArchitectureDiagram } from "@/components/portfolio/architecture-diagram";

export default function TraitmapPage() {
  const { phase, progress, results, error, analyze, analyzePrebuilt, reset } =
    useGenomeAnalysis();

  const handleFileSelect = useCallback(
    (file: File) => {
      analyze(file);
    },
    [analyze]
  );

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Header with back link */}
      <div className="flex items-center justify-between mb-8 animate-fade-up">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground/70 hover:text-foreground transition-colors duration-200"
        >
          <ArrowLeft className="size-4" />
          Back to Portfolio
        </Link>
      </div>

      {/* Idle — architecture + upload */}
      {phase === "idle" && (
        <>
          <div className="animate-fade-up-delay-1">
            <ArchitectureDiagram />
          </div>
          <div className="animate-fade-up-delay-3">
            <FileDropzone
              onFileSelect={handleFileSelect}
              onDemoClick={() => analyzePrebuilt(SAMPLE_GENOME)}
            />
          </div>
        </>
      )}

      {/* Parsing / Analyzing */}
      {(phase === "parsing" || phase === "analyzing") && (
        <div className="animate-fade-up">
          <ParseProgress progress={progress} phase={phase} />
        </div>
      )}

      {/* Error */}
      {phase === "error" && (
        <div className="w-full max-w-lg mx-auto space-y-4 animate-fade-up">
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

      {/* Complete — Results dashboard */}
      {phase === "complete" && results && (
        <div className="space-y-6">
          {/* Title bar */}
          <div className="flex items-center justify-between animate-fade-up">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter">
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, oklch(0.75 0.2 280), oklch(0.65 0.22 250))",
                  }}
                >
                  Traitmap
                </span>
              </h1>
              <p className="text-muted-foreground/70 text-sm">
                Analysis complete &mdash; {results.summary.analyzedSNPs} SNPs
                matched
              </p>
            </div>
            <Button
              variant="outline"
              onClick={reset}
              className="border-border/40 hover:border-primary/30"
            >
              New Analysis
            </Button>
          </div>

          {/* Headline dashboard */}
          <div className="animate-fade-up-delay-1">
            <DashboardHeadline results={results} />
          </div>

          {/* Tabs */}
          <div className="animate-fade-up-delay-2">
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
                    className="h-24 text-base border-border/40 hover:border-primary/30 hover:shadow-[0_0_30px_-10px] hover:shadow-primary/15 transition-all duration-300"
                    onClick={() => {
                      const md = generateMarkdownReport(results);
                      downloadFile(md, "traitmap-report.md", "text/markdown");
                    }}
                  >
                    Download Markdown Report
                  </Button>
                  <Button
                    variant="outline"
                    className="h-24 text-base border-border/40 hover:border-primary/30 hover:shadow-[0_0_30px_-10px] hover:shadow-primary/15 transition-all duration-300"
                    onClick={() => {
                      const json = generateJSONExport(results);
                      downloadFile(
                        json,
                        "traitmap-results.json",
                        "application/json"
                      );
                    }}
                  >
                    Download JSON Data
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Disclaimer */}
          <div className="animate-fade-up-delay-3">
            <Alert className="border-border/30 bg-card/40 backdrop-blur-sm">
              <AlertTitle>Disclaimer</AlertTitle>
              <AlertDescription className="text-xs leading-relaxed text-muted-foreground/70">
                This report is for informational and educational purposes only.
                It is NOT medical advice. Genetic associations are probabilistic,
                not deterministic. Consult healthcare providers before making
                medical decisions.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      )}
    </div>
  );
}
