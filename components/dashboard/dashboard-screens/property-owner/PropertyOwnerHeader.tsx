'use client';

import { Calculator, FileText } from 'lucide-react';

interface PropertyOwnerHeaderProps {
  exchangeRate?: string;
  lastUpdated?: string;
}

export default function PropertyOwnerHeader({ 
  exchangeRate = "12.45",
  lastUpdated = "Today, 2:30 PM"
}: PropertyOwnerHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-6 text-white shadow-lg">
      <h1 className="text-3xl font-bold mb-2">Property Owner Dashboard</h1>
      <p className="opacity-90 text-lg">Comprehensive overview of your real estate portfolio</p>
      
      <div className="flex items-center space-x-6 mt-4">
        <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
          <Calculator className="w-5 h-5" />
          <span className="text-sm font-medium">GHS/USD: {exchangeRate}</span>
        </div>
        <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
          <FileText className="w-5 h-5" />
          <span className="text-sm font-medium">Last Updated: {lastUpdated}</span>
        </div>
      </div>
    </div>
  );
} 