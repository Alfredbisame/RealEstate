'use client';

import PaymentTracker from '../../widgets/PaymentTracker';

interface PaymentWidgetProps {
  className?: string;
}

export default function PaymentWidget({ className = '' }: PaymentWidgetProps) {
  const paymentData = [
    {
      id: 'INV-001',
      client: 'East Legon Development',
      amount: 'GHS 45,200',
      dueDate: '2024-02-15',
      status: 'overdue' as const,
      type: 'invoice' as const
    },
    {
      id: 'INV-002',
      client: 'Kumasi Properties Ltd',
      amount: 'GHS 28,500',
      dueDate: '2024-02-20',
      status: 'pending' as const,
      type: 'service' as const
    },
    {
      id: 'INV-003',
      client: 'Tema Industrial Park',
      amount: 'GHS 67,800',
      dueDate: '2024-02-25',
      status: 'paid' as const,
      type: 'invoice' as const
    }
  ];

  return (
    <PaymentTracker payments={paymentData} className={className} />
  );
} 