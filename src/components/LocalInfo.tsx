import Image from "next/image";
import Link from "next/link";
import { EmText } from "@/components/EmText";
import { aboutStats, lgsGuide, site, whatsappLink } from "@/lib/site";

export function LocalInfo({ variant = "about" }: { variant?: "about" | "lgs" }) {
  const lgs = variant === "lgs";

  return (
    <section className="py-14 md:py-20" aria-labelledby="info-title">
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-[var(--signal)]">
              {lgs ? lgsGuide.local.eyebrow : "Hakkımızda"}
            </p>
            <h2
              id="info-title"
              className="mt-3 font-[family-name:var(--font-display)] text-[clamp(1.7rem,3.2vw,2.65rem)] leading-[1.15] tracking-tight"
            >
              {lgs ? lgsGuide.local.title : "Gerzele’de 5–8. Sınıfa Küçük Grupla LGS Hazırlığı Veriyoruz."}
            </h2>
            {lgs ? (
              <p className="mt-2 font-[family-name:var(--font-display)] text-xl tracking-tight text-[var(--navy)] md:text-2xl">
                {lgsGuide.local.subtitle}
              </p>
            ) : null}
            <div className="mt-6 space-y-4 text-[1.05rem] leading-[1.75] text-[var(--muted)]">
              {lgs ? (
                <>
                  <p>
                    <EmText text={lgsGuide.local.p1} />
                  </p>
                  <p>
                    <EmText text={lgsGuide.local.p2} />
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Atlas VIP, Merkezefendi Gerzele’de butik bir kurum. Kalabalık dershane değiliz: her soruya süre kalan
                    küçük grup, haftalık deneme, konu konu takip.
                  </p>
                  <p>
                    Okul yazılısı, bursluluk, yaz kampı, deneme kulübü ve hızlı okuma aynı kadroda. Ücret sınıfa ve
                    programa göre değişir; hızlı fiyat alın veya arayın.
                  </p>
                </>
              )}
            </div>
            <p className="mt-5 text-sm text-[var(--muted)]">{site.address.full}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {lgs ? (
                <>
                  <a href={`tel:${site.phoneTel}`} className="btn btn-signal">
                    Telefonla bilgi alın
                  </a>
                  <a
                    href={whatsappLink("Merhaba, Gerzele LGS kursu hakkında bilgi almak istiyorum.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                  >
                    WhatsApp’tan yazın
                  </a>
                </>
              ) : (
                <>
                  <Link href="/iletisim" className="btn btn-navy">
                    İletişim
                  </Link>
                  <Link href="/programlar" className="btn btn-secondary">
                    Programlar
                  </Link>
                </>
              )}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg pb-8 lg:max-w-none">
            <div className="overflow-hidden rounded-[1.75rem] shadow-[0_24px_60px_-28px_rgba(18,32,51,0.45)]">
              <Image
                src="/photos/about-classroom.jpg"
                alt="Küçük grup derste el kaldıran öğrenciler"
                width={1600}
                height={1067}
                sizes="(max-width: 1024px) 90vw, 34rem"
                className="aspect-[5/4] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-7 left-4 w-[38%] overflow-hidden rounded-[1.15rem] ring-[6px] ring-[var(--paper)] sm:left-6">
              <Image
                src="/photos/about-main.jpg"
                alt="Tahta başında öğretmen"
                width={800}
                height={1000}
                sizes="180px"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        <ul className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {aboutStats.map((stat) => (
            <li
              key={stat.label}
              className="rounded-[1.5rem] bg-[var(--foam)] px-6 py-7 shadow-[0_14px_40px_-28px_rgba(18,32,51,0.4)]"
            >
              <p className="font-[family-name:var(--font-display)] text-[2.75rem] leading-none tracking-tight text-[var(--navy)]">
                {stat.value}
              </p>
              <h3 className="mt-4 text-base font-semibold">{stat.label}</h3>
              <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{stat.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
