import { EmText } from "@/components/EmText";
import { lgsGuide, site, whatsappLink } from "@/lib/site";

export function LgsGuide() {
  const { process, system, parent } = lgsGuide;

  return (
    <section className="py-12 md:py-16" aria-labelledby="guide-title">
      <div className="container-page grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-[1.6rem] bg-[var(--foam)] p-6 shadow-[0_14px_40px_-28px_rgba(18,32,51,0.4)] md:p-8">
          <h2
            id="guide-title"
            className="font-[family-name:var(--font-display)] text-[clamp(1.55rem,2.8vw,2.15rem)] leading-[1.15] tracking-tight"
          >
            {process.title}
          </h2>
          <div className="mt-5 space-y-4 text-[1.02rem] leading-[1.75] text-[var(--muted)]">
            <p>
              <EmText text={process.p1} />
            </p>
            <p>
              <EmText text={process.p2} />
            </p>
          </div>
          <a href={`tel:${site.phoneTel}`} className="btn btn-signal mt-7">
            Telefonla bilgi alın
          </a>
        </article>

        <article className="rounded-[1.6rem] bg-[var(--navy)] p-6 text-white shadow-[0_14px_40px_-28px_rgba(18,32,51,0.4)] md:p-8">
          <p className="text-xs font-semibold tracking-[0.16em] text-[var(--gold)]">{parent.eyebrow}</p>
          <h3 className="mt-3 font-[family-name:var(--font-display)] text-[1.45rem] leading-tight tracking-tight md:text-[1.65rem]">
            {parent.title}
          </h3>
          <div className="mt-5 space-y-4 text-[0.98rem] leading-[1.7] text-white/80">
            <p>
              <EmText text={parent.p1} tone="gold" />
            </p>
            <p>
              <EmText text={parent.p2} tone="gold" />
            </p>
          </div>
        </article>

        <article className="rounded-[1.6rem] bg-[var(--foam)] p-6 shadow-[0_14px_40px_-28px_rgba(18,32,51,0.4)] md:p-8 lg:col-span-2">
          <h3 className="font-[family-name:var(--font-display)] text-[clamp(1.45rem,2.4vw,2rem)] leading-tight tracking-tight">
            {system.title}
          </h3>
          <div className="mt-5 grid gap-4 text-[1.02rem] leading-[1.75] text-[var(--muted)] md:grid-cols-2">
            <p>
              <EmText text={system.p1} />
            </p>
            <p>
              <EmText text={system.p2} />
            </p>
          </div>
          <p className="mt-6 text-sm text-[var(--muted)]">
            Program ve kontenjan için{" "}
            <a href={`tel:${site.phoneTel}`} className="font-semibold text-[var(--ink)]">
              {site.phoneDisplay}
            </a>
            {" · "}
            <a
              href={whatsappLink("Merhaba, LGS kurs sistemi ve sınıf kontenjanı hakkında bilgi almak istiyorum.")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[var(--ink)]"
            >
              WhatsApp’tan yazın
            </a>
            .
          </p>
        </article>
      </div>
    </section>
  );
}
