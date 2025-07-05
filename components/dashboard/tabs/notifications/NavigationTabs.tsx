'use client';

import { Bell, Settings } from 'lucide-react';

interface Tab {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number }>;
}

interface NavigationTabsProps {
  activeView: string;
  onViewChange: (viewId: string) => void;
}

export default function NavigationTabs({ activeView, onViewChange }: NavigationTabsProps) {
  const tabs: Tab[] = [
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'push-settings', label: 'Push Notifications', icon: Settings }
  ];

  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
      <div className="flex border-b border-gray-200/50 dark:border-gray-700/50">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onViewChange(tab.id)}
            className={`flex items-center space-x-2 px-6 py-4 font-medium transition-all duration-300 hover:scale-105 ${
              activeView === tab.id
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/50 dark:bg-blue-900/10'
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