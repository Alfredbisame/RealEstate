'use client';

import { LucideIcon } from 'lucide-react';

interface QuickActionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: 'green' | 'blue' | 'orange' | 'purple';
  onClick?: () => void;
}

const colorClasses = {
  green: {
    bg: 'bg-green-100 dark:bg-green-900',
    icon: 'text-green-600 dark:text-green-400'
  },
  blue: {
    bg: 'bg-blue-100 dark:bg-blue-900',
    icon: 'text-blue-600 dark:text-blue-400'
  },
  orange: {
    bg: 'bg-orange-100 dark:bg-orange-900',
    icon: 'text-orange-600 dark:text-orange-400'
  },
  purple: {
    bg: 'bg-purple-100 dark:bg-purple-900',
    icon: 'text-purple-600 dark:text-purple-400'
  }
};

export default function QuickActionCard({ 
  icon: Icon, 
  title, 
  description, 
  color, 
  onClick 
}: QuickActionCardProps) {
  const colors = colorClasses[color];

  return (
    <button 
      onClick={onClick}
      className="flex items-center space-x-3 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg hover:scale-105 transition-all duration-200 group"
    >
      <div className={`w-10 h-10 ${colors.bg} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
        <Icon className={`w-5 h-5 ${colors.icon}`} />
      </div>
      <div className="text-left">
        <p className="font-medium text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
          {title}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>
    </button>
  );
} 