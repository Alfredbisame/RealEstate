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
      color: 'text-green-600',
      bgColor: 'bg-green-50',
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
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      progress: 100 - (safetyIncidents * 10)
    },
    {
      title: 'Recognition Rate',
      value: `${recognitionRate}%`,
      change: '+3.2%',
      trend: 'up',
      icon: Award,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      progress: recognitionRate
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="border-0 shadow-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl font-bold text-gray-900">
                {stat.value}
              </span>
              <div className={`flex items-center text-xs font-medium ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
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
            <p className="text-xs text-gray-500 mt-2">
              vs last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 