'use client';

import { useState } from 'react';
import { 
  Bell, CheckCircle, AlertTriangle, Info, 
  X, Filter, Search, Clock, Settings, Volume2, VolumeX 
} from 'lucide-react';
import NotificationManager from '../../mobile/NotificationManager';

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

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Notifications & Alerts</h1>
            <p className="opacity-90">Stay updated with your business activities and push notifications</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
              <span className="text-sm font-medium">{unreadCount} unread</span>
            </div>
            <button className="p-2 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-colors">
              <Bell className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
        <div className="flex border-b border-gray-200/50 dark:border-gray-700/50">
          {[
            { id: 'notifications', label: 'Notifications', icon: Bell },
            { id: 'push-settings', label: 'Push Notifications', icon: Settings }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveView(tab.id)}
              className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors ${
                activeView === tab.id
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              <tab.icon size={20} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeView === 'notifications' && (
            <div className="space-y-6">
              {/* Notification Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <Bell className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">{notifications.length}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Total Notifications</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">{unreadCount}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Unread</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        {notifications.filter(n => n.type === 'success').length}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Success</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        {notifications.filter(n => n.type === 'error').length}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Alerts</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Filters and Search */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="text"
                        placeholder="Search notifications..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    
                    <select
                      value={filter}
                      onChange={(e) => setFilter(e.target.value)}
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="all">All Notifications</option>
                      <option value="unread">Unread</option>
                      <option value="success">Success</option>
                      <option value="warning">Warning</option>
                      <option value="error">Error</option>
                      <option value="info">Info</option>
                      <option value="project">Projects</option>
                      <option value="payment">Payments</option>
                      <option value="safety">Safety</option>
                      <option value="hr">HR</option>
                    </select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Mark All Read
                    </button>
                    <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      Clear All
                    </button>
                  </div>
                </div>
              </div>

              {/* Notifications List */}
              <div className="space-y-3">
                {filteredNotifications.map((notification) => (
                  <div 
                    key={notification.id} 
                    className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border border-gray-200/50 dark:border-gray-700/50 ${getNotificationColor(notification.type)} ${
                      !notification.read ? 'ring-2 ring-blue-500/20' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 mt-1">
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className={`font-semibold ${!notification.read ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                              {notification.title}
                            </h3>
                            {!notification.read && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            )}
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                            {notification.message}
                          </p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Clock size={12} />
                              <span>{notification.time}</span>
                            </div>
                            <span className="capitalize">{notification.category}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        {!notification.read && (
                          <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm">
                            Mark Read
                          </button>
                        )}
                        <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                          <X size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredNotifications.length === 0 && (
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-12 border border-gray-200/50 dark:border-gray-700/50 text-center">
                  <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No notifications found</h3>
                  <p className="text-gray-600 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>
          )}

          {activeView === 'push-settings' && (
            <NotificationManager user={user} />
          )}
        </div>
      </div>
    </div>
  );
}