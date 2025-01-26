import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/public/Logo 2.png';
import { Menu, X } from 'lucide-react';

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'For Providers', href: '/providers' },
  { name: 'Resources', href: '/resources' },
];

export default function FormPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
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
                Free Signup
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
                  Free Signup
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Form Content */}
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        <div className="relative w-full overflow-hidden pb-[150%] sm:pb-[120%] md:pb-[100%] shadow-lg rounded-lg">
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSeFsBw-zPiHxVrLcYnJzE7ClRPHxnx6pas_xbYHyY-PPwYUqg/viewform?embedded=true" 
            className="absolute top-0 left-0 w-full h-full border-0"
            title="Pathway Care Community Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
} 