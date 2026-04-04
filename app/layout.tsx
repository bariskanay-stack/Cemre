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
  return (
    <html 
      lang="tr" 
      className={`${cormorant.variable} ${allura.variable} ${cinzel.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KFMPJ6JW');`,
          }}
        />
        <meta name="darkreader" content="NO-DARKREADER-PLUGIN" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className="font-cormorant antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KFMPJ6JW"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
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
