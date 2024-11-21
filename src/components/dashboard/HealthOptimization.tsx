import React from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  Leaf,
  Brain,
  Heart,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';

export function HealthOptimization() {
  const recommendations = [
    {
      category: 'Physical Activity',
      icon: Heart,
      color: 'rose',
      currentStreak: 5,
      tasks: [
        {
          title: 'Gentle Walking',
          duration: '20 mins',
          completed: true,
          timeOfDay: 'Morning',
        },
        {
          title: 'Stretching Routine',
          duration: '15 mins',
          completed: false,
          timeOfDay: 'Evening',
        },
      ],
    },
    {
      category: 'Nutrition',
      icon: Leaf,
      color: 'green',
      tasks: [
        {
          title: 'Protein-rich Breakfast',
          completed: true,
          timeOfDay: 'Morning',
        },
        {
          title: 'Hydration Goal',
          target: '8 glasses',
          current: 5,
          timeOfDay: 'Throughout day',
        },
      ],
    },
    {
      category: 'Mental Wellness',
      icon: Brain,
      color: 'purple',
      tasks: [
        {
          title: 'Meditation Session',
          duration: '10 mins',
          completed: false,
          timeOfDay: 'Morning',
        },
        {
          title: 'Gratitude Journal',
          completed: false,
          timeOfDay: 'Evening',
        },
      ],
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
            Today's Wellness Plan
          </h2>
          <p className="text-sm text-gray-500">Personalized recommendations</p>
        </div>
        <Target className="h-5 w-5 text-gray-400" />
      </div>

      <div className="space-y-6">
        {recommendations.map((category) => (
          <div key={category.category} className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg bg-${category.color}-50`}>
                  <category.icon
                    className={`h-5 w-5 text-${category.color}-600`}
                  />
                </div>
                <h3 className="font-medium text-gray-900">
                  {category.category}
                </h3>
              </div>
              {category.currentStreak && (
                <span className="text-sm text-gray-500">
                  {category.currentStreak} day streak
                </span>
              )}
            </div>

            <div className="space-y-3">
              {category.tasks.map((task, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg bg-gray-50"
                >
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => {}}
                      className="h-4 w-4 text-blue-600 rounded border-gray-300"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {task.title}
                      </p>
                      <p className="text-xs text-gray-500">
                        {task.duration && `${task.duration} • `}
                        {task.timeOfDay}
                      </p>
                    </div>
                  </div>

                  {task.target && (
                    <div className="text-sm text-gray-600">
                      {task.current}/{task.target}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        <button className="w-full mt-4 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center justify-center">
          <TrendingUp className="h-4 w-4 mr-2" />
          View Long-term Progress
        </button>
      </div>
    </motion.div>
  );
}
