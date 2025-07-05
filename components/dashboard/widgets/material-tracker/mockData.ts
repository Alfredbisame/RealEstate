import { Material } from './types';

export const mockMaterials: Material[] = [
  {
    id: '1',
    name: 'Cement (50kg bags)',
    current: 85,
    required: 100,
    price: 45.00,
    unit: 'bags',
    category: 'cement',
    supplier: 'Ghacem Ltd',
    lastUpdated: '2024-02-10'
  },
  {
    id: '2',
    name: 'Steel Reinforcement (12mm)',
    current: 35,
    required: 50,
    price: 120.00,
    unit: 'tons',
    category: 'steel',
    supplier: 'Tema Steel Works',
    lastUpdated: '2024-02-08'
  },
  {
    id: '3',
    name: 'Sand (Truck Load)',
    current: 8,
    required: 20,
    price: 800.00,
    unit: 'trucks',
    category: 'aggregate',
    supplier: 'Accra Sand Co.',
    lastUpdated: '2024-02-05'
  },
  {
    id: '4',
    name: 'Gravel (Truck Load)',
    current: 12,
    required: 15,
    price: 900.00,
    unit: 'trucks',
    category: 'aggregate',
    supplier: 'Accra Sand Co.',
    lastUpdated: '2024-02-07'
  },
  {
    id: '5',
    name: 'Electrical Wiring',
    current: 200,
    required: 500,
    price: 15.00,
    unit: 'meters',
    category: 'electrical',
    supplier: 'Volta Electric',
    lastUpdated: '2024-02-09'
  },
  {
    id: '6',
    name: 'PVC Pipes (4-inch)',
    current: 15,
    required: 30,
    price: 85.00,
    unit: 'pipes',
    category: 'plumbing',
    supplier: 'Plastico Ghana',
    lastUpdated: '2024-02-06'
  },
  {
    id: '7',
    name: 'Timber (2x4)',
    current: 45,
    required: 60,
    price: 25.00,
    unit: 'pieces',
    category: 'wood',
    supplier: 'Forest Timber Ltd',
    lastUpdated: '2024-02-11'
  },
  {
    id: '8',
    name: 'Paint (20L)',
    current: 5,
    required: 12,
    price: 180.00,
    unit: 'cans',
    category: 'finishing',
    supplier: 'Dulux Ghana',
    lastUpdated: '2024-02-12'
  }
]; 