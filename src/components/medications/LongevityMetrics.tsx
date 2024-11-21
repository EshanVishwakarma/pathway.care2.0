import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Brain, Shield, Activity } from 'lucide-react';

const metrics = [
  {
    name: 'Cardiovascular Health',
    score: 85,
    change: '+12',
    icon: Heart,
    color: 'rose',
  },
  {
    name: 'Cognitive Function',
    score: 92,
    change: '+8',
    icon: Brain,
    color: 'purple',
  },
  {
    name: 'Immune System',
    score: 78,
    change: '+15',
    icon: Shield,
    color: 'green',
  },
  {
    name: 'Physical Recovery',
    score: 88,
    change: '+10',
    icon: Activity,
    color: 'blue',
  },
];

export function LongevityMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => (
        <motion.div
          key={metric.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg bg-${metric.color}-50`}>
              <metric.icon className={`h-6 w-6 text-${metric.color}-600`} />
            </div>
            <span className="text-sm font-medium text-green-600">
              {metric.change}%
            </span>
          </div>
          <h3 className="text-lg font-medium text-gray-900">{metric.name}</h3>
          <div className="mt-2">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-gray-500">Recovery Score</span>
              <span className="text-sm font-medium text-gray-900">{metric.score}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${metric.score}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={`bg-${metric.color}-600 h-2 rounded-full`}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}