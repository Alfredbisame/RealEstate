'use client';

import { useState } from 'react';
import { 
  Briefcase, Calendar, DollarSign, Users, 
  Plus, Filter, Clock, CheckCircle, AlertTriangle 
} from 'lucide-react';
import ProjectTimeline from '../widgets/ProjectTimeline';

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

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'on track': return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'behind schedule': return <AlertTriangle className="w-5 h-5 text-red-600" />;
      case 'ahead of schedule': return <Clock className="w-5 h-5 text-blue-600" />;
      default: return <Clock className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'on track': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'behind schedule': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'ahead of schedule': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Project Management</h1>
            <p className="opacity-90">Track construction projects and manage resources</p>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-colors">
            <Plus className="w-5 h-5" />
            <span>New Project</span>
          </button>
        </div>
      </div>

      {/* Project Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{projects.length}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Active Projects</p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">GHS 2.7M</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Budget</p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">38</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Team Members</p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">65%</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Avg Progress</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <div className="flex items-center space-x-4">
          <Filter className="w-5 h-5 text-gray-500" />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Projects</option>
            <option value="on-track">On Track</option>
            <option value="behind-schedule">Behind Schedule</option>
            <option value="ahead-of-schedule">Ahead of Schedule</option>
          </select>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.name}</h3>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                    {getStatusIcon(project.status)}
                    <span className="ml-1">{project.status}</span>
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div>
                    <span className="font-medium">Client:</span> {project.client}
                  </div>
                  <div>
                    <span className="font-medium">Budget:</span> {project.budget}
                  </div>
                  <div>
                    <span className="font-medium">Team:</span> {project.team} members
                  </div>
                  <div>
                    <span className="font-medium">Phase:</span> {project.phase}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600 dark:text-gray-400">Progress</span>
                  <span className="font-medium text-gray-900 dark:text-white">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Start Date</p>
                  <p className="font-medium text-gray-900 dark:text-white">{new Date(project.startDate).toLocaleDateString()}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Deadline</p>
                  <p className="font-medium text-gray-900 dark:text-white">{new Date(project.deadline).toLocaleDateString()}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Spent</p>
                  <p className="font-medium text-gray-900 dark:text-white">{project.spent}</p>
                </div>
              </div>

              <div className="flex space-x-3">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  View Details
                </button>
                <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  Edit Project
                </button>
                <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  Generate Report
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}