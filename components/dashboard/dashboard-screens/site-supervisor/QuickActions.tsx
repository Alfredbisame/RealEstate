'use client';

import { 
  UserCheck, Shield, MapPin, Mic 
} from 'lucide-react';
import QuickActionCard from './QuickActionCard';

interface QuickActionsProps {
  onClockInOut?: () => void;
  onSafetyReport?: () => void;
  onGPSTracking?: () => void;
  onVoiceReports?: () => void;
}

export default function QuickActions({
  onClockInOut,
  onSafetyReport,
  onGPSTracking,
  onVoiceReports
}: QuickActionsProps) {
  const actions = [
    {
      icon: UserCheck,
      title: 'Clock In/Out',
      description: 'Worker attendance',
      color: 'green' as const,
      onClick: onClockInOut
    },
    {
      icon: Shield,
      title: 'Safety Report',
      description: 'Log incidents',
      color: 'blue' as const,
      onClick: onSafetyReport
    },
    {
      icon: MapPin,
      title: 'GPS Tracking',
      description: 'Location monitoring',
      color: 'orange' as const,
      onClick: onGPSTracking
    },
    {
      icon: Mic,
      title: 'Voice Reports',
      description: 'Audio documentation',
      color: 'purple' as const,
      onClick: onVoiceReports
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