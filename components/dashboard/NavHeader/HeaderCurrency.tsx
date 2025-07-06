import { CreditCard } from 'lucide-react';

export default function HeaderCurrency() {
  return (
    <div className="hidden md:flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-xl backdrop-blur-sm">
      <CreditCard className="w-4 h-4 text-green-600 dark:text-green-400" />
      <span className="text-sm font-medium text-green-700 dark:text-green-300">
        GHS/USD: 12.45
      </span>
    </div>
  );
} 