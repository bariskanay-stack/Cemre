'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageLightboxProps {
  images: { url: string; alt: string }[];
  isOpen: boolean;
  initialIndex: number;
  onClose: () => void;
}

export default function ImageLightbox({
  images,
  isOpen,
  initialIndex,
  onClose,
}: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState<Set<number>>(new Set());
  const [isDraggingUI, setIsDraggingUI] = useState(false);
  
  const isDraggingRef = useRef(false);
  const startXRef = useRef<number | null>(null);
  const startYRef = useRef<number | null>(null);
  const pointerIdRef = useRef<number | null>(null);
  const dragOffsetRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setDragOffset(0);
    setIsDraggingUI(false);
    isDraggingRef.current = false;
    startXRef.current = null;
    startYRef.current = null;
    pointerIdRef.current = null;
  }, [initialIndex, isOpen]);

  useEffect(() => {
    dragOffsetRef.current = dragOffset;
  }, [dragOffset]);

  useEffect(() => {
    if (!isOpen || images.length === 0) {
      setPreloadedImages(new Set());
      return;
    }

    const preloadPromises = images.map((image, index) => {
      return new Promise<void>((resolve) => {
        const img = new window.Image();
        img.onload = () => {
          setPreloadedImages((prev) => {
            const newSet = new Set(prev);
            newSet.add(index);
            return newSet;
          });
          resolve();
        };
        img.onerror = () => resolve();
        img.src = image.url;
      });
    });

    Promise.all(preloadPromises).catch(() => {});
  }, [isOpen, images.length]);

  const goToPrevious = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setDragOffset(0);
    dragOffsetRef.current = 0;
    setIsDraggingUI(false);
    isDraggingRef.current = false;
    startXRef.current = null;
    startYRef.current = null;
    pointerIdRef.current = null;
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 80);
  }, [isAnimating, images.length]);

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setDragOffset(0);
    dragOffsetRef.current = 0;
    setIsDraggingUI(false);
    isDraggingRef.current = false;
    startXRef.current = null;
    startYRef.current = null;
    pointerIdRef.current = null;
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 80);
  }, [isAnimating, images.length]);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    
    if (!isOpen) {
      document.body.style.overflow = '';
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && !isAnimating) {
        goToPrevious();
      } else if (e.key === 'ArrowRight' && !isAnimating) {
        goToNext();
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDraggingRef.current || startXRef.current === null || startYRef.current === null) return;
      if (pointerIdRef.current !== null && e.pointerId !== pointerIdRef.current) return;

      const offsetX = e.clientX - startXRef.current;
      const offsetY = e.clientY - startYRef.current;

      if (Math.abs(offsetY) > 120 && Math.abs(offsetY) > Math.abs(offsetX) * 2.5) {
        isDraggingRef.current = false;
        setIsDraggingUI(false);
        startXRef.current = null;
        startYRef.current = null;
        pointerIdRef.current = null;
        dragOffsetRef.current = 0;
        setDragOffset(0);
        if (rafIdRef.current !== null) {
          cancelAnimationFrame(rafIdRef.current);
          rafIdRef.current = null;
        }
        return;
      }

      if (rafIdRef.current === null) {
        rafIdRef.current = requestAnimationFrame(() => {
          dragOffsetRef.current = offsetX;
          setDragOffset(offsetX);
          rafIdRef.current = null;
        });
      } else {
        dragOffsetRef.current = offsetX;
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = requestAnimationFrame(() => {
          setDragOffset(offsetX);
          rafIdRef.current = null;
        });
      }
    };

    const finishDrag = (clientX: number | null) => {
      if (!isDraggingRef.current || startXRef.current === null) {
        isDraggingRef.current = false;
        setIsDraggingUI(false);
        startXRef.current = null;
        startYRef.current = null;
        pointerIdRef.current = null;
        setDragOffset(0);
        return;
      }

      const deltaX = clientX !== null && startXRef.current !== null ? clientX - startXRef.current : dragOffsetRef.current;
      const distance = Math.abs(deltaX);
      const containerWidth = containerRef.current?.clientWidth || window.innerWidth;
      const distancePercent = distance / containerWidth;
      const shouldTransition = distance > 15 || distancePercent > 0.03;

      if (shouldTransition) {
        if (deltaX > 0) {
          goToPrevious();
        } else {
          goToNext();
        }
      } else {
        dragOffsetRef.current = 0;
        setDragOffset(0);
        setIsDraggingUI(false);
        isDraggingRef.current = false;
        startXRef.current = null;
        startYRef.current = null;
        pointerIdRef.current = null;
      }
    };

    const handlePointerUp = (e: PointerEvent) => {
      if (pointerIdRef.current !== null && e.pointerId !== pointerIdRef.current) return;
      finishDrag(e.clientX);
    };

    const handlePointerCancel = () => {
      finishDrag(null);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handlePointerUp);
    document.addEventListener('pointercancel', handlePointerCancel);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
      document.removeEventListener('pointercancel', handlePointerCancel);
      document.body.style.overflow = '';
      isDraggingRef.current = false;
      setIsDraggingUI(false);
      startXRef.current = null;
      startYRef.current = null;
      pointerIdRef.current = null;
      dragOffsetRef.current = 0;
      setDragOffset(0);
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
    };
  }, [isOpen, isAnimating, goToNext, goToPrevious, onClose]);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (isAnimating) return;
    e.preventDefault();
    e.stopPropagation();
    pointerIdRef.current = e.pointerId;
    isDraggingRef.current = true;
    setIsDraggingUI(true);
    startXRef.current = e.clientX;
    startYRef.current = e.clientY;
    dragOffsetRef.current = 0;
    setDragOffset(0);
    (e.target as HTMLElement)?.setPointerCapture?.(e.pointerId);
  };

  if (!isOpen || images.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 z-50 p-2 text-white hover:text-gray-300 transition-colors bg-black/30 hover:bg-black/50 rounded-full backdrop-blur-sm select-none outline-none"
        aria-label="Kapat"
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        <X size={32} />
      </button>

      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            goToPrevious();
          }}
          className="absolute left-4 z-50 p-3 text-white hover:text-gray-300 transition-all bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm hover:scale-110 select-none outline-none"
          aria-label="Önceki görsel"
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          <ChevronLeft size={32} />
        </button>
      )}

      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            goToNext();
          }}
          className="absolute right-4 z-50 p-3 text-white hover:text-gray-300 transition-all bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm hover:scale-110 select-none outline-none"
          aria-label="Sonraki görsel"
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          <ChevronRight size={32} />
        </button>
      )}

      <div
        ref={containerRef}
        className="relative w-full h-full max-w-7xl max-h-[90vh] mx-4 flex items-center justify-center"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        <div
          data-lightbox-container
          className="relative w-full h-full overflow-visible flex items-center justify-center gap-4"
        >
          {images.length > 1 && (
            <motion.div
              initial={{ opacity: 0.4, x: -30, scale: 0.9 }}
              animate={{
                opacity: isDraggingUI
                  ? Math.min(0.8, 0.4 + Math.max(0, dragOffset) / 300)
                  : 0.4,
                x: isDraggingUI
                  ? -30 + Math.max(0, dragOffset) * 0.25
                  : -30,
                scale: isDraggingUI
                  ? Math.min(1, 0.9 + Math.max(0, dragOffset) / 800)
                  : 0.9,
              }}
              transition={isDraggingUI ? { duration: 0 } : { 
                duration: 0.08,
                type: 'tween',
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="hidden lg:block relative w-[20%] h-[60%] cursor-pointer hover:opacity-60 transition-opacity select-none outline-none"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
            >
              <Image
                src={images[currentIndex === 0 ? images.length - 1 : currentIndex - 1].url}
                alt={images[currentIndex === 0 ? images.length - 1 : currentIndex - 1].alt}
                fill
                className="object-cover rounded-lg"
                sizes="20vw"
                quality={85}
                priority
                loading="eager"
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
              />
              <div className="absolute inset-0 bg-black/20 rounded-lg" />
            </motion.div>
          )}

          <div className="relative flex-1 h-full max-w-4xl overflow-hidden">
            <AnimatePresence mode="sync" custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={{
                  enter: (direction: number) => ({
                    x: direction > 0 ? '120%' : '-120%',
                    opacity: 0,
                    scale: 0.85,
                  }),
                  center: {
                    x: 0,
                    opacity: 1,
                    scale: 1,
                  },
                  exit: (direction: number) => ({
                    x: direction > 0 ? '-120%' : '120%',
                    opacity: 0,
                    scale: 0.85,
                  }),
                }}
                initial="enter"
                animate={
                  isDraggingUI && dragOffset !== 0
                    ? {
                        x: dragOffset,
                        opacity: Math.max(0.3, 1 - Math.abs(dragOffset) / 500),
                        scale: Math.max(0.85, 1 - Math.abs(dragOffset) / 2000),
                      }
                    : 'center'
                }
                exit="exit"
                transition={
                  isDraggingUI && dragOffset !== 0
                    ? { type: 'tween', duration: 0 }
                    : {
                        x: { type: 'tween', duration: 0.08, ease: [0.25, 0.1, 0.25, 1] },
                        opacity: { type: 'tween', duration: 0.06, ease: 'easeOut' },
                        scale: { type: 'tween', duration: 0.08, ease: [0.25, 0.1, 0.25, 1] },
                      }
                }
                className={`relative w-full h-full ${isDraggingUI ? 'cursor-grabbing' : 'cursor-grab'} select-none outline-none`}
                onClick={(e) => e.stopPropagation()}
                onPointerDown={handlePointerDown}
                data-lightbox-image
                style={{
                  touchAction: 'pan-x pan-y',
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                  outline: 'none',
                  WebkitTapHighlightColor: 'transparent',
                  cursor: isDraggingUI ? 'grabbing' : 'grab',
                }}
              >
                <Image
                  src={images[currentIndex].url}
                  alt={images[currentIndex].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                  quality={90}
                  loading="eager"
                  unoptimized={false}
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {images.length > 1 && (
            <motion.div
              initial={{ opacity: 0.4, x: 30, scale: 0.9 }}
              animate={{
                opacity: isDraggingUI
                  ? Math.min(0.8, 0.4 + Math.max(0, -dragOffset) / 300)
                  : 0.4,
                x: isDraggingUI
                  ? 30 - Math.max(0, -dragOffset) * 0.25
                  : 30,
                scale: isDraggingUI
                  ? Math.min(1, 0.9 + Math.max(0, -dragOffset) / 800)
                  : 0.9,
              }}
              transition={isDraggingUI ? { duration: 0 } : { 
                duration: 0.08,
                type: 'tween',
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="hidden lg:block relative w-[20%] h-[60%] cursor-pointer hover:opacity-60 transition-opacity select-none outline-none"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              <Image
                src={images[currentIndex === images.length - 1 ? 0 : currentIndex + 1].url}
                alt={images[currentIndex === images.length - 1 ? 0 : currentIndex + 1].alt}
                fill
                className="object-cover rounded-lg"
                sizes="20vw"
                quality={85}
                priority
                loading="eager"
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
              />
              <div className="absolute inset-0 bg-black/20 rounded-lg" />
            </motion.div>
          )}
        </div>
      </div>

      {images.length > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50 text-white text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm"
        >
          {currentIndex + 1} / {images.length}
        </motion.div>
      )}
    </motion.div>
  );
}
