import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { FaEye, FaEyeSlash, FaArrowLeft, FaCheck } from 'react-icons/fa';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let processedValue = value;
    
    // Format Nigerian phone number
    if (name === 'phone') {
      // Remove all non-numeric characters
      processedValue = value.replace(/\D/g, '');
      // Add +234 prefix if not present and format
      if (processedValue.length > 0) {
        if (processedValue.startsWith('0')) {
          processedValue = '234' + processedValue.slice(1);
        } else if (!processedValue.startsWith('234')) {
          processedValue = '234' + processedValue;
        }
        // Limit to 13 digits (234 + 10 digits)
        processedValue = processedValue.slice(0, 13);
        // Format as +234 XXX XXX XXXX
        if (processedValue.length >= 6) {
          processedValue = `+${processedValue.slice(0, 3)} ${processedValue.slice(3, 6)} ${processedValue.slice(6, 9)} ${processedValue.slice(9)}`;
        } else if (processedValue.length >= 3) {
          processedValue = `+${processedValue.slice(0, 3)} ${processedValue.slice(3)}`;
        } else {
          processedValue = `+${processedValue}`;
        }
      }
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: processedValue
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validation
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!acceptTerms) newErrors.terms = 'Please accept the terms and conditions';
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      // Simulate API call
      setTimeout(() => {
        console.log('Sign up attempt:', formData);
        setIsLoading(false);
        navigate('/verify');
      }, 2000);
    } else {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald/5 via-jade/5 to-gold/5">
      {/* Mobile-first container */}
      <div className="min-h-screen flex flex-col">
        {/* Header with back button */}
        <div className="flex items-center justify-between p-4 md:p-6">
          <Link 
            to="/"
            className="flex items-center space-x-2 text-neutral-muted-grey hover:text-graphite transition-colors"
          >
            <FaArrowLeft className="text-sm" />
            <span className="text-sm">Back</span>
          </Link>
          
          <Link 
            to="/login"
            className="text-sm text-emerald hover:text-jade font-medium transition-colors"
          >
            Sign In
          </Link>
        </div>

        {/* Main content */}
        <div className="flex-1 flex items-center justify-center px-4 py-6">
          <div className="w-full max-w-md">
            {/* Logo and welcome */}
            <div className="text-center mb-6 md:mb-8">
              <div className="flex justify-center mb-4">
                <img src="/icon.png" alt="NairaTrack Logo" className="w-14 h-14 md:w-16 md:h-16" />
              </div>
              <h1 className="text-xl md:text-2xl font-bold text-graphite mb-2">
                Create your account
              </h1>
              <p className="text-neutral-muted-grey text-sm md:text-base">
                Start your journey to financial freedom
              </p>
            </div>

            {/* Sign Up form */}
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <Input
                    label="First Name"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    error={errors.firstName}
                    required
                    className="text-sm md:text-base py-3"
                  />
                  <Input
                    label="Last Name"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                    error={errors.lastName}
                    required
                    className="text-sm md:text-base py-3"
                  />
                </div>

                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  error={errors.email}
                  required
                  className="text-sm md:text-base py-3"
                />

                <Input
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+234 XXX XXX XXXX"
                  error={errors.phone}
                  required
                  className="text-sm md:text-base py-3"
                />

                <div className="relative">
                  <Input
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Create a strong password"
                    error={errors.password}
                    required
                    className="text-sm md:text-base py-3 pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-[38px] text-neutral-muted-grey hover:text-graphite transition-colors z-10"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                <div className="relative">
                  <Input
                    label="Confirm Password"
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                    error={errors.confirmPassword}
                    required
                    className="text-sm md:text-base py-3 pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-[38px] text-neutral-muted-grey hover:text-graphite transition-colors z-10"
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-2">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <div className="relative flex-shrink-0 mt-1">
                      <input
                        type="checkbox"
                        checked={acceptTerms}
                        onChange={(e) => setAcceptTerms(e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                        acceptTerms ? 'bg-emerald border-emerald' : 'border-neutral-light-grey'
                      }`}>
                        {acceptTerms && <FaCheck className="text-white text-xs" />}
                      </div>
                    </div>
                    <span className="text-xs md:text-sm text-graphite leading-relaxed">
                      I agree to NairaTrack's{' '}
                      <Link to="/terms" className="text-emerald hover:text-jade transition-colors">Terms of Service</Link>{' '}
                      and{' '}
                      <Link to="/privacy" className="text-emerald hover:text-jade transition-colors">Privacy Policy</Link>
                    </span>
                  </label>
                  {errors.terms && (
                    <p className="text-error text-xs">{errors.terms}</p>
                  )}
                </div>

                {/* Create account button */}
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="large" 
                    fullWidth
                    loading={isLoading}
                    className="text-base md:text-lg py-4"
                  >
                    {isLoading ? 'Creating Account...' : 'Create Account'}
                  </Button>
                </div>
              </form>

              {/* Login Link */}
              <div className="text-center mt-6">
                <p className="text-neutral-muted-grey text-sm md:text-base">
                  Already have an account?{' '}
                  <Link to="/login" className="text-emerald hover:text-jade font-semibold transition-colors">
                    Sign In
                  </Link>
                </p>
              </div>
            </div>

            {/* Security Note */}
            <div className="text-center mt-6 space-y-2">
              <p className="flex items-center justify-center space-x-2 text-xs text-neutral-muted-grey">
                <span>🔒</span>
                <span>Your data is secured with bank-level encryption</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;