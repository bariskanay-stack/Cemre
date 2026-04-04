'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import TextReveal from '@/components/TextReveal';
import {
  getAllBlogPosts,
  getFeaturedPosts,
  blogCategories,
  BlogCategory,
  BlogPost,
} from '@/lib/blogData';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredPosts = useMemo(() => getFeaturedPosts(3), []);
  const allPosts = useMemo(() => getAllBlogPosts(), []);

  const filteredPosts = useMemo(() => {
    let posts = allPosts;

    // Kategori filtresi
    if (selectedCategory !== 'all') {
      posts = posts.filter(post => post.category === selectedCategory);
    }

    // Arama filtresi
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return posts;
  }, [allPosts, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#150b01] pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-white mb-4">
            <TextReveal>
              Blog
            </TextReveal>
          </h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Düğün hazırlıkları, gelinlik seçimi ve özel günleriniz için ilham verici içerikler
          </p>
        </div>

        {/* Öne Çıkan Yazılar */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="font-playfair text-3xl text-white mb-8">Öne Çıkan Yazılar</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <FeaturedPostCard key={post.id} post={post} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Filtreler */}
        <div className="mb-12">
          {/* Arama */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Blog yazılarında ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-3 rounded-full bg-[#251605] border-2 border-[#c9a869]/30 text-white placeholder-neutral-400 focus:border-[#c9a869] focus:outline-none transition-colors"
            />
          </div>

          {/* Kategori filtreleri */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#c9a869] text-white'
                  : 'bg-[#251605] text-neutral-300 border border-[#c9a869]/30 hover:border-[#c9a869] hover:text-white'
              }`}
            >
              Tümü
            </button>
            {blogCategories.map((category) => (
              <button
                key={category.slug}
                onClick={() => setSelectedCategory(category.slug)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedCategory === category.slug
                    ? 'bg-[#c9a869] text-white'
                    : 'bg-[#251605] text-neutral-300 border border-[#c9a869]/30 hover:border-[#c9a869] hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Yazıları */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <BlogPostCard key={post.id} post={post} index={index} />
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-xl text-neutral-400">
                {searchQuery || selectedCategory !== 'all'
                  ? 'Aradığınız kriterlere uygun yazı bulunamadı.'
                  : 'Henüz blog yazısı eklenmemiş.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function FeaturedPostCard({ post, index }: { post: BlogPost; index: number }) {
  const categoryInfo = blogCategories.find(cat => cat.slug === post.category);
  const [imageError, setImageError] = useState(false);
  const coverSrc = post.coverImage && post.coverImage.trim() !== '' ? post.coverImage : undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/blog/${post.slug}`} className="group block">
        <div className="relative overflow-hidden rounded-lg aspect-[3/4] mb-4 bg-[#251605] border border-[#c9a869]/40 shadow-lg hover:shadow-xl hover:border-[#c9a869] transition-all duration-300">
          {coverSrc && !imageError ? (
            <Image
              src={coverSrc}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={90}
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              draggable={false}
              onError={() => setImageError(true)}
              style={{
                userSelect: 'none',
              } as React.CSSProperties}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <svg className="w-12 h-12 text-[#c9a869]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
          <div className="absolute top-4 left-4">
            <span className="px-4 py-1 rounded-full text-sm font-medium bg-[#251605]/95 backdrop-blur-sm border border-[#c9a869]/40 text-white shadow-lg">
              {categoryInfo?.name || 'Genel'}
            </span>
          </div>
        </div>
        <h3 className="font-playfair text-xl text-white mb-2 group-hover:text-[#c9a869] transition-colors line-clamp-3">
          <TextReveal>
            {post.title}
          </TextReveal>
        </h3>
        <p className="text-neutral-300 mb-3 line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center text-sm text-neutral-400">
          <span>{post.readTime} dk okuma</span>
          <span className="mx-2">•</span>
          <span>{new Date(post.publishedAt).toLocaleDateString('tr-TR')}</span>
        </div>
      </Link>
    </motion.div>
  );
}

function BlogPostCard({ post, index }: { post: BlogPost; index: number }) {
  const categoryInfo = blogCategories.find(cat => cat.slug === post.category);
  const [imageError, setImageError] = useState(false);
  const coverSrc = post.coverImage && post.coverImage.trim() !== '' ? post.coverImage : undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Link href={`/blog/${post.slug}`} className="group block h-full">
        <div className="bg-[#251605] border border-[#c9a869]/20 rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:border-[#c9a869]/40 transition-all h-full flex flex-col">
          <div className="relative aspect-[16/10] overflow-hidden bg-[#251605]">
            {coverSrc && !imageError ? (
              <Image
                src={coverSrc}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={90}
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                draggable={false}
                onError={() => setImageError(true)}
                style={{
                  userSelect: 'none',
                } as React.CSSProperties}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <svg className="w-12 h-12 text-[#c9a869]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#251605]/95 backdrop-blur-sm border border-[#c9a869]/40 text-white shadow-lg">
                {categoryInfo?.name || 'Genel'}
              </span>
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="font-playfair text-xl text-white mb-2 group-hover:text-[#c9a869] transition-colors">
              {post.title}
            </h3>
            <p className="text-neutral-300 mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
            <div className="flex items-center text-sm text-neutral-400 mt-auto">
              <span>{post.readTime} dk</span>
              <span className="mx-2">•</span>
              <span>{new Date(post.publishedAt).toLocaleDateString('tr-TR')}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

