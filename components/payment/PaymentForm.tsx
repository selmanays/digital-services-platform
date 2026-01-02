'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Field, FieldContent, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { InstallmentPlan } from '@/lib/types/payment';
import { CreditCard, Lock, Shield } from 'lucide-react';
import { FadeIn } from '@/components/animations';

interface PaymentFormProps {
  amount: number;
  onSubmit: (data: { paymentMethod: string; cardNumber?: string; cardHolder?: string; expiryDate?: string; cvv?: string; installmentPlan?: InstallmentPlan }) => void;
}

export function PaymentForm({ amount, onSubmit }: PaymentFormProps) {
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [selectedInstallment, setSelectedInstallment] = useState<InstallmentPlan | null>(null);
  const [isInstallment, setIsInstallment] = useState(false);

  const installmentPlans: InstallmentPlan[] = [
    { id: '1', installments: 2, monthlyAmount: amount / 2, totalAmount: amount },
    { id: '2', installments: 3, monthlyAmount: Math.ceil(amount / 3), totalAmount: amount },
    { id: '3', installments: 6, monthlyAmount: Math.ceil(amount / 6), totalAmount: amount },
    { id: '4', installments: 9, monthlyAmount: Math.ceil(amount / 9), totalAmount: amount, interestRate: 2.5 },
    { id: '5', installments: 12, monthlyAmount: Math.ceil(amount / 12), totalAmount: amount * 1.05, interestRate: 5 },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit({
      paymentMethod: formData.get('paymentMethod') as string,
      cardNumber: formData.get('cardNumber') as string,
      cardHolder: formData.get('cardHolder') as string,
      expiryDate: formData.get('expiryDate') as string,
      cvv: formData.get('cvv') as string,
      installmentPlan: isInstallment && selectedInstallment ? selectedInstallment : undefined,
    });
  };

  return (
    <Card className="border-2">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-2xl">Ödeme Bilgileri</CardTitle>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="h-4 w-4" />
            <span className="text-xs">Güvenli Ödeme</span>
          </div>
        </div>
        <CardDescription className="text-base">
          Toplam tutar: <span className="font-bold text-primary text-lg">{amount}₺</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <FadeIn delay={0.1}>
            <Field>
              <FieldLabel>Ödeme Yöntemi</FieldLabel>
              <FieldContent>
                <Select 
                  name="paymentMethod" 
                  required
                  value={paymentMethod}
                  onValueChange={(value) => {
                    setPaymentMethod(value);
                    setIsInstallment(value === 'credit-card');
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Ödeme yöntemi seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="credit-card">
                      <div className="flex items-center gap-2">
                        <CreditCard className="h-4 w-4" />
                        Kredi Kartı
                      </div>
                    </SelectItem>
                    <SelectItem value="debit-card">Banka Kartı</SelectItem>
                    <SelectItem value="bank-transfer">Banka Havalesi</SelectItem>
                  </SelectContent>
                </Select>
              </FieldContent>
            </Field>
          </FadeIn>

          {isInstallment && paymentMethod === 'credit-card' && (
            <FadeIn delay={0.2}>
              <Separator />
              <Field>
                <FieldLabel>Taksit Seçenekleri</FieldLabel>
                <FieldContent>
                  <div className="space-y-3">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        !selectedInstallment ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/30'
                      }`}
                      onClick={() => setSelectedInstallment(null)}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">Peşin Ödeme</span>
                        <Badge variant="outline" className="text-base px-3">{amount}₺</Badge>
                      </div>
                    </motion.div>
                    {installmentPlans.map((plan, index) => (
                      <motion.div
                        key={plan.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          selectedInstallment?.id === plan.id ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/30'
                        }`}
                        onClick={() => setSelectedInstallment(plan)}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold">{plan.installments} Taksit</div>
                            <div className="text-sm text-muted-foreground mt-1">
                              Aylık: {plan.monthlyAmount}₺
                              {plan.interestRate && (
                                <span className="ml-2 text-orange-600 font-medium">
                                  (+%{plan.interestRate} faiz)
                                </span>
                              )}
                            </div>
                          </div>
                          <Badge variant={selectedInstallment?.id === plan.id ? 'default' : 'outline'} className="text-base px-3">
                            {plan.totalAmount}₺
                          </Badge>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </FieldContent>
              </Field>
            </FadeIn>
          )}

          <FadeIn delay={0.3}>
            <div className="space-y-4">
              <Field>
                <FieldLabel>Kart Numarası</FieldLabel>
                <FieldContent>
                  <Input
                    name="cardNumber"
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    required
                    className="font-mono"
                  />
                </FieldContent>
              </Field>

              <Field>
                <FieldLabel>Kart Sahibi</FieldLabel>
                <FieldContent>
                  <Input
                    name="cardHolder"
                    type="text"
                    placeholder="Ad Soyad"
                    required
                  />
                </FieldContent>
              </Field>

              <div className="grid gap-4 md:grid-cols-2">
                <Field>
                  <FieldLabel>Son Kullanma Tarihi</FieldLabel>
                  <FieldContent>
                    <Input
                      name="expiryDate"
                      type="text"
                      placeholder="MM/YY"
                      maxLength={5}
                      required
                      className="font-mono"
                    />
                  </FieldContent>
                </Field>

                <Field>
                  <FieldLabel>CVV</FieldLabel>
                  <FieldContent>
                    <Input
                      name="cvv"
                      type="text"
                      placeholder="123"
                      maxLength={3}
                      required
                      className="font-mono"
                    />
                  </FieldContent>
                </Field>
              </div>
            </div>
          </FadeIn>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button type="submit" className="w-full gap-2" size="lg">
              <Lock className="h-4 w-4" />
              Ödemeyi Tamamla
            </Button>
          </motion.div>
        </form>
      </CardContent>
    </Card>
  );
}
