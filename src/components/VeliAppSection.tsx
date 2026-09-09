import { EmText } from "@/components/EmText";
import { VeliInstallCta } from "@/components/VeliInstallCta";
import { site, veliApp } from "@/lib/site";

export function VeliAppSection() {
  return (
    <section className="py-12 md:py-16" aria-labelledby="veli-app-title">
      <div className="container-page grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-[var(--signal)]">{veliApp.eyebrow}</p>
          <h2
            id="veli-app-title"
            className="mt-3 font-[family-name:var(--font-display)] text-[clamp(1.7rem,3.2vw,2.65rem)] leading-[1.12] tracking-tight"
          >
            {veliApp.title}
          </h2>
          <p className="mt-2 font-[family-name:var(--font-display)] text-xl tracking-tight text-[var(--navy)] md:text-2xl">
            {veliApp.heading}
          </p>
          <div className="mt-5 space-y-3 text-[1.02rem] leading-[1.75] text-[var(--muted)]">
            <p>
              <EmText text={veliApp.p1} />
            </p>
            <p>{veliApp.p2}</p>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {veliApp.features.map((item) => (
              <li key={item.title} className="rounded-2xl bg-[var(--foam)] px-4 py-3.5 shadow-[0_14px_40px_-28px_rgba(18,32,51,0.4)]">
                <p className="font-[family-name:var(--font-display)] text-[0.98rem] tracking-tight">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{item.text}</p>
              </li>
            ))}
          </ul>
          <VeliInstallCta variant="section" />
          <p className="mt-3 text-sm text-[var(--muted)]">
            Uygulama zaten yüklüyse{" "}
            <a href={site.veliPortalUrl} className="font-semibold text-[var(--ink)] underline decoration-[var(--line)] underline-offset-4">
              {veliApp.login}
            </a>
            .
          </p>
        </div>

        <aside className="rounded-[1.6rem] bg-[var(--navy)] p-6 text-white shadow-[0_24px_50px_-28px_rgba(18,32,51,0.55)] md:p-8">
          <p className="text-xs font-semibold tracking-[0.16em] text-[var(--gold)]">{veliApp.snapshot.label}</p>
          <p className="mt-2 font-[family-name:var(--font-display)] text-2xl tracking-tight">{veliApp.snapshot.title}</p>
          <ul className="mt-6 divide-y divide-white/10">
            {veliApp.snapshot.rows.map((row) => (
              <li key={row.k} className="flex items-baseline justify-between gap-4 py-3.5 first:pt-0 last:pb-0">
                <span className="text-sm font-semibold text-white/55">{row.k}</span>
                <span className="text-right font-[family-name:var(--font-display)] tracking-tight">{row.v}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-white/65">
            Öğretmen, koçluk ve veli aynı kayda bakar. Liste uçmaz.
          </p>
        </aside>
      </div>
    </section>
  );
}
