'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { RequestStatus as RequestStatusType } from '@/lib/types/request';

interface RequestStatusProps {
  status: RequestStatusType;
}

const statusConfig: Record<RequestStatusType, { 
  label: string; 
  variant: 'default' | 'secondary' | 'outline' | 'destructive';
  className?: string;
}> = {
  pending: { label: 'Pending', variant: 'outline', className: 'border-yellow-500/50 text-yellow-700 dark:text-yellow-400' },
  active: { label: 'Active', variant: 'default', className: 'bg-primary' },
  accepted: { label: 'Accepted', variant: 'secondary', className: 'bg-green-500/10 text-green-700 dark:text-green-400' },
  completed: { label: 'Completed', variant: 'default', className: 'bg-primary' },
  cancelled: { label: 'Cancelled', variant: 'destructive' }
};

export function RequestStatus({ status }: RequestStatusProps) {
  const config = statusConfig[status];
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
    >
      <Badge variant={config.variant} className={config.className}>
        {config.label}
      </Badge>
    </motion.div>
  );
}
