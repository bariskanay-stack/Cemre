'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import TextReveal from '@/components/TextReveal';
import {
  heroContent,
  categories,
  products,
  getFeaturedProducts,
} from '@/lib/mockData';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [windowWidth, setWindowWidth] = useState(1024);
  const lastUserInteractionRef = useRef<number>(0);

  
  const [featuredProducts] = useState(() => {
    const featured = getFeaturedProducts();
    if (featured.length === 0 && products.length > 0) {
      
      const shuffled = [...products].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, 6);
    }
    return featured;
  });

 
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  const getItemsPerSlide = () => {
    if (typeof window === 'undefined') return 3; 
    if (windowWidth < 768) return 1; 
    if (windowWidth < 1024) return 2; 
    return 3; 
  };

  useEffect(() => {
    const itemsPerSlide = getItemsPerSlide();
    const validProducts = featuredProducts.filter(
      p => p && p.images && p.images.length > 0 && p.categorySlug && p.slug
    );
    
    if (validProducts.length <= itemsPerSlide) return;
    
    const totalSlides = Math.ceil(validProducts.length / itemsPerSlide);
    
    const interval = setInterval(() => {
      const now = Date.now();
      if (now - lastUserInteractionRef.current >= 10000) {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [featuredProducts.length, windowWidth]);

  const getVisibleProducts = () => {
    const validProducts = featuredProducts.filter(
      p => p && p.images && p.images.length > 0 && p.categorySlug && p.slug
    );
    
    const itemsPerSlide = getItemsPerSlide();
    
    if (validProducts.length <= itemsPerSlide) return validProducts;
    
    const start = currentSlide * itemsPerSlide;
    const end = start + itemsPerSlide;
    return validProducts.slice(start, end);
  };

  const handlePrevious = () => {
    lastUserInteractionRef.current = Date.now();
    
    setDirection(-1);
    const itemsPerSlide = getItemsPerSlide();
    const validProducts = featuredProducts.filter(
      p => p && p.images && p.images.length > 0 && p.categorySlug && p.slug
    );
    const totalSlides = Math.ceil(validProducts.length / itemsPerSlide);
    setCurrentSlide((prev) => {
      return prev === 0 ? totalSlides - 1 : prev - 1;
    });
  };

  const handleNext = () => {
    lastUserInteractionRef.current = Date.now();
    
    setDirection(1);
    const itemsPerSlide = getItemsPerSlide();
    const validProducts = featuredProducts.filter(
      p => p && p.images && p.images.length > 0 && p.categorySlug && p.slug
    );
    const totalSlides = Math.ceil(validProducts.length / itemsPerSlide);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handleDotClick = (index: number) => {
    lastUserInteractionRef.current = Date.now();
    
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  return (
    <main className="bg-[#150b01] min-h-screen">
      <Hero
        videoUrl={heroContent.videoUrl}
        logoText={heroContent.logoText}
        tagline={heroContent.tagline}
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-light tracking-wider mb-4 text-white">
            Koleksiyonlarımız
          </h2>
          <p className="text-gray-300 text-lg tracking-wide">
            Zamansız zarafet ve modern sofistikasyonu keşfedin
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20 mb-32">
          {categories
            .sort((a, b) => a.order - b.order)
            .map((category, index) => (
            <Link
              key={category._id}
              href={`/collections/${category.slug}`}
              className="group block"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: 'easeOut',
                }}
                className="relative aspect-[3/4] overflow-hidden bg-gray-900 mb-6 border border-[#c9a869] shadow-[0_0_15px_rgba(201,168,105,0.15)] group-hover:shadow-[0_0_30px_rgba(201,168,105,0.4)] group-hover:scale-[1.03] group-hover:-translate-y-2 transition-all duration-500 ease-out"
              >
                <Image
                  src={category.coverImage.url}
                  alt={category.coverImage.alt || category.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={85}
                  priority={index === 0} // Sadece ilk kategori priority
                  loading={index === 0 ? 'eager' : 'lazy'}
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              </motion.div>

              <div>
                <h3 className="text-2xl font-light tracking-wider mb-2 group-hover:text-gray-300 transition-colors text-white text-center md:text-left">
                  <TextReveal delay={index * 0.1 + 0.2}>
                    {category.title}
                  </TextReveal>
                </h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.4,
                    ease: 'easeOut',
                  }}
                  className="text-gray-400 tracking-wide text-center md:text-left"
                >
                  {category.description}
                </motion.p>
              </div>
            </Link>
          ))}
        </div>

        {featuredProducts.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center mb-8 md:mb-12 lg:mb-20"
            >
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-light tracking-wider mb-4 text-white px-4">
                Öne Çıkan Ürünler
              </h2>
            </motion.div>

            <div className="relative">
              {(() => {
                const itemsPerSlide = getItemsPerSlide();
                const validProducts = featuredProducts.filter(
                  p => p && p.images && p.images.length > 0 && p.categorySlug && p.slug
                );
                return validProducts.length > itemsPerSlide;
              })() && (
                <>
                  <button
                    onClick={handlePrevious}
                    className="absolute left-0 md:-left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 md:p-3 lg:p-4 rounded-full transition-all"
                    aria-label="Önceki"
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-0 md:-right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 md:p-3 lg:p-4 rounded-full transition-all"
                    aria-label="Sonraki"
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              <div className="overflow-hidden">
                <AnimatePresence mode="wait" initial={false} custom={direction}>
                  <motion.div
                    key={currentSlide}
                    custom={direction}
                    initial={{ opacity: 0, x: direction > 0 ? 1000 : -1000 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction > 0 ? -1000 : 1000 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 lg:gap-16"
                  >
                    {getVisibleProducts().map((product) => (
                      <ProductCard key={product._id} product={product} />
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {(() => {
                const itemsPerSlide = getItemsPerSlide();
                const validProducts = featuredProducts.filter(
                  p => p && p.images && p.images.length > 0 && p.categorySlug && p.slug
                );
                const totalSlides = Math.ceil(validProducts.length / itemsPerSlide);
                return totalSlides > 1;
              })() && (
                <div className="flex justify-center gap-2 mt-6 md:mt-8">
                  {Array.from({ 
                    length: Math.ceil(
                      featuredProducts.filter(
                        p => p && p.images && p.images.length > 0 && p.categorySlug && p.slug
                      ).length / getItemsPerSlide()
                    ) 
                  }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      className={`h-2 rounded-full transition-all ${
                        currentSlide === index
                          ? 'w-6 md:w-8 bg-white'
                          : 'w-2 bg-white/30 hover:bg-white/50'
                      }`}
                      aria-label={`Slide ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="flex justify-center">
          <Link href="/blog" className="group block max-w-md w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative aspect-[3/4] overflow-hidden bg-gray-900 mb-6 border border-[#c9a869] shadow-[0_0_15px_rgba(201,168,105,0.15)] group-hover:shadow-[0_0_30px_rgba(201,168,105,0.4)] group-hover:scale-[1.03] group-hover:-translate-y-2 transition-all duration-500 ease-out"
            >
              <Image
                src="/images/blog/cover.webp"
                alt="Blog"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                sizes="(max-width: 768px) 100vw, 400px"
                quality={85}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
            </motion.div>

            <div className="text-center">
              <h3 className="text-2xl font-light tracking-wider mb-2 group-hover:text-gray-300 transition-colors text-white">
                <TextReveal delay={0.2}>
                  Blog
                </TextReveal>
              </h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: 'easeOut',
                }}
                className="text-gray-400 tracking-wide"
              >
                Düğün hazırlıkları, gelinlik seçimi ve özel günleriniz için ilham verici içerikler
              </motion.p>
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}