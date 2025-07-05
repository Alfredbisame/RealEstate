'use client';

interface PerformanceTableProps {
  className?: string;
}

export default function PerformanceTable({ className = '' }: PerformanceTableProps) {
  const metrics = [
    {
      metric: 'Total Revenue',
      current: 'GHS 195,000',
      previous: 'GHS 182,000',
      change: '+7.1%',
      changeType: 'positive' as const
    },
    {
      metric: 'Properties Sold',
      current: '8',
      previous: '6',
      change: '+33.3%',
      changeType: 'positive' as const
    },
    {
      metric: 'Average Deal Size',
      current: 'GHS 24,375',
      previous: 'GHS 30,333',
      change: '-19.6%',
      changeType: 'negative' as const
    }
  ];

  return (
    <div className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden hover:shadow-lg transition-all ${className}`}>
      <div className="p-6 border-b border-gray-200/50 dark:border-gray-700/50">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Performance Metrics</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50/50 dark:bg-gray-700/50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Metric</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Current</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Previous</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Change</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200/50 dark:divide-gray-700/50">
            {metrics.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  {row.metric}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  {row.current}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {row.previous}
                </td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm ${
                  row.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {row.change}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 