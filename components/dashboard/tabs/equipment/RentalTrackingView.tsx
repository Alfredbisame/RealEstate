const rentals = [
  { id: 1, name: 'Excavator', type: 'Heavy', period: '2024-07-01 to 2024-07-10', cost: 8000, status: 'Active' },
  { id: 2, name: 'Concrete Mixer', type: 'Medium', period: '2024-07-03 to 2024-07-08', cost: 2000, status: 'Returned' },
  { id: 3, name: 'Scaffolding', type: 'Light', period: '2024-07-02 to 2024-07-15', cost: 1500, status: 'Active' },
];

export default function RentalTrackingView({ user }: { user: any }) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Rental Tracking</h3>
      <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Equipment</th>
            <th className="px-4 py-2 text-left">Type</th>
            <th className="px-4 py-2 text-left">Rental Period</th>
            <th className="px-4 py-2 text-left">Cost (GHS)</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {rentals.map(rental => (
            <tr key={rental.id} className="border-t border-gray-200 dark:border-gray-700">
              <td className="px-4 py-2">{rental.name}</td>
              <td className="px-4 py-2">{rental.type}</td>
              <td className="px-4 py-2">{rental.period}</td>
              <td className="px-4 py-2">{rental.cost.toLocaleString()}</td>
              <td className="px-4 py-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${rental.status === 'Active' ? 'bg-green-200 text-green-800' : 'bg-blue-200 text-blue-800'}`}>{rental.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 