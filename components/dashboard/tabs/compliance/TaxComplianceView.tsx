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
        return 'text-blue-600';
      case 'Review Required':
        return 'text-blue-600';
      case 'Overdue':
        return 'text-blue-600';
      default:
        return 'text-gray-600';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'Medium':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'High':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
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
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
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
                <label className="block text-sm font-medium mb-1">Requirement Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter requirement name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Risk Level</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select risk level</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800"
                  onClick={handleCloseAddRequirement}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  onClick={handleCloseAddRequirement}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-900 rounded-lg shadow">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Requirement</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Status</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Last Filing</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Next Filing</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Risk</th>
            </tr>
          </thead>
          <tbody>
            {taxCompliance.map((requirement) => (
              <tr key={requirement.id} className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-4 py-2 font-medium text-gray-900 dark:text-white">{requirement.requirement}</td>
                <td className="px-4 py-2">
                  <span className={`flex items-center gap-1 ${getStatusColor(requirement.status)}`}>
                    {getStatusIcon(requirement.status)}
                    {requirement.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-gray-700 dark:text-gray-300">{requirement.lastFiling}</td>
                <td className="px-4 py-2 text-gray-700 dark:text-gray-300">{requirement.nextFiling}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${getRiskColor(requirement.risk)}`}>
                    {requirement.risk}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}