"use client";

import { useCallback, useState, DragEvent, ChangeEvent } from "react";
import { FileUp, Lock, ShieldCheck, EyeOff, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface FileDropzoneProps {
  onFileSelect: (file: File) => void;
  onDemoClick?: () => void;
}

const privacyBadges = [
  { icon: Lock, label: "Client-Side Only" },
  { icon: ShieldCheck, label: "No Server Upload" },
  { icon: EyeOff, label: "Data Stays Private" },
];

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
      <div className="space-y-1.5">
        <p className="eyebrow">Try It Now</p>
        <h2 className="text-display-sm text-paper-text">
          Explore a sample genome
        </h2>
        <p className="text-steel-light text-sm">
          No file or account needed. See the full analysis instantly.
        </p>
      </div>

      {onDemoClick && (
        <div className="space-y-2">
          <button type="button" className="btn btn-accent" onClick={onDemoClick}>
            <Play className="size-4" />
            Run the Live Demo
          </button>
          <p className="mono-spec">Uses a realistic sample genome</p>
        </div>
      )}

      {onDemoClick && (
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-rule" />
          <span className="mono-spec whitespace-nowrap">or analyze your own</span>
          <div className="h-px flex-1 bg-rule" />
        </div>
      )}

      <div
        className={cn(
          "spec-tile-ink border-2 border-dashed transition-colors cursor-pointer",
          isDragging
            ? "border-viridian bg-viridian/5"
            : "border-rule hover:border-viridian/60"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center justify-center py-8 gap-4 text-center">
          <div className="size-14 border border-rule bg-ink flex items-center justify-center text-viridian">
            <FileUp className="size-6" strokeWidth={1.5} />
          </div>
          <div className="space-y-1">
            <p className="font-display text-base font-semibold text-paper-text">
              Drop your 23andMe file here
            </p>
            <p className="mono-spec">.txt / .csv / .tsv (optional)</p>
          </div>
          <label>
            <input
              type="file"
              accept=".txt,.csv,.tsv"
              className="hidden"
              onChange={handleChange}
            />
            <span className="btn btn-paper cursor-pointer">Choose File</span>
          </label>
        </div>
      </div>

      <div className="flex items-center gap-x-5 gap-y-2 flex-wrap">
        {privacyBadges.map((badge) => (
          <span
            key={badge.label}
            className="mono-spec inline-flex items-center gap-1.5 text-steel-light"
          >
            <badge.icon className="size-3.5 text-viridian" />
            {badge.label}
          </span>
        ))}
      </div>

      <p className="text-xs text-steel-light max-w-md leading-relaxed">
        Your genome is processed entirely in your browser with a Web Worker.
        Nothing is sent to any server. Close the tab and it&apos;s gone.
      </p>
    </div>
  );
}
