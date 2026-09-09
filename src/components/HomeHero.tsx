import { Logo } from "@/components/Logo";
import { VeliInstallCta } from "@/components/VeliInstallCta";

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--hero)] text-white">
      <div className="relative z-10 flex flex-col items-center px-5 pt-[calc(0.7rem+0.85rem+var(--island-nav-h)+1.1rem)] pb-10 md:px-10 md:pb-12">
        <div className="flex items-center gap-3.5">
          <Logo className="h-[3.35rem] w-[3.35rem] ring-2 ring-white/20 md:h-[4.15rem] md:w-[4.15rem]" priority />
          <p className="font-[family-name:var(--font-display)] text-[1.35rem] leading-[0.95] font-semibold tracking-[-0.04em] md:text-[1.65rem]">
            Atlas
            <span className="block">VIP</span>
          </p>
        </div>

        <div className="mt-7 max-w-[40rem] text-center md:mt-8">
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.1rem,5.6vw,4.35rem)] leading-[1.05] font-bold tracking-[-0.045em]">
            Geleceğe Hazırlayan Kurum
          </h1>
          <p className="mt-4 text-[0.98rem] leading-relaxed text-white/80 md:text-lg">
            5–8. sınıf LGS, okul ve bursluluk kurslarımızla öğrencilerimizi başarıya hazırlıyoruz.
          </p>
        </div>

        <VeliInstallCta variant="hero" />
      </div>
    </section>
  );
}
