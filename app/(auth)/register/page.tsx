'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Field, FieldContent, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FadeIn } from '@/components/animations';
import { CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: '',
    role: 'user' as 'user' | 'provider',
    companyName: '',
    taxNumber: '',
    address: '',
    city: '',
    district: '',
    documentType: '',
    documentNumber: ''
  });

  const maxStep = formData.role === 'provider' ? 5 : 3;
  const progress = (step / maxStep) * 100;

  const handleNext = () => {
    if (step < maxStep) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register:', formData);
    window.location.href = '/dashboard';
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-background">
      <div className="w-full max-w-2xl">
        <FadeIn>
          <Card className="shadow-2xl border-2">
            <CardHeader>
              <div className="mb-4">
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
              <CardTitle className="text-3xl">Kayıt Ol</CardTitle>
              <CardDescription className="text-base">
                Adım {step} / {maxStep}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-5"
                    >
                      <Field>
                        <FieldLabel>E-posta</FieldLabel>
                        <FieldContent>
                          <Input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="ornek@email.com"
                            required
                          />
                        </FieldContent>
                      </Field>
                      <Field>
                        <FieldLabel>Şifre</FieldLabel>
                        <FieldContent>
                          <Input
                            type="password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            placeholder="••••••••"
                            required
                          />
                        </FieldContent>
                      </Field>
                      <Field>
                        <FieldLabel>Şifre Tekrar</FieldLabel>
                        <FieldContent>
                          <Input
                            type="password"
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            placeholder="••••••••"
                            required
                          />
                        </FieldContent>
                      </Field>
                      <Button type="button" onClick={handleNext} className="w-full" size="lg" className="gap-2">
                        İleri
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-5"
                    >
                      <Field>
                        <FieldLabel>Ad Soyad</FieldLabel>
                        <FieldContent>
                          <Input
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Ad Soyad"
                            required
                          />
                        </FieldContent>
                      </Field>
                      <Field>
                        <FieldLabel>Telefon</FieldLabel>
                        <FieldContent>
                          <Input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+90 5XX XXX XX XX"
                            required
                          />
                        </FieldContent>
                      </Field>
                      <Field>
                        <FieldLabel>Rol</FieldLabel>
                        <FieldContent>
                          <Select
                            value={formData.role}
                            onValueChange={(value: 'user' | 'provider') => setFormData({ ...formData, role: value })}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="user">Kullanıcı</SelectItem>
                              <SelectItem value="provider">Hizmet Sağlayıcı</SelectItem>
                            </SelectContent>
                          </Select>
                        </FieldContent>
                      </Field>
                      <div className="flex gap-3">
                        <Button type="button" variant="outline" onClick={handleBack} className="flex-1 gap-2">
                          <ArrowLeft className="h-4 w-4" />
                          Geri
                        </Button>
                        <Button type="button" onClick={handleNext} className="flex-1 gap-2">
                          İleri
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {(step === 3 && formData.role === 'user') || (step === 5 && formData.role === 'provider') ? (
                    <motion.div
                      key="summary"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-5"
                    >
                      <Card className="bg-muted/50">
                        <CardHeader>
                          <CardTitle>Özet</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm">
                          <div><span className="font-medium">E-posta: </span>{formData.email}</div>
                          <div><span className="font-medium">Ad Soyad: </span>{formData.name}</div>
                          <div><span className="font-medium">Telefon: </span>{formData.phone}</div>
                          <div><span className="font-medium">Rol: </span>{formData.role === 'user' ? 'Kullanıcı' : 'Hizmet Sağlayıcı'}</div>
                        </CardContent>
                      </Card>
                      <div className="flex gap-3">
                        <Button type="button" variant="outline" onClick={handleBack} className="flex-1 gap-2">
                          <ArrowLeft className="h-4 w-4" />
                          Geri
                        </Button>
                        <Button type="submit" className="flex-1 gap-2" size="lg">
                          <CheckCircle2 className="h-4 w-4" />
                          Kayıt Ol
                        </Button>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </form>

              <div className="mt-6">
                <Separator />
                <div className="mt-4 text-center text-sm">
                  <span className="text-muted-foreground">Zaten hesabınız var mı? </span>
                  <Link href="/login" className="text-primary hover:underline font-medium">
                    Giriş yap
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </div>
  );
}
