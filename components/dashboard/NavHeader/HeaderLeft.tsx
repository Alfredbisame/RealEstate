import { Globe } from 'lucide-react';
import { UserRole, ROLE_CONFIGS } from '@/types/roles';

interface HeaderLeftProps {
  user: {
    role: UserRole;
  };
  currentTime: string;
}

export default function HeaderLeft({ user, currentTime }: HeaderLeftProps) {
  return (
    <div>
      <h2 className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
        {ROLE_CONFIGS[user.role].name} Dashboard
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
        <Globe className="inline w-4 h-4 mr-1" />
        Accra, Ghana • {currentTime}
      </p>
    </div>
  );
} 