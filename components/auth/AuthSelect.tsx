'use client';

interface AuthSelectProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Array<{ value: string; label: string }>;
  className?: string;
}

export default function AuthSelect({ name, value, onChange, options, className = '' }: AuthSelectProps) {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${className}`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value} className="bg-white dark:bg-gray-800">
          {option.label}
        </option>
      ))}
    </select>
  );
} 