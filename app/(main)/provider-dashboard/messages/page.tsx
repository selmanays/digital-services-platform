'use client';

import { getThreadsByUserId } from '@/lib/mock-data/messages';
import { MessageList } from '@/components/messaging/MessageList';
import { FadeIn } from '@/components/animations';
import { EmptyState } from '@/components/common/EmptyState';

export default function ProviderMessagesPage() {
  const providerId = 'prov-1';
  const threads = getThreadsByUserId(providerId);

  return (
    <div className="w-full min-h-screen py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold mb-3">Mesajlar</h1>
            <p className="text-lg text-muted-foreground">Tüm mesajlaşmalarınız</p>
          </div>
        </FadeIn>
        <div className="max-w-3xl">
          {threads.length > 0 ? (
            <MessageList threads={threads} currentUserId={providerId} />
          ) : (
            <FadeIn delay={0.1}>
              <EmptyState
                title="Henüz mesajınız yok"
                description="Kullanıcılar ile iletişime geçmeye başlayın."
              />
            </FadeIn>
          )}
        </div>
      </div>
    </div>
  );
}
