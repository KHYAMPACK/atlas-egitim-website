import { lgsGuide } from "@/lib/site";

export function MethodStrip() {
  return (
    <section className="py-12 md:py-16" aria-labelledby="offerings-title">
      <div className="container-page">
        <h2
          id="offerings-title"
          className="max-w-xl font-[family-name:var(--font-display)] text-3xl tracking-tight md:text-4xl"
        >
          {lgsGuide.offerings.title}
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lgsGuide.offerings.items.map((item) => (
            <li
              key={item.title}
              className="rounded-[1.5rem] bg-[var(--foam)] p-6 shadow-[0_14px_40px_-28px_rgba(18,32,51,0.4)]"
            >
              <h3 className="font-[family-name:var(--font-display)] text-xl tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
