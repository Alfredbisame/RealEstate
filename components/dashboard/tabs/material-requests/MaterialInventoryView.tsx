import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Search, Filter, Package, AlertTriangle, CheckCircle, Truck, Warehouse } from 'lucide-react';

const inventoryItems = [
  {
    id: 1,
    name: 'Steel Beams',
    category: 'Structural',
    supplier: 'Metro Steel Co.',
    currentStock: 15,
    maxStock: 50,
    unit: 'units',
    unitCost: 'GH₵450',
    totalValue: 'GH₵6,750',
    status: 'low',
    lastRestocked: '2024-03-10',
    nextRestock: '2024-03-20',
    location: 'Warehouse A',
    notes: 'High-demand item. Monitor stock levels closely.'
  },
  {
    id: 2,
    name: 'Electrical Wiring',
    category: 'Electrical',
    supplier: 'Power Solutions Inc.',
    currentStock: 800,
    maxStock: 1000,
    unit: 'meters',
    unitCost: 'GH₵2.50',
    totalValue: 'GH₵2,000',
    status: 'good',
    lastRestocked: '2024-03-12',
    nextRestock: '2024-03-25',
    location: 'Warehouse B',
    notes: 'Standard electrical materials. Stock levels adequate.'
  },
  {
    id: 3,
    name: 'Concrete Mix',
    category: 'Foundation',
    supplier: 'BuildRight Materials',
    currentStock: 25,
    maxStock: 100,
    unit: 'cubic meters',
    unitCost: 'GH₵120',
    totalValue: 'GH₵3,000',
    status: 'critical',
    lastRestocked: '2024-03-08',
    nextRestock: '2024-03-15',
    location: 'Warehouse C',
    notes: 'Critical low stock. Immediate restock required.'
  },
  {
    id: 4,
    name: 'Plumbing Fixtures',
    category: 'Plumbing',
    supplier: 'PlumbPro Supplies',
    currentStock: 8,
    maxStock: 20,
    unit: 'sets',
    unitCost: 'GH₵850',
    totalValue: 'GH₵6,800',
    status: 'low',
    lastRestocked: '2024-03-05',
    nextRestock: '2024-03-18',
    location: 'Warehouse A',
    notes: 'Standard fixtures. Reorder when stock reaches 5 sets.'
  },
  {
    id: 5,
    name: 'Safety Equipment',
    category: 'Safety',
    supplier: 'SafeGuard Equipment',
    currentStock: 35,
    maxStock: 50,
    unit: 'sets',
    unitCost: 'GH₵95',
    totalValue: 'GH₵3,325',
    status: 'good',
    lastRestocked: '2024-03-14',
    nextRestock: '2024-03-28',
    location: 'Warehouse B',
    notes: 'Safety equipment well stocked. Regular maintenance required.'
  }
];

export default function MaterialInventoryView() {
  const getStockStatusColor = (status: string) => {
    switch (status) {
      case 'critical':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'low':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'good':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getStockStatusIcon = (status: string) => {
    switch (status) {
      case 'critical':
        return <AlertTriangle className="h-4 w-4 text-red-600" />;
      case 'low':
        return <AlertTriangle className="h-4 w-4 text-orange-600" />;
      case 'good':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      default:
        return <Package className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStockPercentage = (current: number, max: number) => {
    return Math.round((current / max) * 100);
  };

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search inventory..."
              className="pl-10 w-80"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
        <Button variant="outline" size="sm">
          <Warehouse className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Inventory Items */}
      <div className="space-y-4">
        {inventoryItems.map((item) => (
          <Card key={item.id} className="border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {getStockStatusIcon(item.status)}
                  <div>
                    <CardTitle className="text-lg text-gray-900 dark:text-gray-100">{item.name}</CardTitle>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.category} - {item.supplier}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={getStockStatusColor(item.status)}>
                    {item.status}
                  </Badge>
                  <Badge variant="outline">
                    {item.location}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Stock Level:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">
                    {item.currentStock} / {item.maxStock} {item.unit}
                  </div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Unit Cost:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{item.unitCost}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Total Value:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{item.totalValue}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Next Restock:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{item.nextRestock}</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Stock Level</span>
                  <span className="text-gray-900 dark:text-gray-100">{getStockPercentage(item.currentStock, item.maxStock)}%</span>
                </div>
                <Progress 
                  value={getStockPercentage(item.currentStock, item.maxStock)} 
                  className="h-2"
                  style={{
                    '--progress-color': item.status === 'critical' ? '#ef4444' : 
                                       item.status === 'low' ? '#f97316' : '#22c55e'
                  } as React.CSSProperties}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Last Restocked:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{item.lastRestocked}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Supplier:</span>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{item.supplier}</div>
                </div>
              </div>
              
              <div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Notes:</span>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{item.notes}</p>
              </div>
              
              <div className="flex items-center space-x-2 pt-2">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Truck className="h-4 w-4 mr-1" />
                  Order More
                </Button>
                <Button size="sm" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                  <Package className="h-4 w-4 mr-1" />
                  View Details
                </Button>
                <Button size="sm" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                  <Warehouse className="h-4 w-4 mr-1" />
                  Update Stock
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 