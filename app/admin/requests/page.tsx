'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { mockRequests } from '@/lib/mock-data/requests';
import { RequestStatus } from '@/components/request/RequestStatus';
import { FadeIn, SlideIn } from '@/components/animations';
import { MapPin, DollarSign, MessageSquare } from 'lucide-react';

export default function AdminRequestsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRequests = mockRequests.filter(request =>
    request.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    request.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-3">Talep Yönetimi</h1>
              <p className="text-lg text-muted-foreground">Tüm talepleri görüntüleyin ve yönetin</p>
            </div>
            <Input 
              placeholder="Talep ara..." 
              className="w-full sm:w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Card>
            <CardHeader>
              <CardTitle>Talepler ({filteredRequests.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredRequests.map((request, index) => (
                  <SlideIn key={request.id} direction="up" delay={index * 0.05}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="p-4 border-2 rounded-lg hover:border-primary/30 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="font-semibold text-lg mb-2">{request.title}</div>
                          <div className="text-sm text-muted-foreground line-clamp-2">
                            {request.description}
                          </div>
                        </div>
                        <RequestStatus status={request.status} />
                      </div>
                      <div className="grid gap-3 md:grid-cols-3 text-sm">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">Konum: </span>
                          <span className="font-medium">{request.location.district}, {request.location.city}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">Bütçe: </span>
                          <span className="font-medium">{request.budget.min}₺ - {request.budget.max}₺</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MessageSquare className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">Teklifler: </span>
                          <span className="font-medium">{request.offers.length}</span>
                        </div>
                      </div>
                    </motion.div>
                  </SlideIn>
                ))}
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </div>
  );
}
