'use client';

import { 
  Briefcase, Calculator, Camera, MapPin 
} from 'lucide-react';
import QuickActionCard from './QuickActionCard';

interface QuickActionsProps {
  onNewProject?: () => void;
  onBudgetPlanner?: () => void;
  onPhotoDocumentation?: () => void;
  onSiteManagement?: () => void;
}

export default function QuickActions({
  onNewProject,
  onBudgetPlanner,
  onPhotoDocumentation,
  onSiteManagement
}: QuickActionsProps) {
  const actions = [
    {
      icon: Briefcase,
      title: 'New Project',
      description: 'Start planning',
      color: 'blue' as const,
      onClick: onNewProject
    },
    {
      icon: Calculator,
      title: 'Budget Planner',
      description: 'Cost estimation',
      color: 'green' as const,
      onClick: onBudgetPlanner
    },
    {
      icon: Camera,
      title: 'Photo Documentation',
      description: 'Progress photos',
      color: 'orange' as const,
      onClick: onPhotoDocumentation
    },
    {
      icon: MapPin,
      title: 'Site Management',
      description: 'Location tracking',
      color: 'purple' as const,
      onClick: onSiteManagement
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