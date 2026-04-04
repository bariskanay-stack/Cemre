export interface BlogCTA {
  title: string;
  description: string;
  whatsappText: string;
  whatsappNumber: string;
}

export const defaultBlogCTA: BlogCTA = {
  title: 'Sana Özel Gelinliğini Bulmaya Hazır Mısın?',
  description: 'Cemre Bridal atölyesinde uzman ekibimiz, vücut tipine ve tarzına en uygun gelinliği seçmende yardımcı olacak. Randevu alarak koleksiyonumuzu keşfet veya WhatsApp\'tan hemen ulaş!',
  whatsappText: 'Merhaba, cemrebridal.com blog yazınızı okudum. Gelinlik hakkında bilgi almak istiyorum.',
  whatsappNumber: '905389120604',
};

export const WHATSAPP_APPOINTMENT_LINK = 'https://wa.me/905389120604?text=Merhaba,%20randevu%20almak%20istiyorum';

export const categoryCTAs: Record<string, Partial<BlogCTA>> = {
  'vucut-tipi-gelinlik-secimi': {
    title: 'Vücut Tipine Uygun Gelinliğini Keşfet!',
    description: 'Cemre Bridal\'da uzman danışmanlarımız, vücut tipine en uygun gelinlik modellerini seçmende yardımcı olacak. Randevu al, provayı dene, hayalindeki gelinliği bul!',
    whatsappText: 'Merhaba, cemrebridal.com sitesinden vücut tipime uygun gelinlik modelleri hakkında bilgi almak istiyorum.',
  },
  'gelinlik-kumaslari-teknik': {
    title: 'Kumaş Kalitesi ve Detayları Yakından İncele!',
    description: 'Cemre Bridal atölyesinde, gelinlik kumaşlarını dokunarak hissedebilir, dikiş kalitesini görebilir ve teknik detayları uzmanlarımızdan öğrenebilirsin.',
    whatsappText: 'Merhaba, cemrebridal.com sitesinden gelinlik kumaşları ve teknik detaylar hakkında bilgi almak istiyorum.',
  },
  'dugun-konseptine-gore-gelinlikler': {
    title: 'Düğün Konseptine Uygun Gelinlik Önerileri!',
    description: 'Düğün konseptine mükemmel uyum sağlayacak gelinlik modelleri için Cemre Bridal koleksiyonunu keşfet. Randevu al, tarzını bul!',
    whatsappText: 'Merhaba, cemrebridal.com sitesinden düğün konseptime uygun gelinlik modelleri görmek istiyorum.',
  },
  'gelin-aksesuarlari': {
    title: 'Gelinliğini Tamamlayacak Aksesuarları Keşfet!',
    description: 'Cemre Bridal\'da gelinlik ile uyumlu duvak, taç, ayakkabı ve takı seçeneklerini görebilir, komple görünümünü oluşturabilirsin.',
    whatsappText: 'Merhaba, cemrebridal.com sitesinden gelin aksesuarları hakkında bilgi almak istiyorum.',
  },
  'trendler-moda': {
    title: 'Yeni Sezon Koleksiyonumuzu Keşfet!',
    description: 'En güncel gelinlik trendlerini Cemre Bridal showroom\'unda keşfet. Moda gelinlik modellerimizi görmek için hemen randevu al!',
    whatsappText: 'Merhaba, cemrebridal.com sitesinden yeni sezon gelinlik koleksiyonunuzu görmek istiyorum.',
  },
  'butce-alisveris': {
    title: 'Bütçene Uygun Gelinlik Seçenekleri!',
    description: 'Cemre Bridal\'da her bütçeye uygun kaliteli gelinlik seçenekleri bulabilirsin. Fiyat bilgisi ve ödeme seçenekleri için hemen iletişime geç!',
    whatsappText: 'Merhaba, cemrebridal.com sitesinden gelinlik fiyatları ve ödeme seçenekleri hakkında bilgi almak istiyorum.',
  },
  'dugun-oncesi-sonrasi': {
    title: 'Gelinlik Bakım ve Muhafaza Hizmetlerimiz!',
    description: 'Cemre Bridal\'da gelinlik temizliği, muhafazası ve lojistik konusunda profesyonel destek alabilirsin. Detaylı bilgi için iletişime geç!',
    whatsappText: 'Merhaba, cemrebridal.com sitesinden gelinlik bakımı ve muhafaza hizmetleri hakkında bilgi almak istiyorum.',
  },
  'after-party-kina': {
    title: 'Kına ve After Party Kıyafetlerini Keşfet!',
    description: 'Cemre Bridal\'da kına gecesi, nişan ve after party için özel tasarım kıyafetler seni bekliyor. Koleksiyonumuzu görmek için randevu al!',
    whatsappText: 'Merhaba, cemrebridal.com sitesinden kına gecesi ve after party kıyafetleri hakkında bilgi almak istiyorum.',
  },
  'renkler-anlamlari': {
    title: 'Renkli Gelinlik Koleksiyonumuzu Keşfet!',
    description: 'Cemre Bridal\'da beyaz dışında farklı renk seçeneklerini de görebilirsin. Sana uygun rengi bulmak için randevu al!',
    whatsappText: 'Merhaba, cemrebridal.com sitesinden renkli gelinlik modelleri hakkında bilgi almak istiyorum.',
  },
  'psikoloji-sosyal': {
    title: 'Düğün Hazırlığında Yanındayız!',
    description: 'Cemre Bridal ailesi olarak, sadece gelinlik seçiminde değil, tüm süreçte yanındayız. Sorularını sormak için hemen iletişime geç!',
    whatsappText: 'Merhaba, cemrebridal.com sitesinden düğün hazırlığı ve gelinlik seçimi hakkında bilgi almak istiyorum.',
  },
};

export function getBlogCTA(category: string): BlogCTA {
  const customCTA = categoryCTAs[category];
  
  if (customCTA) {
    return {
      ...defaultBlogCTA,
      ...customCTA,
    };
  }
  
  return defaultBlogCTA;
}

export function getWhatsAppLink(phoneNumber: string, message: string): string {
  const cleanNumber = phoneNumber.replace(/^\+/, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
}

