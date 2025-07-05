# Notifications Tab Components

This directory contains modular components for the Notifications tab in the Real Estate dashboard. The components are designed to manage and display various types of notifications and alerts with comprehensive filtering and management capabilities.

## Components Overview

### Core Components

#### `NotificationsHeader`
- **Purpose**: Displays the main header with title, description, unread count, and notification bell
- **Features**: 
  - Gradient background with decorative elements
  - Unread count badge with backdrop blur
  - Interactive notification bell button
  - Responsive design with smooth animations
- **Props**: `unreadCount: number`

#### `NotificationStats`
- **Purpose**: Shows key notification metrics in a grid layout
- **Features**:
  - Four stat cards: Total Notifications, Unread, Success, Alerts
  - Hover animations and scale effects
  - Color-coded icons and backgrounds
  - Real-time statistics calculation
- **Props**: `notifications: Notification[]`

#### `NavigationTabs`
- **Purpose**: Provides navigation between notifications and push settings views
- **Features**:
  - Tab-based navigation with icons
  - Active state indicators with background highlighting
  - Smooth hover animations and transitions
- **Props**: 
  - `activeView: string`
  - `onViewChange: (viewId: string) => void`

#### `SearchAndFilter`
- **Purpose**: Provides search functionality and filtering options for notifications
- **Features**:
  - Search input with icon
  - Dropdown filter with multiple options
  - Action buttons (Mark All Read, Clear All)
  - Responsive layout with hover effects
- **Props**:
  - `searchTerm: string`
  - `filter: string`
  - `onSearchChange: (term: string) => void`
  - `onFilterChange: (filter: string) => void`
  - `onMarkAllRead: () => void`
  - `onClearAll: () => void`

#### `NotificationCard`
- **Purpose**: Individual notification display card
- **Features**:
  - Type-based styling and icons
  - Read/unread state indicators
  - Interactive buttons (Mark Read, Delete)
  - Hover effects and animations
  - Category badges and timestamps
- **Props**:
  - `notification: Notification`
  - `onMarkRead?: (notificationId: string) => void`
  - `onDelete?: (notificationId: string) => void`

#### `NotificationsList`
- **Purpose**: Container for displaying notification cards
- **Features**:
  - Responsive list layout
  - Empty state handling with helpful messaging
  - Integration with individual notification cards
- **Props**:
  - `notifications: Notification[]`
  - Event handlers for card actions

#### `NotificationsContent`
- **Purpose**: Combines all notification-related components
- **Features**:
  - Unified layout for notifications view
  - Proper component composition
  - Consistent spacing and organization
- **Props**: All props from child components

## Notification Types

### Status Types
- `success`: Successful operations and positive updates
- `warning`: Cautionary messages and alerts
- `error`: Error messages and critical alerts
- `info`: Informational messages and updates

### Categories
- **Project**: Project-related notifications
- **Payment**: Financial and payment notifications
- **Logistics**: Material and delivery notifications
- **Safety**: Safety incident notifications
- **Finance**: Invoice and financial notifications
- **HR**: Employee and HR-related notifications

## Styling & Design

### Design System
- **Backdrop Blur**: Consistent use of backdrop blur effects
- **Gradients**: Blue to purple to pink gradient theme
- **Hover Effects**: Scale, shadow, and color transitions
- **Color Coding**: Type-based color schemes
- **Responsive**: Mobile-first responsive design

### Accessibility
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Color Contrast**: WCAG compliant color combinations
- **Focus Indicators**: Clear focus states for all interactive elements
- **Animation Control**: Respects user's motion preferences

## Performance Optimizations

### Component Structure
- **Modular Design**: Each component has a single responsibility
- **Memoization**: Components can be memoized for performance
- **Lazy Loading**: Notification cards can be lazy loaded
- **Event Delegation**: Efficient event handling

### Bundle Optimization
- **Tree Shaking**: Only import used components
- **Code Splitting**: Components can be code-split
- **Dynamic Imports**: Heavy components can be dynamically imported

## Usage Examples

### Basic Notifications Tab
```tsx
import NotificationsTab from './NotificationsTab';

<NotificationsTab user={currentUser} />
```

### Individual Components
```tsx
import { NotificationsHeader, NotificationStats } from './notifications';

<NotificationsHeader unreadCount={5} />
<NotificationStats notifications={notificationsList} />
```

### Custom Notification Card
```tsx
import { NotificationCard } from './notifications';

<NotificationCard
  notification={notificationData}
  onMarkRead={(id) => handleMarkRead(id)}
  onDelete={(id) => handleDelete(id)}
/>
```

## Notification Data Structure

```typescript
interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'warning' | 'error' | 'info';
  time: string;
  read: boolean;
  category: string;
}
```

## Event Handling

### Mark All Read
```typescript
const handleMarkAllRead = () => {
  // Update all notifications to read status
  console.log('Mark all notifications as read');
};
```

### Clear All
```typescript
const handleClearAll = () => {
  // Remove all notifications
  console.log('Clear all notifications');
};
```

### Mark Single Read
```typescript
const handleMarkRead = (notificationId: string) => {
  // Mark specific notification as read
  console.log('Mark notification as read:', notificationId);
};
```

### Delete Notification
```typescript
const handleDelete = (notificationId: string) => {
  // Delete specific notification
  console.log('Delete notification:', notificationId);
};
```

## Filtering and Search

### Search Functionality
- **Text Search**: Searches through title and message content
- **Case Insensitive**: Search is not case-sensitive
- **Real-time**: Updates results as user types

### Filter Options
- **All Notifications**: Shows all notifications
- **Unread**: Shows only unread notifications
- **Type Filters**: Success, Warning, Error, Info
- **Category Filters**: Project, Payment, Safety, HR, etc.

## Push Notifications Integration

### Mobile Integration
- **NotificationManager**: Integrates with mobile notification system
- **Push Settings**: Configurable push notification preferences
- **Real-time Updates**: Live notification updates

### Settings Management
- **Permission Handling**: Browser notification permissions
- **Sound Settings**: Audio notification preferences
- **Schedule Management**: Do not disturb settings

## Future Enhancements

### Planned Features
- **Real-time Notifications**: WebSocket integration for live updates
- **Notification Groups**: Group similar notifications
- **Smart Filtering**: AI-powered notification prioritization
- **Notification History**: Extended notification history
- **Export Functionality**: Export notifications to various formats

### Technical Improvements
- **Offline Support**: Offline notification management
- **Push Notifications**: Browser push notification support
- **Notification Sounds**: Custom notification sounds
- **Rich Notifications**: Rich media in notifications
- **Notification Templates**: Predefined notification templates

## Testing

### Unit Tests
- Component rendering tests
- Props validation tests
- Event handler tests
- Accessibility tests

### Integration Tests
- User interaction flows
- Search and filter functionality
- Notification management operations
- Error handling tests

### Visual Regression Tests
- Component visual consistency
- Responsive design tests
- Dark mode compatibility
- Animation smoothness

## Contributing

When adding new notification types:
1. Follow the existing component structure
2. Add proper TypeScript types
3. Include accessibility features
4. Add comprehensive tests
5. Update documentation
6. Consider mobile responsiveness

## Dependencies

- **React**: Core framework
- **Lucide React**: Icons
- **Tailwind CSS**: Styling
- **TypeScript**: Type safety
- **NotificationManager**: Mobile notification integration 