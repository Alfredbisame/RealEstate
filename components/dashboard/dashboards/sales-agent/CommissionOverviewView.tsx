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
  Calculator,
  Gift,
  Award,
  Target,
  TrendingUp,
  Eye,
  Edit,
  MoreHorizontal,
  Calendar,
  Clock,
  Users
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

interface CommissionOverviewViewProps {
  user: User;
}

export default function CommissionOverviewView({ user }: CommissionOverviewViewProps) {
  const commissions = [
    {
      id: '1',
      deal: 'Darko Holdings - Residential Complex',
      client: 'Yaw Darko',
      saleValue: 'GH₵450,000',
      commission: 'GH₵22,500',
      rate: 5.0,
      status: 'Paid',
      date: '2024-01-15',
      type: 'Sale Commission',
      bonus: 'GH₵2,500',
      total: 'GH₵25,000'
    },
    {
      id: '2',
      deal: 'Osei Investments - Office Building',
      client: 'Ama Osei',
      saleValue: 'GH₵180,000',
      commission: 'GH₵9,000',
      rate: 5.0,
      status: 'Pending',
      date: '2024-01-14',
      type: 'Sale Commission',
      bonus: 'GH₵1,000',
      total: 'GH₵10,000'
    },
    {
      id: '3',
      deal: 'Mensah Group - Commercial Property',
      client: 'Kofi Mensah',
      saleValue: 'GH₵320,000',
      commission: 'GH₵16,000',
      rate: 5.0,
      status: 'Processing',
      date: '2024-01-13',
      type: 'Sale Commission',
      bonus: 'GH₵1,800',
      total: 'GH₵17,800'
    },
    {
      id: '4',
      deal: 'Addo Real Estate - Land Purchase',
      client: 'Efua Addo',
      saleValue: 'GH₵150,000',
      commission: 'GH₵7,500',
      rate: 5.0,
      status: 'Paid',
      date: '2024-01-12',
      type: 'Sale Commission',
      bonus: 'GH₵800',
      total: 'GH₵8,300'
    },
    {
      id: '5',
      deal: 'Asante Properties - Investment Portfolio',
      client: 'Kwame Asante',
      saleValue: 'GH₵250,000',
      commission: 'GH₵12,500',
      rate: 5.0,
      status: 'Paid',
      date: '2024-01-11',
      type: 'Sale Commission',
      bonus: 'GH₵1,500',
      total: 'GH₵14,000'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Processing': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Overdue': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Sale Commission': return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200';
      case 'Bonus': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'Performance Reward': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
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
              placeholder="Search commissions..."
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
        {commissions.map((commission, index) => {
          const cardColors = [
            'bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950 border-emerald-200 dark:border-emerald-800',
            'bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950 dark:to-cyan-950 border-teal-200 dark:border-teal-800',
            'bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950 dark:to-blue-950 border-cyan-200 dark:border-cyan-800',
            'bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-200 dark:border-blue-800',
            'bg-gradient-to-r from-indigo-50 to-violet-50 dark:from-indigo-950 dark:to-violet-950 border-indigo-200 dark:border-indigo-800'
          ];
          
          return (
            <Card key={commission.id} className={`hover:shadow-lg transition-all duration-200 ${cardColors[index % cardColors.length]} border-2`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                          {commission.deal}
                        </h3>
                        <Badge className={getStatusColor(commission.status)}>
                          {commission.status}
                        </Badge>
                        <Badge className={getTypeColor(commission.type)}>
                          {commission.type}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <div className="flex items-center space-x-2">
                          <Users className="h-3 w-3" />
                          <span>{commission.client}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calculator className="h-3 w-3" />
                          <span>Rate: {commission.rate}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {commission.total}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Total Earnings
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Date: {commission.date}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {commission.saleValue}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Sale Value
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Commission: {commission.commission}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline" className="bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-900/20 dark:hover:bg-emerald-900/30 border-emerald-200 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300">
                        <Calculator className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-teal-50 hover:bg-teal-100 dark:bg-teal-900/20 dark:hover:bg-teal-900/30 border-teal-200 dark:border-teal-700 text-teal-700 dark:text-teal-300">
                        <Gift className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-cyan-50 hover:bg-cyan-100 dark:bg-cyan-900/20 dark:hover:bg-cyan-900/30 border-cyan-200 dark:border-cyan-700 text-cyan-700 dark:text-cyan-300">
                        <Award className="h-3 w-3" />
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
                            Edit Commission
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Calendar className="h-4 w-4 mr-2" />
                            Payment Schedule
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Commission Rate</span>
                    <span className="font-medium text-gray-900 dark:text-gray-100">{commission.rate}%</span>
                  </div>
                  <Progress value={commission.rate * 10} className="h-2" />
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>Date: {commission.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>Status: {commission.status}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-3 w-3" />
                      <span>Bonus: {commission.bonus}</span>
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