import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: {
    path: string;
    changeFrequency: "weekly" | "monthly" | "yearly";
    priority: number;
  }[] = [
    { path: "", changeFrequency: "monthly", priority: 1 },
    { path: "/projects/traitmap", changeFrequency: "monthly", priority: 0.9 },
    { path: "/projects/frc-fantasy", changeFrequency: "yearly", priority: 0.7 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.6 },
    {
      path: "/blog/building-traitmap",
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];

  const lastModified = "2026-07-24";

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
