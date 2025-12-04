'use client';

import { DollarSign, Building2, TrendingUp } from 'lucide-react';

interface Property {
  id: string;
  name: string;
  location: string;
  value: string;
  yield: string;
  status: string;
  image: string;
  type: string;
  bedrooms: number | null;
  bathrooms: number;
  area: string;
  monthlyRent: string;
  purchaseDate: string;
  appreciation: string;
}

interface StatCardProps {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  color: string;
  bgColor: string;
  iconColor: string;
}

function StatCard({ icon: Icon, value, label, color, bgColor, iconColor }: StatCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
      <div className="flex items-center space-x-3">
        <div className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {value}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
        </div>
      </div>
    </div>
  );
}

interface PortfolioStatsProps {
  properties: Property[];
}

export default function PortfolioStats({ properties }: PortfolioStatsProps) {
  const portfolioStats = {
    totalValue: properties.reduce((sum, p) => sum + parseInt(p.value.replace(/[^\d]/g, '')), 0),
    totalProperties: properties.length,
    averageYield: properties.reduce((sum, p) => sum + parseFloat(p.yield), 0) / properties.length,
    monthlyIncome: properties.reduce((sum, p) => sum + parseInt(p.monthlyRent.replace(/[^\d]/g, '')), 0)
  };

  const stats = [
    {
      icon: DollarSign,
      value: `GHS ${(portfolioStats.totalValue / 1000000).toFixed(1)}M`,
      label: 'Total Portfolio Value',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900',
      iconColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: Building2,
      value: portfolioStats.totalProperties.toString(),
      label: 'Total Properties',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-800',
      iconColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: TrendingUp,
      value: `${portfolioStats.averageYield.toFixed(1)}%`,
      label: 'Average Yield',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900',
      iconColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: DollarSign,
      value: `GHS ${portfolioStats.monthlyIncome.toLocaleString()}`,
      label: 'Monthly Income',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900',
      iconColor: 'text-blue-600 dark:text-blue-400'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
} 