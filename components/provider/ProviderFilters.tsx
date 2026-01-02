'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, X } from 'lucide-react';

export function ProviderFilters() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['category']));
  
  const categories = [
    'Temizlik',
    'Elektrik',
    'Tesisat',
    'Boyama',
    'Montaj',
    'Bakım',
    'Bahçe',
  ];

  const toggleSection = (section: string) => {
    setExpandedSections(prev => {
      const next = new Set(prev);
      if (next.has(section)) {
        next.delete(section);
      } else {
        next.add(section);
      }
      return next;
    });
  };

  const FilterSection = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => {
    const isExpanded = expandedSections.has(id);
    return (
      <div>
        <button
          onClick={() => toggleSection(id)}
          className="w-full flex items-center justify-between py-2 text-sm font-semibold hover:text-primary transition-colors"
        >
          <span>{title}</span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </button>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="py-3">
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <Separator className="my-4" />
      </div>
    );
  };

  return (
    <Card className="border-2">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Filtreler</CardTitle>
          <Button variant="ghost" size="sm" className="gap-1.5">
            <X className="h-4 w-4" />
            Temizle
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <FilterSection id="category" title="Kategori">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Tümü" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tümü</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FilterSection>

        <FilterSection id="price" title="Fiyat Aralığı">
          <div className="flex gap-2">
            <Input type="number" placeholder="Min" />
            <Input type="number" placeholder="Max" />
          </div>
        </FilterSection>

        <FilterSection id="rating" title="Minimum Puan">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Tümü" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tümü</SelectItem>
              <SelectItem value="4.5">4.5 ve üzeri</SelectItem>
              <SelectItem value="4.0">4.0 ve üzeri</SelectItem>
              <SelectItem value="3.5">3.5 ve üzeri</SelectItem>
              <SelectItem value="3.0">3.0 ve üzeri</SelectItem>
            </SelectContent>
          </Select>
        </FilterSection>

        <FilterSection id="location" title="Konum">
          <Input type="text" placeholder="İlçe veya şehir" />
        </FilterSection>

        <FilterSection id="sort" title="Sıralama">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Önerilen" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recommended">Önerilen</SelectItem>
              <SelectItem value="rating">En yüksek puan</SelectItem>
              <SelectItem value="price-low">Fiyat: Düşükten yükseğe</SelectItem>
              <SelectItem value="price-high">Fiyat: Yüksekten düşüğe</SelectItem>
              <SelectItem value="reviews">En çok değerlendirme</SelectItem>
            </SelectContent>
          </Select>
        </FilterSection>
      </CardContent>
    </Card>
  );
}
