import { CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { FaCediSign } from 'react-icons/fa6';
import { Payment, PaymentStatus, PaymentStats } from './types';

export const getStatusIcon = (status: PaymentStatus) => {
  switch (status.toLowerCase()) {
    case 'paid': 
      return { icon: CheckCircle, className: 'text-green-600 dark:text-green-400' };
    case 'pending': 
      return { icon: Clock, className: 'text-orange-600 dark:text-orange-400' };
    case 'overdue': 
      return { icon: AlertCircle, className: 'text-red-600 dark:text-red-400' };
    case 'partial': 
      return { icon: FaCediSign, className: 'text-blue-600 dark:text-blue-400' };
    default: 
      return { icon: Clock, className: 'text-gray-600 dark:text-gray-400' };
  }
};

export const getStatusColor = (status: PaymentStatus): string => {
  switch (status.toLowerCase()) {
    case 'paid': 
      return 'text-green-600 bg-green-100 dark:bg-green-900/20 border-green-200 dark:border-green-800';
    case 'pending': 
      return 'text-orange-600 bg-orange-100 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800';
    case 'overdue': 
      return 'text-red-600 bg-red-100 dark:bg-red-900/20 border-red-200 dark:border-red-800';
    case 'partial': 
      return 'text-blue-600 bg-blue-100 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800';
    default: 
      return 'text-gray-600 bg-gray-100 dark:bg-gray-900/20 border-gray-200 dark:border-gray-800';
  }
};

export const getStatusLabel = (status: PaymentStatus): string => {
  switch (status.toLowerCase()) {
    case 'paid': return 'Paid';
    case 'pending': return 'Pending';
    case 'overdue': return 'Overdue';
    case 'partial': return 'Partial';
    default: return 'Unknown';
  }
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export const formatCurrency = (amount: string): string => {
  // Extract numeric value and format
  const numericValue = amount.replace(/[^\d]/g, '');
  if (numericValue.length >= 6) {
    return `GHS ${(parseInt(numericValue) / 1000000).toFixed(1)}M`;
  } else if (numericValue.length >= 3) {
    return `GHS ${(parseInt(numericValue) / 1000).toFixed(0)}K`;
  }
  return amount;
};

export const calculatePaymentStats = (payments: Payment[]): PaymentStats => {
  const totalPayments = payments.length;
  const paidCount = payments.filter(p => p.status === 'paid').length;
  const pendingCount = payments.filter(p => p.status === 'pending').length;
  const overdueCount = payments.filter(p => p.status === 'overdue').length;
  
  const totalAmount = payments.reduce((sum, payment) => {
    const numericValue = parseInt(payment.amount.replace(/[^\d]/g, ''));
    return sum + numericValue;
  }, 0);
  
  const paidAmount = payments
    .filter(p => p.status === 'paid')
    .reduce((sum, payment) => {
      const numericValue = parseInt(payment.amount.replace(/[^\d]/g, ''));
      return sum + numericValue;
    }, 0);
  
  const pendingAmount = payments
    .filter(p => p.status === 'pending')
    .reduce((sum, payment) => {
      const numericValue = parseInt(payment.amount.replace(/[^\d]/g, ''));
      return sum + numericValue;
    }, 0);
  
  const overdueAmount = payments
    .filter(p => p.status === 'overdue')
    .reduce((sum, payment) => {
      const numericValue = parseInt(payment.amount.replace(/[^\d]/g, ''));
      return sum + numericValue;
    }, 0);

  return {
    totalPayments,
    paidCount,
    pendingCount,
    overdueCount,
    totalAmount,
    paidAmount,
    pendingAmount,
    overdueAmount
  };
};

export const getDaysOverdue = (dueDate: string): number => {
  const due = new Date(dueDate);
  const today = new Date();
  const diffTime = today.getTime() - due.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return Math.max(diffDays, 0);
};

export const getPaymentTypeIcon = (type: string): string => {
  switch (type.toLowerCase()) {
    case 'invoice': return '📄';
    case 'rent': return '🏠';
    case 'service': return '🔧';
    case 'deposit': return '💰';
    case 'maintenance': return '🔨';
    default: return '💳';
  }
};

export const getPaymentTypeLabel = (type: string): string => {
  switch (type.toLowerCase()) {
    case 'invoice': return 'Invoice';
    case 'rent': return 'Rent';
    case 'service': return 'Service';
    case 'deposit': return 'Deposit';
    case 'maintenance': return 'Maintenance';
    default: return 'Payment';
  }
};

export const isOverdue = (dueDate: string): boolean => {
  return getDaysOverdue(dueDate) > 0;
};

export const getUrgencyLevel = (dueDate: string): 'low' | 'medium' | 'high' => {
  const daysOverdue = getDaysOverdue(dueDate);
  if (daysOverdue > 30) return 'high';
  if (daysOverdue > 7) return 'medium';
  return 'low';
}; 