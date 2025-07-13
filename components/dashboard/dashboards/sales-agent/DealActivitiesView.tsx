'use client';

import { UserRole } from '@/types/roles';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Filter, 
  Download, 
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  Phone,
  Mail,
  MessageSquare,
  FileText,
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

interface DealActivitiesViewProps {
  user: User;
}

export default function DealActivitiesView({ user }: DealActivitiesViewProps) {
  const activities = [
    {
      id: '1',
      deal: 'Darko Holdings - Residential Complex',
      activity: 'Send proposal',
      type: 'Task',
      status: 'Pending',
      dueDate: '2024-01-20',
      priority: 'High',
      owner: 'Sales Agent',
      lastUpdated: '2024-01-15'
    },
    {
      id: '2',
      deal: 'Osei Investments - Office Building',
      activity: 'Follow up on contract',
      type: 'Call',
      status: 'Completed',
      dueDate: '2024-01-18',
      priority: 'High',
      owner: 'Sales Agent',
      lastUpdated: '2024-01-14'
    },
    {
      id: '3',
      deal: 'Mensah Group - Commercial Property',
      activity: 'Schedule meeting',
      type: 'Meeting',
      status: 'In Progress',
      dueDate: '2024-01-22',
      priority: 'Medium',
      owner: 'Sales Agent',
      lastUpdated: '2024-01-13'
    },
    {
      id: '4',
      deal: 'Addo Real Estate - Land Purchase',
      activity: 'Initial consultation',
      type: 'Email',
      status: 'Pending',
      dueDate: '2024-01-25',
      priority: 'Medium',
      owner: 'Sales Agent',
      lastUpdated: '2024-01-12'
    },
    {
      id: '5',
      deal: 'Asante Properties - Investment Portfolio',
      activity: 'Finalize documents',
      type: 'Document',
      status: 'Completed',
      dueDate: '2024-01-30',
      priority: 'High',
      owner: 'Sales Agent',
      lastUpdated: '2024-01-11'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'In Progress': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Overdue': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Call': return Phone;
      case 'Email': return Mail;
      case 'Meeting': return Calendar;
      case 'Task': return CheckCircle2;
      case 'Document': return FileText;
      default: return MessageSquare;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search activities..."
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
        {activities.map((activity, index) => {
          const TypeIcon = getTypeIcon(activity.type);
          const cardColors = [
            'bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950 dark:to-purple-950 border-violet-200 dark:border-violet-800',
            'bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border-purple-200 dark:border-purple-800',
            'bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950 dark:to-rose-950 border-pink-200 dark:border-pink-800',
            'bg-gradient-to-r from-rose-50 to-indigo-50 dark:from-rose-950 dark:to-indigo-950 border-rose-200 dark:border-rose-800',
            'bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950 dark:to-blue-950 border-indigo-200 dark:border-indigo-800'
          ];
          
          return (
            <Card key={activity.id} className={`hover:shadow-lg transition-all duration-200 ${cardColors[index % cardColors.length]} border-2`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                      <TypeIcon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                          {activity.activity}
                        </h3>
                        <Badge className={getStatusColor(activity.status)}>
                          {activity.status}
                        </Badge>
                        <Badge className={getPriorityColor(activity.priority)}>
                          {activity.priority}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{activity.deal}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-3 w-3" />
                          <span>Due: {activity.dueDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {activity.owner}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Owner
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Updated: {activity.lastUpdated}
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
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit Activity
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Calendar className="h-4 w-4 mr-2" />
                            Reschedule
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
                        <span>Type: {activity.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>Due: {activity.dueDate}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>Priority: {activity.priority}</span>
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