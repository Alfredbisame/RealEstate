'use client';

import { useState } from 'react';
import DashboardGrid from '../DashboardGrid';
import StatsCard from '../widgets/StatsCard';
import ChartWidget from '../widgets/ChartWidget';
import PropertyCard from '../widgets/PropertyCard';
import ProfitCalculator from '../widgets/ProfitCalculator';
import { 
  Building2, TrendingUp, DollarSign, PieChart, 
  MapPin, Calculator, FileText, CreditCard 
} from 'lucide-react';

export default function PropertyOwnerDashboard() {
  const [widgets, setWidgets] = useState([
    { id: '1', type: 'stats', x: 0, y: 0, w: 3, h: 2 },
    { id: '2', type: 'chart', x: 3, y: 0, w: 6, h: 4 },
    { id: '3', type: 'properties', x: 9, y: 0, w: 3, h: 4 },
    { id: '4', type: 'profit-calc', x: 0, y: 2, w: 6, h: 4 },
    { id: '5', type: 'cash-flow', x: 6, y: 4, w: 6, h: 3 },
  ]);

  const statsData = [
    {
      title: 'Total Portfolio Value',
      value: 'GHS 2.4M',
      change: '+12.5%',
      changeType: 'positive' as const,
      icon: Building2,
      color: 'green' as const
    },
    {
      title: 'Monthly Revenue',
      value: 'GHS 45,200',
      change: '+8.2%',
      changeType: 'positive' as const,
      icon: TrendingUp,
      color: 'blue' as const
    },
    {
      title: 'Active Properties',
      value: '24',
      change: '+2',
      changeType: 'positive' as const,
      icon: MapPin,
      color: 'orange' as const
    },
    {
      title: 'Average ROI',
      value: '18.5%',
      change: '+1.2%',
      changeType: 'positive' as const,
      icon: PieChart,
      color: 'purple' as const
    }
  ];

  // Transform data for Recharts AreaChart
  const chartData = [
    { name: 'Jan', propertyvalue: 2100000, monthlyincome: 38000 },
    { name: 'Feb', propertyvalue: 2150000, monthlyincome: 40000 },
    { name: 'Mar', propertyvalue: 2200000, monthlyincome: 42000 },
    { name: 'Apr', propertyvalue: 2300000, monthlyincome: 43000 },
    { name: 'May', propertyvalue: 2350000, monthlyincome: 44000 },
    { name: 'Jun', propertyvalue: 2400000, monthlyincome: 45200 },
  ];

  const properties = [
    {
      id: '1',
      name: 'East Legon Villa',
      location: 'East Legon, Accra',
      value: 'GHS 450,000',
      yield: '12.5%',
      status: 'Occupied',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: '2',
      name: 'Airport Residential',
      location: 'Airport Hills, Accra',
      value: 'GHS 680,000',
      yield: '15.2%',
      status: 'Available',
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: '3',
      name: 'Kumasi Complex',
      location: 'Asokore Mampong, Kumasi',
      value: 'GHS 320,000',
      yield: '18.7%',
      status: 'Under Construction',
      image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=300'
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
      case 'chart':
        return (
          <ChartWidget 
            title="Portfolio Performance"
            data={chartData}
            type="area"
          />
        );
      case 'properties':
        return (
          <div className="space-y-4 h-full overflow-auto">
            <h3 className="font-semibold text-gray-800 dark:text-white">Recent Properties</h3>
            {properties.slice(0, 3).map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        );
      case 'profit-calc':
        return <ProfitCalculator />;
      case 'cash-flow':
        return (
          <ChartWidget 
            title="Cash Flow Analysis"
            data={[
              { name: 'Q1', value: 125000 },
              { name: 'Q2', value: 140000 },
              { name: 'Q3', value: 135000 },
              { name: 'Q4', value: 158000 }
            ]}
            type="bar"
          />
        );
      default:
        return <div>Widget not found</div>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Property Owner Dashboard</h1>
        <p className="opacity-90">Comprehensive overview of your real estate portfolio</p>
        <div className="flex items-center space-x-6 mt-4">
          <div className="flex items-center space-x-2">
            <Calculator className="w-5 h-5" />
            <span className="text-sm">GHS/USD: 12.45</span>
          </div>
          <div className="flex items-center space-x-2">
            <FileText className="w-5 h-5" />
            <span className="text-sm">Last Updated: Today, 2:30 PM</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <button className="flex items-center space-x-3 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all">
          <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
            <Building2 className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <div className="text-left">
            <p className="font-medium text-gray-900 dark:text-white">Add Property</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">New investment</p>
          </div>
        </button>

        <button className="flex items-center space-x-3 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all">
          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
            <Calculator className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="text-left">
            <p className="font-medium text-gray-900 dark:text-white">ROI Calculator</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Analyze returns</p>
          </div>
        </button>

        <button className="flex items-center space-x-3 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all">
          <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
            <FileText className="w-5 h-5 text-orange-600 dark:text-orange-400" />
          </div>
          <div className="text-left">
            <p className="font-medium text-gray-900 dark:text-white">Generate Invoice</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Create billing</p>
          </div>
        </button>

        <button className="flex items-center space-x-3 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all">
          <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
            <CreditCard className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
          <div className="text-left">
            <p className="font-medium text-gray-900 dark:text-white">Payment Tracker</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Monitor income</p>
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