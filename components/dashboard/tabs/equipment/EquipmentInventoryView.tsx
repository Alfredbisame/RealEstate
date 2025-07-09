const inventory = [
  { id: 1, name: 'Excavator', type: 'Heavy', available: false, location: 'Site A' },
  { id: 2, name: 'Concrete Mixer', type: 'Medium', available: true, location: 'Warehouse' },
  { id: 3, name: 'Scaffolding', type: 'Light', available: true, location: 'Site B' },
];

export default function EquipmentInventoryView({ user }: { user: any }) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Equipment Inventory</h3>
      <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Equipment</th>
            <th className="px-4 py-2 text-left">Type</th>
            <th className="px-4 py-2 text-left">Available</th>
            <th className="px-4 py-2 text-left">Location</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map(item => (
            <tr key={item.id} className="border-t border-gray-200 dark:border-gray-700">
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2">{item.type}</td>
              <td className="px-4 py-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${item.available ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>{item.available ? 'Yes' : 'No'}</span>
              </td>
              <td className="px-4 py-2">{item.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 