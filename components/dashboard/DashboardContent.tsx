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
import ProjectManagerEquipmentScreen from './dashboards/project-manager/EquipmentScreen';
import AccountantInvoicesScreen from './dashboards/accountant/InvoicesScreen';
import AccountantPaymentsScreen from './dashboards/accountant/PaymentsScreen';
import AccountantReportsScreen from './dashboards/accountant/ReportsScreen';
import AccountantTaxComplianceScreen from './dashboards/accountant/TaxComplianceScreen';
import AccountantReconciliationScreen from './dashboards/accountant/ReconciliationScreen';
import AccountantBudgetPlanningScreen from './dashboards/accountant/BudgetPlanningScreen';
import AccountantAuditTrailScreen from './dashboards/accountant/AuditTrailScreen';
import WorkersTab from './tabs/WorkersTab';
import WorkersScreen from './dashboards/site-supervisor/WorkersScreen';
import AttendanceTab from './tabs/AttendanceTab';
import AttendanceScreen from './dashboards/site-supervisor/AttendanceScreen';
import SafetyTab from './tabs/SafetyTab';
import SafetyReportsScreen from './dashboards/site-supervisor/SafetyReportsScreen';
import EquipmentTab from './tabs/EquipmentTab';
import EquipmentScreen from './dashboards/site-supervisor/EquipmentScreen';
import ProgressTrackingTab from './tabs/ProgressTrackingTab';
import ProgressTrackingScreen from './dashboards/site-supervisor/ProgressTrackingScreen';
import MaterialRequestsTab from './tabs/MaterialRequestsTab';
import MaterialRequestsScreen from './dashboards/site-supervisor/MaterialRequestsScreen';
import SiteSupervisorQualityControlScreen from './dashboards/site-supervisor/QualityControlScreen';
import ClientsTab from './tabs/ClientsTab';
import ClientsScreen from './dashboards/sales-agent/ClientsScreen';
import LeadsTab from './tabs/LeadsTab';
import LeadsScreen from './dashboards/sales-agent/LeadsScreen';
import SalesPipelineTab from './tabs/SalesPipelineTab';
import SalesPipelineScreen from './dashboards/sales-agent/SalesPipelineScreen';
import CommissionsTab from './tabs/CommissionsTab';
import CommissionsScreen from './dashboards/sales-agent/CommissionsScreen';
import MarketingTab from './tabs/MarketingTab';
import MarketingScreen from './dashboards/sales-agent/MarketingScreen';
import PropertyListingsTab from './tabs/PropertyListingsTab';
import HRManagerAttendanceTab from './tabs/HRManagerAttendanceTab';
import HRManagerPayrollTab from './tabs/HRManagerPayrollTab';
import HRManagerPerformanceTab from './tabs/HRManagerPerformanceTab';
import HRManagerRecruitmentTab from './tabs/HRManagerRecruitmentTab';
import HRManagerTrainingTab from './tabs/HRManagerTrainingTab';

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
            return <ProjectManagerEquipmentScreen user={user} />;
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
          case 'reconciliation':
            return <AccountantReconciliationScreen user={user} />;
          case 'budgets':
            return <AccountantBudgetPlanningScreen user={user} />;
          case 'audit':
            return <AccountantAuditTrailScreen user={user} />;
          default:
            return <AccountantDashboard />;
        }
      
      case 'site-supervisor':
        switch (activeTab) {
          case 'dashboard':
            return <SiteSupervisorDashboard />;
          case 'workers':
            return <WorkersScreen user={user} />;
          case 'attendance':
            return <AttendanceScreen user={user} />;
          case 'safety':
            return <SafetyReportsScreen user={user} />;
          case 'equipment':
            return <EquipmentScreen user={user} />;
          case 'progress':
            return <ProgressTrackingScreen user={user} />;
          case 'materials':
            return <MaterialRequestsScreen user={user} />;
          case 'quality':
            return <SiteSupervisorQualityControlScreen user={user} />;
          default:
            return <SiteSupervisorDashboard />;
        }
      
      case 'sales-agent':
        switch (activeTab) {
          case 'dashboard':
            return <SalesAgentDashboard />;
          case 'clients':
            return <ClientsScreen user={user} />;
          case 'leads':
            return <LeadsScreen user={user} />;
          case 'sales-pipeline':
            return <SalesPipelineScreen user={user} />;
          case 'commissions':
            return <CommissionsScreen user={user} />;
          case 'marketing':
            return <MarketingScreen user={user} />;
          case 'listings':
            return <PropertyListingsTab user={user} />;
          default:
            return <SalesAgentDashboard />;
        }
      
      case 'hr-manager':
        switch (activeTab) {
          case 'dashboard':
            return <HRManagerDashboard />;
          case 'employees':
            return <EmployeesTab user={user} />;
          case 'attendance':
            return <HRManagerAttendanceTab />;
          case 'payroll':
            return <HRManagerPayrollTab />;
          case 'performance':
            return <HRManagerPerformanceTab />;
          case 'recruitment':
            return <HRManagerRecruitmentTab />;
          case 'training':
            return <HRManagerTrainingTab />;
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