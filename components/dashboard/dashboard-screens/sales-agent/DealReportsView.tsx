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
  FileText,
  BarChart3,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  Calendar,
  Eye,
  Edit,
  MoreHorizontal,
  Circle,
  Target
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

interface DealReportsViewProps {
  user: User;
}

export default function DealReportsView({ user }: DealReportsViewProps) {
  const reports = [
    {
      id: '1',
      name: 'Monthly Sales Performance',
      type: 'Performance',
      period: 'January 2024',
      status: 'Generated',
      revenue: 'GH₵780,000',
      deals: 12,
      winRate: 34.2,
      avgDealSize: 'GH₵65,000',
      icon: BarChart3
    },
    {
      id: '2',
      name: 'Pipeline Analysis Report',
      type: 'Analytics',
      period: 'Q1 2024',
      status: 'Draft',
      revenue: 'GH₵2.4M',
      deals: 24,
      winRate: 28.5,
      avgDealSize: 'GH₵98,500',
      icon: Circle
    },
    {
      id: '3',
      name: 'Deal Stage Conversion',
      type: 'Conversion',
      period: 'Last 30 Days',
      status: 'Generated',
      revenue: 'GH₵450,000',
      deals: 8,
      winRate: 42.1,
      avgDealSize: 'GH₵56,250',
      icon: Target
    },
    {
      id: '4',
      name: 'Sales Forecast Report',
      type: 'Forecast',
      period: 'Q2 2024',
      status: 'In Progress',
      revenue: 'GH₵1.2M',
      deals: 18,
      winRate: 31.8,
      avgDealSize: 'GH₵66,667',
      icon: TrendingUp
    },
    {
      id: '5',
      name: 'Customer Acquisition Cost',
      type: 'Cost Analysis',
      period: 'January 2024',
      status: 'Generated',
      revenue: 'GH₵320,000',
      deals: 6,
      winRate: 38.5,
      avgDealSize: 'GH₵53,333',
      icon: DollarSign
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Generated': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Draft': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'In Progress': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Pending': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Performance': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'Analytics': return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200';
      case 'Conversion': return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200';
      case 'Forecast': return 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200';
      case 'Cost Analysis': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search reports..."
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

      <div className="grid gap-4">
        {reports.map((report, index) => {
          const Icon = report.icon;
          const cardColors = [
            'bg-gradient-to-r from-fuchsia-50 to-purple-50 dark:from-fuchsia-950 dark:to-purple-950 border-fuchsia-200 dark:border-fuchsia-800',
            'bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950 border-purple-200 dark:border-purple-800',
            'bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950 dark:to-blue-950 border-indigo-200 dark:border-indigo-800',
            'bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 border-blue-200 dark:border-blue-800',
            'bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-950 dark:to-teal-950 border-cyan-200 dark:border-cyan-800'
          ];
          
          return (
            <Card key={report.id} className={`hover:shadow-lg transition-all duration-200 ${cardColors[index % cardColors.length]} border-2`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                      <Icon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                          {report.name}
                        </h3>
                        <Badge className={getStatusColor(report.status)}>
                          {report.status}
                        </Badge>
                        <Badge className={getTypeColor(report.type)}>
                          {report.type}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-3 w-3" />
                          <span>Period: {report.period}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <DollarSign className="h-3 w-3" />
                          <span>Revenue: {report.revenue}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {report.deals}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Deals
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Win Rate: {report.winRate}%
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {report.avgDealSize}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Avg. Deal Size
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-3 w-3" />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button size="sm" variant="outline">
                            <MoreHorizontal className="h-3 w-3" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="h-4 w-4 mr-2" />
                            View Report
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="h-4 w-4 mr-2" />
                            Download PDF
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit Report
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Win Rate</span>
                    <span className="font-medium text-gray-900 dark:text-gray-100">{report.winRate}%</span>
                  </div>
                  <Progress value={report.winRate} className="h-2" />
                  
                  <div className="grid grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-3 w-3" />
                      <span>Revenue: {report.revenue}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-3 w-3" />
                      <span>Deals: {report.deals}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>Period: {report.period}</span>
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