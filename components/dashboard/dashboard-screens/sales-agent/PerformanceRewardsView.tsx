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
  Star,
  Trophy
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

interface PerformanceRewardsViewProps {
  user: User;
}

export default function PerformanceRewardsView({ user }: PerformanceRewardsViewProps) {
  const rewards = [
    {
      id: '1',
      type: 'Top Performer Award',
      description: 'Highest sales volume for Q4 2023',
      reward: 'GH₵15,000',
      category: 'Quarterly',
      achievement: 150,
      target: 100,
      status: 'Earned',
      date: '2024-01-15',
      tier: 'Platinum'
    },
    {
      id: '2',
      type: 'Excellence in Service',
      description: 'Perfect client satisfaction score',
      reward: 'GH₵8,500',
      category: 'Quality',
      achievement: 100,
      target: 95,
      status: 'Earned',
      date: '2024-01-14',
      tier: 'Gold'
    },
    {
      id: '3',
      type: 'Deal Closer Champion',
      description: 'Closed most deals in December',
      reward: 'GH₵12,200',
      category: 'Monthly',
      achievement: 8,
      target: 5,
      status: 'Pending',
      date: '2024-01-13',
      tier: 'Gold'
    },
    {
      id: '4',
      type: 'Client Referral Master',
      description: 'Generated highest referral value',
      reward: 'GH₵6,800',
      category: 'Referral',
      achievement: 12,
      target: 8,
      status: 'Processing',
      date: '2024-01-12',
      tier: 'Silver'
    },
    {
      id: '5',
      type: 'Rising Star Award',
      description: 'Best newcomer performance',
      reward: 'GH₵10,500',
      category: 'Recognition',
      achievement: 200,
      target: 150,
      status: 'Earned',
      date: '2024-01-11',
      tier: 'Platinum'
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

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Platinum': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'Gold': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Silver': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      case 'Bronze': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Quarterly': return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200';
      case 'Monthly': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Quality': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'Referral': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'Recognition': return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200';
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
              placeholder="Search rewards..."
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
        {rewards.map((reward, index) => {
          const cardColors = [
            'bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 border-indigo-200 dark:border-indigo-800',
            'bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border-purple-200 dark:border-purple-800',
            'bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950 dark:to-rose-950 border-pink-200 dark:border-pink-800',
            'bg-gradient-to-r from-rose-50 to-orange-50 dark:from-rose-950 dark:to-orange-950 border-rose-200 dark:border-rose-800',
            'bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950 border-orange-200 dark:border-orange-800'
          ];
          
          return (
            <Card key={reward.id} className={`hover:shadow-lg transition-all duration-200 ${cardColors[index % cardColors.length]} border-2`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                          {reward.type}
                        </h3>
                        <Badge className={getStatusColor(reward.status)}>
                          {reward.status}
                        </Badge>
                        <Badge className={getTierColor(reward.tier)}>
                          {reward.tier}
                        </Badge>
                        <Badge className={getCategoryColor(reward.category)}>
                          {reward.category}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <div className="flex items-center space-x-2">
                          <Trophy className="h-3 w-3" />
                          <span>{reward.description}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Target className="h-3 w-3" />
                          <span>Achievement: {reward.achievement}/{reward.target}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {reward.reward}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Reward Amount
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Date: {reward.date}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {Math.round((reward.achievement / reward.target) * 100)}%
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Achievement
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {reward.achievement > reward.target ? 'Exceeded' : 'On Track'}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline" className="bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-900/20 dark:hover:bg-indigo-900/30 border-indigo-200 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300">
                        <Trophy className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-purple-50 hover:bg-purple-100 dark:bg-purple-900/20 dark:hover:bg-purple-900/30 border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300">
                        <Award className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-pink-50 hover:bg-pink-100 dark:bg-pink-900/20 dark:hover:bg-pink-900/30 border-pink-200 dark:border-pink-700 text-pink-700 dark:text-pink-300">
                        <Star className="h-3 w-3" />
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
                            Edit Reward
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Calendar className="h-4 w-4 mr-2" />
                            Award Schedule
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Achievement Progress</span>
                    <span className="font-medium text-gray-900 dark:text-gray-100">{Math.round((reward.achievement / reward.target) * 100)}%</span>
                  </div>
                  <Progress value={(reward.achievement / reward.target) * 100} className="h-2" />
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>Date: {reward.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>Status: {reward.status}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-3 w-3" />
                      <span>Reward: {reward.reward}</span>
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