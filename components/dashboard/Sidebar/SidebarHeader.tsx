import { ChevronLeft, ChevronRight, Building2 } from 'lucide-react';
import { useTheme } from '@/app/components/useTheme';

interface SidebarHeaderProps {
  collapsed: boolean;
  onToggle: () => void;
}

export default function SidebarHeader({ collapsed, onToggle }: SidebarHeaderProps) {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={"flex items-center justify-between p-4 border-b border-gray-200/50 dark:border-gray-700/50"}>
      {!collapsed && (
        <div className="flex items-center space-x-3">
          <div className={`w-8 h-8 ${isDarkMode ? 'bg-red-600' : 'bg-red-500'} rounded-lg flex items-center justify-center`}>
            <Building2 className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Ghana RE
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">Analytics Platform</p>
          </div>
        </div>
      )}
      <button
        onClick={onToggle}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
      </button>
    </div>
  );
} 