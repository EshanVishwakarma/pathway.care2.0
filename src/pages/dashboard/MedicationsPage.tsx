import React, { useState } from 'react';
import {
  Heart,
  Brain,
  Shield,
  Activity,
  Utensils,
  Camera,
  ChevronRight,
  TrendingUp,
  Dna,
  BookOpen,
  Leaf,
  AlertCircle,
} from 'lucide-react';
import { HealthCategory } from '../../components/health/HealthCategory';
import { HealthMetrics } from '../../components/health/HealthMetrics';
import { DietRecommendations } from '../../components/health/DietRecommendations';
import { WearableInsights } from '../../components/health/WearableInsights';
import { PeerComparison } from '../../components/health/PeerComparison';
import { OptimizationPlan } from '../../components/health/OptimizationPlan';
import { ResearchUpdates } from '../../components/health/ResearchUpdates';
import { SupplementRecommendations } from '../../components/health/SupplementRecommendations';
import { SideEffectsGuide } from '../../components/health/SideEffectsGuide';

const categories = [
  {
    id: 'cardiovascular',
    name: 'Cardiovascular Health',
    icon: Heart,
    score: 85,
    change: '+12',
    color: 'rose',
    description: 'Optimize heart health post-treatment',
  },
  {
    id: 'cognitive',
    name: 'Cognitive Function',
    icon: Brain,
    score: 92,
    change: '+8',
    color: 'purple',
    description: 'Support brain health and memory',
  },
  {
    id: 'immune',
    name: 'Immune System',
    icon: Shield,
    score: 78,
    change: '+15',
    color: 'green',
    description: 'Strengthen immune response',
  },
  {
    id: 'physical',
    name: 'Physical Recovery',
    icon: Activity,
    score: 88,
    change: '+10',
    color: 'blue',
    description: 'Enhance physical resilience',
  },
  {
    id: 'nutrition',
    name: 'Nutrition & Diet',
    icon: Utensils,
    score: 82,
    change: '+5',
    color: 'amber',
    description: 'Personalized nutrition plan',
  },
  {
    id: 'biomarkers',
    name: 'Biomarkers',
    icon: Dna,
    score: 90,
    change: '+18',
    color: 'indigo',
    description: 'Track key health indicators',
  },
];

const researchUpdates = [
  {
    id: '1',
    title: 'Long-term Cardiovascular Health in Cancer Survivors',
    date: '2024-03-01',
    source: 'Journal of Clinical Oncology',
    relevance: 95,
    summary:
      'New research shows significant improvements in long-term cardiovascular outcomes for survivors who maintain regular physical activity and follow personalized supplement regimens.',
    link: 'https://example.com/research/1',
  },
  {
    id: '2',
    title: 'Impact of Nutrition on Cancer Recurrence Rates',
    date: '2024-02-15',
    source: 'Nature Medicine',
    relevance: 88,
    summary:
      'Study demonstrates correlation between Mediterranean diet adherence and reduced cancer recurrence rates in survivors.',
    link: 'https://example.com/research/2',
  },
];

type View = 'overview' | 'detailed' | 'sideEffects';

export function MedicationsPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [view, setView] = useState<View>('overview');

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Health Optimization Hub
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Your personalized pathway to optimal survivorship health
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setView('sideEffects')}
            className="flex items-center px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700"
          >
            <AlertCircle className="w-4 h-4 mr-2" />
            Side Effects Guide
          </button>
          <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            <Camera className="w-4 h-4 mr-2" />
            Track Meal
          </button>
          <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700">
            <BookOpen className="w-4 h-4 mr-2" />
            Latest Research
          </button>
        </div>
      </div>

      {view === 'overview' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <HealthCategory
                key={category.id}
                category={category}
                onClick={() => {
                  setActiveCategory(category);
                  setView('detailed');
                }}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ResearchUpdates updates={researchUpdates} medications={[]} />
            <SupplementRecommendations medications={[]} />
          </div>
        </>
      )}

      {view === 'detailed' && (
        <div className="space-y-6">
          <button
            onClick={() => setView('overview')}
            className="flex items-center text-sm text-gray-600 hover:text-gray-900"
          >
            <ChevronRight className="w-4 h-4 mr-1 rotate-180" />
            Back to Overview
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <HealthMetrics category={activeCategory} />
              <WearableInsights category={activeCategory} />
              <DietRecommendations category={activeCategory} />
            </div>

            <div className="space-y-6">
              <PeerComparison category={activeCategory} />
              <OptimizationPlan category={activeCategory} />
            </div>
          </div>
        </div>
      )}

      {view === 'sideEffects' && (
        <div className="space-y-6">
          <button
            onClick={() => setView('overview')}
            className="flex items-center text-sm text-gray-600 hover:text-gray-900"
          >
            <ChevronRight className="w-4 h-4 mr-1 rotate-180" />
            Back to Overview
          </button>

          <SideEffectsGuide />
        </div>
      )}
    </div>
  );
}
