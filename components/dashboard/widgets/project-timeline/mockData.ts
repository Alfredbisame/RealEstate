import { Project } from './types';

export const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Residential Complex Phase 1',
    progress: 85,
    deadline: '2024-03-15',
    status: 'on track',
    budget: 'GHS 2,500,000',
    spent: 'GHS 1,850,000',
    description: 'Construction of 50-unit residential complex',
    priority: 'high',
    team: ['John Smith', 'Sarah Johnson', 'Mike Wilson'],
    milestones: [
      { id: '1', name: 'Foundation Complete', date: '2024-01-15', completed: true },
      { id: '2', name: 'Structure Complete', date: '2024-02-15', completed: true },
      { id: '3', name: 'Interior Finishing', date: '2024-03-01', completed: false },
      { id: '4', name: 'Final Inspection', date: '2024-03-15', completed: false }
    ]
  },
  {
    id: '2',
    name: 'Commercial Office Building',
    progress: 45,
    deadline: '2024-05-20',
    status: 'behind schedule',
    budget: 'GHS 3,200,000',
    spent: 'GHS 1,440,000',
    description: '10-story office building in business district',
    priority: 'critical',
    team: ['David Brown', 'Lisa Chen', 'Robert Davis'],
    milestones: [
      { id: '1', name: 'Site Preparation', date: '2024-01-01', completed: true },
      { id: '2', name: 'Foundation Work', date: '2024-02-01', completed: true },
      { id: '3', name: 'Structural Framework', date: '2024-04-01', completed: false },
      { id: '4', name: 'Exterior Finishing', date: '2024-05-01', completed: false }
    ]
  },
  {
    id: '3',
    name: 'Shopping Mall Renovation',
    progress: 92,
    deadline: '2024-02-28',
    status: 'ahead of schedule',
    budget: 'GHS 1,800,000',
    spent: 'GHS 1,656,000',
    description: 'Complete renovation of existing shopping mall',
    priority: 'medium',
    team: ['Emma Wilson', 'James Taylor', 'Maria Garcia'],
    milestones: [
      { id: '1', name: 'Demolition Complete', date: '2024-01-10', completed: true },
      { id: '2', name: 'Structural Repairs', date: '2024-01-25', completed: true },
      { id: '3', name: 'Interior Design', date: '2024-02-15', completed: true },
      { id: '4', name: 'Final Touches', date: '2024-02-28', completed: false }
    ]
  },
  {
    id: '4',
    name: 'Hotel Extension Project',
    progress: 30,
    deadline: '2024-06-30',
    status: 'behind schedule',
    budget: 'GHS 4,500,000',
    spent: 'GHS 1,350,000',
    description: 'Adding 100 new rooms to existing hotel',
    priority: 'high',
    team: ['Alex Thompson', 'Rachel Green', 'Tom Anderson'],
    milestones: [
      { id: '1', name: 'Planning Approval', date: '2024-01-15', completed: true },
      { id: '2', name: 'Foundation Complete', date: '2024-03-01', completed: false },
      { id: '3', name: 'Structure Complete', date: '2024-05-01', completed: false },
      { id: '4', name: 'Interior Finishing', date: '2024-06-15', completed: false }
    ]
  },
  {
    id: '5',
    name: 'Apartment Complex Phase 2',
    progress: 100,
    deadline: '2024-01-31',
    status: 'completed',
    budget: 'GHS 1,900,000',
    spent: 'GHS 1,900,000',
    description: 'Second phase of apartment development',
    priority: 'low',
    team: ['Chris Lee', 'Amanda White', 'Kevin Black'],
    milestones: [
      { id: '1', name: 'Foundation Complete', date: '2023-11-15', completed: true },
      { id: '2', name: 'Structure Complete', date: '2023-12-15', completed: true },
      { id: '3', name: 'Interior Finishing', date: '2024-01-15', completed: true },
      { id: '4', name: 'Final Inspection', date: '2024-01-31', completed: true }
    ]
  }
];

export const sampleMilestones = [
  { id: '1', name: 'Foundation Complete', date: '2024-01-15', completed: true, description: 'All foundation work completed and inspected' },
  { id: '2', name: 'Structure Complete', date: '2024-02-15', completed: true, description: 'Main structural framework erected' },
  { id: '3', name: 'Interior Finishing', date: '2024-03-01', completed: false, description: 'Interior walls, flooring, and fixtures' },
  { id: '4', name: 'Final Inspection', date: '2024-03-15', completed: false, description: 'Final safety and quality inspection' }
]; 