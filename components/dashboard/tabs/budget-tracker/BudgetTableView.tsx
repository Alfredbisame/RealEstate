import { useState } from 'react';
import { Edit2, Check, X } from 'lucide-react';

const initialItems = [
  { id: 1, category: 'Maintenance', amount: 50000, spent: 32000, status: 'Active' },
  { id: 2, category: 'Utilities', amount: 30000, spent: 18000, status: 'Active' },
  { id: 3, category: 'Renovation', amount: 120000, spent: 90000, status: 'Completed' },
  { id: 4, category: 'Security', amount: 20000, spent: 12000, status: 'Active' },
  { id: 5, category: 'Landscaping', amount: 15000, spent: 8000, status: 'Active' }
];

const statusColors = {
  Active: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200',
  Completed: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
};

export default function BudgetTableView() {
  const [items, setItems] = useState(initialItems);
  const [editId, setEditId] = useState<number | null>(null);
  const [editAmount, setEditAmount] = useState(0);

  const handleEdit = (id: number, amount: number) => {
    setEditId(id);
    setEditAmount(amount);
  };

  const handleSave = (id: number) => {
    setItems(items.map(item => item.id === id ? { ...item, amount: editAmount } : item));
    setEditId(null);
  };

  const handleCancel = () => {
    setEditId(null);
  };

  return (
    <div className="overflow-x-auto rounded-xl shadow border border-gray-200 dark:border-gray-700">
      <table className="min-w-full bg-white dark:bg-gray-800">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-200">Category</th>
            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-200">Budgeted</th>
            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-200">Spent</th>
            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-200">Status</th>
            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-200">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-t border-gray-200 dark:border-gray-700">
              <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-100">{item.category}</td>
              <td className="px-4 py-2 text-sm text-blue-700 dark:text-blue-300 font-semibold">
                {editId === item.id ? (
                  <input
                    type="number"
                    value={editAmount}
                    onChange={e => setEditAmount(Number(e.target.value))}
                    className="w-24 px-2 py-1 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                ) : (
                  `GHS ${item.amount.toLocaleString()}`
                )}
              </td>
              <td className="px-4 py-2 text-sm text-green-700 dark:text-green-300 font-semibold">GHS {item.spent.toLocaleString()}</td>
              <td className="px-4 py-2 text-sm">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[item.status as keyof typeof statusColors] || ''}`}>{item.status}</span>
              </td>
              <td className="px-4 py-2 text-sm">
                {editId === item.id ? (
                  <>
                    <button className="mr-2 text-green-600 dark:text-green-400" onClick={() => handleSave(item.id)}><Check className="w-4 h-4" /></button>
                    <button className="text-red-600 dark:text-red-400" onClick={handleCancel}><X className="w-4 h-4" /></button>
                  </>
                ) : (
                  <button className="text-blue-600 dark:text-blue-400" onClick={() => handleEdit(item.id, item.amount)}><Edit2 className="w-4 h-4" /></button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 