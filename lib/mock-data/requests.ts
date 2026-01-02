import { Request } from '@/lib/types/request';
import { Offer } from '@/lib/types/offer';

const mockOffers: Offer[] = [
  {
    id: 'offer-1',
    requestId: 'req-1',
    providerId: 'prov-1',
    price: 800,
    description: 'Temizlik hizmeti için teklifim. 3 saat içinde tamamlanır.',
    estimatedDuration: '3 saat',
    status: 'pending',
    createdAt: '2024-01-10T10:00:00Z'
  },
  {
    id: 'offer-2',
    requestId: 'req-1',
    providerId: 'prov-9',
    price: 1000,
    description: 'Profesyonel temizlik ekibi ile hızlı ve kaliteli hizmet.',
    estimatedDuration: '2-3 saat',
    status: 'pending',
    createdAt: '2024-01-10T11:30:00Z'
  },
  {
    id: 'offer-3',
    requestId: 'req-2',
    providerId: 'prov-2',
    price: 500,
    description: 'Elektrik arızası için teklif. Aynı gün içinde çözülür.',
    estimatedDuration: '1-2 saat',
    status: 'accepted',
    createdAt: '2024-01-15T09:00:00Z'
  }
];

export const mockRequests: Request[] = [
  {
    id: 'req-1',
    userId: 'user-1',
    serviceId: 'svc-1',
    title: 'Ev Temizliği',
    description: '3+1 daire için genel temizlik hizmeti gerekiyor.',
    status: 'active',
    createdAt: '2024-01-10T08:00:00Z',
    scheduledDate: '2024-01-15T10:00:00Z',
    location: {
      city: 'İstanbul',
      district: 'Kadıköy',
      address: 'Moda Caddesi No:123',
      coordinates: { lat: 40.9883, lng: 29.0233 }
    },
    budget: { min: 500, max: 1200 },
    offers: mockOffers.filter(o => o.requestId === 'req-1')
  },
  {
    id: 'req-2',
    userId: 'user-2',
    providerId: 'prov-2',
    serviceId: 'svc-4',
    title: 'Elektrik Arızası',
    description: 'Priz çalışmıyor, elektrikçi gerekiyor.',
    status: 'accepted',
    createdAt: '2024-01-15T08:00:00Z',
    scheduledDate: '2024-01-16T14:00:00Z',
    location: {
      city: 'İstanbul',
      district: 'Beşiktaş',
      address: 'Barbaros Bulvarı No:45',
      coordinates: { lat: 41.0422, lng: 29.0084 }
    },
    budget: { min: 300, max: 600 },
    offers: mockOffers.filter(o => o.requestId === 'req-2'),
    selectedOfferId: 'offer-3'
  },
  {
    id: 'req-3',
    userId: 'user-3',
    serviceId: 'svc-5',
    title: 'Su Tesisatı',
    description: 'Lavabo tıkanıklığı var, acil çözüm gerekiyor.',
    status: 'pending',
    createdAt: '2024-02-01T10:00:00Z',
    location: {
      city: 'İstanbul',
      district: 'Şişli',
      address: 'Halaskargazi Caddesi No:78',
      coordinates: { lat: 41.0602, lng: 28.9874 }
    },
    budget: { min: 400, max: 800 },
    offers: []
  },
  {
    id: 'req-4',
    userId: 'user-4',
    providerId: 'prov-3',
    serviceId: 'svc-5',
    title: 'Tıkanıklık Açma',
    description: 'Banyo gideri tıkanmış, tesisatçı gerekiyor.',
    status: 'completed',
    createdAt: '2024-02-10T09:00:00Z',
    scheduledDate: '2024-02-12T10:00:00Z',
    location: {
      city: 'İstanbul',
      district: 'Şişli',
      address: 'Halaskargazi Caddesi No:78',
      coordinates: { lat: 41.0602, lng: 28.9874 }
    },
    budget: { min: 400, max: 1000 },
    offers: [],
    selectedOfferId: 'offer-4'
  },
  {
    id: 'req-5',
    userId: 'user-5',
    serviceId: 'svc-6',
    title: 'İç Cephe Boyama',
    description: 'Salon ve yatak odası için boyama işi.',
    status: 'pending',
    createdAt: '2024-02-15T11:00:00Z',
    location: {
      city: 'İstanbul',
      district: 'Ümraniye',
      address: 'Atatürk Mahallesi No:56',
      coordinates: { lat: 41.0214, lng: 29.1108 }
    },
    budget: { min: 2500, max: 5000 },
    offers: []
  }
];

export function getRequestById(id: string): Request | undefined {
  return mockRequests.find(r => r.id === id);
}

export function getRequestsByUserId(userId: string): Request[] {
  return mockRequests.filter(r => r.userId === userId);
}

export function getOffersByRequestId(requestId: string): Offer[] {
  return mockOffers.filter(o => o.requestId === requestId);
}
