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
  Clock,
  Target,
  TrendingUp,
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

interface DealStagesViewProps {
  user: User;
}

export default function DealStagesView({ user }: DealStagesViewProps) {
  const stages = [
    {
      id: '1',
      name: 'Discovery',
      deals: 8,
      value: 'GH₵320,000',
      conversionRate: 25,
      avgDealSize: 'GH₵40,000',
      avgCycle: '15 days',
      color: 'from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-200 dark:border-blue-800'
    },
    {
      id: '2',
      name: 'Qualification',
      deals: 6,
      value: 'GH₵480,000',
      conversionRate: 40,
      avgDealSize: 'GH₵80,000',
      avgCycle: '25 days',
      color: 'from-yellow-50 to-amber-50 dark:from-yellow-950 dark:to-amber-950 border-yellow-200 dark:border-yellow-800'
    },
    {
      id: '3',
      name: 'Proposal',
      deals: 4,
      value: 'GH₵630,000',
      conversionRate: 60,
      avgDealSize: 'GH₵157,500',
      avgCycle: '35 days',
      color: 'from-purple-50 to-violet-50 dark:from-purple-950 dark:to-violet-950 border-purple-200 dark:border-purple-800'
    },
    {
      id: '4',
      name: 'Negotiation',
      deals: 3,
      value: 'GH₵540,000',
      conversionRate: 75,
      avgDealSize: 'GH₵180,000',
      avgCycle: '45 days',
      color: 'from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950 border-orange-200 dark:border-orange-800'
    },
    {
      id: '5',
      name: 'Closing',
      deals: 2,
      value: 'GH₵430,000',
      conversionRate: 90,
      avgDealSize: 'GH₵215,000',
      avgCycle: '60 days',
      color: 'from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-green-200 dark:border-green-800'
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search stages..."
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
        {stages.map((stage) => (
          <Card key={stage.id} className={`hover:shadow-lg transition-all duration-200 bg-gradient-to-r ${stage.color} border-2`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                        {stage.name}
                      </h3>
                      <Badge className="bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300">
                        {stage.deals} deals
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-3 w-3" />
                        <span>Value: {stage.value}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Target className="h-3 w-3" />
                        <span>Conversion: {stage.conversionRate}%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="font-semibold text-gray-900 dark:text-gray-100">
                      {stage.avgDealSize}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Avg. Deal Size
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Cycle: {stage.avgCycle}
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
                          View Deals
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Stage
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <TrendingUp className="h-4 w-4 mr-2" />
                          Stage Analytics
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Conversion Rate</span>
                  <span className="font-medium text-gray-900 dark:text-gray-100">{stage.conversionRate}%</span>
                </div>
                <Progress value={stage.conversionRate} className="h-2" />
                
                <div className="grid grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Users className="h-3 w-3" />
                    <span>Deals: {stage.deals}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <DollarSign className="h-3 w-3" />
                    <span>Value: {stage.value}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>Cycle: {stage.avgCycle}</span>
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