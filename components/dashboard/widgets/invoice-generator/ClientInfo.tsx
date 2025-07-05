'use client';

import { User, Building } from 'lucide-react';
import { ClientInfo as ClientInfoType } from './types';

interface ClientInfoProps {
  clientInfo: ClientInfoType;
  onClientInfoChange: (field: keyof ClientInfoType, value: string) => void;
  className?: string;
}

export default function ClientInfo({ 
  clientInfo, 
  onClientInfoChange, 
  className = "" 
}: ClientInfoProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`}>
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          <div className="flex items-center space-x-1">
            <User className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            <span>Client Name</span>
          </div>
        </label>
        <input
          type="text"
          value={clientInfo.clientName}
          onChange={(e) => onClientInfoChange('clientName', e.target.value)}
          placeholder="Enter client name"
          className="w-full px-4 py-3 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
        />
        <User className="absolute left-3 top-9 w-4 h-4 text-gray-400" />
      </div>
      
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          <div className="flex items-center space-x-1">
            <Building className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            <span>Project Name</span>
          </div>
        </label>
        <input
          type="text"
          value={clientInfo.projectName}
          onChange={(e) => onClientInfoChange('projectName', e.target.value)}
          placeholder="Enter project name"
          className="w-full px-4 py-3 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
        />
        <Building className="absolute left-3 top-9 w-4 h-4 text-gray-400" />
      </div>
    </div>
  );
} 