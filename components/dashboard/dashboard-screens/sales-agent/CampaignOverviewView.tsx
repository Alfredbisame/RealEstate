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
  Play,
  Pause,
  StopCircle
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

interface CampaignOverviewViewProps {
  user: User;
}

export default function CampaignOverviewView({ user }: CampaignOverviewViewProps) {
  const campaigns = [
    {
      id: '1',
      name: 'Q1 Property Showcase',
      type: 'Email Campaign',
      status: 'Active',
      budget: 'GH₵5,000',
      spent: 'GH₵3,200',
      reach: '12,450',
      engagement: '8.7%',
      clicks: '1,240',
      leads: '89',
      startDate: '2024-01-15',
      endDate: '2024-03-31',
      target: 'High-value investors'
    },
    {
      id: '2',
      name: 'Social Media Boost',
      type: 'Social Media',
      status: 'Active',
      budget: 'GH₵2,500',
      spent: 'GH₵1,800',
      reach: '8,920',
      engagement: '12.3%',
      clicks: '890',
      leads: '45',
      startDate: '2024-01-10',
      endDate: '2024-02-28',
      target: 'Young professionals'
    },
    {
      id: '3',
      name: 'Landing Page Promotion',
      type: 'Digital Ads',
      status: 'Paused',
      budget: 'GH₵3,000',
      spent: 'GH₵2,100',
      reach: '15,600',
      engagement: '6.2%',
      clicks: '1,560',
      leads: '67',
      startDate: '2024-01-05',
      endDate: '2024-02-15',
      target: 'First-time buyers'
    },
    {
      id: '4',
      name: 'Referral Program',
      type: 'Referral',
      status: 'Active',
      budget: 'GH₵1,500',
      spent: 'GH₵800',
      reach: '5,200',
      engagement: '15.8%',
      clicks: '520',
      leads: '34',
      startDate: '2024-01-20',
      endDate: '2024-04-30',
      target: 'Existing clients'
    },
    {
      id: '5',
      name: 'Content Marketing',
      type: 'Content',
      status: 'Draft',
      budget: 'GH₵4,000',
      spent: 'GH₵0',
      reach: '0',
      engagement: '0%',
      clicks: '0',
      leads: '0',
      startDate: '2024-02-01',
      endDate: '2024-05-31',
      target: 'Industry professionals'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Paused': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Draft': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      case 'Completed': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Failed': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Email Campaign': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'Social Media': return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200';
      case 'Digital Ads': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Referral': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'Content': return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Active': return Play;
      case 'Paused': return Pause;
      case 'Draft': return Edit;
      case 'Completed': return StopCircle;
      default: return Edit;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search campaigns..."
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
        {campaigns.map((campaign, index) => {
          const StatusIcon = getStatusIcon(campaign.status);
          const cardColors = [
            'bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border-purple-200 dark:border-purple-800',
            'bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950 dark:to-rose-950 border-pink-200 dark:border-pink-800',
            'bg-gradient-to-r from-rose-50 to-orange-50 dark:from-rose-950 dark:to-orange-950 border-rose-200 dark:border-rose-800',
            'bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950 border-orange-200 dark:border-orange-800',
            'bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950 dark:to-yellow-950 border-amber-200 dark:border-amber-800'
          ];
          
          return (
            <Card key={campaign.id} className={`hover:shadow-lg transition-all duration-200 ${cardColors[index % cardColors.length]} border-2`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                          {campaign.name}
                        </h3>
                        <Badge className={getStatusColor(campaign.status)}>
                          {campaign.status}
                        </Badge>
                        <Badge className={getTypeColor(campaign.type)}>
                          {campaign.type}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <div className="flex items-center space-x-2">
                          <Target className="h-3 w-3" />
                          <span>{campaign.target}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-3 w-3" />
                          <span>{campaign.startDate} - {campaign.endDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {campaign.reach}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Reach
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Engagement: {campaign.engagement}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {campaign.leads}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Leads
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Clicks: {campaign.clicks}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {campaign.spent}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Spent
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Budget: {campaign.budget}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline" className="bg-purple-50 hover:bg-purple-100 dark:bg-purple-900/20 dark:hover:bg-purple-900/30 border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300">
                        <Eye className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-pink-50 hover:bg-pink-100 dark:bg-pink-900/20 dark:hover:bg-pink-900/30 border-pink-200 dark:border-pink-700 text-pink-700 dark:text-pink-300">
                        <TrendingUp className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-rose-50 hover:bg-rose-100 dark:bg-rose-900/20 dark:hover:bg-rose-900/30 border-rose-200 dark:border-rose-700 text-rose-700 dark:text-rose-300">
                        <StatusIcon className="h-3 w-3" />
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
                            Edit Campaign
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <TrendingUp className="h-4 w-4 mr-2" />
                            View Analytics
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Budget Utilization</span>
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      {Math.round((parseFloat(campaign.spent.replace('GH₵', '').replace(',', '')) / parseFloat(campaign.budget.replace('GH₵', '').replace(',', ''))) * 100)}%
                    </span>
                  </div>
                  <Progress 
                    value={(parseFloat(campaign.spent.replace('GH₵', '').replace(',', '')) / parseFloat(campaign.budget.replace('GH₵', '').replace(',', ''))) * 100} 
                    className="h-2" 
                  />
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Users className="h-3 w-3" />
                        <span>Reach: {campaign.reach}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MousePointer className="h-3 w-3" />
                        <span>Clicks: {campaign.clicks}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-3 w-3" />
                      <span>Spent: {campaign.spent}</span>
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