export interface Location {
  city: string;
  district: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface WorkingHours {
  [key: string]: {
    open?: string;
    close?: string;
    closed?: boolean;
  };
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  category: string;
  features: string[];
}

export interface Provider {
  id: string;
  name: string;
  category: string[];
  location: Location;
  rating: number;
  reviewCount: number;
  profileImage: string;
  coverImage: string;
  gallery: string[];
  services: Service[];
  description: string;
  workingHours: WorkingHours;
  verified: boolean;
  joinedDate: string;
  responseTime: string;
  priceRange: {
    min: number;
    max: number;
  };
  languages: string[];
  certifications: string[];
}
