'use client';

import { useState } from 'react';
import { Payment } from './types';
import { calculatePaymentStats } from './utils';
import PaymentList from './PaymentList';
import PaymentSummary from './PaymentSummary';
import PaymentStats from './PaymentStats';

interface PaymentContentProps {
  payments: Payment[];
  className?: string;
}

export default function PaymentContent({ payments, className = "" }: PaymentContentProps) {
  const [filteredPayments, setFilteredPayments] = useState<Payment[]>(payments);
  
  const stats = calculatePaymentStats(filteredPayments);

  const handleView = (payment: Payment) => {
    // TODO: Implement payment view functionality
    console.log('Viewing payment:', payment.id);
  };

  const handleFollowUp = (payment: Payment) => {
    // TODO: Implement follow-up functionality
    console.log('Following up on payment:', payment.id);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <PaymentList
        payments={filteredPayments}
        onView={handleView}
        onFollowUp={handleFollowUp}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <PaymentSummary
          paidAmount={`GHS ${stats.paidAmount.toLocaleString()}`}
          pendingAmount={`GHS ${stats.pendingAmount.toLocaleString()}`}
          overdueAmount={`GHS ${stats.overdueAmount.toLocaleString()}`}
        />
        <PaymentStats payments={filteredPayments} />
      </div>
    </div>
  );
} 