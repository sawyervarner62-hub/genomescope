"use client";

import { useCallback, useState, DragEvent, ChangeEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileUp, Lock, ShieldCheck, EyeOff, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FileDropzoneProps {
  onFileSelect: (file: File) => void;
  onDemoClick?: () => void;
}

export function FileDropzone({ onFileSelect, onDemoClick }: FileDropzoneProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) onFileSelect(file);
    },
    [onFileSelect]
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) onFileSelect(file);
    },
    [onFileSelect]
  );

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Upload Your Data</h2>
        <p className="text-muted-foreground">
          Drop your 23andMe raw data file to begin analysis
        </p>
      </div>

      <Card
        className={`border-2 border-dashed transition-colors cursor-pointer ${
          isDragging
            ? "border-primary bg-primary/5"
            : "border-muted-foreground/25 hover:border-primary/50"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <CardContent className="flex flex-col items-center justify-center py-16 gap-4">
          <div
            className="size-16 rounded-2xl flex items-center justify-center"
            style={{
              backgroundImage:
                "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
              opacity: 0.9,
            }}
          >
            <FileUp className="size-8 text-white" />
          </div>
          <div className="text-center space-y-1">
            <p className="text-lg font-medium">
              Drop your file here
            </p>
            <p className="text-sm text-muted-foreground">
              .txt, .csv, or .tsv format
            </p>
          </div>
          <label>
            <input
              type="file"
              accept=".txt,.csv,.tsv"
              className="hidden"
              onChange={handleChange}
            />
            <span className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 cursor-pointer">
              Choose File
            </span>
          </label>
          {onDemoClick && (
            <div className="flex flex-col items-center gap-1 pt-2">
              <p className="text-xs text-muted-foreground">
                No genome file? Try with sample data
              </p>
              <Button
                variant="ghost"
                size="sm"
                className="gap-1.5"
                onClick={onDemoClick}
              >
                <Play className="size-3.5" />
                Try Demo
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground flex-wrap">
        <Badge variant="secondary" className="gap-1.5">
          <Lock className="size-3" /> Client-Side Only
        </Badge>
        <Badge variant="secondary" className="gap-1.5">
          <ShieldCheck className="size-3" /> No Server Upload
        </Badge>
        <Badge variant="secondary" className="gap-1.5">
          <EyeOff className="size-3" /> Data Stays Private
        </Badge>
      </div>

      <p className="text-xs text-center text-muted-foreground max-w-md mx-auto">
        Your genome data is processed entirely in your browser using a Web Worker.
        Nothing is sent to any server. Close the tab and it&apos;s gone.
      </p>
    </div>
  );
}
