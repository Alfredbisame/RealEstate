'use client';

import { useState } from 'react';
import FinancialsHeader from './financials/FinancialsHeader';
import FinancialStats from './financials/FinancialStats';
import FinancialsContent from './financials/FinancialsContent';

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  avatar?: string;
}

interface FinancialsTabProps {
  user: User;
}

export default function FinancialsTab({ user }: FinancialsTabProps) {
  const [activeView, setActiveView] = useState('overview');

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

  const handleNewInvoice = () => {
    // TODO: Implement new invoice functionality
    console.log('New invoice clicked');
  };

  const handleExport = () => {
    // TODO: Implement export functionality
    console.log('Export clicked');
  };

  const handleInvoiceClick = (invoice: any) => {
    // TODO: Implement invoice click functionality
    console.log('Invoice clicked:', invoice.id);
  };

  return (
    <div className="space-y-6">
      <FinancialsHeader 
        onNewInvoice={handleNewInvoice}
        onExport={handleExport}
      />
      <FinancialStats />
      <FinancialsContent
        activeView={activeView}
        onViewChange={setActiveView}
        invoices={paymentData}
        onInvoiceClick={handleInvoiceClick}
      />
    </div>
  );
}