'use client';

import { ChartWidgetContent } from './chart-widget';

interface ChartWidgetProps {
  title: string;
  data: any;
  type: 'area' | 'bar' | 'doughnut' | 'pie';
}

export default function ChartWidget({ title, data, type }: ChartWidgetProps) {
  return (
    <ChartWidgetContent
      title={title}
      data={data}
      type={type}
    />
  );
}