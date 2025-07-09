import { UserRole } from '@/types/roles';
import { cn } from '@/lib/utils';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

interface SidebarUserInfoProps {
  user: User;
  roleConfig: { name: string; color: string };
}

export default function SidebarUserInfo({ user, roleConfig }: SidebarUserInfoProps) {
  return (
    <div className="p-4 border-b border-gray-200/50 dark:border-gray-700/50">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
          {user.avatar ? (
            <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-white font-semibold text-sm">
              {user.name.charAt(0).toUpperCase()}
            </span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-medium text-gray-900 dark:text-white truncate">{user.name}</p>
          <div className={cn(
            "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white mt-1",
            roleConfig.color
          )}>
            {roleConfig.name.split('/')[0]}
          </div>
        </div>
      </div>
    </div>
  );
} 