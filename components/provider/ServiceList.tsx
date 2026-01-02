'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Service } from '@/lib/types/provider';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ServiceListProps {
  services: Service[];
  onSelectService?: (service: Service) => void;
}

export function ServiceList({ services, onSelectService }: ServiceListProps) {
  const [expandedServices, setExpandedServices] = useState<Set<string>>(new Set());

  const toggleService = (serviceId: string) => {
    setExpandedServices(prev => {
      const next = new Set(prev);
      if (next.has(serviceId)) {
        next.delete(serviceId);
      } else {
        next.add(serviceId);
      }
      return next;
    });
  };

  return (
    <div className="space-y-4">
      {services.map((service, index) => {
        const isExpanded = expandedServices.has(service.id);
        return (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30">
              <CardHeader 
                className="cursor-pointer"
                onClick={() => toggleService(service.id)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{service.name}</CardTitle>
                    <CardDescription className="line-clamp-2">{service.description}</CardDescription>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-2xl font-bold text-primary">{service.price}₺</div>
                    <div className="text-sm text-muted-foreground">{service.duration}</div>
                  </div>
                </div>
                <motion.div
                  className="mt-3 flex items-center justify-between"
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-xs text-muted-foreground">Detayları görmek için tıklayın</span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </motion.div>
              </CardHeader>
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardContent className="pt-0">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      {onSelectService && (
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            variant="default"
                            size="default"
                            onClick={() => onSelectService(service)}
                            className="w-full"
                          >
                            Bu Hizmeti Seç
                          </Button>
                        </motion.div>
                      )}
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
