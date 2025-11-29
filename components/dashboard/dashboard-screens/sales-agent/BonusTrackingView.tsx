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
  Star
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

interface BonusTrackingViewProps {
  user: User;
}

export default function BonusTrackingView({ user }: BonusTrackingViewProps) {
  const bonuses = [
    {
      id: '1',
      type: 'Performance Bonus',
      description: 'Exceeded monthly target by 25%',
      amount: 'GH₵8,500',
      criteria: 'Sales Target',
      achievement: 125,
      target: 100,
      status: 'Earned',
      date: '2024-01-15',
      category: 'Monthly'
    },
    {
      id: '2',
      type: 'Deal Closure Bonus',
      description: 'Closed 3 deals in one week',
      amount: 'GH₵5,200',
      criteria: 'Deal Count',
      achievement: 3,
      target: 2,
      status: 'Pending',
      date: '2024-01-14',
      category: 'Weekly'
    },
    {
      id: '3',
      type: 'Client Satisfaction Bonus',
      description: 'Perfect client feedback score',
      amount: 'GH₵3,800',
      criteria: 'Client Rating',
      achievement: 100,
      target: 95,
      status: 'Earned',
      date: '2024-01-13',
      category: 'Quality'
    },
    {
      id: '4',
      type: 'Referral Bonus',
      description: 'Generated 5 new qualified leads',
      amount: 'GH₵2,500',
      criteria: 'Lead Generation',
      achievement: 5,
      target: 3,
      status: 'Processing',
      date: '2024-01-12',
      category: 'Referral'
    },
    {
      id: '5',
      type: 'Quarterly Excellence',
      description: 'Top performer for Q4 2023',
      amount: 'GH₵12,300',
      criteria: 'Quarterly Ranking',
      achievement: 1,
      target: 3,
      status: 'Earned',
      date: '2024-01-11',
      category: 'Quarterly'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Earned': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Processing': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Expired': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Monthly': return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200';
      case 'Weekly': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Quality': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'Referral': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'Quarterly': return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200';
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
              placeholder="Search bonuses..."
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
        {bonuses.map((bonus, index) => {
          const cardColors = [
            'bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950 dark:to-blue-950 border-cyan-200 dark:border-cyan-800',
            'bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-200 dark:border-blue-800',
            'bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 border-indigo-200 dark:border-indigo-800',
            'bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border-purple-200 dark:border-purple-800',
            'bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950 dark:to-rose-950 border-pink-200 dark:border-pink-800'
          ];
          
          return (
            <Card key={bonus.id} className={`hover:shadow-lg transition-all duration-200 ${cardColors[index % cardColors.length]} border-2`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                          {bonus.type}
                        </h3>
                        <Badge className={getStatusColor(bonus.status)}>
                          {bonus.status}
                        </Badge>
                        <Badge className={getCategoryColor(bonus.category)}>
                          {bonus.category}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <div className="flex items-center space-x-2">
                          <Star className="h-3 w-3" />
                          <span>{bonus.description}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Target className="h-3 w-3" />
                          <span>Criteria: {bonus.criteria}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {bonus.amount}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Bonus Amount
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Date: {bonus.date}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {bonus.achievement}/{bonus.target}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Achievement
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {bonus.achievement > bonus.target ? 'Exceeded' : 'On Track'}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline" className="bg-cyan-50 hover:bg-cyan-100 dark:bg-cyan-900/20 dark:hover:bg-cyan-900/30 border-cyan-200 dark:border-cyan-700 text-cyan-700 dark:text-cyan-300">
                        <Gift className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300">
                        <Award className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-900/20 dark:hover:bg-indigo-900/30 border-indigo-200 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300">
                        <Target className="h-3 w-3" />
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
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit Bonus
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Calendar className="h-4 w-4 mr-2" />
                            Payment Schedule
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Achievement Progress</span>
                    <span className="font-medium text-gray-900 dark:text-gray-100">{Math.round((bonus.achievement / bonus.target) * 100)}%</span>
                  </div>
                  <Progress value={(bonus.achievement / bonus.target) * 100} className="h-2" />
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>Date: {bonus.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>Status: {bonus.status}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-3 w-3" />
                      <span>Amount: {bonus.amount}</span>
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