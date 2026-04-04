import type { Metadata } from 'next';
import { generateCategoryMetadata } from '@/lib/metadata';

interface CategoryLayoutProps {
  params: Promise<{
    category: string;
  }> | {
    category: string;
  };
  children: React.ReactNode;
}

export async function generateMetadata({ params }: CategoryLayoutProps): Promise<Metadata> {
  const resolvedParams = 'then' in params ? await params : params;
  return Promise.resolve(generateCategoryMetadata(resolvedParams.category));
}

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}

