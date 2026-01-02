'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { mockRequests } from '@/lib/mock-data/requests';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Request } from '@/lib/types/request';
import { FadeIn, SlideIn } from '@/components/animations';
import { Calendar, MapPin, DollarSign, CheckCircle2, XCircle } from 'lucide-react';
import { EmptyState } from '@/components/common/EmptyState';

export default function ProviderCalendarPage() {
  const [filter, setFilter] = useState<'all' | 'pending' | 'accepted' | 'completed'>('all');
  
  let scheduledRequests = mockRequests.filter(r => r.scheduledDate);
  
  if (filter !== 'all') {
    scheduledRequests = scheduledRequests.filter(r => r.status === filter);
  }

  const handleAcceptReservation = (requestId: string) => {
    console.log('Reservation accepted:', requestId);
  };

  const handleRejectReservation = (requestId: string) => {
    console.log('Reservation rejected:', requestId);
  };

  const handleCompleteService = (requestId: string) => {
    console.log('Service completed:', requestId);
  };

  return (
    <div className="w-full min-h-screen py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-3 flex items-center gap-3">
                <Calendar className="h-8 w-8 text-primary" />
                Takvim & Rezervasyonlar
              </h1>
              <p className="text-lg text-muted-foreground">Planlanmış işleriniz ve rezervasyon yönetimi</p>
            </div>
            <Select value={filter} onValueChange={(value: any) => setFilter(value)}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tümü</SelectItem>
                <SelectItem value="pending">Bekleyen</SelectItem>
                <SelectItem value="accepted">Kabul Edilen</SelectItem>
                <SelectItem value="completed">Tamamlanan</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </FadeIn>

        {scheduledRequests.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {scheduledRequests.map((request, index) => (
              <SlideIn key={request.id} direction="up" delay={index * 0.05}>
                <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg mb-2">{request.title}</CardTitle>
                        <CardDescription className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" />
                          {new Date(request.scheduledDate!).toLocaleDateString('tr-TR', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </CardDescription>
                      </div>
                      <Badge variant={
                        request.status === 'completed' ? 'default' :
                        request.status === 'accepted' ? 'secondary' : 'outline'
                      }>
                        {request.status === 'completed' ? 'Tamamlandı' :
                         request.status === 'accepted' ? 'Kabul Edildi' : 'Beklemede'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Konum: </span>
                        <span className="font-medium">{request.location.district}, {request.location.city}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Bütçe: </span>
                        <span className="font-medium">{request.budget.min}₺ - {request.budget.max}₺</span>
                      </div>
                    </div>
                    
                    {request.status === 'pending' && (
                      <div className="flex gap-2">
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                              <Button variant="default" size="sm" className="w-full gap-1.5">
                                <CheckCircle2 className="h-4 w-4" />
                                Kabul Et
                              </Button>
                            </motion.div>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Rezervasyonu Kabul Et</AlertDialogTitle>
                              <AlertDialogDescription>
                                Bu rezervasyonu kabul etmek istediğinizden emin misiniz?
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>İptal</AlertDialogCancel>
                              <AlertDialogAction onClick={() => handleAcceptReservation(request.id)}>
                                Kabul Et
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                              <Button variant="outline" size="sm" className="w-full gap-1.5">
                                <XCircle className="h-4 w-4" />
                                Reddet
                              </Button>
                            </motion.div>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Rezervasyonu Reddet</AlertDialogTitle>
                              <AlertDialogDescription>
                                Bu rezervasyonu reddetmek istediğinizden emin misiniz?
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>İptal</AlertDialogCancel>
                              <AlertDialogAction 
                                variant="destructive"
                                onClick={() => handleRejectReservation(request.id)}
                              >
                                Reddet
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    )}
                    
                    {request.status === 'accepted' && (
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button 
                          variant="default" 
                          size="sm" 
                          className="w-full gap-1.5"
                          onClick={() => handleCompleteService(request.id)}
                        >
                          <CheckCircle2 className="h-4 w-4" />
                          Hizmeti Tamamla
                        </Button>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </SlideIn>
            ))}
          </div>
        ) : (
          <FadeIn delay={0.1}>
            <EmptyState
              title="Henüz planlanmış iş yok"
              description="Henüz takviminizde planlanmış bir iş bulunmuyor."
            />
          </FadeIn>
        )}
      </div>
    </div>
  );
}
