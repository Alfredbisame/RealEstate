'use client';

import { CreditCard, Clock, CheckCircle, AlertCircle } from 'lucide-react';

interface Payment {
  id: string;
  client: string;
  amount: string;
  dueDate: string;
  status: string;
  type: string;
}

interface PaymentTrackerProps {
  payments: Payment[];
}

export default function PaymentTracker({ payments }: PaymentTrackerProps) {
  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'paid': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'pending': return <Clock className="w-4 h-4 text-orange-600" />;
      case 'overdue': return <AlertCircle className="w-4 h-4 text-red-600" />;
      default: return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'paid': return 'text-green-600 bg-green-100 dark:bg-green-900/20';
      case 'pending': return 'text-orange-600 bg-orange-100 dark:bg-orange-900/20';
      case 'overdue': return 'text-red-600 bg-red-100 dark:bg-red-900/20';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/20';
    }
  };

  return (
    <div className="h-full">
      <div className="flex items-center space-x-2 mb-4">
        <CreditCard className="w-5 h-5 text-blue-600" />
        <h3 className="font-semibold text-gray-800 dark:text-white">Payment Tracker</h3>
      </div>

      <div className="space-y-3 overflow-y-auto max-h-64">
        {payments.map((payment) => (
          <div key={payment.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 dark:text-white">{payment.client}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{payment.id} • {payment.type}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900 dark:text-white">{payment.amount}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Due: {new Date(payment.dueDate).toLocaleDateString()}
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {getStatusIcon(payment.status)}
                <span className={`text-sm px-2 py-1 rounded-full ${getStatusColor(payment.status)}`}>
                  {payment.status}
                </span>
              </div>
              
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors">
                  View
                </button>
                {payment.status.toLowerCase() !== 'paid' && (
                  <button className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors">
                    Follow Up
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-4 bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
        <div className="grid grid-cols-3 gap-4 text-center text-sm">
          <div>
            <p className="font-semibold text-green-600">GHS 67,800</p>
            <p className="text-gray-500 dark:text-gray-400">Paid</p>
          </div>
          <div>
            <p className="font-semibold text-orange-600">GHS 28,500</p>
            <p className="text-gray-500 dark:text-gray-400">Pending</p>
          </div>
          <div>
            <p className="font-semibold text-red-600">GHS 45,200</p>
            <p className="text-gray-500 dark:text-gray-400">Overdue</p>
          </div>
        </div>
      </div>
    </div>
  );
}