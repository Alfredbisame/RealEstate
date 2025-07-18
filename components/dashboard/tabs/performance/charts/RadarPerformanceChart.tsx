import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip } from 'recharts';

export default function RadarPerformanceChart({ reviews, employees }: { reviews: any[]; employees: any[] }) {
  const employeeRatings = employees.map(emp => {
    const empReviews = reviews.filter(r => r.employee === emp.name);
    const avg = empReviews.length ? empReviews.reduce((sum, r) => sum + r.rating, 0) / empReviews.length : 0;
    return { employee: emp.name, rating: Math.round(avg * 100) / 100 };
  });
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={employeeRatings} outerRadius={100}>
          <PolarGrid />
          <PolarAngleAxis dataKey="employee" />
          <PolarRadiusAxis angle={30} domain={[0, 5]} />
          <Radar name="Avg Rating" dataKey="rating" stroke="#6366f1" fill="#6366f1" fillOpacity={0.4} />
          <Legend />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
} 