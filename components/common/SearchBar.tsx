'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { useMicroInteractions } from '@/hooks/useMicroInteractions';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  defaultValue?: string;
  floating?: boolean;
}

export function SearchBar({ 
  placeholder = 'Search service...', 
  onSearch, 
  defaultValue,
  floating = false,
}: SearchBarProps) {
  const [query, setQuery] = useState(defaultValue || '');
  const { isFocused, handlers } = useMicroInteractions();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className={`flex w-full gap-3 ${floating ? 'bg-card/95 backdrop-blur-md shadow-xl rounded-2xl p-4 border' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative flex-1">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground transition-colors" />
        <Input
          name="query"
          type="search"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={handlers.onFocus}
          onBlur={handlers.onBlur}
          className={`pl-12 w-full transition-all duration-200 ${
            isFocused ? 'ring-2 ring-primary/20 border-primary' : ''
          }`}
        />
      </div>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button 
          type="submit" 
          variant="default" 
          size="lg" 
          className="px-8 font-medium"
        >
          Search
        </Button>
      </motion.div>
    </motion.form>
  );
}
