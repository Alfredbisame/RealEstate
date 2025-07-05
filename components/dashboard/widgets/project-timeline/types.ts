export interface Project {
  id: string;
  name: string;
  progress: number;
  deadline: string;
  status: 'on track' | 'behind schedule' | 'ahead of schedule' | 'completed' | 'delayed';
  budget: string;
  spent: string;
  description?: string;
  priority?: 'low' | 'medium' | 'high' | 'critical';
  team?: string[];
  milestones?: Milestone[];
}

export interface Milestone {
  id: string;
  name: string;
  date: string;
  completed: boolean;
  description?: string;
}

export interface ProjectTimelineProps {
  projects: Project[];
  className?: string;
  maxHeight?: string;
  showBudget?: boolean;
  showProgress?: boolean;
}

export interface TimelineHeaderProps {
  title?: string;
  totalProjects?: number;
  className?: string;
}

export interface ProjectCardProps {
  project: Project;
  className?: string;
  showBudget?: boolean;
  showProgress?: boolean;
  onClick?: (project: Project) => void;
}

export interface ProjectHeaderProps {
  project: Project;
  className?: string;
}

export interface ProjectStatusProps {
  status: Project['status'];
  className?: string;
}

export interface ProjectProgressProps {
  progress: number;
  className?: string;
  showPercentage?: boolean;
}

export interface ProjectBudgetProps {
  budget: string;
  spent: string;
  className?: string;
}

export interface TimelineListProps {
  projects: Project[];
  className?: string;
  maxHeight?: string;
  showBudget?: boolean;
  showProgress?: boolean;
  onProjectClick?: (project: Project) => void;
}

export interface ProjectStats {
  totalProjects: number;
  onTrack: number;
  behindSchedule: number;
  aheadOfSchedule: number;
  completed: number;
  averageProgress: number;
  totalBudget: number;
  totalSpent: number;
}

export interface TimelineFilters {
  status?: Project['status'];
  priority?: Project['priority'];
  dateRange?: {
    start: string;
    end: string;
  };
}

export interface ProjectPriority {
  level: 'low' | 'medium' | 'high' | 'critical';
  color: string;
  bgColor: string;
  textColor: string;
} 