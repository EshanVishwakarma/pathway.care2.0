import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Search, ChevronDown, ChevronUp, ExternalLink, BookOpen } from 'lucide-react';

interface SideEffect {
  category: string;
  effects: {
    name: string;
    description: string;
    timeline: string;
    severity: 'Mild' | 'Moderate' | 'Severe';
    interventions: {
      immediate: string[];
      longTerm: string[];
      lifestyle: string[];
      medications?: string[];
    };
    monitoring: string[];
    whenToContact: string[];
  }[];
}

const sideEffects: SideEffect[] = [
  {
    category: 'Cardiovascular',
    effects: [
      {
        name: 'Cardiomyopathy',
        description: 'Weakening of heart muscle that can affect heart function',
        timeline: 'Can develop during treatment or years after completion',
        severity: 'Severe',
        interventions: {
          immediate: [
            'Regular cardiac monitoring',
            'Medication adjustments if needed'
          ],
          longTerm: [
            'Regular cardiovascular screenings',
            'Heart-healthy diet',
            'Structured exercise program'
          ],
          lifestyle: [
            'Maintain healthy weight',
            'Regular aerobic exercise',
            'Limit alcohol consumption',
            'Stop smoking'
          ],
          medications: [
            'ACE inhibitors',
            'Beta blockers when prescribed'
          ]
        },
        monitoring: [
          'Regular echocardiograms',
          'Blood pressure monitoring',
          'Heart rate tracking'
        ],
        whenToContact: [
          'Shortness of breath',
          'Chest pain',
          'Unusual fatigue',
          'Rapid or irregular heartbeat'
        ]
      }
    ]
  },
  {
    category: 'Cognitive',
    effects: [
      {
        name: 'Chemo Brain',
        description: 'Cognitive changes affecting memory, concentration, and mental clarity',
        timeline: 'During treatment and potentially months to years after',
        severity: 'Moderate',
        interventions: {
          immediate: [
            'Cognitive exercises',
            'Memory aids and organization tools'
          ],
          longTerm: [
            'Brain training programs',
            'Regular mental stimulation'
          ],
          lifestyle: [
            'Adequate sleep',
            'Stress reduction techniques',
            'Regular physical exercise',
            'Social engagement'
          ]
        },
        monitoring: [
          'Track cognitive symptoms',
          'Regular cognitive assessments',
          'Note patterns of difficulty'
        ],
        whenToContact: [
          'Severe memory problems',
          'Difficulty with daily tasks',
          'Significant confusion'
        ]
      }
    ]
  },
  {
    category: 'Bone Health',
    effects: [
      {
        name: 'Osteoporosis',
        description: 'Decreased bone density leading to increased fracture risk',
        timeline: 'Can develop during or after treatment',
        severity: 'Moderate',
        interventions: {
          immediate: [
            'Calcium and Vitamin D supplementation',
            'Weight-bearing exercises'
          ],
          longTerm: [
            'Regular bone density scans',
            'Strength training program'
          ],
          lifestyle: [
            'Balanced diet rich in calcium',
            'Regular weight-bearing exercise',
            'Fall prevention strategies'
          ],
          medications: [
            'Bisphosphonates when prescribed',
            'Hormone therapy if appropriate'
          ]
        },
        monitoring: [
          'Annual bone density scans',
          'Calcium levels',
          'Vitamin D levels'
        ],
        whenToContact: [
          'Bone pain',
          'Height loss',
          'Fractures from minor injuries'
        ]
      }
    ]
  }
];

export function SideEffectsGuide() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const filteredEffects = sideEffects.filter(category =>
    category.effects.some(effect =>
      effect.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      effect.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Treatment Side Effects Guide</h3>
            <p className="text-sm text-gray-500">Comprehensive guide to managing treatment effects</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search side effects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="flex items-center px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700">
              <BookOpen className="h-5 w-5 mr-2" />
              View Full Guide
            </button>
          </div>
        </div>

        <div className="bg-amber-50 rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
            <p className="text-sm text-amber-700">
              This guide is personalized based on your treatment history. Always consult your healthcare team about specific concerns.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {filteredEffects.map((category) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleCategory(category.category)}
                className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <h4 className="text-lg font-medium text-gray-900">{category.category}</h4>
                {expandedCategories.includes(category.category) ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>

              {expandedCategories.includes(category.category) && (
                <div className="p-4">
                  {category.effects.map((effect) => (
                    <div key={effect.name} className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between">
                          <h5 className="text-lg font-medium text-gray-900">{effect.name}</h5>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            effect.severity === 'Severe'
                              ? 'bg-red-100 text-red-800'
                              : effect.severity === 'Moderate'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {effect.severity}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-gray-600">{effect.description}</p>
                        <p className="mt-1 text-sm text-gray-500">Timeline: {effect.timeline}</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h6 className="text-sm font-medium text-gray-900 mb-2">Interventions</h6>
                          <div className="space-y-3">
                            <div>
                              <p className="text-sm font-medium text-gray-700">Immediate Actions:</p>
                              <ul className="mt-1 space-y-1">
                                {effect.interventions.immediate.map((action, index) => (
                                  <li key={index} className="text-sm text-gray-600">• {action}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-700">Long-term Management:</p>
                              <ul className="mt-1 space-y-1">
                                {effect.interventions.longTerm.map((action, index) => (
                                  <li key={index} className="text-sm text-gray-600">• {action}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h6 className="text-sm font-medium text-gray-900 mb-2">Monitoring</h6>
                          <ul className="space-y-1">
                            {effect.monitoring.map((item, index) => (
                              <li key={index} className="text-sm text-gray-600">• {item}</li>
                            ))}
                          </ul>

                          <h6 className="text-sm font-medium text-gray-900 mt-4 mb-2">When to Contact Healthcare Team</h6>
                          <ul className="space-y-1">
                            {effect.whenToContact.map((item, index) => (
                              <li key={index} className="text-sm text-red-600">• {item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}