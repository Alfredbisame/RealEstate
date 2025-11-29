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
  Mail,
  Send,
  FileText,
  Image,
  Palette
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

interface EmailMarketingViewProps {
  user: User;
}

export default function EmailMarketingView({ user }: EmailMarketingViewProps) {
  const emailCampaigns = [
    {
      id: '1',
      name: 'Q1 Property Newsletter',
      subject: 'Discover Your Dream Home in Accra',
      status: 'Sent',
      subscribers: '2,450',
      opened: '1,890',
      clicked: '456',
      unsubscribed: '23',
      openRate: '77.1%',
      clickRate: '18.5%',
      sentDate: '2024-01-15',
      template: 'Property Showcase'
    },
    {
      id: '2',
      name: 'Investment Opportunities',
      subject: 'Exclusive Real Estate Investment Deals',
      status: 'Scheduled',
      subscribers: '1,800',
      opened: '0',
      clicked: '0',
      unsubscribed: '0',
      openRate: '0%',
      clickRate: '0%',
      sentDate: '2024-01-25',
      template: 'Investment Alert'
    },
    {
      id: '3',
      name: 'Client Testimonials',
      subject: 'What Our Clients Say About Us',
      status: 'Draft',
      subscribers: '3,200',
      opened: '0',
      clicked: '0',
      unsubscribed: '0',
      openRate: '0%',
      clickRate: '0%',
      sentDate: '2024-02-01',
      template: 'Testimonial'
    },
    {
      id: '4',
      name: 'Market Update',
      subject: 'Accra Real Estate Market Trends',
      status: 'Sent',
      subscribers: '2,100',
      opened: '1,680',
      clicked: '315',
      unsubscribed: '42',
      openRate: '80.0%',
      clickRate: '15.0%',
      sentDate: '2024-01-10',
      template: 'Market Report'
    },
    {
      id: '5',
      name: 'New Listings Alert',
      subject: 'Fresh Properties Just Listed',
      status: 'Active',
      subscribers: '2,800',
      opened: '2,240',
      clicked: '560',
      unsubscribed: '28',
      openRate: '80.0%',
      clickRate: '20.0%',
      sentDate: '2024-01-20',
      template: 'New Listings'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Sent': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Scheduled': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Draft': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      case 'Active': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'Failed': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getTemplateColor = (template: string) => {
    switch (template) {
      case 'Property Showcase': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'Investment Alert': return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200';
      case 'Testimonial': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'Market Report': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'New Listings': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
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
              placeholder="Search email campaigns..."
              className="pl-10 w-64 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
            <Mail className="h-4 w-4 mr-2" />
            New Email
          </Button>
        </div>
      </div>

      <div className="grid gap-4">
        {emailCampaigns.map((campaign, index) => {
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
                        <Badge className={getTemplateColor(campaign.template)}>
                          {campaign.template}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <div className="flex items-center space-x-2">
                          <Mail className="h-3 w-3" />
                          <span>Subject: {campaign.subject}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-3 w-3" />
                          <span>Subscribers: {campaign.subscribers}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {campaign.opened}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Opened
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Rate: {campaign.openRate}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {campaign.clicked}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Clicked
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Rate: {campaign.clickRate}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {campaign.unsubscribed}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Unsubscribed
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Date: {campaign.sentDate}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline" className="bg-purple-50 hover:bg-purple-100 dark:bg-purple-900/20 dark:hover:bg-purple-900/30 border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300">
                        <Eye className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-pink-50 hover:bg-pink-100 dark:bg-pink-900/20 dark:hover:bg-pink-900/30 border-pink-200 dark:border-pink-700 text-pink-700 dark:text-pink-300">
                        <Send className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-rose-50 hover:bg-rose-100 dark:bg-rose-900/20 dark:hover:bg-rose-900/30 border-rose-200 dark:border-rose-700 text-rose-700 dark:text-rose-300">
                        <Edit className="h-3 w-3" />
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
                            Preview Email
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit Campaign
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <TrendingUp className="h-4 w-4 mr-2" />
                            View Analytics
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <FileText className="h-4 w-4 mr-2" />
                            Duplicate Template
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 space-y-3">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Open Rate</span>
                      <span className="font-medium text-gray-900 dark:text-gray-100">{campaign.openRate}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Click Rate</span>
                      <span className="font-medium text-gray-900 dark:text-gray-100">{campaign.clickRate}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Engagement Performance</span>
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      {parseFloat(campaign.openRate) + parseFloat(campaign.clickRate)}%
                    </span>
                  </div>
                  <Progress value={parseFloat(campaign.openRate) + parseFloat(campaign.clickRate)} className="h-2" />
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>Sent: {campaign.sentDate}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>Status: {campaign.status}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>Template: {campaign.template}</span>
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