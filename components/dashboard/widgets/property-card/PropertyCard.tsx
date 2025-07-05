'use client';

import { PropertyCardProps } from './types';
import PropertyImage from './PropertyImage';
import PropertyHeader from './PropertyHeader';
import PropertyValue from './PropertyValue';
import PropertyFeatures from './PropertyFeatures';
import PropertyAgent from './PropertyAgent';
import PropertyActions from './PropertyActions';

export default function PropertyCard({ 
  property, 
  className = "",
  variant = 'default',
  showAgent = true,
  showFeatures = true,
  showPriceHistory = false,
  onClick,
  onFavorite,
  onShare
}: PropertyCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick(property);
    }
  };

  const isCompact = variant === 'compact';
  const isDetailed = variant === 'detailed';
  const isFeatured = variant === 'featured';

  return (
    <div 
      className={`
        bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 
        overflow-hidden transition-all duration-300 group
        hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600
        ${isFeatured ? 'ring-2 ring-blue-500/20' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={handleClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      } : undefined}
    >
      {/* Property Image */}
      <PropertyImage 
        image={property.image} 
        alt={property.name}
        showOverlay={!isCompact}
      />
      
      {/* Card Content */}
      <div className={`p-4 ${isCompact ? 'p-3' : ''} ${isDetailed ? 'p-6' : ''}`}>
        {/* Header */}
        <PropertyHeader 
          property={property} 
          showType={!isCompact}
        />
        
        {/* Value and Yield */}
        <div className="my-4">
          <PropertyValue 
            value={property.value} 
            yield={property.yield}
            showTrend={!isCompact}
          />
        </div>
        
        {/* Features */}
        {showFeatures && property.features && !isCompact && (
          <div className="mb-4">
            <PropertyFeatures 
              features={property.features}
              maxFeatures={isDetailed ? 6 : 4}
            />
          </div>
        )}
        
        {/* Agent */}
        {showAgent && property.agent && !isCompact && (
          <div className="mb-4">
            <PropertyAgent 
              agent={property.agent}
              showContact={isDetailed}
            />
          </div>
        )}
        
        {/* Actions */}
        {!isCompact && (
          <PropertyActions
            property={property}
            onFavorite={onFavorite}
            onShare={onShare}
          />
        )}
      </div>
      
      {/* Featured badge */}
      {isFeatured && (
        <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
          Featured
        </div>
      )}
      
      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-black/0 group-hover:from-black/5 group-hover:to-black/0 transition-all duration-300 pointer-events-none" />
    </div>
  );
} 