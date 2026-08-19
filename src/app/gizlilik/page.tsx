import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Gizlilik Politikası",
  description: `${site.shortName} web sitesi gizlilik ve kişisel verilerin korunması metni.`,
  path: "/gizlilik",
  robots: { index: true, follow: true },
});

const h2Class = "font-[family-name:var(--font-display)] text-2xl text-[var(--ink)]";
const linkClass = "font-semibold text-[var(--signal)]";

export default function PrivacyPage() {
  return (
    <div>
      <PageIntro eyebrow="KVKK" title="Gizlilik Politikası" />

      <div className="container-page max-w-3xl py-20 md:py-28">
        <div className="space-y-8 text-base leading-relaxed text-[var(--muted)]">
          <p>
            Bu metin, {site.name} web sitesinin kişisel verileri nasıl aldığını ve kullandığını anlatır. Yalnızca
            sitede gerçekten olan işlemlere dayanır.
          </p>

          <section>
            <h2 className={h2Class}>1. Veri Sorumlusu</h2>
            <p className="mt-3">Web sitesinde kişisel verilerin işlenmesinden {site.name} sorumludur.</p>
            <p className="mt-3">Adres: {site.address.full}</p>
            <p className="mt-3">
              Telefon:{" "}
              <a href={`tel:${site.phoneTel}`} className={linkClass}>
                {site.phoneDisplay}
              </a>
            </p>
          </section>

          <section>
            <h2 className={h2Class}>2. Toplanan Bilgiler</h2>
            <p className="mt-3">
              İletişim formunda ad, telefon, isteğe bağlı sınıf ve mesaj alanları bulunur. Formu gönderdiğinizde bu
              bilgiler WhatsApp mesajına yazılır. Site formları sunucularımızda saklanmaz.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>3. Amaç Ve Hukuki Sebep</h2>
            <p className="mt-3">
              Bilgiler, sizin talebiniz üzerine kurum hakkında bilgi vermek, program sormak veya kayıt / tanışma
              görüşmesi planlamak için kullanılır. Hukuki sebep, veli olarak ilettiğiniz bilgi talebini yerine
              getirmektir. Pazarlama amacıyla üçüncü taraflara satılmaz.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>4. WhatsApp</h2>
            <p className="mt-3">
              Formu gönderince tarayıcınız kurumun WhatsApp hattını açar; yazdıklarınız oraya taşınır. Mesaj sitemize
              kaydedilmez. WhatsApp / Meta, kurum numarasına giden yazışmayı kendi hizmet kurallarına göre işler.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>5. Harita</h2>
            <p className="mt-3">
              Anasayfa ve iletişim sayfalarında Google Haritalar gömülü çerçevesi (iframe) kullanılır. Harita
              yüklenirken Google teknik verilerinizi (örneğin IP adresi) işleyebilir; Google kendi çerezlerini
              kullanabilir. Haritayı Google’ın sayfasında açmak için ayrı bir bağlantı da sunulur.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>6. Teknik Kayıt</h2>
            <p className="mt-3">
              Sitede reklam veya ölçüm çerezi yoktur. Analitik aracı da yoktur.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>7. Saklama</h2>
            <p className="mt-3">
              Web sitesi formun bir kopyasını tutmaz. WhatsApp yazışması, velilere yanıt verildiği olağan süreçte
              kurumun WhatsApp hesabında kalır; oradan silindiğinde de kalkar.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>8. Haklar</h2>
            <p className="mt-3">
              6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında verilerinizin işlenip işlenmediğini öğrenme,
              düzeltilmesini veya silinmesini isteme ve işlenmesine itiraz etme haklarınız vardır. Başvurularınızı
              telefon hattımıza yazabilirsiniz. Şikâyet için Kişisel Verileri Koruma Kurulu’na başvurabilirsiniz.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>9. Çocuklar</h2>
            <p className="mt-3">
              İletişim formu ebeveyn veya vasiler içindir; çocukların doldurması için değildir. Sınıf alanı isteğe
              bağlıdır ve yalnızca program hakkında doğru bilgi verebilmek için sorulur.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>10. İletişim</h2>
            <p className="mt-3">
              Gizlilik ve kişisel veri talepleriniz için{" "}
              <a href={`tel:${site.phoneTel}`} className={linkClass}>
                {site.phoneDisplay}
              </a>
              . Adres: {site.address.full}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
