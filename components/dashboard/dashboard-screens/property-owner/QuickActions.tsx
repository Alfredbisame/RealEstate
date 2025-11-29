'use client';

import { 
  Building2, Calculator, FileText, CreditCard 
} from 'lucide-react';
import QuickActionCard from './QuickActionCard';

interface QuickActionsProps {
  onAddProperty?: () => void;
  onROICalculator?: () => void;
  onGenerateInvoice?: () => void;
  onPaymentTracker?: () => void;
}

export default function QuickActions({
  onAddProperty,
  onROICalculator,
  onGenerateInvoice,
  onPaymentTracker
}: QuickActionsProps) {
  const actions = [
    {
      icon: Building2,
      title: 'Add Property',
      description: 'New investment',
      color: 'green' as const,
      onClick: onAddProperty
    },
    {
      icon: Calculator,
      title: 'ROI Calculator',
      description: 'Analyze returns',
      color: 'blue' as const,
      onClick: onROICalculator
    },
    {
      icon: FileText,
      title: 'Generate Invoice',
      description: 'Create billing',
      color: 'orange' as const,
      onClick: onGenerateInvoice
    },
    {
      icon: CreditCard,
      title: 'Payment Tracker',
      description: 'Monitor income',
      color: 'purple' as const,
      onClick: onPaymentTracker
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