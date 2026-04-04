'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/mockData';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  if (!product) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('ProductCard: product is null or undefined');
    }
    return null;
  }
  
  if (!product.categorySlug || !product.slug) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('ProductCard: missing categorySlug or slug', product);
    }
    return null;
  }
  
  if (!product.images || product.images.length === 0) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('ProductCard: no images found', product);
    }
    return null;
  }

  const firstImage = product.images[0];
  const secondImage = product.images[1];
  
  if (!firstImage?.url) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('ProductCard: first image has no URL', product);
    }
    return null;
  }

  return (
    <Link href={`/collections/${product.categorySlug}/${product.slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="group cursor-pointer"
      >
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-6 select-none">
          <Image
            src={firstImage.url}
            alt={firstImage.alt || product.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            draggable={false}
          />

          {secondImage?.url && (
            <Image
              src={secondImage.url}
              alt={secondImage.alt || product.title}
              fill
              className="object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              draggable={false}
            />
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-xl lg:text-2xl font-semibold tracking-wider group-hover:opacity-60 transition-opacity text-white">
            {product.title}
          </h3>
          <p className="text-sm text-gray-300 uppercase tracking-wider">
            {product.title} ADLI MODELİMİZ
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
