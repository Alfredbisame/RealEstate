'use client';

import { TrendingUp, TrendingDown, Clock, AlertTriangle, Award, Users, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface WorkersStatsProps {
  attendanceRate?: number;
  productivityScore?: number;
  safetyIncidents?: number;
  recognitionRate?: number;
}

export default function WorkersStats({
  attendanceRate = 91.2,
  productivityScore = 87.5,
  safetyIncidents = 2,
  recognitionRate = 15.4
}: WorkersStatsProps) {
  const stats = [
    {
      title: 'Attendance Rate',
      value: `${attendanceRate}%`,
      change: '+2.1%',
      trend: 'up',
      icon: Clock,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      progress: attendanceRate
    },
    {
      title: 'Productivity Score',
      value: `${productivityScore}%`,
      change: '+1.8%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      progress: productivityScore
    },
    {
      title: 'Safety Incidents',
      value: safetyIncidents.toString(),
      change: '-1',
      trend: 'down',
      icon: AlertTriangle,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      progress: 100 - (safetyIncidents * 10)
    },
    {
      title: 'Recognition Rate',
      value: `${recognitionRate}%`,
      change: '+3.2%',
      trend: 'up',
      icon: Award,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      progress: recognitionRate
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
              <span className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {stat.value}
              </span>
              <div className={`flex items-center text-xs font-medium ${
                stat.trend === 'up' ? 'text-blue-600 dark:text-blue-400' : 'text-blue-600 dark:text-blue-400'
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