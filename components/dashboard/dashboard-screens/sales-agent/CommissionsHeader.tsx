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
  Calculator,
  DollarSign,
  Award,
  Gift
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

interface CommissionsHeaderProps {
  user: User;
}

export default function CommissionsHeader({ user }: CommissionsHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950 dark:via-teal-950 dark:to-cyan-950 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="space-y-2">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-emerald-100 dark:bg-emerald-900 rounded-lg">
              <Gift className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-emerald-900 dark:text-emerald-100">
              Commissions
            </h1>
          </div>
          <p className="text-emerald-700 dark:text-emerald-300 text-lg">
            Track sales commissions, bonuses, and performance incentives with detailed calculations
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-md">
            <Calculator className="h-4 w-4 mr-2" />
            Calculate
          </Button>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-emerald-400" />
          <Input
            placeholder="Search commissions..."
            className="pl-10 bg-white dark:bg-gray-800 border-emerald-200 dark:border-emerald-700 focus:border-emerald-500 dark:focus:border-emerald-400 shadow-sm"
          />
        </div>
        <Button variant="outline" size="sm" className="border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <TrendingUp className="h-4 w-4 mr-2" />
              Commission Analytics
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Calculator className="h-4 w-4 mr-2" />
              Bonus Calculator
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Award className="h-4 w-4 mr-2" />
              Performance Rewards
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
} 