'use client';

import { useState } from 'react';
import CommunicationsHeader from './communications/CommunicationsHeader';
import CommunicationStats from './communications/CommunicationStats';
import CommunicationsTabs from './communications/CommunicationsTabs';

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  avatar?: string;
}

interface CommunicationsTabProps {
  user: User;
}

export default function CommunicationsTab({ user }: CommunicationsTabProps) {
  const [activeView, setActiveView] = useState('messages');

  const messages = [
    {
      id: '1',
      sender: 'Kwame Asante',
      subject: 'Project Update - East Legon',
      preview: 'The foundation work has been completed ahead of schedule...',
      time: '2 hours ago',
      unread: true,
      type: 'project' as const
    },
    {
      id: '2',
      sender: 'Ama Osei',
      subject: 'Invoice Payment Received',
      preview: 'Payment of GHS 45,200 has been received from client...',
      time: '4 hours ago',
      unread: true,
      type: 'financial' as const
    },
    {
      id: '3',
      sender: 'John Mensah',
      subject: 'Material Delivery Schedule',
      preview: 'The cement delivery is scheduled for tomorrow morning...',
      time: '1 day ago',
      unread: false,
      type: 'logistics' as const
    }
  ];

  const contacts = [
    {
      id: '1',
      name: 'Kwame Asante',
      role: 'Site Supervisor',
      phone: '+233 24 123 4567',
      email: 'kwame@company.com',
      status: 'online' as const
    },
    {
      id: '2',
      name: 'Ama Osei',
      role: 'Accountant',
      phone: '+233 20 987 6543',
      email: 'ama@company.com',
      status: 'offline' as const
    },
    {
      id: '3',
      name: 'John Mensah',
      role: 'Project Manager',
      phone: '+233 26 555 7890',
      email: 'john@company.com',
      status: 'online' as const
    }
  ];

  const handleNewMessage = () => {
    // Handle new message creation
    console.log('Create new message');
  };

  const handleMessageClick = (message: any) => {
    // Handle message click
    console.log('Message clicked:', message);
  };

  const handleSendMessage = (message: string) => {
    // Handle sending message
    console.log('Sending message:', message);
  };

  const handleCall = (contact: any) => {
    // Handle call action
    console.log('Calling:', contact);
  };

  const handleEmail = (contact: any) => {
    // Handle email action
    console.log('Emailing:', contact);
  };

  const handleContactMessage = (contact: any) => {
    // Handle contact message action
    console.log('Messaging:', contact);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <CommunicationsHeader onNewMessage={handleNewMessage} />

      {/* Communication Stats */}
      <CommunicationStats />

      {/* Navigation Tabs */}
      <CommunicationsTabs
        activeView={activeView}
        onViewChange={setActiveView}
        messages={messages}
        contacts={contacts}
        onMessageClick={handleMessageClick}
        onSendMessage={handleSendMessage}
        onCall={handleCall}
        onEmail={handleEmail}
        onMessage={handleContactMessage}
      />
    </div>
  );
}