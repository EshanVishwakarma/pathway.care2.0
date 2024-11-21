import { Monitor } from 'lucide-react';
import { motion } from 'framer-motion';

export function MobileWarning() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md bg-white rounded-2xl shadow-xl p-8 text-center"
      >
        <div className="inline-flex items-center justify-center bg-blue-100 p-3 rounded-full mb-4">
          <Monitor className="h-8 w-8 text-blue-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Please Use a Desktop Device
        </h1>
        <p className="text-gray-600 mb-6">
          Our platform is currently optimized for desktop viewing. Please access
          this page from a computer for the best experience.
        </p>
        <p className="text-sm text-gray-500">
          We're working on making our platform mobile-friendly. Thank you for
          your patience!
        </p>
      </motion.div>
    </div>
  );
}
