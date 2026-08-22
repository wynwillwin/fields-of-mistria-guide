import type { MetadataRoute } from "next";
import { guides } from "@/lib/guides";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const guidePaths = guides.map((guide) => guide.href);
  const paths = [...new Set(["/", "/guides/", ...guidePaths])];

  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/guides/" ? 0.8 : 0.7,
  }));
}
