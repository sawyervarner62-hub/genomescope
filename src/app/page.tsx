"use client";

import { useGenomeAnalysis } from "@/hooks/use-genome-analysis";
import { FileDropzone } from "@/components/upload/file-dropzone";
import { ParseProgress } from "@/components/upload/parse-progress";
import { ExecutiveSummary } from "@/components/results/executive-summary";
import { CategoryCard } from "@/components/results/category-card";
import { PathwayView } from "@/components/results/pathway-view";
import { FindingDetail } from "@/components/results/finding-detail";
import { MagnitudeDistribution } from "@/components/charts/magnitude-distribution";
import { CategoryOverview } from "@/components/charts/category-overview";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  generateMarkdownReport,
  generateJSONExport,
  downloadFile,
} from "@/lib/report-generator";

export default function Home() {
  const { phase, progress, results, error, analyze, reset } =
    useGenomeAnalysis();

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {phase === "idle" && <FileDropzone onFileSelect={analyze} />}

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

            <ExecutiveSummary results={results} />

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
                {results.summary.highImpact > 0 && (
                  <div className="space-y-3">
                    <h2 className="text-xl font-semibold">
                      Priority Findings
                    </h2>
                    <div className="space-y-3">
                      {results.findings
                        .filter((f) => f.magnitude >= 3)
                        .map((f) => (
                          <FindingDetail key={f.rsid} finding={f} />
                        ))}
                    </div>
                  </div>
                )}
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
                This report is for informational and educational purposes only.
                It is NOT medical advice. Genetic associations are
                probabilistic, not deterministic. Consult healthcare providers
                before making medical decisions. Your genes are one factor among
                many &mdash; environment, lifestyle, and other genes also
                matter.
              </AlertDescription>
            </Alert>
          </div>
        )}
      </div>
    </main>
  );
}
