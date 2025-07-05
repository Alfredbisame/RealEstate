'use client';

import { Calendar, Users } from 'lucide-react';

interface ProjectManagerHeaderProps {
  activeProjects?: string;
  workersOnSite?: string;
}

export default function ProjectManagerHeader({ 
  activeProjects = "12 Active Projects",
  workersOnSite = "48 Workers On Site"
}: ProjectManagerHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-6 text-white shadow-lg">
      <h1 className="text-2xl font-bold mb-2">Project Manager Dashboard</h1>
      <p className="opacity-90 text-lg">Construction projects and resource management</p>
      
      <div className="flex items-center space-x-6 mt-4">
        <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
          <Calendar className="w-5 h-5" />
          <span className="text-sm font-medium">{activeProjects}</span>
        </div>
        <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
          <Users className="w-5 h-5" />
          <span className="text-sm font-medium">{workersOnSite}</span>
        </div>
      </div>
    </div>
  );
} 