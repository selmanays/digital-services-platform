'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Search, MessageSquare, Heart } from 'lucide-react';

interface QuickAction {
  title: string;
  description: string;
  href: string;
  variant?: 'default' | 'outline';
}

interface QuickActionsProps {
  actions: QuickAction[];
}

const iconMap: Record<string, React.ReactNode> = {
  'Yeni Talep Oluştur': <Plus className="h-4 w-4" />,
  'Hizmet Ara': <Search className="h-4 w-4" />,
  'Mesajlar': <MessageSquare className="h-4 w-4" />,
  'Favorilerim': <Heart className="h-4 w-4" />,
};

export function QuickActions({ actions }: QuickActionsProps) {
  const [primaryAction, ...secondaryActions] = actions;

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Hızlı İşlemler</CardTitle>
        <CardDescription>Hızlıca erişebileceğiniz işlemler</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {primaryAction && (
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant={primaryAction.variant || 'default'}
              size="lg"
              className="w-full gap-2"
              asChild
            >
              <Link href={primaryAction.href}>
                {iconMap[primaryAction.title]}
                {primaryAction.title}
              </Link>
            </Button>
          </motion.div>
        )}
        <div className="grid gap-3 sm:grid-cols-2">
          {secondaryActions.map((action, index) => (
            <motion.div
              key={action.href}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant={action.variant || 'outline'}
                className="w-full gap-2"
                asChild
              >
                <Link href={action.href}>
                  {iconMap[action.title]}
                  {action.title}
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
