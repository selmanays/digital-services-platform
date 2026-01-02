'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { RequestStatus } from './RequestStatus';
import { Request } from '@/lib/types/request';
import { Offer } from '@/lib/types/offer';
import { mockProviders } from '@/lib/mock-data/providers';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { CheckCircle2, XCircle, Clock, MapPin, Calendar, DollarSign, ChevronDown, ChevronUp } from 'lucide-react';

interface RequestDetailProps {
  request: Request;
  offers: Offer[];
  onAcceptOffer?: (offerId: string) => void;
  onRejectOffer?: (offerId: string) => void;
}

const timelineSteps = [
  { id: 1, title: 'Offer Accepted', desc: 'Payment process started' },
  { id: 2, title: 'Payment Received (Escrow)', desc: 'Payment is held securely' },
  { id: 3, title: 'Service in Progress', desc: 'Service will be provided on scheduled date' },
  { id: 4, title: 'Service Completed', desc: 'Payment will be automatically released' },
  { id: 5, title: 'Review', desc: 'Review the service' },
];

export function RequestDetail({ request, offers, onAcceptOffer, onRejectOffer }: RequestDetailProps) {
  const [expandedOffers, setExpandedOffers] = useState<Set<string>>(new Set());
  const provider = request.providerId ? mockProviders.find(p => p.id === request.providerId) : null;

  const toggleOffer = (offerId: string) => {
    setExpandedOffers(prev => {
      const next = new Set(prev);
      if (next.has(offerId)) {
        next.delete(offerId);
      } else {
        next.add(offerId);
      }
      return next;
    });
  };

  const getStatusProgress = () => {
    switch (request.status) {
      case 'accepted': return 2;
      case 'completed': return 4;
      default: return 0;
    }
  };

  const progress = getStatusProgress();

  const handleAcceptOffer = (offerId: string) => {
    if (onAcceptOffer) {
      onAcceptOffer(offerId);
    } else {
      console.log('Offer accepted:', offerId);
    }
  };

  const handleRejectOffer = (offerId: string) => {
    if (onRejectOffer) {
      onRejectOffer(offerId);
    } else {
      console.log('Offer rejected:', offerId);
    }
  };

  return (
    <div className="space-y-8">
      {/* Request Summary */}
      <Card className="border-2">
        <CardHeader>
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div className="flex-1 min-w-0">
              <CardTitle className="text-3xl mb-2">{request.title}</CardTitle>
              <CardDescription className="text-base">
                Created: {new Date(request.createdAt).toLocaleDateString('en-US')}
              </CardDescription>
            </div>
            <RequestStatus status={request.status} />
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="font-semibold mb-2">Description:</div>
            <p className="text-base text-muted-foreground leading-relaxed">{request.description}</p>
          </div>
          <Separator />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <div className="font-semibold mb-1">Location:</div>
                <p className="text-sm text-muted-foreground">
                  {request.location.address}, {request.location.district}, {request.location.city}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <DollarSign className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <div className="font-semibold mb-1">Budget:</div>
                <p className="text-sm text-muted-foreground">
                  {request.budget.min}₺ - {request.budget.max}₺
                </p>
              </div>
            </div>
            {request.scheduledDate && (
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="font-semibold mb-1">Scheduled Date:</div>
                  <p className="text-sm text-muted-foreground">
                    {new Date(request.scheduledDate).toLocaleDateString('en-US')}
                  </p>
                </div>
              </div>
            )}
            {provider && (
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="font-semibold mb-1">Service Provider:</div>
                  <Link 
                    href={`/provider/${provider.id}`}
                    className="text-sm text-primary hover:underline"
                  >
                    {provider.name}
                  </Link>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Offers with Expand/Collapse */}
      {offers.length > 0 && (
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Offers ({offers.length})</CardTitle>
            <CardDescription className="text-base">Review and compare incoming offers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {offers.map((offer) => {
                const offerProvider = mockProviders.find(p => p.id === offer.providerId);
                const isExpanded = expandedOffers.has(offer.id);
                return (
                  <Card key={offer.id} className="overflow-hidden hover:shadow-lg transition-shadow border">
                    <CardHeader 
                      className="cursor-pointer"
                      onClick={() => toggleOffer(offer.id)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          {offerProvider ? (
                            <Link 
                              href={`/provider/${offerProvider.id}`}
                              className="text-lg font-semibold hover:text-primary transition-colors block"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {offerProvider.name}
                            </Link>
                          ) : (
                            <CardTitle className="text-lg">Bilinmeyen</CardTitle>
                          )}
                          <CardDescription className="mt-1">
                            {new Date(offer.createdAt).toLocaleDateString('tr-TR')}
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge
                            variant={
                              offer.status === 'accepted' ? 'default' :
                              offer.status === 'rejected' ? 'destructive' : 'outline'
                            }
                          >
                            {offer.status === 'accepted' ? 'Accepted' :
                             offer.status === 'rejected' ? 'Rejected' : 'Pending'}
                          </Badge>
                          <div className="transition-transform">
                            {isExpanded ? (
                              <ChevronUp className="h-5 w-5 text-muted-foreground" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-muted-foreground" />
                            )}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    {isExpanded && (
                      <CardContent className="space-y-4 pt-0">
                        <div>
                          <div className="text-3xl font-bold mb-2 text-primary">{offer.price}₺</div>
                          <div className="text-sm text-muted-foreground flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            Estimated duration: {offer.estimatedDuration}
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold mb-2">Description:</div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{offer.description}</p>
                        </div>
                        {offer.status === 'pending' && (
                          <div className="flex gap-3 pt-4">
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button variant="default" size="lg" className="flex-1">
                                  <CheckCircle2 className="h-4 w-4 mr-2" />
                                  Accept
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Accept Offer</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Are you sure you want to accept this offer? The payment process will start after this action.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction onClick={() => handleAcceptOffer(offer.id)}>
                                    Accept
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button variant="outline" size="lg" className="flex-1">
                                  <XCircle className="h-4 w-4 mr-2" />
                                  Reject
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Reject Offer</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Are you sure you want to reject this offer?
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction
                                    variant="destructive"
                                    onClick={() => handleRejectOffer(offer.id)}
                                  >
                                    Reject
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        )}
                      </CardContent>
                    )}
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {offers.length === 0 && (
        <Card className="border-2">
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground text-lg">No offers yet.</p>
          </CardContent>
        </Card>
      )}

      {/* Status Timeline */}
      {(request.status === 'accepted' || request.status === 'completed') && (
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Service Process</CardTitle>
            <CardDescription className="text-base">Track the status of your service</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-muted">
                <div
                  className="absolute top-0 left-0 w-full bg-primary transition-all duration-500"
                  style={{ height: `${(progress / timelineSteps.length) * 100}%` }}
                />
              </div>
              
              <div className="space-y-6 relative">
                {timelineSteps.map((step, index) => {
                  const isActive = index < progress;
                  return (
                    <div
                      key={step.id}
                      className="flex items-start gap-4 relative"
                    >
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-semibold transition-colors ${
                          isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {isActive ? <CheckCircle2 className="h-5 w-5" /> : step.id}
                      </div>
                      <div className="flex-1 pt-1">
                        <div className={`font-semibold ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {step.title}
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">{step.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
