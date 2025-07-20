export default function AuditTrailDetailsModal({ audit, open, onClose }) {
  if (!open || !audit) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white dark:bg-gray-900 rounded-xl p-8 w-full max-w-md shadow-lg relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <h3 className="text-xl font-bold mb-4">Audit Trail Details</h3>
        <div className="space-y-2">
          <div><span className="font-semibold">Action:</span> {audit.action}</div>
          <div><span className="font-semibold">User:</span> {audit.user}</div>
          <div><span className="font-semibold">Timestamp:</span> {audit.timestamp}</div>
          <div><span className="font-semibold">Details:</span> {audit.details}</div>
        </div>
      </div>
    </div>
  );
} 