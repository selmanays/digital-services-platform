import { notFound } from 'next/navigation';
import { mockProviders } from '@/lib/mock-data/providers';
import { ProviderDetail } from '@/components/provider/ProviderDetail';
import { ReviewCard } from '@/components/review/ReviewCard';
import { getReviewsByProviderId } from '@/lib/mock-data/reviews';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EmptyState } from '@/components/common/EmptyState';

export default async function ProviderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const provider = mockProviders.find((p) => p.id === id);

  if (!provider) {
    notFound();
  }

  const reviews = getReviewsByProviderId(provider.id);

  return (
    <div className="w-full min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <ProviderDetail provider={provider} />
        
        {/* Reviews Section */}
        <Card className="mt-12 border-2">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {reviews.length > 0 ? (
                reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))
              ) : (
                <EmptyState
                  title="No reviews yet"
                  description="Be the first to review this service provider."
                />
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
