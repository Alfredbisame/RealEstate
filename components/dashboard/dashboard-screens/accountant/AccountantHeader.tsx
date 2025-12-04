'use client';

import { Calculator, FileText } from 'lucide-react';

interface AccountantHeaderProps {
  className?: string;
}

export default function AccountantHeader({ className = '' }: AccountantHeaderProps) {
  return (
    <div className={`bg-blue-500 rounded-xl p-6 text-white ${className}`}>
      <h1 className="text-2xl font-bold mb-2">Accountant Dashboard</h1>
      <p className="text-white">Financial management and tax compliance</p>
      <div className="flex items-center space-x-6 mt-4">
        <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-3 py-1">
          <Calculator className="w-4 h-4" />
          <span className="text-sm font-medium">VAT Rate: 15%</span>
        </div>
        <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-3 py-1">
          <FileText className="w-4 h-4" />
          <span className="text-sm font-medium">GRA Compliant</span>
        </div>
      </div>
    </div>
  );
} 