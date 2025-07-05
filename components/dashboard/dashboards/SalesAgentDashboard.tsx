'use client';

import { useState } from 'react';
import DashboardGrid from '../DashboardGrid';
import StatsCard from '../widgets/StatsCard';
import LeadTracker from '../widgets/LeadTracker';
import PropertyListings from '../widgets/PropertyListings';
import { 
  Users, Building2, TrendingUp, Target, 
  Phone, Calendar, DollarSign, Award 
} from 'lucide-react';

export default function SalesAgentDashboard() {
  const [widgets, setWidgets] = useState([
    { id: '1', type: 'stats', x: 0, y: 0, w: 4, h: 2 },
    { id: '2', type: 'leads', x: 4, y: 0, w: 8, h: 4 },
    { id: '3', type: 'listings', x: 0, y: 2, w: 6, h: 4 },
    { id: '4', type: 'pipeline', x: 6, y: 4, w: 6, h: 3 },
  ]);

  const statsData = [
    {
      title: 'Active Leads',
      value: '24',
      change: '+6',
      changeType: 'positive' as const,
      icon: Users,
      color: 'purple'
    },
    {
      title: 'Properties Sold',
      value: '8',
      change: '+3',
      changeType: 'positive' as const,
      icon: Building2,
      color: 'green'
    },
    {
      title: 'Monthly Commission',
      value: 'GHS 18,500',
      change: '+25%',
      changeType: 'positive' as const,
      icon: DollarSign,
      color: 'green'
    },
    {
      title: 'Conversion Rate',
      value: '32%',
      change: '+8%',
      changeType: 'positive' as const,
      icon: Target,
      color: 'blue'
    }
  ];

  const renderWidget = (widget: any) => {
    switch (widget.type) {
      case 'stats':
        return (
          <div className="grid grid-cols-2 gap-4 h-full">
            {statsData.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
        );
      case 'leads':
        return <LeadTracker />;
      case 'listings':
        return <PropertyListings />;
      case 'pipeline':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Sales Pipeline</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">Prospecting</span>
                <span className="font-medium">12 leads</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">Qualified</span>
                <span className="font-medium">8 leads</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '40%' }}></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">Negotiation</span>
                <span className="font-medium">4 leads</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '20%' }}></div>
              </div>
            </div>
          </div>
        );
      default:
        return <div>Widget not found</div>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Sales Agent Dashboard</h1>
        <p className="opacity-90">Lead management and property sales</p>
        <div className="flex items-center space-x-6 mt-4">
          <div className="flex items-center space-x-2">
            <Target className="w-5 h-5" />
            <span className="text-sm">Monthly Target: 85%</span>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5" />
            <span className="text-sm">Top Performer</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <button className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
          <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
            <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
          <div className="text-left">
            <p className="font-medium text-gray-900 dark:text-white">Add Lead</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">New prospect</p>
          </div>
        </button>

        <button className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
          <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
            <Building2 className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <div className="text-left">
            <p className="font-medium text-gray-900 dark:text-white">List Property</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">New listing</p>
          </div>
        </button>

        <button className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
            <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="text-left">
            <p className="font-medium text-gray-900 dark:text-white">Schedule Viewing</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Property tour</p>
          </div>
        </button>

        <button className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
          <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
            <Phone className="w-5 h-5 text-orange-600 dark:text-orange-400" />
          </div>
          <div className="text-left">
            <p className="font-medium text-gray-900 dark:text-white">Follow Up</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Client contact</p>
          </div>
        </button>
      </div>

      {/* Dashboard Grid */}
      <DashboardGrid
        widgets={widgets}
        onWidgetsChange={setWidgets}
        renderWidget={renderWidget}
      />
    </div>
  );
}