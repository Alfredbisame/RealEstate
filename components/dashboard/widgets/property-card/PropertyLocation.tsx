'use client';

import { MapPin, Navigation, Clock } from 'lucide-react';
import { PropertyLocationProps } from './types';

export default function PropertyLocation({ 
  location, 
  className = "",
  showDistance = false,
  distance 
}: PropertyLocationProps) {
  return (
    <div className={`flex items-center space-x-1.5 text-sm text-gray-500 dark:text-gray-400 ${className}`}>
      <div className="flex items-center space-x-1">
        <MapPin className="w-4 h-4 text-blue-500 dark:text-blue-400" />
        <span className="font-medium text-gray-700 dark:text-gray-300">{location}</span>
      </div>
      
      {showDistance && distance && (
        <div className="flex items-center space-x-1 text-xs text-gray-400 dark:text-gray-500">
          <Navigation className="w-3 h-3" />
          <span>{distance} from center</span>
        </div>
      )}
      
      {/* Location type indicator */}
      <div className="flex items-center space-x-1 text-xs">
        <Clock className="w-3 h-3 text-green-500" />
        <span className="text-green-600 dark:text-green-400 font-medium">Prime Location</span>
      </div>
    </div>
  );
} 