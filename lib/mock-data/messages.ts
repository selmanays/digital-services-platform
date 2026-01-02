import { Message, MessageThread } from '@/lib/types/message';

export const mockMessages: Message[] = [
  {
    id: 'msg-1',
    threadId: 'thread-1',
    senderId: 'user-1',
    receiverId: 'prov-1',
    content: 'Merhaba, temizlik hizmeti için teklif almak istiyorum.',
    read: true,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: 'msg-2',
    threadId: 'thread-1',
    senderId: 'prov-1',
    receiverId: 'user-1',
    content: 'Merhaba, tabii ki. Hangi gün uygun olur?',
    read: true,
    createdAt: '2024-01-10T09:15:00Z'
  },
  {
    id: 'msg-3',
    threadId: 'thread-1',
    senderId: 'user-1',
    receiverId: 'prov-1',
    content: 'Pazartesi günü uygun olur mu?',
    read: true,
    createdAt: '2024-01-10T09:30:00Z'
  },
  {
    id: 'msg-4',
    threadId: 'thread-1',
    senderId: 'prov-1',
    receiverId: 'user-1',
    content: 'Evet, Pazartesi uygun. Saat 10:00\'da gelebilirim.',
    read: false,
    createdAt: '2024-01-10T09:45:00Z'
  },
  {
    id: 'msg-5',
    threadId: 'thread-2',
    senderId: 'user-2',
    receiverId: 'prov-2',
    content: 'Elektrik arızası var, acil müdahale gerekiyor.',
    read: true,
    createdAt: '2024-01-15T08:00:00Z'
  },
  {
    id: 'msg-6',
    threadId: 'thread-2',
    senderId: 'prov-2',
    receiverId: 'user-2',
    content: '30 dakika içinde orada olabilirim.',
    read: true,
    createdAt: '2024-01-15T08:10:00Z'
  },
  {
    id: 'msg-7',
    threadId: 'thread-3',
    senderId: 'user-3',
    receiverId: 'prov-3',
    content: 'Lavabo tıkanıklığı var, yardımcı olabilir misiniz?',
    read: false,
    createdAt: '2024-02-01T10:00:00Z'
  }
];

export const mockThreads: MessageThread[] = [
  {
    id: 'thread-1',
    participantIds: ['user-1', 'prov-1'],
    lastMessage: mockMessages.find(m => m.id === 'msg-4'),
    unreadCount: 1,
    updatedAt: '2024-01-10T09:45:00Z'
  },
  {
    id: 'thread-2',
    participantIds: ['user-2', 'prov-2'],
    lastMessage: mockMessages.find(m => m.id === 'msg-6'),
    unreadCount: 0,
    updatedAt: '2024-01-15T08:10:00Z'
  },
  {
    id: 'thread-3',
    participantIds: ['user-3', 'prov-3'],
    lastMessage: mockMessages.find(m => m.id === 'msg-7'),
    unreadCount: 1,
    updatedAt: '2024-02-01T10:00:00Z'
  }
];

export function getThreadById(threadId: string): MessageThread | undefined {
  return mockThreads.find(t => t.id === threadId);
}

export function getMessagesByThreadId(threadId: string): Message[] {
  return mockMessages.filter(m => m.threadId === threadId).sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  );
}

export function getThreadsByUserId(userId: string): MessageThread[] {
  return mockThreads.filter(t => t.participantIds.includes(userId));
}
