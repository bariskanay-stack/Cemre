'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { siteSettings } from '@/lib/mockData';

export default function AboutPage() {
  const [imageError, setImageError] = useState(false);
  return (
    <div className="min-h-screen bg-[#150b01] pt-24 lg:pt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-300">
          <div className="flex items-center space-x-2">
            <Link href="/" className="hover:text-white transition-colors">
              Ana Sayfa
            </Link>
            <span>/</span>
            <span className="text-white">Hakkımızda</span>
          </div>
        </nav>

        {/* Başlık */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h1 className="text-4xl lg:text-6xl font-light tracking-wider text-white mb-4">
            Hakkımızda
          </h1>
          <p className="text-lg text-gray-300 tracking-wide max-w-2xl mx-auto">
            Cemre Bridal, bir gelinlik mağazasından çok daha fazlası.
          </p>
        </motion.div>

        {/* İçerik - Görsel ve Metin */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-900 rounded-lg border border-[#c9a869]">
              {!imageError ? (
                <Image
                  src="/images/about/Cover2.png"
                  alt="Cemre Bridal Atölyesi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#251605] border-2 border-dashed border-[#c9a869]/30 rounded-lg">
                  <div className="text-center p-8">
                    <svg className="w-16 h-16 mx-auto mb-4 text-[#c9a869]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-neutral-400 text-sm mb-2">Görsel bekleniyor</p>
                    <p className="text-neutral-500 text-xs">public/images/about/Cover2.png</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center space-y-6"
          >
            <p className="text-gray-200 leading-relaxed text-lg">
              Bu sayfayı açtıysan muhtemelen aklında bir sürü soru var. "Doğru gelinliği bulabilecek miyim?", "Bu süreç ne kadar stresli olacak?", "Bana gerçekten yardımcı olacak biri var mı burada?" Bunları hissediyorsan, tam doğru yerdesin. Çünkü biz tam olarak bu sorularla başladık.
            </p>
          </motion.div>
        </div>

        {/* Detaylı Metin Bölümü */}
        <div className="max-w-4xl mx-auto space-y-12 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-2xl lg:text-3xl font-light tracking-wider text-[#c9a869]">
              Bu ismin arkasında gerçek bir hikâye var.
            </h2>
            <p className="text-gray-200 leading-relaxed text-lg">
              Cemre Bridal, kurucumuz Bircan Hanım'ın kızının adını taşıyor. Yani bu bir marka kurgusu değil — kişisel bir emeğin, bir annenin sevgisinin ve bu işe duyulan gerçek bağlılığın yansıması.
            </p>
            <p className="text-gray-200 leading-relaxed text-lg">
              Bircan Hanım bu işe 13 yaşında başladı. Bugün 20 yılı aşkın tecrübesiyle gelinlik dünyasını sadece bilen değil, içinde büyümüş, her detayını bizzat yaşamış biri olarak burada. Bu fark kağıda dökülmez — ama ilk provada, ilk dokunuşta, ilk bakışta hissedilir.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-2xl lg:text-3xl font-light tracking-wider text-[#c9a869]">
              Biz gelinlik satmıyoruz. Seni dinliyoruz.
            </h2>
            <p className="text-gray-200 leading-relaxed text-lg">
              Çoğu yer sana seçenekler sunar. Biz önce seni tanımaya çalışırız. Sen kimsin? O gün nasıl hissetmek istiyorsun? Neyin seni seni yapıyor?
            </p>
            <p className="text-gray-200 leading-relaxed text-lg">
              Bu sorular netleştikçe gelinlik kendiliğinden şekilleniyor. Amacımız sana "yakışan" bir şey bulmak değil — "tam sen olan" bir şey yaratmak. Kulağa benzer gibi görünüyor ama hissettirdiği şey bambaşka.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl lg:text-3xl font-light tracking-wider text-[#c9a869]">
              Yüzlerce gelinle geçirdiğimiz zamanın bize öğrettikleri var.
            </h2>
            <p className="text-gray-200 leading-relaxed text-lg">
              Hangi model hangi bedende nasıl durur, hangi kumaş hangi ışıkta nasıl görünür, hangi detay bütünü tamamlar hangisi bozar — bunları kitaptan değil, yaşayarak öğrendik.
            </p>
            <p className="text-gray-200 leading-relaxed text-lg">
              "Bu olur mu?", "Buna yakışır mıyım?" diye sormadan önce biz zaten o soruyu görmüş oluyoruz. Bu deneyim sana çok şey kazandırıyor: daha az belirsizlik, daha az stres, daha çok güven. Karar verirken yalnız hissetmiyorsun — çünkü gerçekten değilsin.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl lg:text-3xl font-light tracking-wider text-[#c9a869]">
              İşçilik meselesinde hiçbir zaman taviz vermiyoruz.
            </h2>
            <p className="text-gray-200 leading-relaxed text-lg">
              Bir gelinliği gerçekten iyi yapan şey ne kumaşın fiyatı ne üstündeki taşların sayısı. Bedenle nasıl kucaklaştığı, kuyruğun nasıl aktığı, o dikişlerin arkasında ne kadar emek olduğu.
            </p>
            <p className="text-gray-200 leading-relaxed text-lg">
              Biz "tamam, yeterli" diye bırakmıyoruz. Sonuç "tam olması gereken gibi" olana kadar üzerinde çalışıyoruz. Bazen bu küçük bir rötuş, bazen saatler demek — ama fark her zaman hissediliyor.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-2xl lg:text-3xl font-light tracking-wider text-[#c9a869]">
              Ve yıllar sonra o fotoğrafa baktığında…
            </h2>
            <p className="text-gray-200 leading-relaxed text-lg">
              Düğün fotoğrafları zamana karşı en güçlü şeylerden biri. Her şey değişiyor ama o kare orada duruyor. Biz o karede "ne güzelmiş" değil, "tam benmişim" dedirtmek istiyoruz.
            </p>
            <p className="text-gray-200 leading-relaxed text-lg">
              Bu tek bir cümle gibi görünüyor. Ama içinde her şey var.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-6 pt-8 border-t border-[#c9a869]/20"
          >
            <p className="text-gray-200 leading-relaxed text-lg">
              Cemre Bridal'ı seçmek bir mağaza seçmek değil. O günün nasıl hissettireceğine dair bir karar vermek.
            </p>
            <p className="text-gray-200 leading-relaxed text-lg">
              Biz bu kararı seninle birlikte taşıyoruz — ilk sorudan, son provaya kadar. ✨👰
            </p>
          </motion.div>
        </div>

        {/* Değerlerimiz */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-3xl lg:text-4xl font-light tracking-wider text-white text-center mb-12">
            Değerlerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="text-xl font-light tracking-wider text-white mb-4">
                Kalite
              </h3>
              <p className="text-gray-300 leading-relaxed">
                En kaliteli kumaşlar ve el işçiliği ile üretilen tasarımlar
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-light tracking-wider text-white mb-4">
                Zarafet
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Zamansız ve zarif tasarımlar ile unutulmaz anlar
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-light tracking-wider text-white mb-4">
                Kişiselleştirme
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Her müşterimize özel, kişiye özel tasarım hizmeti
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-[#251605]/60 border border-[#c9a869]/20 p-12 lg:p-16"
        >
          <p className="font-allura text-[#c9a869] text-2xl mb-2">Hâlâ sorunuz mu var?</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-wider text-white mb-4">
            Size yardımcı olmaktan mutluluk duyarız
          </h2>
          <p className="text-gray-400 mb-10 max-w-md mx-auto leading-relaxed">
            Aklınızdaki soruyu bulamadıysanız WhatsApp üzerinden ya da
            iletişim formumuzu kullanarak bize ulaşabilirsiniz.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/90${siteSettings.contactPhone.replace(/\D/g, '').replace(/^0/, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden inline-flex items-center justify-center gap-2.5 px-10 py-4 bg-[#c9a869] text-[#150b01] tracking-widest uppercase text-sm font-medium hover:bg-[#f4c542] transition-all duration-300 shadow-[0_0_20px_rgba(201,168,105,0.3)] hover:shadow-[0_0_30px_rgba(244,197,66,0.4)]"
            >
              <motion.span
                className="flex items-center gap-2.5 relative z-10"
                initial={false}
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </motion.span>
              <span
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)',
                }}
              />
            </a>
            <Link
              href="/contact"
              className="group relative overflow-hidden inline-flex items-center justify-center px-10 py-4 border border-[#c9a869]/60 text-white tracking-widest uppercase text-sm hover:bg-[#c9a869]/10 hover:border-[#c9a869] transition-all duration-300"
            >
              <motion.span
                className="relative z-10"
                initial={false}
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                İletişim Formu
              </motion.span>
              <span
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(201,168,105,0.2) 50%, transparent 100%)',
                }}
              />
            </Link>
            <Link
              href="/appointments"
              className="group relative overflow-hidden inline-flex items-center justify-center px-10 py-4 border border-white/20 text-white tracking-widest uppercase text-sm hover:bg-white/5 hover:border-white/40 transition-all duration-300"
            >
              <motion.span
                className="relative z-10"
                initial={false}
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                Randevu Al
              </motion.span>
              <span
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
                }}
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

