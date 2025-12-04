const allocations = [
  { resource: 'Cement', allocated: 80, available: 20, unit: 'bags', week: 'Week 1' },
  { resource: 'Steel', allocated: 40, available: 10, unit: 'tons', week: 'Week 1' },
  { resource: 'Labor', allocated: 15, available: 5, unit: 'workers', week: 'Week 1' },
  { resource: 'Cement', allocated: 90, available: 10, unit: 'bags', week: 'Week 2' },
  { resource: 'Steel', allocated: 45, available: 5, unit: 'tons', week: 'Week 2' },
  { resource: 'Labor', allocated: 18, available: 2, unit: 'workers', week: 'Week 2' }
];

const weeks = ['Week 1', 'Week 2'];
const resources = ['Cement', 'Steel', 'Labor'];

export default function ResourceAllocationView() {
  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow border border-gray-200 dark:border-gray-700">
        <h4 className="font-semibold text-lg mb-4 text-gray-800 dark:text-white">Resource Allocation Calendar</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full text-center">
            <thead>
              <tr>
                <th className="px-4 py-2 text-xs font-semibold text-gray-700 dark:text-gray-200">Resource</th>
                {weeks.map(week => (
                  <th key={week} className="px-4 py-2 text-xs font-semibold text-gray-700 dark:text-gray-200">{week}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {resources.map(resource => (
                <tr key={resource}>
                  <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-100 font-medium">{resource}</td>
                  {weeks.map(week => {
                    const alloc = allocations.find(a => a.resource === resource && a.week === week);
                    return (
                      <td key={week} className="px-4 py-2">
                        {alloc ? (
                          <div className="flex flex-col items-center">
                            <span className="text-blue-700 dark:text-blue-300 font-semibold">{alloc.allocated} {alloc.unit}</span>
                            <span className="text-xs text-blue-600 dark:text-blue-400">Available: {alloc.available}</span>
                          </div>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow border border-gray-200 dark:border-gray-700">
        <h4 className="font-semibold text-lg mb-4 text-gray-800 dark:text-white">Detailed Allocation Table</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 text-xs font-semibold text-gray-700 dark:text-gray-200">Resource</th>
                <th className="px-4 py-2 text-xs font-semibold text-gray-700 dark:text-gray-200">Allocated</th>
                <th className="px-4 py-2 text-xs font-semibold text-gray-700 dark:text-gray-200">Available</th>
                <th className="px-4 py-2 text-xs font-semibold text-gray-700 dark:text-gray-200">Unit</th>
                <th className="px-4 py-2 text-xs font-semibold text-gray-700 dark:text-gray-200">Week</th>
              </tr>
            </thead>
            <tbody>
              {allocations.map((alloc, idx) => (
                <tr key={idx} className="border-t border-gray-200 dark:border-gray-700">
                  <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-100">{alloc.resource}</td>
                  <td className="px-4 py-2 text-sm text-blue-700 dark:text-blue-300 font-semibold">{alloc.allocated}</td>
                  <td className="px-4 py-2 text-sm text-blue-700 dark:text-blue-300 font-semibold">{alloc.available}</td>
                  <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">{alloc.unit}</td>
                  <td className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">{alloc.week}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 