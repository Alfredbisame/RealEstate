const deliveries = [
  { id: 1, material: 'Cement', location: 'Site A', date: '2024-07-01', status: 'Scheduled' },
  { id: 2, material: 'Steel', location: 'Site B', date: '2024-07-02', status: 'In Transit' },
  { id: 3, material: 'Bricks', location: 'Site C', date: '2024-07-03', status: 'Delivered' },
];

export default function DeliveryScheduleView({ user }: { user: any }) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Delivery Schedule</h3>
      <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Material</th>
            <th className="px-4 py-2 text-left">Location</th>
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map(delivery => (
            <tr key={delivery.id} className="border-t border-gray-200 dark:border-gray-700">
              <td className="px-4 py-2">{delivery.material}</td>
              <td className="px-4 py-2">{delivery.location}</td>
              <td className="px-4 py-2">{delivery.date}</td>
              <td className="px-4 py-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${delivery.status === 'Delivered' ? 'bg-green-200 text-green-800' : delivery.status === 'In Transit' ? 'bg-yellow-200 text-yellow-800' : 'bg-blue-200 text-blue-800'}`}>{delivery.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 