'use client';

import { Target, Award } from 'lucide-react';

interface SalesAgentHeaderProps {
  monthlyTarget?: string;
  performanceStatus?: string;
}

export default function SalesAgentHeader({
  monthlyTarget = "85%",
  performanceStatus = "Top Performer"
}: SalesAgentHeaderProps) {
  return (
    <div className="bg-blue-500 rounded-xl p-6 text-white shadow-lg">
      <h1 className="text-2xl font-bold mb-2">Sales Agent Dashboard</h1>
      <p className="text-white text-lg">Lead management and property sales</p>

      <div className="flex items-center space-x-6 mt-4">
        <div className="flex items-center space-x-2 bg-white bg-opacity-10 rounded-lg px-3 py-2">
          <Target className="w-5 h-5" />
          <span className="text-sm font-medium">Monthly Target: {monthlyTarget}</span>
        </div>
        <div className="flex items-center space-x-2 bg-white bg-opacity-10 rounded-lg px-3 py-2">
          <Award className="w-5 h-5" />
          <span className="text-sm font-medium">{performanceStatus}</span>
        </div>
      </div>
    </div>
  );
} 