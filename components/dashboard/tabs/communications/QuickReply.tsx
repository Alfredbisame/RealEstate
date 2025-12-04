'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

interface QuickReplyProps {
  onSend?: (message: string) => void;
  className?: string;
}

export default function QuickReply({ onSend, className = '' }: QuickReplyProps) {
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim()) {
      onSend?.(newMessage);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={`bg-gray-50 dark:bg-gray-700 rounded-lg p-4 ${className}`}>
      <h3 className="font-medium text-gray-900 dark:text-white mb-3">Quick Reply</h3>
      <div className="flex space-x-3">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button 
          onClick={handleSend}
          disabled={!newMessage.trim()}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}