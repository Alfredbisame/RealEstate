'use client';

import { User } from '@/types/roles';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Plus, 
  Search, 
  Filter, 
  Download, 
  MoreHorizontal,
  TrendingUp,
  Users,
  Target
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface LeadsHeaderProps {
  user: User;
}

export default function LeadsHeader({ user }: LeadsHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950 rounded-xl p-6 border border-blue-200 dark:border-blue-800 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="space-y-2">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-blue-900 dark:text-blue-100">
              Lead Management
            </h1>
          </div>
          <p className="text-blue-700 dark:text-blue-300 text-lg">
            Manage and track your sales leads effectively with comprehensive tools and insights
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white shadow-md">
            <Plus className="h-4 w-4 mr-2" />
            Add Lead
          </Button>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-400" />
          <Input
            placeholder="Search leads..."
            className="pl-10 bg-white dark:bg-gray-800 border-blue-200 dark:border-blue-700 focus:border-blue-500 dark:focus:border-blue-400 shadow-sm"
          />
        </div>
        <Button variant="outline" size="sm" className="border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <TrendingUp className="h-4 w-4 mr-2" />
              Lead Analytics
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Users className="h-4 w-4 mr-2" />
              Lead Sources
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Target className="h-4 w-4 mr-2" />
              Lead Scoring
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
} 