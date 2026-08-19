"use client";

import Link from "next/link";
import { useEffect } from "react";
import { PageIntro } from "@/components/PageIntro";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <PageIntro eyebrow="Hata" title="Bir şeyler ters gitti">
        Sayfa yüklenirken bir sorun oluştu. Tekrar deneyebilir veya anasayfaya dönebilirsiniz.
      </PageIntro>
      <div className="container-page flex flex-col gap-3 py-12 sm:flex-row md:py-16">
        <button type="button" onClick={() => retry()} className="btn btn-navy w-full sm:w-auto">
          Tekrar dene
        </button>
        <Link href="/" className="btn btn-secondary w-full sm:w-auto">
          Anasayfaya dön
        </Link>
      </div>
    </div>
  );
}
