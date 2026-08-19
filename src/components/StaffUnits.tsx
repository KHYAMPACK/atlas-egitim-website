import { units } from "@/lib/site";

export function StaffUnits() {
  return (
    <section className="py-12 md:py-16" aria-labelledby="staff-title">
      <div className="container-page">
        <h2 id="staff-title" className="font-[family-name:var(--font-display)] text-3xl tracking-tight md:text-4xl">
          Eğitim Kadrosu
        </h2>
        <p className="mt-3 max-w-lg text-[var(--muted)]">Fen, matematik, sözel ve koçluk. Aynı mahallede, aynı LGS hedefi.</p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {units.map((unit) => (
            <li
              key={unit.code}
              className="rounded-[1.5rem] bg-[var(--foam)] p-6 shadow-[0_14px_40px_-28px_rgba(18,32,51,0.4)]"
            >
              <p className="text-xs font-semibold tracking-[0.14em] text-[var(--signal)]">{unit.code}</p>
              <h3 className="mt-2 text-lg font-semibold">{unit.title}</h3>
              <p className="mt-1 text-sm text-[var(--signal)]">{unit.field}</p>
              <p className="mt-2 text-[var(--muted)]">{unit.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
