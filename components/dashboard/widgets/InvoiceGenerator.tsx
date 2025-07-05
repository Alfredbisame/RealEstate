'use client';

import { useState } from 'react';
import { FileText, Download, Send, Plus, Trash2 } from 'lucide-react';

interface InvoiceData {
  clientName: string;
  projectName: string;
  materials: Array<{
    item: string;
    quantity: number;
    unitPrice: number;
    total: number;
  }>;
  labor: number;
  permits: number;
  subtotal: number;
  vat: number;
  total: number;
}

interface InvoiceGeneratorProps {
  data: InvoiceData;
}

export default function InvoiceGenerator({ data }: InvoiceGeneratorProps) {
  const [clientName, setClientName] = useState(data.clientName);
  const [projectName, setProjectName] = useState(data.projectName);
  const [materials, setMaterials] = useState(data.materials);
  const [labor, setLabor] = useState(data.labor);
  const [permits, setPermits] = useState(data.permits);

  const addMaterialRow = () => {
    setMaterials([...materials, { item: '', quantity: 0, unitPrice: 0, total: 0 }]);
  };

  const removeMaterialRow = (index: number) => {
    setMaterials(materials.filter((_, i) => i !== index));
  };

  const updateMaterial = (index: number, field: string, value: any) => {
    const updatedMaterials = materials.map((material, i) => {
      if (i === index) {
        const updated = { ...material, [field]: value };
        if (field === 'quantity' || field === 'unitPrice') {
          updated.total = updated.quantity * updated.unitPrice;
        }
        return updated;
      }
      return material;
    });
    setMaterials(updatedMaterials);
  };

  const materialsTotal = materials.reduce((sum, item) => sum + item.total, 0);
  const subtotal = materialsTotal + labor + permits;
  const vat = subtotal * 0.15;
  const total = subtotal + vat;

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center space-x-2 mb-6">
        <FileText className="w-6 h-6 text-orange-600" />
        <h3 className="font-semibold text-gray-800 dark:text-white text-lg">Invoice Generator</h3>
      </div>

      <div className="flex-1 space-y-6 overflow-auto">
        {/* Client Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Client Name
            </label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="Enter client name"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Project Name
            </label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="Enter project name"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Materials Section */}
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-medium text-gray-900 dark:text-white">Materials</h4>
            <button
              onClick={addMaterialRow}
              className="flex items-center space-x-1 px-3 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm"
            >
              <Plus size={16} />
              <span>Add Item</span>
            </button>
          </div>
          
          <div className="space-y-3 max-h-48 overflow-auto">
            {materials.map((material, index) => (
              <div key={index} className="grid grid-cols-12 gap-2 items-center bg-white dark:bg-gray-800 p-3 rounded-lg">
                <div className="col-span-4">
                  <input
                    type="text"
                    value={material.item}
                    onChange={(e) => updateMaterial(index, 'item', e.target.value)}
                    placeholder="Item name"
                    className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-1 focus:ring-orange-500"
                  />
                </div>
                <div className="col-span-2">
                  <input
                    type="number"
                    value={material.quantity}
                    onChange={(e) => updateMaterial(index, 'quantity', Number(e.target.value))}
                    placeholder="Qty"
                    className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-1 focus:ring-orange-500"
                  />
                </div>
                <div className="col-span-2">
                  <input
                    type="number"
                    value={material.unitPrice}
                    onChange={(e) => updateMaterial(index, 'unitPrice', Number(e.target.value))}
                    placeholder="Price"
                    className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-1 focus:ring-orange-500"
                  />
                </div>
                <div className="col-span-3">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    GHS {material.total.toLocaleString()}
                  </span>
                </div>
                <div className="col-span-1">
                  <button
                    onClick={() => removeMaterialRow(index)}
                    className="p-1 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/20 rounded transition-colors"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Labor and Permits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Labor Cost (GHS)
            </label>
            <input
              type="number"
              value={labor}
              onChange={(e) => setLabor(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Permits & Fees (GHS)
            </label>
            <input
              type="number"
              value={permits}
              onChange={(e) => setPermits(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Invoice Summary */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-6">
          <h4 className="font-medium text-gray-900 dark:text-white mb-4">Invoice Summary</h4>
          
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Materials:</span>
              <span className="font-medium text-gray-900 dark:text-white">
                GHS {materialsTotal.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Labor:</span>
              <span className="font-medium text-gray-900 dark:text-white">
                GHS {labor.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Permits:</span>
              <span className="font-medium text-gray-900 dark:text-white">
                GHS {permits.toLocaleString()}
              </span>
            </div>
            <hr className="border-gray-300 dark:border-gray-600" />
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Subtotal:</span>
              <span className="font-medium text-gray-900 dark:text-white">
                GHS {subtotal.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">VAT (15%):</span>
              <span className="font-medium text-gray-900 dark:text-white">
                GHS {vat.toLocaleString()}
              </span>
            </div>
            <hr className="border-gray-300 dark:border-gray-600" />
            <div className="flex justify-between font-semibold text-lg">
              <span className="text-gray-900 dark:text-white">Total:</span>
              <span className="text-orange-600">
                GHS {total.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
            <Download size={18} />
            <span>Download PDF</span>
          </button>
          <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Send size={18} />
            <span>Send Invoice</span>
          </button>
        </div>

        {/* Profit Analysis */}
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <span className="text-green-700 dark:text-green-400 font-medium">Estimated Profit (25%):</span>
            <span className="text-green-600 font-semibold text-lg">
              GHS {(total * 0.25).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}