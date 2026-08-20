import Image from "next/image";
import { staff } from "@/lib/site";

export function StaffUnits() {
  return (
    <section className="py-12 md:py-16" aria-labelledby="staff-title">
      <div className="container-page">
        <h2 id="staff-title" className="font-[family-name:var(--font-display)] text-3xl tracking-tight md:text-4xl">
          Eğitim Kadromuz
        </h2>
        <p className="mt-3 max-w-lg text-[var(--muted)]">
          Fen, matematik, sözel ve koçluk. Aynı mahallede, aynı LGS hedefi.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {staff.map((member) => {
            const heading = member.name || member.title;

            return (
              <li key={member.code}>
                <article className="group h-full overflow-hidden rounded-[1.5rem] bg-[var(--foam)] shadow-[0_14px_40px_-28px_rgba(18,32,51,0.4)]">
                  <div className="relative aspect-[3/4] overflow-hidden bg-[color-mix(in_srgb,var(--navy)_8%,var(--paper))]">
                    <Image
                      src={member.photo}
                      alt={member.name ? `${member.name}, ${member.title}` : `${member.title}, yer tutucu fotoğraf`}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 17rem"
                      className="object-cover object-top transition duration-500 motion-safe:group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="px-5 py-5">
                    <p className="text-xs font-semibold tracking-[0.14em] text-[var(--signal)]">{member.code}</p>
                    <h3 className="mt-2 font-[family-name:var(--font-display)] text-lg tracking-tight">{heading}</h3>
                    {member.name ? <p className="mt-1 text-sm text-[var(--signal)]">{member.title}</p> : null}
                    <p className="mt-1 text-sm text-[var(--muted)]">{member.field}</p>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
