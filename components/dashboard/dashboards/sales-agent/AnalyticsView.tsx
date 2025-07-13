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
  Users,
  Eye,
  MousePointer,
  Share2,
  Target,
  TrendingUp,
  Edit,
  MoreHorizontal,
  Calendar,
  Clock,
  BarChart3,
  PieChart,
  LineChart,
  Activity
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

interface AnalyticsViewProps {
  user: User;
}

export default function AnalyticsView({ user }: AnalyticsViewProps) {
  const analyticsData = [
    {
      id: '1',
      metric: 'Total Campaign Performance',
      period: 'January 2024',
      value: 'GH₵45,200',
      change: '+12.5%',
      changeType: 'positive' as const,
      target: 'GH₵40,000',
      achievement: '113%',
      channels: ['Email', 'Social', 'Digital Ads'],
      status: 'Exceeding'
    },
    {
      id: '2',
      metric: 'Lead Generation ROI',
      period: 'Q1 2024',
      value: '285%',
      change: '+15%',
      changeType: 'positive' as const,
      target: '250%',
      achievement: '114%',
      channels: ['Landing Pages', 'Forms', 'Content'],
      status: 'Exceeding'
    },
    {
      id: '3',
      metric: 'Email Campaign Performance',
      period: 'Last 30 Days',
      value: '8.7%',
      change: '+2.1%',
      changeType: 'positive' as const,
      target: '7.5%',
      achievement: '116%',
      channels: ['Newsletter', 'Promotional', 'Transactional'],
      status: 'Exceeding'
    },
    {
      id: '4',
      metric: 'Social Media Engagement',
      period: 'January 2024',
      value: '12.3%',
      change: '+3.2%',
      changeType: 'positive' as const,
      target: '10%',
      achievement: '123%',
      channels: ['Instagram', 'Facebook', 'LinkedIn'],
      status: 'Exceeding'
    },
    {
      id: '5',
      metric: 'Conversion Rate',
      period: 'Last 30 Days',
      value: '6.4%',
      change: '+0.8%',
      changeType: 'positive' as const,
      target: '6%',
      achievement: '107%',
      channels: ['Landing Pages', 'Forms', 'Ads'],
      status: 'Meeting'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Exceeding': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Meeting': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Below': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Critical': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getChangeColor = (changeType: string) => {
    switch (changeType) {
      case 'positive': return 'text-green-600 dark:text-green-400';
      case 'negative': return 'text-red-600 dark:text-red-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
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
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
            <BarChart3 className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      <div className="grid gap-4">
        {analyticsData.map((metric, index) => {
          const cardColors = [
            'bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950 dark:to-yellow-950 border-amber-200 dark:border-amber-800',
            'bg-gradient-to-r from-yellow-50 to-lime-50 dark:from-yellow-950 dark:to-lime-950 border-yellow-200 dark:border-yellow-800',
            'bg-gradient-to-r from-lime-50 to-green-50 dark:from-lime-950 dark:to-green-950 border-lime-200 dark:border-lime-800',
            'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-green-200 dark:border-green-800',
            'bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950 border-emerald-200 dark:border-emerald-800'
          ];
          
          return (
            <Card key={metric.id} className={`hover:shadow-lg transition-all duration-200 ${cardColors[index % cardColors.length]} border-2`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                          {metric.metric}
                        </h3>
                        <Badge className={getStatusColor(metric.status)}>
                          {metric.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-3 w-3" />
                          <span>Period: {metric.period}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <BarChart3 className="h-3 w-3" />
                          <span>Channels: {metric.channels.join(', ')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Current Value
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Target: {metric.target}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {metric.achievement}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Achievement
                      </div>
                      <div className={`text-xs font-medium ${getChangeColor(metric.changeType)}`}>
                        {metric.change}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {metric.target}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Target
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        vs Previous
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline" className="bg-amber-50 hover:bg-amber-100 dark:bg-amber-900/20 dark:hover:bg-amber-900/30 border-amber-200 dark:border-amber-700 text-amber-700 dark:text-amber-300">
                        <BarChart3 className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-yellow-50 hover:bg-yellow-100 dark:bg-yellow-900/20 dark:hover:bg-yellow-900/30 border-yellow-200 dark:border-yellow-700 text-yellow-700 dark:text-yellow-300">
                        <PieChart className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-lime-50 hover:bg-lime-100 dark:bg-lime-900/20 dark:hover:bg-lime-900/30 border-lime-200 dark:border-lime-700 text-lime-700 dark:text-lime-300">
                        <LineChart className="h-3 w-3" />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button size="sm" variant="outline" className="bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-700">
                            <MoreHorizontal className="h-3 w-3" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <BarChart3 className="h-4 w-4 mr-2" />
                            View Detailed Report
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="h-4 w-4 mr-2" />
                            Export Data
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Activity className="h-4 w-4 mr-2" />
                            Performance Analysis
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <TrendingUp className="h-4 w-4 mr-2" />
                            Compare Periods
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Target Achievement</span>
                    <span className="font-medium text-gray-900 dark:text-gray-100">{metric.achievement}</span>
                  </div>
                  <Progress value={parseFloat(metric.achievement)} className="h-2" />
                  
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Current</span>
                      <span className="font-medium text-gray-900 dark:text-gray-100">{metric.value}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Target</span>
                      <span className="font-medium text-gray-900 dark:text-gray-100">{metric.target}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Change</span>
                      <span className={`font-medium ${getChangeColor(metric.changeType)}`}>{metric.change}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>Period: {metric.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>Status: {metric.status}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>Channels: {metric.channels.length}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
} 