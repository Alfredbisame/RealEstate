'use client';

import { useState } from 'react';
import NotificationManager from '../../mobile/NotificationManager';
import NotificationsHeader from './notifications/NotificationsHeader';
import NavigationTabs from './notifications/NavigationTabs';
import NotificationsContent from './notifications/NotificationsContent';

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  avatar?: string;
}

interface NotificationsTabProps {
  user: User;
}

export default function NotificationsTab({ user }: NotificationsTabProps) {
  const [activeView, setActiveView] = useState('notifications');
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const notifications = [
    {
      id: '1',
      title: 'New project milestone reached',
      message: 'East Legon Residential Complex has reached 65% completion',
      type: 'success',
      time: '5 minutes ago',
      read: false,
      category: 'project'
    },
    {
      id: '2',
      title: 'Payment received',
      message: 'GHS 45,200 payment received from Kwame Properties Ltd',
      type: 'info',
      time: '1 hour ago',
      read: false,
      category: 'payment'
    },
    {
      id: '3',
      title: 'Material delivery scheduled',
      message: 'Cement delivery scheduled for tomorrow at 9:00 AM',
      type: 'warning',
      time: '2 hours ago',
      read: true,
      category: 'logistics'
    },
    {
      id: '4',
      title: 'Safety incident reported',
      message: 'Minor incident reported at Tema Industrial site',
      type: 'error',
      time: '3 hours ago',
      read: false,
      category: 'safety'
    },
    {
      id: '5',
      title: 'Invoice generated',
      message: 'Invoice INV-2024-045 has been generated for client review',
      type: 'info',
      time: '4 hours ago',
      read: true,
      category: 'finance'
    },
    {
      id: '6',
      title: 'Employee attendance alert',
      message: '3 employees marked as late today',
      type: 'warning',
      time: '5 hours ago',
      read: true,
      category: 'hr'
    }
  ];

  const filteredNotifications = notifications.filter(notification => {
    const matchesFilter = filter === 'all' || 
                         (filter === 'unread' && !notification.read) ||
                         notification.type === filter ||
                         notification.category === filter;
    
    const matchesSearch = notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notification.message.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleMarkAllRead = () => {
    // TODO: Implement mark all read functionality
    console.log('Mark all notifications as read');
  };

  const handleClearAll = () => {
    // TODO: Implement clear all functionality
    console.log('Clear all notifications');
  };

  const handleMarkRead = (notificationId: string) => {
    // TODO: Implement mark single notification as read
    console.log('Mark notification as read:', notificationId);
  };

  const handleDelete = (notificationId: string) => {
    // TODO: Implement delete notification
    console.log('Delete notification:', notificationId);
  };

  return (
    <div className="space-y-6">
      <NotificationsHeader unreadCount={unreadCount} />
      <NavigationTabs activeView={activeView} onViewChange={setActiveView} />
      
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
        <div className="p-6">
          {activeView === 'notifications' && (
            <NotificationsContent
              notifications={filteredNotifications}
              searchTerm={searchTerm}
              filter={filter}
              onSearchChange={setSearchTerm}
              onFilterChange={setFilter}
              onMarkAllRead={handleMarkAllRead}
              onClearAll={handleClearAll}
              onMarkRead={handleMarkRead}
              onDelete={handleDelete}
            />
          )}

          {activeView === 'push-settings' && (
            <NotificationManager user={user} />
          )}
        </div>
      </div>
    </div>
  );
}