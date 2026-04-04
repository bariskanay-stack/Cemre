'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { NavigationLink } from '@/lib/mockData';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavigationLink[];
  logoText: string;
}

export default function MobileMenu({
  isOpen,
  onClose,
  links,
  logoText,
}: MobileMenuProps) {
  const pathname = usePathname();
  
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      
      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        document.body.style.touchAction = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const linkVariants = {
    closed: {
      opacity: 0,
      y: 20,
    },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.2,
        duration: 0.4,
      },
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className="fixed inset-0 z-[100] bg-[#150b01]/95 backdrop-blur-md overflow-y-auto"
        >
          <div className="flex flex-col min-h-full pt-24">
            <div className="flex flex-col items-center justify-center px-6 pb-6 flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onClick={onClose}
                className="cursor-pointer"
              >
                <div className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 flex items-center justify-center mx-auto">
                  <img 
                    src="/logo.svg" 
                    alt="CEMRE BRIDAL Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
            </div>

            <nav className="flex flex-col items-center justify-center space-y-6 md:space-y-8 px-6 pb-24 md:pb-8 flex-shrink-0">
              <motion.div
                custom={0}
                variants={linkVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <Link
                  href="/"
                  onClick={onClose}
                  className={`text-2xl md:text-3xl font-light tracking-wider uppercase transition-opacity hover:opacity-60 ${
                    pathname === '/' ? 'text-[#f4c542]' : 'text-white'
                  }`}
                >
                  Ana Sayfa
                </Link>
              </motion.div>

              {links.map((link, i) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
                
                return (
                  <motion.div
                    key={link.href}
                    custom={i + 1}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={`text-2xl md:text-3xl font-light tracking-wider uppercase transition-opacity hover:opacity-60 ${
                        isActive ? 'text-[#f4c542]' : 'text-white'
                      }`}
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
