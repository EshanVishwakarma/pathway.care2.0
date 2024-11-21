import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Check, X } from 'lucide-react';

const medicationHistory = [
  {
    date: '2024-03-14',
    medications: [
      { name: 'Medication A', taken: true, time: '08:00 AM' },
      { name: 'Medication B', taken: true, time: '08:00 AM' },
      { name: 'Medication B', taken: true, time: '08:00 PM' },
    ],
  },
  {
    date: '2024-03-13',
    medications: [
      { name: 'Medication A', taken: true, time: '08:15 AM' },
      { name: 'Medication B', taken: true, time: '08:15 AM' },
      { name: 'Medication B', taken: false, time: '08:00 PM' },
    ],
  },
];

export function MedicationHistory() {
  return (
    <div className="space-y-6">
      {medicationHistory.map((day, index) => (
        <motion.div
          key={day.date}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-xl shadow-sm overflow-hidden"
        >
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-gray-500" />
              <h3 className="text-sm font-medium text-gray-900">
                {new Date(day.date).toLocaleDateString(undefined, {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </h3>
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            {day.medications.map((med, medIndex) => (
              <motion.div
                key={`${med.name}-${med.time}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (index * 0.1) + (medIndex * 0.05) }}
                className="px-6 py-4 flex items-center justify-between"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900">{med.name}</p>
                  <p className="text-sm text-gray-500">{med.time}</p>
                </div>
                <div className={`flex items-center ${med.taken ? 'text-green-600' : 'text-red-600'}`}>
                  {med.taken ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <X className="h-5 w-5" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}