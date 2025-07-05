'use client';

import { useState } from 'react';
import { Star, Eye, Heart } from 'lucide-react';
import { ListingImageProps } from './types';
import { getStatusColor } from './utils.tsx';

export default function ListingImage({ 
  image, 
  alt, 
  status, 
  className = "",
  showOverlay = true 
}: ListingImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const colors = getStatusColor(status);

  return (
    <div className={`
      relative aspect-video bg-gray-200 dark:bg-gray-700 overflow-hidden
      group cursor-pointer transition-all duration-300
      ${className}
    `}>
      {/* Loading skeleton */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 animate-pulse" />
      )}
      
      {/* Error fallback */}
      {imageError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Image unavailable</p>
          </div>
        </div>
      ) : (
        <img 
          src={image} 
          alt={alt}
          className={`
            w-full h-full object-cover transition-all duration-300
            ${imageLoaded ? 'opacity-100' : 'opacity-0'}
            group-hover:scale-105
          `}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      )}
      
      {/* Status badge */}
      <div className={`
        absolute top-2 right-2 px-2 py-1 text-xs font-medium rounded-full
        ${colors.bg} ${colors.text} ${colors.border} border
        backdrop-blur-sm
      `}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </div>
      
      {/* Gradient overlay */}
      {showOverlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      
      {/* Hover overlay content */}
      {showOverlay && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-3 text-center">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
                <Eye className="w-4 h-4" />
                <span>View Details</span>
              </div>
              <div className="flex items-center space-x-1 text-red-500">
                <Heart className="w-4 h-4" />
                <span>Favorite</span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Hover effect */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
    </div>
  );
} 