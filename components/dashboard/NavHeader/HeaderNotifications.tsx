import { Bell } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface Notification {
  id: number;
  title: string;
  time: string;
  type: string;
}

interface HeaderNotificationsProps {
  notificationsOpen: boolean;
  setNotificationsOpen: (open: boolean) => void;
  notifications: Notification[];
}

export default function HeaderNotifications({ notificationsOpen, setNotificationsOpen, notifications }: HeaderNotificationsProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setNotificationsOpen(false);
      }
    };

    if (notificationsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [notificationsOpen, setNotificationsOpen]);

  const notificationsContent = (
    <div ref={ref} className="fixed right-4 top-16 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 z-[99999] backdrop-blur-xl">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-white">Notifications</h3>
      </div>
      <div className="max-h-64 overflow-y-auto">
        {notifications.map((notification) => (
          <div key={notification.id} className="p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
            <p className="font-medium text-gray-900 dark:text-white text-sm">{notification.title}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{notification.time}</p>
          </div>
        ))}
      </div>
      <div className="p-3 border-t border-gray-200 dark:border-gray-700">
        <button className="w-full text-center text-sm text-green-600 hover:text-green-700 font-medium">
          View All Notifications
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative">
      <button 
        onClick={() => setNotificationsOpen(!notificationsOpen)}
        className="relative p-2.5 rounded-xl bg-gray-100/80 dark:bg-gray-700/80 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all backdrop-blur-sm"
      >
        <Bell size={20} />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
      </button>

      {notificationsOpen && (
        typeof window !== 'undefined' && document.body ?
          createPortal(notificationsContent, document.body) :
          notificationsContent
      )}
    </div>
  );
} 