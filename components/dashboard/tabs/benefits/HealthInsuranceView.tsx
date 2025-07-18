import { Plus, UploadCloud, FileText, Download, CheckCircle, XCircle, Eye, BarChart3 } from 'lucide-react';
import { useState } from 'react';

interface HealthInsurance {
  id: string;
  employee: string;
  plan: string;
  coverage: string;
  status: string;
  premium: string;
  eligibility?: string;
  approvalStatus?: string;
}

interface HealthInsuranceViewProps {
  healthInsurance: HealthInsurance[];
}

interface UploadedDoc {
  name: string;
  url: string;
}

export default function HealthInsuranceView({ healthInsurance }: HealthInsuranceViewProps) {
  const [uploadedDocs, setUploadedDocs] = useState<Record<string, UploadedDoc[]>>({});
  const [showEligibilityRules, setShowEligibilityRules] = useState(false);
  const [showReport, setShowReport] = useState(false);

  const handleAddPlan = () => {
    // TODO: Implement add health insurance plan functionality
    alert('Add Health Insurance Plan clicked');
  };

  const handleFileChange = (planId: string, files: FileList | null) => {
    if (!files || files.length === 0) return;
    const file = files[0];
    const url = URL.createObjectURL(file);
    setUploadedDocs((prev) => ({
      ...prev,
      [planId]: [...(prev[planId] || []), { name: file.name, url }],
    }));
  };

  const handleApprove = (planId: string) => {
    // TODO: Implement approval functionality
    alert(`Approved plan ${planId}`);
  };

  const handleReject = (planId: string) => {
    // TODO: Implement rejection functionality
    alert(`Rejected plan ${planId}`);
  };

  const handleViewEligibility = () => {
    setShowEligibilityRules(true);
  };

  const handleCloseEligibility = () => {
    setShowEligibilityRules(false);
  };

  const handleGenerateReport = () => {
    setShowReport(true);
  };

  const handleCloseReport = () => {
    setShowReport(false);
  };

  // Cost forecasting
  const currentMonthlyCost = healthInsurance.reduce((sum, plan) => {
    const premium = parseInt(plan.premium.match(/\d+/)?.[0] || '0');
    return sum + premium;
  }, 0);

  const projectedQuarterlyCost = currentMonthlyCost * 3;
  const projectedYearlyCost = currentMonthlyCost * 12;
  const costIncrease = 0.05; // 5% annual increase

  return (
    <div className="space-y-4">
      {/* Cost Forecasting Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div className="bg-blue-50 dark:bg-blue-900/10 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">GHS {currentMonthlyCost.toLocaleString()}</div>
          <div className="text-sm text-blue-800 dark:text-blue-200">Current Monthly Cost</div>
        </div>
        <div className="bg-green-50 dark:bg-green-900/10 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-700 dark:text-green-300">GHS {projectedQuarterlyCost.toLocaleString()}</div>
          <div className="text-sm text-green-800 dark:text-green-200">Q3 2024 Projection</div>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/10 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">GHS {projectedYearlyCost.toLocaleString()}</div>
          <div className="text-sm text-purple-800 dark:text-purple-200">2024 Projection</div>
        </div>
        <div className="bg-orange-50 dark:bg-orange-900/10 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-orange-700 dark:text-orange-300">+{costIncrease * 100}%</div>
          <div className="text-sm text-orange-800 dark:text-orange-200">Annual Increase</div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Health Insurance</h2>
        <div className="flex gap-2">
          <button
            className="flex items-center gap-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-all"
            onClick={handleGenerateReport}
          >
            <BarChart3 className="w-4 h-4" /> Generate Report
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all"
            onClick={handleViewEligibility}
          >
            <Eye className="w-4 h-4" /> Eligibility Rules
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all"
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
            <h3 className="text-lg font-bold mb-4">Health Insurance Cost Report</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded">
                  <h4 className="font-semibold mb-2">Cost Breakdown</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Family Plans: GHS {(currentMonthlyCost * 0.6).toLocaleString()}</li>
                    <li>• Individual Plans: GHS {(currentMonthlyCost * 0.4).toLocaleString()}</li>
                    <li>• Total Active Plans: {healthInsurance.length}</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded">
                  <h4 className="font-semibold mb-2">Projections</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Q4 2024: GHS {(projectedQuarterlyCost * 1.02).toLocaleString()}</li>
                    <li>• 2025: GHS {(projectedYearlyCost * 1.05).toLocaleString()}</li>
                    <li>• 5-Year Trend: +{costIncrease * 100}% annually</li>
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded">
                <h4 className="font-semibold mb-2">Recommendations</h4>
                <ul className="text-sm space-y-1">
                  <li>• Consider negotiating bulk rates with providers</li>
                  <li>• Review plan utilization to optimize coverage</li>
                  <li>• Implement wellness programs to reduce claims</li>
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
      {showEligibilityRules && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-white"
              onClick={handleCloseEligibility}
            >
              &times;
            </button>
            <h3 className="text-lg font-bold mb-4">Eligibility Rules</h3>
            <ul className="space-y-2 text-sm">
              <li>• Full-time employees (30+ hours/week)</li>
              <li>• Minimum 3 months employment</li>
              <li>• Family plans require marriage certificate</li>
              <li>• Pre-existing conditions covered after 12 months</li>
            </ul>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={handleCloseEligibility}
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
              <th className="px-4 py-2 text-left">Coverage</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Premium</th>
              <th className="px-4 py-2 text-left">Eligibility</th>
              <th className="px-4 py-2 text-left">Approval</th>
              <th className="px-4 py-2 text-left">Documents</th>
            </tr>
          </thead>
          <tbody>
            {healthInsurance.map((plan) => (
              <tr key={plan.id} className="border-t border-gray-200 dark:border-gray-700 align-top">
                <td className="px-4 py-2 font-medium">{plan.employee}</td>
                <td className="px-4 py-2">{plan.plan}</td>
                <td className="px-4 py-2">{plan.coverage}</td>
                <td className="px-4 py-2">
                  <span className={
                    plan.status === 'Active' ? 'text-green-600' : 'text-gray-500 dark:text-gray-400'
                  }>
                    {plan.status}
                  </span>
                </td>
                <td className="px-4 py-2">{plan.premium}</td>
                <td className="px-4 py-2">
                  <span className={
                    plan.eligibility === 'Eligible' ? 'text-green-600' : 'text-red-600'
                  }>
                    {plan.eligibility || 'Pending'}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <div className="flex gap-1">
                    <button
                      className="p-1 text-green-600 hover:bg-green-100 rounded"
                      onClick={() => handleApprove(plan.id)}
                      title="Approve"
                    >
                      <CheckCircle className="w-4 h-4" />
                    </button>
                    <button
                      className="p-1 text-red-600 hover:bg-red-100 rounded"
                      onClick={() => handleReject(plan.id)}
                      title="Reject"
                    >
                      <XCircle className="w-4 h-4" />
                    </button>
                  </div>
                </td>
                <td className="px-4 py-2">
                  <label className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all cursor-pointer mb-2">
                    <UploadCloud className="w-4 h-4" /> Upload
                    <input
                      type="file"
                      accept=".pdf,.png,.jpg"
                      className="hidden"
                      onChange={e => handleFileChange(plan.id, e.target.files)}
                    />
                  </label>
                  <ul className="space-y-1">
                    {(uploadedDocs[plan.id] || []).map((doc, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <FileText className="w-4 h-4 text-gray-500" />
                        <span>{doc.name}</span>
                        <a href={doc.url} download={doc.name} className="ml-1 text-blue-600 hover:underline" title="Download">
                          <Download className="w-4 h-4 inline" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 