import { site, veliApp } from "@/lib/site";

export function VeliInstallCta({ variant }: { variant: "section" | "footer" }) {
  if (variant === "footer") {
    return (
      <a href={site.veliInstallUrl} className="btn btn-navy">
        <InstallGlyph />
        {veliApp.cta}
      </a>
    );
  }

  return (
    <div className="mt-8">
      <a href={site.veliInstallUrl} className="btn btn-signal min-h-[3.15rem] w-full text-[1.02rem] shadow-[0_12px_28px_-12px_rgb(196_30_42_/_0.7)] sm:w-auto">
        <InstallGlyph />
        {veliApp.cta}
      </a>
      <p className="mt-3 text-sm font-medium text-[var(--muted)]">{veliApp.helper}</p>
      <p className="mt-1.5 max-w-md text-[0.8rem] leading-relaxed text-[var(--muted)]">{veliApp.note}</p>
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
