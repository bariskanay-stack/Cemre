'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { use, useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import TextReveal from '@/components/TextReveal';
import {
  getBlogPostBySlug,
  getRelatedPosts,
  blogCategories,
  BlogPost,
} from '@/lib/blogData';
import { getBlogCTA, getWhatsAppLink } from '@/lib/blogCTA';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }> | {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = 'then' in params ? use(params) : params;
  const post = getBlogPostBySlug(resolvedParams.slug);
  const [coverImageError, setCoverImageError] = useState(false);

  if (!post) {
    notFound();
  }

  useEffect(() => {
    setCoverImageError(false);
  }, [post.coverImage]);

  const coverImageSrc = post.coverImage && post.coverImage.trim() !== '' ? post.coverImage : undefined;

  const relatedPosts = getRelatedPosts(post, 3);
  const categoryInfo = blogCategories.find(cat => cat.slug === post.category);
  const cta = getBlogCTA(post.category);
  const whatsappLink = getWhatsAppLink(cta.whatsappNumber, cta.whatsappText);

  useEffect(() => {
    const handleImageError = (e: Event) => {
      const img = e.target as HTMLImageElement;
      if (img && img.classList.contains('blog-image')) {
        img.style.display = 'none';
        const placeholder = document.createElement('div');
        placeholder.className = 'blog-image-placeholder';
        placeholder.innerHTML = `
          <div style="
            width: 100%;
            min-height: 200px;
            background: #251605;
            border: 2px dashed rgba(201, 168, 105, 0.3);
            border-radius: 0.75rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            color: #c9a869;
            text-align: center;
          ">
            <svg style="width: 48px; height: 48px; margin-bottom: 1rem; opacity: 0.5;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p style="font-size: 0.875rem; margin: 0;">Görsel bekleniyor</p>
            <p style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.7;">${img.alt || 'Görsel eklenecek'}</p>
          </div>
        `;
        img.parentNode?.insertBefore(placeholder, img);
      }
    };

    const images = document.querySelectorAll('.blog-content img.blog-image');
    images.forEach((img) => {
      img.addEventListener('error', handleImageError);
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener('error', handleImageError);
      });
    };
  }, [post]);

  useEffect(() => {
    const headings = document.querySelectorAll('.blog-content h2');
    headings.forEach((heading) => {
      if (heading.textContent?.includes('Son Söz')) {
        heading.classList.add('final-word-heading');
      }
    });
  }, [post]);

  return (
    <div className="min-h-screen bg-[#150b01] pt-24 pb-16">
      <article className="container mx-auto px-4 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-neutral-400">
          <Link href="/" className="hover:text-[#c9a869] transition-colors">Ana Sayfa</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-[#c9a869] transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-white">{post.title}</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <div className="mb-4">
            <Link 
              href={`/blog?category=${post.category}`}
              className={`inline-block px-4 py-1 rounded-full text-sm font-medium bg-[#251605] border-2 border-[#c9a869]/30 ${categoryInfo?.color || 'text-neutral-300'} hover:bg-[#c9a869] hover:text-white hover:border-[#c9a869] transition-colors`}
            >
              {categoryInfo?.name || 'Genel'}
            </Link>
          </div>
          
          <h1 className="font-playfair text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-white mb-4 leading-tight">
            <TextReveal>
              {post.title}
            </TextReveal>
          </h1>

          {post.subtitle && (
            <p className="text-xl text-neutral-300 mb-6">{post.subtitle}</p>
          )}

          <div className="flex flex-col gap-3 text-neutral-400">
            <Link href="/about" className="flex items-center gap-3 group w-fit">
              {post.author.avatar && (
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={56}
                  height={56}
                  className="rounded-full group-hover:opacity-80 transition-opacity"
                />
              )}
              <span className="font-medium text-white text-lg group-hover:text-[#c9a869] transition-colors">{post.author.name}</span>
            </Link>
            <div className="flex items-center text-sm ml-[68px]">
              <span>{new Date(post.publishedAt).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime} dakika okuma</span>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-lg bg-[#251605] border border-[#c9a869]/20 group cursor-pointer"
        >
          {coverImageSrc && !coverImageError ? (
            <Image
              src={coverImageSrc}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              quality={95}
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
              draggable={false}
              onError={() => {
                setCoverImageError(true);
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#251605]">
              <div className="text-center p-8">
                <svg className="w-16 h-16 mx-auto mb-4 text-[#c9a869]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-neutral-400 text-sm">Görsel bekleniyor</p>
                <p className="text-neutral-500 text-xs mt-2">Cover görseli eklenecek</p>
              </div>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="blog-content mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="my-16 bg-gradient-to-br from-[#c9a869]/10 via-[#f4c542]/5 to-[#C3B1E1]/10 rounded-2xl p-8 md:p-12 border border-[#c9a869]/20 shadow-lg"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="font-playfair text-3xl md:text-4xl text-white mb-4">
              {cta.title}
            </h3>
            <p className="text-lg text-neutral-300 mb-8">
              {cta.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Randevu Butonu */}
              <Link href="/appointments">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative inline-flex items-center justify-center gap-3 px-8 py-4 overflow-hidden group rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 min-w-[240px]"
                  style={{
                    background: 'linear-gradient(to right, #c9a869, #f4c542)',
                  }}
                >
                  <motion.span
                    className="flex items-center gap-3 text-white font-semibold text-lg relative z-10"
                    initial={false}
                    whileHover={{ x: 2 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Randevu Al</span>
                  </motion.span>
                  {/* Shimmer overlay */}
                  <span
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)',
                    }}
                  />
                </motion.button>
              </Link>

              {/* WhatsApp Butonu */}
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white font-semibold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 min-w-[240px] overflow-hidden group"
              >
                <motion.span
                  className="flex items-center gap-3 relative z-10"
                  initial={false}
                  whileHover={{ x: 2 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>WhatsApp</span>
                </motion.span>
                {/* Shimmer overlay */}
                <span
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%)',
                  }}
                />
              </motion.a>
            </div>

            <p className="mt-6 text-sm text-neutral-400 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
              <a 
                href="https://maps.app.goo.gl/hqazA87cNpUJx7TUA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-[#c9a869] transition-colors"
              >
                <span>📍</span>
                <span className="underline">İstanbul Esenyurt</span>
              </a>
              <span className="hidden sm:inline">|</span>
              <a 
                href="tel:+905389120604"
                className="inline-flex items-center gap-1 hover:text-[#c9a869] transition-colors"
              >
                <span>☎️</span>
                <span className="underline">0538 912 06 04</span>
              </a>
              <span className="hidden sm:inline">|</span>
              <span className="inline-flex items-center gap-1">
                <span>⏰</span>
                <span>Haftaiçi 10:00-20:00, Cumartesi-Pazar 11:00-20:00</span>
              </span>
            </p>
          </div>
        </motion.div>

        {/* Etiketler */}
        {post.tags.length > 0 && (
          <div className="mb-12 pb-12 border-b border-gray-200">
            <h3 className="font-playfair text-xl text-white mb-4">Etiketler</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${encodeURIComponent(tag)}`}
                  className="px-4 py-2 rounded-full bg-[#f4c542]/10 text-neutral-300 text-sm hover:bg-[#f4c542] hover:text-[#150b01] transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>
        )}

        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="font-playfair text-3xl text-white mb-8">İlgili Yazılar</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <RelatedPostCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        )}
      </article>

    </div>
  );
}

function RelatedPostCard({ post }: { post: BlogPost }) {
  const categoryInfo = blogCategories.find(cat => cat.slug === post.category);
  const [imageError, setImageError] = useState(false);

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="bg-[#251605] border border-[#c9a869]/20 rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:border-[#c9a869]/40 transition-all">
        <div className="relative aspect-[16/10] overflow-hidden bg-[#251605]">
          {post.coverImage && !imageError ? (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <svg className="w-10 h-10 text-[#c9a869]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="p-4">
          <h3 className="font-playfair text-lg text-white mb-2 group-hover:text-[#c9a869] transition-colors line-clamp-2">
            {post.title}
          </h3>
          <div className="flex items-center text-sm text-neutral-400">
            <span>{post.readTime} dk</span>
            <span className="mx-2">•</span>
            <span>{new Date(post.publishedAt).toLocaleDateString('tr-TR')}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
