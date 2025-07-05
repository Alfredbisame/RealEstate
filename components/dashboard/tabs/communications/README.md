# Communications Components

This directory contains the refactored communications components for the Ghana Real Estate dashboard. The components have been broken down into smaller, more manageable pieces while maintaining all existing functionality and styling.

## Components Overview

### Main Component
- **`CommunicationsTab.tsx`** - The main communications tab that orchestrates all other components

### UI Components
- **`CommunicationsHeader.tsx`** - Header with gradient background, title, and new message button
- **`CommunicationStats.tsx`** - Statistics cards for communication metrics
- **`MessageCard.tsx`** - Reusable card component for individual messages
- **`QuickReply.tsx`** - Quick reply input component
- **`ContactCard.tsx`** - Reusable card component for individual contacts
- **`EmptyState.tsx`** - Reusable empty state component

### Feature Components
- **`MessagesView.tsx`** - Complete messages view with search and quick reply
- **`ContactsView.tsx`** - Complete contacts view with action buttons
- **`CommunicationsTabs.tsx`** - Tab navigation and content switching

## Usage

### Basic Usage
```tsx
import CommunicationsTab from '@/components/dashboard/tabs/CommunicationsTab';

function Dashboard() {
  const user = {
    id: '1',
    email: 'user@example.com',
    name: 'John Doe',
    role: 'property-owner'
  };

  return <CommunicationsTab user={user} />;
}
```

### Individual Components
```tsx
import { 
  CommunicationsHeader, 
  CommunicationStats, 
  MessagesView,
  ContactsView,
  CommunicationsTabs 
} from '@/components/dashboard/tabs/communications';

// Use individual components as needed
```

## Features

### ✅ Maintained Functionality
- Communication statistics overview
- Message management with search
- Contact management with actions
- Quick reply functionality
- Tab navigation (Messages, Contacts, Call Log, Notifications)
- Responsive design
- Dark mode support

### 🎨 UI/UX Enhancements
- Improved hover effects and transitions
- Better visual feedback on interactions
- Enhanced accessibility
- Consistent spacing and typography
- Smooth animations and micro-interactions
- Keyboard navigation support

### 🔧 Developer Benefits
- **Modularity**: Each component has a single responsibility
- **Reusability**: Components can be used independently
- **Maintainability**: Easier to update and debug
- **Type Safety**: Full TypeScript support
- **Consistency**: Standardized props and styling

## Component Props

### CommunicationsHeader
```tsx
interface CommunicationsHeaderProps {
  onNewMessage?: () => void;
  className?: string;
}
```

### CommunicationStats
```tsx
interface CommunicationStatsProps {
  className?: string;
}
```

### MessageCard
```tsx
interface Message {
  id: string;
  sender: string;
  subject: string;
  preview: string;
  time: string;
  unread: boolean;
  type: 'project' | 'financial' | 'logistics';
}

interface MessageCardProps {
  message: Message;
  onClick?: (message: Message) => void;
  className?: string;
}
```

### ContactCard
```tsx
interface Contact {
  id: string;
  name: string;
  role: string;
  phone: string;
  email: string;
  status: 'online' | 'offline';
}

interface ContactCardProps {
  contact: Contact;
  onCall?: (contact: Contact) => void;
  onEmail?: (contact: Contact) => void;
  onMessage?: (contact: Contact) => void;
  className?: string;
}
```

### QuickReply
```tsx
interface QuickReplyProps {
  onSend?: (message: string) => void;
  className?: string;
}
```

### CommunicationsTabs
```tsx
interface CommunicationsTabsProps {
  activeView: string;
  onViewChange: (view: string) => void;
  messages: Message[];
  contacts: Contact[];
  onMessageClick?: (message: Message) => void;
  onSendMessage?: (message: string) => void;
  onCall?: (contact: Contact) => void;
  onEmail?: (contact: Contact) => void;
  onMessage?: (contact: Contact) => void;
  className?: string;
}
```

## Data Structure

### Message Data
```tsx
const messages = [
  {
    id: '1',
    sender: 'Kwame Asante',
    subject: 'Project Update - East Legon',
    preview: 'The foundation work has been completed ahead of schedule...',
    time: '2 hours ago',
    unread: true,
    type: 'project'
  },
  // ...
];
```

### Contact Data
```tsx
const contacts = [
  {
    id: '1',
    name: 'Kwame Asante',
    role: 'Site Supervisor',
    phone: '+233 24 123 4567',
    email: 'kwame@company.com',
    status: 'online'
  },
  // ...
];
```

### Stats Data
```tsx
const stats = [
  {
    icon: Mail,
    value: '24',
    label: 'Unread Messages',
    color: 'blue'
  },
  // ...
];
```

## Styling

All components use Tailwind CSS with:
- Consistent color scheme (blue/purple/green gradient)
- Responsive design patterns
- Dark mode support
- Glassmorphism effects
- Smooth transitions and animations
- Hover effects and micro-interactions

## File Structure
```
components/dashboard/tabs/communications/
├── index.ts                 # Export all components
├── CommunicationsHeader.tsx # Header component
├── CommunicationStats.tsx   # Statistics component
├── MessageCard.tsx          # Message card component
├── QuickReply.tsx           # Quick reply component
├── MessagesView.tsx         # Messages view component
├── ContactCard.tsx          # Contact card component
├── ContactsView.tsx         # Contacts view component
├── EmptyState.tsx           # Empty state component
├── CommunicationsTabs.tsx   # Tabs component
└── README.md               # This documentation
```

## Integration

The communications components integrate with:
- **Lucide React** - For icons
- **Tailwind CSS** - For styling
- **React Hooks** - For state management

## Performance

- Components are optimized for performance
- Efficient re-rendering with proper prop handling
- Minimal bundle size impact
- Lazy loading support for large lists

## Accessibility

- Proper ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader friendly
- High contrast support 