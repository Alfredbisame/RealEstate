import { CheckCircle, XCircle, Eye } from 'lucide-react';
import { useState } from 'react';

interface LeaveBenefit {
  id: string;
  employee: string;
  type: string;
  days: number;
  used: number;
  remaining: number;
  requestStatus?: string;
  requestDate?: string;
}

interface LeaveBenefitsViewProps {
  leaveBenefits: LeaveBenefit[];
}

export default function LeaveBenefitsView({ leaveBenefits }: LeaveBenefitsViewProps) {
  const [benefits, setBenefits] = useState<LeaveBenefit[]>(leaveBenefits.map(b => ({ 
    ...b, 
    requestStatus: b.requestStatus || 'Pending',
    requestDate: b.requestDate || '2024-05-15'
  })));
  const [showPolicy, setShowPolicy] = useState(false);

  const handleApprove = (benefitId: string) => {
    setBenefits(prev => prev.map(b => 
      b.id === benefitId ? { ...b, requestStatus: 'Approved' } : b
    ));
  };

  const handleReject = (benefitId: string) => {
    setBenefits(prev => prev.map(b => 
      b.id === benefitId ? { ...b, requestStatus: 'Rejected' } : b
    ));
  };

  const handleViewPolicy = () => {
    setShowPolicy(true);
  };

  const handleClosePolicy = () => {
    setShowPolicy(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Leave Benefits</h2>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
          onClick={handleViewPolicy}
        >
          <Eye className="w-4 h-4" /> Leave Policy
        </button>
      </div>
      {showPolicy && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-white"
              onClick={handleClosePolicy}
            >
              &times;
            </button>
            <h3 className="text-lg font-bold mb-4">Leave Policy</h3>
            <ul className="space-y-2 text-sm">
              <li>• Annual Leave: 21 days per year</li>
              <li>• Sick Leave: 10 days per year</li>
              <li>• Maternity Leave: 12 weeks</li>
              <li>• Paternity Leave: 2 weeks</li>
              <li>• Unused leave carries over (max 5 days)</li>
            </ul>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={handleClosePolicy}
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
              <th className="px-4 py-2 text-left">Leave Type</th>
              <th className="px-4 py-2 text-left">Total Days</th>
              <th className="px-4 py-2 text-left">Used</th>
              <th className="px-4 py-2 text-left">Remaining</th>
              <th className="px-4 py-2 text-left">Progress</th>
              <th className="px-4 py-2 text-left">Request Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {benefits.map((benefit) => (
              <tr key={benefit.id} className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-4 py-2 font-medium">{benefit.employee}</td>
                <td className="px-4 py-2">{benefit.type}</td>
                <td className="px-4 py-2">{benefit.days}</td>
                <td className="px-4 py-2">{benefit.used}</td>
                <td className="px-4 py-2">{benefit.remaining}</td>
                <td className="px-4 py-2">
                  <div className="w-32 bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                    <div
                      className="bg-blue-500 h-3 rounded-full"
                      style={{ width: `${(benefit.used / benefit.days) * 100}%` }}
                    ></div>
                  </div>
                  <span className="ml-2 text-xs text-gray-600 dark:text-gray-300">
                    {((benefit.used / benefit.days) * 100).toFixed(1)}%
                  </span>
                </td>
                <td className="px-4 py-2">
                  <span className={
                    benefit.requestStatus === 'Approved' ? 'text-green-600' :
                    benefit.requestStatus === 'Rejected' ? 'text-red-600' :
                    'text-yellow-600'
                  }>
                    {benefit.requestStatus}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <div className="flex gap-1">
                    <button
                      className="p-1 text-green-600 hover:bg-green-100 rounded"
                      onClick={() => handleApprove(benefit.id)}
                      title="Approve"
                    >
                      <CheckCircle className="w-4 h-4" />
                    </button>
                    <button
                      className="p-1 text-red-600 hover:bg-red-100 rounded"
                      onClick={() => handleReject(benefit.id)}
                      title="Reject"
                    >
                      <XCircle className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 