"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { denemeClub } from "@/lib/site";

export function DenemeFloat() {
  const pathname = usePathname();
  if (pathname === denemeClub.href) return null;

  return (
    <Link
      href={denemeClub.href}
      className="deneme-float"
      aria-label={`${denemeClub.title} sayfasına git`}
    >
      <PaperGlyph className="h-4 w-4 shrink-0" />
      <span className="deneme-float-label">{denemeClub.title}</span>
    </Link>
  );
}

function PaperGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="6" y="3.5" width="12" height="17" rx="1.6" />
      <path d="M9 8h6M9 11.5h6M9 15h3.5" strokeLinecap="round" />
    </svg>
  );
}
