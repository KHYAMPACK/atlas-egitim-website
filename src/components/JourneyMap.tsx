import Link from "next/link";
import { journey } from "@/lib/site";

export function JourneyMap({ showIntro = true }: { showIntro?: boolean }) {
  return (
    <section className="bg-[var(--navy)] text-[var(--foam)]" aria-labelledby="journey-title">
      <div className="container-page py-14 md:py-20">
        {showIntro ? (
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="journey-title" className="font-[family-name:var(--font-display)] text-3xl tracking-tight md:text-4xl">
              {journey.title}
            </h2>
            <p className="mt-4 text-[var(--foam)]/70">{journey.intro}</p>
          </div>
        ) : (
          <h2 id="journey-title" className="sr-only">
            {journey.title}
          </h2>
        )}

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {journey.stages.map((stage) => (
            <li key={stage.days} className="rounded-[1.35rem] bg-white/10 px-5 py-6 ring-1 ring-white/10">
              <p className="text-xs font-semibold tracking-wide text-[var(--signal)]">Gün {stage.days}</p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-lg tracking-tight">{stage.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--foam)]/65">{stage.text}</p>
            </li>
          ))}
        </ol>

        {showIntro ? (
          <div className="mt-10 text-center">
            <Link
              href="/yolculuk"
              className="text-sm text-[var(--foam)]/80 underline decoration-white/25 underline-offset-4 hover:decoration-white"
            >
              100 günü ayrıntılı oku
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
