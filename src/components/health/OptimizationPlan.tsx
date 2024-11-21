import React from 'react';
import { motion } from 'framer-motion';
import { Target, Check, Clock, TrendingUp } from 'lucide-react';

interface OptimizationPlanProps {
  category: {
    id: string;
    name: string;
  };
}

export function OptimizationPlan({ category }: OptimizationPlanProps) {
  const plans = {
    cardiovascular: {
      shortTerm: [
        'Complete 30 minutes of moderate cardio 3x/week',
        'Practice deep breathing exercises daily',
        'Maintain consistent sleep schedule',
      ],
      longTerm: [
        'Build up to 150 minutes of cardio per week',
        'Achieve resting heart rate below 60 bpm',
        'Reduce blood pressure to optimal range',
      ],
    },
    cognitive: {
      shortTerm: [
        'Complete daily brain training exercises',
        'Practice mindfulness for 10 minutes daily',
        'Ensure 7-8 hours of quality sleep',
      ],
      longTerm: [
        'Master advanced memory techniques',
        'Develop robust stress management routine',
        'Establish optimal work-rest patterns',
      ],
    },
  };

  const getPlanForCategory = () => {
    return plans[category.id as keyof typeof plans] || plans.cardiovascular;
  };

  const currentPlan = getPlanForCategory();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-sm p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900">
            Optimization Plan
          </h3>
          <p className="text-sm text-gray-500">
            Your personalized improvement roadmap
          </p>
        </div>
        <Target className="h-5 w-5 text-gray-400" />
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Clock className="h-5 w-5 text-blue-600" />
            <h4 className="text-sm font-medium text-gray-900">
              Short-term Goals
            </h4>
          </div>
          <ul className="space-y-3">
            {currentPlan.shortTerm.map((goal, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-blue-600 flex items-center justify-center">
                  <Check className="h-3 w-3 text-blue-600" />
                </div>
                <span className="text-sm text-gray-600">{goal}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="h-5 w-5 text-purple-600" />
            <h4 className="text-sm font-medium text-gray-900">
              Long-term Goals
            </h4>
          </div>
          <ul className="space-y-3">
            {currentPlan.longTerm.map((goal, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-purple-600 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                </div>
                <span className="text-sm text-gray-600">{goal}</span>
              </li>
            ))}
          </ul>
        </div>

        <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Update Goals
        </button>
      </div>
    </motion.div>
  );
}
