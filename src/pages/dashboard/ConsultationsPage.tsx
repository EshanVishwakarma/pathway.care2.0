import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  Search,
  Video,
  ListChecks,
  MessageSquare,
  Plus,
  X,
  AlertCircle,
} from 'lucide-react';
import { VideoCall } from '../../components/consultation/VideoCall';

interface Consultation {
  id: string;
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  status: 'scheduled' | 'in-progress' | 'completed';
  imageUrl: string;
  topics?: string[];
}

interface Symptom {
  date: string;
  type: string;
  severity: 'Mild' | 'Moderate' | 'Severe';
  notes: string;
  treatmentRelated?: {
    likelihood: 'High' | 'Medium' | 'Low';
    explanation: string;
    recommendations: string[];
  };
}

const consultations: Consultation[] = [
  {
    id: '1',
    doctorName: 'Dr. Sarah Johnson',
    specialty: 'Oncologist',
    date: '2024-03-15',
    time: '10:00 AM',
    status: 'scheduled',
    imageUrl:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200&h=200',
    topics: [
      'Recent fatigue patterns',
      'Follow-up on blood work results',
      'Discuss new supplement recommendations',
    ],
  },
  {
    id: '2',
    doctorName: 'Dr. Michael Chen',
    specialty: 'Radiation Oncologist',
    date: '2024-03-18',
    time: '2:30 PM',
    status: 'scheduled',
    imageUrl:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200',
    topics: [
      'Review recent imaging results',
      'Discuss long-term monitoring plan',
      'Address concerns about exercise routine',
    ],
  },
];

const recentSymptoms = [
  {
    date: '2024-03-10',
    type: 'Fatigue',
    severity: 'Moderate',
    notes: 'Increased fatigue in the afternoons',
  },
  {
    date: '2024-03-08',
    type: 'Joint Pain',
    severity: 'Mild',
    notes: 'Morning stiffness in knees',
  },
  {
    date: '2024-03-05',
    type: 'Sleep Issues',
    severity: 'Moderate',
    notes: 'Difficulty staying asleep',
  },
];

const questions = [
  'Can I modify my exercise routine to reduce fatigue?',
  'Should we adjust any medications based on recent symptoms?',
  'What preventive screenings should I schedule next?',
  'Are there any new treatments or research I should know about?',
];

const treatmentSideEffects = {
  Fatigue: {
    treatments: ['Chemotherapy', 'Radiation', 'Surgery'],
    likelihood: 'High',
    explanation: 'Very common during and after cancer treatment',
    recommendations: [
      'Schedule rest periods throughout the day',
      'Light exercise when energy permits',
      'Maintain a consistent sleep schedule',
    ],
  },
  Nausea: {
    treatments: ['Chemotherapy'],
    likelihood: 'High',
    explanation: 'Common side effect of chemotherapy',
    recommendations: [
      'Take anti-nausea medications as prescribed',
      'Eat smaller, frequent meals',
      'Stay hydrated',
    ],
  },
  'Joint Pain': {
    treatments: ['Hormone Therapy', 'Immunotherapy'],
    likelihood: 'Medium',
    explanation: 'Can occur with certain targeted therapies',
    recommendations: [
      'Gentle stretching exercises',
      'Warm compresses',
      'Discuss pain management with your doctor',
    ],
  },
  // Add more common side effects...
};

const NewSymptomForm = ({
  onClose,
  onAdd,
}: {
  onClose: () => void;
  onAdd: (symptom: Symptom) => void;
}) => {
  const [newSymptom, setNewSymptom] = useState<Partial<Symptom>>({
    date: new Date().toISOString().split('T')[0],
    severity: 'Mild',
  });

  const analyzeSymptom = (symptomType: string): Symptom['treatmentRelated'] => {
    const sideEffect =
      treatmentSideEffects[symptomType as keyof typeof treatmentSideEffects];

    if (sideEffect) {
      return {
        likelihood: sideEffect.likelihood,
        explanation: sideEffect.explanation,
        recommendations: sideEffect.recommendations,
      };
    }

    return {
      likelihood: 'Low',
      explanation:
        'This symptom is not commonly associated with cancer treatments',
      recommendations: [
        'Monitor symptoms',
        'Discuss with your healthcare provider',
      ],
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSymptom.type && newSymptom.severity && newSymptom.date) {
      const treatmentRelated = analyzeSymptom(newSymptom.type);
      onAdd({
        ...(newSymptom as Symptom),
        treatmentRelated,
      });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Log New Symptom</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Symptom Type
            </label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., Fatigue, Nausea, Joint Pain"
              onChange={(e) =>
                setNewSymptom({ ...newSymptom, type: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Severity
            </label>
            <select
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onChange={(e) =>
                setNewSymptom({
                  ...newSymptom,
                  severity: e.target.value as Symptom['severity'],
                })
              }
              defaultValue="Mild"
            >
              <option value="Mild">Mild</option>
              <option value="Moderate">Moderate</option>
              <option value="Severe">Severe</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Notes
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
              placeholder="Describe your symptoms..."
              onChange={(e) =>
                setNewSymptom({ ...newSymptom, notes: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add Symptom
          </button>
        </form>
      </div>
    </div>
  );
};

export function ConsultationsPage() {
  const [activeCall, setActiveCall] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showNewSymptomForm, setShowNewSymptomForm] = useState(false);
  const [symptoms, setSymptoms] = useState(recentSymptoms);

  const filteredConsultations = consultations.filter(
    (consultation) =>
      consultation.doctorName
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      consultation.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startCall = (consultationId: string) => {
    setActiveCall(consultationId);
  };

  const endCall = () => {
    setActiveCall(null);
  };

  const addSymptom = (newSymptom: Symptom) => {
    setSymptoms([newSymptom, ...symptoms]);
  };

  if (activeCall) {
    const consultation = consultations.find((c) => c.id === activeCall);
    return (
      <div className="h-[calc(100vh-6rem)]">
        <VideoCall
          roomId={activeCall}
          onEnd={endCall}
          doctorName={consultation?.doctorName || ''}
          doctorImage={consultation?.imageUrl || ''}
          topics={consultation?.topics || []}
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Consultations
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your virtual consultations with healthcare providers
          </p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search consultations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {filteredConsultations.map((consultation) => (
            <div
              key={consultation.id}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <img
                  src={consultation.imageUrl}
                  alt={consultation.doctorName}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {consultation.doctorName}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {consultation.specialty}
                      </p>
                      <div className="mt-2 space-y-2">
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="mr-2 h-4 w-4" />
                          {consultation.date}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="mr-2 h-4 w-4" />
                          {consultation.time}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => startCall(consultation.id)}
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <Video className="mr-2 h-4 w-4" />
                      Join Call
                    </button>
                  </div>

                  {consultation.topics && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">
                        Discussion Topics:
                      </h4>
                      <ul className="space-y-1">
                        {consultation.topics.map((topic, index) => (
                          <li
                            key={index}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                Recent Symptoms
              </h3>
              <button
                onClick={() => setShowNewSymptomForm(true)}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center"
              >
                <Plus className="h-4 w-4 mr-1" />
                Add New
              </button>
            </div>
            <div className="space-y-4">
              {symptoms.map((symptom, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div
                    className={`w-2 h-2 mt-2 rounded-full ${
                      symptom.severity === 'Severe'
                        ? 'bg-red-500'
                        : symptom.severity === 'Moderate'
                        ? 'bg-yellow-500'
                        : 'bg-green-500'
                    }`}
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">
                        {symptom.type}
                      </p>
                      <span className="text-xs text-gray-500">
                        {symptom.date}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{symptom.notes}</p>
                    {symptom.treatmentRelated && (
                      <div className="mt-2 p-2 bg-blue-50 rounded-lg">
                        <div className="flex items-start space-x-2">
                          <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                          <div>
                            <p className="text-sm text-blue-900">
                              <span className="font-medium">
                                Treatment Related:{' '}
                              </span>
                              {symptom.treatmentRelated.likelihood} likelihood
                            </p>
                            <p className="text-xs text-blue-700 mt-1">
                              {symptom.treatmentRelated.explanation}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                Questions to Ask
              </h3>
              <button className="p-1 text-gray-400 hover:text-gray-500">
                <Plus className="h-5 w-5" />
              </button>
            </div>
            <ul className="space-y-3">
              {questions.map((question, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <ListChecks className="h-5 w-5 text-blue-600" />
                  <span className="text-sm text-gray-600">{question}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {showNewSymptomForm && (
        <NewSymptomForm
          onClose={() => setShowNewSymptomForm(false)}
          onAdd={addSymptom}
        />
      )}
    </div>
  );
}
