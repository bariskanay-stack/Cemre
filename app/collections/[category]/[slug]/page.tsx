'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import TextReveal from '@/components/TextReveal';
import {
  getProductBySlug,
  getCategoryBySlug,
} from '@/lib/mockData';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import ImageLightbox from '@/components/ImageLightbox';

interface ProductDetailPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }> | {
    category: string;
    slug: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const router = useRouter();
  // Next.js 15'te params Promise olabilir
  const resolvedParams = 'then' in params ? use(params) : params;
  const product = getProductBySlug(resolvedParams.slug);
  const category = getCategoryBySlug(resolvedParams.category);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    if (!product || !category || product.categorySlug !== resolvedParams.category) {
      router.push('/404');
    }
  }, [product, category, resolvedParams.category, router]);

  if (!product || !category || product.categorySlug !== resolvedParams.category) {
    return (
      <div className="min-h-screen bg-[#150b01] pt-24 lg:pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-white mb-4">Ürün bulunamadı</h1>
          <Link
            href="/collections"
            className="text-gray-300 hover:text-white transition-colors uppercase tracking-wider text-sm"
          >
            Koleksiyonlara Dön
          </Link>
        </div>
      </div>
    );
  }

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
            <Link
              href="/collections"
              className="hover:text-white transition-colors"
            >
              Koleksiyonlar
            </Link>
            <span>/</span>
            <Link
              href={`/collections/${category.slug}`}
              className="hover:text-white transition-colors"
            >
              {category.title}
            </Link>
            <span>/</span>
            <span className="text-white">{product.title}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-4">
            <div className="lg:hidden">
              {product.images && product.images.length > 0 && (
                <Carousel className="w-full">
                  <CarouselContent>
                    {product.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <button
                          onClick={() => {
                            setLightboxIndex(index);
                            setLightboxOpen(true);
                          }}
                          className="relative aspect-[3/4] overflow-hidden bg-gray-100 w-full cursor-pointer"
                          type="button"
                        >
                          <Image
                            src={image.url || '/images/placeholder.jpg'}
                            alt={image.alt || `${product.title} - Görsel ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="100vw"
                            priority={index === 0}
                            draggable={false}
                            quality={90}
                          />
                        </button>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              )}
            </div>

            <div className="hidden lg:block">
              {product.images && product.images.length > 0 && product.images[selectedImageIndex] && (
                <>
                  <button
                    onClick={() => {
                      setLightboxIndex(selectedImageIndex);
                      setLightboxOpen(true);
                    }}
                    className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4 w-full cursor-pointer"
                    type="button"
                  >
                    <Image
                      src={product.images[selectedImageIndex]?.url || '/images/placeholder.jpg'}
                      alt={product.images[selectedImageIndex]?.alt || product.title}
                      fill
                      className="object-cover"
                      sizes="50vw"
                      priority
                      draggable={false}
                      quality={90}
                    />
                  </button>
                  {product.images.length > 1 && (
                    <div className="grid grid-cols-4 gap-4">
                      {product.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImageIndex(index)}
                          className={`relative aspect-square overflow-hidden bg-gray-100 border-2 transition-all cursor-pointer ${
                            selectedImageIndex === index
                              ? 'border-[#f4c542] opacity-100 shadow-lg shadow-[#f4c542]/30'
                              : 'border-[#150b01] opacity-60 hover:opacity-100 hover:border-gray-600'
                          }`}
                          type="button"
                        >
                          <Image
                            src={image.url || '/images/placeholder.jpg'}
                            alt={image.alt || `${product.title} - Thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 25vw, 12vw"
                            draggable={false}
                            quality={75}
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-light tracking-wider text-white mb-4">
                <TextReveal delay={0}>
                  {product.title}
                </TextReveal>
              </h1>
              
              {product.code && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-sm text-gray-400 mb-6 uppercase tracking-wider"
                >
                  Ürün Kodu: {product.code}
                </motion.p>
              )}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-8"
              >
                <p className="text-sm text-gray-300 uppercase tracking-wider">
                  {category.title}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-8 space-y-4"
              >
                {product.description && typeof product.description === 'string' && product.description.trim().includes('<') ? (
                  <div 
                    className="text-gray-200 leading-relaxed space-y-4
                      [&_h3]:text-white [&_h3]:text-2xl [&_h3]:font-light [&_h3]:tracking-wide [&_h3]:mb-4 [&_h3]:mt-6 [&_h3]:font-cinzel
                      [&_p]:mb-4 [&_p]:text-gray-200 [&_p]:leading-relaxed [&_p]:text-base
                      [&_strong]:text-[#f4c542] [&_strong]:font-semibold [&_strong]:tracking-wide
                      [&_blockquote]:border-l-4 [&_blockquote]:border-[#f4c542] [&_blockquote]:pl-6 [&_blockquote]:py-4 [&_blockquote]:my-6 [&_blockquote]:italic [&_blockquote]:text-gray-300 [&_blockquote]:bg-black/20 [&_blockquote]:rounded-r-lg
                      [&_ul]:list-none [&_ul]:space-y-3 [&_ul]:my-6 [&_ul]:pl-0
                      [&_li]:flex [&_li]:items-start [&_li]:gap-3 [&_li]:text-gray-200 [&_li]:text-base [&_li]:leading-relaxed
                      [&_li_strong]:text-[#f4c542] [&_li_strong]:font-semibold [&_li_strong]:min-w-fit
                      [&_li::before]:content-['◆'] [&_li::before]:text-[#f4c542] [&_li::before]:mt-1 [&_li::before]:flex-shrink-0"
                    dangerouslySetInnerHTML={{ __html: product.description.trim() }}
                  />
                ) : product.description ? (
                  <p className="text-gray-200 leading-relaxed">
                    {product.description.trim()}
                  </p>
                ) : null}

                {product.details && product.details.length > 0 && (
                  <div className="bg-gradient-to-br from-[#1a1207] to-[#0f0803] border border-[#f4c542]/20 rounded-lg p-6">
                    <h3 className="text-xl font-light text-[#f4c542] mb-6 uppercase tracking-[0.2em] font-cinzel border-b border-[#f4c542]/30 pb-3">
                      Teknik Özellikler
                    </h3>
                    <div className="space-y-3">
                      {product.details.map((detail, index) => {
                        if (typeof detail === 'string') {
                          return (
                            <div key={index} className="flex items-start gap-3 text-sm">
                              <span className="text-[#f4c542] mt-1.5 flex-shrink-0">●</span>
                              <span className="text-gray-200 leading-relaxed">{detail}</span>
                            </div>
                          );
                        } else {
                          return (
                            <div key={index} className="grid grid-cols-[140px_1fr] gap-4 text-sm py-2">
                              <dt className="text-[#f4c542] font-light tracking-wide font-cinzel">
                                {detail.label}:
                              </dt>
                              <dd className="text-gray-200 leading-relaxed">
                                {detail.value}
                              </dd>
                            </div>
                          );
                        }
                      })}
                    </div>
                  </div>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="space-y-4"
              >
                <Link href="/appointments">
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative w-full lg:w-auto overflow-hidden group"
                    style={{
                      background: 'linear-gradient(135deg, #c49832 0%, #e6b73a 25%, #f4c542 50%, #ffd84d 65%, #f4c542 80%, #d4a942 100%)',
                      padding: '1px',
                    }}
                  >
                    <span
                      className="flex items-center justify-center w-full px-12 py-6 text-sm uppercase tracking-widest font-cinzel font-normal transition-all duration-300"
                      style={{ background: 'linear-gradient(135deg, #c49832 0%, #e6b73a 25%, #f4c542 50%, #ffd84d 65%, #f4c542 80%, #d4a942 100%)', color: '#150b01' }}
                    >
                      <motion.span
                        initial={false}
                        whileHover={{ x: 2 }}
                      >
                        Randevu Al
                      </motion.span>
                      {/* Shimmer overlay */}
                      <span
                        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
                        style={{
                          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)',
                        }}
                      />
                    </span>
                  </motion.button>
                </Link>
                <Link
                  href={`/collections/${category.slug}`}
                  onClick={() => {
                    sessionStorage.setItem(`scroll-${category.slug}`, window.scrollY.toString());
                  }}
                  className="block text-center lg:text-left text-sm text-gray-300 hover:text-white transition-all duration-300 uppercase tracking-wider hover:-translate-x-1"
                >
                  ← Koleksiyona Dön
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <ImageLightbox
          images={product.images}
          isOpen={lightboxOpen}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
}
