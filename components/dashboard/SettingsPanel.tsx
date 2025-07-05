'use client';

import { useState } from 'react';
import { UserRole, ROLE_CONFIGS } from '@/types/roles';
import { X, Palette, Layout, Globe, Shield, User, Bell } from 'lucide-react';
import { cn } from '@/lib/utils';

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
        <div className="p-6 border-b border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
              {user.avatar ? (
                <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-white font-bold text-xl">
                  {user.name.charAt(0).toUpperCase()}
                </span>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">{user.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{user.email}</p>
              <span className={cn(
                "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white mt-2",
                ROLE_CONFIGS[user.role].color
              )}>
                {ROLE_CONFIGS[user.role].name.split('/')[0]}
              </span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto border-b border-gray-200/50 dark:border-gray-700/50">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center space-x-2 px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap",
                activeTab === tab.id
                  ? "text-green-600 border-b-2 border-green-600 bg-green-50/50 dark:bg-green-900/20"
                  : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              )}
            >
              <tab.icon size={16} />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-96 overflow-y-auto">
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-3">Personal Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      defaultValue={user.name}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      defaultValue={user.email}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+233 XX XXX XXXX"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-3">Security</h3>
                <div className="space-y-3">
                  <button className="w-full text-left px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <p className="font-medium text-gray-900 dark:text-white">Change Password</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Update your account password</p>
                  </button>
                  <button className="w-full text-left px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <p className="font-medium text-gray-900 dark:text-white">Two-Factor Authentication</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Add an extra layer of security</p>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'appearance' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-3">Theme Selection</h3>
                <div className="grid grid-cols-2 gap-3">
                  {themes.map((theme) => (
                    <button
                      key={theme.id}
                      className="flex flex-col items-center space-y-2 p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className={cn("w-12 h-8 rounded border", theme.preview)} />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{theme.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-3">Color Customization</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700 dark:text-gray-300">Primary Color</span>
                    <div className="w-8 h-8 bg-green-500 rounded border cursor-pointer" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700 dark:text-gray-300">Secondary Color</span>
                    <div className="w-8 h-8 bg-blue-500 rounded border cursor-pointer" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700 dark:text-gray-300">Accent Color</span>
                    <div className="w-8 h-8 bg-orange-500 rounded border cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'layout' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-3">Dashboard Layout</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="layout" value="grid" className="text-green-600" defaultChecked />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Grid Layout</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="layout" value="list" className="text-green-600" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">List Layout</span>
                  </label>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-3">Sidebar Position</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="sidebar" value="left" className="text-green-600" defaultChecked />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Left Sidebar</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="sidebar" value="right" className="text-green-600" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Right Sidebar</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-3">Email Notifications</h3>
                <div className="space-y-3">
                  <label className="flex items-center justify-between">
                    <span className="text-sm text-gray-700 dark:text-gray-300">Project Updates</span>
                    <input type="checkbox" className="text-green-600" defaultChecked />
                  </label>
                  <label className="flex items-center justify-between">
                    <span className="text-sm text-gray-700 dark:text-gray-300">Payment Notifications</span>
                    <input type="checkbox" className="text-green-600" defaultChecked />
                  </label>
                  <label className="flex items-center justify-between">
                    <span className="text-sm text-gray-700 dark:text-gray-300">Safety Alerts</span>
                    <input type="checkbox" className="text-green-600" defaultChecked />
                  </label>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-3">Push Notifications</h3>
                <div className="space-y-3">
                  <label className="flex items-center justify-between">
                    <span className="text-sm text-gray-700 dark:text-gray-300">Urgent Alerts</span>
                    <input type="checkbox" className="text-green-600" defaultChecked />
                  </label>
                  <label className="flex items-center justify-between">
                    <span className="text-sm text-gray-700 dark:text-gray-300">Daily Summary</span>
                    <input type="checkbox" className="text-green-600" />
                  </label>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'localization' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-3">Currency Settings</h3>
                <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                  <option value="GHS">Ghana Cedi (GHS)</option>
                  <option value="USD">US Dollar (USD)</option>
                  <option value="EUR">Euro (EUR)</option>
                </select>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-3">Date Format</h3>
                <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                  <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                  <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                  <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                </select>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-3">Time Zone</h3>
                <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                  <option value="Africa/Accra">Africa/Accra (GMT)</option>
                  <option value="UTC">UTC</option>
                </select>
              </div>
            </div>
          )}

          {activeTab === 'permissions' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-3">Current Permissions</h3>
                <div className="space-y-2">
                  {ROLE_CONFIGS[user.role].permissions.map((permission) => (
                    <div key={permission} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-sm text-gray-700 dark:text-gray-300 capitalize">
                        {permission.replace('-', ' ')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-3">Data Access</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="text-green-600" defaultChecked />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Financial Data</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="text-green-600" defaultChecked />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Project Data</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="text-green-600" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">HR Data</span>
                  </label>
                </div>
              </div>
            </div>
          )}
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