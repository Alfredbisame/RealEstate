import { cn } from '@/lib/utils';

interface MenuItem {
  id: string;
  icon: React.ElementType;
  label: string;
  href: string;
}

interface SidebarNavProps {
  menuItems: MenuItem[];
  collapsed: boolean;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function SidebarNav({ menuItems, collapsed, activeTab, onTabChange }: SidebarNavProps) {
  return (
    <nav className="flex-1 p-4 overflow-y-auto">
      <ul className="space-y-1">
        {menuItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => onTabChange(item.id)}
              className={cn(
                "w-full flex items-center px-3 py-2.5 rounded-xl transition-all duration-200 group relative",
                collapsed ? "justify-center min-w-[48px] w-12" : "",
                activeTab === item.id 
                  ? "bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg" 
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50"
              )}
            >
              <item.icon size={20} className={cn("flex-shrink-0", collapsed ? "mx-auto" : "")}/>
              {!collapsed && (
                <span className="ml-3 font-medium">{item.label}</span>
              )}
              {collapsed && (
                <div className="absolute left-16 bg-gray-900 text-white px-2 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                  {item.label}
                </div>
              )}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
} 