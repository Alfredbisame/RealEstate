import ChartWidget from '../../widgets/ChartWidget';

const valueTrendData = [
  { name: 'Jan', value: 950000 },
  { name: 'Feb', value: 970000 },
  { name: 'Mar', value: 1000000 },
  { name: 'Apr', value: 1020000 },
  { name: 'May', value: 1040000 },
  { name: 'Jun', value: 1080000 }
];

export default function PropertyValuesChartView() {
  return (
    <ChartWidget 
      title="Portfolio Value Trend"
      data={valueTrendData}
      type="area"
    />
  );
} 