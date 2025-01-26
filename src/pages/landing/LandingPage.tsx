import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Brain,
  Dna,
  ArrowRight,
  Check,
  Heart,
  Clock,
  Shield,
  Menu,
  X,
} from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '/public/Logo 2.png';
import { useState } from 'react';

const mainFeatures = [
  {
    title: 'In Person Clinic Support',
    description: 'Access to specialized healthcare providers',
    icon: Users,
  },
  {
    title: 'Digital Clinic Support',
    description: 'Virtual consultations and monitoring',
    icon: Users,
  },
  {
    title: 'Mental Health',
    description: 'Comprehensive emotional support',
    icon: Brain,
  },
  {
    title: 'Longevity',
    description: 'Optimize your long-term health',
    icon: Dna,
  },
];

const secondaryFeatures = [
  {
    title: 'Comprehensive Care at Any Stage',
    description: "Whether you're newly diagnosed or years post-treatment",
    icon: Clock,
  },
  {
    title: 'Personalized Support Programs',
    description: 'Tailored care plans for your unique journey',
    icon: Heart,
  },
  {
    title: 'Mental Health & Wellness',
    description: 'Holistic support for emotional wellbeing',
    icon: Brain,
  },
  {
    title: 'Long-term Health Optimization',
    description: 'Proactive monitoring and preventive care',
    icon: Shield,
  },
];

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'For Providers', href: '/providers' },
  { name: 'Resources', href: '/resources' },
];

export function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
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

      {/* First Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold text-gold-800 leading-tight mb-6">
              Transforming Cancer Survivorship Care, For A Better You
            </h1>
            <div className="block lg:hidden mb-8">
              <Link
                to="/form"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
              >
                Free Signup
              </Link>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              Personalized Survivorship Support for Cancer Survivors, Preventing
              Long-Term Side Effects and Building Community
            </p>
            <div className="space-y-4">
              {mainFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-center space-x-3"
                >
                  <Check className="h-5 w-5 text-gold-600" />
                  <span className="text-gray-700">{feature.title}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 hidden lg:flex items-center space-x-4">
              <Link
                to="/form"
                className="px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors inline-flex items-center"
              >
                Free Signup
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1697017690254-5a4b64320721?q=80&w=3048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Cancer Survivor"
              className="rounded-2xl shadow-2xl"
            />
            <img
              src="https://images.unsplash.com/photo-1706025048580-565c90f2c18e?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Support Group"
              className="absolute -bottom-12 -right-300 w-2/3 rounded-2xl shadow-2xl border-4 border-white"
            />
          </motion.div>
        </div>
      </div>

      {/* Second Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold text-gold-800 leading-tight mb-6">
            Your Journey Continues,
            <br />
            So Does Our Support
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you completed treatment yesterday or years ago, we're here
            to support your ongoing wellness journey. It's never too late to
            prioritize your survivorship care.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {secondaryFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="h-12 w-12 text-gold-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-gold-50 rounded-2xl p-8 mb-8" // Changed mb-20 to mb-8
        >
          <blockquote className="text-center">
            <p className="text-xl text-gray-700 italic mb-4">
              "Even 10 years after treatment, Pathway Care helped me address
              long-term effects I didn't know were related to my cancer journey.
              It's never too late to seek support."
            </p>
            <footer className="text-gray-600">
              - Sarah M., Pediatric Neuroblastoma Cancer Survivor, 12 Years
              Post-Treatment
            </footer>
          </blockquote>
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="bg-gold-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Start Your Journey to Better Health
          </h2>
          <p className="text-xl text-gold-100 mb-8 max-w-2xl mx-auto">
            Join the survivors who have already transformed their lives with
            Pathway Care
          </p>
          <Link
            to="/form"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gold text-gold-700 hover:bg-gold-50 transition-colors"
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
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
