import Link from "next/link";
import { DenemePublishersCard } from "@/components/DenemePublishersCard";
import { EmText } from "@/components/EmText";
import { denemeClub } from "@/lib/site";

export function DenemeClubPromo() {
  const { heading, promo, title } = denemeClub;

  return (
    <section className="py-12 md:py-16" aria-labelledby="deneme-club-title">
      <div className="container-page grid items-start gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="rounded-[1.6rem] bg-[var(--foam)] p-6 shadow-[0_14px_40px_-28px_rgba(18,32,51,0.4)] md:p-8">
          <p className="text-xs font-semibold tracking-[0.16em] text-[var(--signal)]">{denemeClub.eyebrow}</p>
          <h2
            id="deneme-club-title"
            className="mt-3 font-[family-name:var(--font-display)] text-[clamp(1.7rem,3vw,2.45rem)] leading-[1.12] tracking-tight"
          >
            {title}
          </h2>
          <p className="mt-2 font-[family-name:var(--font-display)] text-xl tracking-tight text-[var(--navy)] md:text-2xl">
            {heading}
          </p>
          <div className="mt-5 space-y-4 text-[1.02rem] leading-[1.75] text-[var(--muted)]">
            <p>
              <EmText text={promo.p1} />
            </p>
            <p>
              <EmText text={promo.p2} />
            </p>
          </div>
          <Link href={denemeClub.href} className="btn btn-signal mt-7 w-full sm:w-auto">
            {promo.cta}
          </Link>
        </article>

        <DenemePublishersCard />
      </div>
    </section>
  );
}
