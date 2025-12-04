import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#3b82f6', '#60a5fa', '#93c5fd'];

export default function PieTrainingStatusChart({ training }: { training: any[] }) {
  const statusCounts = [
    { name: 'Completed', value: training.filter(t => t.status === 'Completed').length, color: COLORS[0] },
    { name: 'In Progress', value: training.filter(t => t.status === 'In Progress').length, color: COLORS[1] },
    { name: 'Planned', value: training.filter(t => t.status === 'Planned').length, color: COLORS[2] },
  ];
  return (
    <div style={{ width: '100%', height: 250 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={statusCounts} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
            {statusCounts.map((entry, idx) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}