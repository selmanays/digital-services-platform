'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Field, FieldContent, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Request } from '@/lib/types/request';
import { Offer } from '@/lib/types/offer';
import { FadeIn } from '@/components/animations';
import { DollarSign, Clock, FileText, Send, X } from 'lucide-react';

interface OfferFormProps {
  request: Request;
  onSubmit: (offer: Omit<Offer, 'id' | 'createdAt' | 'status'>) => void;
  onCancel?: () => void;
}

export function OfferForm({ request, onSubmit, onCancel }: OfferFormProps) {
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [estimatedDuration, setEstimatedDuration] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      requestId: request.id,
      providerId: 'prov-1',
      price: parseFloat(price),
      description,
      estimatedDuration,
    });
    setPrice('');
    setDescription('');
    setEstimatedDuration('');
  };

  const priceValue = parseFloat(price) || 0;
  const isPriceValid = priceValue >= request.budget.min && priceValue <= request.budget.max;

  return (
    <FadeIn>
      <Card className="border-2">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Send className="h-6 w-6 text-primary" />
                Teklif Ver
              </CardTitle>
              <CardDescription className="text-base mt-2">{request.title}</CardDescription>
            </div>
            {onCancel && (
              <Button variant="ghost" size="icon" onClick={onCancel}>
                <X className="h-5 w-5" />
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <FadeIn delay={0.1}>
              <Field>
                <FieldLabel className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Fiyat (₺)
                </FieldLabel>
                <FieldContent>
                  <Input
                    type="number"
                    min={request.budget.min}
                    max={request.budget.max}
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder={`${request.budget.min} - ${request.budget.max}₺ arası`}
                    required
                    className={`font-mono ${
                      price && !isPriceValid ? 'border-destructive' : ''
                    }`}
                  />
                  <div className="mt-2 space-y-1">
                    <p className="text-xs text-muted-foreground">
                      Talep bütçesi: <span className="font-semibold">{request.budget.min}₺ - {request.budget.max}₺</span>
                    </p>
                    {price && !isPriceValid && (
                      <p className="text-xs text-destructive">
                        Fiyat bütçe aralığı dışında
                      </p>
                    )}
                  </div>
                </FieldContent>
              </Field>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Field>
                <FieldLabel className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Tahmini Süre
                </FieldLabel>
                <FieldContent>
                  <Input
                    type="text"
                    value={estimatedDuration}
                    onChange={(e) => setEstimatedDuration(e.target.value)}
                    placeholder="Örn: 2 saat, 1 gün, 3 hafta"
                    required
                  />
                </FieldContent>
              </Field>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Field>
                <FieldLabel className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Teklif Açıklaması
                </FieldLabel>
                <FieldContent>
                  <Textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Hizmetin nasıl gerçekleştirileceğini, dahil olanlar ve olmayanları açıklayın..."
                    rows={6}
                    required
                    className="resize-none"
                  />
                </FieldContent>
              </Field>
            </FadeIn>

            <div className="flex gap-3 pt-2">
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
                  className="w-full gap-2"
                  disabled={!isPriceValid || !description || !estimatedDuration}
                >
                  <Send className="h-4 w-4" />
                  Teklifi Gönder
                </Button>
              </motion.div>
            </div>
          </form>
        </CardContent>
      </Card>
    </FadeIn>
  );
}
