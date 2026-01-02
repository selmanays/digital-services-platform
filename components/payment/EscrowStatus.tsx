'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EscrowStatus as EscrowStatusType } from '@/lib/types/payment';
import { FadeIn } from '@/components/animations';
import { Shield, Clock, CheckCircle2, XCircle } from 'lucide-react';

interface EscrowStatusProps {
  status: EscrowStatusType;
  amount: number;
  requestId: string;
  createdAt: string;
  releasedAt?: string;
}

const statusConfig: Record<EscrowStatusType, { 
  label: string; 
  variant: 'default' | 'secondary' | 'outline' | 'destructive'; 
  description: string;
  icon: React.ReactNode;
}> = {
  active: {
    label: 'Aktif',
    variant: 'default',
    description: 'Ödeme güvende tutuluyor',
    icon: <Shield className="h-4 w-4" />
  },
  released: {
    label: 'Serbest Bırakıldı',
    variant: 'secondary',
    description: 'Ödeme hizmet sağlayıcıya aktarıldı',
    icon: <CheckCircle2 className="h-4 w-4" />
  },
  refunded: {
    label: 'İade Edildi',
    variant: 'destructive',
    description: 'Ödeme iade edildi',
    icon: <XCircle className="h-4 w-4" />
  }
};

export function EscrowStatus({ status, amount, requestId, createdAt, releasedAt }: EscrowStatusProps) {
  const config = statusConfig[status];

  return (
    <FadeIn>
      <Card className="border-2">
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <CardTitle className="text-xl flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Escrow Durumu
            </CardTitle>
            <Badge variant={config.variant} className="gap-1.5">
              {config.icon}
              {config.label}
            </Badge>
          </div>
          <CardDescription className="text-base">{config.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3 text-sm">
            {[
              { label: 'Tutar', value: `${amount}₺`, highlight: true },
              { label: 'Talep ID', value: requestId },
              { label: 'Oluşturulma', value: new Date(createdAt).toLocaleDateString('tr-TR') },
              releasedAt && { label: 'Serbest Bırakılma', value: new Date(releasedAt).toLocaleDateString('tr-TR') },
            ].filter(Boolean).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex justify-between items-center p-2 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <span className="text-muted-foreground">{item.label}:</span>
                <span className={`font-medium ${item.highlight ? 'text-primary text-lg' : ''}`}>
                  {item.value}
                </span>
              </motion.div>
            ))}
          </div>

          {status === 'active' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border-2 border-primary/20"
            >
              <div className="flex items-start gap-3">
                <motion.div
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <Clock className="w-5 h-5 text-primary" />
                </motion.div>
                <div className="flex-1">
                  <div className="font-semibold text-sm mb-2">Otomatik Onay Sistemi</div>
                  <div className="text-xs text-muted-foreground leading-relaxed space-y-1">
                    <p>Hizmet tamamlandıktan 48 saat sonra ödeme otomatik olarak serbest bırakılacaktır.</p>
                    <p>Hizmet tamamlanmadan önce iptal ederseniz, ödeme anında iade edilir.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </FadeIn>
  );
}
