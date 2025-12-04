'use client';

import { Users, Shield } from 'lucide-react';

interface SiteSupervisorHeaderProps {
  workersPresent?: string;
  safetyPriority?: string;
}

export default function SiteSupervisorHeader({
  workersPresent = "42 Workers Present",
  safetyPriority = "Safety First Priority"
}: SiteSupervisorHeaderProps) {
  return (
    <div className="bg-blue-500 rounded-xl p-6 text-white shadow-lg">
      <h1 className="text-2xl font-bold mb-2">Site Supervisor Dashboard</h1>
      <p className="text-white text-lg">Field operations and worker management</p>

      <div className="flex items-center space-x-6 mt-4">
        <div className="flex items-center space-x-2 bg-white bg-opacity-10 rounded-lg px-3 py-2">
          <Users className="w-5 h-5" />
          <span className="text-sm font-medium">{workersPresent}</span>
        </div>
        <div className="flex items-center space-x-2 bg-white bg-opacity-10 rounded-lg px-3 py-2">
          <Shield className="w-5 h-5" />
          <span className="text-sm font-medium">{safetyPriority}</span>
        </div>
      </div>
    </div>
  );
} 