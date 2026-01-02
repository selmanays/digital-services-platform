'use client';

import { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { RequestForm } from '@/components/request/RequestForm';
import { FadeIn } from '@/components/animations';

function CreateRequestContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const providerId = searchParams.get('providerId') || undefined;

  const handleSubmit = (data: any) => {
    // Mock: Create request
    console.log('Request created:', data);
    router.push('/dashboard/requests');
  };

  return (
    <div className="w-full min-h-screen py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <FadeIn>
          <div className="mb-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-3">Create New Request</h1>
            <p className="text-lg text-muted-foreground">
              Create your service request and receive offers
            </p>
          </div>
        </FadeIn>
        <RequestForm onSubmit={handleSubmit} initialProviderId={providerId} />
      </div>
    </div>
  );
}

export default function CreateRequestPage() {
  return (
    <Suspense fallback={
      <div className="w-full min-h-screen py-12 md:py-16 flex items-center justify-center">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    }>
      <CreateRequestContent />
    </Suspense>
  );
}
