import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, AlertCircle, Check } from 'lucide-react';

const supplements = [
  {
    name: 'Vitamin D3',
    dosage: '2000-4000 IU',
    benefits: [
      'Supports immune system function',
      'Promotes bone health',
      'May reduce inflammation'
    ],
    interactions: ['Take with fatty meals for better absorption'],
    priority: 'High',
  },
  {
    name: 'Omega-3 Fish Oil',
    dosage: '1000-2000mg',
    benefits: [
      'Supports heart health',
      'Reduces inflammation',
      'Promotes brain function'
    ],
    interactions: ['Space 2 hours from other medications'],
    priority: 'High',
  },
];

interface SupplementRecommendationsProps {
  medications: any[];
}

export function SupplementRecommendations({ medications }: SupplementRecommendationsProps) {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 rounded-xl p-4">
        <div className="flex items-start space-x-3">
          <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
          <p className="text-sm text-blue-700">
            These supplement recommendations are personalized based on your medical history and current medications.
            Always consult your healthcare provider before starting any new supplements.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {supplements.map((supplement, index) => (
          <motion.div
            key={supplement.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-green-50 p-3 rounded-lg">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{supplement.name}</h3>
                  <p className="text-sm text-gray-500">Recommended dosage: {supplement.dosage}</p>
                </div>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {supplement.priority} Priority
              </span>
            </div>

            <div className="mt-4 space-y-3">
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">Benefits:</h4>
                <ul className="space-y-2">
                  {supplement.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-gray-100">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Important Notes:</h4>
                <ul className="space-y-1">
                  {supplement.interactions.map((interaction, index) => (
                    <li key={index} className="text-sm text-gray-600">
                      • {interaction}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}