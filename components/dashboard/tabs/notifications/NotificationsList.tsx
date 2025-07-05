'use client';

import { Bell } from 'lucide-react';
import NotificationCard from './NotificationCard';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: string;
  time: string;
  read: boolean;
  category: string;
}

interface NotificationsListProps {
  notifications: Notification[];
  onMarkRead?: (notificationId: string) => void;
  onDelete?: (notificationId: string) => void;
}

export default function NotificationsList({ notifications, onMarkRead, onDelete }: NotificationsListProps) {
  return (
    <div className="space-y-3">
      {notifications.length === 0 ? (
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-12 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No notifications found</h3>
          <p className="text-gray-600 dark:text-gray-400">Try adjusting your search or filter criteria</p>
        </div>
      ) : (
        notifications.map((notification) => (
          <NotificationCard
            key={notification.id}
            notification={notification}
            onMarkRead={onMarkRead}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
} 