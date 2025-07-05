'use client';

import { 
  FileText, Search, Shield, BarChart3 
} from 'lucide-react';
import QuickActionCard from './QuickActionCard';

interface QuickActionsProps {
  onViewReports?: () => void;
  onSearchRecords?: () => void;
  onComplianceCheck?: () => void;
  onAnalytics?: () => void;
}

export default function QuickActions({
  onViewReports,
  onSearchRecords,
  onComplianceCheck,
  onAnalytics
}: QuickActionsProps) {
  const actions = [
    {
      icon: FileText,
      title: 'View Reports',
      description: 'Financial reports',
      color: 'gray' as const,
      onClick: onViewReports
    },
    {
      icon: Search,
      title: 'Search Records',
      description: 'Find transactions',
      color: 'blue' as const,
      onClick: onSearchRecords
    },
    {
      icon: Shield,
      title: 'Compliance Check',
      description: 'Verify compliance',
      color: 'green' as const,
      onClick: onComplianceCheck
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      description: 'Data insights',
      color: 'purple' as const,
      onClick: onAnalytics
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {actions.map((action, index) => (
        <QuickActionCard
          key={index}
          icon={action.icon}
          title={action.title}
          description={action.description}
          color={action.color}
          onClick={action.onClick}
        />
      ))}
    </div>
  );
} 