'use client';

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

export default function MessageCard({ message, onClick, className = '' }: MessageCardProps) {
  const typeColors = {
    project: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    financial: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    logistics: 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300'
  };

  return (
    <div 
      onClick={() => onClick?.(message)}
      className={`flex items-start space-x-4 p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg border border-gray-200/50 dark:border-gray-600/50 hover:shadow-md transition-all cursor-pointer hover:scale-[1.01] ${className}`}
    >
      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-semibold">
        {message.sender.charAt(0)}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <h3 className={`font-medium ${message.unread ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
            {message.sender}
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">{message.time}</span>
        </div>
        <p className={`font-medium mb-1 ${message.unread ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
          {message.subject}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{message.preview}</p>
        <div className="flex items-center justify-between mt-2">
          <span className={`px-2 py-1 text-xs rounded-full ${typeColors[message.type]}`}>
            {message.type}
          </span>
          {message.unread && (
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          )}
        </div>
      </div>
    </div>
  );
} 