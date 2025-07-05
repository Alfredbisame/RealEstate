'use client';

import { FileText } from 'lucide-react';

interface AuditReportsHeaderProps {
  title?: string;
  className?: string;
}

export default function AuditReportsHeader({ 
  title = "Audit Reports", 
  className = "" 
}: AuditReportsHeaderProps) {
  return (
    <div className={`flex items-center space-x-2 mb-4 ${className}`}>
      <div className="relative">
        <FileText className="w-5 h-5 text-blue-600" />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
      </div>
      <h3 className="font-semibold text-gray-800 dark:text-white">{title}</h3>
    </div>
  );
} 