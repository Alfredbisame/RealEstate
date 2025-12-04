'use client';

import { Bell } from 'lucide-react';

interface NotificationsHeaderProps {
  unreadCount: number;
}

export default function NotificationsHeader({ unreadCount }: NotificationsHeaderProps) {
  return (
    <div className="bg-blue-500 rounded-2xl p-6 text-white relative overflow-hidden">
      <div className="relative flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold mb-2 text-white">
            Notifications & Alerts
          </h1>
          <p className="text-blue-100">
            Stay updated with your business activities and push notifications
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-blue-400 rounded-xl px-4 py-2 border border-blue-300">
            <span className="text-sm font-medium">{unreadCount} unread</span>
          </div>
          <button className="p-2 bg-blue-400 rounded-xl hover:bg-blue-300 transition-all duration-300 hover:scale-110">
            <Bell className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}