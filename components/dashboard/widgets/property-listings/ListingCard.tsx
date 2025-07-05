'use client';

import { ListingCardProps } from './types';
import ListingImage from './ListingImage';
import ListingInfo from './ListingInfo';
import ListingStats from './ListingStats';
import ListingActions from './ListingActions';

export default function ListingCard({ 
  listing, 
  className = "",
  layout = 'default',
  showActions = true,
  onClick,
  onEdit,
  onDelete
}: ListingCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick(listing);
    }
  };

  const isCompact = layout === 'compact';
  const isDetailed = layout === 'detailed';

  return (
    <div 
      className={`
        bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
        rounded-xl overflow-hidden transition-all duration-300 group
        hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600
        ${listing.featured ? 'ring-2 ring-yellow-500/20' : ''}
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
      <ListingImage 
        image={listing.image} 
        alt={listing.title}
        status={listing.status}
        showOverlay={!isCompact}
      />
      
      {/* Card Content */}
      <div className={`p-4 ${isCompact ? 'p-3' : ''} ${isDetailed ? 'p-6' : ''}`}>
        {/* Property Information */}
        <ListingInfo 
          listing={listing}
          showDescription={isDetailed}
        />
        
        {/* Property Stats */}
        {!isCompact && (
          <div className="mt-4">
            <ListingStats 
              views={listing.views}
              interested={listing.interested}
            />
          </div>
        )}
        
        {/* Action Buttons */}
        {showActions && (
          <ListingActions
            listing={listing}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        )}
      </div>
      
      {/* Featured badge */}
      {listing.featured && (
        <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          Featured
        </div>
      )}
      
      {/* Priority badge */}
      {listing.priority && listing.priority !== 'medium' && (
        <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
          {listing.priority.toUpperCase()}
        </div>
      )}
      
      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-black/0 group-hover:from-black/5 group-hover:to-black/0 transition-all duration-300 pointer-events-none" />
    </div>
  );
} 