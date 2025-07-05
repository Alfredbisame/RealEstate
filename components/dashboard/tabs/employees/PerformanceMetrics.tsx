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
    { label: 'Overall Score', value: 84, color: 'bg-green-500' },
    { label: 'Productivity', value: 91, color: 'bg-blue-500' },
    { label: 'Quality', value: 88, color: 'bg-orange-500' }
  ];

  const reviews = [
    { type: 'Excellent Work', employee: 'Kwame Asante', period: 'Q1 2024', color: 'green' },
    { type: 'Meets Expectations', employee: 'Ama Osei', period: 'Q1 2024', color: 'blue' },
    { type: 'Needs Improvement', employee: 'Kojo Mensah', period: 'Q1 2024', color: 'orange' }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Top Performers */}
        <div className="bg-white/50 dark:bg-gray-700/50 rounded-xl p-6 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
            Top Performers
          </h3>
          <div className="space-y-3">
            {employees.slice(0, 3).map((employee, index) => (
              <div key={employee.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600/50 transition-colors duration-200">
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

        {/* Performance Metrics */}
        <div className="bg-white/50 dark:bg-gray-700/50 rounded-xl p-6 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Performance Metrics
          </h3>
          <div className="space-y-4">
            {metrics.map((metric, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600 dark:text-gray-400">{metric.label}</span>
                  <span className="font-medium text-gray-900 dark:text-white">{metric.value}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div 
                    className={`${metric.color} h-2 rounded-full transition-all duration-1000 ease-out`} 
                    style={{ width: `${metric.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Reviews */}
        <div className="bg-white/50 dark:bg-gray-700/50 rounded-xl p-6 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
            Recent Reviews
          </h3>
          <div className="space-y-3">
            {reviews.map((review, index) => (
              <div 
                key={index} 
                className={`p-3 rounded-lg border-l-4 transition-all duration-300 hover:scale-105 ${
                  review.color === 'green' 
                    ? 'bg-green-50 dark:bg-green-900/20 border-green-500' 
                    : review.color === 'blue'
                    ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-500'
                    : 'bg-orange-50 dark:bg-orange-900/20 border-orange-500'
                }`}
              >
                <p className={`text-sm font-medium ${
                  review.color === 'green' 
                    ? 'text-green-800 dark:text-green-400' 
                    : review.color === 'blue'
                    ? 'text-blue-800 dark:text-blue-400'
                    : 'text-orange-800 dark:text-orange-400'
                }`}>
                  {review.type}
                </p>
                <p className={`text-xs ${
                  review.color === 'green' 
                    ? 'text-green-600 dark:text-green-500' 
                    : review.color === 'blue'
                    ? 'text-blue-600 dark:text-blue-500'
                    : 'text-orange-600 dark:text-orange-500'
                }`}>
                  {review.employee} - {review.period}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 