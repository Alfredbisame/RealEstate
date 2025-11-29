'use client';

import { UserRole } from '@/types/roles';
import { Card, CardContent } from '@/components/ui/card';
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
  Clock,
  Edit,
  MoreHorizontal,
  Eye,
  User,
  Building2
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

interface InquiriesViewProps {
  user: User;
}

export default function InquiriesView({ user }: InquiriesViewProps) {
  const inquiries = [
    {
      id: '1',
      propertyTitle: 'Luxury Villa in East Legon',
      inquirerName: 'Kwame Asante',
      email: 'kwame.asante@email.com',
      phone: '+233 24 123 4567',
      inquiryType: 'Viewing Request',
      status: 'New',
      priority: 'High',
      date: '2024-01-20',
      time: '14:30',
      message: 'Interested in viewing the property this weekend.',
      source: 'Website'
    },
    {
      id: '2',
      propertyTitle: 'Modern Apartment in Airport Residential',
      inquirerName: 'Ama Osei',
      email: 'ama.osei@email.com',
      phone: '+233 20 987 6543',
      inquiryType: 'Price Inquiry',
      status: 'Contacted',
      priority: 'Medium',
      date: '2024-01-19',
      time: '10:15',
      message: 'Would like to know if the price is negotiable.',
      source: 'Phone Call'
    },
    {
      id: '3',
      propertyTitle: 'Investment Property in Cantonments',
      inquirerName: 'Kofi Mensah',
      email: 'kofi.mensah@email.com',
      phone: '+233 26 456 7890',
      inquiryType: 'Virtual Tour',
      status: 'Scheduled',
      priority: 'High',
      date: '2024-01-18',
      time: '16:45',
      message: 'Requesting a virtual tour of the property.',
      source: 'Email'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Contacted': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Scheduled': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Completed': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
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
              placeholder="Search inquiries..."
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
        {inquiries.map((inquiry, index) => {
          const cardColors = [
            'bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950 dark:to-pink-950 border-red-200 dark:border-red-800',
            'bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950 dark:to-rose-950 border-pink-200 dark:border-pink-800',
            'bg-gradient-to-r from-rose-50 to-orange-50 dark:from-rose-950 dark:to-orange-950 border-rose-200 dark:border-rose-800'
          ];
          
          return (
            <Card key={inquiry.id} className={`hover:shadow-lg transition-all duration-200 ${cardColors[index % cardColors.length]} border-2`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                          {inquiry.propertyTitle}
                        </h3>
                        <Badge className={getStatusColor(inquiry.status)}>
                          {inquiry.status}
                        </Badge>
                        <Badge className={getPriorityColor(inquiry.priority)}>
                          {inquiry.priority}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <div className="flex items-center space-x-2">
                          <User className="h-3 w-3" />
                          <span>{inquiry.inquirerName}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-3 w-3" />
                          <span>{inquiry.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-3 w-3" />
                          <span>{inquiry.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {inquiry.inquiryType}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Type
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {inquiry.source}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {inquiry.date}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Date
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {inquiry.time}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline" className="bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/30 border-red-200 dark:border-red-700 text-red-700 dark:text-red-300">
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
                            Update Status
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
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Message:</strong> {inquiry.message}
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