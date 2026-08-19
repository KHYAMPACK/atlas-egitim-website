import { examResults } from "@/lib/site";

export function ExamResults() {
  return (
    <section className="bg-[var(--navy)] text-white" aria-labelledby="results-title">
      <div className="container-page py-14 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.16em] text-[var(--signal)]">{examResults.eyebrow}</p>
          <h2 id="results-title" className="mt-3 font-[family-name:var(--font-display)] text-3xl tracking-tight md:text-4xl">
            {examResults.title}
          </h2>
          <p className="mt-4 text-[var(--foam)]/70">{examResults.intro}</p>
        </div>

        <ul className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] lg:grid lg:grid-cols-3 lg:overflow-visible [&::-webkit-scrollbar]:hidden">
          {examResults.items.map((item) => (
            <li key={item.name} className="min-w-[17.5rem] snap-start lg:min-w-0">
              <article className="flex h-full flex-col rounded-[1.5rem] bg-[var(--foam)] p-6 text-[var(--ink)] shadow-[0_18px_44px_-28px_rgba(0,0,0,0.45)]">
                <p className="text-xs font-semibold tracking-[0.14em] text-[var(--signal)]">{examResults.eyebrow}</p>
                <p className="mt-4 font-[family-name:var(--font-display)] text-[2.65rem] leading-none tracking-tight">
                  {item.score}
                </p>
                <p className="mt-1 text-sm text-[var(--muted)]">puan</p>
                <h3 className="mt-5 text-lg font-semibold">{item.name}</h3>
                <p className="mt-1 text-sm leading-snug text-[var(--muted)]">{item.school}</p>
                <ul className="mt-5 grid grid-cols-3 gap-2 border-t border-[var(--line)] pt-4">
                  {item.nets.map((net) => (
                    <li key={net.label} className="text-center">
                      <p className="text-[11px] font-semibold tracking-wide text-[var(--muted)]">{net.label}</p>
                      <p className="mt-1 text-sm font-semibold tabular-nums">{net.value}</p>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
