'use client';

import { UserRole, ROLE_CONFIGS } from '@/types/roles';
import { cn } from '@/lib/utils';
import SidebarHeader from './Sidebar/SidebarHeader';
import SidebarUserInfo from './Sidebar/SidebarUserInfo';
import SidebarNav from './Sidebar/SidebarNav';
import SidebarFooter from './Sidebar/SidebarFooter';
import { getMenuItems } from './Sidebar/SidebarMenuUtils';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

interface SidebarProps {
  user: User;
  collapsed: boolean;
  onToggle: () => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Sidebar({ user, collapsed, onToggle, activeTab, onTabChange }: SidebarProps) {
  const menuItems = getMenuItems(user.role);
  const roleConfig = ROLE_CONFIGS[user.role];

  return (
    <div className={cn(
      "fixed left-0 top-0 h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 z-30 shadow-xl",
      collapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <SidebarHeader collapsed={collapsed} onToggle={onToggle} />

      {/* User Info */}
      {!collapsed && <SidebarUserInfo user={user} roleConfig={roleConfig} />}

      {/* Navigation */}
      <SidebarNav menuItems={menuItems} collapsed={collapsed} activeTab={activeTab} onTabChange={onTabChange} />

      {/* Ghana Flag Footer */}
      {!collapsed && <SidebarFooter />}
    </div>
  );
}