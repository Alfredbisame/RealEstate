'use client';

import { CheckCircle, Activity, Clock } from 'lucide-react';

interface ActivityLog {
  id: string;
  title: string;
  description: string;
  time: string;
  type: 'completed' | 'in-progress' | 'scheduled';
  icon: any;
  bgColor: string;
  textColor: string;
}

export default function DailyActivityLog() {
  const activities: ActivityLog[] = [
    {
      id: '1',
      title: 'Foundation completed',
      description: 'East Wing - 9:30 AM',
      time: '9:30 AM',
      type: 'completed',
      icon: CheckCircle,
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      textColor: 'text-green-600'
    },
    {
      id: '2',
      title: 'Steel work in progress',
      description: 'West Wing - 11:45 AM',
      time: '11:45 AM',
      type: 'in-progress',
      icon: Activity,
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      textColor: 'text-blue-600'
    },
    {
      id: '3',
      title: 'Material delivery scheduled',
      description: 'Cement blocks - 2:00 PM',
      time: '2:00 PM',
      type: 'scheduled',
      icon: Clock,
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      textColor: 'text-orange-600'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
      <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Daily Activity Log</h3>
      <div className="space-y-3">
        {activities.map((activity) => (
          <div 
            key={activity.id}
            className={`flex items-center space-x-3 p-3 ${activity.bgColor} rounded-lg hover:shadow-sm transition-shadow duration-200`}
          >
            <activity.icon className={`w-5 h-5 ${activity.textColor}`} />
            <div>
              <p className="font-medium text-gray-900 dark:text-white">{activity.title}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 