'use client';

import NotificationStats from './NotificationStats';
import SearchAndFilter from './SearchAndFilter';
import NotificationsList from './NotificationsList';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: string;
  time: string;
  read: boolean;
  category: string;
}

interface NotificationsContentProps {
  notifications: Notification[];
  searchTerm: string;
  filter: string;
  onSearchChange: (term: string) => void;
  onFilterChange: (filter: string) => void;
  onMarkAllRead: () => void;
  onClearAll: () => void;
  onMarkRead?: (notificationId: string) => void;
  onDelete?: (notificationId: string) => void;
}

export default function NotificationsContent({
  notifications,
  searchTerm,
  filter,
  onSearchChange,
  onFilterChange,
  onMarkAllRead,
  onClearAll,
  onMarkRead,
  onDelete
}: NotificationsContentProps) {
  return (
    <div className="space-y-6">
      <NotificationStats notifications={notifications} />
      <SearchAndFilter
        searchTerm={searchTerm}
        filter={filter}
        onSearchChange={onSearchChange}
        onFilterChange={onFilterChange}
        onMarkAllRead={onMarkAllRead}
        onClearAll={onClearAll}
      />
      <NotificationsList
        notifications={notifications}
        onMarkRead={onMarkRead}
        onDelete={onDelete}
      />
    </div>
  );
} 