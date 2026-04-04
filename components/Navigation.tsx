'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { NavigationLink } from '@/lib/mockData';
import MobileMenu from './MobileMenu';
import AnimatedLogo from './ui/AnimatedLogo';
import CemreHamburgerMenu from './CemreHamburgerMenu';
import SearchBar from './SearchBar';

interface NavigationProps {
  logoText: string;
  links: NavigationLink[];
}

function NavLink({ href, children, mouseX }: { href: string; children: React.ReactNode; mouseX: any }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const pathname = usePathname();
  
  const isActive = pathname === href || pathname.startsWith(href + '/');

  const distance = useTransform(mouseX, (val) => {
    if (typeof val !== 'number' || !isFinite(val)) {
      return 0;
    }
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) {
      return 0;
    }
    return val - bounds.x - bounds.width / 2;
  });

  const scaleSync = useTransform(distance, [-150, 0, 150], [1, 1.15, 1]);
  const scale = useSpring(scaleSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <Link href={href} ref={ref}>
      <motion.span
        style={{ scale }}
        className={`inline-block text-sm tracking-wider uppercase transition-colors duration-300 hover:opacity-60 ${
          isActive ? 'text-[#f4c542]' : 'text-white'
        }`}
      >
        {children}
      </motion.span>
    </Link>
  );
}

function ContactNavLink({ mouseX }: { mouseX: any }) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  
  const isActive = pathname === '/contact' || pathname === '/appointments';

  const distance = useTransform(mouseX, (val) => {
    if (typeof val !== 'number' || !isFinite(val)) {
      return 0;
    }
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) {
      return 0;
    }
    return val - bounds.x - bounds.width / 2;
  });

  const scaleSync = useTransform(distance, [-150, 0, 150], [1, 1.15, 1]);
  const scale = useSpring(scaleSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <div 
      ref={ref}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href="/contact">
        <motion.span
          style={{ scale }}
          className={`inline-block text-sm tracking-wider uppercase transition-colors duration-300 hover:opacity-60 ${
            isActive ? 'text-[#f4c542]' : 'text-white'
          }`}
        >
          İletişim
        </motion.span>
      </Link>
      
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ 
              duration: 0.2,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="absolute top-full right-0 mt-6 whitespace-nowrap z-50"
          >
            <Link href="/appointments">
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#251605] border border-[#d4af37]/30 rounded-md px-5 py-2.5 shadow-2xl"
              >
                <span className="text-sm tracking-wider uppercase text-white font-light">
                  Randevu Al
                </span>
              </motion.div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navigation({ logoText, links }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mouseX = useMotionValue(Infinity);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#251605]/95 backdrop-blur-md shadow-2xl border-b border-white/5 transition-all duration-500'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            <div className="flex items-center">
              <AnimatedLogo />
            </div>

            <motion.div 
              className="hidden lg:flex items-center space-x-12"
              onMouseMove={(e) => mouseX.set(e.pageX)}
              onMouseLeave={() => mouseX.set(Infinity)}
            >
              <SearchBar />
              {links.map((link) => {
                if (link.title === 'İletişim') {
                  return <ContactNavLink key={link.href} mouseX={mouseX} />;
                }
                if (link.title === 'Randevu Al') {
                  return null;
                }
                return (
                  <NavLink key={link.href} href={link.href} mouseX={mouseX}>
                    {link.title}
                  </NavLink>
                );
              })}
            </motion.div>
          </div>
        </nav>
      </motion.header>

      <div className="fixed top-6 right-6 z-[110] lg:hidden">
        <CemreHamburgerMenu 
          isOpen={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={links}
        logoText={logoText}
      />
    </>
  );
}
