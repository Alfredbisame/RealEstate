import { Sun, Moon } from 'lucide-react';

interface HeaderThemeToggleProps {
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

export default function HeaderThemeToggle({ isDarkMode, onThemeToggle }: HeaderThemeToggleProps) {
  return (
    <button
      onClick={onThemeToggle}
      className="p-2.5 rounded-xl bg-gray-100/80 dark:bg-gray-700/80 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all backdrop-blur-sm"
    >
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
} 