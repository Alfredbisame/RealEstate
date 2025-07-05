'use client';

import { CreditCard } from 'lucide-react';
import { PaymentListProps } from './types';
import PaymentCard from './PaymentCard';

export default function PaymentList({ 
  payments, 
  onView, 
  onFollowUp, 
  className = "" 
}: PaymentListProps) {
  if (payments.length === 0) {
    return (
      <div className={`text-center py-8 text-gray-500 dark:text-gray-400 ${className}`}>
        <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
          <CreditCard className="w-8 h-8 text-gray-400" />
        </div>
        <p className="text-sm font-medium">No payments found</p>
        <p className="text-xs">Add payments to start tracking</p>
      </div>
    );
  }

  return (
    <div className={`space-y-3 overflow-y-auto max-h-64 ${className}`}>
      {payments.map((payment) => (
        <PaymentCard
          key={payment.id}
          payment={payment}
          onView={onView}
          onFollowUp={onFollowUp}
        />
      ))}
    </div>
  );
} 