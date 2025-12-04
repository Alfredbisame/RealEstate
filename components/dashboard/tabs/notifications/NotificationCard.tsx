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
      case 'success': return <CheckCircle className="w-5 h-5 text-blue-600" />;
      case 'warning': return <AlertTriangle className="w-5 h-5 text-blue-500" />;
      case 'error': return <AlertTriangle className="w-5 h-5 text-blue-600" />;
      case 'info': return <Info className="w-5 h-5 text-blue-600" />;
      default: return <Bell className="w-5 h-5 text-blue-600" />;
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'success': return 'border-l-blue-500 bg-blue-50 dark:bg-blue-900/20';
      case 'warning': return 'border-l-blue-400 bg-blue-50 dark:bg-blue-900/20';
      case 'error': return 'border-l-blue-500 bg-blue-50 dark:bg-blue-900/20';
      case 'info': return 'border-l-blue-500 bg-blue-50 dark:bg-blue-900/20';
      default: return 'border-l-blue-500 bg-blue-50 dark:bg-blue-900/20';
    }
  };

  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-xl p-6 border-l-4 border border-gray-200 dark:border-gray-700 ${getNotificationColor(notification.type)} ${
        !notification.read ? 'ring-2 ring-blue-500/20' : ''
      } hover:shadow-lg transition-all duration-300 group`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
            {getNotificationIcon(notification.type)}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {notification.title}
              </h3>
              <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {notification.time}
              </span>
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {notification.message}
            </p>
            <div className="mt-3 flex items-center">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                {notification.category}
              </span>
            </div>
          </div>
        </div>
        <div className="flex space-x-2 ml-4">
          {!notification.read && onMarkRead && (
            <button
              onClick={() => onMarkRead(notification.id)}
              className="p-1 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Mark as read"
            >
              <CheckCircle className="w-5 h-5" />
            </button>
          )}
          {onDelete && (
            <button
              onClick={() => onDelete(notification.id)}
              className="p-1 text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              aria-label="Delete notification"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}