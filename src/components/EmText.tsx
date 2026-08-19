import type { ReactNode } from "react";

export function EmText({
  text,
  tone = "signal",
}: {
  text: string;
  tone?: "signal" | "gold";
}) {
  const className =
    tone === "gold" ? "font-semibold text-[var(--gold)]" : "font-semibold text-[var(--signal)]";

  const parts: ReactNode[] = [];
  let last = 0;
  let key = 0;

  for (const match of text.matchAll(/\*\*(.+?)\*\*/g)) {
    const index = match.index ?? 0;
    if (index > last) parts.push(text.slice(last, index));
    parts.push(
      <strong key={key} className={className}>
        {match[1]}
      </strong>,
    );
    key += 1;
    last = index + match[0].length;
  }

  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
