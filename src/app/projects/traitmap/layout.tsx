import type { Metadata } from "next";
import { JsonLd, traitmapAppSchema } from "@/components/seo/json-ld";
import { SITE_URL, getOgImageUrl } from "@/lib/seo";

const DESCRIPTION =
  "Upload your 23andMe raw data and explore interactive genetic insights entirely in your browser. Nothing is ever uploaded to a server.";

// The analyzer page itself is a client component and can't export metadata,
// so this server layout carries its SEO + SoftwareApplication schema.
export const metadata: Metadata = {
  title: "Traitmap",
  description: DESCRIPTION,
  alternates: { canonical: "/projects/traitmap" },
  openGraph: {
    type: "website",
    title: "Traitmap — Privacy-First Genome Analysis",
    description: DESCRIPTION,
    url: `${SITE_URL}/projects/traitmap`,
    images: [getOgImageUrl("Traitmap", DESCRIPTION)],
  },
  twitter: {
    card: "summary_large_image",
    title: "Traitmap — Privacy-First Genome Analysis",
    description: DESCRIPTION,
    images: [getOgImageUrl("Traitmap", DESCRIPTION)],
  },
};

export default function TraitmapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={traitmapAppSchema} />
      {children}
    </>
  );
}
