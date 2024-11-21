import React, { useState } from 'react';
import { Pill, Clock, Calendar, Check, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  timeOfDay: string;
  nextDose: string;
  refillDate: string;
  lastTaken?: string;
  adherenceRate: number;
  instructions: string;
}

interface MedicationCardProps {
  medication: Medication;
}

export function MedicationCard({ medication }: MedicationCardProps) {
  const [isMarked, setIsMarked] = useState(false);

  const handleMarkAsTaken = () => {
    setIsMarked(true);
    // Add animation and reset after 2 seconds
    setTimeout(() => setIsMarked(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-blue-50 rounded-full p-3"
          >
            <Pill className="h-6 w-6 text-blue-600" />
          </motion.div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">
              {medication.name}
            </h3>
            <p className="text-sm text-gray-500">{medication.dosage}</p>
            <div className="mt-2 space-y-2">
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="mr-2 h-4 w-4" />
                Next dose: {medication.nextDose}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="mr-2 h-4 w-4" />
                Refill date: {medication.refillDate}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <AlertCircle className="mr-2 h-4 w-4" />
                {medication.instructions}
              </div>
            </div>
          </div>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleMarkAsTaken}
          disabled={isMarked}
          className={`px-4 py-2 rounded-lg transition-colors ${
            isMarked
              ? 'bg-green-100 text-green-700'
              : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
          }`}
        >
          <div className="flex items-center">
            <Check className={`h-4 w-4 ${isMarked ? 'text-green-600' : ''}`} />
            <span className="ml-2">{isMarked ? 'Taken' : 'Mark as Taken'}</span>
          </div>
        </motion.button>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-medium text-gray-700">Adherence Rate</span>
          <span className="text-sm text-gray-500">{medication.adherenceRate}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${medication.adherenceRate}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-blue-600 h-2 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
}