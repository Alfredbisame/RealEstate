'use client';

import { Search } from 'lucide-react';
import MessageCard from './MessageCard';
import QuickReply from './QuickReply';

interface Message {
  id: string;
  sender: string;
  subject: string;
  preview: string;
  time: string;
  unread: boolean;
  type: 'project' | 'financial' | 'logistics';
}

interface MessagesViewProps {
  messages: Message[];
  onMessageClick?: (message: Message) => void;
  onSendMessage?: (message: string) => void;
  className?: string;
}

export default function MessagesView({ messages, onMessageClick, onSendMessage, className = '' }: MessagesViewProps) {
  return (
    <div className={`space-y-6 ${className}`}>
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search messages..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Messages List */}
      <div className="space-y-4">
        {messages.map((message) => (
          <MessageCard
            key={message.id}
            message={message}
            onClick={onMessageClick}
          />
        ))}
      </div>

      {/* Quick Reply */}
      <QuickReply onSend={onSendMessage} />
    </div>
  );
} 