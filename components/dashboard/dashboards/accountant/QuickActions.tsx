'use client';

import { FileText, Calculator, CreditCard, Camera } from 'lucide-react';
import QuickActionCard from './QuickActionCard';

interface QuickActionsProps {
  onReceiptScanner?: () => void;
  className?: string;
}

export default function QuickActions({ onReceiptScanner, className = '' }: QuickActionsProps) {
  const actions = [
    {
      icon: FileText,
      title: 'New Invoice',
      description: 'Create billing',
      color: 'green' as const
    },
    {
      icon: Calculator,
      title: 'Tax Calculator',
      description: 'GRA compliance',
      color: 'blue' as const
    },
    {
      icon: CreditCard,
      title: 'Payment Gateway',
      description: 'Process payments',
      color: 'orange' as const
    },
    {
      icon: Camera,
      title: 'Receipt Scanner',
      description: 'Scan & digitize',
      color: 'purple' as const,
      onClick: onReceiptScanner
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
          onClick={action.onClick}
        />
      ))}
    </div>
  );
} 