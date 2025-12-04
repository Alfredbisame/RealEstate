'use client';

import { UserRole } from '@/types/roles';
import {
  User,
  Menu
} from 'lucide-react';
import { useState } from 'react';
import HeaderLeft from './NavHeader/HeaderLeft';
import HeaderSearch from './NavHeader/HeaderSearch';
import HeaderCurrency from './NavHeader/HeaderCurrency';
import HeaderThemeToggle from './NavHeader/HeaderThemeToggle';
import HeaderNotifications from './NavHeader/HeaderNotifications';
import HeaderSettings from './NavHeader/HeaderSettings';
import HeaderUserMenu from './NavHeader/HeaderUserMenu';

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
  onMenuClick?: () => void;
  isMobile?: boolean;
}

export default function Header({
  user,
  onLogout,
  isDarkMode,
  onThemeToggle,
  onSettingsClick,
  onMenuClick,
  isMobile
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
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 md:px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={onMenuClick}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <Menu className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
          )}
          <div className="hidden sm:block">
            <HeaderLeft user={user} currentTime={currentTime} />
          </div>
          {/* Mobile User Info */}
          <div className="sm:hidden">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              {user.name}
            </h2>
          </div>
        </div>

        {/* Center Section - Search - Hidden on mobile */}
        <div className="hidden md:block">
          <HeaderSearch />
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <div className="hidden sm:block">
            <HeaderCurrency />
          </div>
          <HeaderThemeToggle isDarkMode={isDarkMode} onThemeToggle={onThemeToggle} />
          <HeaderNotifications notificationsOpen={notificationsOpen} setNotificationsOpen={setNotificationsOpen} notifications={notifications} />
          <div className="hidden sm:block">
            <HeaderSettings onSettingsClick={onSettingsClick} />
          </div>
          <HeaderUserMenu user={user} userDropdownOpen={userDropdownOpen} setUserDropdownOpen={setUserDropdownOpen} onLogout={onLogout} onSettingsClick={onSettingsClick} />
        </div>
      </div>
    </header>
  );
}