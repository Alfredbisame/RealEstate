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
  Globe,
  Users,
  Phone,
  Mail,
  TrendingUp,
  BarChart3,
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

interface LeadSourcesViewProps {
  user: User;
}

export default function LeadSourcesView({ user }: LeadSourcesViewProps) {
  const sources = [
    {
      id: '1',
      name: 'Website',
      leads: 456,
      conversionRate: 23.4,
      avgValue: 'GH₵45,200',
      cost: 'GH₵2,500',
      roi: 825,
      status: 'Active'
    },
    {
      id: '2',
      name: 'Referrals',
      leads: 234,
      conversionRate: 34.2,
      avgValue: 'GH₵52,800',
      cost: 'GH₵0',
      roi: 0,
      status: 'Active'
    },
    {
      id: '3',
      name: 'Social Media',
      leads: 189,
      conversionRate: 18.7,
      avgValue: 'GH₵38,500',
      cost: 'GH₵1,800',
      roi: 1025,
      status: 'Active'
    },
    {
      id: '4',
      name: 'Cold Calls',
      leads: 156,
      conversionRate: 12.3,
      avgValue: 'GH₵28,900',
      cost: 'GH₵3,200',
      roi: 415,
      status: 'Active'
    },
    {
      id: '5',
      name: 'Email Marketing',
      leads: 98,
      conversionRate: 15.6,
      avgValue: 'GH₵32,100',
      cost: 'GH₵900',
      roi: 1650,
      status: 'Active'
    },
    {
      id: '6',
      name: 'Print Ads',
      leads: 67,
      conversionRate: 8.9,
      avgValue: 'GH₵25,400',
      cost: 'GH₵2,100',
      roi: 210,
      status: 'Inactive'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Inactive': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getRoiColor = (roi: number) => {
    if (roi >= 1000) return 'text-green-600 dark:text-green-400';
    if (roi >= 500) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search sources..."
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
        {sources.map((source) => (
          <Card key={source.id} className="hover:shadow-md transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                        {source.name}
                      </h3>
                      <Badge className={getStatusColor(source.status)}>
                        {source.status}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <div className="flex items-center space-x-2">
                        <Users className="h-3 w-3" />
                        <span>{source.leads} leads</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="h-3 w-3" />
                        <span>{source.conversionRate}% conversion rate</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="font-semibold text-gray-900 dark:text-gray-100">
                      {source.avgValue}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Avg. Value
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Cost: {source.cost}
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className={`font-semibold ${getRoiColor(source.roi)}`}>
                      {source.roi}% ROI
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Return
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline">
                      <BarChart3 className="h-3 w-3" />
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
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Source
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <TrendingUp className="h-4 w-4 mr-2" />
                          Performance Report
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Conversion Rate</span>
                  <span className="font-medium text-gray-900 dark:text-gray-100">{source.conversionRate}%</span>
                </div>
                <Progress value={source.conversionRate} className="h-2" />
                
                <div className="grid grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Globe className="h-3 w-3" />
                    <span>Total Leads: {source.leads}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="h-3 w-3" />
                    <span>Avg Value: {source.avgValue}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BarChart3 className="h-3 w-3" />
                    <span>ROI: {source.roi}%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 