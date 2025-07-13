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
  Phone, 
  Mail, 
  MessageSquare,
  Calendar,
  DollarSign,
  TrendingUp,
  Eye,
  Edit,
  MoreHorizontal,
  Clock,
  Target,
  Users
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

interface PipelineOverviewViewProps {
  user: User;
}

export default function PipelineOverviewView({ user }: PipelineOverviewViewProps) {
  const deals = [
    {
      id: '1',
      name: 'Darko Holdings - Residential Complex',
      client: 'Yaw Darko',
      email: 'yaw.darko@email.com',
      phone: '+233 23 321 6547',
      stage: 'Proposal',
      value: 'GH₵450,000',
      probability: 75,
      expectedClose: '2024-02-15',
      lastActivity: '2024-01-15',
      nextAction: 'Send proposal',
      owner: 'Sales Agent',
      priority: 'High'
    },
    {
      id: '2',
      name: 'Osei Investments - Office Building',
      client: 'Ama Osei',
      email: 'ama.osei@email.com',
      phone: '+233 20 987 6543',
      stage: 'Negotiation',
      value: 'GH₵180,000',
      probability: 60,
      expectedClose: '2024-02-28',
      lastActivity: '2024-01-14',
      nextAction: 'Follow up on contract',
      owner: 'Sales Agent',
      priority: 'High'
    },
    {
      id: '3',
      name: 'Mensah Group - Commercial Property',
      client: 'Kofi Mensah',
      email: 'kofi.mensah@email.com',
      phone: '+233 26 456 7890',
      stage: 'Qualification',
      value: 'GH₵320,000',
      probability: 40,
      expectedClose: '2024-03-15',
      lastActivity: '2024-01-13',
      nextAction: 'Schedule meeting',
      owner: 'Sales Agent',
      priority: 'Medium'
    },
    {
      id: '4',
      name: 'Addo Real Estate - Land Purchase',
      client: 'Efua Addo',
      email: 'efua.addo@email.com',
      phone: '+233 27 789 1234',
      stage: 'Discovery',
      value: 'GH₵150,000',
      probability: 25,
      expectedClose: '2024-04-01',
      lastActivity: '2024-01-12',
      nextAction: 'Initial consultation',
      owner: 'Sales Agent',
      priority: 'Medium'
    },
    {
      id: '5',
      name: 'Asante Properties - Investment Portfolio',
      client: 'Kwame Asante',
      email: 'kwame.asante@email.com',
      phone: '+233 24 123 4567',
      stage: 'Closing',
      value: 'GH₵250,000',
      probability: 90,
      expectedClose: '2024-01-30',
      lastActivity: '2024-01-11',
      nextAction: 'Finalize documents',
      owner: 'Sales Agent',
      priority: 'High'
    }
  ];

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'Discovery': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Qualification': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Proposal': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'Negotiation': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'Closing': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
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
              placeholder="Search deals..."
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
        {deals.map((deal, index) => {
          const cardColors = [
            'bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border-purple-200 dark:border-purple-800',
            'bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950 dark:to-rose-950 border-pink-200 dark:border-pink-800',
            'bg-gradient-to-r from-rose-50 to-indigo-50 dark:from-rose-950 dark:to-indigo-950 border-rose-200 dark:border-rose-800',
            'bg-gradient-to-r from-indigo-50 to-violet-50 dark:from-indigo-950 dark:to-violet-950 border-indigo-200 dark:border-indigo-800',
            'bg-gradient-to-r from-violet-50 to-fuchsia-50 dark:from-violet-950 dark:to-fuchsia-950 border-violet-200 dark:border-violet-800'
          ];
          
          return (
            <Card key={deal.id} className={`hover:shadow-lg transition-all duration-200 ${cardColors[index % cardColors.length]} border-2`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                          {deal.name}
                        </h3>
                        <Badge className={getStageColor(deal.stage)}>
                          {deal.stage}
                        </Badge>
                        <Badge className={getPriorityColor(deal.priority)}>
                          {deal.priority}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <div className="flex items-center space-x-2">
                          <Users className="h-3 w-3" />
                          <span>{deal.client}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-3 w-3" />
                          <span>{deal.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Target className="h-3 w-3" />
                          <span>Probability: {deal.probability}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {deal.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Deal Value
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Expected: {deal.expectedClose}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {deal.owner}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Owner
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Last: {deal.lastActivity}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline" className="bg-purple-50 hover:bg-purple-100 dark:bg-purple-900/20 dark:hover:bg-purple-900/30 border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300">
                        <Phone className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-pink-50 hover:bg-pink-100 dark:bg-pink-900/20 dark:hover:bg-pink-900/30 border-pink-200 dark:border-pink-700 text-pink-700 dark:text-pink-300">
                        <Mail className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-rose-50 hover:bg-rose-100 dark:bg-rose-900/20 dark:hover:bg-rose-900/30 border-rose-200 dark:border-rose-700 text-rose-700 dark:text-rose-300">
                        <MessageSquare className="h-3 w-3" />
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
                            Edit Deal
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Calendar className="h-4 w-4 mr-2" />
                            Schedule Activity
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Win Probability</span>
                    <span className="font-medium text-gray-900 dark:text-gray-100">{deal.probability}%</span>
                  </div>
                  <Progress value={deal.probability} className="h-2" />
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>Expected Close: {deal.expectedClose}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>Last Activity: {deal.lastActivity}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Target className="h-3 w-3" />
                      <span>Next: {deal.nextAction}</span>
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