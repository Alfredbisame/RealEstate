export default function ContactsHeader() {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Contacts</h3>
        <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium">
          View All
        </button>
      </div>
    </div>
  );
}