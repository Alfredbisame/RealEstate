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
  Calendar,
  TrendingUp,
  Target,
  BarChart3,
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

interface DealForecastingViewProps {
  user: User;
}

export default function DealForecastingView({ user }: DealForecastingViewProps) {
  const forecasts = [
    {
      id: '1',
      period: 'Q1 2024',
      projectedRevenue: 'GH₵850,000',
      actualRevenue: 'GH₵780,000',
      accuracy: 92,
      deals: 12,
      avgDealSize: 'GH₵65,000',
      confidence: 'High'
    },
    {
      id: '2',
      period: 'Q2 2024',
      projectedRevenue: 'GH₵1,200,000',
      actualRevenue: 'GH₵0',
      accuracy: 0,
      deals: 18,
      avgDealSize: 'GH₵66,667',
      confidence: 'Medium'
    },
    {
      id: '3',
      period: 'Q3 2024',
      projectedRevenue: 'GH₵1,500,000',
      actualRevenue: 'GH₵0',
      accuracy: 0,
      deals: 22,
      avgDealSize: 'GH₵68,182',
      confidence: 'Low'
    },
    {
      id: '4',
      period: 'Q4 2024',
      projectedRevenue: 'GH₵1,800,000',
      actualRevenue: 'GH₵0',
      accuracy: 0,
      deals: 25,
      avgDealSize: 'GH₵72,000',
      confidence: 'Low'
    }
  ];

  const getConfidenceColor = (confidence: string) => {
    switch (confidence) {
      case 'High': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Low': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
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
              placeholder="Search forecasts..."
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
        {forecasts.map((forecast, index) => {
          const cardColors = [
            'bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-950 dark:to-pink-950 border-rose-200 dark:border-rose-800',
            'bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-950 dark:to-purple-950 border-pink-200 dark:border-pink-800',
            'bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950 border-purple-200 dark:border-purple-800',
            'bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950 dark:to-blue-950 border-indigo-200 dark:border-indigo-800'
          ];
          
          return (
            <Card key={forecast.id} className={`hover:shadow-lg transition-all duration-200 ${cardColors[index % cardColors.length]} border-2`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                          {forecast.period}
                        </h3>
                        <Badge className={getConfidenceColor(forecast.confidence)}>
                          {forecast.confidence} Confidence
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <div className="flex items-center space-x-2">
                          <DollarSign className="h-3 w-3" />
                          <span>Projected: {forecast.projectedRevenue}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Target className="h-3 w-3" />
                          <span>Deals: {forecast.deals}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {forecast.avgDealSize}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Avg. Deal Size
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Accuracy: {forecast.accuracy}%
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {forecast.actualRevenue}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Actual Revenue
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline">
                        <BarChart3 className="h-3 w-3" />
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
                            Edit Forecast
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <TrendingUp className="h-4 w-4 mr-2" />
                            Update Projections
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Forecast Accuracy</span>
                    <span className="font-medium text-gray-900 dark:text-gray-100">{forecast.accuracy}%</span>
                  </div>
                  <Progress value={forecast.accuracy} className="h-2" />
                  
                  <div className="grid grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-3 w-3" />
                      <span>Projected: {forecast.projectedRevenue}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Target className="h-3 w-3" />
                      <span>Deals: {forecast.deals}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>Period: {forecast.period}</span>
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