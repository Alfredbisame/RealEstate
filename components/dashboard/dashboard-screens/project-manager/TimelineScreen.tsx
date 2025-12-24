'use client';

import { useState } from 'react';
import TimelineHeader from './TimelineHeader';
import TimelineContent from './TimelineContent';
import TimelineStats from './TimelineStats';
import { UserRole } from '@/types/roles';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

interface ProjectMilestone {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: 'planned' | 'in-progress' | 'completed' | 'delayed';
  progress: number;
  assignee: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
}

export default function TimelineScreen({ user }: { user: User }) {
  const [milestones, setMilestones] = useState<ProjectMilestone[]>([
    {
      id: '1',
      title: 'Site Preparation',
      description: 'Clearing and grading the construction site',
      startDate: '2023-06-01',
      endDate: '2023-07-15',
      status: 'completed',
      progress: 100,
      assignee: 'John Smith',
      priority: 'high'
    },
    {
      id: '2',
      title: 'Foundation Work',
      description: 'Laying the foundation for the building',
      startDate: '2023-07-16',
      endDate: '2023-08-30',
      status: 'completed',
      progress: 100,
      assignee: 'Mike Johnson',
      priority: 'critical'
    },
    {
      id: '3',
      title: 'Framing',
      description: 'Constructing the building frame',
      startDate: '2023-09-01',
      endDate: '2023-10-15',
      status: 'in-progress',
      progress: 65,
      assignee: 'Robert Davis',
      priority: 'high'
    },
    {
      id: '4',
      title: 'Electrical & Plumbing',
      description: 'Installing electrical and plumbing systems',
      startDate: '2023-10-16',
      endDate: '2023-11-30',
      status: 'in-progress',
      progress: 30,
      assignee: 'Sarah Williams',
      priority: 'medium'
    },
    {
      id: '5',
      title: 'Finishing Work',
      description: 'Interior finishing and painting',
      startDate: '2023-12-01',
      endDate: '2024-01-15',
      status: 'planned',
      progress: 0,
      assignee: 'Emma Thompson',
      priority: 'medium'
    },
    {
      id: '6',
      title: 'Final Inspection',
      description: 'Final inspection and handover',
      startDate: '2024-01-16',
      endDate: '2024-01-31',
      status: 'planned',
      progress: 0,
      assignee: 'David Wilson',
      priority: 'high'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterPriority, setFilterPriority] = useState<string>('all');

  const filteredMilestones = milestones.filter(milestone => {
    const matchesSearch = milestone.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          milestone.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || milestone.status === filterStatus;
    const matchesPriority = filterPriority === 'all' || milestone.priority === filterPriority;
    
    return matchesSearch && matchesStatus && matchesPriority;
  });

  return (
    <div className="space-y-6">
      <TimelineHeader 
        user={user} 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        filterPriority={filterPriority}
        setFilterPriority={setFilterPriority}
      />
      <TimelineStats milestones={milestones} />
      <TimelineContent milestones={filteredMilestones} />
    </div>
  );
}