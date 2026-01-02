'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Field, FieldContent, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations';
import { CheckCircle2, Settings, Mail, AlertTriangle } from 'lucide-react';

export default function AdminSettingsPage() {
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-3 flex items-center gap-3">
              <Settings className="h-8 w-8 text-primary" />
              Sistem Ayarları
            </h1>
            <p className="text-lg text-muted-foreground">Platform ayarlarını yönetin</p>
          </div>
        </FadeIn>

        <div className="space-y-6">
          <FadeIn delay={0.1}>
            <Card>
              <CardHeader>
                <CardTitle>Genel Ayarlar</CardTitle>
                <CardDescription>Platform genel ayarları</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Field>
                  <FieldLabel>Platform Adı</FieldLabel>
                  <FieldContent>
                    <Input defaultValue="Dijital Hizmet Platformu" />
                  </FieldContent>
                </Field>
                <Field>
                  <FieldLabel>Komisyon Oranı (%)</FieldLabel>
                  <FieldContent>
                    <Input type="number" defaultValue="10" />
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
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  E-posta Ayarları
                </CardTitle>
                <CardDescription>E-posta bildirim ayarları</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">E-posta ayarları yakında eklenecek.</p>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.3}>
            <Card className="border-destructive/50 bg-destructive/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <AlertTriangle className="h-5 w-5" />
                  Tehlike Bölgesi
                </CardTitle>
                <CardDescription>Dikkatli kullanın</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Bu bölümdeki ayarlar platformun çalışmasını etkileyebilir.
                </p>
                <Button variant="destructive" disabled>
                  Platformu Sıfırla
                </Button>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
