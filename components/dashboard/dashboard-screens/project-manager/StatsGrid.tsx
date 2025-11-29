'use client';

import { 
  Briefcase, CheckCircle, Calculator, AlertTriangle 
} from 'lucide-react';
import StatsCard from '../../widgets/StatsCard';

export default function StatsGrid() {
  const statsData = [
    {
      title: 'Active Projects',
      value: '12',
      change: '+3',
      changeType: 'positive' as const,
      icon: Briefcase,
      color: 'blue' as const
    },
    {
      title: 'Completed This Month',
      value: '8',
      change: '+2',
      changeType: 'positive' as const,
      icon: CheckCircle,
      color: 'green' as const
    },
    {
      title: 'Budget Utilization',
      value: '74%',
      change: '-5%',
      changeType: 'positive' as const,
      icon: Calculator,
      color: 'orange' as const
    },
    {
      title: 'Overdue Tasks',
      value: '3',
      change: '-2',
      changeType: 'positive' as const,
      icon: AlertTriangle,
      color: 'red' as const
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