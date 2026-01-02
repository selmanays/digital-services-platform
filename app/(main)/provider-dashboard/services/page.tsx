'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Field, FieldContent, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ServiceList } from '@/components/provider/ServiceList';
import { mockProviders } from '@/lib/mock-data/providers';
import { Service } from '@/lib/types/provider';
import { FadeIn } from '@/components/animations';
import { Plus } from 'lucide-react';

export default function ProviderServicesPage() {
  const provider = mockProviders[0];
  const [services, setServices] = useState(provider.services);

  return (
    <div className="w-full min-h-screen py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold mb-3">Hizmet Yönetimi</h1>
            <p className="text-lg text-muted-foreground">Sunulan hizmetleri yönetin</p>
          </div>
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-2">
          <FadeIn delay={0.1}>
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5 text-primary" />
                  Yeni Hizmet Ekle
                </CardTitle>
                <CardDescription>Yeni bir hizmet ekleyin</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Field>
                  <FieldLabel>Hizmet Adı</FieldLabel>
                  <FieldContent>
                    <Input placeholder="Örn: Temel Temizlik" />
                  </FieldContent>
                </Field>
                <Field>
                  <FieldLabel>Açıklama</FieldLabel>
                  <FieldContent>
                    <Textarea placeholder="Hizmet açıklaması" rows={3} className="resize-none" />
                  </FieldContent>
                </Field>
                <Field>
                  <FieldLabel>Fiyat (₺)</FieldLabel>
                  <FieldContent>
                    <Input type="number" placeholder="500" />
                  </FieldContent>
                </Field>
                <Field>
                  <FieldLabel>Süre</FieldLabel>
                  <FieldContent>
                    <Input placeholder="2-3 saat" />
                  </FieldContent>
                </Field>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button className="w-full gap-2">
                    <Plus className="h-4 w-4" />
                    Hizmet Ekle
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <h2 className="text-2xl font-bold mb-6">Mevcut Hizmetler</h2>
              <ServiceList services={services} />
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
