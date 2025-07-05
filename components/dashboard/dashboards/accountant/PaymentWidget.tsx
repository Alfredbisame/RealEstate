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
      status: 'Overdue',
      type: 'Construction'
    },
    {
      id: 'INV-002',
      client: 'Kumasi Properties Ltd',
      amount: 'GHS 28,500',
      dueDate: '2024-02-20',
      status: 'Pending',
      type: 'Consultation'
    },
    {
      id: 'INV-003',
      client: 'Tema Industrial Park',
      amount: 'GHS 67,800',
      dueDate: '2024-02-25',
      status: 'Paid',
      type: 'Full Construction'
    }
  ];

  return (
    <PaymentTracker payments={paymentData} className={className} />
  );
} 