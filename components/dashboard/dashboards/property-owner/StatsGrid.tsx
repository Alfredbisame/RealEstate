'use client';

import { 
  Building2, TrendingUp, MapPin, PieChart 
} from 'lucide-react';
import StatsCard from '../../widgets/StatsCard';

export default function StatsGrid() {
  const statsData = [
    {
      title: 'Total Portfolio Value',
      value: 'GHS 2.4M',
      change: '+12.5%',
      changeType: 'positive' as const,
      icon: Building2,
      color: 'green' as const
    },
    {
      title: 'Monthly Revenue',
      value: 'GHS 45,200',
      change: '+8.2%',
      changeType: 'positive' as const,
      icon: TrendingUp,
      color: 'blue' as const
    },
    {
      title: 'Active Properties',
      value: '24',
      change: '+2',
      changeType: 'positive' as const,
      icon: MapPin,
      color: 'orange' as const
    },
    {
      title: 'Average ROI',
      value: '18.5%',
      change: '+1.2%',
      changeType: 'positive' as const,
      icon: PieChart,
      color: 'purple' as const
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-4 h-full">
      {statsData.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
} 