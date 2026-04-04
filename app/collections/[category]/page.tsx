'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { use, useEffect, useState, useMemo } from 'react';
import TextReveal from '@/components/TextReveal';
import {
  getCategoryBySlug,
  getProductsByCategory,
  Category,
  Product,
} from '@/lib/mockData';
import ProductCard from '@/components/ProductCard';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }> | {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  // Next.js 15'te params Promise olabilir
  const resolvedParams = 'then' in params ? use(params) : params;
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // useMemo ile veriyi cache'le
  const category = useMemo(() => {
    return getCategoryBySlug(resolvedParams.category);
  }, [resolvedParams.category]);

  const products = useMemo(() => {
    return getProductsByCategory(resolvedParams.category);
  }, [resolvedParams.category]);

  useEffect(() => {
    setIsMounted(true);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 50);

    return () => {
      clearTimeout(timer);
      setIsMounted(false);
    };
  }, [resolvedParams.category]);

  if (!isMounted || isLoading) {
    return (
      <div className="min-h-screen bg-[#150b01] pt-24 lg:pt-32 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-4 border-[#f4c542] border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-300">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="min-h-screen bg-[#150b01] pt-24 lg:pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-white mb-4">Kategori bulunamadı</h1>
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
            <span className="text-white">{category.title}</span>
          </div>
        </nav>

        <div className="text-center mb-16 lg:mb-24">
          <h1 className="text-4xl lg:text-6xl font-light tracking-wider text-white mb-4">
            <TextReveal delay={0}>
              {category.title}
            </TextReveal>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-gray-300 tracking-wide max-w-2xl mx-auto"
          >
            {category.description}
          </motion.p>
        </div>

        <AnimatePresence mode="wait">
          {products && products.length > 0 ? (
            <motion.div
              key={resolvedParams.category}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
            >
              {products.map((product, index) => (
                <motion.div
                  key={product._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: Math.min(index * 0.1, 0.5) }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-20 max-w-2xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8"
              >
                <svg className="w-20 h-20 mx-auto mb-6 text-[#c9a869]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-wide">
                  Çekimler Devam Ediyor
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Bu koleksiyonumuzun profesyonel çekimleri tamamlandığında, <br className="hidden md:block" />
                  tüm modeller burada sergilenecektir.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-4"
              >
                <p className="text-gray-400 text-base">
                  Koleksiyonumuzu yakından görmek ve randevu almak için
                </p>
                <motion.a
                  href="https://wa.me/905389120604?text=Merhaba,%20koleksiyonunuz%20hakkında%20bilgi%20almak%20istiyorum"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative inline-flex items-center gap-3 px-8 py-4 rounded-lg font-semibold tracking-wide hover:shadow-[0_0_30px_rgba(201,168,105,0.5)] transition-all duration-300 overflow-hidden group"
                  style={{
                    background: 'linear-gradient(to right, #c9a869, #f4c542)',
                  }}
                >
                  <motion.span
                    className="flex items-center gap-3 text-[#150b01] relative z-10"
                    initial={false}
                    whileHover={{ x: 2 }}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>WhatsApp'tan İletişime Geç</span>
                  </motion.span>
                  {/* Shimmer overlay */}
                  <span
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)',
                    }}
                  />
                </motion.a>
                
                <div className="pt-6">
                  <Link
                    href="/collections"
                    className="text-gray-400 hover:text-white transition-colors uppercase tracking-wider text-sm inline-flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Diğer Koleksiyonlara Göz At
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

