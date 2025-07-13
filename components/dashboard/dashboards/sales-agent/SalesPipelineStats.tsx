'use client';

import { UserRole } from '@/types/roles';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Users, 
  Clock,
  Target,
  BarChart3,
  GitBranch
} from 'lucide-react';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

interface SalesPipelineStatsProps {
  user: User;
}

export default function SalesPipelineStats({ user }: SalesPipelineStatsProps) {
  const stats = [
    {
      title: 'Total Pipeline Value',
      value: 'GH₵2.4M',
      change: '+15.3%',
      changeType: 'positive' as const,
      icon: DollarSign,
      description: 'vs last month'
    },
    {
      title: 'Active Deals',
      value: '24',
      change: '+8.2%',
      changeType: 'positive' as const,
      icon: GitBranch,
      description: 'in pipeline'
    },
    {
      title: 'Win Rate',
      value: '34.2%',
      change: '+2.1%',
      changeType: 'positive' as const,
      icon: Target,
      description: 'this quarter'
    },
    {
      title: 'Avg. Deal Size',
      value: 'GH₵98,500',
      change: '+5.7%',
      changeType: 'positive' as const,
      icon: BarChart3,
      description: 'per deal'
    },
    {
      title: 'Sales Cycle',
      value: '45 days',
      change: '-3 days',
      changeType: 'positive' as const,
      icon: Clock,
      description: 'average'
    },
    {
      title: 'Conversion Rate',
      value: '28.5%',
      change: '+4.2%',
      changeType: 'positive' as const,
      icon: Users,
      description: 'lead to deal'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        const cardColors = [
          'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800',
          'bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950 dark:to-pink-900 border-pink-200 dark:border-pink-800',
          'bg-gradient-to-br from-rose-50 to-rose-100 dark:from-rose-950 dark:to-rose-900 border-rose-200 dark:border-rose-800',
          'bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950 dark:to-indigo-900 border-indigo-200 dark:border-indigo-800',
          'bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-950 dark:to-violet-900 border-violet-200 dark:border-violet-800',
          'bg-gradient-to-br from-fuchsia-50 to-fuchsia-100 dark:from-fuchsia-950 dark:to-fuchsia-900 border-fuchsia-200 dark:border-fuchsia-800'
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