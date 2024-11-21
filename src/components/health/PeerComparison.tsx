import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Sparkles } from 'lucide-react';

interface PeerComparisonProps {
  category: {
    id: string;
    name: string;
    score: number;
  };
}

export function PeerComparison({ category }: PeerComparisonProps) {
  const communityData = {
    averageScore: 75,
    activeMembers: 1000,
    sharedJourneys: [
      'Moving more with daily walks like 80% of our community',
      'Practicing mindfulness alongside 75% of members',
      'Building strength through regular movement',
    ],
    supportiveGoals: [
      'Join our morning walk challenge',
      'Try our guided meditation sessions',
      'Connect with others in strength training groups',
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-sm p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-gray-900">
          Community Insights
        </h3>
        <Users className="h-5 w-5 text-blue-400" />
      </div>

      <div className="space-y-6">
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-4 bg-blue-50 rounded-full">
            <Heart className="h-8 w-8 text-blue-600" />
          </div>
          <p className="mt-2 text-sm text-gray-500">
            You're part of a supportive community of{' '}
            {communityData.activeMembers} survivors who had similar treatments
            as you
          </p>
          <p className="text-xl font-medium text-gray-900 mt-2">
            Together on the journey to wellness
          </p>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">Your Wellness Journey</span>
            <span className="text-sm font-medium text-gray-900">
              {category.score}% of goals met
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${category.score}%` }}
              className="bg-blue-600 h-2 rounded-full"
            />
          </div>

          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">Community Average</span>
            <span className="text-sm font-medium text-gray-900">
              {communityData.averageScore}% of goals met
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${communityData.averageScore}%` }}
              className="bg-blue-400 h-2 rounded-full"
            />
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-2">
            Shared Wellness Journeys
          </h4>
          <ul className="space-y-2">
            {communityData.sharedJourneys.map((journey, index) => (
              <li key={index} className="flex items-start text-sm">
                <Sparkles className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                <span className="text-gray-600">{journey}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-2">
            Community Activities
          </h4>
          <ul className="space-y-2">
            {communityData.supportiveGoals.map((goal, index) => (
              <li key={index} className="text-sm text-gray-600 pl-4 relative">
                <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-blue-600 rounded-full" />
                {goal}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
