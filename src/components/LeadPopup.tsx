"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { FormEvent, useCallback, useEffect, useId, useRef, useState } from "react";
import { whatsappLink } from "@/lib/site";

const STORAGE_KEY = "atlas-lead-popup";
const DELAY_MS = 3500;
const GRADES = ["5. sınıf", "6. sınıf", "7. sınıf", "8. sınıf", "Diğer"] as const;

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

function alreadyDismissed() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) !== null;
  } catch {
    return false;
  }
}

function persistDismissed() {
  try {
    sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    /* ignore private-mode quota */
  }
}

function formatPhone(raw: string) {
  const digits = raw.replace(/\D/g, "").replace(/^90/, "").replace(/^0/, "").slice(0, 10);
  const parts = [digits.slice(0, 3), digits.slice(3, 6), digits.slice(6, 8), digits.slice(8, 10)].filter(Boolean);
  return parts.join(" ");
}

export function LeadPopup() {
  const titleId = useId();
  const descId = useId();
  const reduced = useReducedMotion();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sent" | "blocked">("idle");
  const [error, setError] = useState<string | null>(null);
  const [fallbackHref, setFallbackHref] = useState<string | null>(null);
  const [phone, setPhone] = useState("");

  const dismiss = useCallback(() => {
    persistDismissed();
    setOpen(false);
  }, []);

  useEffect(() => {
    if (alreadyDismissed()) return;
    const timer = window.setTimeout(() => setOpen(true), DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        dismiss();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;

      const nodes = [...dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)].filter(
        (el) => el.offsetParent !== null && el.getAttribute("aria-hidden") !== "true",
      );
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      previousFocus?.focus();
    };
  }, [open, dismiss]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const digits = phone.replace(/\D/g, "");
    const grade = String(data.get("grade") || "").trim();

    if (!name) {
      setError("Ad soyad yazın.");
      setStatus("idle");
      return;
    }
    if (digits.length < 10) {
      setError("Telefon numaranızı yazın.");
      setStatus("idle");
      return;
    }
    if (!grade) {
      setError("Sınıf seviyesini seçin.");
      setStatus("idle");
      return;
    }

    setError(null);
    const text = [
      "Merhaba, hızlı bilgi formu üzerinden yazıyorum.",
      `Adım: ${name}`,
      `Telefon: +90 ${formatPhone(digits)}`,
      `Sınıf: ${grade}`,
    ].join("\n");

    const href = whatsappLink(text);
    const popup = window.open(href, "_blank");
    if (!popup) {
      setFallbackHref(href);
      setStatus("blocked");
      return;
    }
    popup.opener = null;
    setFallbackHref(null);
    setStatus("sent");
    persistDismissed();
  }

  const field =
    "w-full rounded-[10px] border border-[#d8dee6] bg-white px-3.5 py-3 text-[0.95rem] text-[var(--ink)] outline-none transition-[border-color,box-shadow] placeholder:text-[#9aa3af] focus:border-[var(--signal)] focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--signal)_18%,transparent)]";

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center p-3 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0.01 : 0.22 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-[#121820]/55 backdrop-blur-[3px]"
            aria-label="Pencereyi kapat"
            onClick={dismiss}
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descId}
            tabIndex={-1}
            className="relative z-10 w-full max-w-[42rem] overflow-hidden rounded-[14px] bg-white shadow-[0_24px_64px_-18px_rgba(12,18,32,0.55)] outline-none"
            initial={reduced ? false : { opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: reduced ? 0.01 : 0.28, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="relative overflow-hidden bg-[var(--navy)] px-5 py-5 pr-14 sm:px-6">
              <span
                className="pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full bg-[color-mix(in_srgb,white_10%,transparent)]"
                aria-hidden
              />
              <span
                className="pointer-events-none absolute -right-4 bottom-[-2.5rem] h-28 w-28 rounded-full bg-[color-mix(in_srgb,white_8%,transparent)]"
                aria-hidden
              />
              <div className="relative flex items-start gap-3.5">
                <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-[var(--signal)] text-white shadow-[0_8px_16px_-8px_rgba(196,30,42,0.8)]">
                  <ClipboardGlyph className="h-5 w-5" />
                </span>
                <div>
                  <h2
                    id={titleId}
                    className="font-[family-name:var(--font-display)] text-[1.35rem] leading-tight font-bold tracking-tight text-white sm:text-[1.5rem]"
                  >
                    Hızlı Bilgi Al
                  </h2>
                  <p id={descId} className="mt-1.5 max-w-[36rem] text-[0.92rem] leading-snug text-white/80">
                    Ad soyad ve telefon bilgilerinizi bırakın, eğitim danışmanlarımız sizi arasın.
                  </p>
                </div>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={dismiss}
                className="absolute top-3.5 right-3.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[var(--ink)] shadow-sm"
                aria-label="Pencereyi kapat"
              >
                <CloseGlyph className="h-3.5 w-3.5" />
              </button>
            </div>

            <form onSubmit={onSubmit} className="grid gap-4 p-5 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-4 sm:p-6" noValidate>
              <label className="block text-[0.82rem] font-semibold text-[#4b5563]">
                Ad Soyad
                <input
                  name="name"
                  autoComplete="name"
                  className={`mt-1.5 ${field}`}
                  placeholder="Adınız Soyadınız"
                  aria-invalid={error?.startsWith("Ad") ? true : undefined}
                />
              </label>

              <label className="block text-[0.82rem] font-semibold text-[#4b5563]">
                Telefon (Cep veya Sabit)
                <span className="mt-1.5 flex overflow-hidden rounded-[10px] border border-[#d8dee6] bg-white focus-within:border-[var(--signal)] focus-within:shadow-[0_0_0_3px_color-mix(in_srgb,var(--signal)_18%,transparent)]">
                  <span className="flex shrink-0 items-center px-3 text-[0.85rem] font-semibold text-[var(--ink)]">
                    TR +90
                  </span>
                  <span className="my-2 w-px bg-[#d8dee6]" aria-hidden />
                  <input
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    value={phone}
                    onChange={(e) => setPhone(formatPhone(e.target.value))}
                    className="min-w-0 flex-1 border-0 bg-transparent px-3 py-3 text-[0.95rem] text-[var(--ink)] outline-none placeholder:text-[#9aa3af]"
                    placeholder="506 695 85 04"
                    aria-invalid={error?.startsWith("Telefon") ? true : undefined}
                  />
                </span>
              </label>

              <label className="block text-[0.82rem] font-semibold text-[#4b5563]">
                Sınıf Seviyesi
                <select name="grade" defaultValue="" className={`lead-select mt-1.5 ${field}`}>
                  <option value="" disabled>
                    Sınıf Seviyesi
                  </option>
                  {GRADES.map((grade) => (
                    <option key={grade} value={grade}>
                      {grade}
                    </option>
                  ))}
                </select>
              </label>

              <div className="flex flex-col justify-end">
                <button
                  type="submit"
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded-[10px] bg-[var(--signal)] px-4 text-[0.98rem] font-bold text-white shadow-[0_10px_18px_-10px_rgba(196,30,42,0.95)] transition-colors hover:bg-[var(--signal-deep)]"
                >
                  Bilgi Talebi Gönder
                </button>
              </div>

              <div className="sm:col-span-2">
                {error ? (
                  <p className="text-sm font-medium text-[var(--signal)]" role="alert">
                    {error}
                  </p>
                ) : null}
                {status === "sent" ? (
                  <p className="text-sm font-medium text-[#1c7a4c]" role="status">
                    WhatsApp açıldı. Danışmanımız en kısa sürede dönüş yapacak.
                  </p>
                ) : null}
                {status === "blocked" && fallbackHref ? (
                  <p className="text-sm" role="alert">
                    WhatsApp açılamadı.{" "}
                    <a href={fallbackHref} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
                      Buradan açın
                    </a>
                    .
                  </p>
                ) : null}
                <p className="mt-2 text-[0.78rem] leading-snug text-[#8a93a0]">
                  Gönderince WhatsApp açılır. Kişisel veriler{" "}
                  <Link href="/gizlilik" className="font-semibold text-[var(--signal)] hover:underline" onClick={dismiss}>
                    gizlilik metnine
                  </Link>{" "}
                  göre iletilir.
                </p>
              </div>
            </form>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function ClipboardGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="7" y="4.5" width="10" height="15" rx="1.6" />
      <path d="M9.2 4.5V3.8A1.3 1.3 0 0 1 10.5 2.5h3A1.3 1.3 0 0 1 14.8 3.8v.7" />
      <path d="M10 10h4M10 13.5h4M10 17h2.5" strokeLinecap="round" />
    </svg>
  );
}

function CloseGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
      <path d="M2 2l8 8M10 2L2 10" strokeLinecap="round" />
    </svg>
  );
}
