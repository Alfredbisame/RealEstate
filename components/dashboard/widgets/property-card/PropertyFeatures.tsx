'use client';

import { PropertyFeaturesProps } from './types';
import { getFeatureIcon } from './utils';

export default function PropertyFeatures({ 
  features, 
  className = "",
  maxFeatures = 4 
}: PropertyFeaturesProps) {
  const displayFeatures = features.slice(0, maxFeatures);
  const remainingCount = features.length - maxFeatures;

  return (
    <div className={`grid grid-cols-2 gap-2 ${className}`}>
      {displayFeatures.map((feature) => (
        <div 
          key={feature.id}
          className="flex items-center space-x-2 p-2 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          <div className="flex-shrink-0 text-gray-500 dark:text-gray-400">
            {getFeatureIcon(feature.name)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
              {feature.name}
            </p>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {feature.value}
            </p>
          </div>
        </div>
      ))}
      
      {remainingCount > 0 && (
        <div className="flex items-center justify-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
            +{remainingCount} more
          </span>
        </div>
      )}
    </div>
  );
} 