'use client';

import { MessageCircle } from 'lucide-react';

interface HelpHeaderProps {
  onLiveChat?: () => void;
}

export default function HelpHeader({ onLiveChat }: HelpHeaderProps) {
  return (
    <div className="bg-blue-500 rounded-2xl p-6 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-blue-400"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400 rounded-full translate-y-12 -translate-x-12"></div>
      
      <div className="relative flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold mb-2 text-white">
            Help & Support
          </h1>
          <p className="text-blue-100">
            Find answers and get assistance with your platform
          </p>
        </div>
        <button 
          onClick={onLiveChat}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-400 rounded-xl hover:bg-blue-300 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-blue-300"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="font-medium">Live Chat</span>
        </button>
      </div>
    </div>
  );
}