'use client';

import { 
  Users, Shield, CheckCircle, AlertTriangle 
} from 'lucide-react';
import StatsCard from '../../widgets/StatsCard';

export default function StatsGrid() {
  const statsData = [
    {
      title: 'Workers Present',
      value: '42/48',
      change: '+3',
      changeType: 'positive' as const,
      icon: Users,
      color: 'green' as const
    },
    {
      title: 'Safety Score',
      value: '94%',
      change: '+2%',
      changeType: 'positive' as const,
      icon: Shield,
      color: 'green' as const
    },
    {
      title: 'Tasks Completed',
      value: '18/24',
      change: '+5',
      changeType: 'positive' as const,
      icon: CheckCircle,
      color: 'blue' as const
    },
    {
      title: 'Incidents Today',
      value: '0',
      change: '0',
      changeType: 'positive' as const,
      icon: AlertTriangle,
      color: 'green' as const
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