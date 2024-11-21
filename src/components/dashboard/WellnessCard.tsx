import React from 'react';
import { LucideIcon } from 'lucide-react';

interface WellnessCardProps {
  title: string;
  icon: LucideIcon;
  metric: string;
  description: string;
  color: string;
}

export function WellnessCard({ title, icon: Icon, metric, description, color }: WellnessCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg bg-${color}-100`}>
          <Icon className={`h-6 w-6 text-${color}-600`} />
        </div>
      </div>
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <div className="mt-2">
        <p className="text-2xl font-semibold text-gray-900">{metric}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}