'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RequestStatus } from './RequestStatus';
import { Request } from '@/lib/types/request';
import { MapPin, DollarSign, Calendar, MessageSquare } from 'lucide-react';

interface RequestCardProps {
  request: Request;
}

export function RequestCard({ request }: RequestCardProps) {
  return (
    <Link href={`/request/${request.id}`}>
      <motion.div
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer h-full border-2 hover:border-primary/30">
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                  {request.title}
                </CardTitle>
                <CardDescription className="line-clamp-2">{request.description}</CardDescription>
              </div>
              <RequestStatus status={request.status} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  Konum:
                </span>
                <span className="font-medium">{request.location.district}, {request.location.city}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground flex items-center gap-1.5">
                  <DollarSign className="h-4 w-4" />
                  Bütçe:
                </span>
                <span className="font-medium">{request.budget.min}₺ - {request.budget.max}₺</span>
              </div>
              {request.scheduledDate && (
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    Tarih:
                  </span>
                  <span className="font-medium">
                    {new Date(request.scheduledDate).toLocaleDateString('tr-TR')}
                  </span>
                </div>
              )}
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground flex items-center gap-1.5">
                  <MessageSquare className="h-4 w-4" />
                  Teklifler:
                </span>
                <span className="font-medium">{request.offers.length} teklif</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}
