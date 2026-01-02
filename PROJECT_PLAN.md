# DİJİTAL HİZMET PLATFORMU - FRONTEND PROJE PLANI

## 📋 GENEL BAKIŞ

Bu doküman, Dijital Hizmet Platformu'nun frontend geliştirme planını detaylı olarak açıklamaktadır. Proje, PRD ve Platform Sistem Şeması dokümanlarına uygun olarak, sadece frontend katmanında geliştirilecek ve mock veri kullanılacaktır.

---

## 🎯 PROJE HEDEFLERİ

- **MVP Kapsamında Web Uygulaması**: Kullanıcı yolculuğunun tüm aşamalarını kapsayan, tam fonksiyonel bir frontend
- **Shadcn UI Bileşenleri**: Mevcut shadcn bileşenlerini değiştirmeden, sadece variant'larını kullanarak modern ve tutarlı bir tasarım
- **Mock Veri Altyapısı**: Gerçekçi ve kapsamlı mock veri yapısı ile tüm senaryoların test edilebilmesi
- **Responsive Tasarım**: Tüm ekran boyutlarında optimal kullanıcı deneyimi
- **SEO Uyumlu**: Next.js App Router ile SEO optimizasyonu

---

## 📁 PROJE YAPISI

```
app/
├── (auth)/
│   ├── login/
│   │   └── page.tsx
│   ├── register/
│   │   └── page.tsx
│   └── layout.tsx
├── (main)/
│   ├── layout.tsx (Ana layout - header, footer)
│   ├── page.tsx (Ana sayfa)
│   ├── search/
│   │   └── page.tsx (Arama sonuçları)
│   ├── provider/
│   │   └── [id]/
│   │       └── page.tsx (Hizmet sağlayıcı detay)
│   ├── request/
│   │   ├── create/
│   │   │   └── page.tsx (Talep oluşturma)
│   │   └── [id]/
│   │       └── page.tsx (Talep detay)
│   ├── messages/
│   │   ├── page.tsx (Mesaj listesi)
│   │   └── [id]/
│   │       └── page.tsx (Mesaj detay)
│   ├── dashboard/
│   │   ├── page.tsx (Kullanıcı paneli ana)
│   │   ├── requests/
│   │   │   └── page.tsx (Taleplerim)
│   │   ├── favorites/
│   │   │   └── page.tsx (Favorilerim)
│   │   └── settings/
│   │       └── page.tsx (Ayarlar)
│   └── provider-dashboard/
│       ├── page.tsx (Hizmet sağlayıcı paneli ana)
│       ├── profile/
│       │   └── page.tsx (Profil yönetimi)
│       ├── services/
│       │   └── page.tsx (Hizmet yönetimi)
│       ├── requests/
│       │   └── page.tsx (Gelen talepler)
│       ├── messages/
│       │   └── page.tsx (Mesajlar)
│       └── calendar/
│           └── page.tsx (Takvim & rezervasyon)
├── admin/
│   ├── layout.tsx (Admin layout)
│   ├── page.tsx (Admin dashboard)
│   ├── users/
│   │   └── page.tsx (Kullanıcı yönetimi)
│   ├── providers/
│   │   └── page.tsx (Hizmet sağlayıcı yönetimi)
│   ├── requests/
│   │   └── page.tsx (Talep yönetimi)
│   ├── payments/
│   │   └── page.tsx (Ödeme yönetimi)
│   ├── reports/
│   │   └── page.tsx (Raporlar)
│   └── settings/
│       └── page.tsx (Sistem ayarları)
├── layout.tsx (Root layout)
└── globals.css

components/
├── ui/ (Shadcn bileşenleri - DEĞİŞTİRİLMEYECEK)
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Sidebar.tsx
│   └── Navigation.tsx
├── provider/
│   ├── ProviderCard.tsx
│   ├── ProviderDetail.tsx
│   ├── ProviderFilters.tsx
│   ├── ProviderSearch.tsx
│   └── ServiceList.tsx
├── request/
│   ├── RequestForm.tsx
│   ├── RequestCard.tsx
│   ├── RequestDetail.tsx
│   └── RequestStatus.tsx
├── messaging/
│   ├── MessageList.tsx
│   ├── MessageThread.tsx
│   ├── MessageInput.tsx
│   └── MessageBubble.tsx
├── payment/
│   ├── PaymentForm.tsx
│   ├── PaymentSummary.tsx
│   └── EscrowStatus.tsx
├── review/
│   ├── ReviewCard.tsx
│   ├── ReviewForm.tsx
│   └── RatingDisplay.tsx
├── dashboard/
│   ├── StatsCard.tsx
│   ├── ActivityFeed.tsx
│   └── QuickActions.tsx
└── common/
    ├── SearchBar.tsx
    ├── FilterPanel.tsx
    ├── Pagination.tsx
    ├── LoadingSpinner.tsx
    └── EmptyState.tsx

lib/
├── utils.ts (Mevcut)
├── mock-data/
│   ├── providers.ts
│   ├── users.ts
│   ├── requests.ts
│   ├── messages.ts
│   ├── payments.ts
│   └── reviews.ts
└── types/
    ├── provider.ts
    ├── user.ts
    ├── request.ts
    ├── message.ts
    ├── payment.ts
    └── review.ts

hooks/
├── useAuth.ts
├── useProviders.ts
├── useRequests.ts
├── useMessages.ts
└── usePayments.ts
```

---

## 📄 SAYFA YAPISI VE ÖZELLİKLERİ

### 1. ANA SAYFA (`/`)
**Amaç**: Platforma ilk giriş noktası, keşif ve arama başlangıcı

**Bileşenler**:
- Hero section (arama barı ile)
- Popüler kategoriler
- Öne çıkan hizmet sağlayıcılar (carousel)
- Nasıl çalışır bölümü
- İstatistikler
- Footer

**Shadcn Bileşenleri**:
- `Card` (kategori ve provider kartları için)
- `Button` (CTA butonları)
- `Input` (arama barı)
- `Badge` (kategori etiketleri)

---

### 2. ARAMA SONUÇLARI (`/search`)
**Amaç**: Filtrelenmiş ve sıralanmış hizmet sağlayıcı listesi

**Bileşenler**:
- Gelişmiş filtre paneli (sidebar)
- Arama sonuçları grid/list görünümü
- Sıralama seçenekleri
- Sayfalama
- Harita görünümü (opsiyonel)

**Shadcn Bileşenleri**:
- `Select` (sıralama ve filtreler için)
- `Card` (provider kartları)
- `Separator` (bölüm ayırıcı)
- `Combobox` (kategori seçimi)
- `Input` (fiyat aralığı, konum)

---

### 3. HİZMET SAĞLAYICI DETAY (`/provider/[id]`)
**Amaç**: Hizmet sağlayıcının detaylı profil sayfası

**Bileşenler**:
- Profil başlığı (fotoğraf, isim, konum, rating)
- Hizmet listesi ve fiyatlandırma
- Galeri
- Yorumlar ve değerlendirmeler
- Talep oluştur butonu
- İletişim bilgileri
- Çalışma saatleri
- Harita (konum)

**Shadcn Bileşenleri**:
- `Card` (her bölüm için)
- `Badge` (hizmet etiketleri, özellikler)
- `Button` (talep oluştur, mesaj gönder)
- `Separator` (bölüm ayırıcı)
- `AlertDialog` (onay diyalogları)

---

### 4. TALEP OLUŞTURMA (`/request/create`)
**Amaç**: Kullanıcının hizmet talebi oluşturması

**Bileşenler**:
- Çok adımlı form (wizard)
  - Adım 1: Hizmet seçimi
  - Adım 2: Detaylı bilgiler
  - Adım 3: Tarih/saat seçimi
  - Adım 4: Özet ve onay
- Form validasyonu
- Otomatik kaydetme

**Shadcn Bileşenleri**:
- `Field` (form alanları)
- `Input` (metin girişleri)
- `Textarea` (açıklama)
- `Select` (dropdown seçimler)
- `Button` (ileri, geri, gönder)
- `Card` (her adım için container)

---

### 5. TALEP DETAY (`/request/[id]`)
**Amaç**: Oluşturulan talebin detaylı görünümü ve yönetimi

**Bileşenler**:
- Talep özeti
- Durum göstergesi
- Gelen teklifler listesi
- Teklif karşılaştırma
- Mesajlaşma bölümü
- Ödeme durumu (eğer teklif kabul edildiyse)

**Shadcn Bileşenleri**:
- `Card` (teklif kartları)
- `Badge` (durum göstergeleri)
- `Button` (kabul, red, mesaj)
- `AlertDialog` (onay diyalogları)
- `Separator` (bölüm ayırıcı)

---

### 6. MESAJLAŞMA (`/messages` ve `/messages/[id]`)
**Amaç**: Platform içi iletişim sistemi

**Bileşenler**:
- Mesaj listesi (sidebar)
- Mesaj thread görünümü
- Mesaj gönderme alanı
- Dosya ekleme
- Okundu bilgisi
- Bildirimler

**Shadcn Bileşenleri**:
- `Card` (mesaj kartları)
- `Input` (mesaj girişi)
- `Button` (gönder)
- `Separator` (mesaj ayırıcı)
- `Badge` (okunmamış sayısı)

---

### 7. KULLANICI PANELİ (`/dashboard`)
**Amaç**: Kayıtlı kullanıcının tüm işlemlerini yönetmesi

**Alt Sayfalar**:
- **Ana Dashboard**: İstatistikler, son aktiviteler, hızlı erişim
- **Taleplerim** (`/dashboard/requests`): Oluşturulan talepler listesi
- **Favorilerim** (`/dashboard/favorites`): Favori hizmet sağlayıcılar
- **Ayarlar** (`/dashboard/settings`): Profil ve tercih ayarları

**Bileşenler**:
- Sidebar navigasyon
- İstatistik kartları
- Aktivite akışı
- Hızlı aksiyonlar
- Tablo/liste görünümleri

**Shadcn Bileşenleri**:
- `Card` (istatistik ve içerik kartları)
- `Button` (aksiyonlar)
- `Select` (filtreleme)
- `Badge` (durum göstergeleri)
- `Separator` (bölüm ayırıcı)

---

### 8. HİZMET SAĞLAYICI PANELİ (`/provider-dashboard`)
**Amaç**: Hizmet sağlayıcının tüm işlemlerini yönetmesi

**Alt Sayfalar**:
- **Ana Dashboard**: İstatistikler, gelen talepler özeti
- **Profil Yönetimi** (`/provider-dashboard/profile`): Profil düzenleme
- **Hizmet Yönetimi** (`/provider-dashboard/services`): Hizmet ekleme/düzenleme
- **Gelen Talepler** (`/provider-dashboard/requests`): Talep listesi ve teklif verme
- **Mesajlar** (`/provider-dashboard/messages`): Mesajlaşma
- **Takvim** (`/provider-dashboard/calendar`): Rezervasyon yönetimi

**Bileşenler**:
- Sidebar navigasyon
- İstatistik dashboard
- Form yönetimleri
- Takvim görünümü
- Talep/teklif yönetim tabloları

**Shadcn Bileşenleri**:
- `Card` (dashboard kartları)
- `Field` (form alanları)
- `Input`, `Textarea` (form girişleri)
- `Select` (dropdown'lar)
- `Button` (aksiyonlar)
- `Badge` (durumlar)
- `AlertDialog` (onaylar)

---

### 9. YÖNETİM (ADMIN) PANELİ (`/admin`)
**Amaç**: Platform yöneticisinin tüm sistemi yönetmesi

**Alt Sayfalar**:
- **Dashboard** (`/admin`): Genel istatistikler ve özet
- **Kullanıcı Yönetimi** (`/admin/users`): Kullanıcı listesi, düzenleme, askıya alma
- **Hizmet Sağlayıcı Yönetimi** (`/admin/providers`): Provider onayları, belge kontrolü
- **Talep Yönetimi** (`/admin/requests`): Tüm taleplerin izlenmesi
- **Ödeme Yönetimi** (`/admin/payments`): Finansal işlemler, escrow takibi
- **Raporlar** (`/admin/reports`): Analitik ve raporlar
- **Sistem Ayarları** (`/admin/settings`): Platform ayarları

**Bileşenler**:
- Admin sidebar
- Gelişmiş tablolar (filtreleme, sıralama, sayfalama)
- İstatistik dashboard'ları
- Onay/red mekanizmaları
- Detay görünümleri

**Shadcn Bileşenleri**:
- `Card` (dashboard ve içerik)
- `Select` (filtreler)
- `Input` (arama)
- `Button` (aksiyonlar)
- `Badge` (durumlar)
- `AlertDialog` (onay/red diyalogları)
- `Separator` (bölüm ayırıcı)
- `DropdownMenu` (aksiyon menüleri)

---

### 10. AUTH SAYFALARI (`/login`, `/register`)
**Amaç**: Kullanıcı girişi ve kaydı

**Bileşenler**:
- Login formu
- Register formu (çok adımlı)
- Şifre sıfırlama
- Sosyal medya girişi (mock)

**Shadcn Bileşenleri**:
- `Field` (form alanları)
- `Input` (girişler)
- `Button` (giriş, kayıt)
- `Card` (form container)
- `Separator` (sosyal medya ayırıcı)

---

## 🎨 TASARIM YAKLAŞIMI

### Shadcn Bileşen Kullanım Prensipleri
1. **Bileşen Dosyalarını Değiştirme**: `components/ui/` klasöründeki dosyalar asla değiştirilmeyecek
2. **Variant Kullanımı**: Sadece mevcut variant'lar kullanılacak (örn: `variant="default"`, `variant="outline"`, `size="sm"`, `size="lg"`)
3. **Composition**: Bileşenler birleştirilerek daha karmaşık yapılar oluşturulacak
4. **Tutarlılık**: Tüm sayfalarda aynı tasarım dili kullanılacak

### Layout Prensipleri
- **Grid System**: Tailwind CSS grid ve flexbox kullanımı
- **Spacing**: Tutarlı spacing sistemi (Tailwind spacing scale)
- **Typography**: Preset'teki font yapılandırması kullanılacak
- **Colors**: Preset'teki renk paleti kullanılacak
- **Responsive**: Mobile-first yaklaşım

### Bileşen Kompozisyonu Örnekleri
- **ProviderCard**: `Card` + `Badge` + `Button` kombinasyonu
- **RequestForm**: `Field` + `Input` + `Textarea` + `Select` + `Button` kombinasyonu
- **MessageThread**: `Card` + `Separator` + `Input` kombinasyonu
- **Dashboard Stats**: `Card` içinde `Badge` ve metin kombinasyonu

---

## 📊 MOCK VERİ YAPISI

### Provider (Hizmet Sağlayıcı)
```typescript
{
  id: string
  name: string
  category: string[]
  location: {
    city: string
    district: string
    address: string
    coordinates: { lat: number, lng: number }
  }
  rating: number
  reviewCount: number
  profileImage: string
  coverImage: string
  gallery: string[]
  services: Service[]
  description: string
  workingHours: WorkingHours
  verified: boolean
  joinedDate: string
  responseTime: string
  priceRange: { min: number, max: number }
  languages: string[]
  certifications: string[]
}
```

### Service (Hizmet)
```typescript
{
  id: string
  name: string
  description: string
  price: number
  duration: string
  category: string
  features: string[]
}
```

### Request (Talep)
```typescript
{
  id: string
  userId: string
  providerId?: string
  serviceId: string
  title: string
  description: string
  status: 'pending' | 'active' | 'accepted' | 'completed' | 'cancelled'
  createdAt: string
  scheduledDate?: string
  location: Location
  budget: { min: number, max: number }
  offers: Offer[]
  selectedOfferId?: string
}
```

### Offer (Teklif)
```typescript
{
  id: string
  requestId: string
  providerId: string
  price: number
  description: string
  estimatedDuration: string
  status: 'pending' | 'accepted' | 'rejected'
  createdAt: string
}
```

### Message (Mesaj)
```typescript
{
  id: string
  threadId: string
  senderId: string
  receiverId: string
  content: string
  attachments?: string[]
  read: boolean
  createdAt: string
}
```

### Payment (Ödeme)
```typescript
{
  id: string
  requestId: string
  amount: number
  status: 'pending' | 'held' | 'released' | 'refunded'
  escrowStatus: 'active' | 'released' | 'refunded'
  paymentMethod: string
  createdAt: string
  releasedAt?: string
}
```

### Review (Değerlendirme)
```typescript
{
  id: string
  providerId: string
  userId: string
  requestId: string
  rating: number
  comment: string
  createdAt: string
  verified: boolean
}
```

---

## 🚀 GELİŞTİRME FAZLARI

### Faz 1: Temel Altyapı ve Ana Sayfalar (Hafta 1)
- [ ] Proje yapısının oluşturulması
- [ ] Layout bileşenleri (Header, Footer, Sidebar)
- [ ] Ana sayfa tasarımı
- [ ] Arama sayfası temel yapısı
- [ ] Mock veri yapılarının oluşturulması
- [ ] TypeScript type tanımlamaları

### Faz 2: Hizmet Sağlayıcı Modülü (Hafta 2)
- [ ] Provider listeleme ve kartları
- [ ] Provider detay sayfası
- [ ] Filtreleme ve sıralama
- [ ] Arama fonksiyonalitesi
- [ ] Yorum ve değerlendirme görünümü

### Faz 3: Talep Yönetimi (Hafta 3)
- [ ] Talep oluşturma formu (wizard)
- [ ] Talep detay sayfası
- [ ] Teklif görüntüleme ve karşılaştırma
- [ ] Talep durum yönetimi
- [ ] Form validasyonları

### Faz 4: Mesajlaşma Sistemi (Hafta 4)
- [ ] Mesaj listesi
- [ ] Mesaj thread görünümü
- [ ] Mesaj gönderme
- [ ] Okundu bilgisi
- [ ] Bildirim sistemi (mock)

### Faz 5: Kullanıcı ve Provider Panelleri (Hafta 5)
- [ ] Kullanıcı dashboard
- [ ] Kullanıcı paneli alt sayfaları
- [ ] Provider dashboard
- [ ] Provider paneli alt sayfaları
- [ ] Profil yönetimi formları
- [ ] Takvim görünümü (basit)

### Faz 6: Ödeme ve Escrow (Hafta 6)
- [ ] Ödeme formu
- [ ] Ödeme özeti
- [ ] Escrow durum gösterimi
- [ ] Ödeme geçmişi
- [ ] Mock ödeme akışı

### Faz 7: Admin Paneli (Hafta 7)
- [ ] Admin dashboard
- [ ] Kullanıcı yönetimi
- [ ] Provider yönetimi
- [ ] Talep yönetimi
- [ ] Ödeme yönetimi
- [ ] Raporlar sayfası

### Faz 8: Auth ve Finalizasyon (Hafta 8)
- [ ] Login/Register sayfaları
- [ ] Auth state yönetimi (mock)
- [ ] Protected route'lar
- [ ] Responsive optimizasyonlar
- [ ] Loading states
- [ ] Error handling
- [ ] Final testler ve düzenlemeler

---

## 🛠️ TEKNİK DETAYLAR

### State Yönetimi
- **React Hooks**: Local state için `useState`, `useEffect`
- **Custom Hooks**: Veri çekme ve yönetim için (`useProviders`, `useRequests`, vb.)
- **Context API**: Auth state için (mock)
- **URL State**: Filtreleme ve arama için URL parametreleri

### Veri Yönetimi
- **Mock Data**: `lib/mock-data/` klasöründe statik mock veriler
- **Local Storage**: Kullanıcı tercihleri, favoriler için
- **Simüle Edilmiş API**: Custom hooks içinde setTimeout ile API çağrıları simüle edilecek

### Routing
- **Next.js App Router**: Tüm routing App Router ile yapılacak
- **Layout Groups**: `(auth)`, `(main)`, `admin` layout grupları
- **Dynamic Routes**: `[id]` parametreleri ile dinamik sayfalar

### Form Yönetimi
- **Native HTML5 Validation**: Temel validasyon
- **Custom Validation**: TypeScript ile custom validation fonksiyonları
- **Multi-step Forms**: Wizard pattern ile çok adımlı formlar

### Performance
- **Code Splitting**: Next.js otomatik code splitting
- **Image Optimization**: Next.js Image component
- **Lazy Loading**: Gerektiğinde lazy loading

### SEO
- **Metadata**: Her sayfa için uygun metadata
- **Semantic HTML**: Doğru HTML5 semantic elementleri
- **Structured Data**: Schema.org markup (opsiyonel)

---

## 📝 BİLEŞEN GELİŞTİRME KURALLARI

1. **Shadcn Bileşenlerini Kullan**: Yeni bileşen oluşturmak yerine mevcut shadcn bileşenlerini compose et
2. **TypeScript**: Tüm bileşenler TypeScript ile yazılacak
3. **Props Interface**: Her bileşen için açık props interface tanımla
4. **Reusability**: Bileşenler mümkün olduğunca yeniden kullanılabilir olmalı
5. **Accessibility**: ARIA etiketleri ve keyboard navigation desteği
6. **Responsive**: Tüm bileşenler mobile-first yaklaşım ile responsive olmalı

---

## 🎯 BAŞARI KRİTERLERİ

- ✅ Tüm PRD'deki sayfalar implement edilmiş olmalı
- ✅ Tüm kullanıcı yolculuğu akışları çalışır durumda olmalı
- ✅ Mock veri ile tüm senaryolar test edilebilmeli
- ✅ Responsive tasarım tüm ekran boyutlarında çalışmalı
- ✅ Shadcn bileşenleri doğru şekilde kullanılmış olmalı
- ✅ TypeScript hata vermemeli
- ✅ Modern ve tutarlı bir tasarım dili olmalı
- ✅ Loading ve error state'leri tüm sayfalarda olmalı

---

## 📚 EK NOTLAR

- **Mock Auth**: Gerçek authentication olmayacak, sadece UI state yönetimi yapılacak
- **Mock Payments**: Ödeme işlemleri simüle edilecek, gerçek ödeme gateway'i olmayacak
- **Mock Notifications**: Bildirimler local state'te tutulacak
- **Localization**: İlk aşamada sadece Türkçe, ileride i18n eklenebilir
- **Testing**: İlk aşamada manuel test, ileride unit test eklenebilir

---

*Bu plan, PRD ve Platform Sistem Şeması dokümanlarına uygun olarak hazırlanmıştır ve geliştirme sürecinde güncellenebilir.*
