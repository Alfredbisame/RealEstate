'use client';

import { 
  Shield, FileText, AlertTriangle, BarChart3 
} from 'lucide-react';
import StatsCard from '../../widgets/StatsCard';

export default function StatsGrid() {
  const statsData = [
    {
      title: 'Compliance Score',
      value: '96%',
      change: '+2%',
      changeType: 'positive' as const,
      icon: Shield,
      color: 'green' as const
    },
    {
      title: 'Reports Generated',
      value: '24',
      change: '+6',
      changeType: 'positive' as const,
      icon: FileText,
      color: 'blue' as const
    },
    {
      title: 'Issues Identified',
      value: '3',
      change: '-2',
      changeType: 'positive' as const,
      icon: AlertTriangle,
      color: 'orange' as const
    },
    {
      title: 'Audit Progress',
      value: '78%',
      change: '+12%',
      changeType: 'positive' as const,
      icon: BarChart3,
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