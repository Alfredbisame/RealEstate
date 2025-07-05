'use client';

import { User, Calendar, Hash, FileText } from 'lucide-react';
import { PaymentCardProps } from './types';
import { formatDate, getPaymentTypeIcon, getPaymentTypeLabel, isOverdue, getDaysOverdue } from './utils';
import StatusBadge from './StatusBadge';
import PaymentActions from './PaymentActions';

export default function PaymentCard({ 
  payment, 
  onView, 
  onFollowUp, 
  className = "" 
}: PaymentCardProps) {
  const isPaymentOverdue = isOverdue(payment.dueDate);
  const daysOverdue = getDaysOverdue(payment.dueDate);

  return (
    <div className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-600 ${className}`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <h4 className="font-medium text-gray-900 dark:text-white">{payment.client}</h4>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-1">
            <Hash className="w-3 h-3" />
            <span>{payment.id}</span>
            <span>•</span>
            <span>{getPaymentTypeIcon(payment.type)} {getPaymentTypeLabel(payment.type)}</span>
          </div>
          
          {payment.description && (
            <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
              <FileText className="w-3 h-3" />
              <span>{payment.description}</span>
            </div>
          )}
        </div>
        
        <div className="text-right">
          <p className="font-semibold text-gray-900 dark:text-white text-lg mb-1">
            {payment.amount}
          </p>
          <div className="flex items-center justify-end space-x-1 text-sm text-gray-500 dark:text-gray-400">
            <Calendar className="w-3 h-3" />
            <span>Due: {formatDate(payment.dueDate)}</span>
          </div>
          
          {isPaymentOverdue && (
            <div className="text-xs text-red-600 dark:text-red-400 mt-1">
              {daysOverdue} day{daysOverdue !== 1 ? 's' : ''} overdue
            </div>
          )}
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <StatusBadge status={payment.status} />
        <PaymentActions 
          payment={payment}
          onView={onView}
          onFollowUp={onFollowUp}
        />
      </div>
    </div>
  );
} 