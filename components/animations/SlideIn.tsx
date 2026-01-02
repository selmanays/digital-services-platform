interface SlideInProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
  triggerOnce?: boolean;
}

export function SlideIn({ 
  children, 
  className,
  direction,
  delay,
  duration,
  triggerOnce,
}: SlideInProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
