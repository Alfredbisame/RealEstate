interface Progress {
    id: string;
    employee: string;
    program: string;
    progress: number;
  }
  
  interface ProgressTrackingViewProps {
    progress: Progress[];
  }
  
  export default function ProgressTrackingView({ progress }: ProgressTrackingViewProps) {
    // Mock analytics
    const totalPrograms = Array.from(new Set(progress.map(p => p.program))).length;
    const totalEnrollments = progress.length;
    const avgProgress = (progress.reduce((sum, p) => sum + p.progress, 0) / (progress.length || 1)).toFixed(1);
    const completionRate = ((progress.filter(p => p.progress === 100).length / (progress.length || 1)) * 100).toFixed(1) + '%';
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Progress Tracking</h2>
        {/* Analytics Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div className="bg-blue-50 dark:bg-blue-900/10 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">{totalPrograms}</div>
            <div className="text-sm text-blue-800 dark:text-blue-200">Total Programs</div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/10 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">{totalEnrollments}</div>
            <div className="text-sm text-blue-800 dark:text-blue-200">Total Enrollments</div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/10 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">{avgProgress}%</div>
            <div className="text-sm text-blue-800 dark:text-blue-200">Avg. Progress</div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/10 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">{completionRate}</div>
            <div className="text-sm text-blue-800 dark:text-blue-200">Completion Rate</div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-900 rounded-lg shadow">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Employee</th>
                <th className="px-4 py-2 text-left">Program</th>
                <th className="px-4 py-2 text-left">Progress</th>
              </tr>
            </thead>
            <tbody>
              {progress.map((item) => (
                <tr key={item.id} className="border-t border-gray-200 dark:border-gray-700">
                  <td className="px-4 py-2 font-medium">{item.employee}</td>
                  <td className="px-4 py-2">{item.program}</td>
                  <td className="px-4 py-2">
                    <div className="w-32 bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                      <div
                        className="bg-blue-500 h-3 rounded-full"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                    <span className="ml-2 text-xs text-gray-600 dark:text-gray-300">{item.progress}%</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }