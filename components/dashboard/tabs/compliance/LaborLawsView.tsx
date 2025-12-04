import { AlertTriangle, CheckCircle, Clock, Plus } from 'lucide-react';
import { useState } from 'react';

interface LaborLaw {
  id: string;
  regulation: string;
  status: string;
  lastReview: string;
  nextReview: string;
  risk: string;
}

interface LaborLawsViewProps {
  laborLaws: LaborLaw[];
}

export default function LaborLawsView({ laborLaws }: LaborLawsViewProps) {
  const [showAddRegulation, setShowAddRegulation] = useState(false);

  const handleAddRegulation = () => {
    setShowAddRegulation(true);
  };

  const handleCloseAddRegulation = () => {
    setShowAddRegulation(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Compliant':
        return 'text-blue-600';
      case 'Review Required':
        return 'text-blue-600';
      case 'Non-Compliant':
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
      case 'Non-Compliant':
        return <AlertTriangle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Labor Laws Compliance</h2>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
          onClick={handleAddRegulation}
        >
          <Plus className="w-4 h-4" /> Add Regulation
        </button>
      </div>

      {showAddRegulation && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-white"
              onClick={handleCloseAddRegulation}
            >
              &times;
            </button>
            <h3 className="text-lg font-bold mb-4">Add New Regulation</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Regulation Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter regulation name"
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
                  onClick={handleCloseAddRegulation}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  onClick={handleCloseAddRegulation}
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
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Regulation</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Status</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Last Review</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Next Review</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Risk</th>
            </tr>
          </thead>
          <tbody>
            {laborLaws.map((law) => (
              <tr key={law.id} className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-4 py-2 font-medium text-gray-900 dark:text-white">{law.regulation}</td>
                <td className="px-4 py-2">
                  <span className={`flex items-center gap-1 ${getStatusColor(law.status)}`}>
                    {getStatusIcon(law.status)}
                    {law.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-gray-700 dark:text-gray-300">{law.lastReview}</td>
                <td className="px-4 py-2 text-gray-700 dark:text-gray-300">{law.nextReview}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${getRiskColor(law.risk)}`}>
                    {law.risk}
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