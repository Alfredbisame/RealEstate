'use client';

import { Star, Phone, Mail } from 'lucide-react';
import { PropertyAgentProps } from './types';

export default function PropertyAgent({ 
  agent, 
  className = "",
  showContact = false 
}: PropertyAgentProps) {
  return (
    <div className={`flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg ${className}`}>
      <div className="relative">
        <img 
          src={agent.avatar} 
          alt={agent.name}
          className="w-10 h-10 rounded-full object-cover border-2 border-white dark:border-gray-700"
        />
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-700" />
      </div>
      
      <div className="flex-1 min-w-0">
        <h5 className="font-medium text-gray-900 dark:text-white truncate">
          {agent.name}
        </h5>
        <div className="flex items-center space-x-1">
          <Star className="w-3 h-3 text-yellow-500 fill-current" />
          <span className="text-xs text-gray-600 dark:text-gray-400">
            {agent.rating} rating
          </span>
        </div>
      </div>
      
      {showContact && (
        <div className="flex space-x-1">
          <button className="w-8 h-8 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-colors duration-200">
            <Phone className="w-3 h-3" />
          </button>
          <button className="w-8 h-8 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white transition-colors duration-200">
            <Mail className="w-3 h-3" />
          </button>
        </div>
      )}
    </div>
  );
} 