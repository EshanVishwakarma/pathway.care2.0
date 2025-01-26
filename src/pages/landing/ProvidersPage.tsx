import { useEffect, useState } from 'react';
import logo from '/public/Logo 2.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'For Providers', href: '/providers' },
  { name: 'Resources', href: '/resources' },
];

export function ProvidersPage() {
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
                  Free Signup
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="relative py-24"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1630959305606-3123a081dada?q=80&w=3600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              Partner With Pathway Care
            </h1>
            <p className="text-2xl text-white max-w-3xl mx-auto">
              Enhance your practice with specialized survivorship care that
              improves patient outcomes
            </p>
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Benefits of Partnering
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Optimize Patient Care',
                description:
                  'Reduce inappropriate referrals and ensure specialized survivorship care',
                image:
                  'https://images.unsplash.com/photo-1584515933487-779824d29309',
              },
              {
                title: 'Streamline Operations',
                description:
                  'Digital referral system eliminates paperwork and automates patient data transfer',
                image:
                  'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
              },
              {
                title: 'Improve Outcomes',
                description:
                  'Comprehensive survivorship care plans for better long-term results',
                image:
                  'https://images.unsplash.com/photo-1581056771107-24ca5f033842',
              },
            ].map((benefit) => (
              <motion.div
                key={benefit.title}
                whileHover={{ scale: 1.05 }}
                className="bg-yellow-50 rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* When to Refer Section */}
      <div className="bg-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold mb-8">When to Refer</h2>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-xl mb-6">
                  Consider referral for patients who:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                    Have completed active treatment
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                    Experience late-term effects
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                    Require specialized monitoring
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                    Need comprehensive care planning
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1631815587646-b85a1bb027e1"
                alt="Healthcare Professional"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* How to Refer Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">How to Refer</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-yellow-50 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4">
                Digital Referral Portal
              </h3>
              <p className="text-gray-600">
                Access our secure online portal to submit referrals
                electronically with automated transfer of patient records.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-yellow-50 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4">
                Prescription to Care
              </h3>
              <p className="text-gray-600">
                Write a prescription for survivorship care that patients can use
                to initiate services directly.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Cost & Insurance Section */}
      <div className="bg-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Cost & Insurance
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
            <p className="text-xl mb-6">
              We believe in making survivorship care accessible to all patients:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                No additional program costs outside of standard medical care
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                Accept most major U.S. insurance plans
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                Dedicated support for insurance navigation
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                Financial counseling available for patients
              </li>
            </ul>
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
