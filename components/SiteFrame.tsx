'use client';

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Navigation from '@/components/Navigation';
import HoverFooter from '@/components/ui/hover-footer';
import ScrollToTop from '@/components/ScrollToTop';
import MobileScrollIndicator from '@/components/MobileScrollIndicator';
import WhatsAppButton from '@/components/WhatsAppButton';
import { siteSettings, navigationLinks } from '@/lib/mockData';

export default function SiteFrame({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation logoText={siteSettings.logoText} links={navigationLinks} />
      <main className="flex-1">{children}</main>
      <HoverFooter />
      <ScrollToTop />
      <MobileScrollIndicator />
      <WhatsAppButton />
    </div>
  );
}
