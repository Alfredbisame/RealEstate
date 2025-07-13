'use client';

import { User } from '@/types/roles';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
  MoreHorizontal
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';

interface AllLeadsViewProps {
  user: User;
}

export default function AllLeadsView({ user }: AllLeadsViewProps) {
  const leads = [
    {
      id: '1',
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
      priority: 'High'
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
      priority: 'High'
    },
    {
      id: '3',
      name: 'Kofi Mensah',
      email: 'kofi.mensah@email.com',
      phone: '+233 26 456 7890',
      company: 'Mensah Group',
      source: 'Social Media',
      status: 'Contacted',
      value: 'GH₵320,000',
      lastContact: '2024-01-13',
      nextFollowUp: '2024-01-22',
      score: 78,
      priority: 'Medium'
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
      priority: 'Medium'
    },
    {
      id: '5',
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
      priority: 'High'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Contacted': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Qualified': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Proposal': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
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
              placeholder="Search leads..."
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
        {leads.map((lead, index) => {
          const cardColors = [
            'bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-200 dark:border-blue-800',
            'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-green-200 dark:border-green-800',
            'bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950 dark:to-violet-950 border-purple-200 dark:border-purple-800',
            'bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950 border-orange-200 dark:border-orange-800',
            'bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950 dark:to-rose-950 border-pink-200 dark:border-pink-800'
          ];
          
          return (
            <Card key={lead.id} className={`hover:shadow-lg transition-all duration-200 ${cardColors[index % cardColors.length]} border-2`}>
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
                      <Badge className={getPriorityColor(lead.priority)}>
                        {lead.priority}
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
                        <TrendingUp className="h-3 w-3" />
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
                     <Button size="sm" variant="outline" className="bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300">
                       <Phone className="h-3 w-3" />
                     </Button>
                     <Button size="sm" variant="outline" className="bg-green-50 hover:bg-green-100 dark:bg-green-900/20 dark:hover:bg-green-900/30 border-green-200 dark:border-green-700 text-green-700 dark:text-green-300">
                       <Mail className="h-3 w-3" />
                     </Button>
                     <Button size="sm" variant="outline" className="bg-purple-50 hover:bg-purple-100 dark:bg-purple-900/20 dark:hover:bg-purple-900/30 border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300">
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
              
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>Last Contact: {lead.lastContact}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>Next Follow-up: {lead.nextFollowUp}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <DollarSign className="h-3 w-3" />
                    <span>Potential Value: {lead.value}</span>
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