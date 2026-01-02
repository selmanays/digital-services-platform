'use client';

import { Star } from 'lucide-react';

interface RatingDisplayProps {
  rating: number;
  reviewCount: number;
  showStars?: boolean;
  variant?: 'default' | 'light';
}

export function RatingDisplay({ rating, reviewCount, showStars = true, variant = 'default' }: RatingDisplayProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-2 ${isLight ? 'text-white' : ''}`}>
      {showStars && (
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => {
            if (i < fullStars) {
              return (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${isLight ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-500 fill-yellow-500'}`}
                />
              );
            } else if (i === fullStars && hasHalfStar) {
              return (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${isLight ? 'text-yellow-400 fill-yellow-400/50' : 'text-yellow-500 fill-yellow-500/50'}`}
                />
              );
            } else {
              return (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${isLight ? 'text-white/30' : 'text-muted-foreground/30'}`}
                />
              );
            }
          })}
        </div>
      )}
      <span className={`text-sm font-semibold ${isLight ? 'text-white' : ''}`}>{rating.toFixed(1)}</span>
      {reviewCount > 0 && (
        <span className={`text-sm ${isLight ? 'text-white/80' : 'text-muted-foreground'}`}>
          ({reviewCount} değerlendirme)
        </span>
      )}
    </div>
  );
}
