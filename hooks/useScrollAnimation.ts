'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * Hook for scroll-triggered animations
 * Uses Intersection Observer for performance
 */
export function useScrollAnimation(options?: {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}) {
  const {
    ref,
    inView,
    entry,
  } = useInView({
    threshold: options?.threshold ?? 0.1,
    triggerOnce: options?.triggerOnce ?? false,
    rootMargin: options?.rootMargin ?? '0px',
  });

  return {
    ref,
    inView,
    entry,
  };
}

/**
 * Hook for detecting scroll direction
 */
export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection('up');
      }
      
      lastScrollY.current = currentScrollY > 0 ? currentScrollY : 0;
      setScrollY(currentScrollY);
    };

    window.addEventListener('scroll', updateScrollDirection, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollDirection);
  }, []);

  return { scrollDirection, scrollY };
}

/**
 * Hook for scroll progress (0-1)
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollableHeight = documentHeight - windowHeight;
      
      const progressValue = scrollableHeight > 0 
        ? scrollTop / scrollableHeight 
        : 0;
      
      setProgress(Math.min(Math.max(progressValue, 0), 1));
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress(); // Initial calculation
    
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return progress;
}
