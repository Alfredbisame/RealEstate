import { useState } from 'react';
import PerformanceOverview from '../../dashboards/hr-manager/PerformanceOverview';
import BarChart from './charts/BarChart';
import RadarPerformanceChart from './charts/RadarPerformanceChart';

export default function PerformanceReviewsTab({ employees, initialReviews }: { employees: any[]; initialReviews: any[] }) {
  const [reviews, setReviews] = useState(initialReviews);
  const [form, setForm] = useState({ employee: '', period: '', rating: 3, comments: '' });
  const [submitting, setSubmitting] = useState(false);
  const ratingCounts = [1, 2, 3, 4, 5].map(r => ({
    label: r.toString(),
    value: reviews.filter(rv => rv.rating === r).length
  }));
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setReviews([
        { id: reviews.length + 1, ...form, rating: Number(form.rating) },
        ...reviews
      ]);
      setForm({ employee: '', period: '', rating: 3, comments: '' });
      setSubmitting(false);
    }, 500);
  };
  return (
    <div className="space-y-6">
      <PerformanceOverview />
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 space-y-4">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[180px]">
            <label className="block text-sm font-medium mb-1">Employee</label>
            <select name="employee" value={form.employee} onChange={handleChange} required className="w-full rounded border px-3 py-2">
              <option value="">Select employee</option>
              {employees.map(emp => <option key={emp.id} value={emp.name}>{emp.name}</option>)}
            </select>
          </div>
          <div className="flex-1 min-w-[120px]">
            <label className="block text-sm font-medium mb-1">Period</label>
            <input name="period" value={form.period} onChange={handleChange} required placeholder="e.g. Q2 2024" className="w-full rounded border px-3 py-2" />
          </div>
          <div className="flex-1 min-w-[100px]">
            <label className="block text-sm font-medium mb-1">Rating</label>
            <select name="rating" value={form.rating} onChange={handleChange} required className="w-full rounded border px-3 py-2">
              {[1,2,3,4,5].map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Comments</label>
          <textarea name="comments" value={form.comments} onChange={handleChange} required rows={2} className="w-full rounded border px-3 py-2" />
        </div>
        <button type="submit" disabled={submitting} className="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-all">
          {submitting ? 'Submitting...' : 'Submit Review'}
        </button>
      </form>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border mt-4">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="p-2 text-left">Employee</th>
              <th className="p-2 text-left">Period</th>
              <th className="p-2 text-left">Rating</th>
              <th className="p-2 text-left">Comments</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map(rv => (
              <tr key={rv.id} className="border-b">
                <td className="p-2">{rv.employee}</td>
                <td className="p-2">{rv.period}</td>
                <td className="p-2">{rv.rating}</td>
                <td className="p-2">{rv.comments}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mt-4">
        <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">Performance Ratings Distribution</h4>
        <BarChart data={ratingCounts} />
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mt-4">
        <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">Performance Ratings by Employee</h4>
        <RadarPerformanceChart reviews={reviews} employees={employees} />
      </div>
    </div>
  );
} 