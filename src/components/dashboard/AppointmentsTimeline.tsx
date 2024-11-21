import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Video, MapPin, User, Phone } from 'lucide-react';

export function AppointmentsTimeline() {
  const appointments = [
    {
      id: 1,
      type: 'Oncology Follow-up',
      provider: 'Dr. Sarah Johnson',
      date: '2024-03-25',
      time: '10:00 AM',
      mode: 'in-person',
      location: 'Cancer Care Center',
      notes: 'Routine follow-up & blood work',
      preparation: [
        'Bring medication list',
        'Fast for 8 hours',
        'Wear comfortable clothing',
      ],
    },
    {
      id: 2,
      type: 'Mental Health Check-in',
      provider: 'Dr. Michael Chen',
      date: '2024-03-27',
      time: '2:00 PM',
      mode: 'virtual',
      notes: 'Monthly wellness check',
      preparation: ['Find quiet space', 'Test video connection'],
    },
    {
      id: 3,
      type: 'Physical Therapy',
      provider: 'Emma Williams, PT',
      date: '2024-03-29',
      time: '11:30 AM',
      mode: 'in-person',
      location: 'Rehabilitation Center',
      notes: 'Strength training session',
      preparation: ['Wear exercise clothes', 'Bring water bottle'],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-sm p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Upcoming Care</h2>
          <p className="text-sm text-gray-500">Next 7 days</p>
        </div>
        <Calendar className="h-5 w-5 text-gray-400" />
      </div>

      <div className="space-y-6">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="relative flex items-start space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div
              className={`p-2 rounded-lg ${
                appointment.mode === 'virtual' ? 'bg-blue-50' : 'bg-green-50'
              }`}
            >
              {appointment.mode === 'virtual' ? (
                <Video className="h-5 w-5 text-blue-600" />
              ) : (
                <MapPin className="h-5 w-5 text-green-600" />
              )}
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-900">
                  {appointment.type}
                </h3>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>{appointment.time}</span>
                </div>
              </div>

              <div className="mt-2 space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <User className="h-4 w-4 mr-2" />
                  {appointment.provider}
                </div>

                {appointment.location && (
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {appointment.location}
                  </div>
                )}

                <div className="mt-3">
                  <h4 className="text-sm font-medium text-gray-900 mb-1">
                    Preparation:
                  </h4>
                  <ul className="space-y-1">
                    {appointment.preparation.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button className="w-full mt-4 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center justify-center">
          <Calendar className="h-4 w-4 mr-2" />
          View Full Schedule
        </button>
      </div>
    </motion.div>
  );
}
