# PLATFORM SİSTEM ŞEMASI

## Genel Bakış

Bu doküman, Dijital Hizmet Platformu'nun sistem mimarisini ve modüller arası ilişkileri detaylı olarak açıklamaktadır. Şema, kullanıcı yolculuğundan başlayarak tüm platform bileşenlerini ve bunların birbirleriyle etkileşimlerini göstermektedir.

---

## 1. KULLANICI (ZİYARETÇİ) AKIŞI

Kullanıcı yolculuğu aşağıdaki adımlardan oluşmaktadır:

### 1.1 Kayıt
- Platforma ilk giriş
- Hesap oluşturma süreci
- Kimlik doğrulama

### 1.2 Profil
- Kullanıcı profil bilgilerinin yönetimi
- Tercih ve ayarların belirlenmesi

### 1.3 Arama & Akıllı Öneri
- Hizmet arama fonksiyonları
- AI destekli öneri sistemi
- Filtreleme ve sıralama seçenekleri

### 1.4 Hizmet Sağlayıcı Listeleme
- Arama sonuçlarının görüntülenmesi
- Profil karşılaştırma imkanları
- Detaylı bilgi erişimi

### 1.5 Talep / Teklif. Fiyat
- Hizmet talebi oluşturma
- Teklif alma süreci
- Fiyat karşılaştırması

### 1.6 (Opsiyonel Ek Hizmetler)
- Ek hizmet önerileri
- Paketlenmiş hizmet seçenekleri
- Cross-selling fırsatları

### 1.7 Mesajlaşma
- Platform içi iletişim
- Teklif görüşmeleri
- Süreç takibi

### 1.8 Ödeme (Escrow + Taksitli Ödeme Seçenekleri)
- Güvenli ödeme altyapısı
- Escrow hesap sistemi
- Taksitli ödeme seçenekleri
- Otomatik onay mekanizmaları

### 1.9 Rezervasyon / Planlama
- Hizmet rezervasyonu
- Tarih ve saat planlaması
- Kapasite yönetimi

### 1.10 Hizmet Süreci
- Hizmetin gerçekleştirilmesi
- Süreç takibi
- Durum güncellemeleri

### 1.11 Değerlendirme & Geri Bildirim (Dağıtık Kayıt Altyapısı)
- Hizmet değerlendirmesi
- Yorum ve puanlama
- Güvenli geri bildirim sistemi
- Dağıtık kayıt altyapısı ile doğrulanmış kayıtlar

---

## 2. AI MOTORU & SIRALAMA SİSTEMİ

AI Motoru, platformun merkezi akıllı sistem bileşenidir ve kullanıcı akışı ile diğer modüller arasında köprü görevi görür.

### 2.1 Hizmet Sağlayıcı Önerileri
- Kullanıcı tercihlerine göre öneriler
- Davranış bazlı öneri sistemleri
- Coğrafi ve kategorik eşleştirme

### 2.2 Fiyat & Paket Tahmini
- Dinamik fiyatlandırma önerileri
- Paket optimizasyonu
- Maliyet tahminleri

### 2.3 Kapasite ve Uygunluk Eşleştirme
- Talep-profil eşleşmesi
- Kapasite analizi
- Uygunluk skorlaması

### 2.4 Risk & Fraud Tespiti
- Dolandırıcılık tespiti
- Anomali algılama
- Güvenlik skorlaması
- Risk değerlendirme

---

## 3. CORE PLATFORM MODÜLLERİ

Platform, üç ana modül üzerinden çalışmaktadır:

### 3.1 HİZMET SAĞLAYICI PLATFORMU

#### 3.1.1 Kayıt & Sözleşme Yönetimi
- Hizmet sağlayıcı kayıt süreci
- Sözleşme oluşturma ve yönetimi
- Belge doğrulama süreçleri

#### 3.1.2 Profil, Hizmet & Paket Yönetimi
- Profil oluşturma ve güncelleme
- Hizmet tanımları
- Paket yapılandırmaları
- Fiyatlandırma yönetimi

#### 3.1.3 Talep → Teklif Süreçleri
- Gelen talepleri görüntüleme
- Teklif hazırlama ve gönderme
- Teklif yönetimi ve takibi

#### 3.1.4 Mesajlaşma
- Kullanıcılarla iletişim
- Teklif görüşmeleri
- Bildirim yönetimi

#### 3.1.5 Rezervasyon & Kapasite Yönetimi
- Rezervasyon kabul/red
- Takvim yönetimi
- Kapasite planlaması
- Zaman yönetimi

---

### 3.2 ÖDEME & FİNANS MODÜLÜ

#### 3.2.1 Escrow Hesap Altyapısı
- Güvenli ödeme tutma mekanizması
- İşlem tamamlanana kadar tutarın bekletilmesi
- Otomatik onay ve aktarım süreçleri

#### 3.2.2 Taksitli / Alternatif Ödeme Seçenekleri
- Taksitli ödeme planları
- Alternatif ödeme yöntemleri
- Ödeme geçmişi takibi

#### 3.2.3 Otomatik Onay & Zaman Bazlı Akışlar
- Hizmet tamamlandığında otomatik onay
- Zaman bazlı ödeme serbest bırakma
- Onay mekanizmaları

#### 3.2.4 Komisyon ve Gelir Dağıtımı
- Platform komisyon hesaplama
- Gelir dağıtım süreçleri
- Finansal raporlama

#### 3.2.5 İade Süreçleri Yönetimi
- İade talepleri yönetimi
- İade onay süreçleri
- Geri ödeme işlemleri

---

### 3.3 EK HİZMETLER & ENTEGRASYON MODÜLÜ (Fazlı)

Bu modül, platformun ileri fazlarında aktif hale gelecektir.

#### 3.3.1 Ek Hizmet Önerileri (Akıllı Öneri)
- AI destekli ek hizmet önerileri
- Cross-selling fırsatları
- Paket önerileri

#### 3.3.2 Üçüncü Parti Entegrasyonlar
- Harici API entegrasyonları
- Rezervasyon sistemleri
- Üçüncü parti servis sağlayıcılar

#### 3.3.3 Paketlenmiş Hizmet Kurguları (Faz 3)
- Karma hizmet paketleri
- Özel paket oluşturma
- Paket yönetimi

#### 3.3.4 Finansal Takip ve Raporlama Paneli
- Gelir takibi
- Finansal analizler
- Raporlama araçları

---

## 4. YÖNETİM (ADMIN) PLATFORMU

Yönetim platformu, platformun tüm operasyonel süreçlerini yönetir.

### 4.1 Kullanıcı & Hizmet Sağlayıcı Hesap Yönetimi
- Hesap oluşturma ve silme
- Hesap durumu yönetimi
- Yetkilendirme yönetimi

### 4.2 Belgeler & Doğrulama Süreçleri
- Belge yükleme ve kontrol
- Kimlik doğrulama süreçleri
- Sertifika yönetimi

### 4.3 Risk, Denetim & Yaptırım Mekanizmaları
- Risk değerlendirme
- Denetim süreçleri
- Yaptırım uygulamaları
- Hesap askıya alma/iptal

### 4.4 AI Destekli Fraud & Risk İzleme
- Gerçek zamanlı fraud tespiti
- Risk skorlaması
- Otomatik uyarı sistemleri
- Anomali raporlama

### 4.5 Log ve İşlem Takibi (Dağıtık Kayıt Altyapısı)
- Tüm işlemlerin loglanması
- Değiştirilemez kayıt sistemi
- İşlem geçmişi takibi
- Denetim izleri

### 4.6 İade / Şikayet Yönetimi
- Şikayet kayıtları
- İade talepleri yönetimi
- Çözüm süreçleri
- Müşteri hizmetleri

### 4.7 Performans, Raporlama & Yönetim Panelleri
- Platform performans metrikleri
- Kullanıcı istatistikleri
- İşlem raporları
- Yönetim dashboard'ları

---

## 5. GENEL AKIŞ

Platformun genel iş akışı aşağıdaki sırayı takip eder:

```
Kullanıcı
  ↓
Akıllı Motor (AI Motoru & Sıralama Sistemi)
  ↓
Hizmet Sağlayıcı
  ↓
Teklif
  ↓
Mesajlaşma
  ↓
Ödeme / Escrow
  ↓
Rezervasyon
  ↓
Hizmet Süreci
  ↓
Değerlendirme
  ↓
Yönetim (Admin)
```

---

## 6. MODÜLLER ARASI İLİŞKİLER

### 6.1 Veri Akışı
- **Kullanıcı Akışı** → **AI Motoru** → **Platform Modülleri** → **Admin Platformu**
- Tüm modüller birbirleriyle event-driven architecture üzerinden iletişim kurar
- Mikroservis tabanlı yapı sayesinde modüller bağımsız çalışabilir

### 6.2 Entegrasyon Noktaları
- AI Motoru, tüm modüllerden veri alır ve analiz eder
- Ödeme Modülü, tüm finansal işlemleri yönetir
- Admin Platformu, tüm modülleri izler ve yönetir
- Dağıtık kayıt altyapısı, kritik işlemleri güvenli şekilde kaydeder

---

## 7. TEKNİK MİMARİ NOTLARI

### 7.1 Backend Mimarisi
- Mikroservis tabanlı mimari
- Domain Driven Design (DDD) yaklaşımı
- Event-driven architecture
- Container tabanlı yapı (Docker + Kubernetes)

### 7.2 Veri Yönetimi
- PostgreSQL / MySQL (Ana veritabanı)
- Redis (Önbellekleme)
- Dağıtık kayıt altyapısı (Kritik loglar için)

### 7.3 Güvenlik
- KVKK ve GDPR uyumluluğu
- Rol bazlı yetkilendirme
- Veri şifreleme (aktarım ve depolama)
- İki aşamalı kimlik doğrulama

---

## 8. FAZLI GELİŞİM PLANI

### Faz 1 – MVP (Web)
- Çekirdek platform modülleri
- AI destekli arama ve eşleşme
- Güvenli işlem altyapısı (Escrow)
- Temel yönetim paneli

### Faz 2
- Mobil uygulamalar
- Gelişmiş AI sistemleri
- Harici entegrasyonlar
- Ek hizmetler modülü (kısmi)

### Faz 3
- Dağıtık defter tabanlı modüller
- Paketlenmiş hizmet kurguları
- Gelişmiş finansal takip
- Global genişleme

---

## 9. ÖNEMLİ NOTLAR

- Tüm modüller birbirinden bağımsız olarak geliştirilebilir ve ölçeklenebilir
- Event-driven architecture sayesinde modüller arası gevşek bağlılık sağlanır
- Dağıtık kayıt altyapısı MVP aşamasında pasif olacak, ancak mimari uyumlu tasarlanacaktır
- AI Motoru, platformun merkezi akıllı bileşenidir ve tüm modüllerle entegre çalışır
- Ödeme Modülü, tüm finansal işlemlerin güvenli şekilde yönetilmesini sağlar

---

*Bu doküman, PRD (Product Requirements Document) ile uyumlu olarak hazırlanmıştır ve platform mimarisinin detaylı bir görünümünü sunmaktadır.*
