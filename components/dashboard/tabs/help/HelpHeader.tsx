'use client';

import { MessageCircle } from 'lucide-react';

interface HelpHeaderProps {
  onLiveChat?: () => void;
}

export default function HelpHeader({ onLiveChat }: HelpHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-2xl p-6 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
      
      <div className="relative flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-100">
            Help & Support
          </h1>
          <p className="opacity-90 text-purple-50">
            Find answers and get assistance with your platform
          </p>
        </div>
        <button 
          onClick={onLiveChat}
          className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-white/30"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="font-medium">Live Chat</span>
        </button>
      </div>
    </div>
  );
} 