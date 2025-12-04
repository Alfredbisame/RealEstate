'use client';

import { Briefcase, Camera, MapPin } from 'lucide-react';

interface NavigationTabsProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export default function NavigationTabs({ activeView, onViewChange }: NavigationTabsProps) {
  const tabs = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: Briefcase
    },
    {
      id: 'documentation',
      label: 'Documentation',
      icon: Camera
    },
    {
      id: 'location',
      label: 'Site Management',
      icon: MapPin
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="flex overflow-x-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeView === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onViewChange(tab.id)}
              className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${isActive
                  ? 'text-blue-500 border-b-2 border-blue-500 bg-blue-50 dark:bg-blue-900'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
            >
              <Icon size={20} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
} 