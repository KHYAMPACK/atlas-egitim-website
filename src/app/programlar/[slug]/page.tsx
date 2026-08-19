import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaqAccordion } from "@/components/FaqAccordion";
import { LeadBand } from "@/components/LeadBand";
import { PageIntro } from "@/components/PageIntro";
import { pageMetadata } from "@/lib/seo";
import { getProgram, programs, site, whatsappLink } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) {
    return { title: "Program Bulunamadı" };
  }
  return pageMetadata({
    title: program.title,
    description: `${program.title} — ${program.summary} Atlas VIP, Denizli Gerzele.`,
    path: `/programlar/${program.slug}`,
  });
}

export default async function ProgramDetailPage({ params }: Props) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();

  const others = programs.filter((item) => item.slug !== program.slug);

  return (
    <div>
      <PageIntro eyebrow={program.grades} title={program.title}>
        {program.pitch}
      </PageIntro>

      <LeadBand title="Bu Program İçin Fiyat Alın" intent="fiyat" tone="navy" />

      <div className="container-page grid gap-12 py-12 md:grid-cols-[1.1fr_0.9fr] md:py-16">
        <div>
          <p className="text-sm text-[var(--muted)]">{program.grades}</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl">Nasıl İşler</h2>
          <ol className="mt-8 space-y-8">
            {program.process.map((step) => (
              <li key={step.title}>
                <h3 className="font-[family-name:var(--font-display)] text-xl">{step.title}</h3>
                <p className="mt-2 text-[var(--muted)]">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <aside>
          <h2 className="font-[family-name:var(--font-display)] text-2xl">Bu Programda</h2>
          <ul className="mt-5 space-y-3">
            {program.points.map((point) => (
              <li key={point} className="text-[var(--muted)]">
                {point}
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink(`Merhaba, ${program.title} hakkında bilgi almak istiyorum.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-signal mt-8 w-full"
          >
            Bu program için yaz
          </a>
          <a href={`tel:${site.phoneTel}`} className="btn btn-secondary mt-3 w-full">
            {site.phoneDisplay}
          </a>
        </aside>
      </div>

      {program.faqs.length > 0 ? (
        <div className="bg-[var(--foam)] py-12 md:py-16">
          <div className="container-page max-w-3xl">
            <h2 className="font-[family-name:var(--font-display)] text-3xl">Sık Sorulanlar</h2>
            <div className="mt-8">
              <FaqAccordion items={program.faqs} />
            </div>
          </div>
        </div>
      ) : null}

      <div className="container-page py-12 md:py-16">
        <h2 className="font-[family-name:var(--font-display)] text-2xl">Diğer Programlar</h2>
        <ul className="mt-6 grid gap-6 sm:grid-cols-3">
          {others.map((item) => (
            <li key={item.slug}>
              <Link href={`/programlar/${item.slug}`} className="block hover:text-[var(--signal)]">
                <p className="font-[family-name:var(--font-display)] text-lg">{item.title}</p>
                <p className="mt-1 text-sm text-[var(--muted)]">{item.grades}</p>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/programlar" className="mt-8 inline-block text-sm underline decoration-[var(--line)] underline-offset-4">
          Tüm programlar
        </Link>
      </div>
    </div>
  );
}
