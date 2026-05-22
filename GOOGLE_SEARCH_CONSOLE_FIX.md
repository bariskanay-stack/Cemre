# Google Search Console URL Doğrulama Sorunu - Çözüm Rehberi

## Sorun
Google Search Console'da aşağıdaki URL varyasyonları farklı özellikler olarak görünüyor:
- `https://cemrebridal.com/`
- `http://cemrebridal.com/`
- `http://www.cemrebridal.com/`
- `https://www.cemrebridal.com/` ✅ (Canonical - Ana URL)

## Yapılan Değişiklikler

### 1. ✅ next.config.js - URL Yönlendirmeleri
Tüm URL varyasyonlarını `https://www.cemrebridal.com` adresine yönlendiren kurallar eklendi:
- HTTP www → HTTPS www
- HTTP non-www → HTTPS www  
- HTTPS non-www → HTTPS www

### 2. ✅ middleware.ts - Sunucu Tarafı Yönlendirme
Middleware'de host ve protocol kontrolü eklendi. Tüm istekler otomatik olarak canonical URL'e yönlendiriliyor.

### 3. ✅ vercel.json - Vercel Yapılandırması
Vercel platformu için özel yönlendirme kuralları ve güvenlik başlıkları eklendi.

### 4. ✅ public/_headers - HTTP Güvenlik Başlıkları
HSTS (HTTP Strict Transport Security) ve diğer güvenlik başlıkları eklendi.

### 5. ✅ Environment Variables
`.env` ve `.env.production` dosyalarında `NEXT_PUBLIC_SITE_URL` zaten doğru tanımlı.

### 6. ✅ Metadata & Sitemap
`lib/metadata.ts` ve `app/sitemap.ts` dosyalarında tüm URL'ler zaten `https://www.cemrebridal.com` ile başlıyor.

## Deployment Sonrası Yapılacaklar

### 1. Vercel/Hosting Ayarları
Eğer Vercel kullanıyorsanız:
1. Vercel Dashboard → Project Settings → Domains
2. Tüm domain varyasyonlarını ekleyin:
   - `cemrebridal.com` → Redirect to `www.cemrebridal.com`
   - `www.cemrebridal.com` → Primary domain ✅
3. SSL/TLS sertifikasının tüm domainler için aktif olduğundan emin olun

### 2. DNS Ayarları
Domain sağlayıcınızda (GoDaddy, Namecheap, vb.):
```
A Record:
@ → Vercel IP (örn: 76.76.21.21)

CNAME Record:
www → cname.vercel-dns.com
```

### 3. Google Search Console Ayarları

#### Adım 1: Tüm URL Varyasyonlarını Ekleyin
1. Google Search Console'a gidin
2. Her bir URL varyasyonunu ayrı özellik olarak ekleyin:
   - `https://cemrebridal.com`
   - `http://cemrebridal.com`
   - `http://www.cemrebridal.com`
   - `https://www.cemrebridal.com` (Ana)

#### Adım 2: Tercih Edilen Domain'i Belirtin
1. Ana özellik: `https://www.cemrebridal.com`
2. Ayarlar → Adres Değişikliği → Diğer özellikleri ana özelliğe yönlendirin

#### Adım 3: Sitemap'i Yeniden Gönderin
1. Ana özellikte: Sitemap → Yeni sitemap ekle
2. URL: `https://www.cemrebridal.com/sitemap.xml`
3. Gönder

#### Adım 4: URL İnceleme Aracı
1. Ana sayfayı test edin: `https://www.cemrebridal.com/`
2. "Canlı URL'yi Test Et" butonuna tıklayın
3. "İndeksleme İste" butonuna tıklayın

### 4. Test Etme

Deploy sonrası aşağıdaki URL'leri tarayıcıda test edin:
```bash
# Hepsi https://www.cemrebridal.com/ adresine yönlenmeli
http://cemrebridal.com/
https://cemrebridal.com/
http://www.cemrebridal.com/
https://www.cemrebridal.com/
```

### 5. Redirect Testi (Terminal)
```bash
# Windows CMD
curl -I http://cemrebridal.com/
curl -I https://cemrebridal.com/
curl -I http://www.cemrebridal.com/

# Hepsinde "301 Moved Permanently" ve
# Location: https://www.cemrebridal.com/ görmelisiniz
```

### 6. robots.txt Kontrolü
Tarayıcıda açın: `https://www.cemrebridal.com/robots.txt`
Sitemap URL'inin doğru olduğundan emin olun:
```
Sitemap: https://www.cemrebridal.com/sitemap.xml
```

## Beklenen Sonuçlar

### Hemen (Deploy Sonrası)
- ✅ Tüm URL varyasyonları `https://www.cemrebridal.com` adresine yönlenecek
- ✅ 301 (Permanent Redirect) durum kodu dönecek
- ✅ HTTPS zorunlu olacak

### 1-3 Gün İçinde
- ✅ Google Search Console'da yönlendirmeler görünmeye başlayacak
- ✅ Duplicate content uyarıları azalacak

### 1-2 Hafta İçinde
- ✅ Tüm sayfalar canonical URL ile indekslenecek
- ✅ Search Console'da tek bir özellik aktif kalacak
- ✅ Arama sonuçlarında sadece `https://www.cemrebridal.com` görünecek

## Sorun Giderme

### Yönlendirme Çalışmıyorsa
1. Vercel'de yeni deployment yapıldığından emin olun
2. Browser cache'i temizleyin (Ctrl + Shift + Delete)
3. Incognito/Private modda test edin
4. DNS propagation'ı bekleyin (24-48 saat)

### Google Search Console Hala Hata Gösteriyorsa
1. 7-14 gün bekleyin (Google'ın yeniden taraması için)
2. "URL İnceleme" aracıyla manuel indeksleme isteyin
3. Sitemap'i yeniden gönderin

## Ek Kaynaklar
- [Google Search Console - Domain Değişikliği](https://support.google.com/webmasters/answer/9370220)
- [Vercel - Custom Domains](https://vercel.com/docs/concepts/projects/domains)
- [Next.js - Redirects](https://nextjs.org/docs/app/api-reference/next-config-js/redirects)

## Destek
Sorun devam ederse:
1. Vercel deployment loglarını kontrol edin
2. Browser Developer Tools → Network sekmesinde redirect chain'i inceleyin
3. Google Search Console → Coverage raporunu inceleyin
