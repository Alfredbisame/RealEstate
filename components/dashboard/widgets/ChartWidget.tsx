'use client';

import { 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

interface ChartWidgetProps {
  title: string;
  data: any;
  type: 'area' | 'bar' | 'doughnut' | 'pie';
}

export default function ChartWidget({ title, data, type }: ChartWidgetProps) {
  const renderChart = () => {
    switch (type) {
      case 'area':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data.datasets ? transformLineData(data) : data}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="name" 
                stroke="#6b7280"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="#6b7280"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value.toLocaleString()}`}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                formatter={(value: any) => [`GHS ${value.toLocaleString()}`, '']}
              />
              <Legend />
              {data.datasets && data.datasets.map((dataset: any, index: number) => (
                <Area
                  key={index}
                  type="monotone"
                  dataKey={dataset.label.toLowerCase().replace(/[^a-z0-9]/g, '')}
                  stroke={dataset.borderColor || '#10b981'}
                  fillOpacity={1}
                  fill={index === 0 ? 'url(#colorRevenue)' : 'url(#colorExpenses)'}
                  strokeWidth={2}
                />
              ))}
            </AreaChart>
          </ResponsiveContainer>
        );

      case 'bar':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.datasets ? transformBarData(data) : data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="name" 
                stroke="#6b7280"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="#6b7280"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value.toLocaleString()}`}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                formatter={(value: any) => [`GHS ${value.toLocaleString()}`, '']}
              />
              <Bar 
                dataKey="value" 
                fill="#3b82f6"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        );

      case 'doughnut':
      case 'pie':
        const pieData = data.datasets ? transformPieData(data) : data;
        const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6'];
        
        return (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={type === 'doughnut' ? 60 : 0}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry: any, index: number) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                formatter={(value: any) => [`GHS ${value.toLocaleString()}`, '']}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        );

      default:
        return <div>Chart type not supported</div>;
    }
  };

  // Transform Chart.js format to Recharts format
  const transformLineData = (chartData: any) => {
    if (!chartData.labels || !chartData.datasets) return [];
    
    return chartData.labels.map((label: string, index: number) => {
      const dataPoint: any = { name: label };
      chartData.datasets.forEach((dataset: any) => {
        const key = dataset.label.toLowerCase().replace(/[^a-z0-9]/g, '');
        dataPoint[key] = dataset.data[index];
      });
      return dataPoint;
    });
  };

  const transformBarData = (chartData: any) => {
    if (!chartData.labels || !chartData.datasets) return [];
    
    return chartData.labels.map((label: string, index: number) => ({
      name: label,
      value: chartData.datasets[0].data[index]
    }));
  };

  const transformPieData = (chartData: any) => {
    if (!chartData.labels || !chartData.datasets) return [];
    
    return chartData.labels.map((label: string, index: number) => ({
      name: label,
      value: chartData.datasets[0].data[index]
    }));
  };

  return (
    <div className="h-full flex flex-col">
      <h3 className="font-semibold text-gray-800 dark:text-white mb-4 text-lg">{title}</h3>
      <div className="flex-1 min-h-0">
        {renderChart()}
      </div>
    </div>
  );
}