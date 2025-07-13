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
  BarChart3,
  TrendingUp,
  TrendingDown,
  Eye,
  Users,
  MapPin,
  Home,
  Star,
  Clock,
  Calendar
} from 'lucide-react';
import { Input } from '@/components/ui/input';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

interface PropertyAnalyticsViewProps {
  user: User;
}

export default function PropertyAnalyticsView({ user }: PropertyAnalyticsViewProps) {
  const analytics = [
    {
      id: '1',
      propertyTitle: 'Luxury Villa in East Legon',
      views: 1240,
      inquiries: 23,
      conversionRate: 1.85,
      avgDaysOnMarket: 15,
      rating: 4.8,
      trend: 'up',
      last30: [30, 40, 50, 60, 80, 90, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400, 420, 440, 460, 480, 500, 520, 540, 560]
    },
    {
      id: '2',
      propertyTitle: 'Modern Apartment in Airport Residential',
      views: 890,
      inquiries: 12,
      conversionRate: 1.35,
      avgDaysOnMarket: 8,
      rating: 4.6,
      trend: 'down',
      last30: [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165]
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search analytics..."
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
        {analytics.map((item, index) => {
          const cardColors = [
            'bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-200 dark:border-blue-800',
            'bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 border-indigo-200 dark:border-indigo-800'
          ];
          return (
            <Card key={item.id} className={`hover:shadow-lg transition-all duration-200 ${cardColors[index % cardColors.length]} border-2`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                      {item.propertyTitle}
                    </h3>
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {item.views} views
                    </Badge>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      {item.inquiries} inquiries
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-indigo-500" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-gray-700 dark:text-gray-300">Rating: {item.rating}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-700 dark:text-gray-300">Avg. Days on Market: {item.avgDaysOnMarket}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Eye className="h-4 w-4 text-blue-500" />
                      <span className="text-gray-700 dark:text-gray-300">Conversion Rate: {item.conversionRate}%</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center space-x-2">
                      {item.trend === 'up' ? (
                        <TrendingUp className="h-5 w-5 text-green-500" />
                      ) : (
                        <TrendingDown className="h-5 w-5 text-red-500" />
                      )}
                      <span className={item.trend === 'up' ? 'text-green-600 dark:text-green-400 font-medium' : 'text-red-600 dark:text-red-400 font-medium'}>
                        {item.trend === 'up' ? 'Trending Up' : 'Trending Down'}
                      </span>
                    </div>
                    <div className="w-full mt-2">
                      <Progress value={item.trend === 'up' ? 80 : 40} className="h-2" />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Last 30 Days</h4>
                  <div className="flex items-center gap-1">
                    {item.last30.map((v, i) => (
                      <div key={i} className={`h-2 rounded-full ${item.trend === 'up' ? 'bg-green-400' : 'bg-red-400'} opacity-70`} style={{ width: 4 + v / 20 }} />
                    ))}
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