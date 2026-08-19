import Link from "next/link";
import { navLinks, site, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--line)] bg-[var(--foam)] md:pb-0">
      <div className="mx-auto grid max-w-[70rem] gap-10 px-4 py-14 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight">{site.shortName}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--muted)]">
            Gerzele’de 5–8. sınıf LGS hazırlığı. Küçük grup, haftalık deneme.
          </p>
        </div>
        <div>
          <ul className="space-y-2 text-sm">
            {navLinks
              .filter((link) => link.href !== "/")
              .map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[var(--signal)]">
                    {link.label}
                  </Link>
                </li>
              ))}
            <li>
              <Link href="/sss" className="hover:text-[var(--signal)]">
                Sık sorulanlar
              </Link>
            </li>
            <li>
              <Link href="/gizlilik" className="hover:text-[var(--signal)]">
                Gizlilik
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <a href={`tel:${site.phoneTel}`} className="block text-lg font-semibold tracking-tight">
            {site.phoneDisplay}
          </a>
          <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-3 block text-[var(--muted)] hover:text-[var(--ink)]">
            {site.address.full}
          </a>
          <div className="mt-5 flex flex-wrap gap-2">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              WhatsApp
            </a>
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-[70rem] flex-col gap-2 px-4 py-4 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between md:px-8">
          <p>
            © 2026 {site.name}
          </p>
          <a href="https://ekizyazilim.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--ink)]">
            Ekiz Yazılım
          </a>
        </div>
      </div>
    </footer>
  );
}
