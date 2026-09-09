import { site } from "@/lib/site";

type Variant = "hero" | "header" | "footer";

export function VeliInstallCta({
  variant,
  tabIndex,
}: {
  variant: Variant;
  tabIndex?: number;
}) {
  if (variant === "header") {
    return (
      <a
        href={site.veliInstallUrl}
        className="island-action island-action-app"
        aria-label="Veli uygulamasını yükle"
        title="Veli uygulamasını yükle"
        tabIndex={tabIndex}
      >
        <InstallGlyph />
        <span>Veli</span>
      </a>
    );
  }

  if (variant === "footer") {
    return (
      <a href={site.veliInstallUrl} className="btn btn-navy">
        <InstallGlyph />
        Veli uygulamasını yükle
      </a>
    );
  }

  return (
    <div className="mt-7 flex w-full max-w-[22rem] flex-col items-center md:mt-8">
      <a href={site.veliInstallUrl} className="btn btn-signal w-full min-h-[3.15rem] text-[1.02rem] shadow-[0_12px_28px_-12px_rgb(196_30_42_/_0.7)]">
        <InstallGlyph />
        Veli uygulamasını yükle
      </a>
      <p className="mt-3 text-sm font-medium text-white/80">Telefonuna veya bilgisayarına ekle</p>
      <p className="mt-1.5 text-center text-[0.8rem] leading-relaxed text-white/55">
        Yükleme veli uygulaması sayfasında açılır. iPhone’da Paylaş → Ana Ekrana Ekle.
      </p>
    </div>
  );
}

function InstallGlyph() {
  return (
    <svg className="h-[1.05rem] w-[1.05rem] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M12 3v12" strokeLinecap="round" />
      <path d="M8 11l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 21h14" strokeLinecap="round" />
    </svg>
  );
}
