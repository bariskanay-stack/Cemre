'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Globe,
  Heart,
} from 'lucide-react';
import { cn } from '@/lib/utils';

type TextHoverEffectProps = {
  text: string;
  duration?: number;
  className?: string;
};

export const TextHoverEffect = ({ text, duration, className }: TextHoverEffectProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: '50%', cy: '50%' });

  useEffect(() => {
    if (!svgRef.current || !hovered) return;
    const { left, top, width, height } = svgRef.current.getBoundingClientRect();
    const cxPercentage = ((cursor.x - left) / width) * 100;
    const cyPercentage = ((cursor.y - top) / height) * 100;
    setMaskPosition({
      cx: `${cxPercentage}%`,
      cy: `${cyPercentage}%`,
    });
  }, [cursor, hovered]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 400 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={cn('select-none uppercase cursor-pointer', className)}
    >
      <defs>
        <linearGradient id="textGradient" gradientUnits="userSpaceOnUse" cx="50%" cy="50%" r="25%">
          {hovered && (
            <>
              <stop offset="0%" stopColor="#f4c542" />
              <stop offset="50%" stopColor="#f1b832" />
              <stop offset="100%" stopColor="#d89b1d" />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          initial={{ cx: '50%', cy: '50%' }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: 'easeOut' }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)" />
        </mask>
      </defs>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-neutral-200 font-[helvetica] text-5xl font-bold dark:stroke-neutral-800"
        style={{ opacity: hovered ? 0.7 : 0 }}
      >
        {text}
      </text>
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-[#f4c542] font-[helvetica] text-5xl font-bold dark:stroke-[#f4c542cc]"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: [1000, 0, 0, 1000],
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 30,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        {text}
      </motion.text>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.3"
        mask="url(#textMask)"
        className="fill-transparent font-[helvetica] text-5xl font-bold"
      >
        {text}
      </text>
    </svg>
  );
};

export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        background: 'radial-gradient(125% 125% at 50% 10%, #0F0F1166 50%, #f4c54233 100%)',
      }}
    />
  );
};

function SocialIcon({ icon, href, label, mouseX }: { icon: React.ReactNode; href: string; label: string; mouseX: any }) {
  const ref = useRef<HTMLAnchorElement>(null);

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

  const scaleSync = useTransform(distance, [-150, 0, 150], [1, 1.3, 1]);
  const scale = useSpring(scaleSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <a 
      ref={ref}
      href={href} 
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      aria-label={label}
      className="hover:brightness-125 transition-all cursor-pointer relative z-[100] pointer-events-auto"
    >
      <motion.div style={{ scale }}>
        {icon}
      </motion.div>
    </a>
  );
}

export function HoverFooter() {
  const mouseX = useMotionValue(Infinity);

  const footerLinks = [
    {
      title: 'Cemre Bridal',
      links: [
        { label: 'Hakkımızda', href: '/about' },
        { label: 'Koleksiyonlar', href: '/collections' },
        { label: 'Randevu Al', href: '/appointments' },
        { label: 'İletişim', href: '/contact' },
      ],
    },
    {
      title: 'Destek',
      links: [
        { label: 'Sık Sorulan Sorular', href: '/sss' },
        { label: 'Yorumlar', href: '/reviews' },
      ],
    },
  ];

  const contactInfo = [
    { icon: <Mail size={18} className="text-[#f4c542]" />, text: 'info@cemrebridal.com', href: 'mailto:info@cemrebridal.com' },
    { icon: <Phone size={18} className="text-[#f4c542]" />, text: '0538 912 06 04', href: 'tel:+905389120604', name: 'Bircan ER' },
    { icon: <MapPin size={18} className="text-[#f4c542]" />, text: 'Sultaniye Mahallesi, Doğan Araslı Blv. no:140/5, 34510 Esenyurt/İstanbul', href: 'https://maps.app.goo.gl/hqazA87cNpUJx7TUA' },
  ];

  const InstagramIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#FCAF45', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#E1306C', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#833AB4', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#instagram-gradient)" strokeWidth="2" fill="none" />
      <circle cx="12" cy="12" r="4" stroke="url(#instagram-gradient)" strokeWidth="2" fill="none" />
      <circle cx="18.5" cy="5.5" r="1.5" fill="url(#instagram-gradient)" />
    </svg>
  );

  const socialLinks = [
    { icon: <Facebook size={20} className="text-[#1877F2]" />, label: 'Facebook', href: 'https://facebook.com/cemrebridal' },
    { icon: <InstagramIcon />, label: 'Instagram', href: 'https://instagram.com/cemre_bridall' },
    { icon: <Twitter size={20} className="text-[#1DA1F2]" />, label: 'Twitter', href: 'https://twitter.com/cemrebridal' },
    { icon: <Globe size={20} className="text-[#f4c542]" />, label: 'Web', href: '/' },
  ];

  return (
    <footer className="bg-[#0F0F11]/10 relative h-fit rounded-3xl overflow-hidden m-6 md:m-10">
      <div className="max-w-7xl mx-auto p-10 md:p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-[#f4c542] text-3xl font-extrabold">
                <Heart className="w-7 h-7 fill-[#f4c542] stroke-[#f4c542]" />
              </span>
              <span className="text-white text-3xl font-bold">Cemre Bridal</span>
            </div>
            <p className="text-sm leading-relaxed text-neutral-200/80">
              Cemre Bridal, modern çizgilerle özel dikim gelinlikleri buluşturur. Randevu ile kişiselleştirilmiş deneyim.
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-lg font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a href={link.href} className="hover:text-[#3ca2fa] transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-white text-lg font-semibold mb-6">İletişim</h4>
            <ul className="space-y-4">
              {contactInfo.map((item: any, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <div className="mt-0.5">{item.icon}</div>
                  <div className="flex-1">
                    {item.name && (
                      <div className="text-white font-medium mb-1">{item.name}</div>
                    )}
                    {item.href ? (
                      <a 
                        href={item.href} 
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="hover:text-[#3ca2fa] transition-colors block"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="hover:text-[#3ca2fa] transition-colors">{item.text}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-gray-700/60 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0 relative z-[100] -mt-4">
          <motion.div 
            className="flex space-x-6 text-gray-400"
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
          >
            {socialLinks.map(({ icon, label, href }) => (
              <SocialIcon key={label} icon={icon} href={href} label={label} mouseX={mouseX} />
            ))}
          </motion.div>
          <div className="text-center md:text-right">
            <p className="text-neutral-200/80 mb-1">
              © {new Date().getFullYear()} Cemre Bridal. Tüm hakları saklıdır.
            </p>
            <p className="font-allura text-sm text-[#c9a869]/80">
              B.K.
            </p>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex h-[16rem] -mt-24 -mb-16 relative z-10">
        <TextHoverEffect text="CEMRE BRIDAL" className="z-10" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

export default HoverFooter;

