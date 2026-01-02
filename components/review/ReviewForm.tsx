'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Field, FieldContent, FieldLabel } from '@/components/ui/field';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { RatingDisplay } from './RatingDisplay';
import { Star } from 'lucide-react';
import { FadeIn } from '@/components/animations';

interface ReviewFormProps {
  providerId: string;
  requestId: string;
  onSubmit: (review: { rating: number; comment: string }) => void;
  onCancel?: () => void;
}

const ratingLabels: Record<number, string> = {
  1: 'Kötü',
  2: 'Orta',
  3: 'İyi',
  4: 'Çok İyi',
  5: 'Mükemmel!',
};

export function ReviewForm({ providerId, requestId, onSubmit, onCancel }: ReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      alert('Lütfen bir puan verin');
      return;
    }
    onSubmit({ rating, comment });
    setRating(0);
    setComment('');
  };

  return (
    <FadeIn>
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-2xl">Değerlendirme Yap</CardTitle>
          <CardDescription className="text-base">Hizmeti değerlendirin ve yorum yazın</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Field>
              <FieldLabel className="text-base">Puan</FieldLabel>
              <FieldContent>
                <div className="flex gap-2 justify-center py-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.button
                      key={star}
                      type="button"
                      className="focus:outline-none"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    >
                      <Star
                        className={`h-10 w-10 transition-all duration-200 ${
                          star <= (hoveredRating || rating)
                            ? 'text-yellow-500 fill-yellow-500'
                            : 'text-muted-foreground/30'
                        }`}
                      />
                    </motion.button>
                  ))}
                </div>
                {rating > 0 && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-base font-semibold text-primary mt-3"
                  >
                    {ratingLabels[rating]}
                  </motion.p>
                )}
              </FieldContent>
            </Field>

            <Field>
              <FieldLabel className="text-base">Yorum</FieldLabel>
              <FieldContent>
                <Textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Hizmet hakkındaki görüşlerinizi paylaşın..."
                  rows={6}
                  required
                  className="resize-none"
                />
              </FieldContent>
            </Field>

            <div className="flex gap-3">
              {onCancel && (
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                  <Button type="button" variant="outline" onClick={onCancel} size="lg" className="w-full">
                    İptal
                  </Button>
                </motion.div>
              )}
              <motion.div 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }} 
                className={onCancel ? 'flex-1' : 'w-full'}
              >
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={rating === 0}
                  className="w-full"
                >
                  Değerlendirmeyi Gönder
                </Button>
              </motion.div>
            </div>
          </form>
        </CardContent>
      </Card>
    </FadeIn>
  );
}
