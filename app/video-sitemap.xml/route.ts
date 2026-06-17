import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://www.cemrebridal.com';
  
  const videoSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>${baseUrl}/</loc>
    <video:video>
      <video:thumbnail_loc>${baseUrl}/images/hero/hero-poster.png</video:thumbnail_loc>
      <video:title>Cemre Bridal - Hayalleriniz Zarafetle Buluşuyor</video:title>
      <video:description>İstanbul'da en şık gelinlik ve özel gün kıyafetleri. Cemre Bridal koleksiyonlarını keşfedin. Gelinlik, tesettür gelinlik, nişan elbisesi, kına kıyafeti ve daha fazlası.</video:description>
      <video:content_loc>${baseUrl}/images/hero/hero.mp4</video:content_loc>
      <video:player_loc>${baseUrl}/</video:player_loc>
      <video:duration>30</video:duration>
      <video:publication_date>2024-01-01T00:00:00+00:00</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      <video:requires_subscription>no</video:requires_subscription>
      <video:uploader info="${baseUrl}">Cemre Bridal</video:uploader>
      <video:live>no</video:live>
    </video:video>
  </url>
</urlset>`.trim();

  return new NextResponse(videoSitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, must-revalidate',
    },
  });
}
