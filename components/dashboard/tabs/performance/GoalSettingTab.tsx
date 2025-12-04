import { useState } from 'react';
import BarChart from './charts/BarChart';
import LineGoalProgressChart from './charts/LineGoalProgressChart';

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-3">
      <div className="bg-blue-500 h-3 rounded-full" style={{ width: `${value}%` }} />
    </div>
  );
}

export default function GoalSettingTab({ employees, initialGoals }: { employees: any[]; initialGoals: any[] }) {
  const [goals, setGoals] = useState(initialGoals);
  const [form, setForm] = useState({ employee: '', goal: '', deadline: '', progress: 0 });
  const [submitting, setSubmitting] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setGoals([
        { id: goals.length + 1, ...form, progress: Number(form.progress) },
        ...goals
      ]);
      setForm({ employee: '', goal: '', deadline: '', progress: 0 });
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
            <label className="block text-sm font-medium mb-1">Goal</label>
            <input name="goal" value={form.goal} onChange={handleChange} required placeholder="e.g. Complete certification" className="w-full rounded border px-3 py-2" />
          </div>
          <div className="flex-1 min-w-[120px]">
            <label className="block text-sm font-medium mb-1">Deadline</label>
            <input name="deadline" value={form.deadline} onChange={handleChange} required type="date" className="w-full rounded border px-3 py-2" />
          </div>
          <div className="flex-1 min-w-[100px]">
            <label className="block text-sm font-medium mb-1">Progress (%)</label>
            <input name="progress" value={form.progress} onChange={handleChange} required type="number" min={0} max={100} className="w-full rounded border px-3 py-2" />
          </div>
        </div>
        <button type="submit" disabled={submitting} className="px-6 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition-all">
          {submitting ? 'Submitting...' : 'Add Goal'}
        </button>
      </form>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border mt-4">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="p-2 text-left">Employee</th>
              <th className="p-2 text-left">Goal</th>
              <th className="p-2 text-left">Deadline</th>
              <th className="p-2 text-left">Progress</th>
            </tr>
          </thead>
          <tbody>
            {goals.map(goal => (
              <tr key={goal.id} className="border-b">
                <td className="p-2">{goal.employee}</td>
                <td className="p-2">{goal.goal}</td>
                <td className="p-2">{goal.deadline}</td>
                <td className="p-2"><ProgressBar value={goal.progress} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mt-4">
        <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">Goal Progress Distribution</h4>
        <BarChart data={[
          { label: '0-25%', value: goals.filter(g => g.progress <= 25).length },
          { label: '26-50%', value: goals.filter(g => g.progress > 25 && g.progress <= 50).length },
          { label: '51-75%', value: goals.filter(g => g.progress > 50 && g.progress <= 75).length },
          { label: '76-100%', value: goals.filter(g => g.progress > 75).length },
        ]} />
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mt-4">
        <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">Goal Progress Over Time</h4>
        <LineGoalProgressChart goals={goals} />
      </div>
    </div>
  );
} 