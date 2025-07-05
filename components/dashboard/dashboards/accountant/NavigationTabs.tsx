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
    <div className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 ${className}`}>
      <div className="flex overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onViewChange(tab.id)}
            className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
              activeView === tab.id
                ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50/50 dark:bg-purple-900/20'
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