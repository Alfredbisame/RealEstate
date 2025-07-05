'use client';

import { useState, useEffect } from 'react';
import { 
  Bell, X, Check, AlertTriangle, Info, 
  CheckCircle, Clock, Settings, Volume2, VolumeX 
} from 'lucide-react';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp: Date;
  read: boolean;
  priority: 'low' | 'medium' | 'high';
  category: string;
  actionUrl?: string;
}

interface NotificationManagerProps {
  user: any;
}

export default function NotificationManager({ user }: NotificationManagerProps) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isEnabled, setIsEnabled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [permission, setPermission] = useState<NotificationPermission>('default');

  useEffect(() => {
    // Check notification permission
    if ('Notification' in window) {
      setPermission(Notification.permission);
    }

    // Load existing notifications
    loadNotifications();

    // Set up real-time notification listener
    const interval = setInterval(() => {
      checkForNewNotifications();
    }, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const requestPermission = async () => {
    if ('Notification' in window) {
      const result = await Notification.requestPermission();
      setPermission(result);
      if (result === 'granted') {
        setIsEnabled(true);
        showWelcomeNotification();
      }
    }
  };

  const showWelcomeNotification = () => {
    if (permission === 'granted') {
      new Notification('Ghana Real Estate', {
        body: 'Push notifications are now enabled!',
        icon: '/favicon.ico',
        badge: '/favicon.ico'
      });
    }
  };

  const loadNotifications = () => {
    // Simulate loading notifications
    const mockNotifications: Notification[] = [
      {
        id: '1',
        title: 'Project Milestone Reached',
        message: 'East Legon project has reached 75% completion',
        type: 'success',
        timestamp: new Date(Date.now() - 300000), // 5 minutes ago
        read: false,
        priority: 'high',
        category: 'project'
      },
      {
        id: '2',
        title: 'Payment Received',
        message: 'GHS 45,200 payment received from Kwame Properties',
        type: 'success',
        timestamp: new Date(Date.now() - 1800000), // 30 minutes ago
        read: false,
        priority: 'medium',
        category: 'financial'
      },
      {
        id: '3',
        title: 'Safety Alert',
        message: 'Equipment maintenance required at Tema site',
        type: 'warning',
        timestamp: new Date(Date.now() - 3600000), // 1 hour ago
        read: true,
        priority: 'high',
        category: 'safety'
      }
    ];
    setNotifications(mockNotifications);
  };

  const checkForNewNotifications = () => {
    // Simulate checking for new notifications
    const shouldShowNew = Math.random() > 0.8; // 20% chance
    
    if (shouldShowNew && isEnabled) {
      const newNotification: Notification = {
        id: Date.now().toString(),
        title: 'New Update',
        message: 'Material delivery scheduled for tomorrow',
        type: 'info',
        timestamp: new Date(),
        read: false,
        priority: 'medium',
        category: 'logistics'
      };

      setNotifications(prev => [newNotification, ...prev]);
      
      if (permission === 'granted') {
        const browserNotification = new Notification(newNotification.title, {
          body: newNotification.message,
          icon: '/favicon.ico',
          badge: '/favicon.ico',
          tag: newNotification.id
        });

        // Play sound if enabled
        if (soundEnabled) {
          playNotificationSound();
        }

        // Auto-close after 5 seconds
        setTimeout(() => {
          browserNotification.close();
        }, 5000);
      }
    }
  };

  const playNotificationSound = () => {
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT');
    audio.play().catch(() => {
      // Ignore audio play errors
    });
  };

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success': return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'warning': return <AlertTriangle className="w-5 h-5 text-orange-600" />;
      case 'error': return <AlertTriangle className="w-5 h-5 text-red-600" />;
      default: return <Info className="w-5 h-5 text-blue-600" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-red-500';
      case 'medium': return 'border-l-orange-500';
      default: return 'border-l-blue-500';
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Push Notifications</h1>
            <p className="opacity-90">Stay updated with real-time alerts and reminders</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
              <span className="text-sm font-medium">{unreadCount} unread</span>
            </div>
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="p-2 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-colors"
            >
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Permission Request */}
      {permission !== 'granted' && (
        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl p-6">
          <div className="flex items-center space-x-3">
            <Bell className="w-6 h-6 text-orange-600" />
            <div className="flex-1">
              <h3 className="font-semibold text-orange-800 dark:text-orange-400">Enable Push Notifications</h3>
              <p className="text-orange-700 dark:text-orange-300 text-sm mt-1">
                Get instant alerts for important updates, project milestones, and urgent matters.
              </p>
            </div>
            <button
              onClick={requestPermission}
              className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
            >
              Enable
            </button>
          </div>
        </div>
      )}

      {/* Settings Panel */}
      {showSettings && (
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Notification Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Push Notifications</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Receive browser notifications</p>
              </div>
              <button
                onClick={() => setIsEnabled(!isEnabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isEnabled ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isEnabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Sound Alerts</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Play sound for notifications</p>
              </div>
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  soundEnabled ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    soundEnabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="font-medium text-gray-900 dark:text-white mb-3">Notification Categories</p>
              <div className="space-y-2">
                {['Project Updates', 'Financial Alerts', 'Safety Notifications', 'System Updates'].map((category) => (
                  <label key={category} className="flex items-center space-x-3">
                    <input type="checkbox" defaultChecked className="rounded border-gray-300" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{category}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Notifications List */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
        <div className="p-6 border-b border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Notifications</h3>
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Mark all as read
              </button>
            )}
          </div>
        </div>

        <div className="divide-y divide-gray-200/50 dark:divide-gray-700/50">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-6 border-l-4 ${getPriorityColor(notification.priority)} ${
                !notification.read ? 'bg-blue-50/50 dark:bg-blue-900/10' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3 flex-1">
                  {getNotificationIcon(notification.type)}
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className={`font-medium ${!notification.read ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                        {notification.title}
                      </h4>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      )}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      {notification.message}
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                      <span>{notification.timestamp.toLocaleTimeString()}</span>
                      <span className="capitalize">{notification.category}</span>
                      <span className={`px-2 py-1 rounded-full ${
                        notification.priority === 'high' ? 'bg-red-100 text-red-700' :
                        notification.priority === 'medium' ? 'bg-orange-100 text-orange-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {notification.priority}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 ml-4">
                  {!notification.read && (
                    <button
                      onClick={() => markAsRead(notification.id)}
                      className="p-1 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded transition-colors"
                      title="Mark as read"
                    >
                      <Check size={16} />
                    </button>
                  )}
                  <button
                    onClick={() => deleteNotification(notification.id)}
                    className="p-1 text-gray-400 hover:text-red-600 hover:bg-red-100 dark:hover:bg-red-900/20 rounded transition-colors"
                    title="Delete"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {notifications.length === 0 && (
          <div className="p-12 text-center">
            <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No notifications</h3>
            <p className="text-gray-600 dark:text-gray-400">You're all caught up!</p>
          </div>
        )}
      </div>
    </div>
  );
}