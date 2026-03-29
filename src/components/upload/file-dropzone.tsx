"use client";

import { useCallback, useState, DragEvent, ChangeEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FileDropzoneProps {
  onFileSelect: (file: File) => void;
}

export function FileDropzone({ onFileSelect }: FileDropzoneProps) {
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
        <h1 className="text-4xl font-bold tracking-tight">GenomeScope</h1>
        <p className="text-muted-foreground text-lg">
          Interactive Genome Analysis Dashboard
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
          <div className="text-6xl">🧬</div>
          <div className="text-center space-y-1">
            <p className="text-lg font-medium">
              Drop your 23andMe raw data file here
            </p>
            <p className="text-sm text-muted-foreground">
              or click to browse (.txt format)
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
        </CardContent>
      </Card>

      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <Badge variant="secondary" className="gap-1">
          <span>🔒</span> 100% Client-Side
        </Badge>
        <Badge variant="secondary" className="gap-1">
          <span>🚫</span> No Upload
        </Badge>
        <Badge variant="secondary" className="gap-1">
          <span>🛡️</span> Your Data Stays Private
        </Badge>
      </div>

      <p className="text-xs text-center text-muted-foreground max-w-md mx-auto">
        Your genome data is processed entirely in your browser using a Web Worker.
        Nothing is sent to any server. Close the tab and it&apos;s gone.
      </p>
    </div>
  );
}
