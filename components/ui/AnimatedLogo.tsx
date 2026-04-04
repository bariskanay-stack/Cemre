'use client';

import Link from 'next/link';

export default function AnimatedLogo() {
  return (
    <Link href="/" className="block">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity flex-shrink-0">
          <img 
            src="/logo.svg" 
            alt="CEMRE BRIDAL Logo" 
            className="w-full h-full object-contain"
          />
        </div>
        <div
          className="text-white font-light tracking-[0.3em] text-xl lg:text-2xl cursor-pointer hover:opacity-80 transition-opacity uppercase"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            textShadow: '0 0 10px rgba(255,255,255,0.3)',
          }}
        >
          CEMRE BRIDAL
        </div>
      </div>
    </Link>
  );
}
