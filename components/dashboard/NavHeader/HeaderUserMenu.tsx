import React, { useEffect, useRef } from 'react';
import { ChevronDown, User, Settings, HelpCircle, LogOut } from 'lucide-react';
import { UserRole, ROLE_CONFIGS } from '@/types/roles';
import { createPortal } from 'react-dom';

interface UserType {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

interface HeaderUserMenuProps {
  user: UserType;
  userDropdownOpen: boolean;
  setUserDropdownOpen: (open: boolean) => void;
  onLogout: () => void;
  onSettingsClick: () => void;
}

export default function HeaderUserMenu({ user, userDropdownOpen, setUserDropdownOpen, onLogout, onSettingsClick }: HeaderUserMenuProps) {
  const ref = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if click is outside both the toggle button AND the dropdown menu
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setUserDropdownOpen(false);
      }
    };

    if (userDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [userDropdownOpen, setUserDropdownOpen]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setUserDropdownOpen(!userDropdownOpen)}
        className="flex items-center space-x-3 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
      >
        <div className="w-8 h-8 rounded-full overflow-hidden bg-blue-500 flex items-center justify-center">
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

      {userDropdownOpen && createPortal(
        <div ref={dropdownRef} className="fixed right-4 top-20 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 z-[99999] backdrop-blur-xl">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-blue-500 flex items-center justify-center">
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
              onClick={() => {
                onSettingsClick();
                setUserDropdownOpen(false);
              }}
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
              onClick={() => {
                onLogout();
                setUserDropdownOpen(false);
              }}
              className="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-red-50 dark:hover:bg-red-900 rounded-lg transition-colors text-red-600 dark:text-red-400"
            >
              <LogOut size={16} />
              <span className="text-sm">Sign Out</span>
            </button>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
} 