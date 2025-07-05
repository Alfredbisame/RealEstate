'use client';

import { Plus } from 'lucide-react';

interface ProjectsHeaderProps {
  onNewProject?: () => void;
}

export default function ProjectsHeader({ onNewProject }: ProjectsHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-2xl p-6 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
      
      <div className="relative flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
            Project Management
          </h1>
          <p className="opacity-90 text-blue-50">
            Track construction projects and manage resources
          </p>
        </div>
        <button 
          onClick={onNewProject}
          className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all duration-300 hover:scale-105 border border-white/30"
        >
          <Plus className="w-5 h-5" />
          <span>New Project</span>
        </button>
      </div>
    </div>
  );
} 