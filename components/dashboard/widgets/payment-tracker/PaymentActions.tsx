'use client';

import { Eye, MessageSquare, Calendar } from 'lucide-react';
import { PaymentActionsProps } from './types';

export default function PaymentActions({ 
  payment, 
  onView, 
  onFollowUp, 
  className = "" 
}: PaymentActionsProps) {
  const handleView = () => {
    onView?.(payment);
  };

  const handleFollowUp = () => {
    onFollowUp?.(payment);
  };

  return (
    <div className={`flex space-x-2 ${className}`}>
      <button 
        onClick={handleView}
        className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/40 transition-all duration-200 hover:scale-105"
        title="View payment details"
      >
        <div className="flex items-center space-x-1">
          <Eye className="w-3 h-3" />
          <span>View</span>
        </div>
      </button>
      
      {payment.status !== 'paid' && (
        <button 
          onClick={handleFollowUp}
          className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded hover:bg-green-200 dark:bg-green-900/20 dark:text-green-400 dark:hover:bg-green-900/40 transition-all duration-200 hover:scale-105"
          title="Send follow-up reminder"
        >
          <div className="flex items-center space-x-1">
            <MessageSquare className="w-3 h-3" />
            <span>Follow Up</span>
          </div>
        </button>
      )}
    </div>
  );
} 