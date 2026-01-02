import { Review } from '@/lib/types/review';

export const mockReviews: Review[] = [
  {
    id: 'rev-1',
    providerId: 'prov-1',
    userId: 'user-1',
    requestId: 'req-1',
    rating: 5,
    comment: 'Çok memnun kaldım. Temizlik konusunda çok titiz ve dikkatli. Kesinlikle tavsiye ederim.',
    createdAt: '2024-01-15T10:30:00Z',
    verified: true
  },
  {
    id: 'rev-2',
    providerId: 'prov-1',
    userId: 'user-2',
    requestId: 'req-2',
    rating: 4,
    comment: 'İyi bir hizmet aldım. Zamanında geldi ve işini düzgün yaptı.',
    createdAt: '2024-01-20T14:15:00Z',
    verified: true
  },
  {
    id: 'rev-3',
    providerId: 'prov-2',
    userId: 'user-3',
    requestId: 'req-3',
    rating: 5,
    comment: 'Elektrik arızasını çok hızlı çözdü. Profesyonel yaklaşımı için teşekkürler.',
    createdAt: '2024-02-01T09:00:00Z',
    verified: true
  },
  {
    id: 'rev-4',
    providerId: 'prov-3',
    userId: 'user-4',
    requestId: 'req-4',
    rating: 4,
    comment: 'Tıkanıklık sorununu hızlıca çözdü. Fiyatı da uygundu.',
    createdAt: '2024-02-10T16:45:00Z',
    verified: true
  },
  {
    id: 'rev-5',
    providerId: 'prov-4',
    userId: 'user-5',
    requestId: 'req-5',
    rating: 5,
    comment: 'Boyama işi mükemmel oldu. Çok temiz ve düzenli çalıştı.',
    createdAt: '2024-02-15T11:20:00Z',
    verified: true
  },
  {
    id: 'rev-6',
    providerId: 'prov-5',
    userId: 'user-6',
    requestId: 'req-6',
    rating: 5,
    comment: 'IKEA mobilyaları çok hızlı monte etti. Çok memnun kaldım.',
    createdAt: '2024-02-20T13:30:00Z',
    verified: true
  },
  {
    id: 'rev-7',
    providerId: 'prov-6',
    userId: 'user-7',
    requestId: 'req-7',
    rating: 5,
    comment: 'Bebek bakıcısı çok iyi. Çocuğumuz çok sevdi. Güvenilir bir kişi.',
    createdAt: '2024-03-01T10:00:00Z',
    verified: true
  },
  {
    id: 'rev-8',
    providerId: 'prov-7',
    userId: 'user-8',
    requestId: 'req-8',
    rating: 4,
    comment: 'Yaşlı bakım hizmeti için teşekkürler. Dikkatli ve özenli.',
    createdAt: '2024-03-05T15:00:00Z',
    verified: true
  },
  {
    id: 'rev-9',
    providerId: 'prov-8',
    userId: 'user-1',
    requestId: 'req-9',
    rating: 4,
    comment: 'Bahçe düzenlemesi güzel oldu. İyi bir iş çıkardı.',
    createdAt: '2024-03-10T12:00:00Z',
    verified: true
  },
  {
    id: 'rev-10',
    providerId: 'prov-9',
    userId: 'user-2',
    requestId: 'req-10',
    rating: 5,
    comment: 'Ofis temizliği için harika bir ekip. Çok memnun kaldık.',
    createdAt: '2024-03-15T09:30:00Z',
    verified: true
  }
];

export function getReviewsByProviderId(providerId: string): Review[] {
  return mockReviews.filter(review => review.providerId === providerId);
}
