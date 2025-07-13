'use client';

import { UserRole } from '@/types/roles';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Building2, 
  Eye,
  MapPin,
  Home,
  Calendar,
  Star,
  Clock
} from 'lucide-react';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

interface PropertyListingStatsProps {
  user: User;
}

export default function PropertyListingStats({ user }: PropertyListingStatsProps) {
  const stats = [
    {
      title: 'Active Listings',
      value: '24',
      change: '+3',
      changeType: 'positive' as const,
      icon: Building2,
      description: 'vs last month'
    },
    {
      title: 'Total Views',
      value: '12.5K',
      change: '+18.2%',
      changeType: 'positive' as const,
      icon: Eye,
      description: 'property views'
    },
    {
      title: 'Average Price',
      value: 'GH₵450K',
      change: '+5.3%',
      changeType: 'positive' as const,
      icon: DollarSign,
      description: 'market average'
    },
    {
      title: 'Days on Market',
      value: '28',
      change: '-12%',
      changeType: 'positive' as const,
      icon: Calendar,
      description: 'average time'
    },
    {
      title: 'Inquiries',
      value: '156',
      change: '+23',
      changeType: 'positive' as const,
      icon: MapPin,
      description: 'new inquiries'
    },
    {
      title: 'Conversion Rate',
      value: '8.7%',
      change: '+2.1%',
      changeType: 'positive' as const,
      icon: Star,
      description: 'inquiry to sale'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        const cardColors = [
          'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800',
          'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800',
          'bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950 dark:to-indigo-900 border-indigo-200 dark:border-indigo-800',
          'bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-950 dark:to-cyan-900 border-cyan-200 dark:border-cyan-800',
          'bg-gradient-to-br from-sky-50 to-sky-100 dark:from-sky-950 dark:to-sky-900 border-sky-200 dark:border-sky-800',
          'bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-950 dark:to-violet-900 border-violet-200 dark:border-violet-800'
        ];
        
        return (
          <Card key={index} className={`hover:shadow-lg transition-all duration-200 ${cardColors[index % cardColors.length]} border-2`}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {stat.title}
              </CardTitle>
              <div className="p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                <Icon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {stat.value}
              </div>
              <div className="flex items-center space-x-1 text-xs">
                {stat.changeType === 'positive' ? (
                  <TrendingUp className="h-3 w-3 text-green-600 dark:text-green-400" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-600 dark:text-red-400" />
                )}
                <span className={stat.changeType === 'positive' ? 'text-green-600 dark:text-green-400 font-medium' : 'text-red-600 dark:text-red-400 font-medium'}>
                  {stat.change}
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  {stat.description}
                </span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
} 