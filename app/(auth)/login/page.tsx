'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Field, FieldContent, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { FadeIn } from '@/components/animations';
import { useMicroInteractions } from '@/hooks/useMicroInteractions';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailFocus = useMicroInteractions();
  const passwordFocus = useMicroInteractions();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', { email, password });
    window.location.href = '/dashboard';
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-background">
      <div className="w-full max-w-md">
        <FadeIn>
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="shadow-2xl border-2">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl mb-2">Giriş Yap</CardTitle>
                <CardDescription className="text-base">Hesabınıza giriş yapın</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Field>
                    <FieldLabel>E-posta</FieldLabel>
                    <FieldContent>
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={emailFocus.handlers.onFocus}
                        onBlur={emailFocus.handlers.onBlur}
                        placeholder="ornek@email.com"
                        required
                        className={`transition-all duration-200 ${
                          emailFocus.isFocused ? 'ring-2 ring-primary/20 border-primary' : ''
                        }`}
                      />
                    </FieldContent>
                  </Field>
                  <Field>
                    <FieldLabel>Şifre</FieldLabel>
                    <FieldContent>
                      <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={passwordFocus.handlers.onFocus}
                        onBlur={passwordFocus.handlers.onBlur}
                        placeholder="••••••••"
                        required
                        className={`transition-all duration-200 ${
                          passwordFocus.isFocused ? 'ring-2 ring-primary/20 border-primary' : ''
                        }`}
                      />
                    </FieldContent>
                  </Field>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button type="submit" className="w-full" size="lg">
                      Giriş Yap
                    </Button>
                  </motion.div>
                </form>

                <div className="mt-6">
                  <Separator />
                  <div className="mt-4 text-center text-sm">
                    <span className="text-muted-foreground">Hesabınız yok mu? </span>
                    <Link href="/register" className="text-primary hover:underline font-medium">
                      Kayıt ol
                    </Link>
                  </div>
                </div>

                <div className="mt-6">
                  <Separator />
                  <div className="mt-4">
                    <Button variant="outline" className="w-full" disabled>
                      Google ile Giriş Yap
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </FadeIn>
      </div>
    </div>
  );
}
