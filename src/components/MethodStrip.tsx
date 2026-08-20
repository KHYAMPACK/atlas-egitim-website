import type { ComponentType } from "react";
import { lgsGuide } from "@/lib/site";

type OfferingIcon = (typeof lgsGuide.offerings.items)[number]["icon"];

const icons: Record<OfferingIcon, ComponentType<{ className?: string }>> = {
  attendance: AttendanceGlyph,
  guidance: GuidanceGlyph,
  teachers: TeachersGlyph,
  homework: HomeworkGlyph,
  parents: ParentsGlyph,
  materials: MaterialsGlyph,
  moxo: MoxoGlyph,
  attentioner: AttentionerGlyph,
  coach: CoachGlyph,
  "attention-test": AttentionTestGlyph,
  growth: GrowthGlyph,
  focus: FocusGlyph,
};

export function MethodStrip() {
  return (
    <section className="py-14 md:py-20" aria-labelledby="offerings-title">
      <div className="container-page">
        <h2
          id="offerings-title"
          className="max-w-2xl font-[family-name:var(--font-display)] text-[clamp(1.85rem,3.4vw,2.75rem)] leading-[1.12] tracking-tight"
        >
          {lgsGuide.offerings.title}
        </h2>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {lgsGuide.offerings.items.map((item) => {
            const Icon = icons[item.icon];
            return (
              <li
                key={item.title}
                className="flex min-h-[16.5rem] flex-col rounded-[1.75rem] bg-[var(--foam)] p-7 shadow-[0_16px_44px_-28px_rgba(18,32,51,0.42)] md:min-h-[18rem] md:p-8"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color-mix(in_srgb,var(--signal)_10%,var(--paper))] text-[var(--signal)]">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-[1.45rem] leading-tight tracking-tight md:text-[1.6rem]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[1.02rem] leading-relaxed text-[var(--muted)]">{item.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function glyphProps(className?: string) {
  return {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };
}

function AttendanceGlyph({ className }: { className?: string }) {
  return (
    <svg {...glyphProps(className)}>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M8 3.5v3M16 3.5v3M4 10h16" />
      <path d="M8.5 14.2l1.8 1.8 4.7-4.7" />
    </svg>
  );
}

function GuidanceGlyph({ className }: { className?: string }) {
  return (
    <svg {...glyphProps(className)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 4.5v2.2M12 17.3v2.2M4.5 12h2.2M17.3 12h2.2" />
      <path d="M12 12l3.2-4.4L12 12l-1.2 5.2L12 12z" />
    </svg>
  );
}

function TeachersGlyph({ className }: { className?: string }) {
  return (
    <svg {...glyphProps(className)}>
      <path d="M4.5 18.5V7.2L12 4.5l7.5 2.7v11.3" />
      <path d="M8 18.5V12h8v6.5" />
      <path d="M4.5 18.5h15" />
    </svg>
  );
}

function HomeworkGlyph({ className }: { className?: string }) {
  return (
    <svg {...glyphProps(className)}>
      <rect x="6" y="4" width="12" height="16.5" rx="1.6" />
      <path d="M9.2 4V3.2A1.2 1.2 0 0 1 10.4 2h3.2A1.2 1.2 0 0 1 14.8 3.2V4" />
      <path d="M9 10h6M9 13.2h6M9 16.4h3.4" />
    </svg>
  );
}

function ParentsGlyph({ className }: { className?: string }) {
  return (
    <svg {...glyphProps(className)}>
      <path d="M5 16.5c0-2.4 2.4-4 5.2-4s5.2 1.6 5.2 4" />
      <circle cx="10.2" cy="8.4" r="2.3" />
      <path d="M15.2 16.8c.4-1.9 2.2-3.2 4.3-3.2" />
      <circle cx="17.6" cy="9.2" r="1.8" />
    </svg>
  );
}

function MaterialsGlyph({ className }: { className?: string }) {
  return (
    <svg {...glyphProps(className)}>
      <path d="M5 7.2h10.5a2 2 0 0 1 2 2V19H7a2 2 0 0 1-2-2V7.2z" />
      <path d="M7 7.2V5.8A1.8 1.8 0 0 1 8.8 4h9.4A1.8 1.8 0 0 1 20 5.8V16" />
    </svg>
  );
}

function MoxoGlyph({ className }: { className?: string }) {
  return (
    <svg {...glyphProps(className)}>
      <rect x="3.5" y="5" width="17" height="11.5" rx="1.8" />
      <path d="M8 19.5h8M12 16.5v3" />
      <circle cx="12" cy="10.6" r="2.4" />
      <path d="M12 8.2v-.8M12 14.6v-.8M9.2 10.6H8.4M15.6 10.6h-.8" />
    </svg>
  );
}

function AttentionerGlyph({ className }: { className?: string }) {
  return (
    <svg {...glyphProps(className)}>
      <circle cx="12" cy="12" r="8.2" />
      <circle cx="12" cy="12" r="4.8" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function CoachGlyph({ className }: { className?: string }) {
  return (
    <svg {...glyphProps(className)}>
      <circle cx="9" cy="8" r="2.3" />
      <path d="M4.8 18c.3-2.6 2.4-4.2 4.2-4.2 1.3 0 2.5.6 3.3 1.6" />
      <circle cx="16.2" cy="12.2" r="4.2" />
      <path d="M16.2 10v2.2l1.5 1.1" />
    </svg>
  );
}

function AttentionTestGlyph({ className }: { className?: string }) {
  return (
    <svg {...glyphProps(className)}>
      <circle cx="10.5" cy="10.5" r="6.2" />
      <path d="M14.8 14.8 20 20" />
      <path d="M8.4 10.5h4.2M10.5 8.4v4.2" />
    </svg>
  );
}

function GrowthGlyph({ className }: { className?: string }) {
  return (
    <svg {...glyphProps(className)}>
      <path d="M4.5 19.5h15" />
      <path d="M7 19.5V13h3v6.5M12.2 19.5V9h3v10.5M17.4 19.5V5.8h2.2v13.7" />
    </svg>
  );
}

function FocusGlyph({ className }: { className?: string }) {
  return (
    <svg {...glyphProps(className)}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 4.2v3.2M12 16.6v3.2M4.2 12h3.2M16.6 12h3.2" />
    </svg>
  );
}
