import type { Metadata } from "next";
import Link from "next/link";
import { DenemePublishersCard } from "@/components/DenemePublishersCard";
import { EmText } from "@/components/EmText";
import { FaqAccordion } from "@/components/FaqAccordion";
import { LeadBand } from "@/components/LeadBand";
import { PageIntro } from "@/components/PageIntro";
import { pageMetadata } from "@/lib/seo";
import { denemeClub, getProgram, site, whatsappLink } from "@/lib/site";

const program = getProgram("deneme-kulubu");

export const metadata: Metadata = pageMetadata({
  title: "Deneme Kulübü",
  description:
    "Atlas VIP Deneme Kulübü: Gerzele’de haftalık LGS denemesi, konu konu net özeti ve isteyene hızlı okuma. 5–8. sınıf.",
  path: denemeClub.href,
});

export default function DenemePage() {
  return (
    <div>
      <PageIntro eyebrow={denemeClub.eyebrow} title={denemeClub.title}>
        {denemeClub.intro}
      </PageIntro>

      <LeadBand title="Deneme Kulübü İçin Yazın" intent="bilgi" tone="navy" />

      <section className="py-12 md:py-16" aria-labelledby="deneme-why-title">
        <div className="container-page grid items-start gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-[1.6rem] bg-[var(--foam)] p-6 shadow-[0_14px_40px_-28px_rgba(18,32,51,0.4)] md:p-8">
            <h2
              id="deneme-why-title"
              className="font-[family-name:var(--font-display)] text-[clamp(1.55rem,2.8vw,2.15rem)] leading-[1.15] tracking-tight"
            >
              {denemeClub.heading}
            </h2>
            <div className="mt-5 space-y-4 text-[1.02rem] leading-[1.75] text-[var(--muted)]">
              <p>
                <EmText text={denemeClub.promo.p1} />
              </p>
              <p>
                <EmText text={denemeClub.promo.p2} />
              </p>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${site.phoneTel}`} className="btn btn-signal">
                Telefonla bilgi alın
              </a>
              <a
                href={whatsappLink("Merhaba, Deneme Kulübü hakkında bilgi almak istiyorum.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                WhatsApp’tan yazın
              </a>
            </div>
          </article>

          <DenemePublishersCard />
        </div>
      </section>

      <section className="py-12 md:py-16" aria-labelledby="deneme-points-title">
        <div className="container-page">
          <h2
            id="deneme-points-title"
            className="font-[family-name:var(--font-display)] text-3xl tracking-tight md:text-4xl"
          >
            Kulüpte Ne Olur
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {denemeClub.points.map((point) => (
              <li
                key={point.title}
                className="rounded-[1.5rem] bg-[var(--foam)] p-6 shadow-[0_14px_40px_-28px_rgba(18,32,51,0.4)]"
              >
                <h3 className="font-[family-name:var(--font-display)] text-xl tracking-tight">{point.title}</h3>
                <p className="mt-2 text-[var(--muted)]">{point.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {program ? (
        <section className="bg-[var(--foam)] py-12 md:py-16" aria-labelledby="deneme-process-title">
          <div className="container-page grid gap-10 md:grid-cols-[1fr_0.9fr] md:items-start">
            <div>
              <h2
                id="deneme-process-title"
                className="font-[family-name:var(--font-display)] text-3xl tracking-tight md:text-4xl"
              >
                Nasıl İşler
              </h2>
              <ol className="mt-8 space-y-8">
                {program.process.map((step, index) => (
                  <li key={step.title}>
                    <p className="text-xs font-semibold tracking-[0.14em] text-[var(--signal)]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl">{step.title}</h3>
                    <p className="mt-2 text-[var(--muted)]">{step.text}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl tracking-tight">Bu Hattın İçinde</h2>
              <ul className="mt-5 space-y-3">
                {program.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-[var(--muted)]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--signal)]" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
              <Link href="/programlar" className="mt-8 inline-block text-sm underline decoration-[var(--line)] underline-offset-4">
                Tüm programlar
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      <section className="py-12 md:py-16" aria-labelledby="deneme-faq-title">
        <div className="container-page grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
          <div>
            <h2
              id="deneme-faq-title"
              className="font-[family-name:var(--font-display)] text-3xl tracking-tight md:text-4xl"
            >
              Sorular
            </h2>
            <p className="mt-4 text-[var(--muted)]">Kontenjan ve gün için arayın veya yazın.</p>
          </div>
          <FaqAccordion items={denemeClub.faqs} />
        </div>
      </section>
    </div>
  );
}
