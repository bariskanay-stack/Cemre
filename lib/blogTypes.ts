export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  images?: string[];
  author: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  category: BlogCategory;
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  readTime: number;
  featured?: boolean;
  meta_description?: string;
  meta_keywords?: string[];
}

export type BlogCategory = 
  | 'vucut-tipi-gelinlik-secimi'
  | 'gelinlik-kumaslari-teknik'
  | 'dugun-konseptine-gore-gelinlikler'
  | 'gelin-aksesuarlari'
  | 'trendler-moda'
  | 'butce-alisveris'
  | 'dugun-oncesi-sonrasi'
  | 'after-party-kina'
  | 'renkler-anlamlari'
  | 'psikoloji-sosyal';

export interface BlogCategoryInfo {
  slug: BlogCategory;
  name: string;
  description: string;
  color: string; // Tailwind color class
  icon?: string;
}
