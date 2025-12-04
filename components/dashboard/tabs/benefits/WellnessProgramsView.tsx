import { Plus, Users, UserCheck, Activity } from 'lucide-react';
import { useState } from 'react';

interface WellnessProgram {
  id: string;
  program: string;
  participants: number;
  cost: string;
  status: string;
}

interface WellnessProgramsViewProps {
  wellnessPrograms: WellnessProgram[];
}

function parseAmount(str: string) {
  // Extract number from 'GHS 50/month' etc
  const match = str.match(/([\d,.]+)/);
  return match ? parseFloat(match[1].replace(/,/g, '')) : 0;
}

export default function WellnessProgramsView({ wellnessPrograms }: WellnessProgramsViewProps) {
  const [showEmployeePortal, setShowEmployeePortal] = useState(false);

  const handleAddProgram = () => {
    // TODO: Implement add wellness program functionality
    alert('Add Wellness Program clicked');
  };

  const handleViewEmployeePortal = () => {
    setShowEmployeePortal(true);
  };

  const handleCloseEmployeePortal = () => {
    setShowEmployeePortal(false);
  };

  // Analytics
  const totalPrograms = wellnessPrograms.length;
  const totalParticipants = wellnessPrograms.reduce((sum, p) => sum + p.participants, 0);
  const totalCost = wellnessPrograms.reduce((sum, p) => sum + parseAmount(p.cost), 0);
  const avgParticipation = totalParticipants / totalPrograms;

  return (
    <div className="space-y-4">
      {/* Analytics Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div className="bg-purple-50 dark:bg-purple-900 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">{totalPrograms}</div>
          <div className="text-sm text-purple-800 dark:text-purple-200">Total Programs</div>
        </div>
        <div className="bg-green-50 dark:bg-green-900 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-700 dark:text-green-300">{totalParticipants}</div>
          <div className="text-sm text-green-800 dark:text-green-200">Total Participants</div>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">GHS {totalCost.toLocaleString()}</div>
          <div className="text-sm text-blue-800 dark:text-blue-200">Total Monthly Cost</div>
        </div>
        <div className="bg-orange-50 dark:bg-orange-900 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-orange-700 dark:text-orange-300">{avgParticipation.toFixed(1)}</div>
          <div className="text-sm text-orange-800 dark:text-orange-200">Avg. Participation</div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Wellness Programs</h2>
        <div className="flex gap-2">
          <button
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all"
            onClick={handleViewEmployeePortal}
          >
            <Users className="w-4 h-4" /> Employee Portal
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all"
            onClick={handleAddProgram}
          >
            <Plus className="w-4 h-4" /> Add Program
          </button>
        </div>
      </div>
      {showEmployeePortal && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 w-full max-w-2xl relative max-h-[80vh] overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-white"
              onClick={handleCloseEmployeePortal}
            >
              &times;
            </button>
            <h3 className="text-lg font-bold mb-4">Employee Self-Service Portal</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <UserCheck className="w-4 h-4" /> Available Features
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>• View enrolled wellness programs</li>
                    <li>• Track participation and progress</li>
                    <li>• Enroll in new programs</li>
                    <li>• View program schedules</li>
                    <li>• Submit feedback and suggestions</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Activity className="w-4 h-4" /> Current Programs
                  </h4>
                  <ul className="text-sm space-y-1">
                    {wellnessPrograms.map(program => (
                      <li key={program.id}>• {program.program} ({program.participants} participants)</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded">
                <h4 className="font-semibold mb-2">Portal Benefits</h4>
                <ul className="text-sm space-y-1">
                  <li>• Self-service enrollment reduces HR workload</li>
                  <li>• Real-time program availability and updates</li>
                  <li>• Mobile-friendly interface for on-the-go access</li>
                  <li>• Integration with health tracking devices</li>
                </ul>
              </div>
            </div>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={handleCloseEmployeePortal}
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
              <th className="px-4 py-2 text-left">Program</th>
              <th className="px-4 py-2 text-left">Participants</th>
              <th className="px-4 py-2 text-left">Cost</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {wellnessPrograms.map((program) => (
              <tr key={program.id} className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-4 py-2 font-medium">{program.program}</td>
                <td className="px-4 py-2">{program.participants}</td>
                <td className="px-4 py-2">{program.cost}</td>
                <td className="px-4 py-2">
                  <span className={
                    program.status === 'Active' ? 'text-green-600' : 'text-gray-500 dark:text-gray-400'
                  }>
                    {program.status}
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