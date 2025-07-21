'use client';

import { 
  Users, Building2, Target 
} from 'lucide-react';
import { FaCediSign } from 'react-icons/fa6';
import StatsCard from '../../widgets/StatsCard';

export default function StatsGrid() {
  const statsData = [
    {
      title: 'Active Leads',
      value: '24',
      change: '+6',
      changeType: 'positive' as const,
      icon: Users,
      color: 'purple' as const
    },
    {
      title: 'Properties Sold',
      value: '8',
      change: '+3',
      changeType: 'positive' as const,
      icon: Building2,
      color: 'green' as const
    },
    {
      title: 'Monthly Commission',
      value: 'GHS 18,500',
      change: '+25%',
      changeType: 'positive' as const,
      icon: FaCediSign,
      color: 'green' as const
    },
    {
      title: 'Conversion Rate',
      value: '32%',
      change: '+8%',
      changeType: 'positive' as const,
      icon: Target,
      color: 'blue' as const
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