"use client";

import { Shield, Cpu, BarChart3, Zap, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FileDropzone } from "@/components/upload/file-dropzone";

const features = [
  {
    icon: Shield,
    title: "100% Private",
    description:
      "Your genome data never leaves your browser. No uploads, no servers, no tracking.",
  },
  {
    icon: Cpu,
    title: "Browser-Powered",
    description:
      "Web Worker technology parses 600K+ lines in seconds without freezing your page.",
  },
  {
    icon: BarChart3,
    title: "Rich Analysis",
    description:
      "79 curated SNPs across 16 categories with clinical context and pathway mapping.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description:
      "Interactive charts, severity breakdowns, and exportable reports in one click.",
  },
];

interface HeroSectionProps {
  onFileSelect: (file: File) => void;
}

export function HeroSection({ onFileSelect }: HeroSectionProps) {
  return (
    <div className="space-y-24">
      {/* Nav */}
      <header className="flex items-center justify-between">
        <span className="text-lg font-semibold tracking-tight">
          Sawyer Varner
        </span>
        <a
          href="https://github.com/sawyervarner62-hub/genomescope"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="ghost" size="sm" className="gap-2">
            <Github className="size-4" />
            GitHub
          </Button>
        </a>
      </header>

      {/* Hero */}
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight">
          Decode Your Genome,{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--gradient-start), var(--gradient-end))",
            }}
          >
            Privately.
          </span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Upload your 23andMe raw data and explore interactive genetic insights.
          Everything runs in your browser &mdash; your DNA never touches a
          server.
        </p>
        <Button
          size="lg"
          className="text-base px-8"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--gradient-start), var(--gradient-end))",
            color: "white",
          }}
          onClick={() =>
            document
              .getElementById("upload")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Get Started
        </Button>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="border-border/50 bg-card/50 backdrop-blur-sm"
          >
            <CardContent className="pt-6 space-y-3">
              <div
                className="size-10 rounded-lg flex items-center justify-center"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
                }}
              >
                <feature.icon className="size-5 text-white" />
              </div>
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Upload */}
      <section id="upload">
        <FileDropzone onFileSelect={onFileSelect} />
      </section>

      {/* Footer */}
      <footer className="pb-8">
        <Separator className="mb-6" />
        <p className="text-center text-sm text-muted-foreground">
          Built by Sawyer Varner &middot; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
