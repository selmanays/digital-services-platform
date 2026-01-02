'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageThread } from '@/lib/types/message';
import { mockUsers } from '@/lib/mock-data/users';
import { mockProviders } from '@/lib/mock-data/providers';
import { FadeIn } from '@/components/animations';
import { pulse } from '@/lib/animations';

interface MessageListProps {
  threads: MessageThread[];
  currentUserId: string;
  selectedThreadId?: string;
}

export function MessageList({ threads, currentUserId, selectedThreadId }: MessageListProps) {
  const getParticipantName = (thread: MessageThread) => {
    const otherParticipantId = thread.participantIds.find(id => id !== currentUserId);
    if (!otherParticipantId) return 'Bilinmeyen';
    
    const user = mockUsers.find(u => u.id === otherParticipantId);
    if (user) return user.name;
    
    const provider = mockProviders.find(p => p.id === otherParticipantId);
    return provider?.name || 'Bilinmeyen';
  };

  return (
    <div className="space-y-3">
      {threads.map((thread, index) => (
        <FadeIn key={thread.id} delay={index * 0.05}>
          <Link href={`/messages/${thread.id}`}>
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <Card className={`hover:shadow-lg transition-all duration-300 cursor-pointer ${
                selectedThreadId === thread.id 
                  ? 'ring-2 ring-primary bg-primary/5' 
                  : 'hover:border-primary/30'
              }`}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm mb-1">{getParticipantName(thread)}</div>
                      {thread.lastMessage && (
                        <CardDescription className="mt-1 line-clamp-2 text-xs">
                          {thread.lastMessage.content}
                        </CardDescription>
                      )}
                    </div>
                    {thread.unreadCount > 0 && (
                      <motion.div
                        variants={pulse}
                        animate="animate"
                      >
                        <Badge variant="default" className="bg-primary">
                          {thread.unreadCount}
                        </Badge>
                      </motion.div>
                    )}
                  </div>
                </CardHeader>
                {thread.lastMessage && (
                  <CardContent className="pt-0">
                    <div className="text-xs text-muted-foreground">
                      {new Date(thread.lastMessage.createdAt).toLocaleDateString('tr-TR', {
                        day: 'numeric',
                        month: 'short',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </div>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          </Link>
        </FadeIn>
      ))}
      {threads.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">Henüz mesaj yok.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
