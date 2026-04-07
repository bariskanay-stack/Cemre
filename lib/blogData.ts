import { BlogPost, BlogCategory, BlogCategoryInfo } from './blogTypes';

export type { BlogPost, BlogCategory, BlogCategoryInfo };

export const blogCategories: BlogCategoryInfo[] = [
  {
    slug: 'vucut-tipi-gelinlik-secimi',
    name: 'Vücut Tipi ve Gelinlik Seçimi',
    description: 'Vücut tipine göre ideal gelinlik modelleri ve kesim önerileri',
    color: 'text-pink-600',
  },
  {
    slug: 'gelinlik-kumaslari-teknik',
    name: 'Gelinlik Kumaşları ve Teknik Detaylar',
    description: 'Kumaş türleri, dikiş teknikleri ve kalite standartları',
    color: 'text-[#C3B1E1]',
  },
  {
    slug: 'dugun-konseptine-gore-gelinlikler',
    name: 'Düğün Konseptine Göre Gelinlikler',
    description: 'Farklı düğün temalarına uygun gelinlik seçimleri',
    color: 'text-rose-600',
  },
  {
    slug: 'gelin-aksesuarlari',
    name: 'Gelin Aksesuarları ve Tamamlayıcılar',
    description: 'Takı, ayakkabı, duvak ve diğer aksesuar önerileri',
    color: 'text-amber-600',
  },
  {
    slug: 'trendler-moda',
    name: 'Trendler ve Moda',
    description: 'Güncel gelinlik trendleri ve moda haberleri',
    color: 'text-blue-600',
  },
  {
    slug: 'butce-alisveris',
    name: 'Bütçe ve Alışveriş Süreci',
    description: 'Bütçe planlama, fiyatlandırma ve alışveriş tavsiyeleri',
    color: 'text-teal-600',
  },
  {
    slug: 'dugun-oncesi-sonrasi',
    name: 'Düğün Öncesi ve Sonrası (Lojistik)',
    description: 'Gelinlik muhafazası, temizlik ve lojistik süreçler',
    color: 'text-emerald-600',
  },
  {
    slug: 'after-party-kina',
    name: 'After Party ve Kına Gecesi',
    description: 'Kına, nişan ve after party için özel kıyafet önerileri',
    color: 'text-fuchsia-600',
  },
  {
    slug: 'renkler-anlamlari',
    name: 'Renkler ve Anlamları',
    description: 'Gelinlik renklerinin anlamları ve seçim tavsiyeleri',
    color: 'text-violet-600',
  },
  {
    slug: 'psikoloji-sosyal',
    name: 'Psikoloji ve Sosyal Konular',
    description: 'Düğün psikolojisi, aile ilişkileri ve sosyal dinamikler',
    color: 'text-indigo-600',
  },
];

import { armutVucutTipiGelinlikSecimi } from './blogs/armut-vucut-tipi-gelinlik-secimi';
import { minyonGelinlerIcinGelinlikSirlari } from './blogs/minyon-gelinler-icin-gelinlik-sirlari';
import { kumSaatiVucutTipiGelinlikSecimi } from './blogs/kum-saati-vucut-tipi-gelinlik-secimi';
import { buyukBedenGelinlikSecimiOzguven } from './blogs/buyuk-beden-gelinlik-secimi-ozguven';
import { dikdortgenVucutTipiBeliOyuntusu } from './blogs/dikdortgen-vucut-tipi-beli-oyuntusu';
import { genisOmuzluGelinlerYakaSecimi } from './blogs/genis-omuzlu-gelinler-yaka-secimi';
import { hamileGelinlerIcinGelinlikOnerileri } from './blogs/hamile-gelinler-icin-gelinlik-onerileri';
import { uzunBoyluGelinlerIcinGelinlikOnerileri } from './blogs/uzun-boylu-gelinler-icin-gelinlik-onerileri';
import { gogusOlcusuneGoreGelinlikSecimi } from './blogs/gogus-olcusune-gore-gelinlik-secimi';
import { sirtDekolteliGelinlikler } from './blogs/sirt-dekolteli-gelinlikler';
import { satenMiSifonMuKumasSecimi } from './blogs/saten-mi-sifon-mu-kumas-secimi';
import { dantelCesitleriRehberi } from './blogs/dantel-cesitleri-rehberi';
import { yazDugunleriHafifKumaslar } from './blogs/yaz-dugunleri-hafif-kumaslar';
import { kisGelinleriSicakKumaslar } from './blogs/kis-gelinleri-sicak-kumaslar';
import { tarlatanNedirSecimRehberi } from './blogs/tarlatan-nedir-secim-rehberi';
import { ipekGelinlikBakimRehberi } from './blogs/ipek-gelinlik-bakim-rehberi';
import { gelinlikAstarSecimi } from './blogs/gelinlik-astar-secimi';
import { mikadoIpekNedir } from './blogs/mikado-ipek-nedir';
import { ucBoyutluCicekliGelinlikler } from './blogs/3d-cicekli-gelinlikler';
import { surdurulebilirEkolojikGelinlikler } from './blogs/surdurulebilir-ekolojik-gelinlikler';
import { kirDugunleriHelenistikGelinlik } from './blogs/kir-dugunleri-helenistik-gelinlik';
import { salonDugunleriPrensesGelinlik } from './blogs/salon-dugunleri-prenses-gelinlik';
import { sahilDugunuGelinlikRehberi } from './blogs/sahil-dugunu-gelinlik-rehberi';
import { vintageDonemGelinlikleri } from './blogs/vintage-donem-gelinlikleri';
import { minimalistNikahElbiseleri } from './blogs/minimalist-nikah-elbiseleri';
import { rustikBohemGelinlikSecimi } from './blogs/rustik-bohem-gelinlik';
import { sarayDugunuGelinlikModelleri } from './blogs/saray-dugunleri';
import { tekneDugunuGelinlikModelleri } from './blogs/tekne-dugunleri';
import { gotikGelinlikModasi } from './blogs/gotik-gelinlik';
import { destinasyonGelinlikRehberi } from './blogs/destinasyon-dugunleri';
import { duvakSecimRehberi } from './blogs/duvak-secimi';
import { gelinSaciAksesuarRehberi } from './blogs/sac-aksesuarlari';
import { gelinAyakkabisiRehberi } from './blogs/gelin-ayakkabisi';
import { gelinSneakerRehberi } from './blogs/spor-ayakkabi-giyen-gelinler';
import { gelinlikIcGiyimRehberi } from './blogs/gelinlik-ic-giyim';
import { gelinBuketiRehberi } from './blogs/gelin-buketi';
import { kisGelinlikAksesuarRehberi } from './blogs/kis-gelinlik-aksesuar';
import { gelinEldiveniRehberi } from './blogs/gelin-eldiveni';
import { takiSecimRehberi } from './blogs/taki-secimi';
import { gelinlikProvaRehberi } from './blogs/gelinlik-provasi';
import { trendler2026 } from './blogs/2026-gelinlik-trendleri';
import { klasikGelinlikRehberi } from './blogs/modasi-asla-gecmeyecek-5-klasik-gelinlik-modeli';
import { kabarikKolluGelinlikRehberi } from './blogs/kabarik-kollu-gelinlikler-ronesans-etkisi-geri-donuyor';
import { yirtmacliGelinlikRehberi } from './blogs/yirtmacli-gelinlikler-cesur-ve-modern-gelinlerin-tercihi';
import { ikiParcaGelinlikRehberi } from './blogs/iki-parca-two-piece-gelinlik-modelleri-ve-kombinleri';
import { illuzyonYakaRehberi } from './blogs/transparan-detaylar-illuzyon-yaka-ve-kollarda-dogru-kullanim';
import { fiyonkluGelinlikRehberi } from './blogs/fiyonk-detayli-gelinlikler-sirtta-ve-belde-dev-fiyonklar';
import { afterPartyRehberi } from './blogs/mini-ve-midi-boy-gelinlikler-after-party-icin-ideal-secimler';
import { tulumGelinlikRehberi } from './blogs/tulum-gelinlikler-maskulen-ve-feminen-cizgilerin-birlesimi';
import { pelerinliGelinlikRehberi } from './blogs/pelerinli-gelinlikler-duvak-yerine-modern-bir-dokunus';

import { zamanCizelgesiRehberi } from './blogs/gelinlik-alisverisine-ne-zaman-baslanmali-ideal-zaman-cizelgesi';
import { hazirVsOzelDikimRehberi } from './blogs/hazir-giyim-gelinlik-mi-ozel-dikim-mi-artilar-ve-eksiler';
import { provaRehberi } from './blogs/gelinlik-provasinda-dikkat-edilmesi-gereken-10-altin-kural';
import { internettenGelinlikRehberi } from './blogs/internetten-gelinlik-almanin-puf-noktalari-ve-riskleri';
import { butceDostuLuksRehberi } from './blogs/dusuk-butceyle-luks-gorunum-elde-etmenin-yollari';
import { kiralikVsSatilikRehberi } from './blogs/kiralik-gelinlik-vs-satilik-gelinlik-hangisi-daha-mantikli';
import { ikinciElGelinlikRehberi } from './blogs/ikinci-el-gelinlik-alirken-nelere-dikkat-etmelisiniz';
import { tadilatRehberi } from './blogs/gelinlik-tadilati-daraltma-boy-kisaltma-ve-ek-maliyetler';
import { alisverisEkibiRehberi } from './blogs/gelinlik-alisverisine-kiminle-gitmelisiniz-kalabalik-gruplarin-dezavantajlari';
import { indirimAviRehberi } from './blogs/outlet-ve-indirim-donemlerinde-gelinlik-avi';

export const blogPosts: BlogPost[] = [
  trendler2026,
  klasikGelinlikRehberi,
  kabarikKolluGelinlikRehberi,
  yirtmacliGelinlikRehberi,
  ikiParcaGelinlikRehberi,
  illuzyonYakaRehberi,
  fiyonkluGelinlikRehberi,
  afterPartyRehberi,
  tulumGelinlikRehberi,
  pelerinliGelinlikRehberi,
  zamanCizelgesiRehberi,
  hazirVsOzelDikimRehberi,
  provaRehberi,
  internettenGelinlikRehberi,
  butceDostuLuksRehberi,
  kiralikVsSatilikRehberi,
  ikinciElGelinlikRehberi,
  tadilatRehberi,
  alisverisEkibiRehberi,
  indirimAviRehberi,
  gelinlikProvaRehberi,
  takiSecimRehberi,
  gelinEldiveniRehberi,
  kisGelinlikAksesuarRehberi,
  gelinBuketiRehberi,
  gelinlikIcGiyimRehberi,
  gelinSneakerRehberi,
  gelinAyakkabisiRehberi,
  gelinSaciAksesuarRehberi,
  duvakSecimRehberi,
  destinasyonGelinlikRehberi,
  gotikGelinlikModasi,
  tekneDugunuGelinlikModelleri,
  sarayDugunuGelinlikModelleri,
  rustikBohemGelinlikSecimi,
  minimalistNikahElbiseleri,
  vintageDonemGelinlikleri,
  sahilDugunuGelinlikRehberi,
  salonDugunleriPrensesGelinlik,
  kirDugunleriHelenistikGelinlik,
  surdurulebilirEkolojikGelinlikler,
  ucBoyutluCicekliGelinlikler,
  mikadoIpekNedir,
  gelinlikAstarSecimi,
  ipekGelinlikBakimRehberi,
  tarlatanNedirSecimRehberi,
  kisGelinleriSicakKumaslar,
  yazDugunleriHafifKumaslar,
  dantelCesitleriRehberi,
  satenMiSifonMuKumasSecimi,
  sirtDekolteliGelinlikler,
  gogusOlcusuneGoreGelinlikSecimi,
  uzunBoyluGelinlerIcinGelinlikOnerileri,
  hamileGelinlerIcinGelinlikOnerileri,
  genisOmuzluGelinlerYakaSecimi,
  dikdortgenVucutTipiBeliOyuntusu,
  buyukBedenGelinlikSecimiOzguven,
  kumSaatiVucutTipiGelinlikSecimi,
  minyonGelinlerIcinGelinlikSirlari,
  armutVucutTipiGelinlikSecimi,
];

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function getFeaturedPosts(limit: number = 3): BlogPost[] {
  const featuredPosts = blogPosts.filter(post => post.featured);
  return shuffleArray(featuredPosts).slice(0, limit);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getBlogPostsByCategory(category: BlogCategory): BlogPost[] {
  return blogPosts
    .filter(post => post.category === category)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return blogPosts
    .filter(post => post.tags.some(t => t.toLowerCase().includes(tag.toLowerCase())))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function searchBlogPosts(query: string): BlogPost[] {
  const lowerQuery = query.toLowerCase();
  return blogPosts.filter(post => 
    post.title.toLowerCase().includes(lowerQuery) ||
    post.excerpt.toLowerCase().includes(lowerQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    post.content.toLowerCase().includes(lowerQuery)
  );
}

export function getCategoryInfo(slug: BlogCategory): BlogCategoryInfo | undefined {
  return blogCategories.find(cat => cat.slug === slug);
}

export function getAllTags(): string[] {
  const tagsSet = new Set<string>();
  blogPosts.forEach(post => {
    post.tags.forEach(tag => tagsSet.add(tag));
  });
  return Array.from(tagsSet).sort();
}

export function getRelatedPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
  return blogPosts
    .filter(post => 
      post.id !== currentPost.id && 
      (post.category === currentPost.category || 
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

export function calculateReadTime(content: string): number {
  const plainText = content.replace(/<[^>]*>/g, '');
  const words = plainText.trim().split(/\s+/).length;
  return Math.ceil(words / 200);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatDateShort(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

