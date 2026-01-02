'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FadeIn, SlideIn } from '@/components/animations';
import { Shield, AlertTriangle, TrendingUp, FileText, Ban } from 'lucide-react';

interface RiskScore {
  id: string;
  name: string;
  type: 'user' | 'provider';
  riskScore: number;
  fraudScore: number;
  anomalies: string[];
  status: 'low' | 'medium' | 'high' | 'critical';
}

const mockRiskScores: RiskScore[] = [
  {
    id: 'risk-1',
    name: 'Ahmet Yılmaz',
    type: 'user',
    riskScore: 25,
    fraudScore: 15,
    anomalies: ['Hızlı hesap oluşturma', 'Şüpheli ödeme davranışı'],
    status: 'low'
  },
  {
    id: 'risk-2',
    name: 'Temizlik Hizmetleri A.Ş.',
    type: 'provider',
    riskScore: 75,
    fraudScore: 60,
    anomalies: ['Yüksek iptal oranı', 'Negatif yorumlar', 'Belge uyumsuzluğu'],
    status: 'high'
  },
  {
    id: 'risk-3',
    name: 'Mehmet Demir',
    type: 'user',
    riskScore: 45,
    fraudScore: 30,
    anomalies: ['Tekrarlayan şikayetler'],
    status: 'medium'
  }
];

export default function AdminRiskPage() {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getStatusVariant = (status: RiskScore['status']) => {
    switch (status) {
      case 'low': return 'default';
      case 'medium': return 'secondary';
      case 'high': return 'outline';
      case 'critical': return 'destructive';
    }
  };

  const getStatusLabel = (status: RiskScore['status']) => {
    switch (status) {
      case 'low': return 'Düşük Risk';
      case 'medium': return 'Orta Risk';
      case 'high': return 'Yüksek Risk';
      case 'critical': return 'Kritik Risk';
    }
  };

  const filteredRisks = mockRiskScores.filter(risk => {
    const matchesFilter = filter === 'all' || risk.status === filter;
    const matchesSearch = risk.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="w-full min-h-screen py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-3 flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                Risk & Fraud Yönetimi
              </h1>
              <p className="text-lg text-muted-foreground">AI destekli risk analizi ve fraud tespiti</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tüm Risk Seviyeleri</SelectItem>
                  <SelectItem value="low">Düşük Risk</SelectItem>
                  <SelectItem value="medium">Orta Risk</SelectItem>
                  <SelectItem value="high">Yüksek Risk</SelectItem>
                  <SelectItem value="critical">Kritik Risk</SelectItem>
                </SelectContent>
              </Select>
              <Input 
                placeholder="Ara..." 
                className="w-full sm:w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {[
            { title: 'Toplam Risk Analizi', value: mockRiskScores.length, icon: Shield },
            { title: 'Yüksek Risk', value: mockRiskScores.filter(r => r.status === 'high' || r.status === 'critical').length, icon: AlertTriangle, color: 'text-orange-600' },
            { title: 'Ortalama Risk Skoru', value: Math.round(mockRiskScores.reduce((sum, r) => sum + r.riskScore, 0) / mockRiskScores.length), icon: TrendingUp },
            { title: 'Fraud Tespiti', value: mockRiskScores.filter(r => r.fraudScore > 50).length, icon: FileText, color: 'text-red-600' },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <FadeIn key={stat.title} delay={index * 0.1}>
                <Card className="border-2 hover:border-primary/30 transition-all">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Icon className={`h-4 w-4 ${stat.color || 'text-primary'}`} />
                      {stat.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className={`text-3xl font-bold ${stat.color || ''}`}>{stat.value}</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {stat.title.includes('Skoru') ? 'Platform geneli' : 
                       stat.title.includes('Risk') ? 'Aktif risk kaydı' : 'Şüpheli aktivite'}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.2}>
          <Card>
            <CardHeader>
              <CardTitle>Risk Analizi Listesi</CardTitle>
              <CardDescription>AI destekli risk skorlaması ve anomali tespiti</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredRisks.map((risk, index) => (
                  <SlideIn key={risk.id} direction="up" delay={index * 0.05}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="p-6 border-2 rounded-lg hover:border-primary/30 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-4 flex-wrap">
                            <div className="font-semibold text-lg">{risk.name}</div>
                            <Badge variant={getStatusVariant(risk.status)}>
                              {getStatusLabel(risk.status)}
                            </Badge>
                            <Badge variant="outline">
                              {risk.type === 'user' ? 'Kullanıcı' : 'Hizmet Sağlayıcı'}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <div className="text-xs text-muted-foreground mb-2">Risk Skoru</div>
                              <div className="text-2xl font-bold mb-2">{risk.riskScore}/100</div>
                              <div className="w-full bg-muted rounded-full h-3">
                                <motion.div
                                  className={`h-3 rounded-full ${
                                    risk.riskScore < 30 ? 'bg-green-500' :
                                    risk.riskScore < 60 ? 'bg-yellow-500' :
                                    risk.riskScore < 80 ? 'bg-orange-500' : 'bg-red-500'
                                  }`}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${risk.riskScore}%` }}
                                  transition={{ duration: 0.5, delay: index * 0.1 }}
                                />
                              </div>
                            </div>
                            <div>
                              <div className="text-xs text-muted-foreground mb-2">Fraud Skoru</div>
                              <div className="text-2xl font-bold mb-2">{risk.fraudScore}/100</div>
                              <div className="w-full bg-muted rounded-full h-3">
                                <motion.div
                                  className={`h-3 rounded-full ${
                                    risk.fraudScore < 30 ? 'bg-green-500' :
                                    risk.fraudScore < 60 ? 'bg-yellow-500' : 'bg-red-500'
                                  }`}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${risk.fraudScore}%` }}
                                  transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {risk.anomalies.length > 0 && (
                        <div className="mt-4 pt-4 border-t">
                          <div className="text-sm font-semibold mb-3 flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4 text-orange-600" />
                            Tespit Edilen Anomaliler:
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {risk.anomalies.map((anomaly, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {anomaly}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      <div className="flex gap-2 mt-4">
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button variant="outline" size="sm" className="gap-2">
                            <FileText className="h-4 w-4" />
                            Detaylı İncele
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button variant="outline" size="sm" className="gap-2">
                            <Ban className="h-4 w-4" />
                            Hesabı Askıya Al
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button variant="outline" size="sm" className="gap-2">
                            <Shield className="h-4 w-4" />
                            Fraud Raporu
                          </Button>
                        </motion.div>
                      </div>
                    </motion.div>
                  </SlideIn>
                ))}
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </div>
  );
}
