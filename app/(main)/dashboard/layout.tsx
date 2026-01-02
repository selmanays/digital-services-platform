'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sidebar } from '@/components/layout/Sidebar';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const sidebarItems = [
  { title: 'Dashboard', href: '/dashboard' },
  { title: 'My Requests', href: '/dashboard/requests' },
  { title: 'Favorites', href: '/dashboard/favorites' },
  { title: 'Settings', href: '/dashboard/settings' },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block">
        <Sidebar items={sidebarItems} />
      </aside>

      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-16 left-4 z-40">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-background/95 backdrop-blur-sm"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-30 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-full w-64 z-40 lg:hidden"
            >
              <Sidebar items={sidebarItems} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <main className="flex-1 w-full overflow-x-hidden lg:ml-0">
        <div className="w-full">
          {children}
        </div>
      </main>
    </div>
  );
}
