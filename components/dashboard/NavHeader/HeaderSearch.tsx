import { Search } from 'lucide-react';
import { useTheme } from '@/app/components/useTheme';

export default function HeaderSearch() {
  const { isDarkMode } = useTheme();
  
  return (
    <div className="flex-1 max-w-xl mx-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search properties, projects, or clients..."
          className={`w-full pl-10 pr-4 py-2.5 border rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-red-500 focus:border-transparent backdrop-blur-sm transition-all ${isDarkMode ? 'border-gray-600/50 bg-gray-700/50 text-white' : 'border-gray-300/50 bg-white/50'}`}
        />
      </div>
    </div>
  );
} 