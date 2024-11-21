import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './pages/landing/LandingPage';
import { AuthPage } from './pages/auth/AuthPage';
import { DashboardLayout } from './layouts/DashboardLayout';
import { OverviewPage } from './pages/dashboard/OverviewPage';
import { ConsultationsPage } from './pages/dashboard/ConsultationsPage';
import { MedicationsPage } from './pages/dashboard/MedicationsPage';
import { PhysicalHealthPage } from './pages/dashboard/PhysicalHealthPage';
import { MentalHealthPage } from './pages/dashboard/MentalHealthPage';
import { CarePlanningPage } from './pages/dashboard/CarePlanningPage';
import { ResourcesPage } from './pages/dashboard/ResourcesPage';
import { PeerSupportPage } from './pages/dashboard/PeerSupportPage';
// src/App.tsx
import { AboutUsPage } from './pages/landing/AboutUsPage';
import { ProvidersPage } from './pages/landing/ProvidersPage';
import { PublicResourcesPage } from './pages/landing/PublicResourcesPage';
import { NotFoundPage } from './pages/landing/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/providers" element={<ProvidersPage />} />
        <Route path="/resources" element={<PublicResourcesPage />} />
        <Route path="/auth" element={<AuthPage />} />

        {/* Protected Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<OverviewPage />} />
          <Route path="consultations" element={<ConsultationsPage />} />
          <Route path="optimize" element={<MedicationsPage />} />
          <Route path="care-planning" element={<CarePlanningPage />} />
          <Route path="peer-support" element={<PeerSupportPage />} />
          <Route path="settings" element={<div>Settings</div>} />
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
