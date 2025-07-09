import { UserRole } from '@/types/roles';
import {
  Home, Building2, Calculator, Hammer, Users, DollarSign,
  Eye, Settings, BarChart3, FileText, PieChart, MapPin, Briefcase, Calendar,
  TrendingUp, CreditCard, Shield, Clock, Award, UserCheck, Search, Bell, HelpCircle, Package, Truck, Wrench, Phone, Mail, Zap
} from 'lucide-react';

export interface MenuItem {
  id: string;
  icon: React.ElementType;
  label: string;
  href: string;
}

export const getMenuItems = (role: UserRole): MenuItem[] => {
  const baseItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard', href: '#' },
    { id: 'analytics', icon: BarChart3, label: 'Analytics', href: '#' },
  ];

  const roleSpecificItems: Record<UserRole, MenuItem[]> = {
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
      { id: 'quality-control', icon: Shield, label: 'Quality Control', href: '#' },
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

  const additionalItems: MenuItem[] = [
    { id: 'communications', icon: Mail, label: 'Communications', href: '#' },
    { id: 'integrations', icon: Zap, label: 'Integrations', href: '#' },
    { id: 'notifications', icon: Bell, label: 'Notifications', href: '#' },
    { id: 'help', icon: HelpCircle, label: 'Help & Support', href: '#' },
    { id: 'settings', icon: Settings, label: 'Settings', href: '#' },
  ];

  return [...baseItems, ...roleSpecificItems[role], ...additionalItems];
}; 