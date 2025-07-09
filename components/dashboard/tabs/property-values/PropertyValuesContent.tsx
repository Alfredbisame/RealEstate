import PropertyValuesChartView from './PropertyValuesChartView';
import PropertyValuesListView from './PropertyValuesListView';

interface PropertyValuesContentProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export default function PropertyValuesContent({ activeView, onViewChange }: PropertyValuesContentProps) {
  return (
    <div className="bg-white/70 dark:bg-gray-800/70 rounded-xl p-6 mt-4">
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'chart' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('chart')}
        >
          Value Trend
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'list' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('list')}
        >
          Properties List
        </button>
      </div>
      {activeView === 'chart' && <PropertyValuesChartView />}
      {activeView === 'list' && <PropertyValuesListView />}
    </div>
  );
} 