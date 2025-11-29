'use client';

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
  AlertTriangle,
  Clock,
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
  role: string;
  avatar?: string;
}

interface HotLeadsViewProps {
  user: User;
}

export default function HotLeadsView({ user }: HotLeadsViewProps) {
  const hotLeads = [
    {
      id: '1',
      name: 'Yaw Darko',
      email: 'yaw.darko@email.com',
      phone: '+233 23 321 6547',
      company: 'Darko Holdings',
      source: 'Website',
      status: 'Qualified',
      value: 'GH₵450,000',
      lastContact: '2024-01-11',
      nextFollowUp: '2024-01-16',
      score: 95,
      priority: 'High',
      urgency: 'Immediate',
      conversionProbability: 85,
      timeToClose: '7 days'
    },
    {
      id: '2',
      name: 'Ama Osei',
      email: 'ama.osei@email.com',
      phone: '+233 20 987 6543',
      company: 'Osei Investments',
      source: 'Referral',
      status: 'Qualified',
      value: 'GH₵180,000',
      lastContact: '2024-01-14',
      nextFollowUp: '2024-01-18',
      score: 92,
      priority: 'High',
      urgency: 'High',
      conversionProbability: 78,
      timeToClose: '14 days'
    },
    {
      id: '3',
      name: 'Kwame Asante',
      email: 'kwame.asante@email.com',
      phone: '+233 24 123 4567',
      company: 'Asante Properties Ltd',
      source: 'Website',
      status: 'New',
      value: 'GH₵250,000',
      lastContact: '2024-01-15',
      nextFollowUp: '2024-01-20',
      score: 85,
      priority: 'High',
      urgency: 'Medium',
      conversionProbability: 72,
      timeToClose: '21 days'
    },
    {
      id: '4',
      name: 'Efua Addo',
      email: 'efua.addo@email.com',
      phone: '+233 27 789 1234',
      company: 'Addo Real Estate',
      source: 'Cold Call',
      status: 'New',
      value: 'GH₵150,000',
      lastContact: '2024-01-12',
      nextFollowUp: '2024-01-25',
      score: 65,
      priority: 'Medium',
      urgency: 'Medium',
      conversionProbability: 65,
      timeToClose: '30 days'
    }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'Immediate': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'High': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Contacted': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Qualified': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Proposal': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
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
              placeholder="Search hot leads..."
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
        {hotLeads.map((lead) => (
          <Card key={lead.id} className="hover:shadow-md transition-shadow duration-200 border-l-4 border-l-red-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                        {lead.name}
                      </h3>
                      <Badge className={getStatusColor(lead.status)}>
                        {lead.status}
                      </Badge>
                      <Badge className={getUrgencyColor(lead.urgency)}>
                        {lead.urgency}
                      </Badge>
                      <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                        Hot Lead
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-3 w-3" />
                        <span>{lead.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-3 w-3" />
                        <span>{lead.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Target className="h-3 w-3" />
                        <span>Score: {lead.score}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="font-semibold text-gray-900 dark:text-gray-100">
                      {lead.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {lead.company}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Source: {lead.source}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                      <Phone className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Mail className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <MessageSquare className="h-3 w-3" />
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
                          Edit Lead
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Calendar className="h-4 w-4 mr-2" />
                          Schedule Follow-up
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Conversion Probability</span>
                  <span className="font-medium text-gray-900 dark:text-gray-100">{lead.conversionProbability}%</span>
                </div>
                <Progress value={lead.conversionProbability} className="h-2" />
                
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>Last Contact: {lead.lastContact}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>Next Follow-up: {lead.nextFollowUp}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <DollarSign className="h-3 w-3" />
                    <span>Time to Close: {lead.timeToClose}</span>
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