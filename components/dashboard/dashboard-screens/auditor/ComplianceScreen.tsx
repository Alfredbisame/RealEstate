import ComplianceHeader from '../../widgets/compliance-tracker/ComplianceHeader';
import ComplianceScore from '../../widgets/compliance-tracker/ComplianceScore';
import ComplianceList from '../../widgets/compliance-tracker/ComplianceList';
import { mockComplianceData } from '../../widgets/compliance-tracker/mockData';
import { calculateComplianceScore } from '../../widgets/compliance-tracker/utils';

export default function ComplianceScreen() {
  const score = calculateComplianceScore(mockComplianceData);
  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-850 dark:to-gray-800 rounded-2xl p-0 border border-gray-200 dark:border-gray-800 flex flex-col min-h-screen h-screen">
      <div className="bg-gradient-to-r from-green-600 to-blue-500 rounded-t-2xl p-4 md:p-8 flex flex-col md:flex-row items-center justify-between shadow-lg">
        <div>
          <h2 className="text-xl md:text-3xl font-extrabold text-white mb-1 tracking-tight">Regulatory Compliance Overview</h2>
          <p className="text-white/80 text-sm md:text-base font-medium">Monitor regulatory, tax, labor, and financial compliance. Read-only access for auditors.</p>
        </div>
      </div>
      <div className="flex-1 min-h-0 flex flex-col px-2 md:px-8 pt-2 md:pt-6 pb-2 md:pb-8 gap-4 md:gap-8">
        {/* Sticky header/score section */}
        <div className="sticky top-0 z-10 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-750 dark:to-gray-700 rounded-t-2xl md:rounded-2xl shadow-sm border-b border-gray-200 dark:border-gray-800 px-2 md:px-8 pt-2 md:pt-6 pb-2 md:pb-4 flex flex-col gap-2 md:gap-4">
          <ComplianceHeader title="Compliance Status" />
          <ComplianceScore score={score} />
        </div>
        {/* Scrollable compliance list */}
        <div className="w-full rounded-b-2xl md:rounded-2xl shadow border border-gray-200 dark:border-gray-800 p-0 md:p-4 flex flex-col bg-white dark:bg-gray-900">
          <ComplianceList categories={mockComplianceData} />
        </div>
      </div>
    </div>
  );
} 