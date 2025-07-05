'use client';

import { useState } from 'react';
import { Heart, Share2, Phone, Mail, Eye, Star } from 'lucide-react';
import { PropertyActionsProps } from './types';

export default function PropertyActions({ 
  property, 
  onFavorite,
  onShare,
  onContact,
  className = "" 
}: PropertyActionsProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
    if (onFavorite) {
      onFavorite(property.id);
    }
  };

  const handleShare = () => {
    if (onShare) {
      onShare(property);
    }
  };

  const handleContact = () => {
    if (onContact) {
      onContact(property);
    }
  };

  return (
    <div className={`flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700 ${className}`}>
      {/* Property stats */}
      <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
        <div className="flex items-center space-x-1">
          <Eye className="w-3 h-3" />
          <span>{property.views || 0} views</span>
        </div>
        <div className="flex items-center space-x-1">
          <Star className="w-3 h-3 text-yellow-500 fill-current" />
          <span>4.8 rating</span>
        </div>
      </div>
      
      {/* Action buttons */}
      <div className="flex items-center space-x-2">
        <button
          onClick={handleFavorite}
          className={`
            w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200
            ${isFavorited 
              ? 'bg-red-500 text-white hover:bg-red-600' 
              : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-red-100 dark:hover:bg-red-900/20 hover:text-red-600'
            }
          `}
          title={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
        </button>
        
        <button
          onClick={handleShare}
          className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/20 hover:text-blue-600 transition-all duration-200"
          title="Share property"
        >
          <Share2 className="w-4 h-4" />
        </button>
        
        <button
          onClick={handleContact}
          className="w-8 h-8 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-all duration-200"
          title="Contact agent"
        >
          <Phone className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
} 