import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageIntro } from "@/components/PageIntro";
import { pageMetadata } from "@/lib/seo";
import { site, startSteps, whatsappLink } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "İletişim",
  description:
    "Atlas VIP Eğitim Kurumu iletişim: telefon, WhatsApp, Instagram ve Gerzele Merkezefendi adresi.",
  path: "/iletisim",
});

export default function ContactPage() {
  return (
    <div>
      <PageIntro eyebrow="Gerzele" title="İletişim">
        Telefon, WhatsApp veya form. Seviye tespiti ve kayıt için yazın.
      </PageIntro>

      <div className="container-page py-10 md:py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <aside className="space-y-8">
            <div>
              <p className="text-sm text-[var(--muted)]">Telefon</p>
              <a href={`tel:${site.phoneTel}`} className="mt-1 block font-[family-name:var(--font-display)] text-3xl">
                {site.phoneDisplay}
              </a>
              <a href={whatsappLink()} className="btn btn-whatsapp mt-4" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>
            <div>
              <p className="text-sm text-[var(--muted)]">Instagram</p>
              <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block font-semibold">
                @{site.instagram}
              </a>
            </div>
            <div>
              <p className="text-sm text-[var(--muted)]">Adres</p>
              <p className="mt-1">
                <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
                  {site.address.full}
                </a>
              </p>
              <ul className="mt-4 space-y-1 text-sm text-[var(--muted)]">
                {site.hours.map((h) => (
                  <li key={h.days}>
                    {h.days}: {h.hours}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl">Mesaj</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">Gönderince WhatsApp açılır.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      <iframe
        title="Atlas VIP Eğitim Kurumu harita"
        src={site.mapsEmbedUrl}
        className="h-[280px] w-full border-0 sm:h-[380px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        allowFullScreen
      />

      <div className="container-page py-16 md:py-20">
        <ol className="grid gap-8 md:grid-cols-3">
          {startSteps.map((step) => (
            <li key={step.n}>
              <h3 className="font-[family-name:var(--font-display)] text-xl">{step.title}</h3>
              <p className="mt-2 text-[var(--muted)]">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
