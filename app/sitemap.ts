import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { SERVICES } from "@/lib/services";
import { INDUSTRIES } from "@/lib/industries";
import { RESOURCES } from "@/lib/resources";
import { ARTICLES } from "@/lib/articles";
import { SILO_PAGES } from "@/lib/silo";

const STATIC_PATHS = [
  "/",
  "/about/",
  "/contact/",
  "/services/",
  "/industries/",
  "/resources/",
  "/resources/blog/",
  "/careers/",
  "/positions/",
  "/franchise/",
  "/quote/",
  "/blog/",
  "/pricing/",
  "/reviews/",
  "/privacy/",
  "/terms/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url.startsWith("http") ? SITE.url : "https://example.com";
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "/" ? 1.0 : 0.7,
  }));

  const serviceEntries: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${base}/services/${s.slug}/`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const industryEntries: MetadataRoute.Sitemap = INDUSTRIES.map((i) => ({
    url: `${base}/industries/${i.slug}/`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const resourceEntries: MetadataRoute.Sitemap = RESOURCES.map((r) => ({
    url: `${base}/resources/${r.slug}/`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const articleEntries: MetadataRoute.Sitemap = ARTICLES.map((a) => ({
    url: `${base}/blog/${a.slug}/`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const siloEntries: MetadataRoute.Sitemap = SILO_PAGES.map((p) => ({
    url: `${base}${p.url}/`,
    lastModified,
    changeFrequency: "monthly",
    priority:
      p.type === "city_hub" ? 0.8 : p.type === "service_in_city" ? 0.75 : 0.6,
  }));

  return [
    ...staticEntries,
    ...serviceEntries,
    ...industryEntries,
    ...resourceEntries,
    ...articleEntries,
    ...siloEntries,
  ];
}
