'use client';

import { Plus } from 'lucide-react';

interface ProjectsHeaderProps {
  onNewProject?: () => void;
}

export default function ProjectsHeader({ onNewProject }: ProjectsHeaderProps) {
  return (
    <div className="bg-blue-500 rounded-2xl p-6 text-white relative overflow-hidden">
      <div className="relative flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold mb-2 text-white">
            Project Management
          </h1>
          <p className="text-blue-100">
            Track construction projects and manage resources
          </p>
        </div>
        <button 
          onClick={onNewProject}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-400 rounded-xl hover:bg-blue-300 transition-all duration-300 hover:scale-105 border border-blue-300"
        >
          <Plus className="w-5 h-5" />
          <span>New Project</span>
        </button>
      </div>
    </div>
  );
}