'use client';

import { UserRole } from '@/types/roles';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Users, 
  Eye,
  MousePointer,
  Share2,
  Target,
  Mail,
  Smartphone,
  BarChart3
} from 'lucide-react';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

interface MarketingStatsProps {
  user: User;
}

export default function MarketingStats({ user }: MarketingStatsProps) {
  const stats = [
    {
      title: 'Active Campaigns',
      value: '8',
      change: '+2',
      changeType: 'positive' as const,
      icon: Target,
      description: 'vs last month'
    },
    {
      title: 'Total Reach',
      value: '45.2K',
      change: '+12.5%',
      changeType: 'positive' as const,
      icon: Users,
      description: 'audience reached'
    },
    {
      title: 'Engagement Rate',
      value: '8.7%',
      change: '+2.1%',
      changeType: 'positive' as const,
      icon: Eye,
      description: 'average rate'
    },
    {
      title: 'Click-Through Rate',
      value: '3.2%',
      change: '+0.8%',
      changeType: 'positive' as const,
      icon: MousePointer,
      description: 'CTR performance'
    },
    {
      title: 'Lead Generation',
      value: '156',
      change: '+23',
      changeType: 'positive' as const,
      icon: Share2,
      description: 'qualified leads'
    },
    {
      title: 'ROI',
      value: '285%',
      change: '+15%',
      changeType: 'positive' as const,
      icon: BarChart3,
      description: 'return on investment'
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
          'bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 border-orange-200 dark:border-orange-800',
          'bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900 border-amber-200 dark:border-amber-800',
          'bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950 dark:to-yellow-900 border-yellow-200 dark:border-yellow-800'
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