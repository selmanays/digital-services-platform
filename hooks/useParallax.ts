'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Hook for parallax scrolling effects
 * Subtle, performance-optimized parallax
 */
export function useParallax(speed: number = 0.5) {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateOffset = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      // Calculate if element is in viewport
      if (elementTop < windowHeight && elementTop + elementHeight > 0) {
        const scrolled = window.scrollY;
        const elementOffset = elementRef.current.offsetTop;
        const windowCenter = windowHeight / 2;
        const elementCenter = elementTop + elementHeight / 2;
        const distanceFromCenter = elementCenter - windowCenter;
        
        // Calculate parallax offset
        const parallaxOffset = distanceFromCenter * speed * 0.1;
        setOffset(parallaxOffset);
      }
    };

    // Throttle scroll events for performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateOffset();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateOffset(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return {
    ref: elementRef,
    offset,
    style: {
      transform: `translateY(${offset}px)`,
      willChange: 'transform',
    },
  };
}

/**
 * Hook for horizontal parallax (for carousels)
 */
export function useHorizontalParallax(speed: number = 0.3) {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateOffset = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      const elementLeft = rect.left;
      const elementWidth = rect.width;

      if (elementLeft < windowWidth && elementLeft + elementWidth > 0) {
        const windowCenter = windowWidth / 2;
        const elementCenter = elementLeft + elementWidth / 2;
        const distanceFromCenter = elementCenter - windowCenter;
        
        const parallaxOffset = distanceFromCenter * speed * 0.1;
        setOffset(parallaxOffset);
      }
    };

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateOffset();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateOffset();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return {
    ref: elementRef,
    offset,
    style: {
      transform: `translateX(${offset}px)`,
      willChange: 'transform',
    },
  };
}
