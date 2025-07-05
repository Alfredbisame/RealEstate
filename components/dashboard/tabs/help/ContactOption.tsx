'use client';

import { ExternalLink } from 'lucide-react';

interface ContactOptionProps {
  type: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  action: string;
  available: boolean;
  onClick?: () => void;
}

export default function ContactOption({ type, description, icon: Icon, action, available, onClick }: ContactOptionProps) {
  return (
    <div className="flex items-center space-x-4 p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg border border-gray-200/50 dark:border-gray-600/50 hover:shadow-md transition-all duration-300 group backdrop-blur-sm">
      <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
      </div>
      <div className="flex-1">
        <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
          {type}
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>
      </div>
      <button 
        onClick={onClick}
        className="flex items-center space-x-1 px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 text-sm hover:scale-105 hover:shadow-md"
      >
        <span>{action}</span>
        <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform duration-300" />
      </button>
    </div>
  );
} 