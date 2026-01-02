export interface Review {
  id: string;
  providerId: string;
  userId: string;
  requestId: string;
  rating: number;
  comment: string;
  createdAt: string;
  verified: boolean;
}
