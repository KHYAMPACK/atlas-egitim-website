import Image from "next/image";
import { denemeClub } from "@/lib/site";

const tileTone: Record<string, string> = {
  ink: "bg-[#0a0a0a]",
  sun: "bg-[#f4c400]",
};

export function DenemePublishersCard() {
  const { publishers } = denemeClub;

  return (
    <aside
      className="relative overflow-hidden rounded-[1.6rem] bg-[var(--navy)] p-6 text-white shadow-[0_14px_40px_-28px_rgba(18,32,51,0.4)] md:p-8"
      aria-label={publishers.title}
    >
      <div
        className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-[var(--gold)]/12 blur-3xl"
        aria-hidden
      />
      <p className="text-xs font-semibold tracking-[0.16em] text-[var(--gold)]">{publishers.eyebrow}</p>
      <p className="mt-2 font-[family-name:var(--font-display)] text-2xl tracking-tight">{publishers.title}</p>
      <ul className="mt-5 grid grid-cols-4 gap-1.5 sm:gap-2">
        {publishers.houses.map((house) => {
          const cover = house.fit === "cover";
          const pad = house.tone === "sun" ? "object-contain p-1" : "object-contain p-1.5";

          return (
            <li key={house.name} title={house.name}>
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-[0.7rem] ring-1 ring-white/12 transition duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:hover:ring-[var(--gold)]/50 ${
                  house.tone ? tileTone[house.tone] : "bg-white"
                }`}
              >
                {house.src ? (
                  <Image
                    src={house.src}
                    alt={house.name}
                    fill
                    sizes="(max-width: 1024px) 22vw, 110px"
                    className={cover ? "object-cover" : pad}
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center px-1 text-center">
                    <span className="font-[family-name:var(--font-display)] text-[0.68rem] leading-none tracking-tight text-[var(--navy)] sm:text-xs">
                      {house.name}
                    </span>
                    <span className="mt-0.5 text-[0.45rem] font-semibold tracking-[0.16em] text-[var(--muted)]">
                      YAYINLARI
                    </span>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 text-sm leading-relaxed text-white/70">{publishers.note}</p>
    </aside>
  );
}
