interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  triggerOnce?: boolean;
  scale?: number;
}

export function ScaleIn({ 
  children, 
  className,
}: ScaleInProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
