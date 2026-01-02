'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Field, FieldContent, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { mockProviders } from '@/lib/mock-data/providers';
import { FadeIn } from '@/components/animations';
import { CheckCircle2 } from 'lucide-react';

export default function ProviderProfilePage() {
  const provider = mockProviders[0];
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="w-full min-h-screen py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <FadeIn>
          <div className="mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold mb-3">Profil Yönetimi</h1>
            <p className="text-lg text-muted-foreground">Profil bilgilerinizi güncelleyin</p>
          </div>
        </FadeIn>

        <div className="space-y-6">
          <FadeIn delay={0.1}>
            <Card>
              <CardHeader>
                <CardTitle>Genel Bilgiler</CardTitle>
                <CardDescription>İsim, açıklama ve iletişim bilgileri</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Field>
                  <FieldLabel>İsim</FieldLabel>
                  <FieldContent>
                    <Input defaultValue={provider.name} />
                  </FieldContent>
                </Field>
                <Field>
                  <FieldLabel>Açıklama</FieldLabel>
                  <FieldContent>
                    <Textarea defaultValue={provider.description} rows={5} className="resize-none" />
                  </FieldContent>
                </Field>
                <Field>
                  <FieldLabel>Yanıt Süresi</FieldLabel>
                  <FieldContent>
                    <Input defaultValue={provider.responseTime} />
                  </FieldContent>
                </Field>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button onClick={handleSave} className="gap-2">
                    {saved && <CheckCircle2 className="h-4 w-4" />}
                    {saved ? 'Kaydedildi!' : 'Kaydet'}
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card>
              <CardHeader>
                <CardTitle>Konum Bilgileri</CardTitle>
                <CardDescription>Adres ve konum bilgileri</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Field>
                  <FieldLabel>Şehir</FieldLabel>
                  <FieldContent>
                    <Input defaultValue={provider.location.city} />
                  </FieldContent>
                </Field>
                <Field>
                  <FieldLabel>İlçe</FieldLabel>
                  <FieldContent>
                    <Input defaultValue={provider.location.district} />
                  </FieldContent>
                </Field>
                <Field>
                  <FieldLabel>Adres</FieldLabel>
                  <FieldContent>
                    <Textarea defaultValue={provider.location.address} rows={3} className="resize-none" />
                  </FieldContent>
                </Field>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button onClick={handleSave} className="gap-2">
                    {saved && <CheckCircle2 className="h-4 w-4" />}
                    {saved ? 'Kaydedildi!' : 'Kaydet'}
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
