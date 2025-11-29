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
  Calculator,
  Gift,
  Award,
  Target,
  TrendingUp,
  Eye,
  Edit,
  MoreHorizontal,
  Calendar,
  Clock,
  Users,
  BarChart3,
  FileText
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

interface CommissionReportsViewProps {
  user: User;
}

export default function CommissionReportsView({ user }: CommissionReportsViewProps) {
  const reports = [
    {
      id: '1',
      title: 'Monthly Commission Summary',
      description: 'Comprehensive report of all commissions earned in January 2024',
      type: 'Monthly Summary',
      totalCommissions: 'GH₵45,200',
      totalBonuses: 'GH₵8,500',
      totalEarnings: 'GH₵53,700',
      deals: 12,
      status: 'Generated',
      date: '2024-02-01',
      format: 'PDF'
    },
    {
      id: '2',
      title: 'Quarterly Performance Report',
      description: 'Q4 2023 performance analysis and commission breakdown',
      type: 'Quarterly Report',
      totalCommissions: 'GH₵126,500',
      totalBonuses: 'GH₵22,800',
      totalEarnings: 'GH₵149,300',
      deals: 35,
      status: 'Generated',
      date: '2024-01-15',
      format: 'PDF'
    },
    {
      id: '3',
      title: 'Commission Rate Analysis',
      description: 'Detailed analysis of commission rates and performance metrics',
      type: 'Analytics Report',
      totalCommissions: 'GH₵45,200',
      totalBonuses: 'GH₵8,500',
      totalEarnings: 'GH₵53,700',
      deals: 12,
      status: 'Processing',
      date: '2024-01-14',
      format: 'Excel'
    },
    {
      id: '4',
      title: 'Bonus Performance Report',
      description: 'Analysis of bonus earnings and performance incentives',
      type: 'Bonus Report',
      totalCommissions: 'GH₵0',
      totalBonuses: 'GH₵8,500',
      totalEarnings: 'GH₵8,500',
      deals: 0,
      status: 'Generated',
      date: '2024-01-13',
      format: 'PDF'
    },
    {
      id: '5',
      title: 'Annual Commission Summary',
      description: 'Complete annual commission and earnings summary for 2023',
      type: 'Annual Report',
      totalCommissions: 'GH₵485,600',
      totalBonuses: 'GH₵89,200',
      totalEarnings: 'GH₵574,800',
      deals: 142,
      status: 'Generated',
      date: '2024-01-10',
      format: 'PDF'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Generated': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Processing': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Failed': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Monthly Summary': return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200';
      case 'Quarterly Report': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Analytics Report': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'Bonus Report': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'Annual Report': return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getFormatColor = (format: string) => {
    switch (format) {
      case 'PDF': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'Excel': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'CSV': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
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
          const cardColors = [
            'bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950 dark:to-purple-950 border-violet-200 dark:border-violet-800',
            'bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border-purple-200 dark:border-purple-800',
            'bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950 dark:to-rose-950 border-pink-200 dark:border-pink-800',
            'bg-gradient-to-r from-rose-50 to-orange-50 dark:from-rose-950 dark:to-orange-950 border-rose-200 dark:border-rose-800',
            'bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950 border-orange-200 dark:border-orange-800'
          ];
          
          return (
            <Card key={report.id} className={`hover:shadow-lg transition-all duration-200 ${cardColors[index % cardColors.length]} border-2`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                          {report.title}
                        </h3>
                        <Badge className={getStatusColor(report.status)}>
                          {report.status}
                        </Badge>
                        <Badge className={getTypeColor(report.type)}>
                          {report.type}
                        </Badge>
                        <Badge className={getFormatColor(report.format)}>
                          {report.format}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <div className="flex items-center space-x-2">
                          <FileText className="h-3 w-3" />
                          <span>{report.description}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <BarChart3 className="h-3 w-3" />
                          <span>Deals: {report.deals}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {report.totalEarnings}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Total Earnings
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Date: {report.date}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {report.totalCommissions}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Commissions
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Bonuses: {report.totalBonuses}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline" className="bg-violet-50 hover:bg-violet-100 dark:bg-violet-900/20 dark:hover:bg-violet-900/30 border-violet-200 dark:border-violet-700 text-violet-700 dark:text-violet-300">
                        <BarChart3 className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-purple-50 hover:bg-purple-100 dark:bg-purple-900/20 dark:hover:bg-purple-900/30 border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300">
                        <FileText className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-pink-50 hover:bg-pink-100 dark:bg-pink-900/20 dark:hover:bg-pink-900/30 border-pink-200 dark:border-pink-700 text-pink-700 dark:text-pink-300">
                        <Download className="h-3 w-3" />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button size="sm" variant="outline" className="bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-700">
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
                            Download
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
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Commissions</span>
                      <span className="font-medium text-gray-900 dark:text-gray-100">{report.totalCommissions}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Bonuses</span>
                      <span className="font-medium text-gray-900 dark:text-gray-100">{report.totalBonuses}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Deals</span>
                      <span className="font-medium text-gray-900 dark:text-gray-100">{report.deals}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>Date: {report.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>Status: {report.status}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>Format: {report.format}</span>
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