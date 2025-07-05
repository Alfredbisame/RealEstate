'use client';

import { UserPlus } from 'lucide-react';

interface EmployeesHeaderProps {
  onAddEmployee?: () => void;
}

export default function EmployeesHeader({ onAddEmployee }: EmployeesHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-2xl p-6 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
      
      <div className="relative flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-100">
            Employee Management
          </h1>
          <p className="opacity-90 text-pink-50">
            Manage staff, attendance, and payroll with comprehensive tools
          </p>
        </div>
        <button 
          onClick={onAddEmployee}
          className="flex items-center space-x-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-white/30"
        >
          <UserPlus className="w-5 h-5" />
          <span className="font-medium">Add Employee</span>
        </button>
      </div>
    </div>
  );
} 