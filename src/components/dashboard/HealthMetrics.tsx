import React from 'react';
import { Heart, Activity, Weight, Thermometer } from 'lucide-react';

const metrics = [
  {
    name: 'Heart Rate',
    value: '72',
    unit: 'bpm',
    change: '+2',
    trend: 'up',
    icon: Heart,
    color: 'rose',
  },
  {
    name: 'Blood Pressure',
    value: '120/80',
    unit: 'mmHg',
    change: '-5',
    trend: 'down',
    icon: Activity,
    color: 'blue',
  },
  {
    name: 'Weight',
    value: '145',
    unit: 'lbs',
    change: '-2',
    trend: 'down',
    icon: Weight,
    color: 'green',
  },
  {
    name: 'Temperature',
    value: '98.6',
    unit: '°F',
    change: '0',
    trend: 'stable',
    icon: Thermometer,
    color: 'amber',
  },
];

export function HealthMetrics() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Health Metrics
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric) => (
          <div
            key={metric.name}
            className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <div className={`p-2 rounded-lg bg-${metric.color}-100`}>
                <metric.icon className={`h-5 w-5 text-${metric.color}-600`} />
              </div>
              <span
                className={`text-sm font-medium ${
                  metric.trend === 'up'
                    ? 'text-green-600'
                    : metric.trend === 'down'
                    ? 'text-red-600'
                    : 'text-gray-600'
                }`}
              >
                {metric.change}
              </span>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">
                {metric.name}
              </h3>
              <div className="flex items-baseline mt-1">
                <p className="text-2xl font-semibold text-gray-900">
                  {metric.value}
                </p>
                <p className="ml-1 text-sm text-gray-500">{metric.unit}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
