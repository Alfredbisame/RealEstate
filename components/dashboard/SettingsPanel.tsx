'use client';

import { useState } from 'react';
import { UserRole } from '@/types/roles';
import { X, Palette, Layout, Globe, Shield, User, Bell } from 'lucide-react';
import UserInfo from './SettingsPanel/UserInfo';
import Tabs from './SettingsPanel/Tabs';
import ProfileTab from './SettingsPanel/tabs/ProfileTab';
import AppearanceTab from './SettingsPanel/tabs/AppearanceTab';
import LayoutTab from './SettingsPanel/tabs/LayoutTab';
import NotificationsTab from './SettingsPanel/tabs/NotificationsTab';
import LocalizationTab from './SettingsPanel/tabs/LocalizationTab';
import PermissionsTab from './SettingsPanel/tabs/PermissionsTab';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  user: User;
}

export default function SettingsPanel({ isOpen, onClose, user }: SettingsPanelProps) {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'layout', label: 'Layout', icon: Layout },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'localization', label: 'Localization', icon: Globe },
    { id: 'permissions', label: 'Permissions', icon: Shield },
  ];

  const themes = [
    { id: 'light', name: 'Light Theme', preview: 'bg-white border-gray-200' },
    { id: 'dark', name: 'Dark Theme', preview: 'bg-gray-800 border-gray-600' },
    { id: 'ghana', name: 'Ghana Theme', preview: 'bg-gradient-to-r from-red-500 via-yellow-500 to-green-500' },
    { id: 'kente', name: 'Kente Theme', preview: 'bg-gradient-to-r from-orange-500 via-purple-500 to-green-500' },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      {/* Panel */}
      <div className="ml-auto w-full max-w-md bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl shadow-2xl border-l border-gray-200/50 dark:border-gray-700/50">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200/50 dark:border-gray-700/50">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Settings</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        {/* User Info */}
        <UserInfo user={user} />
        {/* Tabs */}
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {/* Content */}
        <div className="p-6 space-y-6 max-h-96 overflow-y-auto">
          {activeTab === 'profile' && <ProfileTab user={user} />}
          {activeTab === 'appearance' && <AppearanceTab />}
          {activeTab === 'layout' && <LayoutTab />}
          {activeTab === 'notifications' && <NotificationsTab />}
          {activeTab === 'localization' && <LocalizationTab />}
          {activeTab === 'permissions' && <PermissionsTab role={user.role} />}
        </div>
        {/* Footer */}
        <div className="p-6 border-t border-gray-200/50 dark:border-gray-700/50 bg-gray-50/50 dark:bg-gray-700/50">
          <div className="flex space-x-3">
            <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Save Changes
            </button>
            <button 
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}