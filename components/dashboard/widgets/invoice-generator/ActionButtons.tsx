'use client';

import { Download, Send, CheckCircle } from 'lucide-react';

interface ActionButtonsProps {
  onDownload?: () => void;
  onSend?: () => void;
  isGenerating?: boolean;
  isSending?: boolean;
  className?: string;
}

export default function ActionButtons({ 
  onDownload, 
  onSend, 
  isGenerating = false,
  isSending = false,
  className = "" 
}: ActionButtonsProps) {
  return (
    <div className={`flex space-x-3 ${className}`}>
      <button 
        onClick={onDownload}
        disabled={isGenerating}
        className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 disabled:bg-orange-400 disabled:cursor-not-allowed transition-all duration-200 font-medium hover:scale-105 disabled:hover:scale-100"
      >
        {isGenerating ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Generating...</span>
          </>
        ) : (
          <>
            <Download size={18} />
            <span>Download PDF</span>
          </>
        )}
      </button>
      
      <button 
        onClick={onSend}
        disabled={isSending}
        className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-all duration-200 font-medium hover:scale-105 disabled:hover:scale-100"
      >
        {isSending ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send size={18} />
            <span>Send Invoice</span>
          </>
        )}
      </button>
    </div>
  );
} 