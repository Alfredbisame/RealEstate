import { ROLE_CONFIGS, UserRole } from '@/types/roles';
import { cn } from '@/lib/utils';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

interface UserInfoProps {
  user: User;
}

export default function UserInfo({ user }: UserInfoProps) {
  return (
    <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-blue-50 dark:bg-gray-800">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-blue-500 flex items-center justify-center">
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
  );
} 