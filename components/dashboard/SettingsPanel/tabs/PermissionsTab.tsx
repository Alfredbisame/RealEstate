import { ROLE_CONFIGS, UserRole } from '@/types/roles';

interface PermissionsTabProps {
  role: UserRole;
}

export default function PermissionsTab({ role }: PermissionsTabProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium text-gray-900 dark:text-white mb-3">Current Permissions</h3>
        <div className="space-y-2">
          {ROLE_CONFIGS[role].permissions.map((permission: string) => (
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
  );
} 