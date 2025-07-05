'use client';

import { CheckCircle, AlertTriangle, Info, Bell, Clock, X } from 'lucide-react';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: string;
  time: string;
  read: boolean;
  category: string;
}

interface NotificationCardProps {
  notification: Notification;
  onMarkRead?: (notificationId: string) => void;
  onDelete?: (notificationId: string) => void;
}

export default function NotificationCard({ notification, onMarkRead, onDelete }: NotificationCardProps) {
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success': return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'warning': return <AlertTriangle className="w-5 h-5 text-orange-600" />;
      case 'error': return <AlertTriangle className="w-5 h-5 text-red-600" />;
      case 'info': return <Info className="w-5 h-5 text-blue-600" />;
      default: return <Bell className="w-5 h-5 text-gray-600" />;
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'success': return 'border-l-green-500 bg-green-50/50 dark:bg-green-900/10';
      case 'warning': return 'border-l-orange-500 bg-orange-50/50 dark:bg-orange-900/10';
      case 'error': return 'border-l-red-500 bg-red-50/50 dark:bg-red-900/10';
      case 'info': return 'border-l-blue-500 bg-blue-50/50 dark:bg-blue-900/10';
      default: return 'border-l-gray-500 bg-gray-50/50 dark:bg-gray-900/10';
    }
  };

  return (
    <div 
      className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border border-gray-200/50 dark:border-gray-700/50 ${getNotificationColor(notification.type)} ${
        !notification.read ? 'ring-2 ring-blue-500/20' : ''
      } hover:shadow-lg transition-all duration-300 group`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
            {getNotificationIcon(notification.type)}
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <h3 className={`font-semibold transition-colors duration-300 ${
                !notification.read 
                  ? 'text-gray-900 dark:text-white' 
                  : 'text-gray-700 dark:text-gray-300'
              }`}>
                {notification.title}
              </h3>
              {!notification.read && (
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              )}
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
              {notification.message}
            </p>
            <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <Clock size={12} />
                <span>{notification.time}</span>
              </div>
              <span className="capitalize bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                {notification.category}
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          {!notification.read && (
            <button 
              onClick={() => onMarkRead?.(notification.id)}
              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-all duration-300 hover:scale-105 text-sm"
            >
              Mark Read
            </button>
          )}
          <button 
            onClick={() => onDelete?.(notification.id)}
            className="p-1 text-gray-400 hover:text-gray-600 transition-all duration-300 hover:scale-110"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
} 