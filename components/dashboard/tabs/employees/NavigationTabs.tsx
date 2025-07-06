'use client';

import { Users, Clock, DollarSign, Award } from 'lucide-react';

interface Tab {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number | string; className?: string }>;
}

interface NavigationTabsProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export default function NavigationTabs({ activeView, onViewChange }: NavigationTabsProps) {
  const tabs: Tab[] = [
    { id: 'overview', label: 'Overview', icon: Users },
    { id: 'attendance', label: 'Attendance', icon: Clock },
    { id: 'payroll', label: 'Payroll', icon: DollarSign },
    { id: 'performance', label: 'Performance', icon: Award }
  ];

  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
      <div className="flex border-b border-gray-200/50 dark:border-gray-700/50">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeView === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onViewChange(tab.id)}
              className={`flex items-center space-x-2 px-6 py-4 font-medium transition-all duration-300 relative group ${
                isActive
                  ? 'text-pink-600 bg-pink-50 dark:bg-pink-900/20'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'
              }`}
            >
              <Icon size={20} className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`} />
              <span>{tab.label}</span>
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500"></div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
} 