import { useState } from 'react';

const vehicles = [
  { type: 'Truck', capacity: 10, costPerKm: 8 },
  { type: 'Van', capacity: 4, costPerKm: 5 },
  { type: 'Pickup', capacity: 2, costPerKm: 3 },
];

export default function TransportCostOptimizerView({ user }: { user: any }) {
  const [locations, setLocations] = useState(['']);
  const [material, setMaterial] = useState('Cement');
  const [vehicle, setVehicle] = useState(vehicles[0]);
  const [distance, setDistance] = useState(0);
  const [result, setResult] = useState<null | { totalCost: number; suggestion: string }>(null);

  const handleLocationChange = (idx: number, value: string) => {
    const updated = [...locations];
    updated[idx] = value;
    setLocations(updated);
  };

  const addLocation = () => setLocations([...locations, '']);

  const calculate = () => {
    const totalCost = distance * vehicle.costPerKm * locations.length;
    let suggestion = 'Optimal';
    if (vehicle.type === 'Truck' && locations.length < 2) suggestion = 'Consider using a smaller vehicle for fewer locations.';
    if (vehicle.type === 'Pickup' && locations.length > 3) suggestion = 'Consider using a larger vehicle for more locations.';
    setResult({ totalCost, suggestion });
  };

  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Transport Cost Optimizer</h3>
      <div className="mb-4">
        <label className="block font-medium mb-1">Delivery Locations</label>
        {locations.map((loc, idx) => (
          <input
            key={idx}
            type="text"
            value={loc}
            onChange={e => handleLocationChange(idx, e.target.value)}
            className="mb-2 px-3 py-2 rounded border w-full"
            placeholder={`Location ${idx + 1}`}
          />
        ))}
        <button onClick={addLocation} className="mt-1 px-3 py-1 bg-blue-500 text-white rounded">Add Location</button>
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1">Material Type</label>
        <select value={material} onChange={e => setMaterial(e.target.value)} className="px-3 py-2 rounded border w-full">
          <option value="Cement">Cement</option>
          <option value="Steel">Steel</option>
          <option value="Bricks">Bricks</option>
          <option value="Sand">Sand</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1">Vehicle</label>
        <select value={vehicle.type} onChange={e => setVehicle(vehicles.find(v => v.type === e.target.value)!)} className="px-3 py-2 rounded border w-full">
          {vehicles.map(v => (
            <option key={v.type} value={v.type}>{v.type} (Capacity: {v.capacity} tons, GHS {v.costPerKm}/km)</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1">Total Distance (km)</label>
        <input type="number" value={distance} onChange={e => setDistance(Number(e.target.value))} className="px-3 py-2 rounded border w-full" />
      </div>
      <button onClick={calculate} className="px-4 py-2 bg-blue-500 text-white rounded font-semibold">Optimize Cost</button>
      {result && (
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-xl border border-blue-200 dark:border-blue-700">
          <div className="font-bold text-lg mb-2">Estimated Total Cost: GHS {result.totalCost.toLocaleString()}</div>
          <div className="text-sm text-blue-700 dark:text-blue-200">{result.suggestion}</div>
        </div>
      )}
    </div>
  );
}