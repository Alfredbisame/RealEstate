'use client';

interface AuthDividerProps {
  text?: string;
  className?: string;
}

export default function AuthDivider({ text = 'Or continue with email', className = '' }: AuthDividerProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
          {text}
        </span>
      </div>
    </div>
  );
} 