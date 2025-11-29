'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Search, 
  Filter, 
  Download, 
  Calendar,
  Clock,
  Phone,
  Mail,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Eye,
  Edit,
  MoreHorizontal,
  Bell,
  User as UserIcon,
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

interface LeadFollowUpViewProps {
  user: User;
}

export default function LeadFollowUpView({ user }: LeadFollowUpViewProps) {
  const followUps = [
    {
      id: '1',
      leadName: 'Yaw Darko',
      email: 'yaw.darko@email.com',
      company: 'Darko Holdings',
      scheduledDate: '2024-01-16',
      scheduledTime: '10:00 AM',
      type: 'Phone Call',
      priority: 'High',
      status: 'Scheduled',
      notes: 'Discuss property requirements and budget',
      value: 'GH₵450,000',
      lastContact: '2024-01-11'
    },
    {
      id: '2',
      leadName: 'Ama Osei',
      email: 'ama.osei@email.com',
      company: 'Osei Investments',
      scheduledDate: '2024-01-18',
      scheduledTime: '2:30 PM',
      type: 'Meeting',
      priority: 'High',
      status: 'Scheduled',
      notes: 'Property viewing and proposal discussion',
      value: 'GH₵180,000',
      lastContact: '2024-01-14'
    },
    {
      id: '3',
      leadName: 'Kwame Asante',
      email: 'kwame.asante@email.com',
      company: 'Asante Properties Ltd',
      scheduledDate: '2024-01-20',
      scheduledTime: '11:00 AM',
      type: 'Email',
      priority: 'Medium',
      status: 'Pending',
      notes: 'Send property listings and pricing',
      value: 'GH₵250,000',
      lastContact: '2024-01-15'
    },
    {
      id: '4',
      leadName: 'Kofi Mensah',
      email: 'kofi.mensah@email.com',
      company: 'Mensah Group',
      scheduledDate: '2024-01-22',
      scheduledTime: '3:00 PM',
      type: 'Phone Call',
      priority: 'Medium',
      status: 'Scheduled',
      notes: 'Follow up on proposal sent',
      value: 'GH₵320,000',
      lastContact: '2024-01-13'
    },
    {
      id: '5',
      leadName: 'Efua Addo',
      email: 'efua.addo@email.com',
      company: 'Addo Real Estate',
      scheduledDate: '2024-01-25',
      scheduledTime: '9:00 AM',
      type: 'Meeting',
      priority: 'Low',
      status: 'Pending',
      notes: 'Initial consultation and needs assessment',
      value: 'GH₵150,000',
      lastContact: '2024-01-12'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Scheduled': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Completed': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Cancelled': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Phone Call': return Phone;
      case 'Email': return Mail;
      case 'Meeting': return UserIcon;
      case 'Message': return MessageSquare;
      default: return Calendar;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search follow-ups..."
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
        {followUps.map((followUp) => {
          const TypeIcon = getTypeIcon(followUp.type);
          return (
            <Card key={followUp.id} className="hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                          {followUp.leadName}
                        </h3>
                        <Badge className={getPriorityColor(followUp.priority)}>
                          {followUp.priority}
                        </Badge>
                        <Badge className={getStatusColor(followUp.status)}>
                          {followUp.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <div className="flex items-center space-x-2">
                          <Mail className="h-3 w-3" />
                          <span>{followUp.email}</span>
                        </div>
                                                 <div className="flex items-center space-x-2">
                           <UserIcon className="h-3 w-3" />
                           <span>{followUp.company}</span>
                         </div>
                        <div className="flex items-center space-x-2">
                          <TypeIcon className="h-3 w-3" />
                          <span>{followUp.type}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {followUp.scheduledDate}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {followUp.scheduledTime}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Last: {followUp.lastContact}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {followUp.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Potential Value
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline">
                        <Calendar className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Phone className="h-3 w-3" />
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
                            Edit Follow-up
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Mark Complete
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Bell className="h-4 w-4 mr-2" />
                            Set Reminder
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-3 w-3" />
                      <span>Scheduled: {followUp.scheduledDate} at {followUp.scheduledTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Target className="h-3 w-3" />
                      <span>Type: {followUp.type}</span>
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    <strong>Notes:</strong> {followUp.notes}
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