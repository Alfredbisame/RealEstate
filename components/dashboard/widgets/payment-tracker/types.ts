export interface Payment {
  id: string;
  client: string;
  amount: string;
  dueDate: string;
  status: PaymentStatus;
  type: PaymentType;
  invoiceNumber?: string;
  description?: string;
  lastReminder?: string;
}

export type PaymentStatus = 'paid' | 'pending' | 'overdue' | 'partial';
export type PaymentType = 'invoice' | 'rent' | 'service' | 'deposit' | 'maintenance';

export interface PaymentTrackerProps {
  payments: Payment[];
  className?: string;
}

export interface PaymentCardProps {
  payment: Payment;
  onView?: (payment: Payment) => void;
  onFollowUp?: (payment: Payment) => void;
  className?: string;
}

export interface PaymentHeaderProps {
  title?: string;
  className?: string;
}

export interface PaymentListProps {
  payments: Payment[];
  onView?: (payment: Payment) => void;
  onFollowUp?: (payment: Payment) => void;
  className?: string;
}

export interface PaymentSummaryProps {
  paidAmount: string;
  pendingAmount: string;
  overdueAmount: string;
  className?: string;
}

export interface PaymentStats {
  totalPayments: number;
  paidCount: number;
  pendingCount: number;
  overdueCount: number;
  totalAmount: number;
  paidAmount: number;
  pendingAmount: number;
  overdueAmount: number;
}

export interface StatusBadgeProps {
  status: PaymentStatus;
  className?: string;
}

export interface PaymentActionsProps {
  payment: Payment;
  onView?: (payment: Payment) => void;
  onFollowUp?: (payment: Payment) => void;
  className?: string;
} 