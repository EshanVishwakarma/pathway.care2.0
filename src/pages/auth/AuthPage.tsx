import React, { useState, useEffect } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { AuthForm } from '../../components/auth/AuthForm';
import { useAuthStore } from '../../store/auth.store';
import logo from '/public/Logo 2.png';
import connectlogo from '/public/Connect Logo.png';
import { MobileWarning } from '/src/components/mobilewarning';
import { useIsMobile } from '/src/useismobile';

const LoadingScreen = ({ message }: { message: string }) => (
  <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mx-auto mb-4"></div>
      <p className="text-xl text-gray-800">{message}</p>
    </div>
  </div>
);

type ReferralType = 'doctor' | 'platform' | 'none' | null;
type ReferralStep =
  | 'initial'
  | 'doctor-details'
  | 'connect-link'
  | 'not-referred';

type DoctorReferralData = {
  doctorName: string;
  referralFile?: File;
};

const referralOptions = [
  {
    type: 'doctor' as ReferralType,
    title: 'Referred by a Doctor',
    description: 'A healthcare provider referred me to Pathway Care',
  },
  {
    type: 'platform' as ReferralType,
    title: 'Pathway Connect Platform',
    description: 'I was referred through the Pathway Connect Platform',
  },
  {
    type: 'none' as ReferralType,
    title: 'Not Referred Yet',
    description: "I'm interested in learning more about Pathway Care",
  },
];

interface AuthFormData {
  email: string;
  password: string;
  name?: string;
  // Add other relevant fields
}

interface User {
  id: string;
  email: string;
  name: string;
  role: 'patient' | 'doctor' | 'admin';
  referralType?: ReferralType;
}

interface AuthStore {
  user: User | null;
  setAuth: (user: User, token: string) => void;
}

export function AuthPage() {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [referralType, setReferralType] = useState<ReferralType>(null);
  const [referralStep, setReferralStep] = useState<ReferralStep>('initial');
  const [doctorReferralData, setDoctorReferralData] =
    useState<DoctorReferralData>({
      doctorName: '',
    });
  const { user, setAuth } = useAuthStore();
  const [error, setError] = useState<string | null>(null);
  const [isLinking, setIsLinking] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    return () => {
      setIsLoading(false);
      setError(null);
      if (doctorReferralData.referralFile) {
        URL.revokeObjectURL(
          URL.createObjectURL(doctorReferralData.referralFile)
        );
      }
    };
  }, [doctorReferralData.referralFile]);

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  if (isMobile) {
    return <MobileWarning />;
  }

  const handleSubmit = async (data: AuthFormData) => {
    try {
      setError(null); // Clear any previous errors
      if (mode === 'login') {
        setIsLoading(true);
        setLoadingMessage('Getting things warmed up for you...');

        try {
          // Add validation
          if (!data.email || !data.password) {
            throw new Error('Please fill in all required fields');
          }

          await new Promise((resolve) => setTimeout(resolve, 2000));
          setAuth(
            {
              id: '1',
              email: data.email,
              name: 'Pathway Connect User',
              role: 'patient',
            },
            'demo-token'
          );
        } catch (error) {
          setError(
            error instanceof Error ? error.message : 'Authentication failed'
          );
          throw error;
        }
        return;
      }

      // For register mode
      if (mode === 'register') {
        if (step === 1) {
          setStep(2);
          return;
        }

        const enrichedData = {
          ...data,
          referralType,
          ...(referralType === 'doctor' && { doctorReferralData }),
        };

        console.log('Registration submitted:', enrichedData);

        if (referralType === 'none') {
          window.location.href = '/resources';
          return;
        }

        // Mock registration success and auto-login
        setAuth(
          {
            id: '1',
            email: data.email || 'demo@example.com',
            name: 'Demo User',
            role: 'patient',
            referralType,
          },
          'demo-token'
        );
      }
    } catch (error) {
      console.error('Authentication error:', error);
      setError(
        error instanceof Error ? error.message : 'An unexpected error occurred'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'For Providers', href: '/providers' },
    { name: 'Resources', href: '/resources' },
  ];

  const handleBack = () => {
    if (referralStep !== 'initial') {
      setReferralStep('initial');
      setReferralType(null);
    } else {
      setStep(1);
      setMode('login');
    }
  };

  const renderDoctorReferralStep = () => {
    const validateDoctorReferral = () => {
      if (!doctorReferralData.doctorName.trim()) {
        setError("Doctor's name is required");
        return false;
      }
      return true;
    };

    return (
      <div className="space-y-6">
        <div className="flex items-center mb-8">
          <button
            onClick={handleBack}
            className="text-gray-600 hover:text-gray-900 mr-4"
          >
            ← Back
          </button>
          <div className="text-center flex-1">
            <h2 className="text-2xl font-semibold text-gray-900">
              Doctor Referral Details
            </h2>
            <p className="text-gray-600">
              Please provide your doctor's information and referral form
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <label className="block">
            <span className="text-gray-700">Doctor's Name</span>
            <input
              type="text"
              value={doctorReferralData.doctorName}
              onChange={(e) =>
                setDoctorReferralData((prev) => ({
                  ...prev,
                  doctorName: e.target.value,
                }))
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-200"
              required
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Upload Referral Form</span>
            <input
              type="file"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              onChange={(e) =>
                setDoctorReferralData((prev) => ({
                  ...prev,
                  referralFile: e.target.files?.[0],
                }))
              }
              className="mt-1 block w-full"
            />
            <p className="text-sm text-gray-500 mt-1">
              Accepted formats: PDF, DOC, DOCX, JPG, PNG
            </p>
          </label>
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={async () => {
              try {
                if (!validateDoctorReferral()) return;

                setError(null);
                setIsLoading(true);
                setLoadingMessage('Verifying doctor referral...');
                await new Promise((resolve) => setTimeout(resolve, 3000));
                setAuth(
                  {
                    id: '1',
                    email: 'doctorreferred@example.com',
                    name: 'DoctorReferred',
                    role: 'patient',
                    referralType: 'doctor',
                  },
                  'demo-token'
                );
              } catch (error) {
                console.error('Error during doctor referral:', error);
                setError('Failed to process doctor referral');
              } finally {
                setIsLoading(false);
              }
            }}
            disabled={!doctorReferralData.doctorName || isLoading}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Processing...' : 'Continue'}
          </button>
        </div>
      </div>
    );
  };

  const renderConnectLinkStep = () => {
    return (
      <div className="space-y-6">
        <div className="flex items-center mb-8">
          <button
            onClick={handleBack}
            className="text-gray-600 hover:text-gray-900 mr-4"
          >
            ← Back
          </button>
          <div className="text-center flex-1">
            <h2 className="text-2xl font-semibold text-gray-900">
              Link Your Connect Account
            </h2>
            <p className="text-gray-600">
              We'll securely import your medical data from Connect
            </p>
          </div>
        </div>

        <div className="border rounded-lg p-6 bg-blue-50">
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <img src={connectlogo} alt="Connect Logo" className="w-10 h-10" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">Pathway Connect Platform</h3>
              <p className="text-sm text-gray-600">
                Your medical records will be securely transferred
              </p>
            </div>
            <div className="animate-pulse">
              <div className="w-8 h-8 bg-blue-200 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button
            onClick={async () => {
              try {
                setError(null);
                setIsLinking(true);
                setIsLoading(true);
                setLoadingMessage(
                  'Syncing data between Connect and Care platform...'
                );

                await new Promise((resolve) => setTimeout(resolve, 3000));

                setAuth(
                  {
                    id: '1',
                    email: 'demo@example.com',
                    name: 'Connect User',
                    role: 'patient',
                    referralType: 'platform',
                  },
                  'demo-token'
                );
              } catch (error) {
                console.error('Error linking accounts:', error);
                setError('Failed to link accounts. Please try again.');
              } finally {
                setIsLinking(false);
                setIsLoading(false);
              }
            }}
            disabled={isLinking || isLoading}
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {isLinking ? 'Linking Account...' : 'Link Account & Continue'}
          </button>
        </div>
      </div>
    );
  };
  const renderNotReferredStep = () => (
    <div className="space-y-6">
      <div className="flex items-center mb-8">
        <button
          onClick={handleBack}
          className="text-gray-600 hover:text-gray-900 mr-4"
        >
          ← Back
        </button>
        <div className="text-center flex-1">
          <h2 className="text-2xl font-semibold text-gray-900">
            Referral Required
          </h2>
          <p className="text-gray-600">
            To use our telehealth platform, you'll need a referral first
          </p>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <p className="text-sm text-yellow-800">
          We'll redirect you to set up a Connect account to check your
          eligibility for Pathway Care services.
        </p>
      </div>

      <div className="mt-8">
        <Link
          to="/resources"
          className="block w-full px-6 py-3 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700"
        >
          Set Up Connect Account
        </Link>
      </div>
    </div>
  );

  const renderReferralStep = () => {
    if (referralStep === 'doctor-details') {
      return renderDoctorReferralStep();
    }
    if (referralStep === 'connect-link') {
      return renderConnectLinkStep();
    }
    if (referralStep === 'not-referred') {
      return renderNotReferredStep();
    }

    return (
      <div className="space-y-6">
        <div className="flex items-center mb-8">
          <button
            onClick={handleBack}
            className="text-gray-600 hover:text-gray-900 mr-4"
          >
            ← Back
          </button>
          <div className="text-center flex-1">
            <h2 className="text-2xl font-semibold text-gray-900">
              Tell us about your referral
            </h2>
            <p className="text-gray-600">
              This helps us provide you with the best care experience
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {referralOptions.map((option) => (
            <button
              key={option.type}
              onClick={() => {
                setReferralType(option.type);
                if (option.type === 'doctor') {
                  setReferralStep('doctor-details');
                } else if (option.type === 'platform') {
                  setReferralStep('connect-link');
                } else if (option.type === 'none') {
                  setReferralStep('not-referred');
                }
              }}
              className={`w-full p-4 text-left rounded-lg border transition-colors ${
                referralType === option.type
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-600'
              }`}
            >
              <h3 className="font-medium">{option.title}</h3>
              <p className="text-sm text-gray-600">{option.description}</p>
            </button>
          ))}
        </div>
      </div>
    );
  };

  const ErrorMessage = ({ message }: { message: string }) => (
    <div
      className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <span className="block sm:inline">{message}</span>
    </div>
  );

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
                to="/auth"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium shadow-md"
              >
                Sign In/Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Auth Content */}
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          {error && <ErrorMessage message={error} />}
          {mode === 'register' && step === 2 ? (
            renderReferralStep()
          ) : (
            <>
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center bg-blue-100 p-3 rounded-full mb-4">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {mode === 'login' ? 'Welcome Back' : 'Create Account'}
                </h1>
                <p className="text-gray-600">
                  Supporting your journey to wellness
                </p>
              </div>

              <AuthForm mode={mode} onSubmit={handleSubmit} />
              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  {mode === 'login'
                    ? "Don't have an account? "
                    : 'Already have an account? '}
                  <button
                    onClick={() => {
                      setMode(mode === 'login' ? 'register' : 'login');
                      setStep(1);
                    }}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {mode === 'login' ? 'Sign Up' : 'Sign In'}
                  </button>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      {isLoading && <LoadingScreen message={loadingMessage} />}
    </div>
  );
}
