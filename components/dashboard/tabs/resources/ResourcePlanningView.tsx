import ChartWidget from '../../widgets/ChartWidget';
import { useState } from 'react';

const forecastData = [
  { name: 'Week 1', value: 30 },
  { name: 'Week 2', value: 45 },
  { name: 'Week 3', value: 40 },
  { name: 'Week 4', value: 50 }
];

export default function ResourcePlanningView() {
  const [requirements, setRequirements] = useState([
    { type: 'Cement', quantity: 100, unit: 'bags' },
    { type: 'Steel', quantity: 50, unit: 'tons' },
    { type: 'Labor', quantity: 20, unit: 'workers' }
  ]);
  const [form, setForm] = useState({ type: '', quantity: '', unit: '' });

  const handleAdd = () => {
    if (form.type && form.quantity && form.unit) {
      setRequirements([...requirements, { ...form, quantity: Number(form.quantity) }]);
      setForm({ type: '', quantity: '', unit: '' });
    }
  };

  return (
    <div className="space-y-8">
      <ChartWidget
        title="Material & Labor Forecast (Next 4 Weeks)"
        data={forecastData}
        type="bar"
      />
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow border border-gray-200 dark:border-gray-700">
        <h4 className="font-semibold text-lg mb-4 text-gray-800 dark:text-white">Add Resource Requirement</h4>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            placeholder="Type (e.g. Cement, Labor)"
            value={form.type}
            onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
            className="flex-1 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Quantity"
            value={form.quantity}
            onChange={e => setForm(f => ({ ...f, quantity: e.target.value }))}
            className="w-32 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Unit (e.g. bags, tons, workers)"
            value={form.unit}
            onChange={e => setForm(f => ({ ...f, unit: e.target.value }))}
            className="w-32 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Add
          </button>
        </div>
        <div>
          <h5 className="font-semibold text-md mb-2 text-gray-700 dark:text-gray-200">Current Requirements</h5>
          <ul className="space-y-2">
            {requirements.map((req, idx) => (
              <li key={idx} className="flex items-center justify-between bg-blue-50 dark:bg-blue-900/30 rounded px-4 py-2">
                <span>{req.type}</span>
                <span className="font-medium">{req.quantity} {req.unit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 