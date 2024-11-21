import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface HealthCategoryProps {
  category: {
    id: string;
    name: string;
    icon: LucideIcon;
    score: number;
    change: string;
    color: string;
    description: string;
  };
  onClick: () => void;
}

export function HealthCategory({ category, onClick }: HealthCategoryProps) {
  const Icon = category.icon;

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="w-full text-left bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg bg-${category.color}-50`}>
          <Icon className={`h-6 w-6 text-${category.color}-600`} />
        </div>
        <span className="text-sm font-medium text-green-600">
          {category.change}%
        </span>
      </div>

      <h3 className="text-lg font-medium text-gray-900">{category.name}</h3>
      <p className="mt-1 text-sm text-gray-500">{category.description}</p>

      <div className="mt-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm text-gray-500">Optimization Score</span>
          <span className="text-sm font-medium text-gray-900">
            {category.score}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${category.score}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className={`bg-${category.color}-600 h-2 rounded-full`}
          />
        </div>
      </div>
    </motion.button>
  );
}
