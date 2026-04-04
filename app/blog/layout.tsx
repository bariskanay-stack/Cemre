import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Cemre Bridal - Düğün ve Gelinlik Rehberi',
  description: 'Düğün hazırlıkları, gelinlik seçimi, moda trendleri ve özel günleriniz için uzman tavsiyeleri. İstanbul\'un en kapsamlı gelinlik rehberi.',
  keywords: [
    'düğün blogu',
    'gelinlik blogu',
    'düğün hazırlıkları',
    'gelinlik seçimi',
    'gelin rehberi',
    'düğün tavsiyeleri',
    'İstanbul düğün',
    'gelinlik modası',
    'düğün trendleri',
  ],
  openGraph: {
    title: 'Blog | Cemre Bridal',
    description: 'Düğün ve gelinlik hakkında ilham verici içerikler',
    type: 'website',
    locale: 'tr_TR',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

