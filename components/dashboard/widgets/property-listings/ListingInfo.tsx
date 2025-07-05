'use client';

import { MapPin, Bed, Bath, Square, Calendar, Star } from 'lucide-react';
import { ListingInfoProps } from './types';
import { formatCurrency, formatArea, getTypeIcon, getTypeColor, getListingScore, getListingRating, getListingRatingColor } from './utils.tsx';

export default function ListingInfo({ 
  listing, 
  className = "",
  showDescription = false 
}: ListingInfoProps) {
  const score = getListingScore(listing);
  const rating = getListingRating(score);
  const ratingColor = getListingRatingColor(score);

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Title and type */}
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-gray-900 dark:text-white text-lg mb-1 line-clamp-2">
            {listing.title}
          </h4>
          
          {listing.type && (
            <div className="flex items-center space-x-2 mb-2">
              <div className={`${getTypeColor(listing.type)}`}>
                {getTypeIcon(listing.type)}
              </div>
              <span className={`text-xs font-medium capitalize ${getTypeColor(listing.type)}`}>
                {listing.type.replace('-', ' ')}
              </span>
            </div>
          )}
        </div>
        
        {/* Listing score */}
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
      <div className="flex items-center space-x-1.5 text-sm text-gray-500 dark:text-gray-400">
        <MapPin className="w-4 h-4 text-blue-500 dark:text-blue-400" />
        <span className="font-medium text-gray-700 dark:text-gray-300">{listing.location}</span>
      </div>
      
      {/* Price */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-green-600 dark:text-green-400">
          {formatCurrency(listing.price)}
        </span>
        {listing.featured && (
          <span className="bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 text-xs font-medium px-2 py-1 rounded-full">
            Featured
          </span>
        )}
      </div>
      
      {/* Property details */}
      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
        {listing.bedrooms && (
          <div className="flex items-center space-x-1">
            <Bed className="w-4 h-4" />
            <span>{listing.bedrooms} bed</span>
          </div>
        )}
        <div className="flex items-center space-x-1">
          <Bath className="w-4 h-4" />
          <span>{listing.bathrooms} bath</span>
        </div>
        <div className="flex items-center space-x-1">
          <Square className="w-4 h-4" />
          <span>{formatArea(listing.area)}</span>
        </div>
      </div>
      
      {/* Description */}
      {showDescription && listing.description && (
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {listing.description}
        </p>
      )}
      
      {/* Tags */}
      {listing.tags && listing.tags.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {listing.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
          {listing.tags.length > 3 && (
            <span className="bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs px-2 py-1 rounded-full">
              +{listing.tags.length - 3}
            </span>
          )}
        </div>
      )}
      
      {/* Agent info */}
      {listing.agent && (
        <div className="flex items-center space-x-2 pt-2 border-t border-gray-100 dark:border-gray-700">
          <img 
            src={listing.agent.avatar} 
            alt={listing.agent.name}
            className="w-6 h-6 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-gray-900 dark:text-white truncate">
              {listing.agent.name}
            </p>
            <div className="flex items-center space-x-1">
              <Star className="w-3 h-3 text-yellow-500 fill-current" />
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {listing.agent.rating}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 