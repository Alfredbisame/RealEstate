'use client';

import { UserRole } from '@/types/roles';
import PropertyOwnerDashboard from './dashboard-screens/PropertyOwnerDashboard';
import ProjectManagerDashboard from './dashboard-screens/ProjectManagerDashboard';
import AccountantDashboard from './dashboard-screens/AccountantDashboard';
import SiteSupervisorDashboard from './dashboard-screens/SiteSupervisorDashboard';
import SalesAgentDashboard from './dashboard-screens/SalesAgentDashboard';
import HRManagerDashboard from './dashboard-screens/HRManagerDashboard';
import AuditorDashboard from './dashboard-screens/AuditorDashboard';
import AnalyticsTab from './tabs/AnalyticsTab';
import PortfolioTab from './tabs/PortfolioTab';
import ProjectsTab from './tabs/ProjectsTab';
import TimelineTab from './tabs/TimelineTab';
import FinancialsTab from './tabs/FinancialsTab';
import EmployeesTab from './tabs/EmployeesTab';
import NotificationsTab from './tabs/NotificationsTab';
import HelpTab from './tabs/HelpTab';
import CommunicationsTab from './tabs/CommunicationsTab';
import IntegrationsTab from './tabs/IntegrationsTab';
import CashFlowScreen from './dashboard-screens/property-owner/CashFlowScreen';
import TaxSummaryScreen from './dashboard-screens/property-owner/TaxSummaryScreen';
import PropertyValuesScreen from './dashboard-screens/property-owner/PropertyValuesScreen';
import InvestmentROIScreen from './dashboard-screens/property-owner/InvestmentROIScreen';
import InvoicesScreen from './dashboard-screens/super-admin/InvoicesScreen';
import BudgetTrackerScreen from './dashboard-screens/property-owner/BudgetTrackerScreen';
import ResourcesScreen from './dashboard-screens/project-manager/ResourcesScreen';
import MaterialsScreen from './dashboard-screens/project-manager/MaterialsScreen';
import QualityControlScreen from './dashboard-screens/project-manager/QualityControlScreen';
import LogisticsScreen from './dashboard-screens/project-manager/LogisticsScreen';
import ProjectManagerEquipmentScreen from './dashboard-screens/project-manager/EquipmentScreen';
import AccountantInvoicesScreen from './dashboard-screens/accountant/InvoicesScreen';
import AccountantPaymentsScreen from './dashboard-screens/accountant/PaymentsScreen';
import AccountantReportsScreen from './dashboard-screens/accountant/ReportsScreen';
import AccountantTaxComplianceScreen from './dashboard-screens/accountant/TaxComplianceScreen';
import AccountantReconciliationScreen from './dashboard-screens/accountant/ReconciliationScreen';
import AccountantBudgetPlanningScreen from './dashboard-screens/accountant/BudgetPlanningScreen';
import AccountantAuditTrailScreen from './dashboard-screens/accountant/AuditTrailScreen';
import WorkersTab from './tabs/WorkersTab';
import WorkersScreen from './dashboard-screens/site-supervisor/WorkersScreen';
import AttendanceTab from './tabs/AttendanceTab';
import AttendanceScreen from './dashboard-screens/site-supervisor/AttendanceScreen';
import SafetyTab from './tabs/SafetyTab';
import SafetyReportsScreen from './dashboard-screens/site-supervisor/SafetyReportsScreen';
import EquipmentTab from './tabs/EquipmentTab';
import EquipmentScreen from './dashboard-screens/site-supervisor/EquipmentScreen';
import ProgressTrackingTab from './tabs/ProgressTrackingTab';
import ProgressTrackingScreen from './dashboard-screens/site-supervisor/ProgressTrackingScreen';
import MaterialRequestsTab from './tabs/MaterialRequestsTab';
import MaterialRequestsScreen from './dashboard-screens/site-supervisor/MaterialRequestsScreen';
import SiteSupervisorQualityControlScreen from './dashboard-screens/site-supervisor/QualityControlScreen';
import ClientsTab from './tabs/ClientsTab';
import ClientsScreen from './dashboard-screens/sales-agent/ClientsScreen';
import LeadsTab from './tabs/LeadsTab';
import LeadsScreen from './dashboard-screens/sales-agent/LeadsScreen';
import SalesPipelineTab from './tabs/SalesPipelineTab';
import SalesPipelineScreen from './dashboard-screens/sales-agent/SalesPipelineScreen';
import CommissionsTab from './tabs/CommissionsTab';
import CommissionsScreen from './dashboard-screens/sales-agent/CommissionsScreen';
import MarketingTab from './tabs/MarketingTab';
import MarketingScreen from './dashboard-screens/sales-agent/MarketingScreen';
import PropertyListingsTab from './tabs/PropertyListingsTab';
import ContactsTab from './tabs/ContactsTab';
import HRManagerAttendanceTab from './tabs/HRManagerAttendanceTab';
import HRManagerPayrollTab from './tabs/HRManagerPayrollTab';
import HRManagerPerformanceTab from './tabs/HRManagerPerformanceTab';
import HRManagerRecruitmentTab from './tabs/HRManagerRecruitmentTab';
import HRManagerTrainingTab from './tabs/HRManagerTrainingTab';
import HRManagerBenefitsTab from './tabs/HRManagerBenefitsTab';
import HRManagerComplianceTab from './tabs/HRManagerComplianceTab';
import AuditorReportsScreen from './dashboard-screens/auditor/ReportsScreen';
import AuditorDocumentsScreen from './dashboard-screens/auditor/AuditorDocumentsScreen';
import ComplianceScreen from './dashboard-screens/auditor/ComplianceScreen';
import TransactionsScreen from './dashboard-screens/auditor/TransactionsScreen';
import { AuditTrailScreen } from './dashboard-screens/auditor';
import FinancialReviewScreen from './dashboard-screens/auditor/FinancialReviewScreen';

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
          case 'investments':
            return <InvestmentROIScreen user={user} />;
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
          case 'timeline':
            return <TimelineTab user={user} />;
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
          case 'contacts':
            return <ContactsTab user={user} />;
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
          case 'benefits':
            return <HRManagerBenefitsTab />;
          case 'compliance':
            return <HRManagerComplianceTab />;
          default:
            return <HRManagerDashboard />;
        }

      case 'auditor':
        switch (activeTab) {
          case 'dashboard':
            return <AuditorDashboard />;
          case 'reports':
            return <AuditorReportsScreen user={user} />;
          case 'documents':
            return <AuditorDocumentsScreen user={user} />;
          case 'compliance':
            return <ComplianceScreen />;
          case 'transactions':
            return <TransactionsScreen />;
          case 'audit-trail':
            return <AuditTrailScreen />;
          case 'financial-review':
            return <FinancialReviewScreen />;
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