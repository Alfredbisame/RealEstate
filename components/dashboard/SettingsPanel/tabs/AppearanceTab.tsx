const themes = [
  { id: 'light', name: 'Light Theme', preview: 'bg-white border-gray-200' },
  { id: 'dark', name: 'Dark Theme', preview: 'bg-gray-800 border-gray-600' },
  { id: 'ghana', name: 'Ghana Theme', preview: 'bg-gradient-to-r from-red-500 via-yellow-500 to-green-500' },
  { id: 'kente', name: 'Kente Theme', preview: 'bg-gradient-to-r from-orange-500 via-purple-500 to-green-500' },
];

export default function AppearanceTab() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium text-gray-900 dark:text-white mb-3">Theme Selection</h3>
        <div className="grid grid-cols-2 gap-3">
          {themes.map((theme) => (
            <button
              key={theme.id}
              className="flex flex-col items-center space-y-2 p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <div className={`w-12 h-8 rounded border ${theme.preview}`} />
              <span className="text-sm text-gray-700 dark:text-gray-300">{theme.name}</span>
            </button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-medium text-gray-900 dark:text-white mb-3">Color Customization</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700 dark:text-gray-300">Primary Color</span>
            <div className="w-8 h-8 bg-green-500 rounded border cursor-pointer" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700 dark:text-gray-300">Secondary Color</span>
            <div className="w-8 h-8 bg-blue-500 rounded border cursor-pointer" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700 dark:text-gray-300">Accent Color</span>
            <div className="w-8 h-8 bg-orange-500 rounded border cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
} 