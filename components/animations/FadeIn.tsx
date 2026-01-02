interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  triggerOnce?: boolean;
}

export function FadeIn({ 
  children, 
  className,
}: FadeInProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
