'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { MessageBubble } from './MessageBubble';
import { MessageInput } from './MessageInput';
import { Message } from '@/lib/types/message';
import { mockUsers } from '@/lib/mock-data/users';
import { typingDots, typingDot } from '@/lib/animations';

interface MessageThreadProps {
  messages: Message[];
  currentUserId: string;
  onSendMessage: (content: string) => void;
  isTyping?: boolean;
}

export function MessageThread({ messages, currentUserId, onSendMessage, isTyping = false }: MessageThreadProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isAtBottom, setIsAtBottom] = useState(true);

  useEffect(() => {
    if (isAtBottom) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isAtBottom]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const isBottom = target.scrollHeight - target.scrollTop <= target.clientHeight + 100;
    setIsAtBottom(isBottom);
  };

  const getSenderName = (senderId: string) => {
    const user = mockUsers.find(u => u.id === senderId);
    return user?.name || 'Bilinmeyen';
  };

  return (
    <div className="flex flex-col h-full">
      <div 
        className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth"
        onScroll={handleScroll}
      >
        <AnimatePresence initial={false}>
          {messages.map((message, index) => {
            const isOwn = message.senderId === currentUserId;
            const prevMessage = index > 0 ? messages[index - 1] : null;
            const showSeparator = !prevMessage || 
              new Date(message.createdAt).getTime() - new Date(prevMessage.createdAt).getTime() > 3600000;

            return (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, delay: index * 0.02 }}
              >
                {showSeparator && index > 0 && (
                  <div className="my-6">
                    <Separator />
                    <div className="text-center text-xs text-muted-foreground mt-3 font-medium">
                      {new Date(message.createdAt).toLocaleDateString('tr-TR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </div>
                  </div>
                )}
                <MessageBubble
                  message={message}
                  isOwn={isOwn}
                  senderName={!isOwn ? getSenderName(message.senderId) : undefined}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
        
        {/* Typing Indicator */}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 p-3 bg-muted rounded-lg w-fit"
          >
            <motion.div
              variants={typingDots}
              animate="animate"
              className="flex gap-1"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  variants={typingDot}
                  className="w-2 h-2 bg-muted-foreground rounded-full"
                />
              ))}
            </motion.div>
            <span className="text-xs text-muted-foreground">Yazıyor...</span>
          </motion.div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      <MessageInput onSend={onSendMessage} />
    </div>
  );
}
