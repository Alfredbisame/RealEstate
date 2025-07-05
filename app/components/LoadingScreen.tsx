'use client';

import { Building2, Loader2 } from 'lucide-react';

interface LoadingScreenProps {
  message?: string;
  className?: string;
}

export default function LoadingScreen({ 
  message = "Loading Ghana Real Estate...", 
  className = "" 
}: LoadingScreenProps) {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center ${className}`}>
      <div className="flex flex-col items-center space-y-6 p-8">
        {/* Logo/Brand Section */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="relative">
            <Building2 className="w-8 h-8 text-green-600 dark:text-green-400" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Ghana Real Estate
          </h1>
        </div>
        
        {/* Loading Spinner */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-green-200 dark:border-green-800 rounded-full animate-pulse"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
        
        {/* Loading Message */}
        <div className="text-center space-y-2">
          <p className="text-gray-600 dark:text-gray-400 font-medium text-lg">{message}</p>
          <div className="flex items-center justify-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
        
        {/* Loading Progress Bar */}
        <div className="w-64 bg-gray-200 dark:bg-gray-700 rounded-full h-1 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
} 