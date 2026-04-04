'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface HeroProps {
  videoUrl: string;
  logoText: string;
  tagline: string;
}

export default function Hero({ logoText, tagline }: HeroProps) {
  const [mounted, setMounted] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setVideoLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#150b01] isolate">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero/hero-poster.png"
          alt="Cemre Bridal"
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover"
          style={{ objectFit: 'cover' }}
          loading="eager"
        />
        
        {mounted && videoLoaded && (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/images/hero/hero.mp4" type="video/mp4" />
          </video>
        )}
        
        <div className="absolute inset-0 mix-blend-multiply opacity-30 bg-[#f3e5ab] pointer-events-none" />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-center"
        >
          <h1 className="text-6xl sm:text-7xl lg:text-9xl font-cinzel font-medium tracking-[0.15em] text-shadow-lg uppercase">
            {logoText.toUpperCase()}
          </h1>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2, ease: 'easeOut' }}
          onClick={scrollToContent}
          className="absolute bottom-12 animate-bounce cursor-pointer hover:text-gray-300 transition-colors"
          aria-label="Scroll to content"
        >
          <svg 
            width="48" 
            height="48" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.button>
      </div>
    </section>
  );
}
