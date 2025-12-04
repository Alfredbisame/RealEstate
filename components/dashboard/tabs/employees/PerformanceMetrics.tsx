'use client';

interface PerformanceMetricsProps {
  employees: Array<{
    id: string;
    name: string;
    position: string;
    avatar: string;
  }>;
}

export default function PerformanceMetrics({ employees }: PerformanceMetricsProps) {
  const metrics = [
    { label: 'Overall Score', value: 84, color: 'bg-blue-500' },
    { label: 'Productivity', value: 91, color: 'bg-blue-500' },
    { label: 'Quality', value: 88, color: 'bg-blue-500' }
  ];

  const reviews = [
    { type: 'Excellent Work', employee: 'Kwame Asante', period: 'Q1 2024', color: 'blue' },
    { type: 'Meets Expectations', employee: 'Ama Osei', period: 'Q1 2024', color: 'blue' },
    { type: 'Needs Improvement', employee: 'Kojo Mensah', period: 'Q1 2024', color: 'blue' }
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Performance Metrics */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Performance Metrics</h3>
          <div className="space-y-4">
            {metrics.map((metric, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{metric.label}</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">{metric.value}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div 
                    className={`h-2 rounded-full ${metric.color}`} 
                    style={{ width: `${metric.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performers */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
            Top Performers
          </h3>
          <div className="space-y-3">
            {employees.slice(0, 3).map((employee, index) => (
              <div key={employee.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                  index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : 'bg-orange-500'
                }`}>
                  {index + 1}
                </div>
                <img src={employee.avatar} alt={employee.name} className="w-8 h-8 rounded-full ring-2 ring-gray-200 dark:ring-gray-600" />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 dark:text-white text-sm truncate">{employee.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{employee.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Reviews */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Recent Reviews</h3>
          <div className="space-y-3">
            {reviews.map((review, index) => (
              <div key={index} className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{review.type}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${getColorClass(review.color)}`}>
                    {review.period}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{review.employee}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Trends */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Performance Trends</h3>
        <div className="h-64 flex items-center justify-center">
          <p className="text-gray-500 dark:text-gray-400">Performance trend visualization would appear here</p>
        </div>
      </div>
    </div>
  );
}