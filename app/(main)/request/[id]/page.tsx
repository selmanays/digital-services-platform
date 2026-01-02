import { notFound } from 'next/navigation';
import { getRequestById, getOffersByRequestId } from '@/lib/mock-data/requests';
import { RequestDetail } from '@/components/request/RequestDetail';

export default async function RequestDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const request = getRequestById(id);

  if (!request) {
    notFound();
  }

  const offers = getOffersByRequestId(request.id);

  return (
    <div className="w-full min-h-screen py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-3">Request Details</h1>
          <p className="text-lg text-muted-foreground">
            View your request status and offers
          </p>
        </div>
        <RequestDetail
          request={request}
          offers={offers}
        />
      </div>
    </div>
  );
}
