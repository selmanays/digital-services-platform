'use client';

import { StatsCard } from '@/components/dashboard/StatsCard';
import { mockUsers } from '@/lib/mock-data/users';
import { mockProviders } from '@/lib/mock-data/providers';
import { mockRequests } from '@/lib/mock-data/requests';
import { mockPayments } from '@/lib/mock-data/payments';
import { FadeIn } from '@/components/animations';

export default function AdminDashboardPage() {
  const stats = {
    totalUsers: mockUsers.filter(u => u.role === 'user').length,
    totalProviders: mockProviders.length,
    totalRequests: mockRequests.length,
    totalRevenue: mockPayments.reduce((sum, p) => sum + p.amount, 0)
  };

  return (
    <div className="w-full min-h-screen py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold mb-3">Admin Dashboard</h1>
            <p className="text-lg text-muted-foreground">Platform genel bakış</p>
          </div>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Toplam Kullanıcı"
            value={stats.totalUsers}
            description="Kayıtlı kullanıcılar"
          />
          <StatsCard
            title="Hizmet Sağlayıcı"
            value={stats.totalProviders}
            description="Aktif sağlayıcılar"
          />
          <StatsCard
            title="Toplam Talep"
            value={stats.totalRequests}
            description="Oluşturulan talepler"
          />
          <StatsCard
            title="Toplam Gelir"
            value={`${stats.totalRevenue}₺`}
            description="Toplam işlem hacmi"
          />
        </div>
      </div>
    </div>
  );
}
