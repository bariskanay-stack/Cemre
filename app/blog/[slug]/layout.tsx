import type { Metadata } from 'next';
import { getBlogPostBySlug } from '@/lib/blogData';

interface BlogPostLayoutProps {
  params: Promise<{
    slug: string;
  }> | {
    slug: string;
  };
  children: React.ReactNode;
}

export async function generateMetadata({ params }: BlogPostLayoutProps): Promise<Metadata> {
  const resolvedParams = 'then' in params ? await params : params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: 'Blog Yazısı Bulunamadı | Cemre Bridal',
      description: 'Aradığınız blog yazısı bulunamadı.',
    };
  }

  // HTML etiketlerini temizle
  const cleanDescription = (text: string) => {
    return text.replace(/<[^>]*>/g, '').substring(0, 160);
  };

  const description = post.meta_description || cleanDescription(post.excerpt);

  return {
    title: `${post.title} | Cemre Bridal Blog`,
    description,
    keywords: post.meta_keywords || post.tags,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description,
      type: 'article',
      locale: 'tr_TR',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      images: post.coverImage ? [
        {
          url: post.coverImage,
          alt: post.title,
        },
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

