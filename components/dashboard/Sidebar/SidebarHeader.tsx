import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface SidebarHeaderProps {
  collapsed: boolean;
  onToggle: () => void;
}

export default function SidebarHeader({ collapsed, onToggle }: SidebarHeaderProps) {
  return (
    <div className={"flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700"}>
      {!collapsed && (
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Ghana Real Estate Logo"
              width={78}
              height={78}
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="font-bold text-lg text-blue-500">
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