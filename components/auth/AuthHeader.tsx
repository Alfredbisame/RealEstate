'use client';

import Image from 'next/image';

interface AuthHeaderProps {
  isSignUp: boolean;
  className?: string;
}

export default function AuthHeader({ isSignUp, className = '' }: AuthHeaderProps) {
  return (
    <div className={className}>
      {/* Mobile Logo */}
      <div className="lg:hidden flex items-center justify-center space-x-3 mb-8">
        <div className="w-12 h-12 bg-blue-500 rounded-md flex items-center justify-center overflow-hidden p-1">
          <Image
            src="/logo.webp"
            alt="Ghana Real Estate Logo"
            width={48}
            height={48}
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-xl font-bold text-blue-500">
            Ghana Real Estate
          </h1>
        </div>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {isSignUp ? 'Create Account' : 'Welcome Back'}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          {isSignUp
            ? 'Join Ghana\'s leading real estate platform'
            : 'Sign in to your dashboard'
          }
        </p>
      </div>
    </div>
  );
} 