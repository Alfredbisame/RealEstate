'use client';

import { UserRole, ROLE_CONFIGS } from '@/types/roles';
import { 
  Search, Bell, User, Sun, Moon, Settings, 
  ChevronDown, Globe, LogOut, CreditCard, HelpCircle
} from 'lucide-react';
import { useState } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

interface HeaderProps {
  user: User;
  onLogout: () => void;
  isDarkMode: boolean;
  onThemeToggle: () => void;
  onSettingsClick: () => void;
}

export default function Header({ 
  user, 
  onLogout, 
  isDarkMode, 
  onThemeToggle,
  onSettingsClick 
}: HeaderProps) {
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  
  const currentTime = new Date().toLocaleString('en-GB', { 
    timeZone: 'Africa/Accra',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const notifications = [
    { id: 1, title: 'New project milestone reached', time: '5 min ago', type: 'success' },
    { id: 2, title: 'Payment received from client', time: '1 hour ago', type: 'info' },
    { id: 3, title: 'Material delivery scheduled', time: '2 hours ago', type: 'warning' },
  ];

  return (
    <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        
        {/* Left Section */}
        <div className="flex items-center space-x-6">
          <div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              {ROLE_CONFIGS[user.role].name} Dashboard
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
              <Globe className="inline w-4 h-4 mr-1" />
              Accra, Ghana • {currentTime}
            </p>
          </div>
        </div>

        {/* Center Section - Search */}
        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search properties, projects, or clients..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300/50 dark:border-gray-600/50 rounded-xl bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:border-transparent backdrop-blur-sm transition-all"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          
          {/* Currency Display */}
          <div className="hidden md:flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-xl backdrop-blur-sm">
            <CreditCard className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-sm font-medium text-green-700 dark:text-green-300">
              GHS/USD: 12.45
            </span>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={onThemeToggle}
            className="p-2.5 rounded-xl bg-gray-100/80 dark:bg-gray-700/80 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all backdrop-blur-sm"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Notifications */}
          <div className="relative">
            <button 
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="relative p-2.5 rounded-xl bg-gray-100/80 dark:bg-gray-700/80 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all backdrop-blur-sm"
            >
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>

            {notificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 z-50 backdrop-blur-xl">
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
            )}
          </div>

          {/* Settings */}
          <button
            onClick={onSettingsClick}
            className="p-2.5 rounded-xl bg-gray-100/80 dark:bg-gray-700/80 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all backdrop-blur-sm"
          >
            <Settings size={20} />
          </button>

          {/* User Profile */}
          <div className="relative">
            <button
              onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              className="flex items-center space-x-3 px-3 py-2 bg-gray-100/80 dark:bg-gray-700/80 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all backdrop-blur-sm"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
                {user.avatar ? (
                  <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-white font-semibold text-sm">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                )}
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{user.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{user.email}</p>
              </div>
              <ChevronDown size={16} className="text-gray-500" />
            </button>

            {userDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 z-50 backdrop-blur-xl">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
                      {user.avatar ? (
                        <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-white font-semibold">
                          {user.name.charAt(0).toUpperCase()}
                        </span>
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{user.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium text-white mt-1 ${ROLE_CONFIGS[user.role].color}`}>
                        {ROLE_CONFIGS[user.role].name.split('/')[0]}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-2">
                  <button className="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <User size={16} />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Profile Settings</span>
                  </button>
                  <button 
                    onClick={onSettingsClick}
                    className="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <Settings size={16} />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Preferences</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <HelpCircle size={16} />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Help & Support</span>
                  </button>
                </div>
                
                <div className="p-2 border-t border-gray-200 dark:border-gray-700">
                  <button 
                    onClick={onLogout}
                    className="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors text-red-600 dark:text-red-400"
                  >
                    <LogOut size={16} />
                    <span className="text-sm">Sign Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}