import { Plus, Calendar } from 'lucide-react';
import { useState } from 'react';

interface Program {
  id: string;
  title: string;
  description: string;
  start: string;
  end: string;
  status: string;
}

interface TrainingProgramsViewProps {
  programs: Program[];
}

export default function TrainingProgramsView({ programs }: TrainingProgramsViewProps) {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleAddProgram = () => {
    // TODO: Implement add program functionality
    alert('Add Training Program clicked');
  };

  const handleSchedule = () => {
    setShowCalendar(true);
  };

  const handleCloseCalendar = () => {
    setShowCalendar(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Training Programs</h2>
        <div className="flex gap-2">
          <button
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
            onClick={handleAddProgram}
          >
            <Plus className="w-4 h-4" /> Add Program
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
            onClick={handleSchedule}
          >
            <Calendar className="w-4 h-4" /> Schedule
          </button>
        </div>
      </div>
      {showCalendar && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-white"
              onClick={handleCloseCalendar}
            >
              &times;
            </button>
            <div className="flex flex-col items-center">
              <Calendar className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">Program Scheduling (Stub)</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">A calendar UI for scheduling new training programs will appear here.</p>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={handleCloseCalendar}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-900 rounded-lg shadow">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2 text-left">Start</th>
              <th className="px-4 py-2 text-left">End</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {programs.map((program) => (
              <tr key={program.id} className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-4 py-2 font-medium">{program.title}</td>
                <td className="px-4 py-2">{program.description}</td>
                <td className="px-4 py-2">{program.start}</td>
                <td className="px-4 py-2">{program.end}</td>
                <td className="px-4 py-2">
                  <span className={
                    program.status === 'Ongoing' ? 'text-blue-600' : 'text-gray-500 dark:text-gray-400'
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