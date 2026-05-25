import type { MetadataRoute } from "next";
import { cities, BASE_URL } from "@/lib/cities";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/pc-build`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services/parts-and-build`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];

  const cityRoutes: MetadataRoute.Sitemap = cities.flatMap((city) => [
    {
      url: `${BASE_URL}/services/pc-build/${city.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/parts-and-build/${city.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ]);

  return [...staticRoutes, ...cityRoutes];
}
