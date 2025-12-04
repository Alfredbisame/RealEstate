'use client';

import { Eye, Shield } from 'lucide-react';

interface AuditorHeaderProps {
  accessType?: string;
  complianceStatus?: string;
}

export default function AuditorHeader({
  accessType = "View Only Access",
  complianceStatus = "GRA Compliant"
}: AuditorHeaderProps) {
  return (
    <div className="bg-blue-500 rounded-xl p-6 text-white shadow-lg">
      <h1 className="text-2xl font-bold mb-2">Auditor Dashboard</h1>
      <p className="text-white text-lg">Read-only access to all system data</p>

      <div className="flex items-center space-x-6 mt-4">
        <div className="flex items-center space-x-2 bg-white bg-opacity-10 rounded-lg px-3 py-2">
          <Eye className="w-5 h-5" />
          <span className="text-sm font-medium">{accessType}</span>
        </div>
        <div className="flex items-center space-x-2 bg-white bg-opacity-10 rounded-lg px-3 py-2">
          <Shield className="w-5 h-5" />
          <span className="text-sm font-medium">{complianceStatus}</span>
        </div>
      </div>
    </div>
  );
} 