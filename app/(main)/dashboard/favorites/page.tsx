'use client';

import { mockProviders } from '@/lib/mock-data/providers';
import { ProviderCard } from '@/components/provider/ProviderCard';
import { EmptyState } from '@/components/common/EmptyState';
import { FadeIn, SlideIn } from '@/components/animations';

export default function FavoritesPage() {
  const favoriteProviderIds = ['prov-1', 'prov-2', 'prov-5'];
  const favorites = mockProviders.filter(p => favoriteProviderIds.includes(p.id));

  return (
    <div className="w-full min-h-screen py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold mb-3">Favorilerim</h1>
            <p className="text-lg text-muted-foreground">Favori hizmet sağlayıcılarınız</p>
          </div>
        </FadeIn>

        {favorites.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {favorites.map((provider, index) => (
              <SlideIn key={provider.id} direction="up" delay={index * 0.05}>
                <ProviderCard provider={provider} />
              </SlideIn>
            ))}
          </div>
        ) : (
          <FadeIn delay={0.1}>
            <EmptyState
              title="Henüz favori eklemediniz"
              description="Beğendiğiniz hizmet sağlayıcıları favorilerinize ekleyin"
              actionLabel="Hizmet Ara"
              onAction={() => window.location.href = '/search'}
            />
          </FadeIn>
        )}
      </div>
    </div>
  );
}
