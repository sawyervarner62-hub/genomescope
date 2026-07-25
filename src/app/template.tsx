/**
 * A template.tsx re-mounts on every navigation (unlike layout.tsx), so the
 * `.route-fade` entrance replays on each page change. CSS-only and auto-inert
 * under prefers-reduced-motion (see globals.css).
 */
export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="route-fade">{children}</div>;
}
