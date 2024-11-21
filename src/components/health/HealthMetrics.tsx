import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Brain, Activity, Dna, TrendingUp } from 'lucide-react';

interface HealthMetricsProps {
  category: {
    id: string;
    name: string;
    score: number;
  };
}

export function HealthMetrics({ category }: HealthMetricsProps) {
  const metrics = {
    cardiovascular: {
      heartRate: { value: 72, unit: 'bpm', change: -2 },
      bloodPressure: { value: '120/80', unit: 'mmHg', change: 0 },
      hrv: { value: 65, unit: 'ms', change: 5 },
      recoveryScore: { value: 85, unit: '%', change: 3 },
    },
    cognitive: {
      reactionTime: { value: 245, unit: 'ms', change: -15 },
      memoryScore: { value: 92, unit: '%', change: 4 },
      focusTime: { value: 4.5, unit: 'hrs', change: 0.5 },
      stressLevel: { value: 28, unit: '%', change: -8 },
    },
    immune: {
      inflammationMarker: { value: 2.1, unit: 'mg/L', change: -0.4 },
      whiteBloodCells: { value: 6.8, unit: 'K/µL', change: 0.2 },
      vitaminD: { value: 45, unit: 'ng/mL', change: 5 },
      zincLevel: { value: 90, unit: 'µg/dL', change: 10 },
    },
    physical: {
      muscleStrength: { value: 82, unit: '%', change: 5 },
      endurance: { value: 75, unit: '%', change: 8 },
      flexibility: { value: 68, unit: '%', change: 4 },
      balance: { value: 88, unit: '%', change: 6 },
    },
  };

  const getMetricsForCategory = () => {
    return metrics[category.id as keyof typeof metrics] || metrics.cardiovascular;
  };

  const currentMetrics = getMetricsForCategory();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-sm p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900">{category.name} Metrics</h3>
          <p className="text-sm text-gray-500">Real-time health indicators</p>
        </div>
        <div className="flex items-center space-x-2 text-green-600">
          <TrendingUp className="h-5 w-5" />
          <span className="text-sm font-medium">Improving</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(currentMetrics).map(([key, data]) => (
          <div
            key={key}
            className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-medium text-gray-900 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </h4>
              <span
                className={`text-sm font-medium ${
                  data.change > 0
                    ? 'text-green-600'
                    : data.change < 0
                    ? 'text-red-600'
                    : 'text-gray-600'
                }`}
              >
                {data.change > 0 ? '+' : ''}
                {data.change}
              </span>
            </div>
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold text-gray-900">{data.value}</span>
              <span className="text-sm text-gray-500">{data.unit}</span>
            </div>
            <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '70%' }}
                className="bg-blue-600 h-2 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}