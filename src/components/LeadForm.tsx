"use client";

import { FormEvent, useId, useState } from "react";
import { whatsappLink } from "@/lib/site";

type Intent = "fiyat" | "kayit" | "bilgi";

type LeadFormProps = {
  intent?: Intent;
  layout?: "bar" | "stack";
  submitLabel?: string;
  className?: string;
  tone?: "light" | "onNavy";
  autoFocus?: boolean;
};

const INTRO: Record<Intent, string> = {
  fiyat: "Merhaba, fiyat bilgisi almak istiyorum.",
  kayit: "Merhaba, kayıt ve program hakkında bilgi almak istiyorum.",
  bilgi: "Merhaba, web sitesinden yazıyorum.",
};

const GRADES = ["5. sınıf", "6. sınıf", "7. sınıf", "8. sınıf", "Diğer"] as const;

export function LeadForm({
  intent = "bilgi",
  layout = "stack",
  submitLabel = "Gönder",
  className = "",
  tone = "light",
  autoFocus = false,
}: LeadFormProps) {
  const uid = useId();
  const [status, setStatus] = useState<"idle" | "sent" | "blocked">("idle");
  const [error, setError] = useState<string | null>(null);
  const [fallbackHref, setFallbackHref] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const grade = String(data.get("grade") || "").trim();

    if (!phone) {
      setError("Telefon numaranızı yazın.");
      setStatus("idle");
      return;
    }
    setError(null);

    const text = [INTRO[intent], name ? `Adım: ${name}` : null, `Telefon: ${phone}`, grade ? `Sınıf: ${grade}` : null]
      .filter(Boolean)
      .join("\n");

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
  }

  const field =
    tone === "onNavy"
      ? "w-full rounded-full border-0 bg-white px-5 py-3.5 text-base text-[var(--ink)] shadow-none outline-none ring-0 placeholder:text-[var(--muted)] focus-visible:ring-2 focus-visible:ring-white"
      : "w-full rounded-full border-0 bg-white px-5 py-3.5 text-base text-[var(--ink)] shadow-sm outline-none ring-1 ring-[var(--line)] placeholder:text-[var(--muted)] focus-visible:ring-2 focus-visible:ring-[var(--signal)]";

  return (
    <form onSubmit={onSubmit} className={className} noValidate>
      <div className={layout === "bar" ? "grid gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto]" : "grid gap-3"}>
        <label className="sr-only" htmlFor={`lead-name-${uid}`}>
          Adınız
        </label>
        <input
          id={`lead-name-${uid}`}
          name="name"
          autoComplete="name"
          autoFocus={autoFocus}
          className={field}
          placeholder="Adınız"
        />
        <label className="sr-only" htmlFor={`lead-phone-${uid}`}>
          Telefon
        </label>
        <input
          id={`lead-phone-${uid}`}
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className={field}
          placeholder="Telefon"
          aria-invalid={error ? true : undefined}
        />
        <label className="sr-only" htmlFor={`lead-grade-${uid}`}>
          Öğrenci sınıfı
        </label>
        <select id={`lead-grade-${uid}`} name="grade" defaultValue="" className={`lead-select ${field}`}>
          <option value="" disabled>
            Öğrenci sınıfı
          </option>
          {GRADES.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
        <button type="submit" className="btn btn-signal min-h-[52px] px-8">
          {submitLabel}
        </button>
      </div>
      {error ? (
        <p className={`mt-3 text-sm ${tone === "onNavy" ? "text-white/90" : "text-[var(--signal)]"}`} role="alert">
          {error}
        </p>
      ) : null}
      {status === "sent" ? (
        <p className={`mt-3 text-sm ${tone === "onNavy" ? "text-white/80" : "text-[#1c7a4c]"}`} role="status">
          WhatsApp açıldı.
        </p>
      ) : null}
      {status === "blocked" && fallbackHref ? (
        <p className={`mt-3 text-sm ${tone === "onNavy" ? "text-white/90" : ""}`} role="alert">
          WhatsApp açılamadı.{" "}
          <a href={fallbackHref} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
            Buradan açın
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
