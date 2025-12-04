import { CreditCard } from 'lucide-react';

export default function HeaderCurrency() {
  return (
    <div className="hidden md:flex items-center space-x-2 px-3 py-2 bg-blue-500 rounded-xl">
      <CreditCard className="w-4 h-4 text-white" />
      <span className="text-sm font-medium text-white">
        GHS/USD: 12.45
      </span>
    </div>
  );
} 