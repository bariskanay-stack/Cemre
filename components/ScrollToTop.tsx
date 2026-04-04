'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      // Scroll position
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      
      // Visibility toggle
      setIsVisible(scrollY > 300);

      const docHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      
      const windowHeight = window.innerHeight || document.documentElement.clientHeight || 0;
      const scrollableHeight = docHeight - windowHeight;
      
      if (scrollableHeight > 0) {
        const progress = (scrollY / scrollableHeight) * 100;
        setScrollProgress(Math.min(Math.max(progress, 0), 100));
      } else {
        setScrollProgress(0);
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    const handleResize = () => {
      updateScrollState();
    };

    updateScrollState();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('touchmove', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // SVG circle parametreleri
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group"
          aria-label="Başa dön"
        >
          {/* Circular Progress Ring */}
          <svg className="absolute inset-0 w-14 h-14 -rotate-90" viewBox="0 0 56 56">
            {/* Background circle */}
            <circle
              cx="28"
              cy="28"
              r={radius}
              fill="none"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="3"
            />
            {/* Progress circle */}
            <circle
              cx="28"
              cy="28"
              r={radius}
              fill="none"
              stroke="#f4c542"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              style={{ transition: 'stroke-dashoffset 0.1s linear' }}
            />
          </svg>

          <div className="relative w-14 h-14 flex items-center justify-center bg-black/80 backdrop-blur-sm rounded-full border border-white/10 group-hover:border-[#f4c542] transition-all duration-300 group-hover:bg-black/90">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-white group-hover:text-[#f4c542] transition-colors duration-300"
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </div>

          {/* Hover glow effect */}
          <div className="absolute inset-0 rounded-full bg-[#f4c542]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

