import { AlertTriangle, CheckCircle, Clock, Plus, Shield } from 'lucide-react';
import { useState } from 'react';

interface SafetyRegulation {
  id: string;
  regulation: string;
  status: string;
  lastInspection: string;
  nextInspection: string;
  risk: string;
}

interface SafetyRegulationsViewProps {
  safetyRegulations: SafetyRegulation[];
}

export default function SafetyRegulationsView({ safetyRegulations }: SafetyRegulationsViewProps) {
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
        return 'text-green-600';
      case 'Action Required':
        return 'text-red-600';
      case 'Review Required':
        return 'text-yellow-600';
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
      case 'Action Required':
        return <AlertTriangle className="w-4 h-4" />;
      case 'Review Required':
        return <Clock className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Safety Regulations Compliance</h2>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
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
            <h3 className="text-lg font-bold mb-4">Add New Safety Regulation</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Regulation Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter safety regulation name"
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
                <label className="block text-sm font-medium mb-1">Next Inspection Date</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              <button
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                onClick={handleCloseAddRegulation}
              >
                Add Regulation
              </button>
              <button
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                onClick={handleCloseAddRegulation}
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
              <th className="px-4 py-2 text-left">Regulation</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Last Inspection</th>
              <th className="px-4 py-2 text-left">Next Inspection</th>
              <th className="px-4 py-2 text-left">Risk Level</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {safetyRegulations.map((regulation) => (
              <tr key={regulation.id} className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-4 py-2 font-medium">{regulation.regulation}</td>
                <td className="px-4 py-2">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(regulation.status)}
                    <span className={getStatusColor(regulation.status)}>{regulation.status}</span>
                  </div>
                </td>
                <td className="px-4 py-2">{regulation.lastInspection}</td>
                <td className="px-4 py-2">{regulation.nextInspection}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(regulation.risk)}`}>
                    {regulation.risk}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <div className="flex gap-2">
                    <button className="text-blue-600 hover:text-blue-800 text-sm">
                      Inspect
                    </button>
                    <button className="text-green-600 hover:text-green-800 text-sm">
                      Schedule
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