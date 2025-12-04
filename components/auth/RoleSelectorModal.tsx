'use client';

import { UserRole, ROLE_CONFIGS } from '@/types/roles';
import { User, X } from 'lucide-react';

interface RoleSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRoleSelect: (role: UserRole) => void;
  isLoading: boolean;
  selectedProvider: 'google' | 'facebook' | null;
}

export default function RoleSelectorModal({
  isOpen,
  onClose,
  onRoleSelect,
  isLoading,
  selectedProvider
}: RoleSelectorModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Select Your Role</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Choose your role to access the appropriate dashboard features
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X size={24} className="text-gray-500" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(ROLE_CONFIGS).map(([key, config]) => (
            <button
              key={key}
              onClick={() => onRoleSelect(key as UserRole)}
              disabled={isLoading}
              className="text-left p-6 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed group hover:shadow-lg"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className={`w-10 h-10 ${config.color} rounded-lg flex items-center justify-center`}>
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400">
                    {config.name}
                  </h4>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {config.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {config.permissions.slice(0, 3).map((permission) => (
                  <span
                    key={permission}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs text-gray-600 dark:text-gray-400 rounded-full"
                  >
                    {permission}
                  </span>
                ))}
                {config.permissions.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs text-gray-600 dark:text-gray-400 rounded-full">
                    +{config.permissions.length - 3} more
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>

        {isLoading && (
          <div className="mt-6 flex items-center justify-center">
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <span>Setting up your {selectedProvider} account...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 