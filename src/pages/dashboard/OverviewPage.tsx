import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  Users,
  Calendar,
  Activity,
  Watch,
  VideoIcon,
  UserPlus,
  Battery,
  Bell,
  TrendingUp,
  ChevronRight,
} from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';
import { WearableSetupModal } from '/src/components/dashboard/WearableSetupModal';

const healthMetrics = [
  {
    title: 'Health Optimization',
    icon: Heart,
    metric: '85%',
    description: 'Overall survivorship progress',
    color: 'rose',
    detail: 'Tracking well against health milestones',
  },
  {
    title: 'Long Term Side Effect Management',
    icon: Activity,
    metric: '92%',
    description: 'Symptoms under control',
    color: 'blue',
    detail: 'Most side effects well-managed',
  },
  {
    title: 'Wellness Score',
    icon: TrendingUp,
    metric: '78%',
    description: 'Based on daily activities and mental health',
    color: 'green',
    detail: 'Improving steadily week over week',
  },
];

const upcomingAppointments = [
  {
    type: 'Individual',
    title: 'Oncology Follow-up',
    provider: 'Dr. Sarah Chen',
    date: '2024-03-20',
    time: '10:00 AM',
    icon: VideoIcon,
  },
  {
    type: 'Group',
    title: 'Young Survivors Group Session',
    facilitator: 'Lisa Thompson, LCSW',
    date: '2024-03-22',
    time: '2:00 PM',
    participants: 8,
    icon: Users,
  },
];

export function OverviewPage() {
  const navigate = useNavigate();
  const [showElements, setShowElements] = useState({
    welcome: false,
    metrics: false,
    appointments: false,
    community: false,
    wearables: false,
  });
  const [isSetupModalOpen, setIsSetupModalOpen] = useState(false);
  const [hasSeenTextAnimation] = useState(() => {
    return sessionStorage.getItem('hasSeenTextAnimation') === 'true';
  });

  useEffect(() => {
    const hasSeenAnimation = sessionStorage.getItem(
      'hasSeenDashboardAnimation'
    );

    if (!hasSeenTextAnimation) {
      sessionStorage.setItem('hasSeenTextAnimation', 'true');
    }

    const sequence = async () => {
      if (!hasSeenAnimation) {
        setShowElements({ ...showElements, welcome: true });
        await new Promise((r) => setTimeout(r, 2000));
        setShowElements((prev) => ({ ...prev, metrics: true }));
        await new Promise((r) => setTimeout(r, 1000));
        setShowElements((prev) => ({ ...prev, appointments: true }));
        await new Promise((r) => setTimeout(r, 1000));
        setShowElements((prev) => ({ ...prev, community: true }));
        await new Promise((r) => setTimeout(r, 1000));
        setShowElements((prev) => ({ ...prev, wearables: true }));

        sessionStorage.setItem('hasSeenDashboardAnimation', 'true');
      } else {
        setShowElements({
          welcome: true,
          metrics: true,
          appointments: true,
          community: true,
          wearables: true,
        });
      }
    };
    sequence();
  }, []);

  return (
    <div className="space-y-6 pb-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-between"
      >
        <div className="w-full">
          {showElements.welcome && (
            <div className="mb-8 h-[48px] relative w-full">
              {hasSeenTextAnimation ? (
                <h1 className="text-3xl font-semibold text-gray-900 whitespace-nowrap">
                  Welcome back to your Health Dashboard
                </h1>
              ) : (
                <TypeAnimation
                  sequence={[
                    'Welcome back to your Health Dashboard',
                    1000,
                    "Let's check on your recovery journey",
                    1000,
                  ]}
                  wrapper="h1"
                  className="text-3xl font-semibold text-gray-900 whitespace-nowrap"
                  speed={50}
                  repeat={0}
                  cursor={false}
                />
              )}
            </div>
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: showElements.metrics ? 1 : 0,
          y: showElements.metrics ? 0 : 20,
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {healthMetrics.map((metric) => (
          <div
            key={metric.title}
            onClick={() => navigate('/dashboard/optimize')}
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer hover:bg-gray-50"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 bg-${metric.color}-50 rounded-lg`}>
                <metric.icon className={`h-6 w-6 text-${metric.color}-600`} />
              </div>
            </div>
            <h3 className="text-lg font-medium text-gray-900">
              {metric.title}
            </h3>
            <p className="mt-1 text-2xl font-semibold text-gray-900">
              {metric.metric}
            </p>
            <p className="mt-1 text-sm text-gray-500">{metric.description}</p>
            <p className="mt-2 text-sm text-gray-600">{metric.detail}</p>
          </div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: showElements.appointments ? 1 : 0,
            y: showElements.appointments ? 0 : 20,
          }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Upcoming Care Sessions
            </h2>
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {upcomingAppointments.map((appointment) => (
              <div
                key={appointment.title}
                className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
              >
                <div
                  className={`p-2 rounded-lg ${
                    appointment.type === 'Individual'
                      ? 'bg-blue-50'
                      : 'bg-green-50'
                  }`}
                >
                  <appointment.icon
                    className={`h-5 w-5 ${
                      appointment.type === 'Individual'
                        ? 'text-blue-600'
                        : 'text-green-600'
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">
                    {appointment.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {appointment.type === 'Individual'
                      ? appointment.provider
                      : appointment.facilitator}
                  </p>
                  <div className="flex items-center mt-1 text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {appointment.date} at {appointment.time}
                  </div>
                </div>
                <button
                  onClick={() => navigate('/dashboard/consultations')}
                  className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  Join Session
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: showElements.community ? 1 : 0,
            y: showElements.community ? 0 : 20,
          }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Survivor Community
            </h2>
            <Users className="h-5 w-5 text-gray-400" />
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg mb-4">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-3" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Connect with Peers
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Join a community of 1,200+ survivors who share your journey
            </p>
            <button
              onClick={() => navigate('/dashboard/peer-support')}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Find Your Community
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: showElements.wearables ? 1 : 0,
          y: showElements.wearables ? 0 : 20,
        }}
        className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white"
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Enhanced Recovery Tracking
            </h2>
            <p className="text-purple-100 mb-4">
              Connect your wearable device to track your recovery metrics in
              real-time
            </p>
            <button
              onClick={() => setIsSetupModalOpen(true)}
              className="px-4 py-2 bg-white text-purple-600 rounded-lg hover:bg-purple-50 transition-colors flex items-center"
            >
              <Watch className="h-4 w-4 mr-2" />
              Set Up Your Device
            </button>
          </div>
          <div className="hidden md:block">
            <Watch className="h-24 w-24 text-purple-200" />
          </div>
        </div>
      </motion.div>

      <WearableSetupModal
        isOpen={isSetupModalOpen}
        onClose={() => setIsSetupModalOpen(false)}
      />
    </div>
  );
}
