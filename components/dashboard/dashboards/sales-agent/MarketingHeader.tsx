'use client';

import { UserRole } from '@/types/roles';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Plus, 
  Search, 
  Filter, 
  Download, 
  MoreHorizontal,
  TrendingUp,
  Megaphone,
  DollarSign,
  Award,
  Target,
  Share2,
  Mail,
  Smartphone
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

interface MarketingHeaderProps {
  user: User;
}

export default function MarketingHeader({ user }: MarketingHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-rose-50 dark:from-purple-950 dark:via-pink-950 dark:to-rose-950 rounded-xl p-6 border border-purple-200 dark:border-purple-800 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="space-y-2">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <Megaphone className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-purple-900 dark:text-purple-100">
              Marketing
            </h1>
          </div>
          <p className="text-purple-700 dark:text-purple-300 text-lg">
            Manage campaigns, track performance, and optimize your marketing strategies
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white shadow-md">
            <Plus className="h-4 w-4 mr-2" />
            New Campaign
          </Button>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-purple-400" />
          <Input
            placeholder="Search campaigns..."
            className="pl-10 bg-white dark:bg-gray-800 border-purple-200 dark:border-purple-700 focus:border-purple-500 dark:focus:border-purple-400 shadow-sm"
          />
        </div>
        <Button variant="outline" size="sm" className="border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <TrendingUp className="h-4 w-4 mr-2" />
              Analytics
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Target className="h-4 w-4 mr-2" />
              Audience Targeting
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Share2 className="h-4 w-4 mr-2" />
              Social Media
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Mail className="h-4 w-4 mr-2" />
              Email Marketing
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Smartphone className="h-4 w-4 mr-2" />
              Mobile Campaigns
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
} 