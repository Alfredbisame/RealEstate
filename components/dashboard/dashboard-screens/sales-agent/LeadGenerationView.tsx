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
  Link,
  FileText,
  Globe,
  BarChart3
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

interface LeadGenerationViewProps {
  user: User;
}

export default function LeadGenerationView({ user }: LeadGenerationViewProps) {
  const leadSources = [
    {
      id: '1',
      name: 'Property Investment Landing Page',
      type: 'Landing Page',
      status: 'Active',
      visitors: '2,450',
      conversions: '156',
      conversionRate: '6.4%',
      leads: '89',
      cost: 'GH₵1,200',
      cpl: 'GH₵13.5',
      url: 'invest.accraproperties.com',
      createdDate: '2024-01-15'
    },
    {
      id: '2',
      name: 'Free Property Valuation Form',
      type: 'Lead Form',
      status: 'Active',
      visitors: '1,800',
      conversions: '234',
      conversionRate: '13.0%',
      leads: '156',
      cost: 'GH₵800',
      cpl: 'GH₵5.1',
      url: 'valuation.accraproperties.com',
      createdDate: '2024-01-10'
    },
    {
      id: '3',
      name: 'Newsletter Signup',
      type: 'Email Capture',
      status: 'Active',
      visitors: '3,200',
      conversions: '480',
      conversionRate: '15.0%',
      leads: '320',
      cost: 'GH₵500',
      cpl: 'GH₵1.6',
      url: 'newsletter.accraproperties.com',
      createdDate: '2024-01-05'
    },
    {
      id: '4',
      name: 'Property Consultation Booking',
      type: 'Booking Form',
      status: 'Active',
      visitors: '1,500',
      conversions: '75',
      conversionRate: '5.0%',
      leads: '45',
      cost: 'GH₵600',
      cpl: 'GH₵13.3',
      url: 'consult.accraproperties.com',
      createdDate: '2024-01-20'
    },
    {
      id: '5',
      name: 'Market Report Download',
      type: 'Content Gate',
      status: 'Draft',
      visitors: '0',
      conversions: '0',
      conversionRate: '0%',
      leads: '0',
      cost: 'GH₵0',
      cpl: 'GH₵0',
      url: 'reports.accraproperties.com',
      createdDate: '2024-02-01'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Draft': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      case 'Paused': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Archived': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Landing Page': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'Lead Form': return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200';
      case 'Email Capture': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Booking Form': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'Content Gate': return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200';
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
              placeholder="Search lead sources..."
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
          <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white">
            <FileText className="h-4 w-4 mr-2" />
            New Lead Source
          </Button>
        </div>
      </div>

      <div className="grid gap-4">
        {leadSources.map((source, index) => {
          const cardColors = [
            'bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950 border-orange-200 dark:border-orange-800',
            'bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950 dark:to-yellow-950 border-amber-200 dark:border-amber-800',
            'bg-gradient-to-r from-yellow-50 to-lime-50 dark:from-yellow-950 dark:to-lime-950 border-yellow-200 dark:border-yellow-800',
            'bg-gradient-to-r from-lime-50 to-green-50 dark:from-lime-950 dark:to-green-950 border-lime-200 dark:border-lime-800',
            'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-green-200 dark:border-green-800'
          ];
          
          return (
            <Card key={source.id} className={`hover:shadow-lg transition-all duration-200 ${cardColors[index % cardColors.length]} border-2`}>
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
                        <Badge className={getTypeColor(source.type)}>
                          {source.type}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <div className="flex items-center space-x-2">
                          <Globe className="h-3 w-3" />
                          <span>{source.url}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-3 w-3" />
                          <span>Created: {source.createdDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {source.visitors}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Visitors
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Conversions: {source.conversions}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {source.leads}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Leads
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Rate: {source.conversionRate}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {source.cpl}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Cost per Lead
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Total: {source.cost}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline" className="bg-orange-50 hover:bg-orange-100 dark:bg-orange-900/20 dark:hover:bg-orange-900/30 border-orange-200 dark:border-orange-700 text-orange-700 dark:text-orange-300">
                        <Eye className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-amber-50 hover:bg-amber-100 dark:bg-amber-900/20 dark:hover:bg-amber-900/30 border-amber-200 dark:border-amber-700 text-amber-700 dark:text-amber-300">
                        <Link className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-yellow-50 hover:bg-yellow-100 dark:bg-yellow-900/20 dark:hover:bg-yellow-900/30 border-yellow-200 dark:border-yellow-700 text-yellow-700 dark:text-yellow-300">
                        <BarChart3 className="h-3 w-3" />
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
                            View Landing Page
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit Source
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <BarChart3 className="h-4 w-4 mr-2" />
                            View Analytics
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Link className="h-4 w-4 mr-2" />
                            Copy URL
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Conversion Performance</span>
                    <span className="font-medium text-gray-900 dark:text-gray-100">{source.conversionRate}</span>
                  </div>
                  <Progress value={parseFloat(source.conversionRate)} className="h-2" />
                  
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Visitors</span>
                      <span className="font-medium text-gray-900 dark:text-gray-100">{source.visitors}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Conversions</span>
                      <span className="font-medium text-gray-900 dark:text-gray-100">{source.conversions}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Leads</span>
                      <span className="font-medium text-gray-900 dark:text-gray-100">{source.leads}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>Created: {source.createdDate}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>Status: {source.status}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-3 w-3" />
                      <span>CPL: {source.cpl}</span>
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