import { Plus, ToggleLeft, ToggleRight, FileText } from 'lucide-react';
import { useState } from 'react';

interface RetirementPlan {
  id: string;
  employee: string;
  plan: string;
  contribution: string;
  employerMatch: string;
  total: string;
  payrollDeduction?: boolean;
}

interface RetirementPlansViewProps {
  retirementPlans: RetirementPlan[];
}

function parseAmount(str: string) {
  // Extract number from 'GHS 500/month' etc
  const match = str.match(/([\d,.]+)/);
  return match ? parseFloat(match[1].replace(/,/g, '')) : 0;
}

export default function RetirementPlansView({ retirementPlans }: RetirementPlansViewProps) {
  const [plans, setPlans] = useState<RetirementPlan[]>(retirementPlans.map(p => ({ ...p, payrollDeduction: p.payrollDeduction || false })));
  const [showReport, setShowReport] = useState(false);

  const handleAddPlan = () => {
    // TODO: Implement add retirement plan functionality
    alert('Add Retirement Plan clicked');
  };

  const handleTogglePayrollDeduction = (planId: string) => {
    setPlans(prev => prev.map(plan => 
      plan.id === planId 
        ? { ...plan, payrollDeduction: !plan.payrollDeduction }
        : plan
    ));
  };

  const handleGenerateReport = () => {
    setShowReport(true);
  };

  const handleCloseReport = () => {
    setShowReport(false);
  };

  // Cost tracking analytics
  const totalEmployerMatch = plans.reduce((sum, p) => sum + parseAmount(p.employerMatch), 0);
  const totalContribution = plans.reduce((sum, p) => sum + parseAmount(p.contribution), 0);
  const totalCost = plans.reduce((sum, p) => sum + parseAmount(p.total), 0);
  const payrollEnabled = plans.filter(p => p.payrollDeduction).length;
  const participationRate = (plans.length / 25) * 100; // Assuming 25 total employees

  return (
    <div className="space-y-4">
      {/* Analytics Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div className="bg-green-50 dark:bg-green-900/10 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-700 dark:text-green-300">GHS {totalEmployerMatch.toLocaleString()}</div>
          <div className="text-sm text-green-800 dark:text-green-200">Total Employer Match</div>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/10 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">GHS {totalContribution.toLocaleString()}</div>
          <div className="text-sm text-blue-800 dark:text-blue-200">Total Employee Contribution</div>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/10 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">GHS {totalCost.toLocaleString()}</div>
          <div className="text-sm text-purple-800 dark:text-purple-200">Total Retirement Cost</div>
        </div>
        <div className="bg-orange-50 dark:bg-orange-900/10 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-orange-700 dark:text-orange-300">{participationRate.toFixed(1)}%</div>
          <div className="text-sm text-orange-800 dark:text-orange-200">Participation Rate</div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Retirement Plans</h2>
        <div className="flex gap-2">
          <button
            className="flex items-center gap-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-all"
            onClick={handleGenerateReport}
          >
            <FileText className="w-4 h-4" /> Generate Report
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
            onClick={handleAddPlan}
          >
            <Plus className="w-4 h-4" /> Add Plan
          </button>
        </div>
      </div>
      {showReport && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 w-full max-w-2xl relative max-h-[80vh] overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-white"
              onClick={handleCloseReport}
            >
              &times;
            </button>
            <h3 className="text-lg font-bold mb-4">Benefits Compliance Report</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded">
                  <h4 className="font-semibold mb-2">Cost Analysis</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Employer Match: GHS {totalEmployerMatch.toLocaleString()}</li>
                    <li>• Employee Contribution: GHS {totalContribution.toLocaleString()}</li>
                    <li>• Total Monthly Cost: GHS {totalCost.toLocaleString()}</li>
                    <li>• Payroll Integration: {payrollEnabled}/{plans.length} plans</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded">
                  <h4 className="font-semibold mb-2">Participation & Compliance</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Participation Rate: {participationRate.toFixed(1)}%</li>
                    <li>• SSNIT Compliance: 100%</li>
                    <li>• Private Plan Coverage: {plans.filter(p => p.plan.includes('Private')).length} employees</li>
                    <li>• Average Contribution: GHS {(totalContribution / plans.length).toFixed(0)}</li>
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded">
                <h4 className="font-semibold mb-2">Recommendations</h4>
                <ul className="text-sm space-y-1">
                  <li>• Increase participation through education campaigns</li>
                  <li>• Consider matching contribution increases for retention</li>
                  <li>• Review plan options for better cost efficiency</li>
                  <li>• Implement automatic enrollment for new hires</li>
                </ul>
              </div>
            </div>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={handleCloseReport}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-900 rounded-lg shadow">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Employee</th>
              <th className="px-4 py-2 text-left">Plan</th>
              <th className="px-4 py-2 text-left">Contribution</th>
              <th className="px-4 py-2 text-left">Employer Match</th>
              <th className="px-4 py-2 text-left">Total</th>
              <th className="px-4 py-2 text-left">Payroll Integration</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan) => (
              <tr key={plan.id} className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-4 py-2 font-medium">{plan.employee}</td>
                <td className="px-4 py-2">{plan.plan}</td>
                <td className="px-4 py-2">{plan.contribution}</td>
                <td className="px-4 py-2">{plan.employerMatch}</td>
                <td className="px-4 py-2 font-semibold">{plan.total}</td>
                <td className="px-4 py-2">
                  <button
                    className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                    onClick={() => handleTogglePayrollDeduction(plan.id)}
                    title={plan.payrollDeduction ? 'Disable Payroll Deduction' : 'Enable Payroll Deduction'}
                  >
                    {plan.payrollDeduction ? (
                      <>
                        <ToggleRight className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-green-600">Enabled</span>
                      </>
                    ) : (
                      <>
                        <ToggleLeft className="w-5 h-5 text-gray-400" />
                        <span className="text-sm text-gray-500">Disabled</span>
                      </>
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 