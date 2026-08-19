"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { islandNav, site, whatsappLink } from "@/lib/site";

const SCROLL_IDLE_MS = 320;

export function Header() {
  const pathname = usePathname();
  const [scrolling, setScrolling] = useState(false);
  const [held, setHeld] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    let idle = 0;
    const onScroll = () => {
      setScrolling(true);
      window.clearTimeout(idle);
      idle = window.setTimeout(() => setScrolling(false), SCROLL_IDLE_MS);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(idle);
    };
  }, [reduceMotion]);

  const open = reduceMotion || held || !scrolling;

  return (
    <>
      <header className="island-header pointer-events-none fixed inset-x-0 top-0 z-50" data-open={open}>
        <div
          className="island-hotzone pointer-events-auto"
          onPointerEnter={() => setHeld(true)}
          onPointerLeave={() => setHeld(false)}
          onFocusCapture={() => setHeld(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node)) {
              setHeld(false);
            }
          }}
        >
          <div className="island-stage">
            <div className="island">
              <div className="island-wing island-wing-left">
                <div className="island-wing-inner">
                  <Link
                    href="/iletisim"
                    className="island-extras island-action island-action-promo"
                    tabIndex={open ? undefined : -1}
                  >
                    {site.headerPromo}
                  </Link>
                  <span className="island-extras island-rule" aria-hidden />
                  <nav className="island-links" aria-label="Ana menü">
                    {islandNav.left.map((link) => (
                      <Link key={link.href} href={link.href} className="island-link">
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>

              <span className="island-slot" aria-hidden />

              <div className="island-wing island-wing-right">
                <div className="island-wing-inner">
                  <nav className="island-links" aria-label="Sayfa bağlantıları">
                    {islandNav.right.map((link) => (
                      <Link key={link.href} href={link.href} className="island-link">
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <span className="island-extras island-rule" aria-hidden />
                  <div className="island-extras island-actions">
                    <a
                      href={`tel:${site.phoneTel}`}
                      className="island-action island-action-call"
                      aria-label={`Hızlı ara: ${site.phoneDisplay}`}
                      tabIndex={open ? undefined : -1}
                    >
                      <PhoneGlyph />
                      <span className="island-action-label">Hızlı Ara</span>
                    </a>
                    <a
                      href={whatsappLink(
                        "Merhaba, bilgi hattından yazıyorum. Erken kayıt avantajları hakkında bilgi almak istiyorum.",
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="island-action island-action-wa"
                      aria-label="WhatsApp bilgi hattı"
                      tabIndex={open ? undefined : -1}
                    >
                      <WhatsAppGlyph />
                      <span className="island-wa-full">WhatsApp Bilgi Hattı</span>
                      <span className="island-wa-short">WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/" className="island-logo" aria-label={`${site.shortName} anasayfa`}>
              <Logo alt="" className="h-10 w-10 ring-2 ring-white/20 md:h-11 md:w-11" priority />
            </Link>
          </div>
        </div>
      </header>
      {pathname === "/" ? null : <div className="island-spacer" aria-hidden />}
    </>
  );
}

function PhoneGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.02l-2.2 2.19z" />
    </svg>
  );
}

function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
