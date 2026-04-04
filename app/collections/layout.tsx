import type { Metadata } from 'next';
import { collectionsMetadata } from '@/lib/metadata';

export const metadata: Metadata = collectionsMetadata;

export default function CollectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

