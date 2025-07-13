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
  Target,
  Star,
  TrendingUp,
  Users,
  DollarSign,
  Eye,
  Edit,
  MoreHorizontal,
  CheckCircle,
  AlertCircle,
  Clock,
  Mail
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';

interface LeadScoringViewProps {
  user: User;
}

export default function LeadScoringView({ user }: LeadScoringViewProps) {
  const scoredLeads = [
    {
      id: '1',
      name: 'Yaw Darko',
      email: 'yaw.darko@email.com',
      company: 'Darko Holdings',
      score: 95,
      category: 'A+',
      budget: 'GH₵450,000',
      timeline: 'Immediate',
      decisionMaker: 'Yes',
      authority: 'High',
      need: 'High',
      status: 'Qualified'
    },
    {
      id: '2',
      name: 'Ama Osei',
      email: 'ama.osei@email.com',
      company: 'Osei Investments',
      score: 92,
      category: 'A',
      budget: 'GH₵180,000',
      timeline: '30 days',
      decisionMaker: 'Yes',
      authority: 'High',
      need: 'Medium',
      status: 'Qualified'
    },
    {
      id: '3',
      name: 'Kwame Asante',
      email: 'kwame.asante@email.com',
      company: 'Asante Properties Ltd',
      score: 85,
      category: 'B+',
      budget: 'GH₵250,000',
      timeline: '60 days',
      decisionMaker: 'No',
      authority: 'Medium',
      need: 'High',
      status: 'Contacted'
    },
    {
      id: '4',
      name: 'Kofi Mensah',
      email: 'kofi.mensah@email.com',
      company: 'Mensah Group',
      score: 78,
      category: 'B',
      budget: 'GH₵320,000',
      timeline: '90 days',
      decisionMaker: 'Yes',
      authority: 'Medium',
      need: 'Medium',
      status: 'Contacted'
    },
    {
      id: '5',
      name: 'Efua Addo',
      email: 'efua.addo@email.com',
      company: 'Addo Real Estate',
      score: 65,
      category: 'C',
      budget: 'GH₵150,000',
      timeline: '120 days',
      decisionMaker: 'No',
      authority: 'Low',
      need: 'Low',
      status: 'New'
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    if (score >= 80) return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    if (score >= 70) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'A+': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'A': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'B+': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'B': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'C': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Qualified': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Contacted': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'New': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
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
              placeholder="Search scored leads..."
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
        {scoredLeads.map((lead) => (
          <Card key={lead.id} className="hover:shadow-md transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                        {lead.name}
                      </h3>
                      <Badge className={getScoreColor(lead.score)}>
                        Score: {lead.score}
                      </Badge>
                      <Badge className={getCategoryColor(lead.category)}>
                        {lead.category}
                      </Badge>
                      <Badge className={getStatusColor(lead.status)}>
                        {lead.status}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-3 w-3" />
                        <span>{lead.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-3 w-3" />
                        <span>{lead.company}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="font-semibold text-gray-900 dark:text-gray-100">
                      {lead.budget}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Budget
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Timeline: {lead.timeline}
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="font-semibold text-gray-900 dark:text-gray-100">
                      {lead.decisionMaker}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Decision Maker
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Authority: {lead.authority}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline">
                      <Target className="h-3 w-3" />
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
                          Edit Score
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <TrendingUp className="h-4 w-4 mr-2" />
                          Update Score
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Lead Score</span>
                  <span className="font-medium text-gray-900 dark:text-gray-100">{lead.score}/100</span>
                </div>
                <Progress value={lead.score} className="h-2" />
                
                <div className="grid grid-cols-4 gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <DollarSign className="h-3 w-3" />
                    <span>Budget: {lead.budget}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>Timeline: {lead.timeline}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-3 w-3" />
                    <span>Need: {lead.need}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3" />
                    <span>Category: {lead.category}</span>
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