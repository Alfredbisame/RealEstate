'use client';

import { ComplianceCategory as ComplianceCategoryType } from './types';
import ComplianceCategory from './ComplianceCategory';

interface ComplianceListProps {
  categories: ComplianceCategoryType[];
  className?: string;
}

export default function ComplianceList({ categories, className = "" }: ComplianceListProps) {
  return (
    <div className={`space-y-4 overflow-y-auto max-h-64 ${className}`}>
      {categories.map((category, index) => (
        <ComplianceCategory
          key={index}
          category={category}
        />
      ))}
      
      {categories.length === 0 && (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-lg font-medium">No compliance items found</p>
          <p className="text-sm">All compliance requirements are up to date</p>
        </div>
      )}
    </div>
  );
} 