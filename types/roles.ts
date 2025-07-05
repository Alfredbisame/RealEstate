export type UserRole = 
  | 'property-owner'
  | 'project-manager'
  | 'accountant'
  | 'site-supervisor'
  | 'sales-agent'
  | 'hr-manager'
  | 'auditor';

export interface RoleConfig {
  id: UserRole;
  name: string;
  description: string;
  color: string;
  permissions: string[];
}

export const ROLE_CONFIGS: Record<UserRole, RoleConfig> = {
  'property-owner': {
    id: 'property-owner',
    name: 'Property Owner/Investor',
    description: 'Full access to all features',
    color: 'bg-green-500',
    permissions: ['read', 'write', 'admin', 'financial', 'reports']
  },
  'project-manager': {
    id: 'project-manager',
    name: 'Project Manager',
    description: 'Project & Construction Focus',
    color: 'bg-blue-500',
    permissions: ['read', 'write', 'projects', 'construction']
  },
  'accountant': {
    id: 'accountant',
    name: 'Accountant/Bookkeeper',
    description: 'Financial Focus',
    color: 'bg-orange-500',
    permissions: ['read', 'write', 'financial', 'reports']
  },
  'site-supervisor': {
    id: 'site-supervisor',
    name: 'Site Supervisor',
    description: 'Field Operations',
    color: 'bg-amber-500',
    permissions: ['read', 'write', 'field-ops']
  },
  'sales-agent': {
    id: 'sales-agent',
    name: 'Sales Agent',
    description: 'Sales & Marketing Focus',
    color: 'bg-purple-500',
    permissions: ['read', 'write', 'sales', 'marketing']
  },
  'hr-manager': {
    id: 'hr-manager',
    name: 'HR Manager',
    description: 'Human Resources Focus',
    color: 'bg-pink-500',
    permissions: ['read', 'write', 'hr', 'payroll']
  },
  'auditor': {
    id: 'auditor',
    name: 'Auditor/Viewer',
    description: 'Read-Only Access',
    color: 'bg-gray-500',
    permissions: ['read']
  }
};