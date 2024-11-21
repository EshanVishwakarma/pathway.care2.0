import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Brain, Shield, Activity, TrendingUp } from 'lucide-react';

export function HealthSummary() {
  const healthMetrics = [
    {
      name: 'Physical Recovery',
      score: 85,
      trend: '+5%',
      icon: Activity,
      details: 'Energy levels improving',
      color: 'blue',
      alerts: ['Light exercise recommended', 'Stay hydrated'],
    },
    {
      name: 'Immune Function',
      score: 92,
      trend: '+8%',
      icon: Shield,
      details: 'Strong immune response',
      color: 'green',
      alerts: ['Continue supplements', 'Maintain sleep schedule'],
    },
    {
      name: 'Mental Wellness',
      score: 78,
      trend: '+12%',
      icon: Brain,
      details: 'Stress levels decreasing',
      color: 'purple',
      alerts: ['Next therapy: Tomorrow', 'Try meditation session'],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-sm p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Recovery Progress
          </h2>
          <p className="text-sm text-gray-500">Updated 2 hours ago</p>
        </div>
        <TrendingUp className="h-5 w-5 text-green-500" />
      </div>

      <div className="space-y-6">
        {healthMetrics.map((metric) => (
          <div key={metric.name} className="relative">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg bg-${metric.color}-50`}>
                  <metric.icon className={`h-5 w-5 text-${metric.color}-600`} />
                </div>
                <div>
                  <h3 className="font-medium">{metric.name}</h3>
                  <p className="text-sm text-gray-500">{metric.details}</p>
                </div>
              </div>
              <span className="text-green-600 text-sm font-medium">
                {metric.trend}
              </span>
            </div>

            <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${metric.score}%` }}
                className={`bg-${metric.color}-600 h-2 rounded-full`}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
            </div>

            {metric.alerts && (
              <div className="mt-2">
                {metric.alerts.map((alert, index) => (
                  <div
                    key={index}
                    className="flex items-center text-sm text-gray-600 mt-1"
                  >
                    <AlertCircle className="h-4 w-4 text-amber-500 mr-2" />
                    {alert}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
