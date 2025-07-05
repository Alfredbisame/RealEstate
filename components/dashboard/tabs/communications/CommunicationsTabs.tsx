'use client';

import { Mail, Users, Phone, Bell } from 'lucide-react';
import MessagesView from './MessagesView';
import ContactsView from './ContactsView';
import EmptyState from './EmptyState';

interface Message {
  id: string;
  sender: string;
  subject: string;
  preview: string;
  time: string;
  unread: boolean;
  type: 'project' | 'financial' | 'logistics';
}

interface Contact {
  id: string;
  name: string;
  role: string;
  phone: string;
  email: string;
  status: 'online' | 'offline';
}

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

export default function CommunicationsTabs({
  activeView,
  onViewChange,
  messages,
  contacts,
  onMessageClick,
  onSendMessage,
  onCall,
  onEmail,
  onMessage,
  className = ''
}: CommunicationsTabsProps) {
  const tabs = [
    { id: 'messages', label: 'Messages', icon: Mail },
    { id: 'contacts', label: 'Contacts', icon: Users },
    { id: 'calls', label: 'Call Log', icon: Phone },
    { id: 'notifications', label: 'Notifications', icon: Bell }
  ];

  const renderContent = () => {
    switch (activeView) {
      case 'messages':
        return (
          <MessagesView
            messages={messages}
            onMessageClick={onMessageClick}
            onSendMessage={onSendMessage}
          />
        );
      case 'contacts':
        return (
          <ContactsView
            contacts={contacts}
            onCall={onCall}
            onEmail={onEmail}
            onMessage={onMessage}
          />
        );
      case 'calls':
        return (
          <EmptyState
            icon={Phone}
            title="Call Log"
            description="Your call history will appear here"
          />
        );
      case 'notifications':
        return (
          <EmptyState
            icon={Bell}
            title="Notifications"
            description="Communication notifications will appear here"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 ${className}`}>
      <div className="flex border-b border-gray-200/50 dark:border-gray-700/50">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onViewChange(tab.id)}
            className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors ${
              activeView === tab.id
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            <tab.icon size={20} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="p-6">
        {renderContent()}
      </div>
    </div>
  );
} 