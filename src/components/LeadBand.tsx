import { LeadForm } from "@/components/LeadForm";

export function LeadBand({
  title,
  intent = "kayit",
  tone = "navy",
}: {
  title: string;
  intent?: "fiyat" | "kayit" | "bilgi";
  tone?: "navy" | "paper";
}) {
  const navy = tone === "navy";
  return (
    <section className="py-6 md:py-8">
      <div
        className={`container-page rounded-[1.6rem] px-5 py-8 md:px-8 ${
          navy ? "bg-[var(--navy)] text-white" : "bg-[color-mix(in_srgb,var(--navy)_7%,var(--paper))]"
        }`}
      >
        <h2 className={`text-center font-[family-name:var(--font-display)] text-xl tracking-tight md:text-2xl ${navy ? "" : ""}`}>
          {title}
        </h2>
        <div className="mt-6">
          <LeadForm intent={intent} layout="bar" submitLabel="Gönder" tone={navy ? "onNavy" : "light"} />
        </div>
      </div>
    </section>
  );
}
