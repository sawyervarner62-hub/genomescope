"use client";

import { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const particleContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particleContainerRef.current;
    if (!container) return;

    // Create floating particles
    const particles: HTMLDivElement[] = [];
    const count = 20;

    for (let i = 0; i < count; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${60 + Math.random() * 40}%`;
      particle.style.animationDuration = `${8 + Math.random() * 12}s`;
      particle.style.animationDelay = `${Math.random() * 10}s`;
      particle.style.width = `${1 + Math.random() * 2}px`;
      particle.style.height = particle.style.width;
      container.appendChild(particle);
      particles.push(particle);
    }

    return () => {
      particles.forEach((p) => p.remove());
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {/* Mesh blob 1 — large purple, top-left */}
      <div
        className="mesh-blob mesh-blob-1"
        style={{
          top: "-15%",
          left: "-10%",
          width: "55vw",
          height: "55vw",
          maxWidth: "700px",
          maxHeight: "700px",
          background:
            "radial-gradient(ellipse at 30% 40%, oklch(0.35 0.2 285), oklch(0.2 0.12 290) 60%, transparent 80%)",
          opacity: 0.6,
        }}
      />

      {/* Mesh blob 2 — blue, right-center */}
      <div
        className="mesh-blob mesh-blob-2"
        style={{
          top: "30%",
          right: "-15%",
          width: "50vw",
          height: "50vw",
          maxWidth: "600px",
          maxHeight: "600px",
          background:
            "radial-gradient(ellipse at 60% 50%, oklch(0.3 0.18 240), oklch(0.18 0.1 250) 60%, transparent 80%)",
          opacity: 0.5,
        }}
      />

      {/* Mesh blob 3 — violet, bottom-left */}
      <div
        className="mesh-blob mesh-blob-3"
        style={{
          bottom: "-10%",
          left: "10%",
          width: "45vw",
          height: "45vw",
          maxWidth: "550px",
          maxHeight: "550px",
          background:
            "radial-gradient(ellipse at 40% 60%, oklch(0.28 0.18 300), oklch(0.15 0.1 310) 60%, transparent 80%)",
          opacity: 0.45,
        }}
      />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(oklch(0.7 0.1 270 / 20%) 1px, transparent 1px),
            linear-gradient(90deg, oklch(0.7 0.1 270 / 20%) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating particles container */}
      <div ref={particleContainerRef} className="absolute inset-0" />

      {/* Top-edge glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.6 0.2 270 / 30%), transparent)",
        }}
      />
    </div>
  );
}
