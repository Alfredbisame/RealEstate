'use client';

import { LucideIcon } from 'lucide-react';

interface QuickActionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: 'green' | 'blue' | 'orange' | 'purple';
  onClick?: () => void;
  className?: string;
}

export default function QuickActionCard({
  icon: Icon,
  title,
  description,
  color,
  onClick,
  className = ''
}: QuickActionCardProps) {
  const colorClasses = {
    green: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400',
    blue: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400',
    orange: 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400',
    purple: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400'
  };

  return (
    <button 
      onClick={onClick}
      className={`flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all hover:scale-[1.02] group ${className}`}
    >
      <div className={`w-10 h-10 ${colorClasses[color]} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="text-left">
        <p className="font-medium text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
          {title}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </button>
  );
} 