import type { Metadata } from "next";
import Link from "next/link";
import { JourneyMap } from "@/components/JourneyMap";
import { PageIntro } from "@/components/PageIntro";
import { pageMetadata } from "@/lib/seo";
import { journey, site, startSteps, whatsappLink } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "100 Günlük Yolculuk",
  description:
    "Atlas VIP 100 günlük LGS hazırlığı: seviye tespiti, konu tekrarı, deneme kulübü, hız ve sınava hazırlık. Denizli Gerzele.",
  path: "/yolculuk",
});

export default function JourneyPage() {
  return (
    <div>
      <PageIntro eyebrow="Hazırlık" title={journey.title}>
        {journey.intro}
      </PageIntro>
      <JourneyMap showIntro={false} />

      <div className="container-page py-12 md:py-16">
        <h2 className="font-[family-name:var(--font-display)] text-3xl">Nasıl Başlarız</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {startSteps.map((step) => (
            <li key={step.n}>
              <h3 className="font-[family-name:var(--font-display)] text-xl">{step.title}</h3>
              <p className="mt-2 text-[var(--muted)]">{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-signal">
            WhatsApp
          </a>
          <a href={`tel:${site.phoneTel}`} className="text-lg font-semibold">
            {site.phoneDisplay}
          </a>
          <Link href="/iletisim" className="text-lg font-semibold">
            İletişim
          </Link>
        </div>
      </div>
    </div>
  );
}
