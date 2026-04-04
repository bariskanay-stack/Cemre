export function getCategoryImagePath(categorySlug: string): string {
  return `/images/${categorySlug}`;
}

export function getProductImageUrl(
  categorySlug: string,
  productSlug: string,
  imageNumber: number,
  extension: string = 'jpg'
): string {
  return `/images/${categorySlug}/${productSlug}-${imageNumber}.${extension}`;
}

export function getCategoryCoverUrl(
  categorySlug: string,
  extension: string = 'jpg'
): string {
  return `/images/${categorySlug}/cover.${extension}`;
}

export const imageSizes = {
  productCard: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  productDetail: '(max-width: 1024px) 100vw, 50vw',
  categoryCover: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  fullWidth: '100vw',
  hero: '100vw',
};

export const imageQuality = {
  thumbnail: 60,
  standard: 75,
  high: 85,
  hero: 90,
};

export const supportedFormats = {
  images: ['jpg', 'jpeg', 'png', 'webp', 'avif'],
  videos: ['mp4', 'webm'],
};

export function buildSanityImageUrl(
  imageRef: string,
  width?: number,
  height?: number,
  quality: number = 75
): string {
  return imageRef;
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

export function validateImageDimensions(
  width: number,
  height: number,
  expectedRatio: number = 3 / 4
): {
  valid: boolean;
  message?: string;
  actualRatio: number;
} {
  const actualRatio = width / height;
  const tolerance = 0.05;
  
  const valid = Math.abs(actualRatio - expectedRatio) <= tolerance;
  
  return {
    valid,
    actualRatio,
    message: valid
      ? 'Görsel boyutları uygun'
      : `Beklenen oran ${expectedRatio.toFixed(2)}, gerçek oran ${actualRatio.toFixed(2)}`,
  };
}

export const placeholderImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzE1MGIwMSIvPjwvc3ZnPg==';

export function getImagePriority(index: number, isFeatured: boolean = false): boolean {
  return index < 3 || isFeatured;
}
