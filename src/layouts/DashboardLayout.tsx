import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Sidebar } from '../components/dashboard/Sidebar';
import { Header } from '../components/dashboard/Header';
import { useAuthStore } from '../store/auth.store';
import { MobileWarning } from '../components/mobilewarning';
import { useIsMobile } from '/src/useismobile';

export function DashboardLayout() {
  const { user } = useAuthStore();
  const isMobile = useIsMobile();

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  if (isMobile) {
    return <MobileWarning />;
  }

  return (
    <div className="h-screen flex">
      <div className="w-64 flex-shrink-0">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto bg-gray-50">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
