import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, AlertCircle, Check, ExternalLink } from 'lucide-react';

interface Supplement {
  name: string;
  dosage: string;
  benefits: string[];
  timing: string;
  interactions: string[];
  priority: 'High' | 'Medium' | 'Low';
  evidence: number;
}

const supplements: Supplement[] = [
  {
    name: 'Vitamin D3',
    dosage: '2000-4000 IU',
    benefits: [
      'Supports immune system function',
      'Promotes bone health',
      'May reduce inflammation',
      'Important for cognitive function'
    ],
    timing: 'Morning with fatty meal',
    interactions: ['Take separately from calcium supplements'],
    priority: 'High',
    evidence: 92
  },
  {
    name: 'Omega-3 Fish Oil',
    dosage: '1000-2000mg EPA/DHA',
    benefits: [
      'Supports cardiovascular health',
      'Reduces inflammation',
      'Promotes brain function',
      'May help with joint health'
    ],
    timing: 'With meals, split into two doses',
    interactions: ['May interact with blood thinners'],
    priority: 'High',
    evidence: 88
  },
  {
    name: 'Magnesium',
    dosage: '400-500mg',
    benefits: [
      'Supports muscle recovery',
      'Promotes better sleep',
      'Helps regulate nerve function',
      'Important for energy production'
    ],
    timing: 'Evening before bed',
    interactions: ['Take 2 hours apart from other minerals'],
    priority: 'Medium',
    evidence: 85
  }
];

interface SupplementRecommendationsProps {
  medications: any[];
}

export function SupplementRecommendations({ medications }: SupplementRecommendationsProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900">Supplement Recommendations</h3>
          <p className="text-sm text-gray-500">Personalized for optimal health</p>
        </div>
        <Leaf className="h-5 w-5 text-green-600" />
      </div>

      <div className="bg-blue-50 rounded-lg p-4 mb-6">
        <div className="flex items-start space-x-3">
          <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
          <p className="text-sm text-blue-700">
            These recommendations are based on your health profile and current medications.
            Always consult your healthcare provider before starting any new supplements.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {supplements.map((supplement, index) => (
          <motion.div
            key={supplement.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border-t border-gray-100 pt-6 first:pt-0 first:border-0"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-medium text-gray-900">{supplement.name}</h4>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    supplement.priority === 'High' 
                      ? 'bg-green-100 text-green-800'
                      : supplement.priority === 'Medium'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {supplement.priority} Priority
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-500">Recommended dosage: {supplement.dosage}</p>
                
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-sm font-medium text-gray-900 mb-2">Benefits</h5>
                    <ul className="space-y-2">
                      {supplement.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-medium text-gray-900 mb-2">Important Notes</h5>
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-medium">Timing:</span> {supplement.timing}
                    </p>
                    <div className="space-y-1">
                      {supplement.interactions.map((interaction, idx) => (
                        <p key={idx} className="text-sm text-gray-600">• {interaction}</p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-500">Research Evidence</span>
                    <span className="text-sm font-medium text-gray-900">{supplement.evidence}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${supplement.evidence}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="bg-green-600 h-2 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button className="flex items-center text-sm text-blue-600 hover:text-blue-700">
          View Detailed Research
          <ExternalLink className="ml-2 h-4 w-4" />
        </button>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
          Download Supplement Plan
        </button>
      </div>
    </div>
  );
}