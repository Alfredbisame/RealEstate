'use client';

import { Briefcase } from 'lucide-react';
import ProjectCard from './ProjectCard';

interface Project {
  id: string;
  name: string;
  progress: number;
  deadline: string;
  status: string;
  budget: string;
  spent: string;
  client: string;
  startDate: string;
  team: number;
  phase: string;
}

interface ProjectsListProps {
  projects: Project[];
  onViewDetails?: (projectId: string) => void;
  onEditProject?: (projectId: string) => void;
  onGenerateReport?: (projectId: string) => void;
}

export default function ProjectsList({ projects, onViewDetails, onEditProject, onGenerateReport }: ProjectsListProps) {
  return (
    <div className="space-y-6">
      {projects.length === 0 ? (
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-12 border border-gray-200/50 dark:border-gray-700/50 text-center">
          <Briefcase className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No projects found</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try adjusting your filter criteria or create a new project
          </p>
        </div>
      ) : (
        projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onViewDetails={onViewDetails}
            onEditProject={onEditProject}
            onGenerateReport={onGenerateReport}
          />
        ))
      )}
    </div>
  );
} 