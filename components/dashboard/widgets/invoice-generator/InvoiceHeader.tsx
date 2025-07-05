'use client';

import { FileText, Calculator } from 'lucide-react';

interface InvoiceHeaderProps {
  title?: string;
  className?: string;
}

export default function InvoiceHeader({ 
  title = "Invoice Generator", 
  className = "" 
}: InvoiceHeaderProps) {
  return (
    <div className={`flex items-center space-x-2 mb-6 ${className}`}>
      <div className="relative">
        <FileText className="w-6 h-6 text-orange-600 dark:text-orange-400" />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
      </div>
      <div className="flex items-center space-x-2">
        <h3 className="font-semibold text-gray-800 dark:text-white text-lg">{title}</h3>
        <div className="flex items-center space-x-1 text-xs text-orange-600 dark:text-orange-400">
          <Calculator className="w-3 h-3" />
          <span>Auto-calculate</span>
        </div>
      </div>
    </div>
  );
} 