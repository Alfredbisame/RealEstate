import { CreditCard } from 'lucide-react';
import { useTheme } from '@/app/components/useTheme';

export default function HeaderCurrency() {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`hidden md:flex items-center space-x-2 px-3 py-2 ${isDarkMode ? 'bg-red-900/30' : 'bg-red-300'} rounded-xl backdrop-blur-sm`}>
      <CreditCard className="w-4 h-4 text-white" />
      <span className="text-sm font-medium text-white">
        GHS/USD: 12.45
      </span>
    </div>
  );
} 