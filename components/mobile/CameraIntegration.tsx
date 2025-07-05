'use client';

import { useState, useRef, useCallback } from 'react';
import { 
  Camera, Upload, X, Download, Trash2, 
  FileText, Receipt, Building2, Eye, Zap 
} from 'lucide-react';

interface CapturedImage {
  id: string;
  url: string;
  type: 'photo' | 'receipt' | 'document';
  timestamp: Date;
  location?: string;
  description?: string;
  extractedText?: string;
}

interface CameraIntegrationProps {
  user: any;
  onImageCapture?: (image: CapturedImage) => void;
}

export default function CameraIntegration({ user, onImageCapture }: CameraIntegrationProps) {
  const [isCapturing, setIsCapturing] = useState(false);
  const [capturedImages, setCapturedImages] = useState<CapturedImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<CapturedImage | null>(null);
  const [captureMode, setCaptureMode] = useState<'photo' | 'receipt' | 'document'>('photo');
  const [isProcessing, setIsProcessing] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const startCamera = async () => {
    setCameraError(null);
    
    try {
      // First try with environment (rear) camera
      let stream: MediaStream;
      
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { 
            facingMode: 'environment', // Use back camera
            width: { ideal: 1920 },
            height: { ideal: 1080 }
          }
        });
      } catch (envError) {
        console.warn('Environment camera not found, trying any available camera:', envError);
        
        // If environment camera fails, try without facingMode constraint
        try {
          stream = await navigator.mediaDevices.getUserMedia({
            video: { 
              width: { ideal: 1920 },
              height: { ideal: 1080 }
            }
          });
        } catch (anyError) {
          console.warn('No camera with ideal resolution, trying basic video:', anyError);
          
          // If that fails, try with basic video constraints
          stream = await navigator.mediaDevices.getUserMedia({
            video: true
          });
        }
      }
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        setIsCapturing(true);
      }
    } catch (error: any) {
      console.error('Error accessing camera:', error);
      
      let errorMessage = 'Unable to access camera. ';
      
      if (error.name === 'NotFoundError') {
        errorMessage += 'No camera device found on this device.';
      } else if (error.name === 'NotAllowedError') {
        errorMessage += 'Camera access was denied. Please check your browser permissions.';
      } else if (error.name === 'NotSupportedError') {
        errorMessage += 'Camera is not supported on this device or browser.';
      } else if (error.name === 'NotReadableError') {
        errorMessage += 'Camera is already in use by another application.';
      } else {
        errorMessage += 'Please check your camera permissions and try again.';
      }
      
      setCameraError(errorMessage);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setIsCapturing(false);
    setCameraError(null);
  };

  const capturePhoto = useCallback(() => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    if (!context) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0);

    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const newImage: CapturedImage = {
          id: Date.now().toString(),
          url,
          type: captureMode,
          timestamp: new Date(),
          location: 'Current Location' // Would use GPS in real implementation
        };

        setCapturedImages(prev => [newImage, ...prev]);
        
        if (captureMode === 'receipt') {
          processReceipt(newImage);
        }

        onImageCapture?.(newImage);
        stopCamera();
      }
    }, 'image/jpeg', 0.9);
  }, [captureMode, onImageCapture]);

  const processReceipt = async (image: CapturedImage) => {
    setIsProcessing(true);
    
    // Simulate OCR processing
    setTimeout(() => {
      const mockExtractedText = `
RECEIPT
Date: ${new Date().toLocaleDateString()}
Vendor: ABC Construction Supplies
Items:
- Cement (50kg) x 10 - GHS 450.00
- Steel Bars x 5 - GHS 900.00
- Blocks x 200 - GHS 500.00
Total: GHS 1,850.00
VAT: GHS 277.50
Grand Total: GHS 2,127.50
      `.trim();

      setCapturedImages(prev => 
        prev.map(img => 
          img.id === image.id 
            ? { ...img, extractedText: mockExtractedText }
            : img
        )
      );
      setIsProcessing(false);
    }, 3000);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      const newImage: CapturedImage = {
        id: Date.now().toString(),
        url,
        type: captureMode,
        timestamp: new Date(),
        description: file.name
      };

      setCapturedImages(prev => [newImage, ...prev]);
      
      if (captureMode === 'receipt') {
        processReceipt(newImage);
      }

      onImageCapture?.(newImage);
    }
  };

  const deleteImage = (id: string) => {
    setCapturedImages(prev => prev.filter(img => img.id !== id));
    if (selectedImage?.id === id) {
      setSelectedImage(null);
    }
  };

  const downloadImage = (image: CapturedImage) => {
    const link = document.createElement('a');
    link.href = image.url;
    link.download = `${image.type}_${image.timestamp.toISOString().split('T')[0]}.jpg`;
    link.click();
  };

  const getModeIcon = (mode: string) => {
    switch (mode) {
      case 'receipt': return <Receipt className="w-5 h-5" />;
      case 'document': return <FileText className="w-5 h-5" />;
      default: return <Camera className="w-5 h-5" />;
    }
  };

  const getModeColor = (mode: string) => {
    switch (mode) {
      case 'receipt': return 'bg-green-600 hover:bg-green-700';
      case 'document': return 'bg-blue-600 hover:bg-blue-700';
      default: return 'bg-purple-600 hover:bg-purple-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Camera Integration</h1>
            <p className="opacity-90">Photo documentation and receipt scanning</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
              <span className="text-sm font-medium">{capturedImages.length} photos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Camera Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
              <Camera className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {capturedImages.filter(img => img.type === 'photo').length}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Photos</p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
              <Receipt className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {capturedImages.filter(img => img.type === 'receipt').length}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Receipts</p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {capturedImages.filter(img => img.type === 'document').length}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Documents</p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {capturedImages.filter(img => img.extractedText).length}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Processed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Camera Controls */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Capture Mode</h3>
            <div className="flex space-x-2">
              {(['photo', 'receipt', 'document'] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setCaptureMode(mode)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    captureMode === mode
                      ? getModeColor(mode) + ' text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {getModeIcon(mode)}
                  <span className="capitalize">{mode}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex space-x-3">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Upload className="w-5 h-5" />
              <span>Upload</span>
            </button>
            
            {!isCapturing ? (
              <button
                onClick={startCamera}
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Camera className="w-5 h-5" />
                <span>Start Camera</span>
              </button>
            ) : (
              <button
                onClick={stopCamera}
                className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <X className="w-5 h-5" />
                <span>Stop Camera</span>
              </button>
            )}
          </div>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          className="hidden"
        />
      </div>

      {/* Camera Error */}
      {cameraError && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
          <div className="flex items-center space-x-3">
            <X className="w-6 h-6 text-red-600 dark:text-red-400" />
            <div>
              <h3 className="font-semibold text-red-800 dark:text-red-400">Camera Access Error</h3>
              <p className="text-red-700 dark:text-red-300 text-sm">{cameraError}</p>
            </div>
          </div>
        </div>
      )}

      {/* Camera View */}
      {isCapturing && (
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
          <div className="relative">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="w-full max-w-2xl mx-auto rounded-lg"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <button
                onClick={capturePhoto}
                className="w-16 h-16 bg-white rounded-full border-4 border-blue-600 hover:bg-blue-50 transition-colors flex items-center justify-center"
              >
                <Camera className="w-8 h-8 text-blue-600" />
              </button>
            </div>
          </div>
          <canvas ref={canvasRef} className="hidden" />
        </div>
      )}

      {/* Processing Indicator */}
      {isProcessing && (
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <div>
              <h3 className="font-semibold text-blue-800 dark:text-blue-400">Processing Receipt</h3>
              <p className="text-blue-700 dark:text-blue-300 text-sm">Extracting text and data...</p>
            </div>
          </div>
        </div>
      )}

      {/* Captured Images Gallery */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
        <div className="p-6 border-b border-gray-200/50 dark:border-gray-700/50">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Captured Images</h3>
        </div>

        {capturedImages.length > 0 ? (
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capturedImages.map((image) => (
                <div key={image.id} className="bg-white/50 dark:bg-gray-700/50 rounded-lg overflow-hidden border border-gray-200/50 dark:border-gray-600/50">
                  <div className="aspect-video bg-gray-100 dark:bg-gray-700 relative">
                    <img
                      src={image.url}
                      alt={`Captured ${image.type}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <span className={`px-2 py-1 text-xs rounded-full text-white ${
                        image.type === 'receipt' ? 'bg-green-600' :
                        image.type === 'document' ? 'bg-blue-600' :
                        'bg-purple-600'
                      }`}>
                        {image.type}
                      </span>
                    </div>
                    {image.extractedText && (
                      <div className="absolute top-2 right-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {image.timestamp.toLocaleString()}
                      </span>
                      {image.location && (
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {image.location}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setSelectedImage(image)}
                        className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors text-sm"
                      >
                        <Eye size={14} />
                        <span>View</span>
                      </button>
                      <button
                        onClick={() => downloadImage(image)}
                        className="flex items-center justify-center px-3 py-2 bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors"
                      >
                        <Download size={14} />
                      </button>
                      <button
                        onClick={() => deleteImage(image.id)}
                        className="flex items-center justify-center px-3 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-12 text-center">
            <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No images captured</h3>
            <p className="text-gray-600 dark:text-gray-400">Start capturing photos, receipts, or documents</p>
          </div>
        )}
      </div>

      {/* Image Detail Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {selectedImage.type.charAt(0).toUpperCase() + selectedImage.type.slice(1)} Details
              </h3>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <img
                  src={selectedImage.url}
                  alt={`Captured ${selectedImage.type}`}
                  className="w-full rounded-lg"
                />
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Details</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Type:</span>
                      <span className="text-gray-900 dark:text-white capitalize">{selectedImage.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Captured:</span>
                      <span className="text-gray-900 dark:text-white">{selectedImage.timestamp.toLocaleString()}</span>
                    </div>
                    {selectedImage.location && (
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Location:</span>
                        <span className="text-gray-900 dark:text-white">{selectedImage.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {selectedImage.extractedText && (
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Extracted Text</h4>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <pre className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                        {selectedImage.extractedText}
                      </pre>
                    </div>
                  </div>
                )}

                <div className="flex space-x-3">
                  <button
                    onClick={() => downloadImage(selectedImage)}
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Download size={16} />
                    <span>Download</span>
                  </button>
                  <button
                    onClick={() => {
                      deleteImage(selectedImage.id);
                      setSelectedImage(null);
                    }}
                    className="flex items-center justify-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}