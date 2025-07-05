'use client';

import { PropertyHeaderProps } from './types';
import { getTypeIcon, getTypeColor, getPropertyScore, getPropertyRating, getPropertyRatingColor } from './utils';
import PropertyLocation from './PropertyLocation';
import PropertyStatus from './PropertyStatus';

export default function PropertyHeader({ 
  property, 
  className = "",
  showType = true 
}: PropertyHeaderProps) {
  const score = getPropertyScore(property);
  const rating = getPropertyRating(score);
  const ratingColor = getPropertyRatingColor(score);

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Title and type */}
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-gray-900 dark:text-white text-lg mb-1 line-clamp-2">
            {property.name}
          </h4>
          
          {showType && property.type && (
            <div className="flex items-center space-x-2 mb-2">
              <div className={`${getTypeColor(property.type)}`}>
                {getTypeIcon(property.type)}
              </div>
              <span className={`text-xs font-medium capitalize ${getTypeColor(property.type)}`}>
                {property.type.replace('-', ' ')}
              </span>
            </div>
          )}
        </div>
        
        {/* Property score */}
        <div className="flex flex-col items-end space-y-1">
          <div className={`
            px-2 py-1 rounded-full text-xs font-bold
            ${ratingColor} bg-opacity-10
          `}>
            {score}/100
          </div>
          <span className={`text-xs font-medium ${ratingColor}`}>
            {rating}
          </span>
        </div>
      </div>
      
      {/* Location */}
      <PropertyLocation location={property.location} />
      
      {/* Status */}
      <div className="flex items-center justify-between">
        <PropertyStatus status={property.status} />
        
        {/* Last updated */}
        {property.lastUpdated && (
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Updated {new Date(property.lastUpdated).toLocaleDateString()}
          </span>
        )}
      </div>
      
      {/* Description */}
      {property.description && (
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {property.description}
        </p>
      )}
    </div>
  );
} 