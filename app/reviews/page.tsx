'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { TestimonialsColumn } from '@/components/ui/testimonials-columns';
import reviewsData from '@/lib/reviewsData.json';

function GoldDivider() {
  return (
    <div className="flex items-center gap-4 my-2">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c9a869]/40 to-transparent" />
      <span className="text-[#c9a869]/50 text-xs">✦</span>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c9a869]/40 to-transparent" />
    </div>
  );
}

export default function ReviewsPage() {
  const testimonials = reviewsData.map(review => ({
    text: review.text,
    image: `https://ui-avatars.com/api/?name=${encodeURIComponent(review.name)}&background=c9a869&color=150b01&size=128&bold=true`,
    name: review.name,
    role: new Date(review.date.split('.').reverse().join('-')).toLocaleDateString('tr-TR', { 
      year: 'numeric', 
      month: 'long' 
    }),
  }));

  const firstColumn = testimonials.slice(0, 7);
  const secondColumn = testimonials.slice(7, 14);
  const thirdColumn = testimonials.slice(14, 21);

  return (
    <div className="min-h-screen bg-[#150b01] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <GoldDivider />
        </motion.div>

        <nav className="mb-8 text-sm text-gray-300">
          <div className="flex items-center space-x-2">
            <Link href="/" className="hover:text-white transition-colors">
              Ana Sayfa
            </Link>
            <span>/</span>
            <span className="text-white">Yorumlar</span>
          </div>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-4"
        >
          <p className="font-allura text-[#c9a869] text-3xl mb-2">Müşterilerimizin Sesi</p>
          <h1 className="font-allura text-4xl md:text-5xl lg:text-6xl text-[#c9a869] mb-6">
            Yorumlar
          </h1>
          <p className="text-gray-300 tracking-wide max-w-xl mx-auto leading-relaxed">
            Cemre Bridal ile özel günlerini unutulmaz kılan gelinlerimizin deneyimlerini okuyun.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="my-8"
        >
          <GoldDivider />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-16">
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[800px] overflow-hidden">
          <TestimonialsColumn 
            testimonials={firstColumn} 
            duration={20} 
          />
          <TestimonialsColumn 
            testimonials={secondColumn} 
            className="hidden md:block" 
            duration={25} 
          />
          <TestimonialsColumn 
            testimonials={thirdColumn} 
            className="hidden lg:block" 
            duration={22} 
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-gray-300 mb-6 text-lg">
            Tüm müşteri yorumlarımızı Google'da görebilirsiniz
          </p>
          <motion.a
            href="https://share.google/KvznXEJUDpIw9BRGb"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative inline-flex items-center justify-center gap-3 px-8 py-4 overflow-hidden group rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            style={{
              background: 'linear-gradient(to right, #c9a869, #f4c542)',
            }}
          >
            <motion.span
              className="flex items-center gap-3 text-[#150b01] font-semibold text-lg relative z-10"
              initial={false}
              whileHover={{ x: 2 }}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Tüm Yorumları Google'da Gör</span>
            </motion.span>
            <span
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)',
              }}
            />
          </motion.a>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <GoldDivider />
        </motion.div>
      </div>
    </div>
  );
}
