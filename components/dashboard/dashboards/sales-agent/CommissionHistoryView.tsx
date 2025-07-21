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
  Users,
  Receipt
} from 'lucide-react';
import { FaCediSign } from 'react-icons/fa6';
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

interface CommissionHistoryViewProps {
  user: User;
}

export default function CommissionHistoryView({ user }: CommissionHistoryViewProps) {
  const history = [
    {
      id: '1',
      period: 'January 2024',
      totalCommissions: 'GH₵45,200',
      totalBonuses: 'GH₵8,500',
      totalEarnings: 'GH₵53,700',
      deals: 12,
      status: 'Paid',
      paymentDate: '2024-02-01',
      paymentMethod: 'Bank Transfer',
      reference: 'COM-2024-001'
    },
    {
      id: '2',
      period: 'December 2023',
      totalCommissions: 'GH₵38,500',
      totalBonuses: 'GH₵6,200',
      totalEarnings: 'GH₵44,700',
      deals: 10,
      status: 'Paid',
      paymentDate: '2024-01-01',
      paymentMethod: 'Bank Transfer',
      reference: 'COM-2023-012'
    },
    {
      id: '3',
      period: 'November 2023',
      totalCommissions: 'GH₵42,800',
      totalBonuses: 'GH₵7,800',
      totalEarnings: 'GH₵50,600',
      deals: 11,
      status: 'Paid',
      paymentDate: '2023-12-01',
      paymentMethod: 'Bank Transfer',
      reference: 'COM-2023-011'
    },
    {
      id: '4',
      period: 'October 2023',
      totalCommissions: 'GH₵35,200',
      totalBonuses: 'GH₵5,500',
      totalEarnings: 'GH₵40,700',
      deals: 9,
      status: 'Paid',
      paymentDate: '2023-11-01',
      paymentMethod: 'Bank Transfer',
      reference: 'COM-2023-010'
    },
    {
      id: '5',
      period: 'September 2023',
      totalCommissions: 'GH₵41,600',
      totalBonuses: 'GH₵8,900',
      totalEarnings: 'GH₵50,500',
      deals: 13,
      status: 'Paid',
      paymentDate: '2023-10-01',
      paymentMethod: 'Bank Transfer',
      reference: 'COM-2023-009'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Processing': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Failed': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
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
              placeholder="Search history..."
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
        {history.map((item, index) => {
          const cardColors = [
            'bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-200 dark:border-blue-800',
            'bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 border-indigo-200 dark:border-indigo-800',
            'bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border-purple-200 dark:border-purple-800',
            'bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950 dark:to-rose-950 border-pink-200 dark:border-pink-800',
            'bg-gradient-to-r from-rose-50 to-orange-50 dark:from-rose-950 dark:to-orange-950 border-rose-200 dark:border-rose-800'
          ];
          
          return (
            <Card key={item.id} className={`hover:shadow-lg transition-all duration-200 ${cardColors[index % cardColors.length]} border-2`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                          {item.period}
                        </h3>
                        <Badge className={getStatusColor(item.status)}>
                          {item.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <div className="flex items-center space-x-2">
                          <Receipt className="h-3 w-3" />
                          <span>Reference: {item.reference}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-3 w-3" />
                          <span>Deals: {item.deals}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {item.totalEarnings}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Total Earnings
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Payment: {item.paymentDate}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {item.totalCommissions}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Commissions
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Bonuses: {item.totalBonuses}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline" className="bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300">
                        <Calculator className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-900/20 dark:hover:bg-indigo-900/30 border-indigo-200 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300">
                        <Receipt className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-purple-50 hover:bg-purple-100 dark:bg-purple-900/20 dark:hover:bg-purple-900/30 border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300">
                        <FaCediSign className="h-3 w-3" />
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
                            <Receipt className="h-4 w-4 mr-2" />
                            Download Receipt
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Calendar className="h-4 w-4 mr-2" />
                            Payment History
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 space-y-3">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Commissions</span>
                      <span className="font-medium text-gray-900 dark:text-gray-100">{item.totalCommissions}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Bonuses</span>
                      <span className="font-medium text-gray-900 dark:text-gray-100">{item.totalBonuses}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Deals</span>
                      <span className="font-medium text-gray-900 dark:text-gray-100">{item.deals}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>Period: {item.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>Payment: {item.paymentDate}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>Method: {item.paymentMethod}</span>
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