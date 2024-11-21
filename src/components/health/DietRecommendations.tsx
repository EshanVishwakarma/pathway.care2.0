import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Apple, Fish, Leaf, Camera } from 'lucide-react';

interface DietRecommendationsProps {
  category: {
    id: string;
    name: string;
  };
}

export function DietRecommendations({ category }: DietRecommendationsProps) {
  const dietPlan = {
    macros: {
      protein: 30,
      carbs: 40,
      fats: 30,
    },
    recommendations: [
      {
        type: 'Proteins',
        icon: Fish,
        items: ['Wild-caught salmon', 'Lean chicken', 'Grass-fed beef'],
        why: 'Support muscle recovery and immune function',
      },
      {
        type: 'Vegetables',
        icon: Leaf,
        items: ['Leafy greens', 'Cruciferous vegetables', 'Colorful bell peppers'],
        why: 'Rich in antioxidants and phytonutrients',
      },
      {
        type: 'Fruits',
        icon: Apple,
        items: ['Berries', 'Citrus fruits', 'Pomegranate'],
        why: 'Boost immune system and provide vital nutrients',
      },
    ],
    restrictions: ['Limit processed foods', 'Avoid excessive sugar', 'Monitor sodium intake'],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-sm p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900">Personalized Nutrition Plan</h3>
          <p className="text-sm text-gray-500">Optimized for your recovery and long-term health</p>
        </div>
        <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
          <Camera className="w-4 h-4 mr-2" />
          Log Meal
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {Object.entries(dietPlan.macros).map(([macro, percentage]) => (
          <div key={macro} className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-900 capitalize mb-2">{macro}</h4>
            <div className="flex items-end space-x-2">
              <span className="text-2xl font-bold text-gray-900">{percentage}%</span>
              <span className="text-sm text-gray-500 mb-1">of daily intake</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                className="bg-blue-600 h-2 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        {dietPlan.recommendations.map((group) => (
          <div key={group.type} className="border-t border-gray-100 pt-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <group.icon className="h-5 w-5 text-blue-600" />
              </div>
              <h4 className="text-sm font-medium text-gray-900">{group.type}</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500 mb-2">{group.why}</p>
                <ul className="space-y-1">
                  {group.items.map((item, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}

        <div className="border-t border-gray-100 pt-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Important Considerations</h4>
          <ul className="space-y-2">
            {dietPlan.restrictions.map((restriction, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2" />
                {restriction}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}