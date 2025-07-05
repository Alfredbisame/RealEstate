'use client';

interface AuthFooterProps {
  isSignUp: boolean;
  onToggleMode: () => void;
  className?: string;
}

export default function AuthFooter({ isSignUp, onToggleMode, className = '' }: AuthFooterProps) {
  return (
    <div className={className}>
      <div className="text-center">
        <p className="text-gray-600 dark:text-gray-400">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}
          <button
            onClick={onToggleMode}
            className="ml-2 text-green-600 hover:text-green-700 font-semibold transition-colors"
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </div>

      {/* Demo Credentials */}
      {/* <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800 hover:shadow-md transition-all">
        <p className="text-sm text-blue-800 dark:text-blue-300 font-medium mb-2">Demo Credentials:</p>
        <p className="text-xs text-blue-700 dark:text-blue-400">
          Email: demo@ghana-re.com<br />
          Password: demo123
        </p>
      </div> */}
    </div>
  );
} 