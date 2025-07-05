'use client';

import { Bell, AlertTriangle, CheckCircle } from 'lucide-react';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: string;
  time: string;
  read: boolean;
  category: string;
}

interface StatCardProps {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  label: string;
  color: string;
  bgColor: string;
  iconColor: string;
}

function StatCard({ icon: Icon, value, label, color, bgColor, iconColor }: StatCardProps) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
      <div className="flex items-center space-x-3">
        <div className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
            {value}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
        </div>
      </div>
    </div>
  );
}

interface NotificationStatsProps {
  notifications: Notification[];
}

export default function NotificationStats({ notifications }: NotificationStatsProps) {
  const stats = [
    {
      icon: Bell,
      value: notifications.length,
      label: 'Total Notifications',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900',
      iconColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: AlertTriangle,
      value: notifications.filter(n => !n.read).length,
      label: 'Unread',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100 dark:bg-orange-900',
      iconColor: 'text-orange-600 dark:text-orange-400'
    },
    {
      icon: CheckCircle,
      value: notifications.filter(n => n.type === 'success').length,
      label: 'Success',
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900',
      iconColor: 'text-green-600 dark:text-green-400'
    },
    {
      icon: AlertTriangle,
      value: notifications.filter(n => n.type === 'error').length,
      label: 'Alerts',
      color: 'text-red-600',
      bgColor: 'bg-red-100 dark:bg-red-900',
      iconColor: 'text-red-600 dark:text-red-400'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
} 