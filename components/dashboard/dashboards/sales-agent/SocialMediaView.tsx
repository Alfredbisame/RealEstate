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
  Instagram,
  Facebook,
  Twitter,
  Share2 as Linkedin,
  Youtube,
  Heart,
  MessageCircle
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

interface SocialMediaViewProps {
  user: User;
}

export default function SocialMediaView({ user }: SocialMediaViewProps) {
  const socialPosts = [
    {
      id: '1',
      title: 'Luxury Villa in East Legon',
      platform: 'Instagram',
      status: 'Published',
      reach: '8,450',
      engagement: '1,240',
      likes: '890',
      comments: '156',
      shares: '94',
      scheduledDate: '2024-01-15',
      content: 'Stunning 5-bedroom villa with modern amenities'
    },
    {
      id: '2',
      title: 'Investment Opportunity Alert',
      platform: 'Facebook',
      status: 'Scheduled',
      reach: '0',
      engagement: '0',
      likes: '0',
      comments: '0',
      shares: '0',
      scheduledDate: '2024-01-25',
      content: 'Exclusive real estate investment deals available'
    },
    {
      id: '3',
      title: 'Market Trends Report',
      platform: 'LinkedIn',
      status: 'Published',
      reach: '12,300',
      engagement: '2,100',
      likes: '1,450',
      comments: '320',
      shares: '330',
      scheduledDate: '2024-01-10',
      content: 'Accra real estate market analysis Q1 2024'
    },
    {
      id: '4',
      title: 'Property Showcase Video',
      platform: 'YouTube',
      status: 'Published',
      reach: '15,600',
      engagement: '3,200',
      likes: '2,100',
      comments: '450',
      shares: '180',
      scheduledDate: '2024-01-20',
      content: 'Virtual tour of premium properties in Accra'
    },
    {
      id: '5',
      title: 'Client Success Story',
      platform: 'Twitter',
      status: 'Draft',
      reach: '0',
      engagement: '0',
      likes: '0',
      comments: '0',
      shares: '0',
      scheduledDate: '2024-02-01',
      content: 'How we helped a family find their dream home'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Scheduled': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Draft': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      case 'Failed': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'Instagram': return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200';
      case 'Facebook': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'LinkedIn': return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200';
      case 'YouTube': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'Twitter': return 'bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'Instagram': return Instagram;
      case 'Facebook': return Facebook;
      case 'LinkedIn': return Share2;
      case 'YouTube': return Youtube;
      case 'Twitter': return Twitter;
      default: return Share2;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search social posts..."
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
          <Button size="sm" className="bg-rose-600 hover:bg-rose-700 text-white">
            <Share2 className="h-4 w-4 mr-2" />
            New Post
          </Button>
        </div>
      </div>

      <div className="grid gap-4">
        {socialPosts.map((post, index) => {
          const PlatformIcon = getPlatformIcon(post.platform);
          const cardColors = [
            'bg-gradient-to-r from-rose-50 to-orange-50 dark:from-rose-950 dark:to-orange-950 border-rose-200 dark:border-rose-800',
            'bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950 border-orange-200 dark:border-orange-800',
            'bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950 dark:to-yellow-950 border-amber-200 dark:border-amber-800',
            'bg-gradient-to-r from-yellow-50 to-lime-50 dark:from-yellow-950 dark:to-lime-950 border-yellow-200 dark:border-yellow-800',
            'bg-gradient-to-r from-lime-50 to-green-50 dark:from-lime-950 dark:to-green-950 border-lime-200 dark:border-lime-800'
          ];
          
          return (
            <Card key={post.id} className={`hover:shadow-lg transition-all duration-200 ${cardColors[index % cardColors.length]} border-2`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                          {post.title}
                        </h3>
                        <Badge className={getStatusColor(post.status)}>
                          {post.status}
                        </Badge>
                        <Badge className={getPlatformColor(post.platform)}>
                          {post.platform}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <div className="flex items-center space-x-2">
                          <PlatformIcon className="h-3 w-3" />
                          <span>{post.content}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-3 w-3" />
                          <span>Scheduled: {post.scheduledDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {post.reach}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Reach
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Engagement: {post.engagement}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {post.likes}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Likes
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Comments: {post.comments}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {post.shares}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Shares
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Platform: {post.platform}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline" className="bg-rose-50 hover:bg-rose-100 dark:bg-rose-900/20 dark:hover:bg-rose-900/30 border-rose-200 dark:border-rose-700 text-rose-700 dark:text-rose-300">
                        <Eye className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-orange-50 hover:bg-orange-100 dark:bg-orange-900/20 dark:hover:bg-orange-900/30 border-orange-200 dark:border-orange-700 text-orange-700 dark:text-orange-300">
                        <Heart className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-amber-50 hover:bg-amber-100 dark:bg-amber-900/20 dark:hover:bg-amber-900/30 border-amber-200 dark:border-amber-700 text-amber-700 dark:text-amber-300">
                        <MessageCircle className="h-3 w-3" />
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
                            View Post
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit Post
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <TrendingUp className="h-4 w-4 mr-2" />
                            View Analytics
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Share2 className="h-4 w-4 mr-2" />
                            Share Post
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 space-y-3">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Engagement Rate</span>
                      <span className="font-medium text-gray-900 dark:text-gray-100">
                        {post.reach !== '0' ? Math.round((parseInt(post.engagement) / parseInt(post.reach)) * 100) : 0}%
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Like Rate</span>
                      <span className="font-medium text-gray-900 dark:text-gray-100">
                        {post.reach !== '0' ? Math.round((parseInt(post.likes) / parseInt(post.reach)) * 100) : 0}%
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Share Rate</span>
                      <span className="font-medium text-gray-900 dark:text-gray-100">
                        {post.reach !== '0' ? Math.round((parseInt(post.shares) / parseInt(post.reach)) * 100) : 0}%
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>Date: {post.scheduledDate}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>Status: {post.status}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <PlatformIcon className="h-3 w-3" />
                      <span>{post.platform}</span>
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