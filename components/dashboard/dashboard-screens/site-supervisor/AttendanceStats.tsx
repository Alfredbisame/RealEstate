'use client';

import { TrendingUp, TrendingDown, Calendar, Clock, Users, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface AttendanceStatsProps {
  monthlyAttendance?: number;
  weeklyAverage?: number;
  lateArrivals?: number;
  earlyDepartures?: number;
}

export default function AttendanceStats({
  monthlyAttendance = 89.5,
  weeklyAverage = 92.3,
  lateArrivals = 8,
  earlyDepartures = 3
}: AttendanceStatsProps) {
  const stats = [
    {
      title: 'Monthly Attendance',
      value: `${monthlyAttendance}%`,
      change: '+2.3%',
      trend: 'up',
      icon: Calendar,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      progress: monthlyAttendance
    },
    {
      title: 'Weekly Average',
      value: `${weeklyAverage}%`,
      change: '+1.8%',
      trend: 'up',
      icon: Clock,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      progress: weeklyAverage
    },
    {
      title: 'Late Arrivals',
      value: lateArrivals.toString(),
      change: '-2',
      trend: 'down',
      icon: AlertTriangle,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      progress: 100 - (lateArrivals * 5)
    },
    {
      title: 'Early Departures',
      value: earlyDepartures.toString(),
      change: '-1',
      trend: 'down',
      icon: XCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      progress: 100 - (earlyDepartures * 8)
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
              <span className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
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