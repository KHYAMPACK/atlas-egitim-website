import type { Metadata } from "next";
import { site } from "./site";

export const homeTitle = "Atlas VIP Eğitim Kurumu | LGS hazırlık Denizli Gerzele";

export const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Atlas VIP Eğitim Kurumu",
} as const;

export const sharedOpenGraph = {
  type: "website" as const,
  locale: "tr_TR",
  siteName: site.name,
  images: [ogImage],
};

export const sharedTwitter = {
  card: "summary_large_image" as const,
  images: ["/opengraph-image"],
};

export function pageMetadata({
  title,
  description,
  path,
  robots,
}: {
  title: string;
  description: string;
  path: string;
  robots?: Metadata["robots"];
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    ...(robots ? { robots } : {}),
    openGraph: {
      ...sharedOpenGraph,
      title,
      description,
      url: path,
    },
    twitter: {
      ...sharedTwitter,
      title,
      description,
    },
  };
}
