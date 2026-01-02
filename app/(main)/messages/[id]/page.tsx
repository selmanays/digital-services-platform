'use client';

import { use } from 'react';
import { getThreadById, getMessagesByThreadId } from '@/lib/mock-data/messages';
import { MessageThread } from '@/components/messaging/MessageThread';
import { MessageList } from '@/components/messaging/MessageList';
import { getThreadsByUserId } from '@/lib/mock-data/messages';
import { mockUsers } from '@/lib/mock-data/users';
import { mockProviders } from '@/lib/mock-data/providers';
import { FadeIn } from '@/components/animations';
import { EmptyState } from '@/components/common/EmptyState';

export default function MessageThreadPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const currentUserId = 'user-1';
  const thread = getThreadById(id);
  const threads = getThreadsByUserId(currentUserId);
  const messages = thread ? getMessagesByThreadId(thread.id) : [];

  const handleSendMessage = (content: string) => {
    console.log('Sending message:', content);
  };

  // Get thread title from participant names
  const getThreadTitle = () => {
    if (!thread) return 'Conversation';
    const otherParticipantId = thread.participantIds.find(id => id !== currentUserId);
    if (!otherParticipantId) return 'Conversation';
    
    const user = mockUsers.find(u => u.id === otherParticipantId);
    if (user) return user.name;
    
    const provider = mockProviders.find(p => p.id === otherParticipantId);
    if (provider) return provider.name;
    
    return 'Conversation';
  };

  if (!thread) {
    return (
      <div className="w-full min-h-screen py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <EmptyState
            title="Message not found"
            description="The conversation you are looking for could not be found."
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <div className="hidden lg:block">
            <FadeIn>
              <h2 className="text-lg font-semibold mb-4">Messages</h2>
            </FadeIn>
            <MessageList threads={threads} currentUserId={currentUserId} selectedThreadId={id} />
          </div>
          <FadeIn delay={0.1}>
            <div className="border rounded-2xl h-[600px] flex flex-col overflow-hidden bg-card shadow-lg">
              <div className="p-4 border-b bg-muted/50">
                <h2 className="font-semibold text-lg">{getThreadTitle()}</h2>
              </div>
              <MessageThread
                messages={messages}
                currentUserId={currentUserId}
                onSendMessage={handleSendMessage}
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
