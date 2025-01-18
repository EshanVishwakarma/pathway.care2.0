import { useEffect, useState } from 'react';
import logo from '/public/Logo 2.png';
import eshan from '/public/Eshan In Treatment.png';
import mum from '/public/mum.png';
import { Menu, X } from 'lucide-react';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'For Providers', href: '/providers' },
  { name: 'Resources', href: '/resources' },
];

const timelineEvents = [
  {
    year: 'Early Childhood',
    title: 'Diagnosed with Stage 3 Neuroblastoma',
    description:
      'At age three, Eshan Vishwakarma faced a battle that would shape his future mission. Diagnosed with stage three Neuroblastoma, his early years were defined by intensive treatments and hospital stays. The treatments were grueling, but they saved his life. However, little did he know that these treatments would have long-term consequences that he would face later in life.',
  },
  {
    year: 'High School',
    title: 'Surgeries Due to Late-Term Side Effects',
    description:
      'As a survivor, Eshan encountered numerous late-term side effects from his treatment. These side effects required multiple surgeries during high school. It was a difficult time, balancing schoolwork with recovery from surgery. He often felt isolated as the only adolescent in clinics filled with much younger children or older adults. This experience made him realize how underserved adolescent and young adult (AYA) cancer survivors are in the healthcare system.',
  },
  {
    year: 'College Years',
    title: 'Searching for a New Survivorship Clinic',
    description:
      "After high school, Eshan continued to face health challenges due to late-term side effects. His insurance stopped covering his survivorship clinic in New York, forcing him to search for new care options. He spent hundreds of dollars flying to different clinics, only to have short and often unhelpful appointments. The frustration grew as he realized that many of these clinics weren't equipped to address the unique needs of AYA survivors like him.",
  },
  {
    year: 'Junior Year of College',
    title: 'Founded Pathway',
    description:
      'During his junior year at Harvard College, Eshan decided to take matters into his own hands. Drawing from his personal experiences with survivorship care—and the lack thereof—he founded Pathway with a clear mission to revolutionize survivorship care for cancer survivors like himself. His goal was to create a platform that would make survivorship care more accessible, efficient, and meaningful for all.',
  },
];

export function AboutUsPage() {
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
      <div className="relative w-full bg-yellow-50 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Left image */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full lg:w-3/5"
            >
              <img
                src={eshan}
                alt="Hospital journey"
                className="w-[650] h-[500px] object-cover rounded-2xl shadow-xl"
                style={{
                  objectPosition: 'center 30%',
                }}
              />
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.2) 100%)',
                }}
              />
            </motion.div>

            {/* Right image - hidden on mobile */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full lg:w-2/5 lg:-mt-12 hidden lg:block"
            >
              <img
                src={mum}
                alt="Present day"
                className="absolute z-20 h-[650px] object-cover rounded-2xl shadow-xl right-[20%] -top-64"
                style={{
                  objectPosition: 'center',
                }}
              />
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.2) 100%)',
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-center text-gray-900 text-[2.5rem] font-bold mb-12 leading-tight">
          A Journey Through Time
        </h1>

        {/* Timeline */}
        <div className="relative border-l border-gray-300 pl-10 space-y-12">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 + index * 0.2 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <span className="absolute left-[calc(-1rem)] top-[calc(50%-8px)] w-[16px] h-[16px] bg-gold rounded-full border border-white"></span>

              {/* Event Content */}
              <div
                className={`bg-white p-6 rounded-lg shadow-md ${
                  index % 2 === 1 ? 'ml-auto' : ''
                }`}
              >
                <h3 className="text-lg font-semibold text-gold">
                  {event.year}
                </h3>
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  {event.title}
                </h4>
                <p className="text-gray-700">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-gold-50 p-8 rounded-lg shadow-lg max-w-prose mx-auto mt-[5rem] mb-16" // Added mb-16 for buffer
      >
        <h2 className="text-center text-gold text-[2rem] font-bold mb-[1rem]">
          Our Mission
        </h2>
        <p className="text-lg text-gray leading-relaxed text-center">
          Pathway is developing an innovative survivorship care platform that
          unites healthcare providers, community organizations, and survivors.
          We're creating a comprehensive support system that makes quality
          survivorship care accessible to all cancer survivors, eliminating
          barriers and improving outcomes through technology and community
          connection.
        </p>
      </motion.div>
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
