import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Video,
  Dna,
  Activity,
  Users,
  MessageSquare,
  Settings,
  LogOut,
  Brain,
  Heart,
  Compass,
  Handshake,
  Home,
  VideoIcon,
  CalendarClock,
} from 'lucide-react';
import { useAuthStore } from '../../store/auth.store';
import { cn } from '../../lib/utils';

const navigation = [
  {
    name: 'Overview',
    href: '/dashboard',
    icon: Home,
  },
  {
    name: 'Consultations',
    href: '/dashboard/consultations',
    icon: VideoIcon,
  },
  {
    name: 'Optimize Health',
    href: '/dashboard/optimize',
    icon: Activity,
  },
  {
    name: 'Care Planning',
    href: '/dashboard/care-planning',
    icon: CalendarClock,
  },
  {
    name: 'Peer Support',
    href: '/dashboard/peer-support',
    icon: Users,
  },
];

export function Sidebar() {
  const { user, logout } = useAuthStore();

  return (
    <div className="flex flex-col h-full bg-white border-r border-gray-200">
      <div className="p-4">
        <div className="flex items-center space-x-3 px-2">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-blue-600 font-semibold">
              {user?.name.charAt(0)}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-sm font-medium text-gray-900 truncate">
              {user?.name}
            </h2>
            <p className="text-xs text-gray-500 truncate">{user?.email}</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-2 py-4 space-y-1">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              cn(
                'flex items-center px-3 py-2 text-sm font-medium rounded-lg',
                'transition-colors duration-150 ease-in-out',
                isActive
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              )
            }
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <NavLink
          to="/dashboard/settings"
          className={({ isActive }) =>
            cn(
              'flex items-center px-3 py-2 text-sm font-medium rounded-lg',
              'transition-colors duration-150 ease-in-out',
              isActive
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-50'
            )
          }
        >
          <Settings className="mr-3 h-5 w-5" />
          Settings
        </NavLink>
        <button
          onClick={() => logout()}
          className="flex items-center px-3 py-2 mt-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50 w-full"
        >
          <LogOut className="mr-3 h-5 w-5" />
          Sign Out
        </button>
      </div>
    </div>
  );
}