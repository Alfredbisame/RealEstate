'use client';

import { Hammer, MapPin, Mic } from 'lucide-react';

interface NavigationTabsProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export default function NavigationTabs({ activeView, onViewChange }: NavigationTabsProps) {
  const tabs = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: Hammer
    },
    {
      id: 'location',
      label: 'GPS Tracking',
      icon: MapPin
    },
    {
      id: 'voice-notes',
      label: 'Voice Reports',
      icon: Mic
    }
  ];

  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
      <div className="flex overflow-x-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeView === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onViewChange(tab.id)}
              className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                isActive
                  ? tab.id === 'location'
                    ? 'text-orange-600 border-b-2 border-orange-600 bg-orange-50/50 dark:bg-orange-900/20'
                    : tab.id === 'voice-notes'
                    ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50/50 dark:bg-purple-900/20'
                    : 'text-amber-600 border-b-2 border-amber-600 bg-amber-50/50 dark:bg-amber-900/20'
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