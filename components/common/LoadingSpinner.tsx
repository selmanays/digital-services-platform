'use client';

import { motion } from 'framer-motion';
import { spinnerRotation } from '@/lib/animations';

interface LoadingSpinnerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: 'h-4 w-4',
  md: 'h-8 w-8',
  lg: 'h-12 w-12',
};

export function LoadingSpinner({ className = '', size = 'md' }: LoadingSpinnerProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        className={`${sizeMap[size]} rounded-full border-4 border-primary border-t-transparent`}
        animate={spinnerRotation.animate}
      />
    </div>
  );
}
