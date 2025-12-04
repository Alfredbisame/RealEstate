'use client';

import { Calculator, Camera } from 'lucide-react';

interface NavigationTabsProps {
  activeView: string;
  onViewChange: (view: string) => void;
  className?: string;
}

export default function NavigationTabs({ activeView, onViewChange, className = '' }: NavigationTabsProps) {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: Calculator },
    { id: 'receipts', label: 'Receipt Scanner', icon: Camera }
  ];

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 ${className}`}>
      <div className="flex overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onViewChange(tab.id)}
            className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${activeView === tab.id
                ? 'text-blue-500 border-b-2 border-blue-500 bg-blue-50 dark:bg-blue-900'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
          >
            <tab.icon size={20} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
} 