import React, { useState } from 'react';
import { Target, Edit2, Check, X, Info } from 'lucide-react';

interface Goal {
  name: string;
  current: number;
  target: number;
  unit: string;
  progress: number;
  importance: string;
  survivorshipContext: string[];
}

export function GoalsProgress() {
  const [goals, setGoals] = useState<Goal[]>([
    {
      name: 'Daily Steps',
      current: 8500,
      target: 10000,
      unit: 'steps',
      progress: 85,
      importance:
        'Physical activity helps reduce cancer recurrence risk and improves cardiovascular health',
      survivorshipContext: [
        'Helps maintain bone density, especially important after chemotherapy',
        'Reduces risk of cardiovascular complications',
        'Improves energy levels and reduces fatigue',
      ],
    },
    {
      name: 'Water Intake',
      current: 6,
      target: 8,
      unit: 'glasses',
      progress: 75,
      importance:
        'Proper hydration is crucial for kidney function and managing treatment side effects',
      survivorshipContext: [
        'Helps manage chemotherapy-related dehydration',
        'Supports kidney function during medication processing',
        'Reduces risk of urinary tract complications',
      ],
    },
    {
      name: 'Sleep Duration',
      current: 7,
      target: 8,
      unit: 'hours',
      progress: 87,
      importance:
        'Quality sleep supports immune function and cognitive recovery',
      survivorshipContext: [
        'Supports cognitive function affected by "chemo brain"',
        'Helps regulate immune system response',
        'Reduces inflammation and supports healing',
      ],
    },
  ]);

  const [editingGoal, setEditingGoal] = useState<number | null>(null);
  const [editValue, setEditValue] = useState<number>(0);
  const [showInfo, setShowInfo] = useState<number | null>(null);

  const handleEditStart = (index: number, target: number) => {
    setEditingGoal(index);
    setEditValue(target);
  };

  const handleEditSave = (index: number) => {
    const updatedGoals = [...goals];
    updatedGoals[index] = {
      ...updatedGoals[index],
      target: editValue,
      progress: Math.round((updatedGoals[index].current / editValue) * 100),
    };
    setGoals(updatedGoals);
    setEditingGoal(null);
  };

  const handleEditCancel = () => {
    setEditingGoal(null);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Target className="h-5 w-5 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-900">Daily Goals</h2>
        </div>
      </div>
      <div className="space-y-6">
        {goals.map((goal, index) => (
          <div key={goal.name} className="space-y-2">
            <div className="flex justify-between mb-1">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-700">
                  {goal.name}
                </span>
                <button
                  onClick={() => setShowInfo(showInfo === index ? null : index)}
                  className="p-1 text-gray-400 hover:text-gray-600"
                >
                  <Info className="h-4 w-4" />
                </button>
              </div>
              <div className="flex items-center space-x-2">
                {editingGoal === index ? (
                  <>
                    <input
                      type="number"
                      value={editValue}
                      onChange={(e) => setEditValue(Number(e.target.value))}
                      className="w-16 px-2 py-1 text-sm border rounded"
                    />
                    <span className="text-sm text-gray-500">{goal.unit}</span>
                    <button
                      onClick={() => handleEditSave(index)}
                      className="p-1 text-green-600 hover:text-green-700"
                    >
                      <Check className="h-4 w-4" />
                    </button>
                    <button
                      onClick={handleEditCancel}
                      className="p-1 text-red-600 hover:text-red-700"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </>
                ) : (
                  <>
                    <span className="text-sm text-gray-500">
                      {goal.current} / {goal.target} {goal.unit}
                    </span>
                    <button
                      onClick={() => handleEditStart(index, goal.target)}
                      className="p-1 text-gray-400 hover:text-gray-600"
                    >
                      <Edit2 className="h-4 w-4" />
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${goal.progress}%` }}
              />
            </div>
            {showInfo === index && (
              <div className="mt-2 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm font-medium text-blue-800 mb-2">
                  {goal.importance}
                </p>
                <ul className="space-y-1">
                  {goal.survivorshipContext.map((context, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-blue-700 flex items-start"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                      {context}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
