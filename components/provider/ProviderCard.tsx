import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Provider } from '@/lib/types/provider';
import { Star, CheckCircle2 } from 'lucide-react';

interface ProviderCardProps {
  provider: Provider;
}

export function ProviderCard({ provider }: ProviderCardProps) {
  return (
    <Link href={`/provider/${provider.id}`}>
      <div className="h-full">
        <Card className="hover:shadow-2xl transition-all duration-300 cursor-pointer h-full overflow-hidden group border-2 hover:border-primary/30">
          <div className="relative h-64 w-full overflow-hidden">
            <Image
              src={provider.coverImage}
              alt={provider.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            {provider.verified && (
              <div className="absolute top-4 right-4">
                <Badge variant="default" className="bg-primary/90 backdrop-blur-sm gap-1.5">
                  <CheckCircle2 className="h-3 w-3" />
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
              <div className="flex items-center gap-2">
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
            <div className="flex flex-wrap gap-2 mb-4">
              {provider.category.slice(0, 2).map((cat) => (
                <Badge key={cat} variant="secondary" className="text-xs">
                  {cat}
                </Badge>
              ))}
            </div>
            <Button variant="default" className="w-full" size="default">
              View Details
            </Button>
          </CardContent>
        </Card>
      </div>
    </Link>
  );
}
