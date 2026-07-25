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
    <div className="dark surface-ink min-h-screen bg-ink text-paper-text">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Back link */}
        <div className="flex items-center justify-between mb-10 hero-fade-in">
          <Link
            href="/"
            className="link-accent inline-flex items-center gap-2 mono-spec text-steel-light hover:text-viridian transition-colors duration-200"
          >
            <ArrowLeft className="size-4" />
            Back to Portfolio
          </Link>
          <span className="mono-spec hidden sm:inline">FIG. 01 / ANALYZER</span>
        </div>

        {/* Idle — intro + architecture + upload */}
        {phase === "idle" && (
          <>
            <div className="hero-fade-in hero-delay-1 mb-14 max-w-2xl">
              <p className="eyebrow">Privacy-First Genome Analysis</p>
              <h1 className="mt-4 text-display-md text-paper-text">
                Traitmap
              </h1>
              <p className="mt-4 text-steel-light leading-relaxed">
                Upload your 23andMe raw data and explore interactive genetic
                insights. Everything runs in your browser, so your genome{" "}
                <span className="font-display italic text-viridian">
                  never touches a server.
                </span>
              </p>
            </div>
            <div className="hero-fade-in hero-delay-2">
              <ArchitectureDiagram />
            </div>
            <div className="hero-fade-in hero-delay-3">
              <FileDropzone
                onFileSelect={handleFileSelect}
                onDemoClick={() => analyzePrebuilt(SAMPLE_GENOME)}
              />
            </div>
          </>
        )}

        {/* Parsing / Analyzing */}
        {(phase === "parsing" || phase === "analyzing") && (
          <div className="hero-fade-in">
            <ParseProgress progress={progress} phase={phase} />
          </div>
        )}

        {/* Error */}
        {phase === "error" && (
          <div className="w-full max-w-lg mx-auto space-y-4 hero-fade-in">
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
            <div className="flex items-end justify-between gap-4 hero-fade-in">
              <div>
                <p className="eyebrow">Analysis Complete</p>
                <h1 className="mt-2 text-display-md text-paper-text">
                  Traitmap
                </h1>
                <p className="mono-spec mt-1">
                  {results.summary.analyzedSNPs} SNPs matched
                </p>
              </div>
              <Button variant="outline" onClick={reset}>
                New Analysis
              </Button>
            </div>

            {/* Headline dashboard */}
            <div className="hero-fade-in hero-delay-1">
              <DashboardHeadline results={results} />
            </div>

            {/* Tabs */}
            <div className="hero-fade-in hero-delay-2">
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
                        downloadFile(md, "traitmap-report.md", "text/markdown");
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
            <div className="hero-fade-in hero-delay-3">
              <Alert>
                <AlertTitle>Disclaimer</AlertTitle>
                <AlertDescription className="text-xs leading-relaxed text-steel-light">
                  This report is for informational and educational purposes
                  only. It is NOT medical advice. Genetic associations are
                  probabilistic, not deterministic. Consult healthcare providers
                  before making medical decisions.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
