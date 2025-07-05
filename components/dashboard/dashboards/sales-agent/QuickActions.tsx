'use client';

import { 
  Users, Building2, Calendar, Phone 
} from 'lucide-react';
import QuickActionCard from './QuickActionCard';

interface QuickActionsProps {
  onAddLead?: () => void;
  onListProperty?: () => void;
  onScheduleViewing?: () => void;
  onFollowUp?: () => void;
}

export default function QuickActions({
  onAddLead,
  onListProperty,
  onScheduleViewing,
  onFollowUp
}: QuickActionsProps) {
  const actions = [
    {
      icon: Users,
      title: 'Add Lead',
      description: 'New prospect',
      color: 'purple' as const,
      onClick: onAddLead
    },
    {
      icon: Building2,
      title: 'List Property',
      description: 'New listing',
      color: 'green' as const,
      onClick: onListProperty
    },
    {
      icon: Calendar,
      title: 'Schedule Viewing',
      description: 'Property tour',
      color: 'blue' as const,
      onClick: onScheduleViewing
    },
    {
      icon: Phone,
      title: 'Follow Up',
      description: 'Client contact',
      color: 'orange' as const,
      onClick: onFollowUp
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