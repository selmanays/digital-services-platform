'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { mockUsers } from '@/lib/mock-data/users';
import { mockProviders } from '@/lib/mock-data/providers';
import { mockRequests } from '@/lib/mock-data/requests';
import { mockPayments } from '@/lib/mock-data/payments';
import { FadeIn } from '@/components/animations';
import { FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AdminReportsPage() {
  const stats = {
    totalUsers: mockUsers.filter(u => u.role === 'user').length,
    totalProviders: mockProviders.length,
    totalRequests: mockRequests.length,
    completedRequests: mockRequests.filter(r => r.status === 'completed').length,
    totalRevenue: mockPayments.reduce((sum, p) => sum + p.amount, 0),
    averageRating: mockProviders.reduce((sum, p) => sum + p.rating, 0) / mockProviders.length
  };

  return (
    <div className="w-full min-h-screen py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold mb-3 flex items-center gap-3">
              <FileText className="h-8 w-8 text-primary" />
              Raporlar
            </h1>
            <p className="text-lg text-muted-foreground">Platform istatistikleri ve analitikler</p>
          </div>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-10">
          <StatsCard
            title="Toplam Kullanıcı"
            value={stats.totalUsers}
          />
          <StatsCard
            title="Hizmet Sağlayıcı"
            value={stats.totalProviders}
          />
          <StatsCard
            title="Toplam Talep"
            value={stats.totalRequests}
          />
          <StatsCard
            title="Tamamlanan İşler"
            value={stats.completedRequests}
          />
          <StatsCard
            title="Toplam Gelir"
            value={`${stats.totalRevenue}₺`}
          />
          <StatsCard
            title="Ortalama Puan"
            value={stats.averageRating.toFixed(1)}
          />
        </div>

        <FadeIn delay={0.1}>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Detaylı Raporlar</CardTitle>
                  <CardDescription>Detaylı raporlar yakında eklenecek</CardDescription>
                </div>
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Rapor İndir
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Grafikler, trend analizleri ve detaylı raporlar bu bölümde yer alacak.
              </p>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </div>
  );
}
