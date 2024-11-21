import React from 'react';
import { motion } from 'framer-motion';

interface Medication {
  id: string;
  name: string;
  nextDose: string;
  lastTaken?: string;
}

interface MedicationTimelineProps {
  medications: Medication[];
}

export function MedicationTimeline({ medications }: MedicationTimelineProps) {
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const currentHour = new Date().getHours();

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Today's Schedule</h2>
      <div className="relative">
        <div className="flex items-center">
          <div className="w-20 flex-shrink-0" />
          <div className="flex-1 grid grid-cols-24 gap-0">
            {hours.map((hour) => (
              <div
                key={hour}
                className="h-16 border-l border-gray-200 relative"
              >
                <span className="absolute -top-6 text-xs text-gray-500">
                  {hour === 0 ? '12 AM' : hour === 12 ? '12 PM' : hour > 12 ? `${hour - 12} PM` : `${hour} AM`}
                </span>
              </div>
            ))}
          </div>
        </div>

        {medications.map((medication, index) => (
          <motion.div
            key={medication.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center mt-4"
          >
            <div className="w-20 text-sm font-medium text-gray-900">
              {medication.name}
            </div>
            <div className="flex-1 relative h-8">
              {medication.lastTaken && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute h-4 w-4 rounded-full bg-green-500 top-1/2 -mt-2"
                  style={{
                    left: `${(new Date(medication.lastTaken).getHours() / 24) * 100}%`,
                  }}
                />
              )}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute h-4 w-4 rounded-full bg-blue-500 top-1/2 -mt-2"
                style={{
                  left: `${(new Date(medication.nextDose).getHours() / 24) * 100}%`,
                }}
              />
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ height: 0 }}
          animate={{ height: '100%' }}
          className="absolute top-0 w-px bg-red-400"
          style={{ left: `${(currentHour / 24) * 100}%` }}
        />
      </div>
    </div>
  );
}