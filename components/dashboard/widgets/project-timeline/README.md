# Project Timeline Components

A comprehensive set of React components for displaying and managing project timelines in real estate and construction projects.

## Overview

The Project Timeline provides a visual representation of project progress, deadlines, budgets, and status. It's designed for project managers, site supervisors, and stakeholders to track project milestones and performance.

## Features

- **Visual Timeline**: Clear project cards with progress indicators
- **Status Tracking**: Real-time status updates with color coding
- **Budget Monitoring**: Budget vs spent tracking with visual indicators
- **Deadline Management**: Smart deadline formatting and overdue alerts
- **Priority Levels**: Visual priority indicators for critical projects
- **Team Overview**: Quick team member preview
- **Milestone Tracking**: Progress through project milestones
- **Responsive Design**: Works on desktop and mobile devices
- **Dark Mode Support**: Full dark mode compatibility
- **Accessibility**: ARIA labels and keyboard navigation

## Components

### Main Components

- **ProjectTimeline**: Main orchestrator component
- **TimelineHeader**: Header with title and project count
- **TimelineContent**: Content container with project list

### Project Components

- **ProjectCard**: Individual project display card
- **ProjectHeader**: Project title, status, and metadata
- **ProjectStatus**: Status indicator with icons
- **ProjectProgress**: Progress bar with percentage
- **ProjectBudget**: Budget and spending information

### List Components

- **TimelineList**: Scrollable list of project cards

## Usage

### Basic Usage

```tsx
import { ProjectTimeline } from './project-timeline';

function Dashboard() {
  const projects = [
    {
      id: '1',
      name: 'Residential Complex Phase 1',
      progress: 85,
      deadline: '2024-03-15',
      status: 'on track',
      budget: 'GHS 2,500,000',
      spent: 'GHS 1,850,000'
    }
  ];

  return (
    <div className="h-full">
      <ProjectTimeline projects={projects} />
    </div>
  );
}
```

### With Custom Configuration

```tsx
import { ProjectTimeline } from './project-timeline';

function Dashboard() {
  return (
    <div className="h-full">
      <ProjectTimeline 
        projects={projects}
        maxHeight="max-h-96"
        showBudget={true}
        showProgress={true}
      />
    </div>
  );
}
```

### Individual Components

```tsx
import { 
  TimelineHeader, 
  TimelineList, 
  ProjectCard 
} from './project-timeline';

function CustomTimeline() {
  return (
    <div className="space-y-4">
      <TimelineHeader title="My Projects" totalProjects={projects.length} />
      <TimelineList 
        projects={projects}
        onProjectClick={(project) => console.log('Clicked:', project)}
      />
    </div>
  );
}
```

## Types

### Project
```tsx
interface Project {
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
```

### Milestone
```tsx
interface Milestone {
  id: string;
  name: string;
  date: string;
  completed: boolean;
  description?: string;
}
```

## Utilities

### Status Functions

- `getStatusIcon(status)`: Get appropriate icon for project status
- `getStatusColor(status)`: Get color class for status
- `getStatusBgColor(status)`: Get background color for status

### Progress Functions

- `getProgressColor(progress)`: Get color based on progress percentage
- `getProgressLabel(progress)`: Get human-readable progress label

### Date Functions

- `formatDate(dateString)`: Format deadline with smart text
- `getDaysUntilDeadline(deadline)`: Calculate days until deadline
- `isOverdue(deadline)`: Check if project is overdue
- `isDueSoon(deadline)`: Check if project is due soon

### Priority Functions

- `getPriorityConfig(priority)`: Get priority styling configuration
- `getPriorityIcon(priority)`: Get priority indicator icon

### Analysis Functions

- `calculateProjectStats(projects)`: Calculate overall project statistics
- `sortProjects(projects, sortBy)`: Sort projects by various criteria
- `filterProjects(projects, filters)`: Filter projects by status/priority
- `getProjectEfficiency(project)`: Calculate project efficiency score

## Styling

### Status Colors

- **Green**: On track, completed
- **Blue**: Ahead of schedule
- **Orange**: Delayed
- **Red**: Behind schedule

### Priority Colors

- **Critical**: Red with high visibility
- **High**: Orange with medium visibility
- **Medium**: Yellow with standard visibility
- **Low**: Green with subtle visibility

### Progress Colors

- **80%+**: Green (Excellent)
- **50-79%**: Blue (Good)
- **25-49%**: Orange (Fair)
- **<25%**: Red (Poor)

## Accessibility

- All interactive elements have proper ARIA labels
- Keyboard navigation support for project cards
- Screen reader friendly status messages
- High contrast mode support
- Focus indicators for all clickable elements

## Performance

- Virtualized scrolling for large project lists
- Efficient re-renders with proper memoization
- Lazy loading of project details
- Optimized animations and transitions

## Domain-Specific Features

### Real Estate Context

- **GHS Currency**: All amounts in Ghanaian Cedi
- **Construction Projects**: Focus on building and renovation projects
- **Project Phases**: Support for multi-phase developments
- **Team Management**: Construction team member tracking

### Project Management

- **Milestone Tracking**: Construction milestone management
- **Budget Monitoring**: Cost control and budget tracking
- **Deadline Management**: Construction timeline management
- **Status Reporting**: Real-time project status updates

## Error Handling

- Graceful handling of missing project data
- Fallback displays for invalid dates or amounts
- Empty state handling for no projects
- Input validation for project data

## Testing

### Mock Data

```tsx
import { mockProjects, sampleMilestones } from './project-timeline/mockData';

// Use mock data for testing
const testProjects = mockProjects;
const testMilestones = sampleMilestones;
```

### Test Scenarios

- Project status changes
- Progress updates
- Budget calculations
- Deadline formatting
- Priority sorting
- Responsive design testing
- Accessibility testing

## Future Enhancements

- **Interactive Timeline**: Drag-and-drop project reordering
- **Gantt Chart View**: Detailed project timeline visualization
- **Resource Allocation**: Team member workload tracking
- **Risk Assessment**: Automatic risk level calculation
- **Integration**: Connect with project management tools
- **Notifications**: Deadline and milestone alerts
- **Reporting**: Export project timeline reports
- **Collaboration**: Real-time team collaboration features 