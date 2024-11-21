import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, TrendingUp, LucideIcon } from 'lucide-react';

interface LongevityImpact {
  area: string;
  impact: number;
  description: string;
}

interface MedicationProps {
  medication: {
    id: string;
    name: string;
    category: string;
    purpose: string;
    longevityImpact: LongevityImpact[];
    sideEffects: string[];
    interactions: string[];
    researchScore: number;
    icon: LucideIcon;
  };
}

export function MedicationInsights({ medication }: MedicationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-sm overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-50 p-3 rounded-lg">
              <medication.icon className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">{medication.name}</h3>
              <p className="text-sm text-gray-500">{medication.category}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-green-500" />
            <span className="text-sm font-medium text-gray-900">
              {medication.researchScore}% Research Confidence
            </span>
          </div>
        </div>

        <p className="mt-4 text-sm text-gray-600">{medication.purpose}</p>

        <div className="mt-6 space-y-4">
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2">Longevity Impact</h4>
            {medication.longevityImpact.map((impact) => (
              <div key={impact.area} className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">{impact.area}</span>
                  <span className="font-medium">{impact.impact}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${impact.impact}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="bg-blue-600 h-2 rounded-full"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">{impact.description}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-100 pt-4">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Important Considerations</h4>
            <div className="space-y-3">
              <div>
                <h5 className="text-sm text-gray-600 mb-1">Side Effects:</h5>
                <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                  {medication.sideEffects.map((effect, index) => (
                    <li key={index}>{effect}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-sm text-gray-600 mb-1">Interactions:</h5>
                <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                  {medication.interactions.map((interaction, index) => (
                    <li key={index}>{interaction}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}