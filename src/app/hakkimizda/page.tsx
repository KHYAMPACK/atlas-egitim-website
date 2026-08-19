import type { Metadata } from "next";
import { ExamResults } from "@/components/ExamResults";
import { LocalInfo } from "@/components/LocalInfo";
import { PageIntro } from "@/components/PageIntro";
import { StaffUnits } from "@/components/StaffUnits";
import { StartPath } from "@/components/StartPath";
import { WhyAtlas } from "@/components/WhyAtlas";
import { pageMetadata } from "@/lib/seo";
import { about } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Hakkımızda",
  description:
    "Atlas VIP Eğitim Kurumu: Denizli Gerzele’de 5–8. sınıf LGS hazırlığı, küçük grup ve konu takibi.",
  path: "/hakkimizda",
});

export default function AboutPage() {
  return (
    <div>
      <PageIntro eyebrow="Gerzele · Denizli" title="Hakkımızda">
        {about.intro}
      </PageIntro>

      <LocalInfo />

      <WhyAtlas />
      <ExamResults />
      <StaffUnits />
      <StartPath />
    </div>
  );
}
