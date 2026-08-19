import Link from "next/link";
import { programs } from "@/lib/site";

export function ProgramsBand({ hideIntro = false }: { hideIntro?: boolean }) {
  return (
    <section className="py-12 md:py-16" aria-labelledby="programs-title">
      <div className="container-page">
        {hideIntro ? (
          <h2 id="programs-title" className="sr-only">
            Programlar
          </h2>
        ) : (
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 id="programs-title" className="font-[family-name:var(--font-display)] text-3xl tracking-tight md:text-4xl">
              Programlar
            </h2>
            <Link href="/programlar" className="text-sm font-semibold text-[var(--signal)]">
              Tümü
            </Link>
          </div>
        )}
        <ul className="grid gap-4 sm:grid-cols-2">
          {programs.map((program) => (
            <li key={program.slug}>
              <Link
                href={`/programlar/${program.slug}`}
                className="flex h-full flex-col rounded-[1.5rem] bg-[var(--foam)] p-6 shadow-[0_14px_40px_-28px_rgba(18,32,51,0.4)] transition hover:-translate-y-0.5"
              >
                <span className="text-sm font-semibold text-[var(--signal)]">{program.grades}</span>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl tracking-tight">{program.title}</h3>
                <p className="mt-2 flex-1 text-[var(--muted)]">{program.summary}</p>
                <span className="mt-4 text-sm font-semibold">İncele</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
