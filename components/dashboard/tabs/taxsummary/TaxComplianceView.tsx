export default function TaxComplianceView() {
  return (
    <div className="p-6 bg-white/80 dark:bg-gray-700/80 rounded-xl border border-gray-200/50 dark:border-gray-600/50 text-center">
      <h4 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">Tax Compliance & Filing</h4>
      <div className="mb-4">
        <span className="inline-block bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full font-medium text-sm">Status: Compliant</span>
      </div>
      <div className="mb-2">
        <span className="text-gray-700 dark:text-gray-200 font-medium">Next Filing Date:</span>
        <span className="ml-2 text-gray-900 dark:text-white">2024-07-31</span>
      </div>
      <p className="text-gray-500 dark:text-gray-300 mt-4">Detailed compliance analytics and filing history will appear here in future updates.</p>
    </div>
  );
} 