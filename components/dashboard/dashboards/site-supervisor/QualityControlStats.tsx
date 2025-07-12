import { TrendingUp, TrendingDown, Award, Clock, CheckCircle, AlertTriangle, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function QualityControlStats() {
  const stats = [
    {
      title: 'Quality Score',
      value: '94%',
      change: '+2%',
      trend: 'up',
      icon: Award,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      progress: 94
    },
    {
      title: 'Inspection Rate',
      value: '87%',
      change: '+5%',
      trend: 'up',
      icon: Clock,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      progress: 87
    },
    {
      title: 'Compliance Rate',
      value: '98%',
      change: '+1%',
      trend: 'up',
      icon: Shield,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      progress: 98
    },
    {
      title: 'Issues Resolved',
      value: '12',
      change: '+3',
      trend: 'up',
      icon: CheckCircle,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      progress: 85
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer group">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor} dark:bg-gray-700 group-hover:scale-110 transition-transform duration-200`}>
                <stat.icon className={`w-4 h-4 ${stat.color} group-hover:scale-110 transition-transform duration-200`} />
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {stat.value}
              </span>
              <div className={`flex items-center text-xs font-medium ${
                stat.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
              }`}>
                {stat.trend === 'up' ? (
                  <TrendingUp className="w-3 h-3 mr-1" />
                ) : (
                  <TrendingDown className="w-3 h-3 mr-1" />
                )}
                {stat.change}
              </div>
            </div>
            <Progress value={stat.progress} className="h-2" />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
              vs last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 