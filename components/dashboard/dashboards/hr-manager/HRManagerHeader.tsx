'use client';

import { Users, Clock } from 'lucide-react';

interface HRManagerHeaderProps {
  totalEmployees?: string;
  complianceStatus?: string;
}

export default function HRManagerHeader({ 
  totalEmployees = "48 Total Employees",
  complianceStatus = "SSNIT Compliant"
}: HRManagerHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl p-6 text-white shadow-lg">
      <h1 className="text-2xl font-bold mb-2">HR Manager Dashboard</h1>
      <p className="opacity-90 text-lg">Employee management and payroll oversight</p>
      
      <div className="flex items-center space-x-6 mt-4">
        <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
          <Users className="w-5 h-5" />
          <span className="text-sm font-medium">{totalEmployees}</span>
        </div>
        <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
          <Clock className="w-5 h-5" />
          <span className="text-sm font-medium">{complianceStatus}</span>
        </div>
      </div>
    </div>
  );
} 