'use client';

import { UserRole } from '@/types/roles';
import PropertyOwnerDashboard from './dashboards/PropertyOwnerDashboard';
import ProjectManagerDashboard from './dashboards/ProjectManagerDashboard';
import AccountantDashboard from './dashboards/AccountantDashboard';
import SiteSupervisorDashboard from './dashboards/SiteSupervisorDashboard';
import SalesAgentDashboard from './dashboards/SalesAgentDashboard';
import HRManagerDashboard from './dashboards/HRManagerDashboard';
import AuditorDashboard from './dashboards/AuditorDashboard';
import AnalyticsTab from './tabs/AnalyticsTab';
import PortfolioTab from './tabs/PortfolioTab';
import ProjectsTab from './tabs/ProjectsTab';
import FinancialsTab from './tabs/FinancialsTab';
import EmployeesTab from './tabs/EmployeesTab';
import NotificationsTab from './tabs/NotificationsTab';
import HelpTab from './tabs/HelpTab';
import CommunicationsTab from './tabs/CommunicationsTab';
import IntegrationsTab from './tabs/IntegrationsTab';
import CashFlowScreen from './dashboards/property-owner/CashFlowScreen';
import TaxSummaryScreen from './dashboards/property-owner/TaxSummaryScreen';
import PropertyValuesScreen from './dashboards/property-owner/PropertyValuesScreen';
import InvoicesScreen from './dashboards/super-admin/InvoicesScreen';
import BudgetTrackerScreen from './dashboards/property-owner/BudgetTrackerScreen';
import ResourcesScreen from './dashboards/project-manager/ResourcesScreen';
import MaterialsScreen from './dashboards/project-manager/MaterialsScreen';
import QualityControlScreen from './dashboards/project-manager/QualityControlScreen';
import LogisticsScreen from './dashboards/project-manager/LogisticsScreen';
import EquipmentScreen from './dashboards/project-manager/EquipmentScreen';
import AccountantInvoicesScreen from './dashboards/accountant/InvoicesScreen';
import AccountantPaymentsScreen from './dashboards/accountant/PaymentsScreen';
import AccountantReportsScreen from './dashboards/accountant/ReportsScreen';
import AccountantTaxComplianceScreen from './dashboards/accountant/TaxComplianceScreen';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

interface DashboardContentProps {
  user: User;
  activeTab: string;
}

export default function DashboardContent({ user, activeTab }: DashboardContentProps) {
  const renderTabContent = () => {
    // Common tabs across all roles
    switch (activeTab) {
      case 'analytics':
        return <AnalyticsTab user={user} />;
      case 'notifications':
        return <NotificationsTab user={user} />;
      case 'help':
        return <HelpTab user={user} />;
      case 'communications':
        return <CommunicationsTab user={user} />;
      case 'integrations':
        return <IntegrationsTab user={user} />;
      default:
        break;
    }

    // Role-specific tabs
    switch (user.role) {
      case 'property-owner':
        switch (activeTab) {
          case 'dashboard':
            return <PropertyOwnerDashboard />;
          case 'portfolio':
            return <PortfolioTab user={user} />;
          case 'financials':
            return <FinancialsTab user={user} />;
          case 'cashflow':
            return <CashFlowScreen user={user} />;
          case 'taxes':
            return <TaxSummaryScreen user={user} />;
          case 'properties':
            return <PropertyValuesScreen user={user} />;
          case 'invoices':
            return <InvoicesScreen user={user} />;
          default:
            return <PropertyOwnerDashboard />;
        }
      
      case 'project-manager':
        switch (activeTab) {
          case 'dashboard':
            return <ProjectManagerDashboard />;
          case 'projects':
            return <ProjectsTab user={user} />;
          case 'budget':
            return <BudgetTrackerScreen user={user} />;
          case 'resources':
            return <ResourcesScreen user={user} />;
          case 'materials':
            return <MaterialsScreen user={user} />;
          case 'quality-control':
            return <QualityControlScreen user={user} />;
          case 'logistics':
            return <LogisticsScreen user={user} />;
          case 'equipment':
            return <EquipmentScreen user={user} />;
          default:
            return <ProjectManagerDashboard />;
        }
      
      case 'accountant':
        switch (activeTab) {
          case 'dashboard':
            return <AccountantDashboard />;
          case 'financials':
            return <FinancialsTab user={user} />;
          case 'invoices':
            return <AccountantInvoicesScreen user={user} />;
          case 'payments':
            return <AccountantPaymentsScreen user={user} />;
          case 'reports':
            return <AccountantReportsScreen user={user} />;
          case 'tax-compliance':
            return <AccountantTaxComplianceScreen user={user} />;
          default:
            return <AccountantDashboard />;
        }
      
      case 'site-supervisor':
        switch (activeTab) {
          case 'dashboard':
            return <SiteSupervisorDashboard />;
          default:
            return <SiteSupervisorDashboard />;
        }
      
      case 'sales-agent':
        switch (activeTab) {
          case 'dashboard':
            return <SalesAgentDashboard />;
          default:
            return <SalesAgentDashboard />;
        }
      
      case 'hr-manager':
        switch (activeTab) {
          case 'dashboard':
            return <HRManagerDashboard />;
          case 'employees':
            return <EmployeesTab user={user} />;
          default:
            return <HRManagerDashboard />;
        }
      
      case 'auditor':
        switch (activeTab) {
          case 'dashboard':
            return <AuditorDashboard />;
          default:
            return <AuditorDashboard />;
        }
      
      default:
        return <PropertyOwnerDashboard />;
    }
  };

  return (
    <div className="p-6">
      {renderTabContent()}
    </div>
  );
}