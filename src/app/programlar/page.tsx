import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { ProgramsBand } from "@/components/ProgramsBand";
import { pageMetadata } from "@/lib/seo";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Programlar",
  description:
    "Atlas VIP programları: LGS hazırlık, okul ve bursluluk sınavı, yaz kampı, deneme kulübü ve hızlı okuma. Denizli Gerzele.",
  path: "/programlar",
});

export default function ProgramsPage() {
  return (
    <div>
      <PageIntro eyebrow="5–8. sınıf" title="Programlar">
        LGS, okul sınavı, yaz kampı ve deneme kulübü. Hangisinin size uyduğu tanışma görüşmesinde netleşir.
      </PageIntro>
      <ProgramsBand hideIntro />
      <div className="container-page pb-14 md:pb-20">
        <div className="flex flex-col items-start justify-between gap-5 rounded-2xl bg-[var(--foam)] px-6 py-8 md:flex-row md:items-center">
          <p className="font-[family-name:var(--font-display)] text-2xl">Hangisinin size uyduğuna birlikte bakalım.</p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-signal">
              WhatsApp
            </a>
            <a href={`tel:${site.phoneTel}`} className="btn btn-secondary">
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
