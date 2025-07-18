import { useState } from 'react';
import BarChart from './charts/BarChart';
import PieTrainingStatusChart from './charts/PieTrainingStatusChart';

export default function TrainingRecordsTab({ employees, initialTraining }: { employees: any[]; initialTraining: any[] }) {
  const [training, setTraining] = useState(initialTraining);
  const [form, setForm] = useState({ employee: '', course: '', date: '', status: 'Completed' });
  const [submitting, setSubmitting] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setTraining([
        { id: training.length + 1, ...form },
        ...training
      ]);
      setForm({ employee: '', course: '', date: '', status: 'Completed' });
      setSubmitting(false);
    }, 500);
  };
  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 space-y-4">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[180px]">
            <label className="block text-sm font-medium mb-1">Employee</label>
            <select name="employee" value={form.employee} onChange={handleChange} required className="w-full rounded border px-3 py-2">
              <option value="">Select employee</option>
              {employees.map(emp => <option key={emp.id} value={emp.name}>{emp.name}</option>)}
            </select>
          </div>
          <div className="flex-1 min-w-[220px]">
            <label className="block text-sm font-medium mb-1">Course</label>
            <input name="course" value={form.course} onChange={handleChange} required placeholder="e.g. Safety Training" className="w-full rounded border px-3 py-2" />
          </div>
          <div className="flex-1 min-w-[120px]">
            <label className="block text-sm font-medium mb-1">Date</label>
            <input name="date" value={form.date} onChange={handleChange} required type="date" className="w-full rounded border px-3 py-2" />
          </div>
          <div className="flex-1 min-w-[120px]">
            <label className="block text-sm font-medium mb-1">Status</label>
            <select name="status" value={form.status} onChange={handleChange} required className="w-full rounded border px-3 py-2">
              <option value="Completed">Completed</option>
              <option value="In Progress">In Progress</option>
              <option value="Planned">Planned</option>
            </select>
          </div>
        </div>
        <button type="submit" disabled={submitting} className="px-6 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-all">
          {submitting ? 'Submitting...' : 'Add Training'}
        </button>
      </form>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border mt-4">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="p-2 text-left">Employee</th>
              <th className="p-2 text-left">Course</th>
              <th className="p-2 text-left">Date</th>
              <th className="p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {training.map(tr => (
              <tr key={tr.id} className="border-b">
                <td className="p-2">{tr.employee}</td>
                <td className="p-2">{tr.course}</td>
                <td className="p-2">{tr.date}</td>
                <td className="p-2">{tr.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mt-4">
        <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">Training Status Distribution</h4>
        <BarChart data={[
          { label: 'Completed', value: training.filter(t => t.status === 'Completed').length },
          { label: 'In Progress', value: training.filter(t => t.status === 'In Progress').length },
          { label: 'Planned', value: training.filter(t => t.status === 'Planned').length },
        ]} />
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mt-4">
        <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">Training Status Distribution</h4>
        <PieTrainingStatusChart training={training} />
      </div>
    </div>
  );
} 