import { Provider, Service } from '@/lib/types/provider';

const services: Service[] = [
  {
    id: 'svc-1',
    name: 'Temel Temizlik',
    description: 'Genel ev temizliği, toz alma, yer silme',
    price: 500,
    duration: '2-3 saat',
    category: 'Temizlik',
    features: ['Toz alma', 'Yer silme', 'Banyo temizliği', 'Mutfak temizliği']
  },
  {
    id: 'svc-2',
    name: 'Derinlemesine Temizlik',
    description: 'Detaylı ev temizliği, cam silme, fırın temizliği',
    price: 1200,
    duration: '4-5 saat',
    category: 'Temizlik',
    features: ['Derinlemesine temizlik', 'Cam silme', 'Fırın temizliği', 'Dolap içi temizlik']
  },
  {
    id: 'svc-3',
    name: 'Ofis Temizliği',
    description: 'Ofis ve iş yeri temizliği',
    price: 800,
    duration: '3-4 saat',
    category: 'Temizlik',
    features: ['Ofis temizliği', 'Masa düzenleme', 'Çöp toplama']
  },
  {
    id: 'svc-4',
    name: 'Elektrik Tesisatı',
    description: 'Elektrik arızaları, priz montajı, aydınlatma',
    price: 300,
    duration: '1-2 saat',
    category: 'Elektrik',
    features: ['Arıza tespiti', 'Priz montajı', 'Aydınlatma kurulumu']
  },
  {
    id: 'svc-5',
    name: 'Su Tesisatı',
    description: 'Tıkanıklık açma, musluk tamiri, boru değişimi',
    price: 400,
    duration: '1-3 saat',
    category: 'Tesisat',
    features: ['Tıkanıklık açma', 'Musluk tamiri', 'Boru değişimi']
  },
  {
    id: 'svc-6',
    name: 'Boyama İşleri',
    description: 'İç ve dış cephe boyama',
    price: 2500,
    duration: '1-2 gün',
    category: 'Boyama',
    features: ['İç cephe boyama', 'Dış cephe boyama', 'Astarlama']
  },
  {
    id: 'svc-7',
    name: 'Mobilya Montajı',
    description: 'IKEA ve diğer mobilya montajı',
    price: 200,
    duration: '1-2 saat',
    category: 'Montaj',
    features: ['Mobilya montajı', 'Araç gereç temini']
  },
  {
    id: 'svc-8',
    name: 'Bebek Bakıcılığı',
    description: 'Profesyonel bebek bakım hizmeti',
    price: 150,
    duration: 'Saatlik',
    category: 'Bakım',
    features: ['Bebek bakımı', 'Yemek hazırlama', 'Oyun aktiviteleri']
  },
  {
    id: 'svc-9',
    name: 'Yaşlı Bakımı',
    description: 'Yaşlı bakım ve refakat hizmeti',
    price: 200,
    duration: 'Saatlik',
    category: 'Bakım',
    features: ['Kişisel bakım', 'İlaç takibi', 'Yemek hazırlama']
  },
  {
    id: 'svc-10',
    name: 'Bahçe Düzenleme',
    description: 'Bahçe bakımı, çim biçme, ağaç budama',
    price: 600,
    duration: '2-4 saat',
    category: 'Bahçe',
    features: ['Çim biçme', 'Ağaç budama', 'Bitki bakımı']
  }
];

export const mockProviders: Provider[] = [
  {
    id: 'prov-1',
    name: 'Temizlik Uzmanı Ahmet',
    category: ['Temizlik', 'Ev İşleri'],
    location: {
      city: 'İstanbul',
      district: 'Kadıköy',
      address: 'Moda Caddesi No:123',
      coordinates: { lat: 40.9883, lng: 29.0233 }
    },
    rating: 4.8,
    reviewCount: 127,
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=300&fit=crop'
    ],
    services: [services[0], services[1], services[2]],
    description: '10 yıllık deneyimle profesyonel temizlik hizmeti sunuyorum. Ev, ofis ve iş yerleri için kapsamlı temizlik çözümleri.',
    workingHours: {
      'Pazartesi': { open: '09:00', close: '18:00' },
      'Salı': { open: '09:00', close: '18:00' },
      'Çarşamba': { open: '09:00', close: '18:00' },
      'Perşembe': { open: '09:00', close: '18:00' },
      'Cuma': { open: '09:00', close: '18:00' },
      'Cumartesi': { open: '10:00', close: '16:00' },
      'Pazar': { closed: true }
    },
    verified: true,
    joinedDate: '2022-01-15',
    responseTime: '1 saat içinde',
    priceRange: { min: 500, max: 1200 },
    languages: ['Türkçe', 'İngilizce'],
    certifications: ['Temizlik Sertifikası', 'Güvenlik Eğitimi']
  },
  {
    id: 'prov-2',
    name: 'Elektrikçi Mehmet',
    category: ['Elektrik', 'Tesisat'],
    location: {
      city: 'İstanbul',
      district: 'Beşiktaş',
      address: 'Barbaros Bulvarı No:45',
      coordinates: { lat: 41.0422, lng: 29.0084 }
    },
    rating: 4.9,
    reviewCount: 89,
    profileImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    ],
    services: [services[3]],
    description: '15 yıllık deneyimli elektrikçi. Tüm elektrik işleriniz için 7/24 hizmet.',
    workingHours: {
      'Pazartesi': { open: '08:00', close: '20:00' },
      'Salı': { open: '08:00', close: '20:00' },
      'Çarşamba': { open: '08:00', close: '20:00' },
      'Perşembe': { open: '08:00', close: '20:00' },
      'Cuma': { open: '08:00', close: '20:00' },
      'Cumartesi': { open: '09:00', close: '18:00' },
      'Pazar': { open: '10:00', close: '16:00' }
    },
    verified: true,
    joinedDate: '2021-03-20',
    responseTime: '30 dakika içinde',
    priceRange: { min: 300, max: 800 },
    languages: ['Türkçe'],
    certifications: ['Elektrik Teknisyeni Sertifikası']
  },
  {
    id: 'prov-3',
    name: 'Tesisatçı Ali',
    category: ['Tesisat', 'Su Tesisatı'],
    location: {
      city: 'İstanbul',
      district: 'Şişli',
      address: 'Halaskargazi Caddesi No:78',
      coordinates: { lat: 41.0602, lng: 28.9874 }
    },
    rating: 4.7,
    reviewCount: 156,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop'
    ],
    services: [services[4]],
    description: 'Acil tıkanıklık açma ve tüm su tesisatı işleri. Hızlı ve güvenilir hizmet.',
    workingHours: {
      'Pazartesi': { open: '08:00', close: '20:00' },
      'Salı': { open: '08:00', close: '20:00' },
      'Çarşamba': { open: '08:00', close: '20:00' },
      'Perşembe': { open: '08:00', close: '20:00' },
      'Cuma': { open: '08:00', close: '20:00' },
      'Cumartesi': { open: '09:00', close: '18:00' },
      'Pazar': { open: '10:00', close: '16:00' }
    },
    verified: true,
    joinedDate: '2020-11-10',
    responseTime: '45 dakika içinde',
    priceRange: { min: 400, max: 1000 },
    languages: ['Türkçe'],
    certifications: ['Tesisatçı Belgesi']
  },
  {
    id: 'prov-4',
    name: 'Boyacı Hasan',
    category: ['Boyama', 'İnşaat'],
    location: {
      city: 'İstanbul',
      district: 'Ümraniye',
      address: 'Atatürk Mahallesi No:56',
      coordinates: { lat: 41.0214, lng: 29.1108 }
    },
    rating: 4.6,
    reviewCount: 94,
    profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=300&fit=crop'
    ],
    services: [services[5]],
    description: 'İç ve dış cephe boyama işleri. Kaliteli malzeme ve işçilik garantisi.',
    workingHours: {
      'Pazartesi': { open: '08:00', close: '18:00' },
      'Salı': { open: '08:00', close: '18:00' },
      'Çarşamba': { open: '08:00', close: '18:00' },
      'Perşembe': { open: '08:00', close: '18:00' },
      'Cuma': { open: '08:00', close: '18:00' },
      'Cumartesi': { open: '09:00', close: '16:00' },
      'Pazar': { closed: true }
    },
    verified: true,
    joinedDate: '2021-07-05',
    responseTime: '2 saat içinde',
    priceRange: { min: 2500, max: 5000 },
    languages: ['Türkçe'],
    certifications: ['Boyacı Sertifikası']
  },
  {
    id: 'prov-5',
    name: 'Montaj Uzmanı Fatih',
    category: ['Montaj', 'Mobilya'],
    location: {
      city: 'İstanbul',
      district: 'Bakırköy',
      address: 'Zuhuratbaba Mahallesi No:12',
      coordinates: { lat: 40.9833, lng: 28.8667 }
    },
    rating: 4.8,
    reviewCount: 203,
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop'
    ],
    services: [services[6]],
    description: 'IKEA ve tüm marka mobilya montajı. Hızlı ve profesyonel hizmet.',
    workingHours: {
      'Pazartesi': { open: '09:00', close: '19:00' },
      'Salı': { open: '09:00', close: '19:00' },
      'Çarşamba': { open: '09:00', close: '19:00' },
      'Perşembe': { open: '09:00', close: '19:00' },
      'Cuma': { open: '09:00', close: '19:00' },
      'Cumartesi': { open: '10:00', close: '18:00' },
      'Pazar': { open: '10:00', close: '16:00' }
    },
    verified: true,
    joinedDate: '2022-05-12',
    responseTime: '1 saat içinde',
    priceRange: { min: 200, max: 500 },
    languages: ['Türkçe', 'İngilizce'],
    certifications: ['Montaj Sertifikası']
  },
  {
    id: 'prov-6',
    name: 'Bebek Bakıcısı Ayşe',
    category: ['Bakım', 'Bebek Bakımı'],
    location: {
      city: 'İstanbul',
      district: 'Ataşehir',
      address: 'Ataşehir Bulvarı No:234',
      coordinates: { lat: 40.9833, lng: 29.1167 }
    },
    rating: 4.9,
    reviewCount: 67,
    profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop'
    ],
    services: [services[7]],
    description: 'Pedagog eğitimi almış, deneyimli bebek bakıcısı. Güvenilir ve sevgi dolu hizmet.',
    workingHours: {
      'Pazartesi': { open: '08:00', close: '20:00' },
      'Salı': { open: '08:00', close: '20:00' },
      'Çarşamba': { open: '08:00', close: '20:00' },
      'Perşembe': { open: '08:00', close: '20:00' },
      'Cuma': { open: '08:00', close: '20:00' },
      'Cumartesi': { open: '09:00', close: '18:00' },
      'Pazar': { open: '10:00', close: '16:00' }
    },
    verified: true,
    joinedDate: '2023-02-18',
    responseTime: '2 saat içinde',
    priceRange: { min: 150, max: 250 },
    languages: ['Türkçe', 'İngilizce'],
    certifications: ['Pedagog Sertifikası', 'İlk Yardım Sertifikası']
  },
  {
    id: 'prov-7',
    name: 'Yaşlı Bakım Uzmanı Zeynep',
    category: ['Bakım', 'Yaşlı Bakımı'],
    location: {
      city: 'İstanbul',
      district: 'Maltepe',
      address: 'Bağlarbaşı Mahallesi No:89',
      coordinates: { lat: 40.9333, lng: 29.1500 }
    },
    rating: 4.8,
    reviewCount: 112,
    profileImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop'
    ],
    services: [services[8]],
    description: 'Hemşire eğitimi almış, deneyimli yaşlı bakım uzmanı. Sağlık ve refakat hizmetleri.',
    workingHours: {
      'Pazartesi': { open: '08:00', close: '20:00' },
      'Salı': { open: '08:00', close: '20:00' },
      'Çarşamba': { open: '08:00', close: '20:00' },
      'Perşembe': { open: '08:00', close: '20:00' },
      'Cuma': { open: '08:00', close: '20:00' },
      'Cumartesi': { open: '09:00', close: '18:00' },
      'Pazar': { open: '10:00', close: '16:00' }
    },
    verified: true,
    joinedDate: '2022-09-25',
    responseTime: '1 saat içinde',
    priceRange: { min: 200, max: 300 },
    languages: ['Türkçe'],
    certifications: ['Hemşire Sertifikası', 'Yaşlı Bakım Sertifikası']
  },
  {
    id: 'prov-8',
    name: 'Bahçıvan Mustafa',
    category: ['Bahçe', 'Peyzaj'],
    location: {
      city: 'İstanbul',
      district: 'Beykoz',
      address: 'Çubuklu Mahallesi No:45',
      coordinates: { lat: 41.1167, lng: 29.0833 }
    },
    rating: 4.7,
    reviewCount: 78,
    profileImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop'
    ],
    services: [services[9]],
    description: 'Bahçe düzenleme, çim biçme, ağaç budama ve bitki bakımı. Profesyonel peyzaj hizmetleri.',
    workingHours: {
      'Pazartesi': { open: '07:00', close: '17:00' },
      'Salı': { open: '07:00', close: '17:00' },
      'Çarşamba': { open: '07:00', close: '17:00' },
      'Perşembe': { open: '07:00', close: '17:00' },
      'Cuma': { open: '07:00', close: '17:00' },
      'Cumartesi': { open: '08:00', close: '15:00' },
      'Pazar': { closed: true }
    },
    verified: true,
    joinedDate: '2021-04-10',
    responseTime: '3 saat içinde',
    priceRange: { min: 600, max: 1500 },
    languages: ['Türkçe'],
    certifications: ['Peyzaj Sertifikası']
  },
  {
    id: 'prov-9',
    name: 'Temizlik Ekibi',
    category: ['Temizlik', 'Ofis Temizliği'],
    location: {
      city: 'İstanbul',
      district: 'Levent',
      address: 'Büyükdere Caddesi No:123',
      coordinates: { lat: 41.0833, lng: 29.0167 }
    },
    rating: 4.6,
    reviewCount: 145,
    profileImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=150&h=150&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop'
    ],
    services: [services[2], services[1]],
    description: 'Büyük ofis ve iş yerleri için profesyonel temizlik ekibi. Haftalık ve aylık paketler.',
    workingHours: {
      'Pazartesi': { open: '06:00', close: '22:00' },
      'Salı': { open: '06:00', close: '22:00' },
      'Çarşamba': { open: '06:00', close: '22:00' },
      'Perşembe': { open: '06:00', close: '22:00' },
      'Cuma': { open: '06:00', close: '22:00' },
      'Cumartesi': { open: '08:00', close: '18:00' },
      'Pazar': { open: '09:00', close: '16:00' }
    },
    verified: true,
    joinedDate: '2020-08-15',
    responseTime: '2 saat içinde',
    priceRange: { min: 800, max: 2000 },
    languages: ['Türkçe', 'İngilizce'],
    certifications: ['Temizlik Sertifikası', 'Güvenlik Eğitimi']
  },
  {
    id: 'prov-10',
    name: 'Elektrik Servisi',
    category: ['Elektrik', 'Acil Servis'],
    location: {
      city: 'İstanbul',
      district: 'Kartal',
      address: 'Yakacık Mahallesi No:67',
      coordinates: { lat: 40.9000, lng: 29.1833 }
    },
    rating: 4.9,
    reviewCount: 234,
    profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop'
    ],
    services: [services[3]],
    description: '7/24 acil elektrik servisi. Tüm elektrik arızaları için hızlı çözüm.',
    workingHours: {
      'Pazartesi': { open: '00:00', close: '23:59' },
      'Salı': { open: '00:00', close: '23:59' },
      'Çarşamba': { open: '00:00', close: '23:59' },
      'Perşembe': { open: '00:00', close: '23:59' },
      'Cuma': { open: '00:00', close: '23:59' },
      'Cumartesi': { open: '00:00', close: '23:59' },
      'Pazar': { open: '00:00', close: '23:59' }
    },
    verified: true,
    joinedDate: '2019-12-01',
    responseTime: '15 dakika içinde',
    priceRange: { min: 300, max: 1000 },
    languages: ['Türkçe'],
    certifications: ['Elektrik Teknisyeni Sertifikası', 'Acil Servis Belgesi']
  },
  {
    id: 'prov-11',
    name: 'Profesyonel Temizlik',
    category: ['Temizlik'],
    location: {
      city: 'İstanbul',
      district: 'Nişantaşı',
      address: 'Teşvikiye Caddesi No:12',
      coordinates: { lat: 41.0500, lng: 28.9833 }
    },
    rating: 4.8,
    reviewCount: 98,
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop'
    ],
    services: [services[0], services[1]],
    description: 'Lüks konut ve villalar için özel temizlik hizmeti. Detaylı ve özenli çalışma.',
    workingHours: {
      'Pazartesi': { open: '09:00', close: '18:00' },
      'Salı': { open: '09:00', close: '18:00' },
      'Çarşamba': { open: '09:00', close: '18:00' },
      'Perşembe': { open: '09:00', close: '18:00' },
      'Cuma': { open: '09:00', close: '18:00' },
      'Cumartesi': { open: '10:00', close: '16:00' },
      'Pazar': { closed: true }
    },
    verified: true,
    joinedDate: '2022-03-20',
    responseTime: '1 saat içinde',
    priceRange: { min: 800, max: 2000 },
    languages: ['Türkçe', 'İngilizce', 'Rusça'],
    certifications: ['Temizlik Sertifikası']
  },
  {
    id: 'prov-12',
    name: 'Hızlı Tesisat',
    category: ['Tesisat'],
    location: {
      city: 'İstanbul',
      district: 'Pendik',
      address: 'Kurtköy Mahallesi No:34',
      coordinates: { lat: 40.8833, lng: 29.2333 }
    },
    rating: 4.7,
    reviewCount: 167,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop'
    ],
    services: [services[4]],
    description: 'Acil tıkanıklık açma ve su tesisatı işleri. 30 dakika içinde hizmet.',
    workingHours: {
      'Pazartesi': { open: '08:00', close: '20:00' },
      'Salı': { open: '08:00', close: '20:00' },
      'Çarşamba': { open: '08:00', close: '20:00' },
      'Perşembe': { open: '08:00', close: '20:00' },
      'Cuma': { open: '08:00', close: '20:00' },
      'Cumartesi': { open: '09:00', close: '18:00' },
      'Pazar': { open: '10:00', close: '16:00' }
    },
    verified: true,
    joinedDate: '2021-06-15',
    responseTime: '30 dakika içinde',
    priceRange: { min: 400, max: 1200 },
    languages: ['Türkçe'],
    certifications: ['Tesisatçı Belgesi']
  },
  {
    id: 'prov-13',
    name: 'İnşaat Boyacı',
    category: ['Boyama', 'İnşaat'],
    location: {
      city: 'İstanbul',
      district: 'Beylikdüzü',
      address: 'Yakuplu Mahallesi No:78',
      coordinates: { lat: 41.0000, lng: 28.6333 }
    },
    rating: 4.5,
    reviewCount: 76,
    profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop'
    ],
    services: [services[5]],
    description: 'İnşaat ve boyama işleri. Büyük projeler için özel fiyatlandırma.',
    workingHours: {
      'Pazartesi': { open: '07:00', close: '19:00' },
      'Salı': { open: '07:00', close: '19:00' },
      'Çarşamba': { open: '07:00', close: '19:00' },
      'Perşembe': { open: '07:00', close: '19:00' },
      'Cuma': { open: '07:00', close: '19:00' },
      'Cumartesi': { open: '08:00', close: '17:00' },
      'Pazar': { closed: true }
    },
    verified: true,
    joinedDate: '2022-11-08',
    responseTime: '3 saat içinde',
    priceRange: { min: 2000, max: 8000 },
    languages: ['Türkçe'],
    certifications: ['Boyacı Sertifikası', 'İnşaat Sertifikası']
  },
  {
    id: 'prov-14',
    name: 'Mobilya Montaj Servisi',
    category: ['Montaj'],
    location: {
      city: 'İstanbul',
      district: 'Avcılar',
      address: 'Ambarlı Mahallesi No:23',
      coordinates: { lat: 41.0167, lng: 28.7167 }
    },
    rating: 4.8,
    reviewCount: 189,
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop'
    ],
    services: [services[6]],
    description: 'Tüm mobilya markaları için montaj hizmeti. Hızlı ve güvenilir.',
    workingHours: {
      'Pazartesi': { open: '09:00', close: '19:00' },
      'Salı': { open: '09:00', close: '19:00' },
      'Çarşamba': { open: '09:00', close: '19:00' },
      'Perşembe': { open: '09:00', close: '19:00' },
      'Cuma': { open: '09:00', close: '19:00' },
      'Cumartesi': { open: '10:00', close: '18:00' },
      'Pazar': { open: '10:00', close: '16:00' }
    },
    verified: true,
    joinedDate: '2023-01-10',
    responseTime: '1 saat içinde',
    priceRange: { min: 200, max: 600 },
    languages: ['Türkçe'],
    certifications: ['Montaj Sertifikası']
  },
  {
    id: 'prov-15',
    name: 'Çocuk Bakıcısı Elif',
    category: ['Bakım', 'Bebek Bakımı'],
    location: {
      city: 'İstanbul',
      district: 'Üsküdar',
      address: 'Kuzguncuk Mahallesi No:56',
      coordinates: { lat: 41.0167, lng: 29.0167 }
    },
    rating: 4.9,
    reviewCount: 54,
    profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop'
    ],
    services: [services[7]],
    description: 'Çocuk gelişimi uzmanı. Eğitici aktiviteler ve güvenli bakım.',
    workingHours: {
      'Pazartesi': { open: '08:00', close: '20:00' },
      'Salı': { open: '08:00', close: '20:00' },
      'Çarşamba': { open: '08:00', close: '20:00' },
      'Perşembe': { open: '08:00', close: '20:00' },
      'Cuma': { open: '08:00', close: '20:00' },
      'Cumartesi': { open: '09:00', close: '18:00' },
      'Pazar': { open: '10:00', close: '16:00' }
    },
    verified: true,
    joinedDate: '2023-05-20',
    responseTime: '2 saat içinde',
    priceRange: { min: 150, max: 250 },
    languages: ['Türkçe', 'İngilizce'],
    certifications: ['Çocuk Gelişimi Sertifikası', 'İlk Yardım Sertifikası']
  },
  {
    id: 'prov-16',
    name: 'Yaşlı Refakat Hizmeti',
    category: ['Bakım', 'Yaşlı Bakımı'],
    location: {
      city: 'İstanbul',
      district: 'Zeytinburnu',
      address: 'Telsiz Mahallesi No:90',
      coordinates: { lat: 41.0167, lng: 28.9000 }
    },
    rating: 4.7,
    reviewCount: 98,
    profileImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop'
    ],
    services: [services[8]],
    description: 'Yaşlı bakım ve refakat hizmeti. Sağlık takibi ve kişisel bakım.',
    workingHours: {
      'Pazartesi': { open: '08:00', close: '20:00' },
      'Salı': { open: '08:00', close: '20:00' },
      'Çarşamba': { open: '08:00', close: '20:00' },
      'Perşembe': { open: '08:00', close: '20:00' },
      'Cuma': { open: '08:00', close: '20:00' },
      'Cumartesi': { open: '09:00', close: '18:00' },
      'Pazar': { open: '10:00', close: '16:00' }
    },
    verified: true,
    joinedDate: '2022-07-12',
    responseTime: '1 saat içinde',
    priceRange: { min: 200, max: 350 },
    languages: ['Türkçe'],
    certifications: ['Yaşlı Bakım Sertifikası', 'Hemşire Sertifikası']
  },
  {
    id: 'prov-17',
    name: 'Peyzaj Tasarım',
    category: ['Bahçe', 'Peyzaj'],
    location: {
      city: 'İstanbul',
      district: 'Sarıyer',
      address: 'Kilyos Mahallesi No:12',
      coordinates: { lat: 41.1833, lng: 29.0333 }
    },
    rating: 4.8,
    reviewCount: 65,
    profileImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop'
    ],
    services: [services[9]],
    description: 'Bahçe tasarımı ve düzenleme. Profesyonel peyzaj hizmetleri.',
    workingHours: {
      'Pazartesi': { open: '07:00', close: '17:00' },
      'Salı': { open: '07:00', close: '17:00' },
      'Çarşamba': { open: '07:00', close: '17:00' },
      'Perşembe': { open: '07:00', close: '17:00' },
      'Cuma': { open: '07:00', close: '17:00' },
      'Cumartesi': { open: '08:00', close: '15:00' },
      'Pazar': { closed: true }
    },
    verified: true,
    joinedDate: '2021-09-30',
    responseTime: '4 saat içinde',
    priceRange: { min: 800, max: 2000 },
    languages: ['Türkçe', 'İngilizce'],
    certifications: ['Peyzaj Mimarı Sertifikası']
  },
  {
    id: 'prov-18',
    name: 'Ev Temizlik Hizmeti',
    category: ['Temizlik'],
    location: {
      city: 'İstanbul',
      district: 'Çekmeköy',
      address: 'Alemdağ Mahallesi No:45',
      coordinates: { lat: 41.0333, lng: 29.1833 }
    },
    rating: 4.6,
    reviewCount: 112,
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop'
    ],
    services: [services[0], services[1]],
    description: 'Düzenli ev temizlik hizmeti. Haftalık ve aylık paketler mevcut.',
    workingHours: {
      'Pazartesi': { open: '09:00', close: '18:00' },
      'Salı': { open: '09:00', close: '18:00' },
      'Çarşamba': { open: '09:00', close: '18:00' },
      'Perşembe': { open: '09:00', close: '18:00' },
      'Cuma': { open: '09:00', close: '18:00' },
      'Cumartesi': { open: '10:00', close: '16:00' },
      'Pazar': { closed: true }
    },
    verified: true,
    joinedDate: '2022-04-05',
    responseTime: '2 saat içinde',
    priceRange: { min: 500, max: 1500 },
    languages: ['Türkçe'],
    certifications: ['Temizlik Sertifikası']
  },
  {
    id: 'prov-19',
    name: 'Acil Elektrik',
    category: ['Elektrik'],
    location: {
      city: 'İstanbul',
      district: 'Sultangazi',
      address: 'Habipler Mahallesi No:67',
      coordinates: { lat: 41.1167, lng: 28.8667 }
    },
    rating: 4.8,
    reviewCount: 201,
    profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop'
    ],
    services: [services[3]],
    description: '7/24 acil elektrik servisi. Hızlı müdahale garantisi.',
    workingHours: {
      'Pazartesi': { open: '00:00', close: '23:59' },
      'Salı': { open: '00:00', close: '23:59' },
      'Çarşamba': { open: '00:00', close: '23:59' },
      'Perşembe': { open: '00:00', close: '23:59' },
      'Cuma': { open: '00:00', close: '23:59' },
      'Cumartesi': { open: '00:00', close: '23:59' },
      'Pazar': { open: '00:00', close: '23:59' }
    },
    verified: true,
    joinedDate: '2020-02-14',
    responseTime: '20 dakika içinde',
    priceRange: { min: 350, max: 900 },
    languages: ['Türkçe'],
    certifications: ['Elektrik Teknisyeni Sertifikası']
  },
  {
    id: 'prov-20',
    name: 'Su Tesisat Uzmanı',
    category: ['Tesisat'],
    location: {
      city: 'İstanbul',
      district: 'Başakşehir',
      address: 'Metrokent Mahallesi No:89',
      coordinates: { lat: 41.1000, lng: 28.8000 }
    },
    rating: 4.7,
    reviewCount: 143,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop'
    ],
    services: [services[4]],
    description: 'Su tesisatı ve tıkanıklık açma. Profesyonel ve hızlı çözüm.',
    workingHours: {
      'Pazartesi': { open: '08:00', close: '20:00' },
      'Salı': { open: '08:00', close: '20:00' },
      'Çarşamba': { open: '08:00', close: '20:00' },
      'Perşembe': { open: '08:00', close: '20:00' },
      'Cuma': { open: '08:00', close: '20:00' },
      'Cumartesi': { open: '09:00', close: '18:00' },
      'Pazar': { open: '10:00', close: '16:00' }
    },
    verified: true,
    joinedDate: '2021-10-22',
    responseTime: '45 dakika içinde',
    priceRange: { min: 400, max: 1100 },
    languages: ['Türkçe'],
    certifications: ['Tesisatçı Belgesi']
  },
  {
    id: 'prov-21',
    name: 'İç Cephe Boyacı',
    category: ['Boyama'],
    location: {
      city: 'İstanbul',
      district: 'Beyoğlu',
      address: 'İstiklal Caddesi No:234',
      coordinates: { lat: 41.0333, lng: 28.9833 }
    },
    rating: 4.6,
    reviewCount: 87,
    profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop'
    ],
    services: [services[5]],
    description: 'İç cephe boyama ve dekorasyon. Modern teknikler ve kaliteli malzeme.',
    workingHours: {
      'Pazartesi': { open: '08:00', close: '18:00' },
      'Salı': { open: '08:00', close: '18:00' },
      'Çarşamba': { open: '08:00', close: '18:00' },
      'Perşembe': { open: '08:00', close: '18:00' },
      'Cuma': { open: '08:00', close: '18:00' },
      'Cumartesi': { open: '09:00', close: '16:00' },
      'Pazar': { closed: true }
    },
    verified: true,
    joinedDate: '2022-08-18',
    responseTime: '2 saat içinde',
    priceRange: { min: 2500, max: 6000 },
    languages: ['Türkçe'],
    certifications: ['Boyacı Sertifikası']
  },
  {
    id: 'prov-22',
    name: 'Hızlı Montaj',
    category: ['Montaj'],
    location: {
      city: 'İstanbul',
      district: 'Gaziosmanpaşa',
      address: 'Yıldıztabya Mahallesi No:34',
      coordinates: { lat: 41.0667, lng: 28.9167 }
    },
    rating: 4.8,
    reviewCount: 176,
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop'
    ],
    services: [services[6]],
    description: 'Mobilya ve aksesuar montajı. Aynı gün hizmet garantisi.',
    workingHours: {
      'Pazartesi': { open: '09:00', close: '19:00' },
      'Salı': { open: '09:00', close: '19:00' },
      'Çarşamba': { open: '09:00', close: '19:00' },
      'Perşembe': { open: '09:00', close: '19:00' },
      'Cuma': { open: '09:00', close: '19:00' },
      'Cumartesi': { open: '10:00', close: '18:00' },
      'Pazar': { open: '10:00', close: '16:00' }
    },
    verified: true,
    joinedDate: '2023-03-15',
    responseTime: '1 saat içinde',
    priceRange: { min: 200, max: 550 },
    languages: ['Türkçe'],
    certifications: ['Montaj Sertifikası']
  }
];
