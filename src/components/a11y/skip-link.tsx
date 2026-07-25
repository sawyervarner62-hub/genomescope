/**
 * Skip-to-content link — lets keyboard and screen-reader users bypass the
 * nav and jump straight to <main>. Hidden until focused (see .skip-to-content
 * in globals.css). WCAG 2.4.1 (Bypass Blocks).
 */
export const MAIN_CONTENT_ID = "main-content";

export function SkipLink() {
  return (
    <a
      href={`#${MAIN_CONTENT_ID}`}
      className="skip-to-content"
      aria-label="Skip to main content"
    >
      Skip to main content
    </a>
  );
}
