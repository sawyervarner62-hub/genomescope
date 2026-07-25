import { cn } from "@/lib/utils";

/**
 * Signature DNA double-helix illustration. Two out-of-phase sine strands
 * self-draw via stroke-dashoffset (the `pathLength=1` attribute normalizes
 * each strand's dash to 0..1 so the CSS animation is length-independent), and
 * the base-pair rungs light up on a staggered delay. All motion lives in
 * globals.css and is disabled under prefers-reduced-motion (strands render
 * fully drawn, rungs at rest). Decorative — marked role="img".
 *
 * Geometry is computed once at module load (Math.sin only — deterministic).
 */
const H = 440;
const CX = 90;
const AMP = 62;
const TURNS = 3;
const STEP = 5;
const TWO_PI = Math.PI * 2;

function strandPath(phase: number): string {
  let d = "";
  for (let y = 0; y <= H; y += STEP) {
    const x = CX + AMP * Math.sin((y / H) * TURNS * TWO_PI + phase);
    d += `${y === 0 ? "M" : "L"}${x.toFixed(1)} ${y} `;
  }
  return d.trim();
}

const STRAND_FRONT = strandPath(0);
const STRAND_BACK = strandPath(Math.PI);

const RUNGS: { y: number; xA: number; xB: number; i: number }[] = [];
{
  let i = 0;
  for (let y = 16; y <= H - 16; y += 22) {
    const t = (y / H) * TURNS * TWO_PI;
    RUNGS.push({
      y,
      xA: CX + AMP * Math.sin(t),
      xB: CX + AMP * Math.sin(t + Math.PI),
      i: i++,
    });
  }
}

export function DnaHelix({ className }: { className?: string }) {
  return (
    <svg
      viewBox={`0 0 180 ${H}`}
      fill="none"
      role="img"
      aria-label="Illustration of a DNA double helix"
      className={cn("h-full w-auto", className)}
    >
      {/* Back strand — dimmer, draws a beat later. */}
      <path
        className="helix-strand"
        d={STRAND_BACK}
        pathLength={1}
        stroke="var(--viridian)"
        strokeOpacity={0.35}
        strokeWidth={2}
        strokeLinecap="round"
        style={{ animationDelay: "0.15s" }}
      />

      {/* Base-pair rungs + nucleotide nodes. */}
      {RUNGS.map((r) => (
        <g
          key={r.i}
          className="helix-rung"
          style={{ animationDelay: `${(0.45 + r.i * 0.05).toFixed(2)}s` }}
        >
          <line
            x1={r.xA}
            y1={r.y}
            x2={r.xB}
            y2={r.y}
            stroke="var(--viridian)"
            strokeWidth={1.5}
          />
          <circle cx={r.xA} cy={r.y} r={2.6} fill="var(--viridian)" />
          <circle cx={r.xB} cy={r.y} r={2.6} fill="var(--viridian)" />
        </g>
      ))}

      {/* Front strand — full strength, drawn on top. */}
      <path
        className="helix-strand"
        d={STRAND_FRONT}
        pathLength={1}
        stroke="var(--viridian)"
        strokeWidth={2.5}
        strokeLinecap="round"
      />
    </svg>
  );
}
