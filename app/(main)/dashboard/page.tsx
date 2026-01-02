'use client';

import { StatsCard } from '@/components/dashboard/StatsCard';
import { ActivityFeed } from '@/components/dashboard/ActivityFeed';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { getRequestsByUserId } from '@/lib/mock-data/requests';
import { getThreadsByUserId } from '@/lib/mock-data/messages';
import { FadeIn } from '@/components/animations';

export default function DashboardPage() {
  const currentUserId = 'user-1';
  const requests = getRequestsByUserId(currentUserId);
  const threads = getThreadsByUserId(currentUserId);

  const stats = {
    totalRequests: requests.length,
    activeRequests: requests.filter(r => r.status === 'active' || r.status === 'accepted').length,
    completedRequests: requests.filter(r => r.status === 'completed').length,
    unreadMessages: threads.reduce((sum, t) => sum + t.unreadCount, 0)
  };

  const activities = [
    {
      id: 'act-1',
      type: 'request' as const,
      title: 'Yeni talep oluşturuldu',
      description: 'Ev Temizliği talebi oluşturuldu',
      timestamp: '2024-01-10T08:00:00Z'
    },
    {
      id: 'act-2',
      type: 'offer' as const,
      title: 'Yeni teklif geldi',
      description: 'Temizlik Uzmanı Ahmet\'ten teklif geldi',
      timestamp: '2024-01-10T10:00:00Z'
    },
    {
      id: 'act-3',
      type: 'message' as const,
      title: 'Yeni mesaj',
      description: 'Temizlik Uzmanı Ahmet\'ten mesaj geldi',
      timestamp: '2024-01-10T09:00:00Z'
    }
  ];

  const quickActions = [
    {
      title: 'Yeni Talep Oluştur',
      description: 'Hizmet talebi oluştur',
      href: '/request/create',
      variant: 'default' as const
    },
    {
      title: 'Hizmet Ara',
      description: 'Hizmet sağlayıcı ara',
      href: '/search',
      variant: 'outline' as const
    },
    {
      title: 'Mesajlar',
      description: 'Mesajlarınızı görüntüle',
      href: '/messages',
      variant: 'outline' as const
    },
    {
      title: 'Favorilerim',
      description: 'Favori hizmet sağlayıcılar',
      href: '/dashboard/favorites',
      variant: 'outline' as const
    }
  ];

  return (
    <div className="w-full min-h-screen py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold mb-3">Panel</h1>
            <p className="text-lg text-muted-foreground">Hoş geldiniz! İşlemlerinizin özeti</p>
          </div>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          <StatsCard
            title="Toplam Talep"
            value={stats.totalRequests}
            description="Oluşturduğunuz talepler"
          />
          <StatsCard
            title="Aktif Talepler"
            value={stats.activeRequests}
            description="Devam eden talepler"
          />
          <StatsCard
            title="Tamamlanan"
            value={stats.completedRequests}
            description="Tamamlanan işler"
          />
          <StatsCard
            title="Okunmamış Mesaj"
            value={stats.unreadMessages}
            description="Yeni mesajlar"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <FadeIn delay={0.1}>
            <ActivityFeed activities={activities} />
          </FadeIn>
          <FadeIn delay={0.2}>
            <QuickActions actions={quickActions} />
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
