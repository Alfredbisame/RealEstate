'use client';

import { Briefcase, Shield, CheckCircle } from 'lucide-react';
import Image from 'next/image';

interface AuthBrandingProps {
  className?: string;
}

export default function AuthBranding({ className = '' }: AuthBrandingProps) {
  const features = [
    {
      icon: Briefcase,
      title: 'Project Management',
      description: 'Track construction projects, budgets, and timelines with precision.',
      color: 'bg-green-100 dark:bg-green-900',
      iconColor: 'text-green-600 dark:text-green-400'
    },
    {
      icon: Shield,
      title: 'GRA Compliance',
      description: 'Automated tax calculations and regulatory compliance.',
      color: 'bg-blue-100 dark:bg-blue-900',
      iconColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: CheckCircle,
      title: 'Real-time Analytics',
      description: 'Live dashboards with profit/loss tracking and forecasting.',
      color: 'bg-orange-100 dark:bg-orange-900',
      iconColor: 'text-orange-600 dark:text-orange-400'
    },
    {
      icon: Briefcase,
      title: 'Portfolio Management',
      description: 'Comprehensive property portfolio tracking and valuation.',
      color: 'bg-purple-100 dark:bg-purple-900',
      iconColor: 'text-purple-600 dark:text-purple-400'
    }
  ];

  return (
    <div className={`hidden lg:block space-y-8 ${className}`}>
      <div className="text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
          <div className="w-12 h-12 bg-blue-500 rounded-md flex items-center justify-center overflow-hidden p-1">
            <Image
              src="/logo.webp"
              alt="Ghana Real Estate Logo"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-blue-500">
              Ghana Real Estate
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">Business Analytics Platform</p>
          </div>
        </div>

        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Transform Your Real Estate Business
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Comprehensive analytics, project management, and financial tools designed for Ghana&apos;s real estate market.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
            <div className={`w-10 h-10 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
              <feature.icon className={`w-5 h-5 ${feature.iconColor}`} />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Ghana Flag Colors */}
      <div className="flex items-center justify-center lg:justify-start space-x-2">
        <div className="flex space-x-1">
          <div className="w-8 h-3 bg-red-500 rounded-sm"></div>
          <div className="w-8 h-3 bg-yellow-500 rounded-sm"></div>
          <div className="w-8 h-3 bg-green-500 rounded-sm"></div>
        </div>
        <span className="text-sm text-gray-600 dark:text-gray-400 ml-3">Proudly Ghanaian</span>
      </div>
    </div>
  );
} 