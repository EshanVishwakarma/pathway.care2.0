import React from 'react';
import { motion } from 'framer-motion';
import { Watch, Heart, Activity, Moon } from 'lucide-react';

interface WearableInsightsProps {
  category: {
    id: string;
    name: string;
  };
}

export function WearableInsights({ category }: WearableInsightsProps) {
  const wearableData = {
    heartRate: {
      current: 72,
      min: 58,
      max: 142,
      trend: 'stable',
    },
    steps: {
      current: 8500,
      goal: 10000,
      trend: 'increasing',
    },
    sleep: {
      duration: '7h 15m',
      quality: 85,
      deepSleep: '2h 30m',
    },
    activity: {
      activeMinutes: 45,
      caloriesBurned: 420,
      exercises: ['Walking', 'Yoga'],
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-sm p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-gray-900">Wearable Insights</h3>
        <Watch className="h-5 w-5 text-gray-400" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-rose-50 rounded-lg">
            <div>
              <div className="flex items-center">
                <Heart className="h-5 w-5 text-rose-600 mr-2" />
                <span className="text-sm font-medium text-gray-900">
                  Heart Rate
                </span>
              </div>
              <p className="mt-1 text-2xl font-semibold text-rose-600">
                {wearableData.heartRate.current}{' '}
                <span className="text-sm">bpm</span>
              </p>
              <p className="text-xs text-gray-500">
                Range: {wearableData.heartRate.min}-{wearableData.heartRate.max}{' '}
                bpm
              </p>
            </div>
            <div className="h-16 w-24 bg-rose-100 rounded-lg">
              {/* Heart rate graph would go here */}
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
            <div>
              <div className="flex items-center">
                <Activity className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-gray-900">
                  Daily Activity
                </span>
              </div>
              <p className="mt-1 text-2xl font-semibold text-blue-600">
                {wearableData.steps.current}{' '}
                <span className="text-sm">steps</span>
              </p>
              <p className="text-xs text-gray-500">
                Goal: {wearableData.steps.goal} steps
              </p>
            </div>
            <div className="h-16 w-24 bg-blue-100 rounded-lg">
              {/* Activity graph would go here */}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
            <div>
              <div className="flex items-center">
                <Moon className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-sm font-medium text-gray-900">
                  Sleep Quality
                </span>
              </div>
              <p className="mt-1 text-2xl font-semibold text-purple-600">
                {wearableData.sleep.quality}%
              </p>
              <p className="text-xs text-gray-500">
                Duration: {wearableData.sleep.duration}
              </p>
            </div>
            <div className="h-16 w-24 bg-purple-100 rounded-lg">
              {/* Sleep graph would go here */}
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="text-sm font-medium text-gray-900 mb-2">
              Today's Activities
            </h4>
            <div className="space-y-2">
              {wearableData.activity.exercises.map((exercise, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{exercise}</span>
                  <span className="text-xs text-gray-500">
                    {Math.round(
                      wearableData.activity.caloriesBurned /
                        wearableData.activity.exercises.length
                    )}{' '}
                    cal
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
