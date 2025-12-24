# Project Timeline Widget

The Project Timeline widget displays an overview of project milestones for the Project Manager, including key dates, status, and progress tracking for estate development projects.

## Features

- Shows key project milestones with dates and status
- Displays milestone status with color-coded badges and icons
- Provides quick overview of project timeline
- Responsive design for all screen sizes

## Usage

```tsx
import ProjectTimelineWidget from './widgets/project-timeline';

<ProjectTimelineWidget 
  milestones={milestonesData}
  className="w-full h-80"
/>
```

## Props

- `milestones`: Array of milestone objects with id, title, description, dates, status, progress, assignee, and priority
- `className`: Additional CSS classes to apply to the widget

## Structure

- `ProjectTimelineWidget.tsx`: Main component that composes the header and content
- `ProjectTimelineHeader.tsx`: Header section with title and view all button
- `ProjectTimelineContent.tsx`: Main content area with milestone list
- `index.ts`: Export file for easy importing
- `README.md`: Documentation file