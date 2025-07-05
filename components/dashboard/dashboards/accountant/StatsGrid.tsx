'use client';

import { DollarSign, FileText, TrendingUp, Calculator } from 'lucide-react';
import StatsCard from '../../widgets/StatsCard';

interface StatsGridProps {
  className?: string;
}

export default function StatsGrid({ className = '' }: StatsGridProps) {
  const statsData = [
    {
      title: 'Monthly Revenue',
      value: 'GHS 180,400',
      change: '+15.2%',
      changeType: 'positive' as const,
      icon: DollarSign,
      color: 'green' as const
    },
    {
      title: 'Outstanding Invoices',
      value: 'GHS 45,200',
      change: '-8.5%',
      changeType: 'positive' as const,
      icon: FileText,
      color: 'orange' as const
    },
    {
      title: 'Profit Margin',
      value: '24.8%',
      change: '+2.1%',
      changeType: 'positive' as const,
      icon: TrendingUp,
      color: 'blue' as const
    },
    {
      title: 'Tax Liability',
      value: 'GHS 18,200',
      change: '+5.3%',
      changeType: 'neutral' as const,
      icon: Calculator,
      color: 'purple' as const
    }
  ];

  return (
    <div className={`grid grid-cols-2 gap-4 h-full ${className}`}>
      {statsData.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
} 