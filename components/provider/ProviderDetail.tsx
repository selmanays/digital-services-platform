'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Provider } from '@/lib/types/provider';
import { ServiceList } from './ServiceList';
import { RatingDisplay } from '@/components/review/RatingDisplay';
import { CheckCircle2, MapPin, Clock, Calendar, MessageSquare, Send } from 'lucide-react';

interface ProviderDetailProps {
  provider: Provider;
}

export function ProviderDetail({ provider }: ProviderDetailProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const workingDays = Object.entries(provider.workingHours);

  return (
    <div className="space-y-8">
      {/* Full-bleed Hero Image */}
      <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
        <Image
          src={provider.coverImage}
          alt={provider.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        
        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-start justify-between z-10">
          <div className="flex flex-col gap-2">
            {/* AI Önerisi badge can be added here if needed */}
          </div>
          <div className="flex flex-col gap-2 items-end">
            {provider.verified && (
              <Badge variant="default" className="gap-1.5 bg-primary text-white">
                <CheckCircle2 className="h-4 w-4" />
                Verified
              </Badge>
            )}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="flex items-end gap-6">
            <Image
              src={provider.profileImage}
              alt={provider.name}
              width={120}
              height={120}
              className="h-24 w-24 md:h-32 md:w-32 rounded-full object-cover border-4 border-white shadow-2xl"
            />
            <div className="flex-1 text-white">
              <div className="mb-3">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{provider.name}</h1>
                <div className="flex items-center gap-2 text-white/90">
                  <MapPin className="h-4 w-4" />
                  <span className="text-base md:text-lg">
                    {provider.location.district}, {provider.location.city}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <RatingDisplay rating={provider.rating} reviewCount={provider.reviewCount} variant="light" />
                <Separator orientation="vertical" className="h-6 bg-white/30" />
                <span className="text-sm text-white/80 flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {provider.responseTime} response
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">

          {/* Description */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">About</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-muted-foreground leading-relaxed">{provider.description}</p>
              {provider.certifications && provider.certifications.length > 0 && (
                <div className="mt-6 pt-6 border-t">
                  <h4 className="text-sm font-semibold mb-3">Certifications</h4>
                  <div className="flex flex-wrap gap-2">
                    {provider.certifications.map((cert) => (
                      <Badge key={cert} variant="outline" className="text-xs">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Services */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Services and Prices</CardTitle>
              <CardDescription className="text-base">Services offered and pricing information</CardDescription>
            </CardHeader>
            <CardContent>
              <ServiceList services={provider.services} />
            </CardContent>
          </Card>

          {/* Working Hours */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Working Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {workingDays.map(([day, hours]) => (
                  <div
                    key={day}
                    className="flex justify-between items-center p-3 rounded-lg hover:bg-muted/50 transition-colors border"
                  >
                    <span className="font-medium">{day}</span>
                    {hours.closed ? (
                      <Badge variant="secondary">Closed</Badge>
                    ) : (
                      <span className="text-sm text-muted-foreground font-medium">
                        {hours.open} - {hours.close}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Categories and Languages */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {provider.category.map((cat) => (
                    <Badge key={cat} variant="secondary" className="text-sm">
                      {cat}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {provider.languages.map((lang) => (
                    <Badge key={lang} variant="outline" className="text-sm">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Gallery */}
          {provider.gallery.length > 0 && (
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Gallery</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                {provider.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="relative h-48 w-full overflow-hidden rounded-lg cursor-pointer border-2 hover:border-primary/50 transition-colors"
                    onClick={() => setSelectedImage(image)}
                  >
                    <Image
                      src={image}
                      alt={`Gallery ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Lightbox Modal */}
          {selectedImage && (
            <div
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div
                className="relative max-w-5xl max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage}
                  alt="Gallery"
                  width={1200}
                  height={800}
                  className="object-contain rounded-lg"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4"
                  onClick={() => setSelectedImage(null)}
                >
                  ×
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Sticky Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="default" size="lg" className="w-full" asChild>
                  <a href={`/request/create?providerId=${provider.id}`}>
                    Create Request
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="w-full gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Price Range</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">
                  {provider.priceRange.min}₺ - {provider.priceRange.max}₺
                </div>
                <p className="text-sm text-muted-foreground mt-2">Starting price</p>
              </CardContent>
            </Card>

            {/* Address Info */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Address</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>{provider.location.address}</p>
                    <p>{provider.location.district}, {provider.location.city}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Buttons - Mobile */}
            <div className="lg:hidden flex gap-4 sticky bottom-4 z-40">
              <Button variant="default" size="lg" className="flex-1" asChild>
                <a href={`/request/create?providerId=${provider.id}`}>
                  Create Request
                </a>
              </Button>
              <Button variant="outline" size="lg" className="flex-1 gap-2">
                <MessageSquare className="h-4 w-4" />
                Message
              </Button>
            </div>
    </div>
  );
}
