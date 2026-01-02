'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { FadeIn } from '@/components/animations';
import { DollarSign } from 'lucide-react';

interface PaymentSummaryProps {
  subtotal: number;
  serviceFee?: number;
  total: number;
}

export function PaymentSummary({ subtotal, serviceFee = 0, total }: PaymentSummaryProps) {
  return (
    <FadeIn>
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-primary" />
            Ödeme Özeti
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex justify-between text-sm"
          >
            <span className="text-muted-foreground">Ara Toplam</span>
            <span className="font-medium">{subtotal}₺</span>
          </motion.div>
          {serviceFee > 0 && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex justify-between text-sm"
            >
              <span className="text-muted-foreground">Hizmet Ücreti</span>
              <span className="font-medium">{serviceFee}₺</span>
            </motion.div>
          )}
          <Separator />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
            className="flex justify-between text-lg font-bold"
          >
            <span>Toplam</span>
            <span className="text-primary">{total}₺</span>
          </motion.div>
        </CardContent>
      </Card>
    </FadeIn>
  );
}
