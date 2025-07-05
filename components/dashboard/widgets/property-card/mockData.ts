import { Property } from './types';

export const mockProperties: Property[] = [
  {
    id: '1',
    name: 'Luxury Villa in East Legon',
    location: 'East Legon, Accra',
    value: 'GHS 2,500,000',
    yield: '+12.5%',
    status: 'available',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
    description: 'Stunning 5-bedroom villa with modern amenities and beautiful garden',
    type: 'residential',
    bedrooms: 5,
    bathrooms: 4,
    area: '450 sqm',
    yearBuilt: 2022,
    amenities: ['Swimming Pool', 'Garden', 'Security System', 'Parking'],
    features: [
      { id: '1', name: 'Bedrooms', icon: 'bed', value: '5' },
      { id: '2', name: 'Bathrooms', icon: 'bath', value: '4' },
      { id: '3', name: 'Area', icon: 'square', value: '450 sqm' },
      { id: '4', name: 'Year Built', icon: 'calendar', value: '2022' }
    ],
    agent: {
      id: '1',
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      phone: '+233 24 123 4567',
      email: 'sarah.johnson@realestate.com',
      rating: 4.8
    },
    lastUpdated: '2024-01-15',
    views: 245,
    favorites: 18,
    priceHistory: [
      { date: '2024-01-15', price: 'GHS 2,500,000', change: 0 },
      { date: '2023-12-01', price: 'GHS 2,400,000', change: 4.2 },
      { date: '2023-10-15', price: 'GHS 2,300,000', change: 4.3 }
    ]
  },
  {
    id: '2',
    name: 'Commercial Office Space',
    location: 'Airport City, Accra',
    value: 'GHS 1,800,000',
    yield: '+8.2%',
    status: 'occupied',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    description: 'Prime office space in the heart of Airport City business district',
    type: 'commercial',
    area: '300 sqm',
    yearBuilt: 2020,
    amenities: ['24/7 Security', 'Parking', 'Elevator', 'Air Conditioning'],
    features: [
      { id: '1', name: 'Area', icon: 'square', value: '300 sqm' },
      { id: '2', name: 'Year Built', icon: 'calendar', value: '2020' },
      { id: '3', name: 'Parking', icon: 'car', value: '10 spaces' },
      { id: '4', name: 'Security', icon: 'shield', value: '24/7' }
    ],
    agent: {
      id: '2',
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      phone: '+233 20 987 6543',
      email: 'michael.chen@realestate.com',
      rating: 4.9
    },
    lastUpdated: '2024-01-10',
    views: 189,
    favorites: 12,
    priceHistory: [
      { date: '2024-01-10', price: 'GHS 1,800,000', change: 0 },
      { date: '2023-11-20', price: 'GHS 1,750,000', change: 2.9 },
      { date: '2023-09-15', price: 'GHS 1,700,000', change: 2.9 }
    ]
  },
  {
    id: '3',
    name: 'Residential Apartment Complex',
    location: 'Cantonments, Accra',
    value: 'GHS 3,200,000',
    yield: '+15.8%',
    status: 'under construction',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
    description: 'Modern apartment complex with luxury amenities and city views',
    type: 'residential',
    bedrooms: 8,
    bathrooms: 6,
    area: '600 sqm',
    yearBuilt: 2024,
    amenities: ['Gym', 'Swimming Pool', 'Garden', 'Security', 'Parking'],
    features: [
      { id: '1', name: 'Bedrooms', icon: 'bed', value: '8' },
      { id: '2', name: 'Bathrooms', icon: 'bath', value: '6' },
      { id: '3', name: 'Area', icon: 'square', value: '600 sqm' },
      { id: '4', name: 'Year Built', icon: 'calendar', value: '2024' }
    ],
    agent: {
      id: '3',
      name: 'Emma Wilson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      phone: '+233 26 456 7890',
      email: 'emma.wilson@realestate.com',
      rating: 4.7
    },
    lastUpdated: '2024-01-20',
    views: 312,
    favorites: 25,
    priceHistory: [
      { date: '2024-01-20', price: 'GHS 3,200,000', change: 0 },
      { date: '2023-12-01', price: 'GHS 3,000,000', change: 6.7 },
      { date: '2023-10-01', price: 'GHS 2,800,000', change: 7.1 }
    ]
  },
  {
    id: '4',
    name: 'Industrial Warehouse',
    location: 'Tema Industrial Area',
    value: 'GHS 4,500,000',
    yield: '+6.5%',
    status: 'available',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop',
    description: 'Large industrial warehouse with loading docks and office space',
    type: 'industrial',
    area: '2000 sqm',
    yearBuilt: 2019,
    amenities: ['Loading Docks', 'Office Space', 'Security', 'Parking'],
    features: [
      { id: '1', name: 'Area', icon: 'square', value: '2000 sqm' },
      { id: '2', name: 'Year Built', icon: 'calendar', value: '2019' },
      { id: '3', name: 'Loading Docks', icon: 'car', value: '4 docks' },
      { id: '4', name: 'Security', icon: 'shield', value: '24/7' }
    ],
    agent: {
      id: '4',
      name: 'David Brown',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      phone: '+233 27 789 0123',
      email: 'david.brown@realestate.com',
      rating: 4.6
    },
    lastUpdated: '2024-01-05',
    views: 156,
    favorites: 8,
    priceHistory: [
      { date: '2024-01-05', price: 'GHS 4,500,000', change: 0 },
      { date: '2023-11-15', price: 'GHS 4,400,000', change: 2.3 },
      { date: '2023-09-01', price: 'GHS 4,300,000', change: 2.3 }
    ]
  },
  {
    id: '5',
    name: 'Mixed-Use Development',
    location: 'Osu, Accra',
    value: 'GHS 6,800,000',
    yield: '+18.2%',
    status: 'rented',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    description: 'Premium mixed-use development with retail and residential units',
    type: 'mixed-use',
    bedrooms: 12,
    bathrooms: 8,
    area: '1200 sqm',
    yearBuilt: 2023,
    amenities: ['Retail Space', 'Residential Units', 'Parking', 'Security'],
    features: [
      { id: '1', name: 'Bedrooms', icon: 'bed', value: '12' },
      { id: '2', name: 'Bathrooms', icon: 'bath', value: '8' },
      { id: '3', name: 'Area', icon: 'square', value: '1200 sqm' },
      { id: '4', name: 'Year Built', icon: 'calendar', value: '2023' }
    ],
    agent: {
      id: '5',
      name: 'Lisa Anderson',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face',
      phone: '+233 24 567 8901',
      email: 'lisa.anderson@realestate.com',
      rating: 4.9
    },
    lastUpdated: '2024-01-12',
    views: 423,
    favorites: 31,
    priceHistory: [
      { date: '2024-01-12', price: 'GHS 6,800,000', change: 0 },
      { date: '2023-12-01', price: 'GHS 6,500,000', change: 4.6 },
      { date: '2023-10-01', price: 'GHS 6,200,000', change: 4.8 }
    ]
  }
];

export const sampleFeatures = [
  { id: '1', name: 'Bedrooms', icon: 'bed', value: '5' },
  { id: '2', name: 'Bathrooms', icon: 'bath', value: '4' },
  { id: '3', name: 'Area', icon: 'square', value: '450 sqm' },
  { id: '4', name: 'Year Built', icon: 'calendar', value: '2022' },
  { id: '5', name: 'Parking', icon: 'car', value: '2 spaces' },
  { id: '6', name: 'Security', icon: 'shield', value: '24/7' }
]; 