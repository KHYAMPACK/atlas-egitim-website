import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { pageMetadata } from "@/lib/seo";
import { faqs, site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Sık Sorulan Sorular",
  description: "Atlas VIP SSS: sınıflar, deneme, kayıt, ücret ve Gerzele adresi.",
  path: "/sss",
});

export default function FaqPage() {
  return (
    <div>
      <PageIntro eyebrow="Bilgi" title="Sık Sorulan Sorular">
        Sınıf, deneme, kayıt, ücret ve adres. Cevap yetmezse arayın.
      </PageIntro>

      <div className="container-page max-w-3xl py-10 md:py-14">
        <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {faqs.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="cursor-pointer list-none font-semibold">{item.q}</summary>
              <p className="mt-3 text-[var(--muted)]">{item.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href={`tel:${site.phoneTel}`} className="btn btn-secondary w-full sm:w-auto">
            {site.phoneDisplay}
          </a>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-signal w-full sm:w-auto">
            WhatsApp
          </a>
          <Link href="/iletisim" className="btn btn-navy w-full sm:w-auto">
            İletişim
          </Link>
        </div>
      </div>
    </div>
  );
}
