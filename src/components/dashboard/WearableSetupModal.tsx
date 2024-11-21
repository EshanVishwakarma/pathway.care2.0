import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Watch,
  Smartphone,
  Check,
  X,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';

interface WearableSetupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const setupSteps = [
  {
    title: 'Choose Your Device',
    description: 'Select your wearable device type to begin setup',
    options: [
      { name: 'Apple Watch', icon: Watch },
      { name: 'Fitbit', icon: Watch },
      { name: 'Garmin', icon: Watch },
      { name: 'Samsung Watch', icon: Watch },
    ],
  },
  {
    title: 'Connect Your Device',
    description: 'Open your device settings and follow these steps',
    instructions: [
      'Enable Bluetooth on your phone',
      "Open your device's companion app",
      'Select "Connect New Device"',
      'Select your device when it appears',
    ],
  },
  {
    title: 'Grant Permissions',
    description: 'Allow access to track your health metrics',
    permissions: ['Heart Rate', 'Sleep Data', 'Activity Levels', 'Step Count'],
  },
  {
    title: 'Setup Complete',
    description:
      'Your device is now connected and ready to track your recovery journey',
  },
];

export function WearableSetupModal({
  isOpen,
  onClose,
}: WearableSetupModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedDevice, setSelectedDevice] = useState('');
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    if (currentStep < setupSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = async () => {
    setLoading(true);
    // Simulate API call to save wearable preferences
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white rounded-xl shadow-xl w-full max-w-lg mx-4"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-semibold">
                Set Up Your Wearable Device
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">
                  {setupSteps[currentStep].title}
                </h3>
                <p className="text-gray-600">
                  {setupSteps[currentStep].description}
                </p>
              </div>

              {/* Step Content */}
              <div className="mb-6">
                {currentStep === 0 && (
                  <div className="grid grid-cols-2 gap-4">
                    {setupSteps[0].options.map((device) => (
                      <button
                        key={device.name}
                        onClick={() => setSelectedDevice(device.name)}
                        className={`p-4 border rounded-lg flex flex-col items-center ${
                          selectedDevice === device.name
                            ? 'border-blue-500 bg-blue-50'
                            : 'hover:border-gray-300'
                        }`}
                      >
                        <device.icon className="h-8 w-8 mb-2" />
                        <span>{device.name}</span>
                      </button>
                    ))}
                  </div>
                )}

                {currentStep === 1 && (
                  <div className="space-y-4">
                    {setupSteps[1].instructions.map((instruction, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                          {index + 1}
                        </div>
                        <span>{instruction}</span>
                      </div>
                    ))}
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-4">
                    {setupSteps[2].permissions.map((permission, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <span>{permission}</span>
                        <Check className="h-5 w-5 text-green-500" />
                      </div>
                    ))}
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="text-center py-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="h-8 w-8 text-green-500" />
                    </div>
                    <p className="text-gray-600">
                      Your wearable device has been successfully connected. You
                      can now track your recovery progress in real-time.
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="flex justify-between">
                <button
                  onClick={handleBack}
                  className={`px-4 py-2 rounded-lg flex items-center ${
                    currentStep === 0
                      ? 'invisible'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <ChevronLeft className="h-5 w-5 mr-1" />
                  Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentStep === 0 && !selectedDevice}
                  className={`px-4 py-2 rounded-lg flex items-center ${
                    currentStep === setupSteps.length - 1
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  } ${
                    currentStep === 0 && !selectedDevice
                      ? 'opacity-50 cursor-not-allowed'
                      : ''
                  }`}
                >
                  {currentStep === setupSteps.length - 1 ? (
                    loading ? (
                      'Processing...'
                    ) : (
                      'Finish Setup'
                    )
                  ) : (
                    <>
                      Next
                      <ChevronRight className="h-5 w-5 ml-1" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
