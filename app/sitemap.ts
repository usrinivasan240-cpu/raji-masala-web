import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const pages = ["/", "/services", "/buyer-requirements", "/products", "/contact"];
  return pages.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: p === "/" ? 1 : 0.8,
  }));
}
