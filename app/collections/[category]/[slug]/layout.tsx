import type { Metadata } from 'next';
import { generateProductMetadata } from '@/lib/metadata';

interface ProductLayoutProps {
  params: Promise<{
    category: string;
    slug: string;
  }> | {
    category: string;
    slug: string;
  };
  children: React.ReactNode;
}

export async function generateMetadata({ params }: ProductLayoutProps): Promise<Metadata> {
  const resolvedParams = 'then' in params ? await params : params;
  return Promise.resolve(generateProductMetadata(resolvedParams.category, resolvedParams.slug));
}

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return children;
}

