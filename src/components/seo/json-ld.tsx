import { safeJsonLd } from "@/lib/json-ld";
import { SITE_URL } from "@/lib/seo";

/** Embeds a schema.org graph as XSS-safe application/ld+json. */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(data) }}
    />
  );
}

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Sawyer Varner",
  url: SITE_URL,
  jobTitle: "Student Developer",
  description:
    "Student developer building at the intersection of technology and business, from AI automation to privacy-first genome analysis.",
  sameAs: ["https://github.com/sawyervarner62-hub"],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: "Sawyer Varner",
  url: SITE_URL,
  author: { "@id": PERSON_ID },
};

export const traitmapAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Traitmap",
  url: `${SITE_URL}/projects/traitmap`,
  applicationCategory: "HealthApplication",
  operatingSystem: "Any (web browser)",
  description:
    "Privacy-first genome analysis. Upload 23andMe raw data and explore interactive genetic insights entirely in your browser — nothing is ever uploaded.",
  author: { "@id": PERSON_ID },
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export function blogPostingSchema(post: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.datePublished,
    author: { "@id": PERSON_ID },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };
}
