'use client';

import { Payment } from './payment-tracker/types';
import { mockPayments } from './payment-tracker/mockData';
import PaymentHeader from './payment-tracker/PaymentHeader';
import PaymentContent from './payment-tracker/PaymentContent';

interface PaymentTrackerProps {
  payments?: Payment[];
  className?: string;
}

export default function PaymentTracker({ 
  payments = mockPayments, 
  className = "" 
}: PaymentTrackerProps) {
  return (
    <div className={`h-full ${className}`}>
      <PaymentHeader />
      <PaymentContent payments={payments} />
    </div>
  );
}