export default function PaymentIntegrationsView({ user }: { user: any }) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Payment Integrations</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-xl border border-blue-200 dark:border-blue-700">
          <div className="font-semibold mb-2">PayStack</div>
          <div className="text-sm mb-2">Online payment processing</div>
          <button className="px-3 py-1 bg-blue-600 text-white rounded">Setup</button>
        </div>
        <div className="p-4 bg-yellow-50 dark:bg-yellow-900 rounded-xl border border-yellow-200 dark:border-yellow-700">
          <div className="font-semibold mb-2">MTN MoMo</div>
          <div className="text-sm mb-2">Mobile money payment collection</div>
          <button className="px-3 py-1 bg-yellow-500 text-white rounded">Setup</button>
        </div>
        <div className="p-4 bg-green-50 dark:bg-green-900 rounded-xl border border-green-200 dark:border-green-700">
          <div className="font-semibold mb-2">Bank Transfer</div>
          <div className="text-sm mb-2">Direct bank payment handling</div>
          <button className="px-3 py-1 bg-green-600 text-white rounded">Setup</button>
        </div>
      </div>
    </div>
  );
} 