'use client';

import { Send } from 'lucide-react';

interface CommunicationsHeaderProps {
  onNewMessage?: () => void;
  className?: string;
}

export default function CommunicationsHeader({ onNewMessage, className = '' }: CommunicationsHeaderProps) {
  return (
    <div className={`bg-blue-500 rounded-2xl p-6 text-white ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Communications</h1>
          <p className="text-blue-100">Stay connected with your team and clients</p>
        </div>
        <button 
          onClick={onNewMessage}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-400 rounded-xl hover:bg-blue-300 transition-colors hover:scale-105"
        >
          <Send className="w-5 h-5" />
          <span>New Message</span>
        </button>
      </div>
    </div>
  );
}