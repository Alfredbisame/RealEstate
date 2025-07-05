'use client';

import { 
  Users, UserCheck, DollarSign, Calendar 
} from 'lucide-react';
import StatsCard from '../../widgets/StatsCard';

export default function StatsGrid() {
  const statsData = [
    {
      title: 'Total Employees',
      value: '48',
      change: '+3',
      changeType: 'positive' as const,
      icon: Users,
      color: 'pink' as const
    },
    {
      title: 'Present Today',
      value: '42',
      change: '87.5%',
      changeType: 'positive' as const,
      icon: UserCheck,
      color: 'green' as const
    },
    {
      title: 'Monthly Payroll',
      value: 'GHS 85,400',
      change: '+5.2%',
      changeType: 'neutral' as const,
      icon: DollarSign,
      color: 'blue' as const
    },
    {
      title: 'Leave Requests',
      value: '6',
      change: '+2',
      changeType: 'neutral' as const,
      icon: Calendar,
      color: 'orange' as const
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