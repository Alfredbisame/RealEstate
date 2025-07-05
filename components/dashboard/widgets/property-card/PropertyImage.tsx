'use client';

import { useState } from 'react';
import { Heart, Share2, Eye, Star } from 'lucide-react';
import { PropertyImageProps } from './types';

export default function PropertyImage({ 
  image, 
  alt, 
  className = "",
  showOverlay = true,
  overlayContent
}: PropertyImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

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
      
      {/* Gradient overlay */}
      {showOverlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      
      {/* Action buttons overlay */}
      {showOverlay && (
        <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <button className="w-8 h-8 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200">
            <Heart className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      )}
      
      {/* Status badge overlay */}
      {showOverlay && (
        <div className="absolute top-3 left-3">
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300">
            <div className="flex items-center space-x-1">
              <Eye className="w-3 h-3" />
              <span>245 views</span>
            </div>
          </div>
        </div>
      )}
      
      {/* Rating overlay */}
      {showOverlay && (
        <div className="absolute bottom-3 left-3">
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300">
            <div className="flex items-center space-x-1">
              <Star className="w-3 h-3 text-yellow-500 fill-current" />
              <span>4.8</span>
            </div>
          </div>
        </div>
      )}
      
      {/* Custom overlay content */}
      {overlayContent && (
        <div className="absolute inset-0 flex items-center justify-center">
          {overlayContent}
        </div>
      )}
      
      {/* Hover effect */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
    </div>
  );
} 