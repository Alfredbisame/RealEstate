'use client';

import { Bell } from 'lucide-react';

interface NotificationsHeaderProps {
  unreadCount: number;
}

export default function NotificationsHeader({ unreadCount }: NotificationsHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-6 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
      
      <div className="relative flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
            Notifications & Alerts
          </h1>
          <p className="opacity-90 text-blue-50">
            Stay updated with your business activities and push notifications
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/30">
            <span className="text-sm font-medium">{unreadCount} unread</span>
          </div>
          <button className="p-2 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all duration-300 hover:scale-110">
            <Bell className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
} 