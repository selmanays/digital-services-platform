export interface Offer {
  id: string;
  requestId: string;
  providerId: string;
  price: number;
  description: string;
  estimatedDuration: string;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: string;
}
