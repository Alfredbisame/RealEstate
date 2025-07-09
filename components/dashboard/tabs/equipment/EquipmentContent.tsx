import RentalTrackingView from './RentalTrackingView';
import MaintenanceScheduleView from './MaintenanceScheduleView';
import EquipmentInventoryView from './EquipmentInventoryView';
import EquipmentAnalyticsView from './EquipmentAnalyticsView';

interface EquipmentContentProps {
  activeView: string;
  onViewChange: (view: string) => void;
  user: any;
}

export default function EquipmentContent({ activeView, onViewChange, user }: EquipmentContentProps) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 mt-4 border border-gray-200 dark:border-gray-700">
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'rental' ? 'bg-gradient-to-r from-yellow-500 to-green-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('rental')}
        >
          Rental Tracking
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'maintenance' ? 'bg-gradient-to-r from-yellow-500 to-green-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('maintenance')}
        >
          Maintenance Schedule
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'inventory' ? 'bg-gradient-to-r from-yellow-500 to-green-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('inventory')}
        >
          Equipment Inventory
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeView === 'analytics' ? 'bg-gradient-to-r from-yellow-500 to-green-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
          onClick={() => onViewChange('analytics')}
        >
          Equipment Analytics
        </button>
      </div>
      {activeView === 'rental' && <RentalTrackingView user={user} />}
      {activeView === 'maintenance' && <MaintenanceScheduleView user={user} />}
      {activeView === 'inventory' && <EquipmentInventoryView user={user} />}
      {activeView === 'analytics' && <EquipmentAnalyticsView user={user} />}
    </div>
  );
} 