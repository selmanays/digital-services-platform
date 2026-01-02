'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Message } from '@/lib/types/message';
import { Check, CheckCheck } from 'lucide-react';

interface MessageBubbleProps {
  message: Message;
  isOwn: boolean;
  senderName?: string;
}

export function MessageBubble({ message, isOwn, senderName }: MessageBubbleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.2 }}
      className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}
    >
      <Card className={`max-w-[70%] ${
        isOwn 
          ? 'bg-primary text-primary-foreground border-primary' 
          : 'bg-muted'
      }`}>
        <CardContent className="p-4">
          {!isOwn && senderName && (
            <div className="text-xs font-semibold mb-2 opacity-80">{senderName}</div>
          )}
          <div className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</div>
          <div className={`flex items-center justify-end gap-1 mt-2 text-xs ${
            isOwn ? 'opacity-70' : 'text-muted-foreground'
          }`}>
            <span>
              {new Date(message.createdAt).toLocaleTimeString('tr-TR', {
                hour: '2-digit',
                minute: '2-digit'
              })}
            </span>
            {isOwn && (
              <span>
                {message.read ? (
                  <CheckCheck className="h-3 w-3 inline ml-1" />
                ) : (
                  <Check className="h-3 w-3 inline ml-1" />
                )}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
