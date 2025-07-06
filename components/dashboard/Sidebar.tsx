'use client';

import { UserRole, ROLE_CONFIGS } from '@/types/roles';
import { 
  Home, Building2, Calculator, Hammer, Users, DollarSign, 
  Eye, Settings, ChevronLeft, ChevronRight, BarChart3, 
  FileText, PieChart, MapPin, Briefcase, Calendar,
  TrendingUp, CreditCard, Shield, Clock, Award,
  UserCheck, Search, Bell, HelpCircle, Package,
  Truck, Wrench, Phone, Mail, Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';

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

const getMenuItems = (role: UserRole) => {
  const baseItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard', href: '#' },
    { id: 'analytics', icon: BarChart3, label: 'Analytics', href: '#' },
  ];

  const roleSpecificItems: Record<UserRole, any[]> = {
    'property-owner': [
      { id: 'portfolio', icon: Building2, label: 'Portfolio', href: '#' },
      { id: 'investments', icon: TrendingUp, label: 'Investment ROI', href: '#' },
      { id: 'cashflow', icon: DollarSign, label: 'Cash Flow', href: '#' },
      { id: 'taxes', icon: PieChart, label: 'Tax Summary', href: '#' },
      { id: 'properties', icon: MapPin, label: 'Property Values', href: '#' },
      { id: 'invoices', icon: FileText, label: 'Invoices', href: '#' },
      { id: 'financials', icon: Calculator, label: 'Financials', href: '#' },
    ],
    'project-manager': [
      { id: 'projects', icon: Briefcase, label: 'Projects', href: '#' },
      { id: 'timeline', icon: Calendar, label: 'Timeline', href: '#' },
      { id: 'budget', icon: Calculator, label: 'Budget Tracker', href: '#' },
      { id: 'resources', icon: Hammer, label: 'Resources', href: '#' },
      { id: 'materials', icon: Package, label: 'Materials', href: '#' },
      { id: 'quality', icon: Shield, label: 'Quality Control', href: '#' },
      { id: 'logistics', icon: Truck, label: 'Logistics', href: '#' },
      { id: 'equipment', icon: Wrench, label: 'Equipment', href: '#' },
    ],
    'accountant': [
      { id: 'financials', icon: Calculator, label: 'Financials', href: '#' },
      { id: 'invoices', icon: FileText, label: 'Invoices', href: '#' },
      { id: 'payments', icon: CreditCard, label: 'Payments', href: '#' },
      { id: 'reports', icon: PieChart, label: 'Reports', href: '#' },
      { id: 'taxes', icon: Shield, label: 'Tax Compliance', href: '#' },
      { id: 'reconciliation', icon: BarChart3, label: 'Reconciliation', href: '#' },
      { id: 'budgets', icon: DollarSign, label: 'Budget Planning', href: '#' },
      { id: 'audit', icon: Eye, label: 'Audit Trail', href: '#' },
    ],
    'site-supervisor': [
      { id: 'operations', icon: Hammer, label: 'Site Operations', href: '#' },
      { id: 'workers', icon: Users, label: 'Workers', href: '#' },
      { id: 'attendance', icon: UserCheck, label: 'Attendance', href: '#' },
      { id: 'safety', icon: Shield, label: 'Safety Reports', href: '#' },
      { id: 'equipment', icon: Wrench, label: 'Equipment', href: '#' },
      { id: 'progress', icon: Clock, label: 'Progress Tracking', href: '#' },
      { id: 'materials', icon: Package, label: 'Material Requests', href: '#' },
      { id: 'quality', icon: Award, label: 'Quality Control', href: '#' },
    ],
    'sales-agent': [
      { id: 'properties', icon: Building2, label: 'Properties', href: '#' },
      { id: 'clients', icon: Users, label: 'Clients', href: '#' },
      { id: 'leads', icon: TrendingUp, label: 'Leads', href: '#' },
      { id: 'pipeline', icon: BarChart3, label: 'Sales Pipeline', href: '#' },
      { id: 'commissions', icon: DollarSign, label: 'Commissions', href: '#' },
      { id: 'marketing', icon: Award, label: 'Marketing', href: '#' },
      { id: 'listings', icon: MapPin, label: 'Listings', href: '#' },
      { id: 'contacts', icon: Phone, label: 'Contacts', href: '#' },
    ],
    'hr-manager': [
      { id: 'employees', icon: Users, label: 'Employees', href: '#' },
      { id: 'attendance', icon: Calendar, label: 'Attendance', href: '#' },
      { id: 'payroll', icon: DollarSign, label: 'Payroll', href: '#' },
      { id: 'performance', icon: Award, label: 'Performance', href: '#' },
      { id: 'recruitment', icon: UserCheck, label: 'Recruitment', href: '#' },
      { id: 'training', icon: FileText, label: 'Training', href: '#' },
      { id: 'benefits', icon: Shield, label: 'Benefits', href: '#' },
      { id: 'compliance', icon: Eye, label: 'HR Compliance', href: '#' },
    ],
    'auditor': [
      { id: 'reports', icon: Eye, label: 'View Reports', href: '#' },
      { id: 'documents', icon: FileText, label: 'Documents', href: '#' },
      { id: 'compliance', icon: Shield, label: 'Compliance', href: '#' },
      { id: 'transactions', icon: Search, label: 'Transactions', href: '#' },
      { id: 'audit-trail', icon: Clock, label: 'Audit Trail', href: '#' },
      { id: 'financial-review', icon: Calculator, label: 'Financial Review', href: '#' },
    ],
  };

  const additionalItems = [
    { id: 'communications', icon: Mail, label: 'Communications', href: '#' },
    { id: 'integrations', icon: Zap, label: 'Integrations', href: '#' },
    { id: 'notifications', icon: Bell, label: 'Notifications', href: '#' },
    { id: 'help', icon: HelpCircle, label: 'Help & Support', href: '#' },
    { id: 'settings', icon: Settings, label: 'Settings', href: '#' },
  ];

  return [...baseItems, ...roleSpecificItems[role], ...additionalItems];
};

export default function Sidebar({ user, collapsed, onToggle, activeTab, onTabChange }: SidebarProps) {
  const menuItems = getMenuItems(user.role);
  const roleConfig = ROLE_CONFIGS[user.role];

  return (
    <div className={cn(
      "fixed left-0 top-0 h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-r border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 z-30 shadow-xl",
      collapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200/50 dark:border-gray-700/50">
        {!collapsed && (
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
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

      {/* User Info */}
      {!collapsed && (
        <div className="p-4 border-b border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
              {user.avatar ? (
                <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-white font-semibold text-sm">
                  {user.name.charAt(0).toUpperCase()}
                </span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900 dark:text-white truncate">{user.name}</p>
              <div className={cn(
                "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white mt-1",
                roleConfig.color
              )}>
                {roleConfig.name.split('/')[0]}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li key={item.id}>
              <button
                onClick={() => onTabChange(item.id)}
                className={cn(
                  "w-full flex items-center px-3 py-2.5 rounded-xl transition-all duration-200 group",
                  activeTab === item.id 
                    ? "bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg" 
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50"
                )}
              >
                <item.icon size={20} className="flex-shrink-0" />
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

      {/* Ghana Flag Footer */}
      {!collapsed && (
        <div className="p-4 border-t border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center justify-center space-x-1 mb-2">
            <div className="w-6 h-2 bg-red-500 rounded-sm"></div>
            <div className="w-6 h-2 bg-yellow-500 rounded-sm"></div>
            <div className="w-6 h-2 bg-green-500 rounded-sm"></div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            Proudly Ghanaian 🇬🇭
          </p>
        </div>
      )}
    </div>
  );
}