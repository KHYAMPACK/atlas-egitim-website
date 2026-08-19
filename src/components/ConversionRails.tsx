"use client";

import { useEffect, useId, useState } from "react";
import { LeadForm } from "@/components/LeadForm";
import { site } from "@/lib/site";

export function ConversionRails() {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <div className="rail-tabs hidden md:flex">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rail-tab rail-tab-price"
          aria-haspopup="dialog"
          aria-expanded={open}
        >
          Hızlı Fiyat Al
        </button>
        <a href={`tel:${site.phoneTel}`} className="rail-tab rail-tab-call">
          Hemen Ara
        </a>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-[60] grid grid-cols-3 border-t border-[var(--line)] bg-[var(--foam)] pb-[env(safe-area-inset-bottom)] md:hidden">
        <button type="button" className="py-3.5 text-[13px] font-semibold text-[var(--signal)]" onClick={() => setOpen(true)}>
          Hızlı Fiyat Al
        </button>
        <a
          href={`tel:${site.phoneTel}`}
          className="border-x border-[var(--line)] py-3.5 text-center text-[13px] font-semibold text-[var(--navy)]"
        >
          Hemen Ara
        </a>
        <a
          href={`https://wa.me/${site.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="py-3.5 text-center text-[13px] font-semibold text-[#128c3e]"
        >
          WhatsApp
        </a>
      </div>

      {open ? (
        <div className="fixed inset-0 z-[70] flex">
          <button type="button" className="absolute inset-0 bg-[var(--navy)]/45" aria-label="Kapat" onClick={() => setOpen(false)} />
          <aside
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 flex h-full w-full max-w-[26rem] flex-col bg-[var(--foam)] shadow-[12px_0_40px_-12px_rgba(18,32,51,0.45)]"
          >
            <div className="bg-[var(--signal)] px-6 py-5 text-white">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold tracking-wide text-white/75">Atlas VIP · Gerzele</p>
                  <h2 id={titleId} className="mt-1 font-[family-name:var(--font-display)] text-2xl tracking-tight">
                    Hızlı Fiyat Al
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-xl leading-none"
                  aria-label="Paneli kapat"
                >
                  ×
                </button>
              </div>
              <p className="mt-2 text-sm text-white/80">Ad, telefon ve sınıf. WhatsApp’tan dönüş yaparız.</p>
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <LeadForm intent="fiyat" layout="stack" submitLabel="Fiyat sor" autoFocus />
              <a href={`tel:${site.phoneTel}`} className="mt-8 text-lg font-semibold tracking-tight">
                {site.phoneDisplay}
              </a>
              <p className="mt-1 text-sm text-[var(--muted)]">Ya da doğrudan arayın.</p>
            </div>
          </aside>
        </div>
      ) : null}
    </>
  );
}
