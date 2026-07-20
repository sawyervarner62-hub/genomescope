# Traitmap

A privacy-first genome analysis tool. Upload your 23andMe raw data (or run the built-in demo) and explore interactive genetic insights across drug metabolism, nutrition, fitness, and more. Every file is parsed and analyzed entirely in your browser with a Web Worker. Nothing is ever uploaded to a server.

## How it works

1. **Load data** — run the live demo with a realistic sample genome, or drop your own 23andMe `.txt` export. Your file never leaves the browser.
2. **Parse** — a Web Worker streams through the raw file (600K+ lines) without freezing the page.
3. **Match** — genotypes are matched against a curated database of 79 SNPs across 16 categories.
4. **Explore** — an interactive dashboard with charts, per-category findings, pathway views, and downloadable Markdown/JSON reports.

## Tech

- Next.js (App Router) + TypeScript
- Web Workers for client-side parsing
- Recharts for visualization
- Tailwind CSS + shadcn/ui

## Develop

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Disclaimer

For informational and educational purposes only. Not medical advice. Genetic associations are probabilistic, not deterministic. Consult a healthcare provider before making medical decisions.
