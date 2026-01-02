'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Field, FieldContent, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations';
import { CheckCircle2 } from 'lucide-react';

export default function SettingsPage() {
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-3">Ayarlar</h1>
            <p className="text-lg text-muted-foreground">Hesap ayarlarınızı yönetin</p>
          </div>
        </FadeIn>

        <div className="space-y-6">
          <FadeIn delay={0.1}>
            <Card>
              <CardHeader>
                <CardTitle>Profil Bilgileri</CardTitle>
                <CardDescription>Kişisel bilgilerinizi güncelleyin</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Field>
                  <FieldLabel>Ad Soyad</FieldLabel>
                  <FieldContent>
                    <Input defaultValue="Ahmet Yılmaz" />
                  </FieldContent>
                </Field>
                <Field>
                  <FieldLabel>E-posta</FieldLabel>
                  <FieldContent>
                    <Input type="email" defaultValue="ahmet.yilmaz@example.com" />
                  </FieldContent>
                </Field>
                <Field>
                  <FieldLabel>Telefon</FieldLabel>
                  <FieldContent>
                    <Input type="tel" defaultValue="+90 532 123 4567" />
                  </FieldContent>
                </Field>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
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
                <CardTitle>Bildirim Ayarları</CardTitle>
                <CardDescription>Bildirim tercihlerinizi yönetin</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Bildirim ayarları yakında eklenecek.</p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
