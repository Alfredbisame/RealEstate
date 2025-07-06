import { User, Palette, Layout, Globe, Shield, Bell } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Tab {
  id: string;
  label: string;
  icon: React.ElementType;
}

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs: Tab[] = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'appearance', label: 'Appearance', icon: Palette },
  { id: 'layout', label: 'Layout', icon: Layout },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'localization', label: 'Localization', icon: Globe },
  { id: 'permissions', label: 'Permissions', icon: Shield },
];

export default function Tabs({ activeTab, setActiveTab }: TabsProps) {
  return (
    <div className="flex overflow-x-auto border-b border-gray-200/50 dark:border-gray-700/50">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={cn(
            "flex items-center space-x-2 px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap",
            activeTab === tab.id
              ? "text-green-600 border-b-2 border-green-600 bg-green-50/50 dark:bg-green-900/20"
              : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          )}
        >
          <tab.icon size={16} />
          <span className="hidden sm:inline">{tab.label}</span>
        </button>
      ))}
    </div>
  );
} 