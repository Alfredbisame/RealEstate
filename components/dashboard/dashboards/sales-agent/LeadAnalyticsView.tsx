'use client';

import { User } from '@/types/roles';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Search, 
  Filter, 
  Download, 
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  LineChart,
  Users,
  DollarSign,
  Calendar,
  Target,
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

interface LeadAnalyticsViewProps {
  user: User;
}

export default function LeadAnalyticsView({ user }: LeadAnalyticsViewProps) {
  const analytics = [
    {
      id: '1',
      metric: 'Lead Conversion Rate',
      value: '23.4%',
      change: '+2.1%',
      changeType: 'positive' as const,
      target: 25,
      icon: TrendingUp,
      description: 'vs last month'
    },
    {
      id: '2',
      metric: 'Average Lead Value',
      value: 'GH₵45,200',
      change: '+5.7%',
      changeType: 'positive' as const,
      target: 50,
      icon: DollarSign,
      description: 'per lead'
    },
    {
      id: '3',
      metric: 'Lead Response Time',
      value: '2.3h',
      change: '-0.5h',
      changeType: 'positive' as const,
      target: 80,
      icon: Calendar,
      description: 'average'
    },
    {
      id: '4',
      metric: 'Lead Quality Score',
      value: '78.5',
      change: '+3.2%',
      changeType: 'positive' as const,
      target: 85,
      icon: Target,
      description: 'out of 100'
    },
    {
      id: '5',
      metric: 'Lead Source Performance',
      value: 'Website',
      change: '+12.5%',
      changeType: 'positive' as const,
      target: 90,
      icon: BarChart3,
      description: 'top source'
    },
    {
      id: '6',
      metric: 'Sales Pipeline Value',
      value: 'GH₵2.4M',
      change: '+8.3%',
      changeType: 'positive' as const,
      target: 75,
      icon: PieChart,
      description: 'total pipeline'
    }
  ];

  const getChangeColor = (changeType: string) => {
    return changeType === 'positive' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400';
  };

  const getProgressColor = (value: number, target: number) => {
    const percentage = (value / target) * 100;
    if (percentage >= 90) return 'bg-green-500';
    if (percentage >= 70) return 'bg-yellow-500';
    return 'bg-red-500';
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
        {analytics.map((item) => {
          const Icon = item.icon;
          const progressValue = typeof item.value === 'string' && item.value.includes('%') 
            ? parseFloat(item.value) 
            : typeof item.value === 'string' && item.value.includes('GH₵')
            ? 75
            : 65;
          
          return (
            <Card key={item.id} className="hover:shadow-md transition-shadow duration-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {item.metric}
                </CardTitle>
                <Icon className="h-4 w-4 text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {item.value}
                </div>
                <div className="flex items-center space-x-1 text-xs">
                  {item.changeType === 'positive' ? (
                    <TrendingUp className="h-3 w-3 text-green-500" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-500" />
                  )}
                  <span className={getChangeColor(item.changeType)}>
                    {item.change}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {item.description}
                  </span>
                </div>
                <div className="mt-3">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-400">Progress</span>
                    <span className="font-medium text-gray-900 dark:text-gray-100">{progressValue}%</span>
                  </div>
                  <Progress 
                    value={progressValue} 
                    className="h-2"
                  />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5" />
              <span>Lead Source Distribution</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { source: 'Website', percentage: 35, color: 'bg-blue-500' },
                { source: 'Referrals', percentage: 25, color: 'bg-green-500' },
                { source: 'Social Media', percentage: 20, color: 'bg-yellow-500' },
                { source: 'Cold Calls', percentage: 15, color: 'bg-red-500' },
                { source: 'Email Marketing', percentage: 5, color: 'bg-purple-500' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">{item.source}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${item.color}`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{item.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <LineChart className="h-5 w-5" />
              <span>Lead Conversion Trends</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { month: 'Jan', conversion: 18.5, target: 20 },
                { month: 'Feb', conversion: 21.2, target: 20 },
                { month: 'Mar', conversion: 19.8, target: 20 },
                { month: 'Apr', conversion: 23.4, target: 20 },
                { month: 'May', conversion: 22.1, target: 20 },
                { month: 'Jun', conversion: 25.7, target: 20 }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">{item.month}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${item.conversion >= item.target ? 'bg-green-500' : 'bg-yellow-500'}`}
                        style={{ width: `${(item.conversion / 30) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{item.conversion}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 