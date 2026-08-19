import type { Metadata } from "next";
import Link from "next/link";
import { CloseSupport } from "@/components/CloseSupport";
import { ExamResults } from "@/components/ExamResults";
import { FaqAccordion } from "@/components/FaqAccordion";
import { GradeStrip } from "@/components/GradeStrip";
import { HomeHero } from "@/components/HomeHero";
import { JourneyMap } from "@/components/JourneyMap";
import { LeadBand } from "@/components/LeadBand";
import { LgsGuide } from "@/components/LgsGuide";
import { LocalInfo } from "@/components/LocalInfo";
import { MethodStrip } from "@/components/MethodStrip";
import { ProgramsBand } from "@/components/ProgramsBand";
import { StaffUnits } from "@/components/StaffUnits";
import { WhyAtlas } from "@/components/WhyAtlas";
import { homeTitle, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: homeTitle,
  description: site.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <LeadBand title="Hemen İletişime Geçin" intent="kayit" tone="navy" />
      <LocalInfo variant="lgs" />
      <LgsGuide />
      <MethodStrip />
      <GradeStrip />
      <ProgramsBand />
      <WhyAtlas />
      <ExamResults />
      <JourneyMap />
      <StaffUnits />
      <CloseSupport />

      <section className="py-12 md:py-16" aria-labelledby="faq-title">
        <div className="container-page grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
          <div>
            <h2 id="faq-title" className="font-[family-name:var(--font-display)] text-3xl tracking-tight md:text-4xl">
              Sorular
            </h2>
            <p className="mt-4 text-[var(--muted)]">
              Daha fazlası{" "}
              <Link href="/sss" className="text-[var(--ink)] underline decoration-[var(--line)] underline-offset-4">
                SSS sayfasında
              </Link>
              .
            </p>
          </div>
          <FaqAccordion />
        </div>
      </section>

      <section className="border-t border-[var(--line)]">
        <div className="container-page grid gap-6 py-12 md:grid-cols-2 md:items-end md:py-14">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight md:text-4xl">Gelin Görün</h2>
            <p className="mt-3 text-[var(--muted)]">{site.address.full}</p>
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold">
              <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
              <Link href="/iletisim">İletişim</Link>
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
                Google’da aç
              </a>
            </div>
          </div>
        </div>
        <iframe
          title="Atlas VIP Eğitim Kurumu harita"
          src={site.mapsEmbedUrl}
          className="h-[280px] w-full border-0 sm:h-[380px] md:h-[460px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          allowFullScreen
        />
      </section>
    </>
  );
}
