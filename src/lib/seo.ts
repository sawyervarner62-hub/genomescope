/**
 * SEO utilities — canonical URLs and dynamic Open Graph image links.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_APP_URL || "https://traitmap.vercel.app";

export function getCanonicalUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

/**
 * URL for the dynamic OG image generator (src/app/api/og/route.tsx).
 * Relative on purpose — `metadataBase` in the root layout resolves it to an
 * absolute URL for crawlers.
 */
export function getOgImageUrl(title: string, subtitle?: string): string {
  const params = new URLSearchParams({ title });
  if (subtitle) params.set("subtitle", subtitle);
  return `/api/og?${params.toString()}`;
}
