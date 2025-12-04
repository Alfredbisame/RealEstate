const properties = [
  {
    name: 'East Legon Villa',
    location: 'East Legon, Accra',
    value: 'GHS 1,200,000',
    appreciation: '+10.2%',
    status: 'Occupied',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Airport Hills Residence',
    location: 'Airport Hills, Accra',
    value: 'GHS 1,500,000',
    appreciation: '+14.5%',
    status: 'Available',
    image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Kumasi Gardens',
    location: 'Kumasi, Ashanti',
    value: 'GHS 900,000',
    appreciation: '+8.1%',
    status: 'Occupied',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Tema Industrial Park',
    location: 'Tema, Greater Accra',
    value: 'GHS 1,200,000',
    appreciation: '+15.8%',
    status: 'Occupied',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Takoradi Beachfront',
    location: 'Takoradi, Western',
    value: 'GHS 400,000',
    appreciation: '+14.0%',
    status: 'Under Construction',
    image: 'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export default function PropertyValuesListView() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property, idx) => (
        <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:scale-105 transition-transform">
          <img src={property.image} alt={property.name} className="w-full h-40 object-cover" />
          <div className="p-4">
            <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-1">{property.name}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">{property.location}</p>
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-blue-600 dark:text-blue-300">{property.value}</span>
              <span className="text-blue-600 dark:text-blue-400 font-medium">{property.appreciation}</span>
            </div>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${property.status === 'Occupied' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200' : property.status === 'Available' ? 'bg-blue-50 text-blue-700 dark:bg-blue-800 dark:text-blue-200' : 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'}`}>{property.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
}