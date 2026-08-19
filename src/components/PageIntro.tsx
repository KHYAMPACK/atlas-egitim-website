import type { ReactNode } from "react";

type PageIntroProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
};

export function PageIntro({ eyebrow, title, children }: PageIntroProps) {
  return (
    <header className="pb-8 pt-10 md:pb-10 md:pt-14">
      <div className="container-page">
        {eyebrow ? <p className="text-sm font-semibold text-[var(--signal)]">{eyebrow}</p> : null}
        <h1 className="mt-2 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.4rem)] leading-[1.08] tracking-tight">
          {title}
        </h1>
        {children ? <div className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--muted)]">{children}</div> : null}
      </div>
    </header>
  );
}
