'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LayoutDashboard, FileText, Heart, Settings } from 'lucide-react';

interface SidebarItem {
  title: string;
  href: string;
  icon?: React.ReactNode;
}

interface SidebarProps {
  items: SidebarItem[];
}

const iconMap: Record<string, React.ReactNode> = {
  'Dashboard': <LayoutDashboard className="h-4 w-4" />,
  'My Requests': <FileText className="h-4 w-4" />,
  'Favorites': <Heart className="h-4 w-4" />,
  'Settings': <Settings className="h-4 w-4" />,
  'Profile': <LayoutDashboard className="h-4 w-4" />,
  'Services': <FileText className="h-4 w-4" />,
  'Incoming Requests': <FileText className="h-4 w-4" />,
  'Messages': <Heart className="h-4 w-4" />,
  'Calendar': <Settings className="h-4 w-4" />,
};

export function Sidebar({ items }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 h-screen w-64 border-r bg-background/95 backdrop-blur-sm p-6 overflow-y-auto">
      <nav className="space-y-1" role="navigation" aria-label="Sidebar navigation">
        {items.map((item, index) => {
          let isActive = false;
          if (item.href === '/dashboard') {
            isActive = pathname === '/dashboard';
          } else {
            isActive = pathname?.startsWith(item.href) || pathname === item.href;
          }
          
          const icon = iconMap[item.title] || item.icon;
          
          return (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
            >
              <Button
                variant={isActive ? 'default' : 'ghost'}
                className={cn(
                  'w-full justify-start gap-3 relative transition-all duration-200',
                  isActive 
                    ? 'bg-primary text-primary-foreground shadow-sm' 
                    : 'hover:bg-muted/50'
                )}
                asChild
              >
                <Link href={item.href}>
                  {icon && (
                    <motion.span
                      animate={isActive ? { scale: 1.1 } : { scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {icon}
                    </motion.span>
                  )}
                  <span className="font-medium">{item.title}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-primary-foreground rounded-r-full"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              </Button>
            </motion.div>
          );
        })}
      </nav>
    </aside>
  );
}
