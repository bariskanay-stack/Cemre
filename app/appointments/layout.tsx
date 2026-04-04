import type { Metadata } from 'next';
import { appointmentsMetadata } from '@/lib/metadata';

export const metadata: Metadata = appointmentsMetadata;

export default function AppointmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
