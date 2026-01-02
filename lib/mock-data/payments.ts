import { Payment } from '@/lib/types/payment';

export const mockPayments: Payment[] = [
  {
    id: 'pay-1',
    requestId: 'req-2',
    amount: 500,
    status: 'held',
    escrowStatus: 'active',
    paymentMethod: 'Kredi Kartı',
    createdAt: '2024-01-16T10:00:00Z'
  },
  {
    id: 'pay-2',
    requestId: 'req-4',
    amount: 600,
    status: 'released',
    escrowStatus: 'released',
    paymentMethod: 'Banka Havalesi',
    createdAt: '2024-02-12T10:00:00Z',
    releasedAt: '2024-02-15T14:00:00Z'
  },
  {
    id: 'pay-3',
    requestId: 'req-1',
    amount: 800,
    status: 'pending',
    escrowStatus: 'active',
    paymentMethod: 'Kredi Kartı',
    createdAt: '2024-01-15T11:00:00Z'
  }
];

export function getPaymentByRequestId(requestId: string): Payment | undefined {
  return mockPayments.find(p => p.requestId === requestId);
}

export function getPaymentsByUserId(userId: string): Payment[] {
  // Mock: In real app, this would filter by user's requests
  return mockPayments;
}
