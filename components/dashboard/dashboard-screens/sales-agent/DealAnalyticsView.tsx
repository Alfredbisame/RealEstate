'use client';

import { UserRole } from '@/types/roles';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Search, 
  Filter, 
  Download, 
  DollarSign,
  TrendingUp,
  TrendingDown,
  BarChart3,
  Target,
  Users,
  Clock,
  Eye,
  Edit,
  MoreHorizontal
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

interface DealAnalyticsViewProps {
  user: User;
}

export default function DealAnalyticsView({ user }: DealAnalyticsViewProps) {
  const analytics = [
    {
      id: '1',
      metric: 'Total Pipeline Value',
      value: 'GH₵2.4M',
      change: '+15.3%',
      changeType: 'positive' as const,
      target: 85,
      icon: DollarSign,
      description: 'vs last month'
    },
    {
      id: '2',
      metric: 'Win Rate',
      value: '34.2%',
      change: '+2.1%',
      changeType: 'positive' as const,
      target: 75,
      icon: Target,
      description: 'this quarter'
    },
    {
      id: '3',
      metric: 'Avg. Deal Size',
      value: 'GH₵98,500',
      change: '+5.7%',
      changeType: 'positive' as const,
      target: 80,
      icon: BarChart3,
      description: 'per deal'
    },
    {
      id: '4',
      metric: 'Sales Cycle',
      value: '45 days',
      change: '-3 days',
      changeType: 'positive' as const,
      target: 90,
      icon: Clock,
      description: 'average'
    },
    {
      id: '5',
      metric: 'Conversion Rate',
      value: '28.5%',
      change: '+4.2%',
      changeType: 'positive' as const,
      target: 70,
      icon: Users,
      description: 'lead to deal'
    },
    {
      id: '6',
      metric: 'Deal Velocity',
      value: 'GH₵53,333',
      change: '+8.7%',
      changeType: 'positive' as const,
      target: 85,
      icon: TrendingUp,
      description: 'per month'
    }
  ];

  const getChangeColor = (changeType: string) => {
    return changeType === 'positive' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400';
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search analytics..."
              className="pl-10 w-64 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {analytics.map((item, index) => {
          const Icon = item.icon;
          const cardColors = [
            'bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950 dark:to-indigo-900 border-indigo-200 dark:border-indigo-800',
            'bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-950 dark:to-violet-900 border-violet-200 dark:border-violet-800',
            'bg-gradient-to-br from-fuchsia-50 to-fuchsia-100 dark:from-fuchsia-950 dark:to-fuchsia-900 border-fuchsia-200 dark:border-fuchsia-800',
            'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800',
            'bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-950 dark:to-cyan-900 border-cyan-200 dark:border-cyan-800',
            'bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-950 dark:to-teal-900 border-teal-200 dark:border-teal-800'
          ];
          
          return (
            <Card key={item.id} className={`hover:shadow-lg transition-all duration-200 ${cardColors[index % cardColors.length]} border-2`}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {item.metric}
                </CardTitle>
                <div className="p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <Icon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {item.value}
                </div>
                <div className="flex items-center space-x-1 text-xs">
                  {item.changeType === 'positive' ? (
                    <TrendingUp className="h-3 w-3 text-green-600 dark:text-green-400" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-600 dark:text-red-400" />
                  )}
                  <span className={getChangeColor(item.changeType)}>
                    {item.change}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </span>
                </div>
                <div className="mt-3">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-400">Progress</span>
                    <span className="font-medium text-gray-900 dark:text-gray-100">{item.target}%</span>
                  </div>
                  <Progress 
                    value={item.target} 
                    className="h-2"
                  />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
} 