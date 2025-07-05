'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  MapPin, Navigation, Clock, Users, 
  Target, Route, AlertCircle, CheckCircle 
} from 'lucide-react';

interface LocationData {
  latitude: number;
  longitude: number;
  accuracy: number;
  timestamp: Date;
  address?: string;
}

interface WorkerLocation {
  id: string;
  name: string;
  role: string;
  location: LocationData;
  status: 'active' | 'inactive' | 'break';
  lastUpdate: Date;
}

interface SiteLocation {
  id: string;
  name: string;
  address: string;
  coordinates: { lat: number; lng: number };
  radius: number; // meters
  workers: number;
  status: 'active' | 'completed' | 'planned';
}

interface GPSFeaturesProps {
  user: any;
}

export default function GPSFeatures({ user }: GPSFeaturesProps) {
  const [currentLocation, setCurrentLocation] = useState<LocationData | null>(null);
  const [isTracking, setIsTracking] = useState(false);
  const [locationHistory, setLocationHistory] = useState<LocationData[]>([]);
  const [workers, setWorkers] = useState<WorkerLocation[]>([]);
  const [sites, setSites] = useState<SiteLocation[]>([]);
  const [selectedSite, setSelectedSite] = useState<SiteLocation | null>(null);
  const [trackingError, setTrackingError] = useState<string | null>(null);
  const watchIdRef = useRef<number | null>(null);

  useEffect(() => {
    // Load mock data
    loadMockData();
    
    // Get initial location
    getCurrentLocation();

    return () => {
      if (watchIdRef.current) {
        navigator.geolocation.clearWatch(watchIdRef.current);
      }
    };
  }, []);

  const loadMockData = () => {
    const mockWorkers: WorkerLocation[] = [
      {
        id: '1',
        name: 'Kwame Asante',
        role: 'Site Supervisor',
        location: {
          latitude: 5.6037,
          longitude: -0.1870,
          accuracy: 10,
          timestamp: new Date(),
          address: 'East Legon, Accra'
        },
        status: 'active',
        lastUpdate: new Date()
      },
      {
        id: '2',
        name: 'Ama Osei',
        role: 'Mason',
        location: {
          latitude: 5.6040,
          longitude: -0.1875,
          accuracy: 15,
          timestamp: new Date(),
          address: 'East Legon, Accra'
        },
        status: 'active',
        lastUpdate: new Date()
      },
      {
        id: '3',
        name: 'John Mensah',
        role: 'Electrician',
        location: {
          latitude: 5.6035,
          longitude: -0.1865,
          accuracy: 8,
          timestamp: new Date(),
          address: 'East Legon, Accra'
        },
        status: 'break',
        lastUpdate: new Date()
      }
    ];

    const mockSites: SiteLocation[] = [
      {
        id: '1',
        name: 'East Legon Residential Complex',
        address: 'East Legon, Accra',
        coordinates: { lat: 5.6037, lng: -0.1870 },
        radius: 100,
        workers: 12,
        status: 'active'
      },
      {
        id: '2',
        name: 'Kumasi Shopping Center',
        address: 'Asokore Mampong, Kumasi',
        coordinates: { lat: 6.7924, lng: -1.6284 },
        radius: 150,
        workers: 18,
        status: 'active'
      },
      {
        id: '3',
        name: 'Tema Industrial Warehouse',
        address: 'Tema, Greater Accra',
        coordinates: { lat: 5.6698, lng: -0.0166 },
        radius: 200,
        workers: 8,
        status: 'completed'
      }
    ];

    setWorkers(mockWorkers);
    setSites(mockSites);
  };

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      setTrackingError('Geolocation is not supported by this browser');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location: LocationData = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
          timestamp: new Date()
        };
        
        setCurrentLocation(location);
        setTrackingError(null);
        
        // Reverse geocoding (mock)
        reverseGeocode(location);
      },
      (error) => {
        setTrackingError(`Location error: ${error.message}`);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  };

  const startTracking = () => {
    if (!navigator.geolocation) {
      setTrackingError('Geolocation is not supported');
      return;
    }

    setIsTracking(true);
    
    watchIdRef.current = navigator.geolocation.watchPosition(
      (position) => {
        const location: LocationData = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
          timestamp: new Date()
        };
        
        setCurrentLocation(location);
        setLocationHistory(prev => [...prev.slice(-99), location]); // Keep last 100 locations
        setTrackingError(null);
        
        // Check geofencing
        checkGeofencing(location);
      },
      (error) => {
        setTrackingError(`Tracking error: ${error.message}`);
        setIsTracking(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }
    );
  };

  const stopTracking = () => {
    if (watchIdRef.current) {
      navigator.geolocation.clearWatch(watchIdRef.current);
      watchIdRef.current = null;
    }
    setIsTracking(false);
  };

  const reverseGeocode = async (location: LocationData) => {
    // Mock reverse geocoding
    const mockAddress = 'East Legon, Accra, Ghana';
    setCurrentLocation(prev => prev ? { ...prev, address: mockAddress } : null);
  };

  const checkGeofencing = (location: LocationData) => {
    sites.forEach(site => {
      const distance = calculateDistance(
        location.latitude,
        location.longitude,
        site.coordinates.lat,
        site.coordinates.lng
      );
      
      if (distance <= site.radius) {
        // User is within site boundary
        console.log(`Entered ${site.name}`);
        // Could trigger notifications here
      }
    });
  };

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371e3; // Earth's radius in meters
    const φ1 = lat1 * Math.PI/180;
    const φ2 = lat2 * Math.PI/180;
    const Δφ = (lat2-lat1) * Math.PI/180;
    const Δλ = (lon2-lon1) * Math.PI/180;

    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    return R * c;
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'break': return <Clock className="w-4 h-4 text-orange-600" />;
      case 'inactive': return <AlertCircle className="w-4 h-4 text-red-600" />;
      default: return <MapPin className="w-4 h-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'break': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
      case 'inactive': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">GPS Features</h1>
            <p className="opacity-90">Location tracking for field operations</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
              <span className="text-sm font-medium">
                {isTracking ? 'Tracking Active' : 'Tracking Inactive'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Location Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{sites.length}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Active Sites</p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {workers.filter(w => w.status === 'active').length}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Workers Tracked</p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {currentLocation?.accuracy ? Math.round(currentLocation.accuracy) : '--'}m
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">GPS Accuracy</p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
              <Route className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{locationHistory.length}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Location Points</p>
            </div>
          </div>
        </div>
      </div>

      {/* Error Display */}
      {trackingError && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
          <div className="flex items-center space-x-3">
            <AlertCircle className="w-6 h-6 text-red-600" />
            <div>
              <h3 className="font-semibold text-red-800 dark:text-red-400">Location Error</h3>
              <p className="text-red-700 dark:text-red-300 text-sm">{trackingError}</p>
            </div>
          </div>
        </div>
      )}

      {/* Current Location */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Current Location</h3>
          <div className="flex space-x-3">
            <button
              onClick={getCurrentLocation}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Navigation className="w-5 h-5" />
              <span>Get Location</span>
            </button>
            
            {!isTracking ? (
              <button
                onClick={startTracking}
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Target className="w-5 h-5" />
                <span>Start Tracking</span>
              </button>
            ) : (
              <button
                onClick={stopTracking}
                className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <Target className="w-5 h-5" />
                <span>Stop Tracking</span>
              </button>
            )}
          </div>
        </div>

        {currentLocation ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Latitude:</span>
                <span className="font-mono text-gray-900 dark:text-white">
                  {currentLocation.latitude.toFixed(6)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Longitude:</span>
                <span className="font-mono text-gray-900 dark:text-white">
                  {currentLocation.longitude.toFixed(6)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Accuracy:</span>
                <span className="text-gray-900 dark:text-white">
                  ±{Math.round(currentLocation.accuracy)}m
                </span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Address:</span>
                <span className="text-gray-900 dark:text-white text-right">
                  {currentLocation.address || 'Loading...'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Last Update:</span>
                <span className="text-gray-900 dark:text-white">
                  {currentLocation.timestamp.toLocaleTimeString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Status:</span>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  isTracking ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {isTracking ? 'Tracking' : 'Static'}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400">No location data available</p>
          </div>
        )}
      </div>

      {/* Site Locations */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
        <div className="p-6 border-b border-gray-200/50 dark:border-gray-700/50">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Project Sites</h3>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sites.map((site) => (
              <div
                key={site.id}
                className="bg-white/50 dark:bg-gray-700/50 rounded-lg p-4 border border-gray-200/50 dark:border-gray-600/50 hover:shadow-md transition-all cursor-pointer"
                onClick={() => setSelectedSite(site)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{site.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{site.address}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    site.status === 'active' ? 'bg-green-100 text-green-800' :
                    site.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {site.status}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Workers:</span>
                    <span className="text-gray-900 dark:text-white">{site.workers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Geofence:</span>
                    <span className="text-gray-900 dark:text-white">{site.radius}m radius</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Coordinates:</span>
                    <span className="font-mono text-xs text-gray-900 dark:text-white">
                      {site.coordinates.lat.toFixed(4)}, {site.coordinates.lng.toFixed(4)}
                    </span>
                  </div>
                </div>
                
                {currentLocation && (
                  <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Distance:</span>
                      <span className="text-gray-900 dark:text-white">
                        {Math.round(calculateDistance(
                          currentLocation.latitude,
                          currentLocation.longitude,
                          site.coordinates.lat,
                          site.coordinates.lng
                        ))}m
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Worker Tracking */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
        <div className="p-6 border-b border-gray-200/50 dark:border-gray-700/50">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Worker Locations</h3>
        </div>
        
        <div className="p-6">
          <div className="space-y-4">
            {workers.map((worker) => (
              <div key={worker.id} className="flex items-center justify-between p-4 bg-white/50 dark:bg-gray-700/50 rounded-lg border border-gray-200/50 dark:border-gray-600/50">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {worker.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{worker.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{worker.role}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {worker.location.address || 'Location updating...'}
                    </p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="flex items-center space-x-2 mb-1">
                    {getStatusIcon(worker.status)}
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(worker.status)}`}>
                      {worker.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Updated: {worker.lastUpdate.toLocaleTimeString()}
                  </p>
                  <p className="text-xs font-mono text-gray-600 dark:text-gray-400">
                    {worker.location.latitude.toFixed(4)}, {worker.location.longitude.toFixed(4)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}