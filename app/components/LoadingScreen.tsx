'use client';

import { Building2 } from 'lucide-react';
import { useTheme } from './useTheme';

interface LoadingScreenProps {
  message?: string;
  className?: string;
}

export default function LoadingScreen({ 
  message = "Loading Ghana Real Estate...", 
  className = "" 
}: LoadingScreenProps) {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-red-600' : 'bg-red-500'} flex items-center justify-center ${className}`}>
      <div className="flex flex-col items-center space-y-6 p-8">
        {/* Logo/Brand Section */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="relative">
            <Building2 className="w-8 h-8 text-white" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
          <h1 className="text-2xl font-bold text-white">
            Ghana Real Estate
          </h1>
        </div>
        
        {/* Loading Spinner */}
        <div className="relative">
          <div className={`w-16 h-16 border-4 ${isDarkMode ? 'border-white/80' : 'border-white'} rounded-full animate-pulse`}></div>
          <div className={`absolute inset-0 w-16 h-16 border-4 ${isDarkMode ? 'border-white/80' : 'border-white'} border-t-transparent rounded-full animate-spin`}></div>
        </div>
        
        {/* Loading Message */}
        <div className="text-center space-y-2">
          <p className="text-white font-medium text-lg">{message}</p>
          <div className="flex items-center justify-center space-x-1">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
        
        {/* Loading Progress Bar */}
        <div className={`w-64 ${isDarkMode ? 'bg-white/30' : 'bg-white/20'} rounded-full h-1 overflow-hidden`}>
          <div className={`h-full ${isDarkMode ? 'bg-white/90' : 'bg-white'} rounded-full animate-pulse`}></div>
        </div>
      </div>
    </div>
  );
} 