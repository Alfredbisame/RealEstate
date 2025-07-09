const maintenance = [
  { id: 1, name: 'Excavator', next: '2024-07-20', status: 'Scheduled' },
  { id: 2, name: 'Concrete Mixer', next: '2024-07-18', status: 'Completed' },
  { id: 3, name: 'Scaffolding', next: '2024-07-25', status: 'Scheduled' },
];

export default function MaintenanceScheduleView({ user }: { user: any }) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Maintenance Schedule</h3>
      <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Equipment</th>
            <th className="px-4 py-2 text-left">Next Maintenance</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {maintenance.map(item => (
            <tr key={item.id} className="border-t border-gray-200 dark:border-gray-700">
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2">{item.next}</td>
              <td className="px-4 py-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${item.status === 'Completed' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>{item.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 