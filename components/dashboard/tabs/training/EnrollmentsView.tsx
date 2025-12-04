interface Enrollment {
    id: string;
    employee: string;
    program: string;
    status: string;
    progress: number;
  }
  
  interface EnrollmentsViewProps {
    enrollments: Enrollment[];
  }
  
  export default function EnrollmentsView({ enrollments }: EnrollmentsViewProps) {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Enrollments</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-900 rounded-lg shadow">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Employee</th>
                <th className="px-4 py-2 text-left">Program</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Progress</th>
              </tr>
            </thead>
            <tbody>
              {enrollments.map((enroll) => (
                <tr key={enroll.id} className="border-t border-gray-200 dark:border-gray-700">
                  <td className="px-4 py-2 font-medium">{enroll.employee}</td>
                  <td className="px-4 py-2">{enroll.program}</td>
                  <td className="px-4 py-2">{enroll.status}</td>
                  <td className="px-4 py-2">
                    <div className="w-32 bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                      <div
                        className="bg-blue-500 h-3 rounded-full"
                        style={{ width: `${enroll.progress}%` }}
                      ></div>
                    </div>
                    <span className="ml-2 text-xs text-gray-600 dark:text-gray-300">{enroll.progress}%</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }