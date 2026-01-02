'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RatingDisplay } from './RatingDisplay';
import { Review } from '@/lib/types/review';
import { CheckCircle2 } from 'lucide-react';

interface ReviewCardProps {
  review: Review;
  userName?: string;
  userAvatar?: string;
}

export function ReviewCard({ review, userName, userAvatar }: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex items-start gap-4">
            {userAvatar && (
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={userAvatar}
                  alt={userName || 'Kullanıcı'}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover border-2 border-background"
                />
              </motion.div>
            )}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="font-semibold text-sm">{userName || 'Anonim'}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {new Date(review.createdAt).toLocaleDateString('tr-TR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </div>
                </div>
                {review.verified && (
                  <Badge variant="outline" className="text-xs gap-1.5">
                    <CheckCircle2 className="h-3 w-3" />
                    Doğrulanmış
                  </Badge>
                )}
              </div>
              <RatingDisplay rating={review.rating} reviewCount={0} showStars={true} />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm leading-relaxed">{review.comment}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}
