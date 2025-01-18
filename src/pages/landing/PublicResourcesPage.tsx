import { useEffect, useState } from 'react';
import logo from '/public/Logo 2.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import dashboardImage from '/public/Dashboard.png';
import { Menu, X } from 'lucide-react';

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'For Providers', href: '/providers' },
  { name: 'Resources', href: '/resources' },
];

export function PublicResourcesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img src={logo} alt="Pathway Logo" className="h-16 w-auto" />
                <span className="ml-2 text-xl font-bold text-gold-700">
                  Pathway Care
                </span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-600 hover:text-gold-700 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/form"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium shadow-md"
              >
                Join Our Community
              </Link>
            </div>
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-gold-700 hover:bg-gray-100"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gold-700 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/form"
                  className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Join Our Community
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-yellow-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Pathway Connect Platform
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Your comprehensive, free resource hub for cancer survivorship
              support, health interventions, and specialized care connections.
            </p>

            {/* Dashboard Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative max-w-2xl mx-auto" // Reduced max-width
            >
              <div className="overflow-hidden">
                <img
                  src={dashboardImage}
                  alt="Pathway Dashboard Interface"
                  className="w-full h-auto rounded-2xl shadow-2xl" // Added rounded corners directly to image
                  style={{
                    maxHeight: '400px', // Control maximum height
                    objectFit: 'contain',
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
            <p className="text-gray-600">
              We're building a gathering place for cancer survivors to find
              support, resources, and community for their survivorship journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Resource Library</h3>
              <p className="text-gray-600">
                Access curated resources, educational materials, and
                evidence-based information about cancer survivorship care and
                long-term health management.
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Health Interventions
              </h3>
              <p className="text-gray-600">
                Take control of your health with personalized interventions,
                tracking tools, and guided wellness programs designed
                specifically for cancer survivors.
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Care Connection</h3>
              <p className="text-gray-600">
                Get seamlessly connected to Pathway partner clinics and/or
                Pathway Care through our integrated referral system.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Pathway Care</h3>
              <p className="text-gray-600">
                Dedicated to supporting cancer survivors at every stage of their
                journey.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-600 hover:text-gold-700"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-600">
                <li>eshanmsg@gmail.com</li>
                <li>1201 Massachusetts Avenue</li>
                <li>Cambridge, MA 02115</li>
              </ul>
            </div>
            <div></div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img src={logo} alt="Pathway Logo" className="h-8 w-auto mr-2" />
              <span className="text-gray-600">
                © 2024 Pathway Care. All rights reserved.
              </span>
            </div>
            <div className="flex space-x-6"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
