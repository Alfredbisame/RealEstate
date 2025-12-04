export default function SidebarFooter() {
  return (
    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-center space-x-1 mb-2">
        <div className="w-6 h-2 bg-red-500 rounded-sm"></div>
        <div className="w-6 h-2 bg-yellow-500 rounded-sm"></div>
        <div className="w-6 h-2 bg-green-500 rounded-sm"></div>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
        Proudly Ghanaian 🇬🇭
      </p>
      <p className="text-xs text-gray-400 dark:text-gray-500 text-center mt-1">
        Version: {process.env.NEXT_PUBLIC_APP_VERSION || '0.0.1'}
      </p>
      <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
        © {new Date().getFullYear()} RealEstate Pro. All rights reserved.
      </p>
    </div>
  );
} 