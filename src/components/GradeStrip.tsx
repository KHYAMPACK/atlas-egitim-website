import Link from "next/link";
import { gradeCards } from "@/lib/site";

export function GradeStrip() {
  return (
    <section className="py-12 md:py-16" aria-labelledby="grades-title">
      <div className="container-page">
        <h2
          id="grades-title"
          className="text-center font-[family-name:var(--font-display)] text-3xl tracking-tight md:text-4xl"
        >
          Sınıfına Göre Başla
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gradeCards.map((grade) => (
            <li key={grade.n}>
              <Link
                href={grade.href}
                className="group flex h-full flex-col rounded-[1.5rem] bg-[var(--navy)] p-6 text-white shadow-[0_16px_40px_-24px_rgba(18,32,51,0.55)] transition duration-200 hover:-translate-y-1 hover:bg-[var(--signal)]"
              >
                <span className="font-[family-name:var(--font-display)] text-4xl leading-none tracking-tight text-white">
                  {grade.n}
                </span>
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl tracking-tight text-white">
                  {grade.heading}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/90">
                  {grade.text}
                </p>
                <span className="mt-5 text-sm font-semibold text-white">{grade.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
