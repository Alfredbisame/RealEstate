'use client';

import { UserRole } from '@/types/roles';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Search, 
  Filter, 
  Download, 
  TrendingUp,
  TrendingDown,
  Edit,
  MoreHorizontal,
  Calculator,
  Target,
  BarChart3,
  Eye
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

interface PricingViewProps {
  user: User;
}

export default function PricingView({ user }: PricingViewProps) {
  const pricingData = [
    {
      id: '1',
      propertyTitle: 'Luxury Villa in East Legon',
      currentPrice: 'GH₵2,500,000',
      originalPrice: 'GH₵2,800,000',
      marketValue: 'GH₵2,600,000',
      priceChange: '-10.7%',
      changeType: 'decrease' as const,
      daysOnMarket: '45',
      pricePerSqft: 'GH₵5,556',
      comparableProperties: '8',
      priceHistory: [
        { date: '2024-01-01', price: 'GH₵2,800,000' },
        { date: '2024-01-15', price: 'GH₵2,600,000' },
        { date: '2024-01-30', price: 'GH₵2,500,000' }
      ]
    },
    {
      id: '2',
      propertyTitle: 'Modern Apartment in Airport Residential',
      currentPrice: 'GH₵850,000',
      originalPrice: 'GH₵800,000',
      marketValue: 'GH₵820,000',
      priceChange: '+6.3%',
      changeType: 'increase' as const,
      daysOnMarket: '22',
      pricePerSqft: 'GH₵3,036',
      comparableProperties: '12',
      priceHistory: [
        { date: '2024-01-01', price: 'GH₵800,000' },
        { date: '2024-01-10', price: 'GH₵820,000' },
        { date: '2024-01-22', price: 'GH₵850,000' }
      ]
    }
  ];

  const getChangeColor = (changeType: string) => {
    switch (changeType) {
      case 'increase': return 'text-green-600 dark:text-green-400';
      case 'decrease': return 'text-red-600 dark:text-red-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search pricing data..."
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
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Calculator className="h-4 w-4 mr-2" />
            Price Calculator
          </Button>
        </div>
      </div>

      <div className="grid gap-4">
        {pricingData.map((property, index) => {
          const cardColors = [
            'bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950 border-orange-200 dark:border-orange-800',
            'bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950 dark:to-yellow-950 border-amber-200 dark:border-amber-800'
          ];
          
          return (
            <Card key={property.id} className={`hover:shadow-lg transition-all duration-200 ${cardColors[index % cardColors.length]} border-2`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                          {property.propertyTitle}
                        </h3>
                        <Badge className={property.changeType === 'increase' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}>
                          {property.priceChange}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <div className="flex items-center space-x-2">
                          <FaCediSign className="h-3 w-3" />
                          <span>Market Value: {property.marketValue}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Target className="h-3 w-3" />
                          <span>{property.comparableProperties} comparable properties</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {property.currentPrice}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Current Price
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {property.pricePerSqft}/sqft
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {property.originalPrice}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Original Price
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {property.daysOnMarket} days on market
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline" className="bg-orange-50 hover:bg-orange-100 dark:bg-orange-900/20 dark:hover:bg-orange-900/30 border-orange-200 dark:border-orange-700 text-orange-700 dark:text-orange-300">
                        <Calculator className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-amber-50 hover:bg-amber-100 dark:bg-amber-900/20 dark:hover:bg-amber-900/30 border-amber-200 dark:border-amber-700 text-amber-700 dark:text-amber-300">
                        <BarChart3 className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-yellow-50 hover:bg-yellow-100 dark:bg-yellow-900/20 dark:hover:bg-yellow-900/30 border-yellow-200 dark:border-yellow-700 text-yellow-700 dark:text-yellow-300">
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
                            View Price History
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Calculator className="h-4 w-4 mr-2" />
                            Price Calculator
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <BarChart3 className="h-4 w-4 mr-2" />
                            Market Analysis
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Update Price
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Price Performance</span>
                    <span className={`font-medium ${getChangeColor(property.changeType)}`}>
                      {property.changeType === 'increase' ? (
                        <TrendingUp className="h-3 w-3 inline mr-1" />
                      ) : (
                        <TrendingDown className="h-3 w-3 inline mr-1" />
                      )}
                      {property.priceChange}
                    </span>
                  </div>
                  <Progress value={property.changeType === 'increase' ? 75 : 25} className="h-2" />
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <FaCediSign className="h-3 w-3" />
                        <span>Current: {property.currentPrice}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Target className="h-3 w-3" />
                        <span>Market: {property.marketValue}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BarChart3 className="h-3 w-3" />
                      <span>{property.comparableProperties} comparables</span>
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