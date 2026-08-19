import { EmText } from "@/components/EmText";
import { whyAtlas } from "@/lib/site";

export function WhyAtlas() {
  return (
    <section className="py-12 md:py-16" aria-labelledby="why-title">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="why-title" className="font-[family-name:var(--font-display)] text-3xl tracking-tight md:text-4xl">
            Neden Atlas VIP
          </h2>
          <p className="mt-4 text-[var(--muted)]">
            <EmText text={whyAtlas.intro} />
          </p>
          <ul className="mx-auto mt-6 grid max-w-xl gap-2 text-left sm:grid-cols-2">
            {whyAtlas.points.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm font-semibold text-[var(--ink)]">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--signal)]" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {whyAtlas.cards.map((item) => (
            <li
              key={item.title}
              className="rounded-[1.5rem] bg-[var(--foam)] p-6 shadow-[0_14px_40px_-28px_rgba(18,32,51,0.4)] md:p-7"
            >
              <p className="text-xs font-semibold tracking-[0.14em] text-[var(--signal)]">{item.code}</p>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl tracking-tight md:text-2xl">{item.title}</h3>
              <p className="mt-2 text-[var(--muted)]">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
