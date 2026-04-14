import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#150b01] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="font-cinzel text-8xl md:text-9xl text-[#c9a869] mb-4">
            404
          </h1>
          <h2 className="font-cinzel text-3xl md:text-4xl text-white mb-4">
            Sayfa Bulunamadı
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/"
              className="px-6 py-3 bg-[#c9a869] text-white rounded-lg hover:bg-[#f4c542] transition-colors"
            >
              Ana Sayfaya Dön
            </Link>
            <Link
              href="/collections"
              className="px-6 py-3 border border-[#c9a869] text-[#c9a869] rounded-lg hover:bg-[#c9a869] hover:text-white transition-colors"
            >
              Koleksiyonlar
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-[#c9a869] text-[#c9a869] rounded-lg hover:bg-[#c9a869] hover:text-white transition-colors"
            >
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
