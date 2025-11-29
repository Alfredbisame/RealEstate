'use client';

import { 
  Users, DollarSign, Calendar, Award 
} from 'lucide-react';
import QuickActionCard from './QuickActionCard';

interface QuickActionsProps {
  onAddEmployee?: () => void;
  onProcessPayroll?: () => void;
  onLeaveManagement?: () => void;
  onPerformanceReview?: () => void;
}

export default function QuickActions({
  onAddEmployee,
  onProcessPayroll,
  onLeaveManagement,
  onPerformanceReview
}: QuickActionsProps) {
  const actions = [
    {
      icon: Users,
      title: 'Add Employee',
      description: 'New hire',
      color: 'pink' as const,
      onClick: onAddEmployee
    },
    {
      icon: DollarSign,
      title: 'Process Payroll',
      description: 'Monthly payment',
      color: 'green' as const,
      onClick: onProcessPayroll
    },
    {
      icon: Calendar,
      title: 'Leave Management',
      description: 'Approve requests',
      color: 'blue' as const,
      onClick: onLeaveManagement
    },
    {
      icon: Award,
      title: 'Performance Review',
      description: 'Evaluate staff',
      color: 'orange' as const,
      onClick: onPerformanceReview
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