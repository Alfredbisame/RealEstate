'use client';

import { UserRole } from '@/types/roles';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
  Percent
} from 'lucide-react';
import { FaCediSign } from 'react-icons/fa6';
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

interface CommissionCalculatorViewProps {
  user: User;
}

export default function CommissionCalculatorView({ user }: CommissionCalculatorViewProps) {
  const calculations = [
    {
      id: '1',
      dealName: 'Darko Holdings - Residential Complex',
      saleValue: 450000,
      commissionRate: 5.0,
      bonusRate: 2.0,
      performanceMultiplier: 1.2,
      calculatedCommission: 22500,
      calculatedBonus: 9000,
      totalEarnings: 31500,
      tier: 'Gold',
      status: 'Calculated'
    },
    {
      id: '2',
      dealName: 'Osei Investments - Office Building',
      saleValue: 180000,
      commissionRate: 5.0,
      bonusRate: 1.5,
      performanceMultiplier: 1.1,
      calculatedCommission: 9000,
      calculatedBonus: 2700,
      totalEarnings: 11700,
      tier: 'Silver',
      status: 'Draft'
    },
    {
      id: '3',
      dealName: 'Mensah Group - Commercial Property',
      saleValue: 320000,
      commissionRate: 5.0,
      bonusRate: 2.5,
      performanceMultiplier: 1.3,
      calculatedCommission: 16000,
      calculatedBonus: 10400,
      totalEarnings: 26400,
      tier: 'Platinum',
      status: 'Calculated'
    },
    {
      id: '4',
      dealName: 'Addo Real Estate - Land Purchase',
      saleValue: 150000,
      commissionRate: 5.0,
      bonusRate: 1.0,
      performanceMultiplier: 1.0,
      calculatedCommission: 7500,
      calculatedBonus: 1500,
      totalEarnings: 9000,
      tier: 'Bronze',
      status: 'Draft'
    },
    {
      id: '5',
      dealName: 'Asante Properties - Investment Portfolio',
      saleValue: 250000,
      commissionRate: 5.0,
      bonusRate: 2.0,
      performanceMultiplier: 1.15,
      calculatedCommission: 12500,
      calculatedBonus: 5750,
      totalEarnings: 18250,
      tier: 'Gold',
      status: 'Calculated'
    }
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Platinum': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'Gold': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Silver': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      case 'Bronze': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Calculated': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Draft': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Processing': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
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
              placeholder="Search calculations..."
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
        {calculations.map((calc, index) => {
          const cardColors = [
            'bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950 border-emerald-200 dark:border-emerald-800',
            'bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950 dark:to-cyan-950 border-teal-200 dark:border-teal-800',
            'bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950 dark:to-blue-950 border-cyan-200 dark:border-cyan-800',
            'bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-200 dark:border-blue-800',
            'bg-gradient-to-r from-indigo-50 to-violet-50 dark:from-indigo-950 dark:to-violet-950 border-indigo-200 dark:border-indigo-800'
          ];
          
          return (
            <Card key={calc.id} className={`hover:shadow-lg transition-all duration-200 ${cardColors[index % cardColors.length]} border-2`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                          {calc.dealName}
                        </h3>
                        <Badge className={getStatusColor(calc.status)}>
                          {calc.status}
                        </Badge>
                        <Badge className={getTierColor(calc.tier)}>
                          {calc.tier}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <div className="flex items-center space-x-2">
                          <FaCediSign className="h-3 w-3" />
                          <span>Sale Value: GH₵{calc.saleValue.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Percent className="h-3 w-3" />
                          <span>Commission Rate: {calc.commissionRate}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        GH₵{calc.totalEarnings.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Total Earnings
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Multiplier: {calc.performanceMultiplier}x
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        GH₵{calc.calculatedCommission.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Commission
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Bonus: GH₵{calc.calculatedBonus.toLocaleString()}
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
                            Edit Calculation
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Calculator className="h-4 w-4 mr-2" />
                            Recalculate
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 space-y-3">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Commission Rate</span>
                      <span className="font-medium text-gray-900 dark:text-gray-100">{calc.commissionRate}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Bonus Rate</span>
                      <span className="font-medium text-gray-900 dark:text-gray-100">{calc.bonusRate}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Performance</span>
                      <span className="font-medium text-gray-900 dark:text-gray-100">{calc.performanceMultiplier}x</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Commission Calculation</span>
                    <span className="font-medium text-gray-900 dark:text-gray-100">{calc.calculatedCommission.toLocaleString()} + {calc.calculatedBonus.toLocaleString()} = {calc.totalEarnings.toLocaleString()}</span>
                  </div>
                  <Progress value={(calc.totalEarnings / calc.saleValue) * 100} className="h-2" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
} 