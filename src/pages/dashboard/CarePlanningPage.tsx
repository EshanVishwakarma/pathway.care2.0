import React from 'react';
import { Calendar, Clock, FileText, Users, Bell, Clipboard, Activity, Heart } from 'lucide-react';

const carePlanSections = [
  {
    title: 'Treatment Summary',
    icon: FileText,
    description: 'Comprehensive overview of your cancer treatment history',
    items: [
      'Diagnosis details and dates',
      'Treatments received',
      'Healthcare providers involved',
      'Test results and imaging'
    ]
  },
  {
    title: 'Follow-up Care Schedule',
    icon: Calendar,
    description: 'Recommended schedule for ongoing care and monitoring',
    items: [
      'Regular check-up appointments',
      'Screening schedules',
      'Vaccination recommendations',
      'Monitoring tests'
    ]
  },
  {
    title: 'Health Monitoring',
    icon: Activity,
    description: 'Key health indicators to track during survivorship',
    items: [
      'Vital signs monitoring',
      'Side effect tracking',
      'Symptom management',
      'Quality of life assessments'
    ]
  },
  {
    title: 'Support Services',
    icon: Users,
    description: 'Available support resources and services',
    items: [
      'Mental health support',
      'Nutrition counseling',
      'Physical therapy',
      'Support groups'
    ]
  }
];

const upcomingActions = [
  {
    title: 'Annual Physical Examination',
    date: '2024-04-15',
    type: 'Medical',
    priority: 'High'
  },
  {
    title: 'Cardiology Follow-up',
    date: '2024-04-22',
    type: 'Specialist',
    priority: 'Medium'
  },
  {
    title: 'Nutrition Consultation',
    date: '2024-04-25',
    type: 'Support',
    priority: 'Medium'
  }
];

const healthMetrics = [
  {
    name: 'Appointments Completed',
    value: '95%',
    icon: Clock,
    change: '+5%'
  },
  {
    name: 'Care Plan Adherence',
    value: '88%',
    icon: Clipboard,
    change: '+3%'
  },
  {
    name: 'Health Goals Met',
    value: '82%',
    icon: Heart,
    change: '+7%'
  }
];

export function CarePlanningPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Survivorship Care Plan</h1>
        <p className="mt-1 text-sm text-gray-500">
          Your personalized roadmap for long-term health and well-being
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {healthMetrics.map((metric) => (
          <div
            key={metric.name}
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <metric.icon className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-green-600">{metric.change}</span>
            </div>
            <h3 className="text-lg font-medium text-gray-900">{metric.name}</h3>
            <p className="mt-1 text-2xl font-semibold text-gray-900">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Care Plan Components</h2>
            <div className="grid gap-6">
              {carePlanSections.map((section) => (
                <div
                  key={section.title}
                  className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <section.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{section.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{section.description}</p>
                    <ul className="mt-3 space-y-2">
                      {section.items.map((item, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">Upcoming Actions</h2>
              <Bell className="h-5 w-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {upcomingActions.map((action, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div>
                    <h3 className="font-medium text-gray-900">{action.title}</h3>
                    <div className="flex items-center mt-1 space-x-2">
                      <span className="text-sm text-gray-500">{action.date}</span>
                      <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">
                        {action.type}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      action.priority === 'High'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {action.priority}
                  </span>
                </div>
              ))}
            </div>
            <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Schedule New Appointment
            </button>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-sm p-6 text-white">
            <h3 className="text-lg font-medium mb-2">Need Help?</h3>
            <p className="text-blue-100 mb-4">
              Our care coordinators are here to help you navigate your survivorship journey.
            </p>
            <button className="w-full px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
              Contact Care Coordinator
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}