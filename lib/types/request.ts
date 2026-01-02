import { Location } from './provider';

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

export type RequestStatus = 'pending' | 'active' | 'accepted' | 'completed' | 'cancelled';

export interface Request {
  id: string;
  userId: string;
  providerId?: string;
  serviceId: string;
  title: string;
  description: string;
  status: RequestStatus;
  createdAt: string;
  scheduledDate?: string;
  location: Location;
  budget: {
    min: number;
    max: number;
  };
  offers: Offer[];
  selectedOfferId?: string;
}
