import type { Metadata } from "next";
import { Instrument_Sans, Source_Sans_3 } from "next/font/google";
import { ConversionRails } from "@/components/ConversionRails";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { LeadPopup } from "@/components/LeadPopup";
import { homeTitle, sharedOpenGraph, sharedTwitter } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const display = Instrument_Sans({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: homeTitle,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.shortName,
  keywords: [
    "LGS hazırlık Denizli",
    "Gerzele etüt",
    "Merkezefendi LGS",
    "Atlas VIP Eğitim Kurumu",
    "ortaokul deneme Denizli",
  ],
  authors: [{ name: site.name }],
  alternates: {
    canonical: "/",
  },
  openGraph: sharedOpenGraph,
  twitter: sharedTwitter,
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" data-scroll-behavior="smooth" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-[var(--paper)] pb-[4.35rem] md:pb-0">
        <JsonLd />
        <a href="#icerik" className="skip-link">
          İçeriğe atla
        </a>
        <Header />
        <main id="icerik" tabIndex={-1} className="flex-1">
          {children}
        </main>
        <Footer />
        <ConversionRails />
        <LeadPopup />
      </body>
    </html>
  );
}
