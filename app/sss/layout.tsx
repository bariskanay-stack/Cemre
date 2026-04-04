import type { Metadata } from 'next';
import { sssMetadata } from '@/lib/metadata';

export const metadata: Metadata = sssMetadata;

export default function SSSLayout({ children }: { children: React.ReactNode }) {
  return children;
}
