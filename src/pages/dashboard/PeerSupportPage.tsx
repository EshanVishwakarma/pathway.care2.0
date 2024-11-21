import React from 'react';
import { Users, MessageSquare, Video, Calendar, Star, Heart } from 'lucide-react';

const peerGroups = [
  {
    name: 'Young Adult Survivors',
    members: 128,
    nextMeeting: '2024-03-20 18:00',
    description: 'Support group for survivors aged 18-35',
    topics: ['Career Navigation', 'Relationships', 'Long-term Planning']
  },
  {
    name: 'Wellness Warriors',
    members: 95,
    nextMeeting: '2024-03-22 19:00',
    description: 'Focus on physical and mental wellness after treatment',
    topics: ['Exercise Tips', 'Nutrition', 'Stress Management']
  },
  {
    name: 'Family Support Circle',
    members: 156,
    nextMeeting: '2024-03-25 17:30',
    description: 'For survivors and their family members',
    topics: ['Family Dynamics', 'Caregiving', 'Communication']
  }
];

const mentors = [
  {
    name: 'Sarah Johnson',
    yearsAsMentor: 5,
    specialty: 'Young Adult Support',
    rating: 4.9,
    reviews: 128,
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    name: 'Michael Chen',
    yearsAsMentor: 3,
    specialty: 'Career Navigation',
    rating: 4.8,
    reviews: 89,
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    name: 'Emily Rodriguez',
    yearsAsMentor: 4,
    specialty: 'Family Support',
    rating: 4.9,
    reviews: 156,
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200'
  }
];

const upcomingEvents = [
  {
    title: 'Virtual Coffee Chat',
    date: '2024-03-21',
    time: '10:00 AM',
    type: 'Social',
    participants: 8
  },
  {
    title: 'Wellness Workshop',
    date: '2024-03-23',
    time: '2:00 PM',
    type: 'Workshop',
    participants: 15
  },
  {
    title: 'Support Group Meeting',
    date: '2024-03-25',
    time: '6:00 PM',
    type: 'Group',
    participants: 12
  }
];

export function PeerSupportPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Peer Support Network</h1>
        <p className="mt-1 text-sm text-gray-500">
          Connect with others who understand your journey
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Support Groups</h2>
            <div className="space-y-6">
              {peerGroups.map((group) => (
                <div
                  key={group.name}
                  className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-900">{group.name}</h3>
                      <span className="text-sm text-gray-500">{group.members} members</span>
                    </div>
                    <p className="mt-1 text-sm text-gray-600">{group.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-1 text-xs font-medium bg-purple-50 text-purple-700 rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        Next meeting: {new Date(group.nextMeeting).toLocaleString()}
                      </div>
                      <button className="px-4 py-2 text-sm font-medium text-purple-600 bg-purple-50 rounded-lg hover:bg-purple-100">
                        Join Group
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Peer Mentors</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {mentors.map((mentor) => (
                <div
                  key={mentor.name}
                  className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
                >
                  <img
                    src={mentor.imageUrl}
                    alt={mentor.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-base font-medium text-gray-900">{mentor.name}</h3>
                    <p className="text-sm text-gray-500">{mentor.specialty}</p>
                    <div className="mt-2 flex items-center">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="ml-1 text-sm font-medium text-gray-900">
                        {mentor.rating}
                      </span>
                      <span className="mx-1 text-gray-300">·</span>
                      <span className="text-sm text-gray-500">
                        {mentor.reviews} reviews
                      </span>
                    </div>
                    <button className="mt-3 px-4 py-2 text-sm font-medium text-purple-600 bg-purple-50 rounded-lg hover:bg-purple-100 w-full">
                      Connect
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Upcoming Events</h2>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900">{event.title}</h3>
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                      {event.type}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date} at {event.time}
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2" />
                    {event.participants} participants
                  </div>
                  <button className="mt-3 w-full px-4 py-2 text-sm font-medium text-purple-600 bg-purple-50 rounded-lg hover:bg-purple-100">
                    Join Event
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-sm p-6 text-white">
            <div className="flex items-center space-x-3 mb-4">
              <Heart className="h-6 w-6" />
              <h3 className="text-lg font-medium">Become a Mentor</h3>
            </div>
            <p className="text-purple-100 mb-4">
              Share your experience and help others on their journey to recovery.
            </p>
            <button className="w-full px-4 py-2 bg-white text-purple-600 rounded-lg hover:bg-purple-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}