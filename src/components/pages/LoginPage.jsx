import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { FaEye, FaEyeSlash, FaArrowLeft, FaLock } from 'react-icons/fa';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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
    
    // Basic validation
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      // Simulate API call
      setTimeout(() => {
        console.log('Login attempt:', formData);
        setIsLoading(false);
        navigate('/dashboard');
      }, 2000);
    } else {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-emerald/5 via-jade/5 to-gold/5 overflow-hidden">
      {/* Mobile-first container */}
      <div className="h-full flex flex-col">
        {/* Header with back button */}
        <div className="flex items-center justify-between p-2 md:p-3 flex-shrink-0">
          <Link 
            to="/"
            className="flex items-center space-x-1 text-neutral-muted-grey hover:text-graphite transition-colors"
          >
            <FaArrowLeft className="text-xs" />
            <span className="text-xs">Back</span>
          </Link>
          
          <Link 
            to="/signup"
            className="text-xs text-emerald hover:text-jade font-medium transition-colors"
          >
            Create Account
          </Link>
        </div>

        {/* Main content */}
        <div className="flex-1 flex items-center justify-center px-4 py-1 min-h-0">
          <div className="w-full max-w-md">
            {/* Logo and welcome */}
            <div className="text-center mb-3">
              <div className="flex justify-center mb-2">
                <img src="/icon.png" alt="NairaTrack Logo" className="w-10 h-10 md:w-12 md:h-12" />
              </div>
              <h1 className="text-lg md:text-xl font-bold text-graphite mb-1">
                Welcome back
              </h1>
              <p className="text-neutral-muted-grey text-sm">
                Sign in to your NairaTrack account
              </p>
            </div>

            {/* Login form */}
            <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-4 md:p-5">
              <form onSubmit={handleSubmit} className="space-y-3">  
                {/* Email field */}
                <div>
                  <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    error={errors.email}
                    required
                    className="text-sm py-2.5"
                  />
                </div>

                {/* Password field */}
                <div className="relative">
                  <Input
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    error={errors.password}
                    required
                    className="text-sm py-2.5 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-8 text-neutral-muted-grey hover:text-graphite transition-colors z-10"
                  >
                    {showPassword ? <FaEyeSlash className="text-sm" /> : <FaEye className="text-sm" />}
                  </button>
                </div>

                {/* Remember me & Forgot password */}
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-emerald border border-neutral-light-grey rounded focus:ring-jade"
                    />
                    <span className="ml-2 text-graphite">Remember me</span>
                  </label>
                  <Link 
                    to="/forgot-password" 
                    className="text-emerald hover:text-jade transition-colors font-medium"
                  >
                    Forgot Password?
                  </Link>
                </div>

                {/* Login button */}
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="large" 
                    fullWidth
                    loading={isLoading}
                    className="text-sm py-2.5"
                  >
                    {isLoading ? 'Signing in...' : 'Sign In'}
                  </Button>
                </div>
              </form>

              {/* Sign up link */}
              <div className="text-center mt-4">
                <p className="text-neutral-muted-grey text-sm">
                  Don't have an account?{' '}
                  <Link to="/signup" className="text-emerald hover:text-jade font-semibold transition-colors">
                    Create one free
                  </Link>
                </p>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="text-center mt-3">
              <p className="flex items-center justify-center space-x-2 text-xs text-neutral-muted-grey">
                <FaLock className="text-xs" />
                <span>Bank-level security</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;