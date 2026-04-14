import './globals.css';
import type { Metadata } from 'next';
import { Cormorant_Garamond, Allura, Cinzel } from 'next/font/google';
import Navigation from '@/components/Navigation';
import HoverFooter from '@/components/ui/hover-footer';
import ScrollToTop from '@/components/ScrollToTop';
import MobileScrollIndicator from '@/components/MobileScrollIndicator';
import WhatsAppButton from '@/components/WhatsAppButton';
import { siteSettings, navigationLinks } from '@/lib/mockData';
import { homeMetadata } from '@/lib/metadata';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
  preload: true,
  fallback: ['Georgia', 'serif'],
});

const allura = Allura({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-allura',
  display: 'swap',
  preload: false,
  fallback: ['cursive'],
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cinzel',
  display: 'swap',
  preload: false,
  fallback: ['serif'],
});

export const metadata: Metadata = homeMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  throw new Error("Sistem Bakımda");

  return (
    <html 
      lang="tr" 
      className={`${cormorant.variable} ${allura.variable} ${cinzel.variable}`}
    >
      <head>
        <meta name="apple-domain-verification" content="rnD5MkNTdg4Otb9nQWXhG_EfFWkUXBnQCne1Yn8znac" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WE1WW7F5GS"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WE1WW7F5GS');
            `,
          }}
        />
        <meta name="darkreader" content="NO-DARKREADER-PLUGIN" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className="font-cormorant antialiased">
        <div className="flex min-h-screen flex-col">
          <Navigation logoText={siteSettings.logoText} links={navigationLinks} />
          <main className="flex-1">{children}</main>
          <HoverFooter />
          <ScrollToTop />
          <MobileScrollIndicator />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}