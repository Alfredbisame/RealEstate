'use client';

import { useState } from 'react';
import ProjectsHeader from './projects/ProjectsHeader';
import ProjectStats from './projects/ProjectStats';
import ProjectFilter from './projects/ProjectFilter';
import ProjectsList from './projects/ProjectsList';

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  avatar?: string;
}

interface ProjectsTabProps {
  user: User;
}

export default function ProjectsTab({ user }: ProjectsTabProps) {
  const [filterStatus, setFilterStatus] = useState('all');

  const projects = [
    {
      id: '1',
      name: 'East Legon Residential Complex',
      progress: 65,
      deadline: '2024-08-15',
      status: 'On Track',
      budget: 'GHS 850,000',
      spent: 'GHS 552,500',
      client: 'Kwame Properties Ltd',
      startDate: '2024-01-15',
      team: 12,
      phase: 'Construction'
    },
    {
      id: '2',
      name: 'Kumasi Shopping Center',
      progress: 45,
      deadline: '2024-10-30',
      status: 'Behind Schedule',
      budget: 'GHS 1,200,000',
      spent: 'GHS 540,000',
      client: 'Ashanti Development Corp',
      startDate: '2023-11-20',
      team: 18,
      phase: 'Foundation'
    },
    {
      id: '3',
      name: 'Tema Industrial Warehouse',
      progress: 85,
      deadline: '2024-06-20',
      status: 'Ahead of Schedule',
      budget: 'GHS 650,000',
      spent: 'GHS 552,500',
      client: 'Tema Industries',
      startDate: '2023-12-01',
      team: 8,
      phase: 'Finishing'
    }
  ];

  const filteredProjects = projects.filter(project => {
    if (filterStatus === 'all') return true;
    return project.status.toLowerCase().replace(' ', '-') === filterStatus;
  });

  const handleNewProject = () => {
    // TODO: Implement new project functionality
    console.log('Create new project');
  };

  const handleViewDetails = (projectId: string) => {
    // TODO: Implement view project details
    console.log('View project details:', projectId);
  };

  const handleEditProject = (projectId: string) => {
    // TODO: Implement edit project functionality
    console.log('Edit project:', projectId);
  };

  const handleGenerateReport = (projectId: string) => {
    // TODO: Implement generate report functionality
    console.log('Generate report for project:', projectId);
  };

  return (
    <div className="space-y-6">
      <ProjectsHeader onNewProject={handleNewProject} />
      <ProjectStats projects={projects} />
      <ProjectFilter 
        filterStatus={filterStatus} 
        onFilterChange={setFilterStatus} 
      />
      <ProjectsList
        projects={filteredProjects}
        onViewDetails={handleViewDetails}
        onEditProject={handleEditProject}
        onGenerateReport={handleGenerateReport}
      />
    </div>
  );
}