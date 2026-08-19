"use client";

import { useId, useState } from "react";
import { faqs } from "@/lib/site";

export function FaqAccordion({ items = faqs }: { items?: readonly { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-start justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span className="font-semibold">{item.q}</span>
              <span aria-hidden className="mt-1 text-[var(--muted)]">
                {isOpen ? "–" : "+"}
              </span>
            </button>
            <div id={panelId} role="region" hidden={!isOpen} className="pb-5 text-[var(--muted)]">
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
