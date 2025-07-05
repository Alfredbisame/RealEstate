# Worker Attendance Component

A comprehensive, modular React component for managing and displaying worker attendance in real estate construction projects. This component provides real-time attendance tracking, status management, and alert systems with enhanced UI/UX.

## Features

### 🎯 Core Functionality
- **Real-time Attendance Tracking**: Monitor worker check-ins, status, and time tracking
- **Status Management**: Present, Late, Absent status with visual indicators
- **Multi-site Support**: Track workers across different construction sites
- **Role-based Organization**: Organize workers by their roles and departments
- **Alert System**: Automated alerts for late arrivals, absences, and overtime

### 🎨 UI/UX Enhancements
- **Modern Design**: Clean, professional interface with dark mode support
- **Interactive Elements**: Hover effects, animations, and smooth transitions
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Visual Feedback**: Color-coded status indicators and progress bars

### 📊 Data Management
- **Search & Filter**: Advanced filtering by status, site, role, and name
- **Sorting Options**: Sort by name, role, site, check-in time, or status
- **Statistics Dashboard**: Real-time attendance metrics and trends
- **Export Capabilities**: Ready for data export and reporting

## Component Structure

```
worker-attendance/
├── WorkerAttendance.tsx          # Main component wrapper
├── AttendanceContent.tsx         # Main orchestration component
├── AttendanceHeader.tsx          # Header with title and refresh
├── AttendanceSummary.tsx         # Statistics cards
├── WorkerCard.tsx               # Individual worker display
├── WorkerList.tsx               # List with search and filters
├── AttendanceAlerts.tsx         # Alert notifications
├── types.ts                     # TypeScript type definitions
├── utils.ts                     # Utility functions
├── mockData.ts                  # Sample data
├── index.ts                     # Component exports
└── README.md                    # This file
```

## Usage

### Basic Usage

```tsx
import { WorkerAttendance } from '@/components/dashboard/widgets/worker-attendance';

function Dashboard() {
  return (
    <WorkerAttendance />
  );
}
```

### Advanced Usage

```tsx
import { WorkerAttendance } from '@/components/dashboard/widgets/worker-attendance';

function Dashboard() {
  const handleWorkerClick = (worker) => {
    console.log('Worker clicked:', worker);
  };

  const handleStatusChange = (workerId, newStatus) => {
    console.log('Status changed:', workerId, newStatus);
  };

  return (
    <WorkerAttendance
      showDetails={true}
      showActions={true}
      maxWorkers={20}
      onWorkerClick={handleWorkerClick}
      onStatusChange={handleStatusChange}
      className="custom-styles"
    />
  );
}
```

### Using Individual Components

```tsx
import { 
  AttendanceContent, 
  AttendanceSummary, 
  WorkerList 
} from '@/components/dashboard/widgets/worker-attendance';

function CustomAttendance() {
  return (
    <div>
      <AttendanceSummary stats={attendanceStats} />
      <WorkerList workers={workers} showDetails={true} />
    </div>
  );
}
```

## Props

### WorkerAttendanceProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `workers` | `Worker[]` | `mockWorkers` | Array of worker data |
| `showDetails` | `boolean` | `false` | Show detailed worker information |
| `showActions` | `boolean` | `false` | Show action buttons for status changes |
| `maxWorkers` | `number` | `undefined` | Maximum number of workers to display |
| `className` | `string` | `''` | Additional CSS classes |
| `onWorkerClick` | `(worker: Worker) => void` | `undefined` | Callback when worker is clicked |
| `onStatusChange` | `(workerId: string, status: Worker['status']) => void` | `undefined` | Callback when status changes |

### Worker Interface

```typescript
interface Worker {
  id: string;
  name: string;
  role: string;
  status: 'present' | 'absent' | 'late';
  checkIn: string;
  site: string;
  avatar?: string;
  phone?: string;
  email?: string;
  department?: string;
  shift?: 'morning' | 'afternoon' | 'night';
  lastCheckIn?: string;
  totalHours?: number;
  overtime?: number;
}
```

## Styling

### CSS Classes

The component uses Tailwind CSS classes and can be customized:

```css
/* Custom styles for worker cards */
.worker-card {
  @apply transition-all duration-200 hover:shadow-lg;
}

/* Custom status colors */
.status-present {
  @apply bg-green-100 text-green-800;
}

.status-late {
  @apply bg-orange-100 text-orange-800;
}

.status-absent {
  @apply bg-red-100 text-red-800;
}
```

### Dark Mode

The component automatically supports dark mode with appropriate color schemes:

```css
/* Dark mode overrides */
.dark .worker-card {
  @apply bg-gray-800 border-gray-700;
}

.dark .status-present {
  @apply bg-green-900/20 text-green-300;
}
```

## Utilities

### Status Management

```typescript
import { getStatusColor, getStatusLabel, getStatusIcon } from './utils';

// Get color scheme for status
const colors = getStatusColor('present');

// Get human-readable label
const label = getStatusLabel('late'); // "Late"

// Get icon name
const icon = getStatusIcon('absent'); // "UserX"
```

### Data Processing

```typescript
import { calculateAttendanceStats, filterWorkers, sortWorkers } from './utils';

// Calculate attendance statistics
const stats = calculateAttendanceStats(workers);

// Filter workers by criteria
const filtered = filterWorkers(workers, {
  status: ['present'],
  site: ['East Wing'],
  role: ['Mason']
});

// Sort workers
const sorted = sortWorkers(workers, 'name', 'asc');
```

## Accessibility

### ARIA Labels

- Proper labels for interactive elements
- Screen reader friendly status announcements
- Keyboard navigation support

### Keyboard Navigation

- Tab navigation through all interactive elements
- Enter/Space to activate buttons
- Escape to close dropdowns

### Color Contrast

- WCAG AA compliant color ratios
- Status indicators use both color and icons
- High contrast mode support

## Performance

### Optimization Features

- **Memoized Components**: React.memo for expensive renders
- **Virtual Scrolling**: Ready for large worker lists
- **Lazy Loading**: Images and heavy content
- **Debounced Search**: Optimized search performance

### Bundle Size

- Tree-shakable exports
- Modular component structure
- Minimal dependencies

## Domain-Specific Features

### Construction Industry

- **Site-based Organization**: Workers organized by construction sites
- **Role Management**: Construction-specific roles (Mason, Electrician, etc.)
- **Shift Tracking**: Morning, afternoon, night shift support
- **Overtime Monitoring**: Automatic overtime detection and alerts

### Real Estate Management

- **Multi-project Support**: Track workers across multiple properties
- **Department Organization**: Construction, Electrical, Plumbing, etc.
- **Compliance Tracking**: Attendance records for regulatory compliance
- **Reporting Integration**: Ready for management reporting

## Future Enhancements

### Planned Features

- **GPS Tracking**: Real-time location tracking
- **Biometric Integration**: Fingerprint/face recognition
- **Mobile App**: Native mobile attendance app
- **API Integration**: Real-time data synchronization
- **Advanced Analytics**: Predictive attendance patterns
- **Notification System**: SMS/email alerts
- **Time Sheet Integration**: Automatic time sheet generation
- **Payroll Integration**: Direct payroll system connection

### Customization Options

- **Custom Themes**: Brand-specific color schemes
- **Plugin System**: Extensible functionality
- **Multi-language**: Internationalization support
- **Custom Fields**: Dynamic worker attributes
- **Workflow Integration**: Custom approval workflows

## Contributing

1. Follow the existing code structure
2. Add proper TypeScript types
3. Include accessibility features
4. Add comprehensive tests
5. Update documentation

## License

This component is part of the Real Estate Management System and follows the project's licensing terms. 