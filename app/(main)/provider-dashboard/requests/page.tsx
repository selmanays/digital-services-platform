'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { mockRequests } from '@/lib/mock-data/requests';
import { RequestCard } from '@/components/request/RequestCard';
import { OfferForm } from '@/components/request/OfferForm';
import { EmptyState } from '@/components/common/EmptyState';
import { Request } from '@/lib/types/request';
import { Offer } from '@/lib/types/offer';
import { FadeIn, SlideIn } from '@/components/animations';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ProviderRequestsPage() {
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);
  const [showOfferForm, setShowOfferForm] = useState(false);
  const providerId = 'prov-1';
  const requests = mockRequests.filter(r => !r.providerId || r.providerId === providerId);

  const handleRequestClick = (request: Request) => {
    setSelectedRequest(request);
    setShowOfferForm(true);
  };

  const handleOfferSubmit = (offerData: Omit<Offer, 'id' | 'createdAt' | 'status'>) => {
    console.log('Offer submitted:', offerData);
    setShowOfferForm(false);
    setSelectedRequest(null);
  };

  const handleCancel = () => {
    setShowOfferForm(false);
    setSelectedRequest(null);
  };

  return (
    <div className="w-full min-h-screen py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold mb-3">Gelen Talepler</h1>
            <p className="text-lg text-muted-foreground">Size gelen hizmet talepleri</p>
          </div>
        </FadeIn>

        <AnimatePresence mode="wait">
          {showOfferForm && selectedRequest ? (
            <SlideIn direction="right" key="offer-form">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Teklif Oluştur</h2>
                  <Button variant="ghost" size="icon" onClick={handleCancel}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <OfferForm
                  request={selectedRequest}
                  onSubmit={handleOfferSubmit}
                  onCancel={handleCancel}
                />
              </div>
            </SlideIn>
          ) : (
            <FadeIn key="requests-list">
              {requests.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {requests.map((request, index) => (
                    <motion.div
                      key={request.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleRequestClick(request)}
                      className="cursor-pointer"
                    >
                      <RequestCard request={request} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <EmptyState
                  title="Henüz talep gelmedi"
                  description="Size henüz hizmet talebi gelmemiş"
                />
              )}
            </FadeIn>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
