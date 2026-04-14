'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const isMaintenanceMode = error.message === 'Sistem Bakımda';

  if (isMaintenanceMode) {
    return (
      <div className="min-h-screen bg-[#150b01] flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          <div className="mb-8">
            <svg
              className="w-24 h-24 mx-auto text-[#c9a869] mb-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <h1 className="font-cinzel text-5xl md:text-6xl text-white mb-4">
              Sistem Bakımda
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Sizlere daha iyi hizmet verebilmek için sistemimiz geçici olarak bakımdadır.
            </p>
            <div className="bg-[#1f1f1f] border border-[#c9a869]/20 rounded-lg p-8 mb-8">
              <p className="text-gray-400 mb-6 text-lg">
                Lütfen daha sonra tekrar deneyiniz.
              </p>
              <p className="text-gray-500 mb-4">
                Acil durumlar için bizi arayabilirsiniz:
              </p>
              <a
                href="tel:05389120604"
                className="inline-flex items-center gap-3 text-[#c9a869] hover:text-[#f4c542] transition-colors text-xl font-semibold"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                0538 912 06 04
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#150b01] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="font-cinzel text-5xl md:text-6xl text-white mb-4">
          Bir Hata Oluştu
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Üzgünüz, beklenmeyen bir hata oluştu.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-[#c9a869] text-white rounded-lg hover:bg-[#f4c542] transition-colors"
          >
            Tekrar Dene
          </button>
          <Link
            href="/"
            className="px-6 py-3 border border-[#c9a869] text-[#c9a869] rounded-lg hover:bg-[#c9a869] hover:text-white transition-colors"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </div>
  );
}
