'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { mockPayments } from '@/lib/mock-data/payments';
import { FadeIn, SlideIn } from '@/components/animations';
import { DollarSign, Calendar, CreditCard, Shield } from 'lucide-react';

export default function AdminPaymentsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPayments = mockPayments.filter(payment =>
    payment.requestId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    payment.paymentMethod.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-3 flex items-center gap-3">
                <DollarSign className="h-8 w-8 text-primary" />
                Ödeme Yönetimi
              </h1>
              <p className="text-lg text-muted-foreground">Tüm ödeme işlemlerini görüntüleyin</p>
            </div>
            <Input 
              placeholder="Ödeme ara..." 
              className="w-full sm:w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Card>
            <CardHeader>
              <CardTitle>Ödemeler ({filteredPayments.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredPayments.map((payment, index) => (
                  <SlideIn key={payment.id} direction="up" delay={index * 0.05}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="p-4 border-2 rounded-lg hover:border-primary/30 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="font-semibold text-2xl text-primary mb-1">{payment.amount}₺</div>
                          <div className="text-sm text-muted-foreground flex items-center gap-1.5">
                            <CreditCard className="h-4 w-4" />
                            Talep ID: {payment.requestId}
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 items-end">
                          <Badge variant={
                            payment.status === 'released' ? 'default' :
                            payment.status === 'held' ? 'secondary' :
                            payment.status === 'refunded' ? 'destructive' : 'outline'
                          }>
                            {payment.status === 'released' ? 'Serbest Bırakıldı' :
                             payment.status === 'held' ? 'Güvende' :
                             payment.status === 'refunded' ? 'İade Edildi' : 'Beklemede'}
                          </Badge>
                          <Badge variant={
                            payment.escrowStatus === 'active' ? 'default' :
                            payment.escrowStatus === 'released' ? 'secondary' : 'destructive'
                          } className="gap-1.5">
                            <Shield className="h-3 w-3" />
                            Escrow: {payment.escrowStatus === 'active' ? 'Aktif' :
                                     payment.escrowStatus === 'released' ? 'Serbest' : 'İade'}
                          </Badge>
                        </div>
                      </div>
                      <div className="grid gap-3 md:grid-cols-3 text-sm">
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">Ödeme Yöntemi: </span>
                          <span className="font-medium">{payment.paymentMethod}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">Oluşturulma: </span>
                          <span className="font-medium">
                            {new Date(payment.createdAt).toLocaleDateString('tr-TR')}
                          </span>
                        </div>
                        {payment.releasedAt && (
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-muted-foreground">Serbest Bırakılma: </span>
                            <span className="font-medium">
                              {new Date(payment.releasedAt).toLocaleDateString('tr-TR')}
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </SlideIn>
                ))}
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </div>
  );
}
