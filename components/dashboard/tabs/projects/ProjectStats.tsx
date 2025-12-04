'use client';

import { Briefcase, DollarSign, Users, Calendar } from 'lucide-react';

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

interface StatCardProps {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  color: string;
  bgColor: string;
  iconColor: string;
}

function StatCard({ icon: Icon, value, label, color, bgColor, iconColor }: StatCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
      <div className="flex items-center space-x-3">
        <div className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {value}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
        </div>
      </div>
    </div>
  );
}

interface ProjectStatsProps {
  projects: Project[];
}

export default function ProjectStats({ projects }: ProjectStatsProps) {
  const stats = [
    {
      icon: Briefcase,
      value: projects.length.toString(),
      label: 'Active Projects',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900',
      iconColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: DollarSign,
      value: 'GHS 2.7M',
      label: 'Total Budget',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-800',
      iconColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: Users,
      value: projects.reduce((sum, p) => sum + p.team, 0).toString(),
      label: 'Team Members',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900',
      iconColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: Calendar,
      value: `${Math.round(projects.reduce((sum, p) => sum + p.progress, 0) / projects.length)}%`,
      label: 'Avg Progress',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900',
      iconColor: 'text-blue-600 dark:text-blue-400'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
} 