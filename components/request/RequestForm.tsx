'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Field, FieldContent, FieldDescription, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { mockProviders } from '@/lib/mock-data/providers';
import { CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

interface RequestFormData {
  serviceId: string;
  providerId?: string;
  title: string;
  description: string;
  scheduledDate: string;
  scheduledTime: string;
  location: {
    city: string;
    district: string;
    address: string;
  };
  budget: {
    min: number;
    max: number;
  };
}

interface RequestFormProps {
  onSubmit: (data: RequestFormData) => void;
  initialProviderId?: string;
}

const steps = [
  { number: 1, title: 'Hizmet Seçimi' },
  { number: 2, title: 'Detaylar' },
  { number: 3, title: 'Tarih & Konum' },
  { number: 4, title: 'Özet' },
];

export function RequestForm({ onSubmit, initialProviderId }: RequestFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<RequestFormData>({
    serviceId: '',
    providerId: initialProviderId || '',
    title: '',
    description: '',
    scheduledDate: '',
    scheduledTime: '',
    location: {
      city: 'İstanbul',
      district: '',
      address: ''
    },
    budget: {
      min: 0,
      max: 0
    }
  });

  const selectedProvider = mockProviders.find(p => p.id === formData.providerId);
  const selectedService = selectedProvider?.services.find(s => s.id === formData.serviceId);

  const handleNext = () => {
    if (step < 4) {
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
    onSubmit(formData);
  };

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => {
      if (field.includes('.')) {
        const [parent, child] = field.split('.');
        return {
          ...prev,
          [parent]: {
            ...prev[parent as keyof RequestFormData],
            [child]: value
          }
        };
      }
      return { ...prev, [field]: value };
    });
  };

  const progress = (step / 4) * 100;

  return (
    <div className="space-y-8">
      {/* Progress Indicator */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          {steps.map((s, index) => (
            <div key={s.number} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <motion.div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
                    step >= s.number
                      ? 'bg-primary border-primary text-primary-foreground'
                      : 'border-muted text-muted-foreground'
                  }`}
                  initial={false}
                  animate={{ scale: step === s.number ? 1.1 : 1 }}
                >
                  {step > s.number ? (
                    <CheckCircle2 className="h-5 w-5" />
                  ) : (
                    <span className="font-semibold">{s.number}</span>
                  )}
                </motion.div>
                <span className={`text-xs mt-2 ${step >= s.number ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {s.title}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 h-0.5 mx-2 bg-muted relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-primary"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: step > s.number ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Talep Oluştur</CardTitle>
          <CardDescription>
            Adım {step} / 4: {steps[step - 1].title}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {/* Step 1: Service Selection */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <Field>
                    <FieldLabel>Hizmet Sağlayıcı</FieldLabel>
                    <FieldContent>
                      <Select
                        value={formData.providerId}
                        onValueChange={(value) => updateFormData('providerId', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Hizmet sağlayıcı seçin" />
                        </SelectTrigger>
                        <SelectContent>
                          {mockProviders.map((provider) => (
                            <SelectItem key={provider.id} value={provider.id}>
                              {provider.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FieldContent>
                  </Field>

                  {selectedProvider && (
                    <Field>
                      <FieldLabel>Hizmet</FieldLabel>
                      <FieldContent>
                        <Select
                          value={formData.serviceId}
                          onValueChange={(value) => updateFormData('serviceId', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Hizmet seçin" />
                          </SelectTrigger>
                          <SelectContent>
                            {selectedProvider.services.map((service) => (
                              <SelectItem key={service.id} value={service.id}>
                                {service.name} - {service.price}₺
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FieldContent>
                    </Field>
                  )}

                  <div className="flex justify-end">
                    <Button 
                      type="button" 
                      onClick={handleNext} 
                      disabled={!formData.serviceId}
                      className="gap-2"
                    >
                      İleri
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Details */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <Field>
                    <FieldLabel>Başlık</FieldLabel>
                    <FieldContent>
                      <Input
                        value={formData.title}
                        onChange={(e) => updateFormData('title', e.target.value)}
                        placeholder="Talep başlığı"
                        required
                      />
                    </FieldContent>
                  </Field>

                  <Field>
                    <FieldLabel>Açıklama</FieldLabel>
                    <FieldContent>
                      <Textarea
                        value={formData.description}
                        onChange={(e) => updateFormData('description', e.target.value)}
                        placeholder="Detaylı açıklama yazın"
                        rows={6}
                        required
                      />
                    </FieldContent>
                  </Field>

                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={handleBack} className="gap-2">
                      <ArrowLeft className="h-4 w-4" />
                      Geri
                    </Button>
                    <Button 
                      type="button" 
                      onClick={handleNext} 
                      disabled={!formData.title || !formData.description}
                      className="gap-2"
                    >
                      İleri
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Date/Time and Location */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field>
                      <FieldLabel>Tarih</FieldLabel>
                      <FieldContent>
                        <Input
                          type="date"
                          value={formData.scheduledDate}
                          onChange={(e) => updateFormData('scheduledDate', e.target.value)}
                          required
                        />
                      </FieldContent>
                    </Field>

                    <Field>
                      <FieldLabel>Saat</FieldLabel>
                      <FieldContent>
                        <Input
                          type="time"
                          value={formData.scheduledTime}
                          onChange={(e) => updateFormData('scheduledTime', e.target.value)}
                          required
                        />
                      </FieldContent>
                    </Field>
                  </div>

                  <Separator />

                  <Field>
                    <FieldLabel>Şehir</FieldLabel>
                    <FieldContent>
                      <Input
                        value={formData.location.city}
                        onChange={(e) => updateFormData('location.city', e.target.value)}
                        required
                      />
                    </FieldContent>
                  </Field>

                  <Field>
                    <FieldLabel>İlçe</FieldLabel>
                    <FieldContent>
                      <Input
                        value={formData.location.district}
                        onChange={(e) => updateFormData('location.district', e.target.value)}
                        required
                      />
                    </FieldContent>
                  </Field>

                  <Field>
                    <FieldLabel>Adres</FieldLabel>
                    <FieldContent>
                      <Textarea
                        value={formData.location.address}
                        onChange={(e) => updateFormData('location.address', e.target.value)}
                        placeholder="Detaylı adres"
                        rows={3}
                        required
                      />
                    </FieldContent>
                  </Field>

                  <div className="grid gap-4 md:grid-cols-2">
                    <Field>
                      <FieldLabel>Min Bütçe (₺)</FieldLabel>
                      <FieldContent>
                        <Input
                          type="number"
                          value={formData.budget.min || ''}
                          onChange={(e) => updateFormData('budget.min', parseInt(e.target.value) || 0)}
                          required
                        />
                      </FieldContent>
                    </Field>

                    <Field>
                      <FieldLabel>Max Bütçe (₺)</FieldLabel>
                      <FieldContent>
                        <Input
                          type="number"
                          value={formData.budget.max || ''}
                          onChange={(e) => updateFormData('budget.max', parseInt(e.target.value) || 0)}
                          required
                        />
                      </FieldContent>
                    </Field>
                  </div>

                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={handleBack} className="gap-2">
                      <ArrowLeft className="h-4 w-4" />
                      Geri
                    </Button>
                    <Button type="button" onClick={handleNext} className="gap-2">
                      İleri
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Summary */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <Card className="bg-muted/50">
                    <CardHeader>
                      <CardTitle>Özet</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {[
                        { label: 'Hizmet Sağlayıcı', value: selectedProvider?.name },
                        { label: 'Hizmet', value: selectedService?.name },
                        { label: 'Başlık', value: formData.title },
                        { label: 'Açıklama', value: formData.description },
                        { label: 'Tarih ve Saat', value: `${formData.scheduledDate} ${formData.scheduledTime}` },
                        { label: 'Konum', value: `${formData.location.address}, ${formData.location.district}, ${formData.location.city}` },
                        { label: 'Bütçe', value: `${formData.budget.min}₺ - ${formData.budget.max}₺` },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <div className="font-medium text-sm mb-1">{item.label}:</div>
                          <div className="text-sm text-muted-foreground">{item.value}</div>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>

                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={handleBack} className="gap-2">
                      <ArrowLeft className="h-4 w-4" />
                      Geri
                    </Button>
                    <Button type="submit" variant="default" className="gap-2">
                      <CheckCircle2 className="h-4 w-4" />
                      Talebi Oluştur
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
