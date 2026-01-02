export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  avatar?: string;
  role: 'user' | 'provider' | 'admin';
  createdAt: string;
  verified: boolean;
}

export interface UserProfile extends User {
  bio?: string;
  location?: {
    city: string;
    district: string;
  };
  preferences?: {
    notifications: boolean;
    language: string;
  };
}
