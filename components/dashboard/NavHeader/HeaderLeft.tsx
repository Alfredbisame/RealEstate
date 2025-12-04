import { Globe } from 'lucide-react';
import { UserRole, ROLE_CONFIGS } from '@/types/roles';
import { useTheme } from '@/app/components/useTheme';

interface HeaderLeftProps {
  user: {
    role: UserRole;
  };
  currentTime: string;
}

export default function HeaderLeft({ user, currentTime }: HeaderLeftProps) {
  const { isDarkMode } = useTheme();
  
  return (
    <div>
      <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        {ROLE_CONFIGS[user.role].name} Dashboard
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
        <Globe className="inline w-4 h-4 mr-1" />
        Accra, Ghana • {currentTime}
      </p>
    </div>
  );
} 