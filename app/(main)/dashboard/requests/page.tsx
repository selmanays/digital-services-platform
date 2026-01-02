'use client';

import { getRequestsByUserId } from '@/lib/mock-data/requests';
import { RequestCard } from '@/components/request/RequestCard';
import { EmptyState } from '@/components/common/EmptyState';
import { FadeIn, SlideIn } from '@/components/animations';

export default function UserRequestsPage() {
  const currentUserId = 'user-1';
  const requests = getRequestsByUserId(currentUserId);

  return (
    <div className="w-full min-h-screen py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold mb-3">Taleplerim</h1>
            <p className="text-lg text-muted-foreground">Oluşturduğunuz tüm talepler</p>
          </div>
        </FadeIn>

        {requests.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {requests.map((request, index) => (
              <SlideIn key={request.id} direction="up" delay={index * 0.05}>
                <RequestCard request={request} />
              </SlideIn>
            ))}
          </div>
        ) : (
          <FadeIn delay={0.1}>
            <EmptyState
              title="Henüz talep oluşturmadınız"
              description="İlk talebinizi oluşturmak için aşağıdaki butona tıklayın"
              actionLabel="Talep Oluştur"
              onAction={() => window.location.href = '/request/create'}
            />
          </FadeIn>
        )}
      </div>
    </div>
  );
}
