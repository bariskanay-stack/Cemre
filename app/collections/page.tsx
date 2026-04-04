'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import TextReveal from '@/components/TextReveal';
import { categories } from '@/lib/mockData';

export default function CollectionsPage() {
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
            <span className="text-white">Koleksiyonlar</span>
          </div>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h1 className="text-4xl lg:text-6xl font-light tracking-wider text-white mb-4">
            Koleksiyonlarımız
          </h1>
          <p className="text-lg text-gray-300 tracking-wide max-w-2xl mx-auto">
            Zamansız zarafet ve modern sofistikasyonu keşfedin
          </p>
        </motion.div>

        {/* Kategori Listesi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
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
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: 'easeOut',
                  }}
                  className="relative aspect-[3/4] overflow-hidden bg-gray-900 mb-6 border border-[#c9a869] shadow-[0_0_15px_rgba(201,168,105,0.15)] group-hover:shadow-[0_0_30px_rgba(201,168,105,0.4)] group-hover:scale-[1.03] group-hover:-translate-y-2 transition-all duration-500 ease-out"
                >
                  <Image
                    src={category.coverImage.url}
                    alt={category.coverImage.alt || category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100 scale-125"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={85}
                    priority={index < 3}
                    loading={index < 3 ? 'eager' : 'lazy'}
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
      </div>
    </div>
  );
}

