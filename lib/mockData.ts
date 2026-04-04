export interface SiteSettings {
  logoText: string;
  tagline: string;
  contactEmail: string;
  contactPhone: string;
  contactPerson?: string;
  address?: string;
  addressMapLink?: string;
  socialLinks: {
    instagram?: string;
    pinterest?: string;
    facebook?: string;
  };
}

export interface NavigationLink {
  title: string;
  href: string;
}

export interface Category {
  _id: string;
  title: string;
  slug: string;
  description: string;
  coverImage: {
    url: string;
    alt: string;
  };
  order: number;
}

export interface DetailItem {
  label: string;
  value: string;
}

export interface Product {
  _id: string;
  title: string;
  subtitle?: string;
  slug: string;
  code?: string;
  categorySlug: string;
  description: string;
  meta_description?: string;
  details: (string | DetailItem)[];
  images: {
    url: string;
    alt: string;
  }[];
  featured: boolean;
  tags?: string[];
}

export const siteSettings: SiteSettings = {
  logoText: 'Cemre Bridal',
  tagline: 'Hayalleriniz Zarafetle Buluşuyor',
  contactEmail: 'info@cemrebridal.com',
  contactPhone: '0538 912 06 04',
  contactPerson: 'Bircan ER',
  address: 'Sultaniye Mahallesi, Doğan Araslı Blv. no:140/5, 34510 Esenyurt/İstanbul',
  addressMapLink: 'https://maps.app.goo.gl/hqazA87cNpUJx7TUA',
  socialLinks: {
    instagram: 'https://instagram.com/cemre_bridall',
    pinterest: 'https://pinterest.com/cemrebridal',
  },
};

import { gelinliklerCategory, gelinliklerProducts } from './categories/gelinlikler';
import { tesetturCategory, tesetturProducts } from './categories/tesettur';
import { nisanCategory, nisanProducts } from './categories/nisan';
import { kinaCategory, kinaProducts } from './categories/kina';
import { afterCategory, afterProducts } from './categories/after';
import { bindalliCategory, bindalliProducts } from './categories/bindalli';

export const navigationLinks: NavigationLink[] = [
  { title: 'Koleksiyonlar', href: '/collections' },
  { title: 'Blog', href: '/blog' },
  { title: 'Yorumlar', href: '/reviews' },
  { title: 'SSS', href: '/sss' },
  { title: 'Hakkımızda', href: '/about' },
  { title: 'İletişim', href: '/contact' },
  { title: 'Randevu Al', href: '/appointments' },
];

export const categories: Category[] = [
  gelinliklerCategory,
  tesetturCategory,
  nisanCategory,
  kinaCategory,
  afterCategory,
  bindalliCategory,
];

export const products: Product[] = [
  ...gelinliklerProducts,
  ...tesetturProducts,
  ...nisanProducts,
  ...kinaProducts,
  ...afterProducts,
  ...bindalliProducts,
];

export const heroContent = {
  videoUrl: '/images/hero/hero.mp4',
  logoText: siteSettings.logoText,
  tagline: siteSettings.tagline,
};

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((product) => product.categorySlug === categorySlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured);
}

export function getAllCategories(): Category[] {
  return categories.sort((a, b) => a.order - b.order);
}

export function getAllProducts(): Product[] {
  return products;
}

export function searchProductsByTags(searchTags: string[]): Product[] {
  if (!searchTags || searchTags.length === 0) return [];
  
  const normalizedSearchTags = searchTags.map(tag => 
    tag.toLowerCase().trim()
  );
  
  return products.filter(product => {
    if (!product.tags || product.tags.length === 0) return false;
    
    const normalizedProductTags = product.tags.map(tag => 
      tag.toLowerCase().trim()
    );
    
    return normalizedSearchTags.some(searchTag =>
      normalizedProductTags.some(productTag => 
        productTag.includes(searchTag) || searchTag.includes(productTag)
      )
    );
  });
}

export function searchProducts(query: string): Product[] {
  if (!query || query.trim() === '') return [];
  
  const normalizedQuery = query.toLowerCase().trim();
  
  return products.filter(product => {
    const titleMatch = product.title.toLowerCase().includes(normalizedQuery);
    const codeMatch = product.code?.toLowerCase().includes(normalizedQuery);
    const descriptionMatch = product.description.toLowerCase().includes(normalizedQuery);
    const tagsMatch = product.tags?.some(tag => 
      tag.toLowerCase().includes(normalizedQuery)
    );
    
    return titleMatch || codeMatch || descriptionMatch || tagsMatch;
  });
}

export function getAllTags(): string[] {
  const allTags = new Set<string>();
  
  products.forEach(product => {
    if (product.tags && product.tags.length > 0) {
      product.tags.forEach(tag => allTags.add(tag.toLowerCase().trim()));
    }
  });
  
  return Array.from(allTags).sort();
}

export function getProductsByTag(tag: string): Product[] {
  if (!tag || tag.trim() === '') return [];
  
  const normalizedTag = tag.toLowerCase().trim();
  
  return products.filter(product => {
    if (!product.tags || product.tags.length === 0) return false;
    
    return product.tags.some(productTag => 
      productTag.toLowerCase().trim() === normalizedTag
    );
  });
}
