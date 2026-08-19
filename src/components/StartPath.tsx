import { site, startSteps, whatsappLink } from "@/lib/site";

export function StartPath() {
  return (
    <section className="border-t border-[var(--line)] py-12 md:py-16" aria-labelledby="start-title">
      <div className="container-page">
        <h2 id="start-title" className="font-[family-name:var(--font-display)] text-3xl md:text-4xl">
          Nasıl Başlarız
        </h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {startSteps.map((step) => (
            <li key={step.n}>
              <h3 className="font-[family-name:var(--font-display)] text-xl">{step.title}</h3>
              <p className="mt-2 text-[var(--muted)]">{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-signal">
            WhatsApp
          </a>
          <a href={`tel:${site.phoneTel}`} className="text-lg font-semibold">
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
