import type { Metadata } from 'next';
import { getCategoryBySlug, getProductBySlug } from './mockData';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cemrebridal.com';

const cleanDescription = (text: string | undefined | null): string => {
  if (!text || typeof text !== 'string') return '';
  const cleaned = text
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return cleaned.length > 160 ? cleaned.substring(0, 160) : cleaned;
};

export const homeMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Cemre Bridal İstanbul - Hayalleriniz Zarafetle Buluşuyor',
  description:
    'İstanbul\'da en şık gelinlik ve özel gün kıyafetleri. Cemre Bridal\'da benzersiz gelinlikler, tesettür gelinlikler, nişan elbiseleri, kına kıyafetleri, after party elbiseleri ve bindallı modelleri keşfedin. Lüks, zarafet ve zamansız güzelliği deneyimleyin.',
  openGraph: {
    title: 'Cemre Bridal İstanbul - Hayalleriniz Zarafetle Buluşuyor',
    description:
      'İstanbul\'da en şık gelinlik ve özel gün kıyafetleri. Cemre Bridal\'da benzersiz gelinlikler ve gece elbiseleri keşfedin.',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cemre Bridal İstanbul',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: '/images/og-image.png',
        alt: 'Cemre Bridal İstanbul',
      },
    ],
  },
  keywords: [
    'cemre bridal istanbul',
    'gelinlik istanbul',
    'istanbul gelinlik',
    'tesettür gelinlik istanbul',
    'nişan elbisesi istanbul',
    'kına kıyafeti',
    'after party istanbul',
    'bindallı istanbul',
    'düğün istanbul',
    'gelin',
    'esenyurt',
  ],
};

export const collectionsMetadata: Metadata = {
  title: 'Koleksiyonlar - Cemre Bridal İstanbul',
  description:
    'İstanbul\'da en şık gelinlik ve özel gün kıyafetleri. Cemre Bridal koleksiyonları: Gelinlikler, tesettür gelinlikler, nişan elbiseleri, kına kıyafetleri, after party elbiseleri ve bindallı modelleri.',
  openGraph: {
    title: 'Koleksiyonlar - Cemre Bridal İstanbul',
    description:
      'İstanbul\'da en şık gelinlik ve özel gün kıyafetleri. Cemre Bridal koleksiyonları: Gelinlikler, tesettür gelinlikler, nişan elbiseleri, kına kıyafetleri, after party elbiseleri ve bindallı.',
    type: 'website',
  },
  keywords: [
    'istanbul gelinlik',
    'gelinlik istanbul',
    'gelinlik modelleri',
    'tesettür gelinlik istanbul',
    'nişan elbisesi istanbul',
    'kına kıyafeti',
    'after party istanbul',
    'bindallı istanbul',
    'cemre bridal',
    'düğün istanbul',
    'gelin',
    'esenyurt',
  ],
};

export const aboutMetadata: Metadata = {
  title: 'Hakkımızda - Cemre Bridal İstanbul',
  description:
    'İstanbul\'da hayallerinizdeki özel gün kıyafetlerini sizler için tasarlıyoruz. Cemre Bridal olarak gelinlik, nişan elbisesi ve özel gün kıyafetlerinde İstanbul\'un en seçkin mağazalarından biriyiz.',
  openGraph: {
    title: 'Hakkımızda - Cemre Bridal İstanbul',
    description:
      'İstanbul\'da hayallerinizdeki özel gün kıyafetlerini sizler için tasarlıyoruz. Cemre Bridal olarak gelinlik ve özel gün kıyafetlerinde İstanbul\'un en seçkin mağazalarından biriyiz.',
    type: 'website',
  },
  keywords: [
    'cemre bridal istanbul',
    'hakkımızda',
    'gelinlik mağazası istanbul',
    'istanbul gelinlik',
    'gelinlik',
    'düğün istanbul',
    'esenyurt',
  ],
};

export const appointmentsMetadata: Metadata = {
  title: 'Randevu Al - Cemre Bridal İstanbul',
  description:
    'İstanbul\'da gelinlik randevusu almak için Cemre Bridal\'ı tercih edin. Gelinlik, nişan elbisesi ve özel gün kıyafetleri için uzman danışmanlarımızla birebir görüşme fırsatı. İstanbul genelinden hizmet veriyoruz.',
  openGraph: {
    title: 'Randevu Al - Cemre Bridal İstanbul',
    description:
      'İstanbul\'da gelinlik randevusu almak için Cemre Bridal\'ı tercih edin. Gelinlik, nişan elbisesi ve özel gün kıyafetleri için uzman danışmanlarımızla birebir görüşme fırsatı.',
    type: 'website',
  },
  keywords: [
    'randevu istanbul',
    'gelinlik randevusu istanbul',
    'cemre bridal istanbul',
    'gelinlik prova',
    'nişan elbisesi randevu',
    'istanbul gelinlik',
    'gelinlik mağazası istanbul',
    'esenyurt',
  ],
};

export const sssMetadata: Metadata = {
  title: 'Sık Sorulan Sorular - Cemre Bridal İstanbul',
  description:
    'Cemre Bridal hakkında merak ettiğiniz tüm sorular ve cevapları. Randevu, gelinlik seçimi, üretim süreci, fiyatlandırma ve bakım konularında bilgi alın.',
  openGraph: {
    title: 'Sık Sorulan Sorular - Cemre Bridal İstanbul',
    description:
      'Cemre Bridal hakkında merak ettiğiniz tüm sorular ve cevapları. Randevu, gelinlik seçimi, üretim süreci ve daha fazlası.',
    type: 'website',
  },
  keywords: [
    'cemre bridal sss',
    'gelinlik sık sorulan sorular',
    'gelinlik randevu istanbul',
    'gelinlik fiyat istanbul',
    'cemre bridal istanbul',
    'gelinlik mağazası',
    'esenyurt gelinlik',
  ],
};

export const contactMetadata: Metadata = {
  title: 'İletişim - Cemre Bridal İstanbul',
  description:
    'Cemre Bridal ile iletişime geçin. Adres: Sultaniye Mahallesi, Doğan Araslı Blv. no:140/5, 34510 Esenyurt/İstanbul. Telefon: 0538 912 06 04. İlgili Kişi: Bircan ER. Gelinlik, nişan elbisesi ve özel gün kıyafetleri için bizi arayın.',
  openGraph: {
    title: 'İletişim - Cemre Bridal İstanbul',
    description:
      'Cemre Bridal ile iletişime geçin. Sultaniye Mahallesi, Doğan Araslı Blv. no:140/5, 34510 Esenyurt/İstanbul. Telefon: 0538 912 06 04.',
    type: 'website',
  },
  keywords: [
    'iletişim',
    'cemre bridal istanbul',
    'telefon',
    'adres',
    'esenyurt gelinlik',
    'istanbul gelinlik mağazası',
    'gelinlik',
    'bircan er',
  ],
};

export function generateCategoryMetadata(
  categorySlug: string
): Metadata {
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return {
      title: 'Kategori Bulunamadı - Cemre Bridal İstanbul',
      description: 'Aradığınız kategori bulunamadı.',
    };
  }

  return {
    title: `${category.title} İstanbul - Cemre Bridal`,
    description: `${category.description} İstanbul'da Cemre Bridal ile hayalinizdeki özel gün kıyafetini bulun.`,
    openGraph: {
      title: `${category.title} İstanbul - Cemre Bridal`,
      description: `${category.description} İstanbul'da Cemre Bridal ile hayalinizdeki özel gün kıyafetini bulun.`,
      type: 'website',
      images: category.coverImage?.url
        ? [
            {
              url: category.coverImage.url,
              alt: category.coverImage.alt || category.title,
            },
          ]
        : undefined,
    },
    keywords: [
      `${category.title.toLowerCase()} istanbul`,
      category.title.toLowerCase(),
      'cemre bridal istanbul',
      'gelinlik istanbul',
      'düğün istanbul',
      'gelin',
      'özel gün',
      'istanbul',
      'esenyurt',
    ],
  };
}

export function generateProductMetadata(
  categorySlug: string,
  productSlug: string
): Metadata {
  const product = getProductBySlug(productSlug);
  const category = getCategoryBySlug(categorySlug);

  if (!product || !category) {
    return {
      title: 'Ürün Bulunamadı - Cemre Bridal İstanbul',
      description: 'Aradığınız ürün bulunamadı.',
    };
  }

  const metaDescription =
    product.meta_description ||
    (product.description ? cleanDescription(product.description) : '') ||
    `${product.title} - ${category.title}. İstanbul'da Cemre Bridal ile hayalinizdeki özel gün kıyafetini keşfedin.`;

  const metaTitle = product.code
    ? `${product.title} (${product.code}) - ${category.title} İstanbul - Cemre Bridal`
    : `${product.title} - ${category.title} İstanbul - Cemre Bridal`;

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: 'website',
      images:
        product.images && product.images.length > 0
          ? product.images.slice(0, 3).map((img) => ({
              url: img.url,
              alt: img.alt || product.title,
            }))
          : undefined,
    },
    keywords: [
      `${product.title.toLowerCase()} istanbul`,
      product.title.toLowerCase(),
      `${category.title.toLowerCase()} istanbul`,
      'cemre bridal istanbul',
      'gelinlik istanbul',
      'düğün istanbul',
      'gelin',
      'özel gün',
      'istanbul',
      'esenyurt',
      ...(product.details || []).map((d) => {
        if (typeof d === 'string') {
          return d.toLowerCase();
        } else {
          return `${d.label.toLowerCase()} ${d.value.toLowerCase()}`;
        }
      }),
      ...(product.tags || []).map((t) => t.toLowerCase()),
    ],
  };
}
