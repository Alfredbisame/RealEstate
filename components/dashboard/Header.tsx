'use client';

import { UserRole } from '@/types/roles';
import { 
  User
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
          <HeaderLeft user={user} currentTime={currentTime} />
        </div>
        {/* Center Section - Search */}
        <HeaderSearch />
        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <HeaderCurrency />
          <HeaderThemeToggle isDarkMode={isDarkMode} onThemeToggle={onThemeToggle} />
          <HeaderNotifications notificationsOpen={notificationsOpen} setNotificationsOpen={setNotificationsOpen} notifications={notifications} />
          <HeaderSettings onSettingsClick={onSettingsClick} />
          <HeaderUserMenu user={user} userDropdownOpen={userDropdownOpen} setUserDropdownOpen={setUserDropdownOpen} onLogout={onLogout} onSettingsClick={onSettingsClick} />
        </div>
      </div>
    </header>
  );
}