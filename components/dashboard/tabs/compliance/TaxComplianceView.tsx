import { AlertTriangle, CheckCircle, Clock, Plus, DollarSign } from 'lucide-react';
import { useState } from 'react';

interface TaxCompliance {
  id: string;
  requirement: string;
  status: string;
  lastFiling: string;
  nextFiling: string;
  risk: string;
}

interface TaxComplianceViewProps {
  taxCompliance: TaxCompliance[];
}

export default function TaxComplianceView({ taxCompliance }: TaxComplianceViewProps) {
  const [showAddRequirement, setShowAddRequirement] = useState(false);

  const handleAddRequirement = () => {
    setShowAddRequirement(true);
  };

  const handleCloseAddRequirement = () => {
    setShowAddRequirement(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Compliant':
        return 'text-green-600';
      case 'Review Required':
        return 'text-yellow-600';
      case 'Overdue':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300';
      case 'High':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Compliant':
        return <CheckCircle className="w-4 h-4" />;
      case 'Review Required':
        return <Clock className="w-4 h-4" />;
      case 'Overdue':
        return <AlertTriangle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Tax Compliance</h2>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all"
          onClick={handleAddRequirement}
        >
          <Plus className="w-4 h-4" /> Add Requirement
        </button>
      </div>

      {showAddRequirement && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-white"
              onClick={handleCloseAddRequirement}
            >
              &times;
            </button>
            <h3 className="text-lg font-bold mb-4">Add New Tax Requirement</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Tax Requirement</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter tax requirement name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Risk Level</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Next Filing Date</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              <button
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                onClick={handleCloseAddRequirement}
              >
                Add Requirement
              </button>
              <button
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                onClick={handleCloseAddRequirement}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-900 rounded-lg shadow">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Tax Requirement</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Last Filing</th>
              <th className="px-4 py-2 text-left">Next Filing</th>
              <th className="px-4 py-2 text-left">Risk Level</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {taxCompliance.map((tax) => (
              <tr key={tax.id} className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-4 py-2 font-medium">{tax.requirement}</td>
                <td className="px-4 py-2">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(tax.status)}
                    <span className={getStatusColor(tax.status)}>{tax.status}</span>
                  </div>
                </td>
                <td className="px-4 py-2">{tax.lastFiling}</td>
                <td className="px-4 py-2">{tax.nextFiling}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(tax.risk)}`}>
                    {tax.risk}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <div className="flex gap-2">
                    <button className="text-blue-600 hover:text-blue-800 text-sm">
                      File
                    </button>
                    <button className="text-green-600 hover:text-green-800 text-sm">
                      Review
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