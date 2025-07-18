import { CalendarPlus } from 'lucide-react';

interface Interview {
  id: string;
  candidate: string;
  position: string;
  date: string;
  time: string;
  interviewer: string;
}

interface InterviewScheduleViewProps {
  interviews: Interview[];
}

export default function InterviewScheduleView({ interviews }: InterviewScheduleViewProps) {
  const handleSchedule = () => {
    // TODO: Implement schedule interview functionality
    alert('Schedule Interview clicked');
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Interview Schedule</h2>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all"
          onClick={handleSchedule}
        >
          <CalendarPlus className="w-4 h-4" /> Schedule Interview
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-900 rounded-lg shadow">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Candidate</th>
              <th className="px-4 py-2 text-left">Position</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Time</th>
              <th className="px-4 py-2 text-left">Interviewer</th>
            </tr>
          </thead>
          <tbody>
            {interviews.map((interview) => (
              <tr key={interview.id} className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-4 py-2 font-medium">{interview.candidate}</td>
                <td className="px-4 py-2">{interview.position}</td>
                <td className="px-4 py-2">{interview.date}</td>
                <td className="px-4 py-2">{interview.time}</td>
                <td className="px-4 py-2">{interview.interviewer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 