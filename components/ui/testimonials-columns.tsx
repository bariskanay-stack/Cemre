"use client";

import React, { useState, useEffect, useRef } from "react";
import { animate, AnimationPlaybackControls } from "motion/react";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Array<{
    text: string;
    image: string;
    name: string;
    role: string;
  }>;
  duration?: number;
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<AnimationPlaybackControls | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animasyonu sadece bir kez başlat
    if (!animationRef.current && containerRef.current) {
      const duration = props.duration || 10;
      
      animationRef.current = animate(0, -50, {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
        onUpdate: (latest) => {
          if (containerRef.current) {
            containerRef.current.style.transform = `translateY(${latest}%)`;
          }
        },
      });
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.stop();
        animationRef.current = null;
      }
    };
  }, [props.duration]);

  // isPaused değiştiğinde sadece pause/play yap
  useEffect(() => {
    if (animationRef.current) {
      if (isPaused) {
        animationRef.current.pause();
      } else {
        animationRef.current.play();
      }
    }
  }, [isPaused]);

  return (
    <div className={props.className}>
      <div
        ref={containerRef}
        className="flex flex-col gap-6 pb-6"
        style={{ willChange: 'transform' }}
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  className="p-8 rounded-2xl border border-[#c9a869]/20 bg-gradient-to-br from-[#1a1207]/80 to-[#0f0803]/80 backdrop-blur-sm shadow-lg shadow-[#c9a869]/5 hover:shadow-[#c9a869]/10 hover:border-[#c9a869]/40 transition-all duration-300 max-w-xs w-full cursor-pointer"
                  key={`${index}-${i}`}
                >
                  <div className="text-gray-200 leading-relaxed text-sm">
                    "{text}"
                  </div>
                  <div className="flex items-center gap-3 mt-6">
                    <img
                      width={48}
                      height={48}
                      src={image}
                      alt={name}
                      className="h-12 w-12 rounded-full border-2 border-[#c9a869]/30 object-cover"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5 text-white">
                        {name}
                      </div>
                      <div className="leading-5 text-[#c9a869]/80 tracking-tight text-sm">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </div>
    </div>
  );
};
