'use client';

import { useState, use } from 'react';
import { mockProviders } from '@/lib/mock-data/providers';
import { ProviderCard } from '@/components/provider/ProviderCard';
import { ProviderFilters } from '@/components/provider/ProviderFilters';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Provider } from '@/lib/types/provider';
import { Sparkles, X } from 'lucide-react';
import { EmptyState } from '@/components/common/EmptyState';

export default function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const [selectedProviders, setSelectedProviders] = useState<string[]>([]);
  const params = use(searchParams);
  const category = params.category as string | undefined;
  const query = params.q as string | undefined;

  // Filter providers based on search params
  let filteredProviders = mockProviders;
  
  if (category) {
    filteredProviders = filteredProviders.filter((p) =>
      p.category.includes(category)
    );
  }

  if (query) {
    const lowerQuery = query.toLowerCase();
    filteredProviders = filteredProviders.filter(
      (p) =>
        p.name.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery) ||
        p.category.some((c) => c.toLowerCase().includes(lowerQuery))
    );
  }

  // AI-powered recommendation: Score providers based on multiple factors
  const getRecommendationScore = (provider: Provider): number => {
    let score = 0;
    score += provider.rating * 6;
    score += Math.min(provider.reviewCount / 10, 10);
    score += provider.verified ? 15 : 0;
    const responseTimeHours = parseFloat(provider.responseTime.replace(' saat', ''));
    score += Math.max(0, 15 - responseTimeHours);
    const avgPrice = (provider.priceRange.min + provider.priceRange.max) / 2;
    score += Math.max(0, 20 - (avgPrice / 100));
    return score;
  };

  // Sort by recommendation score
  const sortedProviders = [...filteredProviders].sort((a, b) => 
    getRecommendationScore(b) - getRecommendationScore(a)
  );

  const handleToggleCompare = (providerId: string) => {
    setSelectedProviders(prev => 
      prev.includes(providerId) 
        ? prev.filter(id => id !== providerId)
        : prev.length < 3 ? [...prev, providerId] : prev
    );
  };

  const compareProviders = selectedProviders
    .map(id => sortedProviders.find(p => p.id === id))
    .filter(Boolean) as Provider[];

  return (
    <div className="w-full min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-8">
          {/* Sidebar - Filters with Blur Background */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-24">
              <div className="bg-background/80 backdrop-blur-md border rounded-2xl p-6 shadow-sm">
                <ProviderFilters />
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
                <div>
                  <h1 className="text-4xl sm:text-5xl font-bold mb-2">
                    {category ? `${category} Services` : 'Search Service'}
                  </h1>
                  <p className="text-muted-foreground text-lg">
                    {filteredProviders.length} service providers found
                  </p>
                </div>
                {selectedProviders.length > 0 && (
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedProviders([])}
                    className="gap-2"
                  >
                    <X className="h-4 w-4" />
                    Clear Comparison ({selectedProviders.length})
                  </Button>
                )}
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="text-xs gap-1.5">
                  <Sparkles className="h-3 w-3" />
                  AI-Powered Sorting
                </Badge>
                <span className="text-xs text-muted-foreground">
                  Best options are recommended for you
                </span>
              </div>
            </div>

            {/* Comparison View */}
            {compareProviders.length > 0 && (
              <div className="mb-8">
                  <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-primary" />
                        Profile Comparison
                      </CardTitle>
                      <CardDescription>
                        Compare {compareProviders.length} selected service providers
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-3 font-semibold">Feature</th>
                              {compareProviders.map(provider => (
                                <th key={provider.id} className="text-center p-3 min-w-[150px] font-semibold">
                                  {provider.name}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              { label: 'Rating', getValue: (p: Provider) => `${p.rating} ⭐ (${p.reviewCount})` },
                              { label: 'Price Range', getValue: (p: Provider) => `${p.priceRange.min}₺ - ${p.priceRange.max}₺` },
                              { label: 'Response Time', getValue: (p: Provider) => p.responseTime },
                              { label: 'Verified', getValue: (p: Provider) => p.verified ? '✓' : '✗' },
                            ].map((row, rowIndex) => (
                              <tr key={rowIndex} className="border-b hover:bg-muted/50 transition-colors">
                                <td className="p-3 font-medium">{row.label}</td>
                                {compareProviders.map(provider => (
                                  <td key={provider.id} className="text-center p-3">
                                    {row.getValue(provider)}
                                  </td>
                                ))}
                              </tr>
                            ))}
                            <tr>
                              <td className="p-3 font-medium">Action</td>
                              {compareProviders.map(provider => (
                                <td key={provider.id} className="text-center p-3">
                                  <Button variant="default" size="sm" asChild>
                                    <a href={`/provider/${provider.id}`}>View Details</a>
                                  </Button>
                                </td>
                              ))}
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
              </div>
            )}

            {/* Provider Grid */}
            {sortedProviders.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {sortedProviders.map((provider, index) => (
                  <div key={provider.id} className="relative group">
                    <ProviderCard provider={provider} />
                    <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                      {index < 3 && (
                        <Badge className="bg-primary gap-1.5 text-white">
                          <Sparkles className="h-3 w-3" />
                          AI Recommendation
                        </Badge>
                      )}
                      <Button
                        variant={selectedProviders.includes(provider.id) ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleToggleCompare(provider.id)}
                        className="text-xs backdrop-blur-sm bg-background/80"
                      >
                        {selectedProviders.includes(provider.id) ? '✓ Remove' : '+ Compare'}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState
                title="No results found"
                description="Try changing the filters."
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
