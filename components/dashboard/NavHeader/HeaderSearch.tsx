import { Search } from 'lucide-react';

export default function HeaderSearch() {
  return (
    <div className="flex-1 max-w-xl mx-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search properties, projects, or clients..."
          className="w-full pl-10 pr-4 py-2.5 border border-gray-300/50 dark:border-gray-600/50 rounded-xl bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:border-transparent backdrop-blur-sm transition-all"
        />
      </div>
    </div>
  );
} 