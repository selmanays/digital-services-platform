'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { mockProviders } from '@/lib/mock-data/providers';
import { FadeIn, SlideIn } from '@/components/animations';
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
import { MoreVertical, Edit, FileText, CheckCircle2, Shield, Ban } from 'lucide-react';

export default function AdminProvidersPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProviders = mockProviders.filter(provider =>
    provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    provider.location.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-3">Hizmet Sağlayıcı Yönetimi</h1>
              <p className="text-lg text-muted-foreground">Tüm hizmet sağlayıcıları yönetin</p>
            </div>
            <Input 
              placeholder="Sağlayıcı ara..." 
              className="w-full sm:w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Card>
            <CardHeader>
              <CardTitle>Hizmet Sağlayıcılar ({filteredProviders.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredProviders.map((provider, index) => (
                  <SlideIn key={provider.id} direction="up" delay={index * 0.05}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center justify-between p-4 border-2 rounded-lg hover:border-primary/30 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        <Image
                          src={provider.profileImage}
                          alt={provider.name}
                          width={40}
                          height={40}
                          className="h-10 w-10 rounded-full object-cover border-2"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold">{provider.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {provider.location.district}, {provider.location.city}
                          </div>
                        </div>
                        {provider.verified && (
                          <Badge variant="default" className="gap-1.5">
                            <CheckCircle2 className="h-3 w-3" />
                            Doğrulanmış
                          </Badge>
                        )}
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem className="gap-2">
                            <Edit className="h-4 w-4" />
                            Düzenle
                          </DropdownMenuItem>
                          <DropdownMenuItem className="gap-2">
                            <FileText className="h-4 w-4" />
                            Belgeleri İncele
                          </DropdownMenuItem>
                          <DropdownMenuItem className="gap-2">
                            <CheckCircle2 className="h-4 w-4" />
                            Onayla
                          </DropdownMenuItem>
                          <DropdownMenuItem className="gap-2">
                            <Shield className="h-4 w-4" />
                            Risk Analizi
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <AlertDialog>
                              <AlertDialogTrigger className="w-full text-left flex items-center gap-2">
                                <Ban className="h-4 w-4" />
                                Askıya Al
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Sağlayıcıyı Askıya Al</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Bu hizmet sağlayıcıyı askıya almak istediğinizden emin misiniz?
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>İptal</AlertDialogCancel>
                                  <AlertDialogAction variant="destructive">
                                    Askıya Al
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
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
