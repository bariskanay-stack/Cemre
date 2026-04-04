import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Müşteri Yorumları | Cemre Bridal',
  description: 'Cemre Bridal ile özel günlerini unutulmaz kılan gelinlerimizin deneyimlerini ve Google yorumlarını okuyun.',
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
