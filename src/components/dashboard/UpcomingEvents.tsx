import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Event {
  title: string;
  type: string;
  date: string;
  time: string;
  icon: LucideIcon;
}

interface UpcomingEventsProps {
  events: Event[];
}

export function UpcomingEvents({ events }: UpcomingEventsProps) {
  return (
    <div className="space-y-4">
      {events.map((event, index) => (
        <div
          key={index}
          className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <div className="flex-shrink-0">
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
              <event.icon className="h-5 w-5 text-blue-600" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900">{event.title}</p>
            <p className="text-sm text-gray-500">{event.type}</p>
          </div>
          <div className="text-right text-sm text-gray-500">
            <p>{new Date(event.date).toLocaleDateString()}</p>
            <p>{event.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}