import { Settings } from 'lucide-react';

interface HeaderSettingsProps {
  onSettingsClick: () => void;
}

export default function HeaderSettings({ onSettingsClick }: HeaderSettingsProps) {
  return (
    <button
      onClick={onSettingsClick}
      className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
    >
      <Settings size={20} />
    </button>
  );
} 