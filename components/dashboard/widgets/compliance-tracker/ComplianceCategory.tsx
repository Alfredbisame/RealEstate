'use client';

import { ComplianceCategory as ComplianceCategoryType } from './types';
import ComplianceItem from './ComplianceItem';

interface ComplianceCategoryProps {
  category: ComplianceCategoryType;
  className?: string;
}

export default function ComplianceCategory({ category, className = "" }: ComplianceCategoryProps) {
  const getCategoryIcon = (categoryName: string) => {
    const icons: { [key: string]: string } = {
      'Tax Compliance': '💰',
      'Labor Compliance': '👷',
      'Building Permits': '🏗️',
      'Financial Compliance': '📊',
      'Environmental Compliance': '🌱',
      'Safety Compliance': '🛡️'
    };
    
    return icons[categoryName] || '📋';
  };

  const getCategoryColor = (categoryName: string) => {
    const colors: { [key: string]: string } = {
      'Tax Compliance': 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10',
      'Labor Compliance': 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10',
      'Building Permits': 'border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/10',
      'Financial Compliance': 'border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/10',
      'Environmental Compliance': 'border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/10',
      'Safety Compliance': 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/10'
    };
    
    return colors[categoryName] || 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50';
  };

  return (
    <div className={`bg-white dark:bg-gray-800 border rounded-lg p-4 hover:shadow-md transition-shadow ${getCategoryColor(category.category)} ${className}`}>
      <div className="flex items-center space-x-2 mb-3">
        <span className="text-lg">{getCategoryIcon(category.category)}</span>
        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
          {category.category}
        </h4>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          ({category.items.length} items)
        </span>
      </div>
      
      <div className="space-y-2">
        {category.items.map((item, index) => (
          <ComplianceItem 
            key={index} 
            item={item}
            className="border-l-2 border-transparent hover:border-blue-300 dark:hover:border-blue-600"
          />
        ))}
      </div>
    </div>
  );
} 