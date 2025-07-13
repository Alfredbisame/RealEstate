'use client';

import { UserRole } from '@/types/roles';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Calculator, 
  Gift,
  Award,
  Target,
  BarChart3
} from 'lucide-react';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

interface CommissionsStatsProps {
  user: User;
}

export default function CommissionsStats({ user }: CommissionsStatsProps) {
  const stats = [
    {
      title: 'Total Commissions',
      value: 'GH₵45,200',
      change: '+12.5%',
      changeType: 'positive' as const,
      icon: DollarSign,
      description: 'vs last month'
    },
    {
      title: 'Monthly Bonus',
      value: 'GH₵8,500',
      change: '+18.2%',
      changeType: 'positive' as const,
      icon: Gift,
      description: 'this month'
    },
    {
      title: 'Commission Rate',
      value: '15.2%',
      change: '+2.1%',
      changeType: 'positive' as const,
      icon: Calculator,
      description: 'average rate'
    },
    {
      title: 'Performance Bonus',
      value: 'GH₵12,300',
      change: '+25.7%',
      changeType: 'positive' as const,
      icon: Award,
      description: 'quarterly'
    },
    {
      title: 'Target Achievement',
      value: '94.5%',
      change: '+5.2%',
      changeType: 'positive' as const,
      icon: Target,
      description: 'of monthly goal'
    },
    {
      title: 'Commission Growth',
      value: '28.3%',
      change: '+8.7%',
      changeType: 'positive' as const,
      icon: BarChart3,
      description: 'year over year'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        const cardColors = [
          'bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-emerald-900 border-emerald-200 dark:border-emerald-800',
          'bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-950 dark:to-teal-900 border-teal-200 dark:border-teal-800',
          'bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-950 dark:to-cyan-900 border-cyan-200 dark:border-cyan-800',
          'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800',
          'bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950 dark:to-indigo-900 border-indigo-200 dark:border-indigo-800',
          'bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-950 dark:to-violet-900 border-violet-200 dark:border-violet-800'
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