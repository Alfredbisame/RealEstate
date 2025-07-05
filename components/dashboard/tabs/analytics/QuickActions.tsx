'use client';

import { BarChart3, Download, Filter, Calendar } from 'lucide-react';
import QuickActionCard from './QuickActionCard';

interface QuickActionsProps {
  className?: string;
}

export default function QuickActions({ className = '' }: QuickActionsProps) {
  const actions = [
    {
      icon: BarChart3,
      title: 'Generate Report',
      description: 'Custom analytics',
      color: 'blue' as const
    },
    {
      icon: Download,
      title: 'Export Data',
      description: 'CSV, PDF, Excel',
      color: 'green' as const
    },
    {
      icon: Filter,
      title: 'Advanced Filters',
      description: 'Custom queries',
      color: 'orange' as const
    },
    {
      icon: Calendar,
      title: 'Schedule Reports',
      description: 'Automated delivery',
      color: 'purple' as const
    }
  ];

  return (
    <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 ${className}`}>
      {actions.map((action, index) => (
        <QuickActionCard
          key={index}
          icon={action.icon}
          title={action.title}
          description={action.description}
          color={action.color}
        />
      ))}
    </div>
  );
} 