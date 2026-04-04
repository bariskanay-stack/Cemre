'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import Link from 'next/link';
import { searchProducts } from '@/lib/mockData';
import { searchBlogPosts } from '@/lib/blogData';

interface SearchResult {
  type: 'product' | 'blog';
  title: string;
  subtitle?: string;
  href: string;
  category?: string;
}

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setQuery('');
        setResults([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.trim().length === 0) {
      setResults([]);
      return;
    }

    const searchResults: SearchResult[] = [];
    const normalizedQuery = query.toLowerCase().trim();

    if (normalizedQuery.includes('cemre') && normalizedQuery.includes('bridal')) {
      searchResults.push({
        type: 'product',
        title: 'Cemre Bridal Hakkında',
        subtitle: 'Bizi tanıyın, hikayemizi keşfedin',
        href: '/about',
        category: 'hakkımızda',
      });
      setResults(searchResults);
      return;
    }

    const products = searchProducts(query);
    products.slice(0, 5).forEach((product) => {
      searchResults.push({
        type: 'product',
        title: product.title,
        subtitle: product.code,
        href: `/collections/${product.categorySlug}/${product.slug}`,
        category: product.categorySlug,
      });
    });

    const blogs = searchBlogPosts(query);
    blogs.slice(0, 5).forEach((blog) => {
      searchResults.push({
        type: 'blog',
        title: blog.title,
        subtitle: blog.excerpt,
        href: `/blog/${blog.slug}`,
      });
    });

    setResults(searchResults);
  }, [query]);

  const handleClear = () => {
    setQuery('');
    setResults([]);
    inputRef.current?.focus();
  };

  return (
    <div ref={searchRef} className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 text-[#d4af37] hover:text-[#f4d03f] transition-colors duration-300"
      >
        <motion.div
          animate={{
            rotate: isOpen ? 90 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <Search className="w-5 h-5" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-6 w-[400px] bg-[#251605]/98 backdrop-blur-md border border-[#d4af37]/30 rounded-lg shadow-2xl overflow-hidden"
          >
            <div className="p-4">
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Gelinlik, blog yazısı ara..."
                  className="w-full bg-[#1a0f03] text-white placeholder-white/40 px-4 py-3 pr-10 rounded-md border border-[#d4af37]/20 focus:border-[#d4af37]/60 focus:outline-none transition-colors"
                />
                {query && (
                  <button
                    onClick={handleClear}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <AnimatePresence mode="wait">
                {results.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-4 max-h-[400px] overflow-y-auto space-y-2"
                  >
                    {results.map((result, index) => (
                      <motion.div
                        key={`${result.type}-${result.href}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={result.href}
                          onClick={() => {
                            setIsOpen(false);
                            setQuery('');
                            setResults([]);
                          }}
                          className="block p-3 rounded-md bg-[#1a0f03]/50 hover:bg-[#1a0f03] border border-transparent hover:border-[#d4af37]/30 transition-all duration-200 group"
                        >
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 mt-1">
                              {result.type === 'product' ? (
                                <div className="w-2 h-2 rounded-full bg-[#d4af37]" />
                              ) : (
                                <div className="w-2 h-2 rounded-full bg-[#f4d03f]" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-white text-sm font-medium group-hover:text-[#d4af37] transition-colors line-clamp-1">
                                {result.title}
                              </p>
                              {result.subtitle && (
                                <p className="text-white/50 text-xs mt-1 line-clamp-1">
                                  {result.subtitle}
                                </p>
                              )}
                              <p className="text-[#d4af37]/60 text-xs mt-1">
                                {result.type === 'product' ? 'Ürün' : 'Blog'}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {query.trim().length > 0 && results.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 text-center py-8 text-white/40 text-sm"
                  >
                    Sonuç bulunamadı
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
