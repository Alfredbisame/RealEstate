'use client';

import { useState } from 'react';
import { 
  BarChart3, TrendingUp, DollarSign, Building2, 
  Calendar, Filter, Download, RefreshCw 
} from 'lucide-react';
import ChartWidget from '../widgets/ChartWidget';
import StatsCard from '../widgets/StatsCard';

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  avatar?: string;
}

interface AnalyticsTabProps {
  user: User;
}

export default function AnalyticsTab({ user }: AnalyticsTabProps) {
  const [timeRange, setTimeRange] = useState('30d');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsRefreshing(false);
  };

  // Recharts format data
  const revenueData = [
    { name: 'Jan', revenue: 145000, expenses: 108000 },
    { name: 'Feb', revenue: 152000, expenses: 114000 },
    { name: 'Mar', revenue: 168000, expenses: 122000 },
    { name: 'Apr', revenue: 175000, expenses: 128000 },
    { name: 'May', revenue: 182000, expenses: 132000 },
    { name: 'Jun', revenue: 195000, expenses: 135000 },
  ];

  const propertyData = [
    { name: 'Residential', value: 45 },
    { name: 'Commercial', value: 25 },
    { name: 'Industrial', value: 15 },
    { name: 'Land', value: 15 },
  ];

  const statsData = [
    {
      title: 'Total Revenue',
      value: 'GHS 1.2M',
      change: '+15.2%',
      changeType: 'positive' as const,
      icon: DollarSign,
      color: 'green' as const
    },
    {
      title: 'Active Properties',
      value: '24',
      change: '+3',
      changeType: 'positive' as const,
      icon: Building2,
      color: 'blue' as const
    },
    {
      title: 'Growth Rate',
      value: '18.5%',
      change: '+2.1%',
      changeType: 'positive' as const,
      icon: TrendingUp,
      color: 'orange' as const
    },
    {
      title: 'ROI Average',
      value: '22.3%',
      change: '+1.8%',
      changeType: 'positive' as const,
      icon: BarChart3,
      color: 'purple' as const
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Analytics Dashboard</h1>
            <p className="opacity-90">Comprehensive business intelligence and insights</p>
          </div>
          <div className="flex items-center space-x-3">
            <select 
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <option value="7d" className="text-gray-900">Last 7 days</option>
              <option value="30d" className="text-gray-900">Last 30 days</option>
              <option value="90d" className="text-gray-900">Last 90 days</option>
              <option value="1y" className="text-gray-900">Last year</option>
            </select>
            <button 
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="p-2 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <button className="flex items-center space-x-3 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all">
          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="text-left">
            <p className="font-medium text-gray-900 dark:text-white">Generate Report</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Custom analytics</p>
          </div>
        </button>

        <button className="flex items-center space-x-3 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all">
          <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
            <Download className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <div className="text-left">
            <p className="font-medium text-gray-900 dark:text-white">Export Data</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">CSV, PDF, Excel</p>
          </div>
        </button>

        <button className="flex items-center space-x-3 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all">
          <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
            <Filter className="w-5 h-5 text-orange-600 dark:text-orange-400" />
          </div>
          <div className="text-left">
            <p className="font-medium text-gray-900 dark:text-white">Advanced Filters</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Custom queries</p>
          </div>
        </button>

        <button className="flex items-center space-x-3 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all">
          <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
            <Calendar className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
          <div className="text-left">
            <p className="font-medium text-gray-900 dark:text-white">Schedule Reports</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Automated delivery</p>
          </div>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <ChartWidget 
            title="Revenue vs Expenses Trend"
            data={revenueData}
            type="area"
          />
        </div>
        
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <ChartWidget 
            title="Property Distribution"
            data={propertyData}
            type="doughnut"
          />
        </div>
      </div>

      {/* Detailed Analytics Table */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
        <div className="p-6 border-b border-gray-200/50 dark:border-gray-700/50">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Performance Metrics</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50/50 dark:bg-gray-700/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Metric</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Current</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Previous</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Change</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200/50 dark:divide-gray-700/50">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Total Revenue</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">GHS 195,000</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">GHS 182,000</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">+7.1%</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Properties Sold</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">8</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">6</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">+33.3%</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Average Deal Size</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">GHS 24,375</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">GHS 30,333</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">-19.6%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}