import TransactionHistoryView from './TransactionHistoryView';
import GRAComplianceView from './GRAComplianceView';
import AuditReportsView from './AuditReportsView';
import ComplianceMonitoringView from './ComplianceMonitoringView';
import RegulatoryReportingView from './RegulatoryReportingView';

interface AccountantAuditTrailContentProps {
  activeView: string;
  onViewChange: (view: string) => void;
  user: any;
}

export default function AccountantAuditTrailContent({ activeView, onViewChange, user }: AccountantAuditTrailContentProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mt-4 border border-gray-200 dark:border-gray-700">
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'transactions' ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('transactions')}
        >
          Transaction History
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'gra-compliance' ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('gra-compliance')}
        >
          GRA Compliance
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'audit-reports' ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('audit-reports')}
        >
          Audit Reports
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'compliance' ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('compliance')}
        >
          Compliance Monitoring
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'regulatory' ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('regulatory')}
        >
          Regulatory Reporting
        </button>
      </div>
      {activeView === 'transactions' && <TransactionHistoryView user={user} />}
      {activeView === 'gra-compliance' && <GRAComplianceView user={user} />}
      {activeView === 'audit-reports' && <AuditReportsView user={user} />}
      {activeView === 'compliance' && <ComplianceMonitoringView user={user} />}
      {activeView === 'regulatory' && <RegulatoryReportingView user={user} />}
    </div>
  );
} 