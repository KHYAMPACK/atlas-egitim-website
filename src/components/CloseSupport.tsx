import { EmText } from "@/components/EmText";
import { lgsGuide, site, whatsappLink } from "@/lib/site";

export function CloseSupport() {
  const { close } = lgsGuide;

  return (
    <section className="py-6 md:py-8" aria-labelledby="close-title">
      <div className="container-page rounded-[1.6rem] bg-[var(--navy)] px-5 py-8 text-white md:px-10 md:py-10">
        <h2 id="close-title" className="max-w-xl font-[family-name:var(--font-display)] text-3xl tracking-tight md:text-4xl">
          {close.title}
        </h2>
        <div className="mt-5 max-w-3xl space-y-4 text-[1.02rem] leading-[1.75] text-white/80">
          <p>
            <EmText text={close.p1} tone="gold" />
          </p>
          <p>
            <EmText text={close.p2} tone="gold" />
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`tel:${site.phoneTel}`} className="btn btn-signal">
            Telefonla bilgi alın
          </a>
          <a
            href={whatsappLink("Merhaba, LGS hazırlık ve kontenjan hakkında bilgi almak istiyorum.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-white text-[var(--navy)] hover:bg-[var(--foam)]"
          >
            WhatsApp’tan yazın
          </a>
        </div>
      </div>
    </section>
  );
}
