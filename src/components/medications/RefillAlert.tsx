import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, ArrowRight } from 'lucide-react';

interface Medication {
  id: string;
  name: string;
  refillDate: string;
}

interface RefillAlertProps {
  medications: Medication[];
}

export function RefillAlert({ medications }: RefillAlertProps) {
  const needsRefill = medications.filter(
    med => new Date(med.refillDate) <= new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  );

  if (needsRefill.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-amber-50 rounded-xl p-4"
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <AlertCircle className="h-6 w-6 text-amber-600" />
          </motion.div>
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-medium text-amber-800">Refill Reminder</h3>
          <p className="mt-1 text-sm text-amber-700">
            The following medications need to be refilled soon:
          </p>
          <ul className="mt-2 space-y-1">
            {needsRefill.map((med) => (
              <li key={med.id} className="text-sm text-amber-700">
                • {med.name} (Refill by {new Date(med.refillDate).toLocaleDateString()})
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-shrink-0">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center px-4 py-2 text-sm font-medium text-amber-700 bg-amber-100 rounded-lg hover:bg-amber-200"
          >
            Order Refills
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}