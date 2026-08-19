export function TopoField({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 400" fill="none" aria-hidden>
      <circle cx="200" cy="200" r="40" stroke="currentColor" strokeWidth="1.2" className="text-[var(--signal)]" />
      <circle cx="200" cy="200" r="88" stroke="currentColor" strokeWidth="1" className="text-white/25" />
      <circle cx="200" cy="200" r="136" stroke="currentColor" strokeWidth="1" className="text-white/18" />
      <circle cx="200" cy="200" r="184" stroke="currentColor" strokeWidth="1" className="text-white/12" />
      <path d="M200 16v368M16 200h368" stroke="currentColor" strokeWidth="1" className="text-white/20" />
      <path d="M58 58l284 284M342 58L58 342" stroke="currentColor" strokeWidth="0.8" className="text-white/12" />
    </svg>
  );
}

export function CompassRose({ className = "h-40 w-40" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" aria-hidden>
      <circle cx="100" cy="100" r="92" stroke="currentColor" strokeWidth="1" className="text-white/20" />
      <circle cx="100" cy="100" r="64" stroke="currentColor" strokeWidth="1" className="text-white/25" />
      <circle cx="100" cy="100" r="8" fill="currentColor" className="text-[var(--signal)]" />
      <path d="M100 18 L108 100 L100 82 L92 100 Z" fill="currentColor" className="text-[var(--signal)]" />
      <path d="M100 182 L92 100 L100 118 L108 100 Z" fill="currentColor" className="text-white/55" />
      <path d="M18 100 L100 92 L82 100 L100 108 Z" fill="currentColor" className="text-white/35" />
      <path d="M182 100 L100 108 L118 100 L100 92 Z" fill="currentColor" className="text-white/35" />
      <text
        x="100"
        y="14"
        textAnchor="middle"
        fill="currentColor"
        className="text-[var(--signal)]"
        fontSize="11"
        fontFamily="ui-monospace, monospace"
        letterSpacing="2"
      >
        N
      </text>
    </svg>
  );
}
