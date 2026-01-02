'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SearchBar } from '@/components/common/SearchBar';
import { mockProviders } from '@/lib/mock-data/providers';
import { ArrowRight, CheckCircle2, Star, TrendingUp } from 'lucide-react';

export default function HomePage() {
  const router = useRouter();

  const featuredProviders = mockProviders.slice(0, 6);
  const categories = [
    { name: 'Cleaning', count: 8 },
    { name: 'Electrical', count: 5 },
    { name: 'Plumbing', count: 4 },
    { name: 'Painting', count: 3 },
    { name: 'Assembly', count: 3 },
    { name: 'Maintenance', count: 3 },
    { name: 'Gardening', count: 2 },
  ];

  const handleSearch = (query: string) => {
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background min-h-[90vh] flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border bg-background/80 backdrop-blur-sm px-5 py-2 text-sm text-muted-foreground shadow-sm">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span>Thousands of professional service providers</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight">
              Find the Service
              <span className="block mt-2 bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                You Need
              </span>
            </h1>
            
            <p className="max-w-3xl text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Meet your needs with trusted service providers. 
              <span className="block mt-3">Thousands of professional service providers at your fingertips.</span>
            </p>
            
            <div className="w-full max-w-3xl mt-4">
              <SearchBar onSearch={handleSearch} floating />
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-8 text-sm text-muted-foreground">
              {[
                { icon: CheckCircle2, text: 'Verified Providers' },
                { icon: Star, text: '4.8 Average Rating' },
                { icon: CheckCircle2, text: 'Secure Payment' },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-primary" fill={item.icon === Star ? 'currentColor' : 'none'} />
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="w-full border-t py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Popular Categories</h2>
            <p className="text-lg text-muted-foreground">Choose the category that suits your needs</p>
          </div>
          
          {/* Category Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {categories.map((category) => (
              <Link key={category.name} href={`/search?category=${category.name}`}>
                <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer h-full border hover:border-primary group">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {category.name}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {category.count} service providers
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Providers - Horizontal Scroll Carousel */}
      <section className="w-full border-t bg-muted/30 py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">Featured Service Providers</h2>
              <p className="text-lg text-muted-foreground">Most preferred professionals</p>
            </div>
            <Button variant="outline" size="lg" asChild>
              <Link href="/search" className="flex items-center gap-2">
                View All
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 snap-x snap-mandatory">
            <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
              {featuredProviders.map((provider) => (
                <div key={provider.id} className="flex-shrink-0 w-[320px] snap-start">
                  <Link href={`/provider/${provider.id}`}>
                    <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer h-full overflow-hidden group border">
                      <div className="relative h-56 w-full overflow-hidden">
                        <Image
                          src={provider.coverImage}
                          alt={provider.name}
                          width={320}
                          height={224}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        {provider.verified && (
                          <div className="absolute top-4 right-4">
                            <Badge variant="default" className="bg-primary">
                              <CheckCircle2 className="h-3 w-3 mr-1" />
                              Verified
                            </Badge>
                          </div>
                        )}
                      </div>
                      <CardHeader>
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-xl mb-1 group-hover:text-primary transition-colors">
                              {provider.name}
                            </CardTitle>
                            <CardDescription className="text-sm">
                              {provider.location.district}, {provider.location.city}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-1.5">
                            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                            <span className="text-sm font-semibold">{provider.rating}</span>
                            <span className="text-sm text-muted-foreground">
                              ({provider.reviewCount})
                            </span>
                          </div>
                          <div className="text-sm font-semibold text-primary">
                            {provider.priceRange.min}₺ - {provider.priceRange.max}₺
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {provider.category.slice(0, 2).map((cat) => (
                            <Badge key={cat} variant="secondary" className="text-xs">
                              {cat}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Vertical Timeline */}
      <section className="w-full border-t py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">How It Works?</h2>
            <p className="text-lg text-muted-foreground">Get your service in 4 simple steps</p>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {[
              { step: '1', title: 'Search Service', desc: 'Search for the service you need or browse categories.' },
              { step: '2', title: 'Compare', desc: 'Compare prices, ratings, and service details.' },
              { step: '3', title: 'Create Request', desc: 'Create your service request and receive offers.' },
              { step: '4', title: 'Secure Payment', desc: 'Make secure payment with escrow system.' },
            ].map((item) => (
              <Card key={item.step} className="text-center hover:shadow-xl transition-all duration-300 h-full border-2 hover:border-primary/30">
                <CardHeader>
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10 text-4xl font-bold text-primary">
                    {item.step}
                  </div>
                  <CardTitle className="text-2xl mb-2">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {item.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="w-full border-t bg-gradient-to-r from-primary/5 to-accent/5 py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {[
              { value: mockProviders.length, suffix: '+', label: 'Service Providers' },
              { value: 1000, suffix: '+', label: 'Completed Jobs' },
              { value: 4.8, suffix: '', label: 'Average Rating' },
              { value: '24/7', suffix: '', label: 'Support' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary mb-2">
                  {typeof stat.value === 'number' ? stat.value : stat.value}
                  {stat.suffix}
                </div>
                <div className="text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
