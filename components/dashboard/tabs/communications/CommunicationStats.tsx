'use client';

import { Mail, Phone, MessageCircle, Users } from 'lucide-react';

interface CommunicationStatsProps {
  className?: string;
}

export default function CommunicationStats({ className = '' }: CommunicationStatsProps) {
  const stats = [
    {
      icon: Mail,
      value: '24',
      label: 'Unread Messages',
      color: 'blue' as const
    },
    {
      icon: Phone,
      value: '12',
      label: 'Missed Calls',
      color: 'green' as const
    },
    {
      icon: MessageCircle,
      value: '8',
      label: 'Active Chats',
      color: 'orange' as const
    },
    {
      icon: Users,
      value: '48',
      label: 'Team Members',
      color: 'purple' as const
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400',
    green: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400',
    orange: 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400',
    purple: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400'
  };

  return (
    <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 ${className}`}>
      {stats.map((stat, index) => (
        <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all hover:scale-[1.02]">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 ${colorClasses[stat.color]} rounded-lg flex items-center justify-center`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 