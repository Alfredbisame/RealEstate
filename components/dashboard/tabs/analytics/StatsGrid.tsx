'use client';

import { BarChart3, TrendingUp, DollarSign, Building2 } from 'lucide-react';
import StatsCard from '../../widgets/StatsCard';

interface StatsGridProps {
  className?: string;
}

export default function StatsGrid({ className = '' }: StatsGridProps) {
  const statsData = [
    {
      title: 'Total Revenue',
      value: 'GHS 1.2M',
      change: '+15.2%',
      changeType: 'positive' as const,
      icon: DollarSign,
      color: 'green' as const
    },
    {
      title: 'Active Properties',
      value: '24',
      change: '+3',
      changeType: 'positive' as const,
      icon: Building2,
      color: 'blue' as const
    },
    {
      title: 'Growth Rate',
      value: '18.5%',
      change: '+2.1%',
      changeType: 'positive' as const,
      icon: TrendingUp,
      color: 'orange' as const
    },
    {
      title: 'ROI Average',
      value: '22.3%',
      change: '+1.8%',
      changeType: 'positive' as const,
      icon: BarChart3,
      color: 'purple' as const
    }
  ];

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}>
      {statsData.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
} 