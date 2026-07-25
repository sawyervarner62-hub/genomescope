import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans, Recursive } from "next/font/google";
import { Navbar } from "@/components/portfolio/navbar";
import { SkipLink, MAIN_CONTENT_ID } from "@/components/a11y/skip-link";
import { ScrollProgress } from "@/components/scroll-progress";
import { SITE_URL, getOgImageUrl } from "@/lib/seo";
import "./globals.css";

// Fraunces (display) carries every headline and the hero h1 (LCP element),
// so preload it to win the font-request race on first paint.
const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
  preload: true,
  variable: "--font-fraunces",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-dm",
});

// Recursive is mono-only: telemetry, indices, code, rsIDs, genotypes.
const recursive = Recursive({
  subsets: ["latin"],
  axes: ["MONO"],
  display: "swap",
  preload: false,
  variable: "--font-recursive",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f2ede4",
};

const DESCRIPTION =
  "Student developer building at the intersection of technology and business. Projects include AI automation, privacy-first genome analysis, and more.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sawyer Varner — Developer & Innovator",
    template: "%s — Sawyer Varner",
  },
  description: DESCRIPTION,
  authors: [{ name: "Sawyer Varner", url: SITE_URL }],
  creator: "Sawyer Varner",
  keywords: [
    "Sawyer Varner",
    "developer portfolio",
    "genome analysis",
    "Traitmap",
    "privacy-first",
    "Next.js",
    "TypeScript",
    "bioinformatics",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Sawyer Varner",
    locale: "en_US",
    url: SITE_URL,
    title: "Sawyer Varner — Developer & Innovator",
    description: DESCRIPTION,
    images: [
      {
        url: getOgImageUrl("Sawyer Varner"),
        width: 1200,
        height: 630,
        alt: "Sawyer Varner — Developer & Innovator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sawyer Varner — Developer & Innovator",
    description: DESCRIPTION,
    images: [getOgImageUrl("Sawyer Varner")],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} ${recursive.variable}`}
    >
      <body className="antialiased">
        <SkipLink />
        <ScrollProgress />
        <Navbar />
        <main id={MAIN_CONTENT_ID} tabIndex={-1} className="relative outline-none">
          {children}
        </main>
      </body>
    </html>
  );
}
