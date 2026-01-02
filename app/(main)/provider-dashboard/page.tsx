'use client';

import { StatsCard } from '@/components/dashboard/StatsCard';
import { ActivityFeed } from '@/components/dashboard/ActivityFeed';
import { mockRequests } from '@/lib/mock-data/requests';
import { getThreadsByUserId } from '@/lib/mock-data/messages';
import { FadeIn } from '@/components/animations';

export default function ProviderDashboardPage() {
  const providerId = 'prov-1';
  const incomingRequests = mockRequests.filter(r => !r.providerId || r.providerId === providerId);
  const threads = getThreadsByUserId(providerId);

  const stats = {
    totalRequests: incomingRequests.length,
    pendingRequests: incomingRequests.filter(r => r.status === 'pending').length,
    activeRequests: incomingRequests.filter(r => r.status === 'active' || r.status === 'accepted').length,
    unreadMessages: threads.reduce((sum, t) => sum + t.unreadCount, 0)
  };

  const activities = [
    {
      id: 'act-1',
      type: 'request' as const,
      title: 'Yeni talep geldi',
      description: 'Ev Temizliği talebi',
      timestamp: '2024-01-10T08:00:00Z'
    },
    {
      id: 'act-2',
      type: 'message' as const,
      title: 'Yeni mesaj',
      description: 'Kullanıcıdan mesaj geldi',
      timestamp: '2024-01-10T09:00:00Z'
    }
  ];

  return (
    <div className="w-full min-h-screen py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold mb-3">Provider Dashboard</h1>
            <p className="text-lg text-muted-foreground">Hizmet sağlayıcı paneli</p>
          </div>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          <StatsCard
            title="Toplam Talep"
            value={stats.totalRequests}
            description="Gelen talepler"
          />
          <StatsCard
            title="Bekleyen"
            value={stats.pendingRequests}
            description="Yanıt bekleyen talepler"
          />
          <StatsCard
            title="Aktif İşler"
            value={stats.activeRequests}
            description="Devam eden işler"
          />
          <StatsCard
            title="Okunmamış Mesaj"
            value={stats.unreadMessages}
            description="Yeni mesajlar"
          />
        </div>

        <FadeIn delay={0.1}>
          <ActivityFeed activities={activities} />
        </FadeIn>
      </div>
    </div>
  );
}
