'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { FadeIn } from '@/components/animations';
import { FileText, MessageSquare, DollarSign, CheckCircle2 } from 'lucide-react';

interface Activity {
  id: string;
  type: 'request' | 'offer' | 'message' | 'payment';
  title: string;
  description: string;
  timestamp: string;
}

interface ActivityFeedProps {
  activities: Activity[];
}

const iconMap = {
  request: FileText,
  offer: CheckCircle2,
  message: MessageSquare,
  payment: DollarSign,
};

export function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Son Aktiviteler</CardTitle>
        <CardDescription>Son işlemleriniz</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => {
            const Icon = iconMap[activity.type];
            return (
              <FadeIn key={activity.id} delay={index * 0.1}>
                <div>
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className="h-5 w-5 text-primary" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm">{activity.title}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {activity.description}
                      </div>
                      <div className="text-xs text-muted-foreground mt-2">
                        {new Date(activity.timestamp).toLocaleDateString('tr-TR', {
                          day: 'numeric',
                          month: 'short',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </div>
                    </div>
                  </div>
                  {index < activities.length - 1 && <Separator className="mt-4" />}
                </div>
              </FadeIn>
            );
          })}
          {activities.length === 0 && (
            <div className="text-center py-12 text-sm text-muted-foreground">
              Henüz aktivite yok.
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
