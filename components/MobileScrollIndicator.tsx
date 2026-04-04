'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function MobileScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(iOS);
  }, []);

  useEffect(() => {
    if (!isIOS) return;

    let ticking = false;
    let hideTimeout: NodeJS.Timeout;

    const updateProgress = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const scrollableHeight = docHeight - windowHeight;

      if (scrollableHeight > 0) {
        const progress = (scrollY / scrollableHeight) * 100;
        setScrollProgress(Math.min(Math.max(progress, 0), 100));
      }

      setIsVisible(true);
      
      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => setIsVisible(false), 1000);

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    updateProgress();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
      clearTimeout(hideTimeout);
    };
  }, [isIOS]);

  if (!isIOS) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 right-0 z-50 pointer-events-none"
      style={{ width: '4px', height: '100vh' }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/20" />
      
      <motion.div
        className="absolute top-0 right-0 w-full bg-gradient-to-b from-[#ffd84d] via-[#f4c542] to-[#d4a942]"
        style={{
          height: `${scrollProgress}%`,
          boxShadow: '0 0 8px rgba(244, 197, 66, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.3)',
        }}
        initial={{ height: 0 }}
        animate={{ height: `${scrollProgress}%` }}
        transition={{ duration: 0.1, ease: 'linear' }}
      />
    </motion.div>
  );
}
