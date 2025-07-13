'use client';

import { User } from '@/types/roles';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Target, 
  DollarSign, 
  Clock,
  Phone,
  Mail
} from 'lucide-react';

interface LeadsStatsProps {
  user: User;
}

export default function LeadsStats({ user }: LeadsStatsProps) {
  const stats = [
    {
      title: 'Total Leads',
      value: '1,247',
      change: '+12.5%',
      changeType: 'positive' as const,
      icon: Users,
      description: 'vs last month'
    },
    {
      title: 'Active Leads',
      value: '892',
      change: '+8.2%',
      changeType: 'positive' as const,
      icon: Target,
      description: 'in pipeline'
    },
    {
      title: 'Conversion Rate',
      value: '23.4%',
      change: '+2.1%',
      changeType: 'positive' as const,
      icon: TrendingUp,
      description: 'this month'
    },
    {
      title: 'Avg. Lead Value',
      value: 'GH₵45,200',
      change: '+5.7%',
      changeType: 'positive' as const,
      icon: DollarSign,
      description: 'per lead'
    },
    {
      title: 'Response Time',
      value: '2.3h',
      change: '-0.5h',
      changeType: 'positive' as const,
      icon: Clock,
      description: 'average'
    },
    {
      title: 'Hot Leads',
      value: '156',
      change: '+15.3%',
      changeType: 'positive' as const,
      icon: Phone,
      description: 'ready to close'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        const cardColors = [
          'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800',
          'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800',
          'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800',
          'bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 border-orange-200 dark:border-orange-800',
          'bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950 dark:to-indigo-900 border-indigo-200 dark:border-indigo-800',
          'bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950 dark:to-pink-900 border-pink-200 dark:border-pink-800'
        ];
        
        return (
          <Card key={index} className={`hover:shadow-lg transition-all duration-200 ${cardColors[index % cardColors.length]} border-2`}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {stat.title}
              </CardTitle>
              <div className="p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                <Icon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {stat.value}
              </div>
              <div className="flex items-center space-x-1 text-xs">
                {stat.changeType === 'positive' ? (
                  <TrendingUp className="h-3 w-3 text-green-600 dark:text-green-400" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-600 dark:text-red-400" />
                )}
                <span className={stat.changeType === 'positive' ? 'text-green-600 dark:text-green-400 font-medium' : 'text-red-600 dark:text-red-400 font-medium'}>
                  {stat.change}
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  {stat.description}
                </span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
} 