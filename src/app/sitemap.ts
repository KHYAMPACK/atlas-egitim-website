import type { MetadataRoute } from "next";
import { programs, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/hakkimizda",
    "/programlar",
    "/deneme",
    "/sss",
    "/iletisim",
    "/gizlilik",
    ...programs.map((program) => `/programlar/${program.slug}`),
  ];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/programlar/") || route === "/deneme" ? 0.8 : 0.7,
  }));
}
