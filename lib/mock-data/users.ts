import { User, UserProfile } from '@/lib/types/user';

export const mockUsers: User[] = [
  {
    id: 'user-1',
    email: 'ahmet.yilmaz@example.com',
    name: 'Ahmet Yılmaz',
    phone: '+90 532 123 4567',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    role: 'user',
    createdAt: '2023-01-15',
    verified: true
  },
  {
    id: 'user-2',
    email: 'ayse.demir@example.com',
    name: 'Ayşe Demir',
    phone: '+90 533 234 5678',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    role: 'user',
    createdAt: '2023-02-20',
    verified: true
  },
  {
    id: 'user-3',
    email: 'mehmet.kaya@example.com',
    name: 'Mehmet Kaya',
    phone: '+90 534 345 6789',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
    role: 'user',
    createdAt: '2023-03-10',
    verified: false
  },
  {
    id: 'user-4',
    email: 'fatma.oz@example.com',
    name: 'Fatma Öz',
    phone: '+90 535 456 7890',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    role: 'user',
    createdAt: '2023-04-05',
    verified: true
  },
  {
    id: 'user-5',
    email: 'ali.celik@example.com',
    name: 'Ali Çelik',
    phone: '+90 536 567 8901',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    role: 'user',
    createdAt: '2023-05-12',
    verified: true
  },
  {
    id: 'user-6',
    email: 'zeynep.arslan@example.com',
    name: 'Zeynep Arslan',
    phone: '+90 537 678 9012',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    role: 'user',
    createdAt: '2023-06-18',
    verified: false
  },
  {
    id: 'user-7',
    email: 'mustafa.yildiz@example.com',
    name: 'Mustafa Yıldız',
    phone: '+90 538 789 0123',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    role: 'user',
    createdAt: '2023-07-22',
    verified: true
  },
  {
    id: 'user-8',
    email: 'elif.sahin@example.com',
    name: 'Elif Şahin',
    phone: '+90 539 890 1234',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    role: 'user',
    createdAt: '2023-08-30',
    verified: true
  },
  {
    id: 'admin-1',
    email: 'admin@platform.com',
    name: 'Platform Admin',
    phone: '+90 212 123 4567',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    role: 'admin',
    createdAt: '2020-01-01',
    verified: true
  }
];

export const mockUserProfiles: UserProfile[] = mockUsers.map(user => ({
  ...user,
  bio: user.role === 'user' ? `${user.name} kullanıcısı` : undefined,
  location: {
    city: 'İstanbul',
    district: ['Kadıköy', 'Beşiktaş', 'Şişli', 'Üsküdar', 'Bakırköy', 'Ataşehir', 'Maltepe', 'Nişantaşı'][Math.floor(Math.random() * 8)]
  },
  preferences: {
    notifications: true,
    language: 'tr'
  }
}));
