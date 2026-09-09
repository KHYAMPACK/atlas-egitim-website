export const site = {
  name: "Atlas VIP Eğitim Kurumu",
  shortName: "Atlas VIP",
  tagline: "Denizli Gerzele’de 5–8. sınıf LGS hazırlığı.",
  description:
    "Atlas VIP Eğitim Kurumu, Denizli Merkezefendi Gerzele’de 5, 6, 7 ve 8. sınıf öğrencilerine küçük grup LGS hazırlığı, haftalık deneme ve konu takip sunar.",
  phoneDisplay: "0506 695 85 04",
  phoneTel: "+905066958504",
  whatsapp: "905066958504",
  address: {
    street: "Gerzele Mahallesi İbrahim Cengiz Caddesi No: 27/A",
    district: "Merkezefendi",
    city: "Denizli",
    full: "Gerzele, İbrahim Cengiz Cd. 27/A, 20020 Merkezefendi / Denizli",
  },
  instagram: "atlasegitimkurumu",
  instagramUrl: "https://www.instagram.com/atlasegitimkurumu/",
  veliInstallUrl: "https://veli.atlasegitimkurumu.com/?install=1",
  mapsUrl: "https://share.google/e8Tvt7nEHjkweztJJ",
  mapsEmbedUrl: "https://maps.google.com/maps?cid=7138756478941079489&hl=tr&z=17&output=embed",
  hours: [
    { days: "Pazartesi – Cuma", hours: "Etüt saatleri · kapanış 19:00" },
    { days: "Cumartesi", hours: "Randevu ile" },
    { days: "Pazar", hours: "Kapalı" },
  ],
  grades: "5–8. sınıf",
  url: "https://atlasegitimkurumu.com",
  headerPromo: "Erken Kayıt Avantajları Devam Ediyor",
} as const;

export const gradeCards = [
  {
    n: "5",
    title: "5. Sınıf",
    heading: "Temel Burada Kurulur",
    text: "Matematik, fen ve Türkçe’de konu temeli. Küçük grupta soru sorma, düzenli test ve yanlış kaydı bu yıl başlar.",
    href: "/programlar/lgs-hazirlik",
  },
  {
    n: "6",
    title: "6. Sınıf",
    heading: "Konu Pekişir Tempo Artar",
    text: "Açık konular kapanır, test ritmi oturur. Okul yazılılarına göre tekrar; LGS alışkanlığı sessizce büyür.",
    href: "/programlar/lgs-hazirlik",
  },
  {
    n: "7",
    title: "7. Sınıf",
    heading: "Yazılı Ve Bursluluk",
    text: "Okul yazılısı ve bursluluk sınavı öne çıkar. Eksik konu listesi velinin eline gelir; 8. sınıfa geçiş burada hazırlanır.",
    href: "/programlar/okul-sinavi",
  },
  {
    n: "8",
    title: "8. Sınıf",
    heading: "LGS Sınav Yılı",
    text: "Haftalık deneme, net özeti, hız ve strateji. Konu kapanır, tempo düşmez; koçluk sınav sabahına kadar durur.",
    href: "/programlar/lgs-hazirlik",
  },
] as const;

export const navLinks = [
  { href: "/", label: "Anasayfa" },
  { href: "/programlar", label: "Programlar" },
  { href: "/deneme", label: "Deneme Kulübü" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export const islandNav = {
  left: [
    { href: "/programlar", label: "Programlar" },
    { href: "/hakkimizda", label: "Kurumsal" },
  ],
  right: [
    { href: "/deneme", label: "Deneme" },
    { href: "/iletisim", label: "İletişim" },
  ],
} as const;

export const programs = [
  {
    slug: "lgs-hazirlik",
    code: "LGS",
    title: "LGS Hazırlık",
    grades: "5 · 6 · 7 · 8. sınıf",
    summary:
      "Konu anlatımı, düzenli test ve haftalık deneme. Sınava giden ana hat burada kurulur.",
    pitch:
      "LGS, son yılın telaşı değil. 5. sınıftan 8. sınıfa kadar konu, tempo ve deneme alışkanlığı birlikte büyür.",
    points: [
      "Sınıf seviyesine göre konu planı",
      "Düzenli test çözümü ve yanlış kaydı",
      "Haftalık deneme ve net özeti",
      "Küçük grupta soru sorma süresi",
    ],
    process: [
      { title: "Seviye Tespiti", text: "Tanışma görüşmesi ve konu bazlı kısa ölçümle nerede durduğunu görürüz." },
      { title: "Haftalık Ritim", text: "Anlatım, test ve deneme aynı haftanın içinde kapanır; açık konu birikir." },
      { title: "Sınav Yaklaşınca", text: "Hız, strateji ve genel tekrar öne çıkar. Koçluk tempo düşmesin diye durur." },
    ],
    faqs: [
      {
        q: "Hangi sınıflar LGS programına alınır?",
        a: "5, 6, 7 ve 8. sınıf. Erken yıllarda temel, 8. sınıfta sınav temposu ağır basar.",
      },
      {
        q: "Gruplar kalabalık mı?",
        a: "Hayır. Küçük grup çalışıyoruz; her öğrencinin sorusu için süre bırakılır.",
      },
    ],
  },
  {
    slug: "okul-sinavi",
    code: "YAZILI",
    title: "Okul Ve Bursluluk Sınavı",
    grades: "5 · 6 · 7. sınıf",
    summary:
      "Okul yazılıları ve bursluluk sınavları için konu kapatma. LGS’den önce tempo burada alışır.",
    pitch:
      "Bursluluk ve okul sınavı, LGS’den ayrı bir hedef. Aynı kadro, o sınavın diline göre çalışır.",
    points: [
      "Yazılı takvimine göre konu tekrarı",
      "Bursluluk denemeleri",
      "Eksik konu listesi velilere net aktarılır",
      "5–7. sınıfta LGS’ye yumuşak geçiş",
    ],
    process: [
      { title: "Hedefi Netleştir", text: "Okul yazılısı mı, bursluluk mu, ikisi mi — ona göre plan kurulur." },
      { title: "Konu Kapat", text: "Müfredat sırasına göre açıklar kapanır, testle pekişir." },
      { title: "Sınav Haftası", text: "Kısa tekrar, soru tipi ve tempo. Sürpriz bırakmamaya çalışırız." },
    ],
    faqs: [
      {
        q: "LGS’ye de devam eder mi?",
        a: "Evet. 5–7. sınıfta okul ve bursluluk çalışması, 8. sınıftaki LGS temposunun temelini kurar.",
      },
    ],
  },
  {
    slug: "yaz-kampi",
    code: "YAZ",
    title: "Yaz Kampı",
    grades: "Ortaokul",
    summary:
      "Matematik, fen, Türkçe ve İngilizce. Okuma saati ve tekrar. Yazın tempo sıfırlanmasın.",
    pitch:
      "Yaz, unutulan konuların yığıldığı mevsim olmasın. Kamp, yeni döneme açık konu bırakmadan girmek için.",
    points: [
      "Matematik, fen, Türkçe, İngilizce",
      "Okuma saati ve hız çalışması",
      "Eksik konu tekrarı",
      "Yeni döneme hazır kapanış",
    ],
    process: [
      { title: "Açık Konuyu Say", text: "Önceki yılın yarım kalanları listelenir; kampın omurgası bu listedir." },
      { title: "Günlük Blok", text: "Ders + okuma + kısa test. Uzun gün, dağınık gün değildir." },
      { title: "Eylül’e Teslim", text: "Velilere hangi konunun kapandığı, hangisinin takipte kaldığı söylenir." },
    ],
    faqs: [
      {
        q: "Yaz kampı ne zaman açılır?",
        a: "Tarihler her yıl okul takvimine göre netleşir. Güncel tarih için arayın veya WhatsApp’tan yazın.",
      },
    ],
  },
  {
    slug: "deneme-kulubu",
    code: "DENEME",
    title: "Deneme Kulübü Ve Hızlı Okuma",
    grades: "5–8. sınıf",
    summary:
      "Haftalık deneme serisi. Sonuç tek not değil, sonraki haftanın tekrar listesi. İsteyene hızlı okuma.",
    pitch:
      "Deneme, puan almak için değil; hangi konunun düştüğünü görmek için. Hızlı okuma, süre yetmeyen öğrenciye ayrı bir hat.",
    points: [
      "Haftalık deneme takvimi",
      "Doğru, yanlış, boş kaydı",
      "Konu konu tekrar programı",
      "Uzman eğitmenle hızlı okuma seansı",
    ],
    process: [
      { title: "Deneme Günü", text: "Sınav koşullarına yakın oturum. Süre, oturuş, boş bırakma alışkanlığı görünür." },
      { title: "Sonuç Değil Harita", text: "Tek skor yerine düşen konular listelenir; ertesi haftanın işi budur." },
      { title: "Hız Katmanı", text: "Paragraf ve süre sorunu olan öğrenciye hızlı okuma eklenir." },
    ],
    faqs: [
      {
        q: "Deneme sonucu velilere nasıl gider?",
        a: "Sözlü özetle yetinmeyiz. Hangi konunun açık olduğu not edilir; görüşmede bu liste üzerinden konuşulur.",
      },
    ],
  },
] as const;

export type ProgramSlug = (typeof programs)[number]["slug"];

export function getProgram(slug: string) {
  return programs.find((program) => program.slug === slug);
}

type DenemePublisherHouse = {
  name: string;
  src?: string;
  fit?: "contain" | "cover";
  tone?: "ink" | "sun";
};

const denemePublisherHouses: DenemePublisherHouse[] = [
  { name: "Özdebir", src: "/logo/yayinlar/ozdebir.png", fit: "contain" },
  { name: "Töder", src: "/logo/yayinlar/toder.png", fit: "contain" },
  { name: "Sinan Kuzucu", src: "/logo/yayinlar/sinan-kuzucu.png", fit: "contain" },
  { name: "Fenomen", src: "/logo/yayinlar/fenomen.png", fit: "contain" },
  { name: "Nar Test", src: "/logo/yayinlar/nar-test.png", fit: "contain" },
  { name: "Ankara Yayınları", src: "/logo/yayinlar/ankara.png", fit: "contain" },
  { name: "Hız Yayınları", src: "/logo/yayinlar/hiz.png", fit: "contain", tone: "sun" },
  { name: "Çanta Yayınları", src: "/logo/yayinlar/canta.png", fit: "contain" },
  { name: "Günay" },
  { name: "Palme", src: "/logo/yayinlar/palme.png", fit: "contain", tone: "ink" },
  { name: "Karekök", src: "/logo/yayinlar/karekok.png", fit: "contain" },
  { name: "Mozaik", src: "/logo/yayinlar/mozaik.png", fit: "cover" },
];

export const denemeClub = {
  href: "/deneme",
  eyebrow: "Haftalık Deneme",
  title: "Deneme Kulübü",
  heading: "Kâğıt Biter, Konu Kalır",
  promo: {
    p1: "**Deneme Kulübü**, sınav oturuşunu haftalık alışkanlık yapar. Süre, boş bırakma, yanlışın arkasındaki konu — hepsi aynı kâğıtta görünür.",
    p2: "Sonuç tek not olarak kalmaz. Düşen konular **ertesi haftanın tekrar listesidir**. Süre yetmeyen öğrenciye **hızlı okuma** ayrı hat.",
    cta: "Deneme Kulübü’nü İncele",
  },
  publishers: {
    eyebrow: "Deneme yayınları",
    title: "Haftanın kâğıdı",
    note: "Özdebir’den Mozaik’e, ve daha fazlası. Yayınevi değişir; açık konu sonraki denemeye yazılır.",
    houses: denemePublisherHouses,
  },
  intro:
    "Deneme, puan almak için değil; hangi konunun düştüğünü görmek için. Atlas VIP’te kâğıt bittikten sonra iş başlar.",
  points: [
    {
      title: "Sınav Günü Ritmi",
      text: "Süre, oturuş, boş bırakma. Evde çözülen test bunu göstermez; deneme günü gösterir.",
    },
    {
      title: "Net Değil Konu Listesi",
      text: "Velinin eline tek skor değil, düşen konuların listesi gider. Ertesi haftanın işi bu listedir.",
    },
    {
      title: "Hızlı Okuma Hattı",
      text: "Paragraf ve süre sorunu olan öğrenciye ayrı seans. Deneme temposu tek başına yetmezse bu katman eklenir.",
    },
  ],
  faqs: [
    {
      q: "Deneme Kulübü kimlere açık?",
      a: "5–8. sınıf. LGS programındaki öğrenci devam eder; yalnızca deneme hattını isteyen veli de yazabilir.",
    },
    {
      q: "Sonuç velilere nasıl gider?",
      a: "Tek not bırakılmaz. Hangi konunun açık olduğu not edilir; görüşmede bu liste üzerinden konuşulur.",
    },
    {
      q: "Hızlı okuma zorunlu mu?",
      a: "Hayır. Süre ve paragraf sorunu olan öğrenciye eklenir. Deneme asıl hattır.",
    },
    {
      q: "Haftada kaç deneme var?",
      a: "Ritim haftalıktır. Sınıf ve döneme göre gün netleşir; güncel takvim için arayın.",
    },
  ],
} as const;

export const examResults = {
  eyebrow: "LGS 2026",
  title: "Öğrencilerimiz Sınavda Bunu Yaptı",
  intro: "Puan, yüzdelik dilim ve yerleşilen lise. Soyadlar kısaltılır.",
  items: [
    {
      name: "Mert E.",
      score: "472,36",
      school: "Erbakır Fen Lisesi",
      percentile: "%0,52",
    },
    {
      name: "Rüya M.",
      score: "455,53",
      school: "Lütfi Ege Anadolu Lisesi",
      percentile: "%3,47",
    },
    {
      name: "Zeynep G.",
      score: "428,71",
      school: "Denizli İbrahim Çinkaya Sosyal Bilimler Lisesi",
      percentile: "%5,62",
    },
  ],
} as const;

export const whyAtlas = {
  intro:
    "**Planlı çalışma**, **koçluk** ve **birebir takip** ile öğrencinin hedefe giden yolunu birlikte yönetiriz.",
  points: [
    "Öğrenciye özel planlama",
    "Düzenli ölçme ve geri bildirim",
    "Birebir koçluk ve rehberlik",
    "Sınava uygun kaynak ve deneme takibi",
  ],
  cards: [
    {
      code: "01",
      title: "Küçük Grup, Kalabalık Sınıf Değil",
      text: "Her öğrencinin sorusu için süre var. Kalabalık dershanenin temposu burada kural değil.",
    },
    {
      code: "02",
      title: "Haftalık Deneme, Net Özet",
      text: "Deneme yapılır, sonuç tek not olarak kalmaz. Düşen konular bir sonraki haftanın işidir.",
    },
    {
      code: "03",
      title: "Yanlış Deftere Gömülmez",
      text: "Her yanlışın arkasında bir konu vardır. O konu kayda girer, tekrar programına yazılır.",
    },
    {
      code: "04",
      title: "Veli, Öğretmenin Sözüne Mahkûm Kalmaz",
      text: "Kâğıt ve sözlü aktarım uçucu. Görüşmede elimizde konu, deneme ve devam özeti olur.",
    },
  ],
} as const;

export const lgsGuide = {
  local: {
    eyebrow: "LGS Rehberi",
    title: "Gerzele LGS Kursu",
    subtitle: "Denizli LGS Hazırlık Kursu",
    p1: "**Gerzele LGS kursu** arayan öğrenciler ve veliler için Atlas VIP, Merkezefendi’deki konumu, **grup ve özel ders** konseptiyle planlı bir hazırlık süreci sunar. LGS sürecinde akademik dersler, soru çözümleri ve **haftalık deneme sınavları** ile öğrencinin sınav sistemine uygun hazırlanması sağlanır.",
    p2: "**Denizli LGS hazırlık kursu** arayışında olan aileler için bireysel eğitim koçluğu ile **sınav sistemi** için özel hazırlık yapılır.",
  },
  process: {
    title: "8. Sınıf LGS Hazırlık Süreci Nasıl Olmalıdır?",
    p1: "**8. sınıf LGS hazırlık** süreci yalnızca konu çalışmaktan ibaret değildir. Öğrencinin seviyesinin doğru belirlenmesi, **eksik konularının tespit edilmesi**, düzenli ödev takibi ve deneme sınavlarıyla gelişimin ölçülmesi gerekir.",
    p2: "**Atlas VIP** olarak öğrencilerimizi sınav sistemine uygun hazırlarız. LGS dershane beklentisini **küçük grup**, güçlü takip ve **rehberlik desteğiyle** birleştiren planlı bir süreç yürütürüz.",
  },
  system: {
    title: "Atlas VIP LGS Kurs Sistemi",
    p1: "Sınıfta **özel ders kalitesinde** eğitim veririz. Sınav sistemine göre konu anlatımı, soru bankası, düzenli deneme ve yardımcı materyalle gelişim sürekli desteklenir.",
    p2: "Her öğrencinin temposunu koçluk izler. **Öğrenci takip sistemi** kapsamında devam, ödev, deneme sonucu ve açık konular programlanır, izlenir ve düzenli değerlendirilir.",
  },
  parent: {
    eyebrow: "Eğitim Takibi",
    title: "Öğrenci Ve Veli Bilgilendirme",
    p1: "Koçluk ve öğretmenler ailelerle düzenli bilgi alışverişi yapar. Öğrencinin **devam durumu**, ödev takibi, **deneme sınavı sonuçları** ve başarı grafiği yakından izlenir.",
    p2: "**Rehberlik desteği** ile çalışma düzeni, sınav motivasyonu ve **hedef okul planı** düzenli değerlendirilir. Evdeki ödev ve programın tamamlanması sürecin parçasıdır.",
  },
  offerings: {
    title: "LGS Kursumuzda Neler Sunuyoruz?",
    items: [
      {
        icon: "attendance",
        title: "Devam Takibi",
        text: "Öğrencinin devamı düzenli izlenir. Gerekince veliye haber verilir.",
      },
      {
        icon: "guidance",
        title: "Rehberlik Desteği",
        text: "Koçlukla başarı grafiği, çalışma düzeni ve sınav motivasyonu takip edilir.",
      },
      {
        icon: "teachers",
        title: "Uzman Öğretmen Kadrosu",
        text: "Fen, matematik ve sözel. Konu öğrenilmeden geçilmez.",
      },
      {
        icon: "homework",
        title: "Ödev Kontrolü",
        text: "Ödev ayrıntılı kontrol edilir. Çalışma disiplini haftalık izlenir.",
      },
      {
        icon: "parents",
        title: "Veli Bilgilendirme",
        text: "Veliler akademik durum, deneme ve açık konular hakkında sık haberdar edilir.",
      },
      {
        icon: "materials",
        title: "Güçlü Materyal Desteği",
        text: "Süreç kitap, soru bankası, deneme ve ek çalışmalarla desteklenir.",
      },
      {
        icon: "moxo",
        title: "Moxo Testleri",
        text: "Dikkat süresi bilgisayarda ölçülür. Odak nerede kopuyor, kâğıt üzerinde tahmin edilmez.",
      },
      {
        icon: "attentioner",
        title: "Attentioner Dikkat Programı",
        text: "Dikkat bir kez test edilmez; programla çalışılır. Tempo ve sürdürme kası burada büyür.",
      },
      {
        icon: "coach",
        title: "Dikkat Koçluğu",
        text: "Oturuş, geri dönüş, dağılan dakikalar. Koçluk konuyu değil, kâğıtta kalmayı takip eder.",
      },
      {
        icon: "attention-test",
        title: "Dikkat Testleri",
        text: "Dikkat ölçülür, tahmin edilmez. Sonuç haftalık plana yazılır.",
      },
      {
        icon: "growth",
        title: "Gelişim Testleri",
        text: "Öğrenci şimdi nerede, geçen döneme göre ne değişti. Seviye sloganla değil testle görülür.",
      },
      {
        icon: "focus",
        title: "Odaklanma Çalışmaları",
        text: "Soruda kalma kısa çalışmalarla alışır. Sınav oturuşu konu kadar odak işidir.",
      },
    ],
  },
  close: {
    title: "Hedef Okula Yerleşene Kadar Destek",
    p1: "Öğrenci ilk geldiği günden **hedeflediği okula yerleşene kadar** eğitim desteğimiz sürer. Yalnızca ders başarısı değil; motivasyon, sınav disiplini ve doğru çalışma alışkanlığı da işin içindedir.",
    p2: "LGS hazırlığında başarılı olmak için **düzenli çalışma**, güçlü rehberlik, doğru kaynak, **deneme sınavları** ve disiplinli **öğrenci takip sistemi** birlikte yürür.",
  },
} as const;

export const staff = [
  {
    code: "FEN",
    name: "",
    title: "Fen Bilimleri Öğretmeni",
    field: "LGS fen",
    photo: "/photos/staff/fen.png",
  },
  {
    code: "MAT",
    name: "",
    title: "Matematik Öğretmeni",
    field: "LGS matematik",
    photo: "/photos/staff/mat.png",
  },
  {
    code: "SOZ",
    name: "",
    title: "Sözel Öğretmeni",
    field: "Türkçe · sosyal · İngilizce",
    photo: "/photos/staff/sozel.png",
  },
  {
    code: "KOC",
    name: "",
    title: "Koçluk Ve Rehberlik",
    field: "Mentörlük",
    photo: "/photos/staff/koc.png",
  },
] as const;

export const startSteps = [
  {
    n: "01",
    title: "Yazın Veya Arayın",
    text: "Sınıf, hedef (LGS, bursluluk, yaz) ve uygun saat. İlk temas beş dakikadır.",
  },
  {
    n: "02",
    title: "Seviyeyi Görün",
    text: "Kuruma gelin. Kısa tanışma ve konu bazlı tespit; plan buna göre kurulur.",
  },
  {
    n: "03",
    title: "Planı Netleştirin",
    text: "Haftalık ritim, deneme günü ve takip şekli konuşulur. Veli ile aynı listeye bakılır.",
  },
] as const;

export const faqs = [
  {
    q: "Hangi sınıfları alıyorsunuz?",
    a: "5, 6, 7 ve 8. sınıf. LGS hazırlık ana hattımız; okul ve bursluluk sınavları ile yaz kampı da var.",
  },
  {
    q: "Kurum nerede?",
    a: "Gerzele, İbrahim Cengiz Cd. 27/A, Merkezefendi / Denizli. Haritayı iletişim sayfasında açabilirsiniz.",
  },
  {
    q: "Sınıflar kalabalık mı?",
    a: "Küçük grup çalışıyoruz. Amaç her öğrencinin sorusuna süre ayırmak; kalabalık dershane modeli değil.",
  },
  {
    q: "Deneme sınavı var mı?",
    a: "Evet. Haftalık deneme kulübü var. Sonuç tek skor olarak bırakılmaz; açık konular sonraki haftaya yazılır.",
  },
  {
    q: "Kayıt nasıl işler?",
    a: "Önce telefon veya WhatsApp. Sonra tanışma ve seviye tespiti. Plan birlikte kilitlenir; kayıt bir form doldurmak değildir.",
  },
  {
    q: "Ücret nedir?",
    a: "Program, sınıf ve kontenjana göre değişir. Güncel bilgi için arayın veya WhatsApp’tan yazın.",
  },
  {
    q: "Yaz kampı ne zaman?",
    a: "Tarih her yıl okul takvimine göre açıklanır. Kontenjan ve tarih için bizi arayın.",
  },
] as const;

export const aboutStats = [
  { value: "5–8", label: "Sınıf", text: "LGS’ye giden ortaokul" },
  { value: "4", label: "Program", text: "LGS, yazılı, yaz, deneme" },
  { value: "Haftalık", label: "Deneme", text: "Kulüpte kâğıt, konu konu net" },
  { value: "4", label: "Kadro", text: "Fen, matematik, sözel, koçluk" },
] as const;

export const about = {
  intro:
    "Atlas VIP, Denizli Gerzele’de 5–8. sınıf için LGS hazırlığı yapan butik bir kurum. Kalabalık dershane değil; her öğrencinin sorusuna süre ayrılan küçük grup.",
  paragraphs: [
    "İşimiz konu kapatmak ve denemeyi alışkanlık haline getirmek. Yanlışlar deftere yazılıp unutulmaz; sonraki haftanın planına girer.",
    "Veliye yalnızca ‘iyi gidiyor’ demeyiz. Deneme, açık konu ve tempo görüşmede masaya gelir.",
    "Kadromuz fen, matematik, sözel dersler ve koçluk. Hepsi aynı mahallede, aynı hedefe bakıyor.",
  ],
} as const;

export function whatsappLink(text?: string) {
  const msg = encodeURIComponent(
    text ?? "Merhaba, Atlas VIP Eğitim Kurumu hakkında bilgi almak istiyorum.",
  );
  return `https://wa.me/${site.whatsapp}?text=${msg}`;
}
